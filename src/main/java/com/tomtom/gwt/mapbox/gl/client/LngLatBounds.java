package com.tomtom.gwt.mapbox.gl.client;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsType;

/**
 * A LngLatBounds object represents a geographical bounding box, defined by its southwest and northeast points in longitude and latitude.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#LngLatBounds
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class LngLatBounds {
    
    public LngLatBounds(LngLat sw, LngLat ne) {
    }
    
    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#LngLatBounds#getSouthWest
     * @return 
     */
    public native LngLat getSouthWest();
    
    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#LngLatBounds#getNorthEast
     * @return 
     */
    public native LngLat getNorthEast();
    
    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#LngLatBounds#getNorthWest
     * @return 
     */
    public native LngLat getNorthWest();
    
    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#LngLatBounds#getSouthEast
     * @return 
     */
    public native LngLat getSouthEast();
    
    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#LngLatBounds#getCenter
     * @return 
     */
    public native LngLat getCenter();
    
    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#LngLatBounds#getWest
     * @return 
     */
    public native LngLat getWest();
    
    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#LngLatBounds#getSouth
     * @return 
     */
    public native LngLat getSouth();
    
    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#LngLatBounds#getEast
     * @return 
     */
    public native LngLat getEast();
    
    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#LngLatBounds#getNorth
     * @return 
     */
    public native LngLat getNorth();
    
    @JsOverlay
    public final boolean contains(LngLat coordinates) {
        LngLat sw = getSouthWest();
        LngLat ne = getNorthEast();
        return sw.getLng() <= coordinates.getLng() 
                && sw.getLat() <= coordinates.getLat()
                && ne.getLng() >= coordinates.getLng()
                && ne.getLat() >= coordinates.getLat();
    }
}
