package com.tomtom.gwt.mapbox.gl.client;

import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#LngLatBounds
 */
@JsType(isNative = true)
public class LngLatBounds {
    
    public LngLatBounds(LngLat sw, LngLat ne) {
    }
    
    public native LngLat getSouthWest();
    
    public native LngLat getNorthEast();
    
    public native LngLat getCenter();
    
    public native LngLat getWest();
    
    public native LngLat getSouth();
    
    public native LngLat getEast();
    
    public native LngLat getNorth();
}
