package com.tomtom.gwt.mapbox.gl.client.api.handlers;

import com.tomtom.gwt.mapbox.gl.client.api.MapboxMap;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsType;

/**
 * The DragPanHandler allows the user to pan the map by clicking and dragging the cursor.
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#DragPanHandler
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class DragPanHandler extends AbstractHandler {

    public DragPanHandler(MapboxMap map) {
    }

    /**
     * Returns a Boolean indicating whether the "drag to rotate" interaction is active, i.e. currently being used.
     * @return true if the "drag to rotate" interaction is active.
     */
    public native boolean isActive();
}
