package com.tomtom.gwt.mapbox.gl.client.api.sources;

import com.google.gwt.dom.client.CanvasElement;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsType;

/**
 * A data source containing the contents of an HTML canvas.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#CanvasSource
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public interface CanvasSource extends ImageSource {
    
    /**
     * @return The HTML  canvas element.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#CanvasSource#getCanvas
     */
    CanvasElement getCanvas();
}
