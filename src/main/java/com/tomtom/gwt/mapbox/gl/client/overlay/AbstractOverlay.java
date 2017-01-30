package com.tomtom.gwt.mapbox.gl.client.overlay;

import com.google.gwt.dom.client.Element;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.ui.Widget;
import com.tomtom.gwt.mapbox.gl.client.LngLat;
import com.tomtom.gwt.mapbox.gl.client.MapboxMap;
import com.tomtom.gwt.mapbox.gl.client.events.MapEventType;
import com.tomtom.gwt.mapbox.gl.client.events.MapMouseEvent;
import com.tomtom.gwt.mapbox.gl.client.events.MapboxEventListener;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * @param <W>
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Overlays
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public abstract class AbstractOverlay<W extends Widget> implements HasWidget<W> {

    private W widget;
    // The wrapper element, which might not be the actual Widget element, is used to safely attach event listeners for dragging, if necessary.
    private Element wrapperElement;
    private MapboxMap map;
    private Boolean draggable;
    private OverlayDragHandler dragHandler;
    private boolean holdingMouseDown;
    private MapMouseMoveHandler mouseMoveHandler;
    private MapMouseUpHandler mouseUpHandler;

    protected AbstractOverlay() {
    }

    @JsOverlay
    public final void addTo(MapboxMap map) {
        addToNative(map);
        this.map = map;
        if (isDraggable()) {
            initDragEvents();
        }
    }

    @JsMethod(name = "addTo")
    private native <T extends AbstractOverlay> T addToNative(MapboxMap map);

    public native <T extends AbstractOverlay> T remove();

    public native LngLat getLngLat();

    public native <T extends AbstractOverlay> T setLngLat(LngLat lnglat);

    @JsOverlay
    protected final <T extends AbstractOverlay> T withWidget(W widget, Element wrapperElement) {
        this.widget = widget;
        this.wrapperElement = wrapperElement;
        return (T) this;
    }
    
    /**
     * Creates a wrapper element for the given widget. The wrapper will contain the widget's element as a single child.
     * @param widget The widget from which to create a wrapper element.
     * @param baseClassName Base class name to apply to the wrapping Element. Useful if we need to ensure properties such as z-index are applied here as well.
     * @return 
     */
    @JsOverlay
    protected static final Element createWrapper(Widget widget, String baseClassName) {
        Element wrapperElement = DOM.createDiv();
        wrapperElement.appendChild(widget.getElement());
        if (baseClassName != null) {
            wrapperElement.addClassName(baseClassName);
        }
        return wrapperElement;
    }

    @Override
    @JsOverlay
    public final W getWidget() {
        return widget;
    }
    
    /**
     * @return Whether this overlay is draggable.
     */
    @JsOverlay
    public final boolean isDraggable() {
        if (draggable == null) {
            draggable = false;
        }
        return draggable;
    }
    
    /**
     * Makes this overlay draggable.
     * @param <T> The sub-type of this overlay class.
     * @param draggable Whether to make it draggable. Defaults to false.
     * @return this.
     */
    @JsOverlay
    public final <T extends AbstractOverlay> T makeDraggable(boolean draggable) {
        this.draggable = draggable;
        if (draggable) {
            mouseMoveHandler = new MapMouseMoveHandler();
            mouseUpHandler = new MapMouseUpHandler();
            if (map != null) {
                initDragEvents();
            }
        } else {
            mouseMoveHandler = null;
            mouseUpHandler = null;
            DOM.setEventListener(wrapperElement, null);
        }
        return (T)this;
    }
    
    /**
     * Sets the external drag handler for this overlay.
     * If the ovelay is not draggable, no events will be fired.
     * @param dragHandler The drag handler to set. Can be null. Defaults to null.
     */
    @JsOverlay
    public final void setDragHandler(OverlayDragHandler dragHandler) {
        this.dragHandler = dragHandler;
    }
    
    @JsOverlay
    private void initDragEvents() {
        if (wrapperElement == null) {
            return;
        }
        DOM.sinkEvents(wrapperElement, Event.ONMOUSEDOWN);
        DOM.setEventListener(wrapperElement, (Event event) -> {
            switch (event.getTypeInt()) {
                case Event.ONMOUSEDOWN:
                    event.stopPropagation();
                    map.getDragPan().disable();
                    holdingMouseDown = true;
                    map.on(MapEventType.mousemove, mouseMoveHandler);
                    map.on(MapEventType.mouseup, mouseUpHandler);
                    break;
            }
        });
    }
    
    private final class MapMouseMoveHandler implements MapboxEventListener<MapMouseEvent> {

        @Override
        public void handleEvent(MapMouseEvent eventData) {
            if (holdingMouseDown) {
                setLngLat(eventData.getLngLat());
                if (dragHandler != null) {
                    dragHandler.onOverlayDragged(AbstractOverlay.this, eventData);
                }
            }
        }
    }

    private final class MapMouseUpHandler implements MapboxEventListener<MapMouseEvent> {

        @Override
        public void handleEvent(MapMouseEvent eventData) {
            holdingMouseDown = false;
            map.off(MapEventType.mousemove, mouseMoveHandler);
            map.off(MapEventType.mouseup, mouseUpHandler);
            map.getDragPan().enable();
        }
    }
}
