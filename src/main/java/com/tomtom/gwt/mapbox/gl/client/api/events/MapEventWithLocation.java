package com.tomtom.gwt.mapbox.gl.client.api.events;

import com.tomtom.gwt.mapbox.gl.client.api.LngLat;
import com.tomtom.gwt.mapbox.gl.client.api.MapboxMap;
import com.tomtom.gwt.mapbox.gl.client.api.Point;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Parent event class to mouse-touch events with points and coordinates.
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface MapEventWithLocation extends BaseEvent {
      
    /**
     * @return The event type. 
     */
    @JsProperty
    String getType();
    
    /**
     * @return The MapboxMap object that fired the event.
     */
    @JsProperty
    MapboxMap getTarget();
    
    /**
     * @return The pixel coordinates of the event target, relative to the map and measured from the top left corner. 
     */
    @JsProperty
    Point getPoint();
    
    /**
     * @return The geographic location on the map of the mouse event target. 
     */
    @JsProperty
    LngLat getLngLat();
}
