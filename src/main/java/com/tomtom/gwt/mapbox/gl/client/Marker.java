package com.tomtom.gwt.mapbox.gl.client;

import com.google.gwt.dom.client.Element;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * 
 */
@JsType(isNative = true)
public class Marker {

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
    
    public native void addTo(MapboxMap map);

    public native void remove();
    
    public native LngLat getLngLat();
    
    public native void setLngLat(LngLat lnglat);
}
