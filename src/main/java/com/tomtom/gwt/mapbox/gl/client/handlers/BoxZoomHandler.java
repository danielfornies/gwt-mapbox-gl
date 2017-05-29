package com.tomtom.gwt.mapbox.gl.client.handlers;

import com.tomtom.gwt.mapbox.gl.client.MapboxMap;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsType;

/**
 * The BoxZoomHandler allows the user to zoom the map to fit within a bounding box. The bounding box is defined by clicking and holding shift while dragging the cursor.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#BoxZoomHandler
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class BoxZoomHandler extends AbstractHandler {
    
    public BoxZoomHandler(MapboxMap map) {
    }
    
    /**
     * Returns a Boolean indicating whether the "box zoom" interaction is active, i.e. currently being used.
     * @return true if the "box zoom" interaction is active.
     */
    public native boolean isActive();
}
