package com.tomtom.gwt.mapbox.gl.client.events;

import jsinterop.annotations.JsFunction;

/**
 * Event listener for map events.
 * @param <T> An event subtype.
 */
@FunctionalInterface
@JsFunction
public interface MapboxEventListener<T extends BaseEvent> {
    
    /**
     * Handles the given map event.
     * @param eventData The event data, particular to the event type.
     */
    void handleEvent(T eventData);
}
