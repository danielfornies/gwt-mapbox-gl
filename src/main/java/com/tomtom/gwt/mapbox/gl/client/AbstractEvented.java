package com.tomtom.gwt.mapbox.gl.client;

import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Evented
 */
@JsType(isNative = true)
public abstract class AbstractEvented {
    
    public native AbstractEvented on(String type, MapboxEventListener listener);
    
    public native AbstractEvented off(String type, MapboxEventListener listener);
    
    public native AbstractEvented once(String type, MapboxEventListener listener);
    
    public native AbstractEvented fire(String type, Object data);
    
    public native boolean listens(String type);
}
