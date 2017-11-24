package com.tomtom.gwt.mapbox.gl.client.events;

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
    public native <T extends Evented, E extends BaseEvent> T  on(String type, MapboxEventListener<E> listener);
    
    @Override
    public native <T extends Evented, E extends BaseEvent> T  off(String type, MapboxEventListener<E> listener);
    
    @Override
    public native <T extends Evented, E extends BaseEvent> T  once(String type, MapboxEventListener<E> listener);
    
    @Override
    public native <T extends Evented> T  fire(String type, Object data);
    
    @Override
    public native boolean listens(String type);
}
