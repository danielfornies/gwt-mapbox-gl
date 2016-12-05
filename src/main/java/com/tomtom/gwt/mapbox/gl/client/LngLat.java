package com.tomtom.gwt.mapbox.gl.client;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 *
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
