package com.tomtom.gwt.mapbox.gl.client.sources;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsType;

/**
 * A source containing GeoJSON.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#GeoJSONSource
 */
@JsType(isNative = true, name = "GeoJSONSource", namespace = MAPBOX_GL_NAMESPACE)
public interface GeoJsonSource extends MapSource {
    
    /**
     * Sets the GeoJSON data and re-renders the map.
     * @param data ((Object | string)) A GeoJSON data object or a URL to one. The latter is preferable in the case of large GeoJSON files.
     * @return this
     * @see https://www.mapbox.com/mapbox-gl-js/api/#GeoJSONSource#setData
     */
    GeoJsonSource setData(Object data);
}
