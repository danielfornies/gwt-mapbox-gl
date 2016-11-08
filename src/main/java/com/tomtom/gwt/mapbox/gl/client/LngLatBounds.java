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
    
    @JsProperty
    public native LngLat getSouthWest();
    
    @JsProperty
    public native LngLat getNorthEast();
    
    @JsProperty
    public native LngLat getCenter();
    
    @JsProperty
    public native LngLat getWest();
    
    @JsProperty
    public native LngLat getSouth();
    
    @JsProperty
    public native LngLat getEast();
    
    @JsProperty
    public native LngLat getNorth();
}
