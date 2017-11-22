package com.tomtom.gwt.mapbox.gl.client.events;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Methods mixed in to other classes for event capabilities.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Evented
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface Evented {
    
    <T extends Evented, E extends BaseEvent> T on(String type, MapboxEventListener<E> listener);
    
    <T extends Evented, E extends BaseEvent> T off(String type, MapboxEventListener<E> listener);
    
    <T extends Evented, E extends BaseEvent> T once(String type, MapboxEventListener<E> listener);
    
    <T extends Evented> T fire(String type, Object data);
    
    boolean listens(String type);
}
