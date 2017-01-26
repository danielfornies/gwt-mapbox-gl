package com.tomtom.gwt.mapbox.gl.client.overlay;

import com.google.gwt.dom.client.Element;
import com.google.gwt.user.client.ui.Widget;
import com.tomtom.gwt.mapbox.gl.client.Point;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import com.tomtom.gwt.mapbox.gl.client.overlay.util.OffsetCalculator;

/**
 * @param <W>
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Marker
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class Marker<W extends Widget> extends AbstractOverlay<W> {
    
    private Marker(Element element, MarkerOptions options) {
    }
    
    @JsOverlay
    public static <W extends Widget> Marker<W> buildWithSize(W widget, int widthPx, int heightPx, Alignment alignment) {
        return build(widget, MarkerOptions.build(OffsetCalculator.toOffsetPx(widthPx, heightPx, alignment)));
    }

    @JsOverlay
    public static <W extends Widget> Marker<W> build(W widget, MarkerOptions options) {
        return (Marker)new Marker(widget.getElement(), options).withWidget(widget);
    }

    public native Marker setPopup(Popup popup);

    public native Popup getPopup();

    public native Marker togglePopup();

    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static class MarkerOptions {

        private MarkerOptions() {
        }

        @JsOverlay
        public static MarkerOptions build(Point offset) {
            MarkerOptions markerOptions = new MarkerOptions();
            markerOptions.setOffset(offset);
            return markerOptions;
        }

        @JsProperty
        private native void setOffset(Point offset);
    }
}
