package com.tomtom.gwt.mapbox.gl.client.api.handlers;

import com.tomtom.gwt.mapbox.gl.client.api.MapboxMap;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsType;

/**
 * The DoubleClickZoomHandler allows the user to zoom the map at a point by double clicking.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#DoubleClickZoomHandler
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class DoubleClickZoomHandler extends AbstractHandler {
    
    public DoubleClickZoomHandler(MapboxMap map) {
    }
}
