package com.tomtom.gwt.mapbox.gl.client.api.overlay;

import com.google.gwt.dom.client.Element;
import com.google.gwt.user.client.ui.Widget;
import com.tomtom.gwt.mapbox.gl.client.api.geo.Point;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import com.tomtom.gwt.mapbox.gl.client.api.overlay.util.OffsetCalculator;

/**
 * @param <W>
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Marker
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class Marker<W extends Widget> extends AbstractOverlay<W> {
    
    /*
     * Native constructor.
     */
    private Marker(MarkerOptions options) {
    }
    
    @JsOverlay
    public static <W extends Widget> Marker<W> buildWithSize(W widget, int widthPx, int heightPx, Alignment alignment) {
        return build(MarkerOptions.build(widget.getElement(), OffsetCalculator.toOffsetPx(widthPx, heightPx, alignment))).withWidget(widget, widget.getElement());
    }
    
    @JsOverlay
    public static <W extends Widget> Marker<W> build(MarkerOptions options) {
        return new Marker(options);
    }
    
    @JsOverlay
    public static <W extends Widget> Marker<W> build(W widget, String wrapperElementClassName) {
        return build(widget, wrapperElementClassName, null);
    }

    @JsOverlay
    public static <W extends Widget> Marker<W> build(W widget, String wrapperElementClassName, String title) {
        // we use a wrapper element to allow for dragging if necessary:
        Element wrapperElement = createWrapper(widget, wrapperElementClassName);
        wrapperElement.setTitle(title);
        return (Marker)new Marker(MarkerOptions.build(wrapperElement, null)).withWidget(widget, wrapperElement);
    }
    
    public native Element getElement();

    public native Marker setPopup(Popup popup);

    public native Popup getPopup();

    public native Marker togglePopup();

    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static class MarkerOptions {

        private MarkerOptions() {
        }

        @JsOverlay
        public static MarkerOptions build(Element element, Point offset) {
            MarkerOptions markerOptions = new MarkerOptions();
            if (element != null) {
                markerOptions.setElement(element);
            }
            if (offset != null) {
                markerOptions.setOffset(offset);
            
            }
            return markerOptions;
        }
        
        @JsProperty
        private native void setElement(Element element);

        @JsProperty
        private native void setOffset(Point offset);
    }
}
