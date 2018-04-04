package com.tomtom.gwt.mapbox.gl.client.api.geo;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * A LngLat object represents a given longitude and latitude coordinate, measured in degrees.
 * Mapbox GL uses longitude, latitude coordinate order (as opposed to latitude, longitude) to match GeoJSON.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglat
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class LngLat {

    public LngLat(double lng, double lat) {
    }
    
    /**
     * Converts an array of two numbers to a LngLat object.
     * @param input An array of two numbers to convert.
     * @return A new  LngLat object.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglat.convert
     */
    public native static LngLat convert(double[] input);
    
    /**
     * @return The latitude property.
     */
    @JsProperty
    public native double getLat();
    
    /**
     * @return The longitude property.
     */
    @JsProperty
    public native double getLng();
    
    /**
     * Returns a new LngLat object whose longitude is wrapped to the range (-180, 180).
     * @return The wrapped  LngLat object.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglat#wrap
     */
    public native LngLat wrap();
    
    /**
     * Returns a LngLatBounds from the coordinates extended by a given radius.
     * @param radius Distance in meters from the coordinates to extend the bounds.
     * @return A new  LngLatBounds object representing the coordinates extended by the radius.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglat#tobounds
     */
    public native LngLatBounds toBounds(double radius);
    
    /**
     * Returns the coordinates represented as an array of two numbers.
     * @return The coordinates represeted as an array of longitude and latitude.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglat#toarray
     */
    public native double[] toArray();
   
    /**
     * Returns the coordinates represent as a string.
     * @return The coordinates represented as a string of the format  'LngLat(lng, lat)' .
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglat#tostring
     */
    @Override
    public native String toString();
}
