package com.tomtom.gwt.mapbox.gl.client.handlers;

import com.tomtom.gwt.mapbox.gl.client.MapboxMap;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsType;

/**
 * The ScrollZoomHandler allows the user to zoom the map by scrolling.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#ScrollZoomHandler
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class ScrollZoomHandler extends AbstractHandler {
    
    public ScrollZoomHandler(MapboxMap map) {
    }
}
