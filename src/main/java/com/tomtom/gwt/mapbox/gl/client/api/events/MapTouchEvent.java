package com.tomtom.gwt.mapbox.gl.client.api.events;

import com.google.gwt.event.dom.client.TouchEvent;
import com.tomtom.gwt.mapbox.gl.client.api.geo.LngLat;
import com.tomtom.gwt.mapbox.gl.client.api.geo.Point;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#MapTouchEvent
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface MapTouchEvent extends MapEventWithLocation, UserEvent<TouchEvent> {

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
