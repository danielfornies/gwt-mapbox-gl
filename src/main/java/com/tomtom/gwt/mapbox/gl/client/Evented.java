package com.tomtom.gwt.mapbox.gl.client;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Evented
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface Evented {
    
    AbstractEvented on(String type, MapboxEventListener listener);
    
    AbstractEvented off(String type, MapboxEventListener listener);
    
    AbstractEvented once(String type, MapboxEventListener listener);
    
    AbstractEvented fire(String type, Object data);
    
    boolean listens(String type);
}
