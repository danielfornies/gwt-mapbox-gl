package com.tomtom.gwt.mapbox.gl.client;

import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * 
 */
@JsType(isNative = true)
public class LngLatBounds {
    
    public LngLatBounds(LngLat sw, LngLat ne) {
    }
    
    @JsProperty
    public native LngLat getSw();
    
    @JsProperty
    public native LngLat getNe();
}
