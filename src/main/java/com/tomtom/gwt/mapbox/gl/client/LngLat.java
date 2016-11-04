package com.tomtom.gwt.mapbox.gl.client;

import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 *
 */
@JsType(isNative = true)
public class LngLat {

    public LngLat(double lng, double lat) {
    }
    
    @JsProperty
    public native double getLat();
    
    @JsProperty
    public native double getLng();
}
