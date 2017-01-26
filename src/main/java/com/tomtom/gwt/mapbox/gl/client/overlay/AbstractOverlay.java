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
        JSUtils.log("AbstractOverlay.addTo");
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
    protected final <T extends AbstractOverlay> T withWidget(W widget) {
        this.widget = widget;
        return (T) this;
    }

    @Override
    @JsOverlay
    public final W getWidget() {
        return widget;
    }
    
    @JsOverlay
    public final boolean isDraggable() {
        if (draggable == null) {
            draggable = false;
        }
        return draggable;
    }
    
    @JsOverlay
    public final <T extends AbstractOverlay> T makeDraggable(boolean draggable) {
        JSUtils.log("WidgetMarker.makeDraggable");
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
            // TODO:unregister event listener (DOM stuff)?
        }
        return (T)this;
    }
    
    @JsOverlay
    public final void setDragHandler(OverlayDragHandler dragHandler) {
        this.dragHandler = dragHandler;
    }
    
    @JsOverlay
    private void initDragEvents() {
        if (widget == null) {
            return;
        }
        JSUtils.log("Marker.initDragEvents " + widget.getElement().getId());
        Element element = widget.getElement();
        DOM.sinkEvents(element, Event.ONMOUSEDOWN);
        // TODO: check if this doesn't screw other listeners:
        DOM.setEventListener(element, (Event event) -> {
            switch (event.getTypeInt()) {
                case Event.ONMOUSEDOWN:
                    JSUtils.log("Marker.ONMOUSEDOWN");
                    event.stopPropagation();
                    holdingMouseDown = true;
                    map.on(MapEventType.mousemove, mouseMoveHandler);
                    map.on(MapEventType.mouseup, mouseUpHandler);
                    map.getDragPan().disable();
                    break;
            }
        });
    }

    private final class MapMouseMoveHandler implements MapboxEventListener<MapMouseEvent> {

        @Override
        public void handleEvent(MapMouseEvent eventData) {
            if (holdingMouseDown) {
                JSUtils.log("Marker.MOUSEMOVE");
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
            JSUtils.log("Marker.MOUSEUP");
            holdingMouseDown = false;
            map.off(MapEventType.mousemove, mouseMoveHandler);
            map.off(MapEventType.mouseup, mouseUpHandler);
            map.getDragPan().enable();
        }
    }
}
