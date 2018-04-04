package com.tomtom.gwt.mapbox.gl.client.api.events;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Represents an event triggered by the user (mouse-touch related).
 * @param <T> The sub-type for the original event.
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface UserEvent<T> extends BaseEvent {
    
    @JsProperty
    T getOriginalEvent();
}
