package com.tomtom.gwt.mapbox.gl.client.api.geo;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * A Point geometry object, which has x and y properties representing screen coordinates in pixels.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Point
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class Point {
    
    public Point(int x, int y) {
    }
    
    /**
     * @return The X screen coordinate in pixels.
     */
    @JsProperty
    public native int getX();
    
    /**
     * @return The Y screen coordinate in pixels.
     */
    @JsProperty
    public native int getY();
    
    /**
     * Returns whether these 2 points are equal.
     * Two null points are considered equal.
     * Otherwise, they must both be non-null and have equal x-y values.
     * @param point0 The first point. Might be null.
     * @param point1 The second point. Might be null.
     * @return 
     */
    @JsOverlay
    public static final boolean areEqual(Point point0, Point point1) {
        if (point0 != null) {
            return point1 != null ? point0.getX() == point1.getX() && point1.getX() == point1.getX() : false;
        } else {
            return point1 == null;
        }
    }
}
