package com.tomtom.gwt.mapbox.gl.client.events;

import com.google.gwt.event.dom.client.TouchEvent;
import com.tomtom.gwt.mapbox.gl.client.LngLat;
import com.tomtom.gwt.mapbox.gl.client.MapboxMap;
import com.tomtom.gwt.mapbox.gl.client.Point;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#MapTouchEvent
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface MapTouchEvent {

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
    TouchEvent getOriginalEvent();

    /**
     * @return The pixel coordinates of the center of the touch event points, relative to the map and measured from the top left corner.
     */
    @JsProperty
    Point getPoint();

    /**
     * @return The geographic location on the map of the center of the touch event points.
     */
    @JsProperty
    LngLat getLngLat();

    /**
     * @return The array of pixel coordinates corresponding to a touch event's touches property.
     */
    @JsProperty
    Point[] getPoints();

    /**
     * @return The geographical locations on the map corresponding to a touch event's touches property.
     */
    @JsProperty
    LngLat[] getLngLats();
}
