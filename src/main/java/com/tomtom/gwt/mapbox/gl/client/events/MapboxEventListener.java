package com.tomtom.gwt.mapbox.gl.client.events;

import jsinterop.annotations.JsFunction;

/**
 *
 * 
 * @param <T> An event subtype.
 */
@JsFunction
public interface MapboxEventListener<T> {
    
    void handleEvent(T eventData);
}
