package com.tomtom.gwt.mapbox.gl.client.overlay;

import com.google.gwt.dom.client.Element;
import com.tomtom.gwt.mapbox.gl.client.Point;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import static com.tomtom.gwt.mapbox.gl.client.overlay.Marker.MARKER_CLASS_NAME;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Marker
 */
@JsType(isNative = true, name = MARKER_CLASS_NAME, namespace = MAPBOX_GL_NAMESPACE)
public class Marker extends AbstractOverlay {

    @JsOverlay
    public static final String MARKER_CLASS_NAME = "Marker";
    
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

    public Marker(Element element, MarkerOptions options) {
    }

    public native Marker setPopup(Popup popup);
    
    public native Popup getPopup();
    
    public native Marker togglePopup();
}
