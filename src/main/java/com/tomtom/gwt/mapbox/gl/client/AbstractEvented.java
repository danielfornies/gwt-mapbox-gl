package com.tomtom.gwt.mapbox.gl.client;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Convenience native adapter of Evented interface, for java inheritance purposes.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Evented
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public abstract class AbstractEvented implements Evented {
    
    @Override
    public native <T extends Evented> T  on(String type, MapboxEventListener listener);
    
    @Override
    public native <T extends Evented> T  off(String type, MapboxEventListener listener);
    
    @Override
    public native <T extends Evented> T  once(String type, MapboxEventListener listener);
    
    @Override
    public native <T extends Evented> T  fire(String type, Object data);
    
    @Override
    public native boolean listens(String type);
}
