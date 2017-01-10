package com.tomtom.gwt.mapbox.gl.client.events;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Evented
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface Evented {
    
    <T extends Evented> T on(String type, MapboxEventListener listener);
    
    <T extends Evented> T off(String type, MapboxEventListener listener);
    
    <T extends Evented> T once(String type, MapboxEventListener listener);
    
    <T extends Evented> T fire(String type, Object data);
    
    boolean listens(String type);
}
