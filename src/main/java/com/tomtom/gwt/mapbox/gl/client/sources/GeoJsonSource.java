package com.tomtom.gwt.mapbox.gl.client.sources;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsType;

/**
 *
 * 
 */
@JsType(isNative = true, name = "GeoJSONSource", namespace = MAPBOX_GL_NAMESPACE)
public interface GeoJsonSource extends MapSource {
    
    /**
     * @return 
     * @see https://www.mapbox.com/mapbox-gl-js/api/#GeoJSONSource#setData
     * @param data 
     */
    GeoJsonSource setData(Object data);
}
