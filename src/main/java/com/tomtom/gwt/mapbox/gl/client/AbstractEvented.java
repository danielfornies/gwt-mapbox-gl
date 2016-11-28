package com.tomtom.gwt.mapbox.gl.client;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Evented
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public abstract class AbstractEvented {
    
    public native AbstractEvented on(String type, MapboxEventListener listener);
    
    public native AbstractEvented off(String type, MapboxEventListener listener);
    
    public native AbstractEvented once(String type, MapboxEventListener listener);
    
    public native AbstractEvented fire(String type, Object data);
    
    public native boolean listens(String type);
}
