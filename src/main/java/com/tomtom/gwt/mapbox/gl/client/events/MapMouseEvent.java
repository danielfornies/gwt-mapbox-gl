package com.tomtom.gwt.mapbox.gl.client.events;

import com.google.gwt.event.dom.client.MouseEvent;
import com.tomtom.gwt.mapbox.gl.client.LngLat;
import com.tomtom.gwt.mapbox.gl.client.MapboxMap;
import com.tomtom.gwt.mapbox.gl.client.Point;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#MapMouseEvent
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface MapMouseEvent {
    
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
    
    // TODO: check this
    @JsProperty
    MouseEvent getOriginalEvent();
    
    /**
     * @return The pixel coordinates of the mouse event target, relative to the map and measured from the top left corner. 
     */
    @JsProperty
    Point getPoint();
    
    /**
     * @return The geographic location on the map of the mouse event target. 
     */
    @JsProperty
    LngLat getLngLat();
}
