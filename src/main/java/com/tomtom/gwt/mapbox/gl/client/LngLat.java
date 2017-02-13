package com.tomtom.gwt.mapbox.gl.client;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * A LngLat object represents a given longitude and latitude coordinate, measured in degrees.
 * Mapbox GL uses longitude, latitude coordinate order (as opposed to latitude, longitude) to match GeoJSON.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#LngLat
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class LngLat {

    public LngLat(double lng, double lat) {
    }
    
    @JsProperty
    public native double getLat();
    
    @JsProperty
    public native double getLng();
}
