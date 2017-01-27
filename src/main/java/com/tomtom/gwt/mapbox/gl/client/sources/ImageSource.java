package com.tomtom.gwt.mapbox.gl.client.sources;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsType;

/**
 * A data source containing an image.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#ImageSource
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public interface ImageSource extends MapSource {

    /**
     * Sets the image (or extended element)'s coordinates and re-renders the map.
     * @param <T>
     * @param coordinates Four geographical coordinates, represented as arrays of longitude and latitude numbers, which define the corners of the image (or extended source element). 
     * The coordinates start at the top left corner of the image (or extended element) and proceed in clockwise order. They do not have to represent a rectangle.
     * @return this
     * @see https://www.mapbox.com/mapbox-gl-js/api/#ImageSource#setCoordinates
     * @see https://www.mapbox.com/mapbox-gl-js/api/#VideoSource#setCoordinates
     * @see https://www.mapbox.com/mapbox-gl-js/api/#CanvasSource#setCoordinates
     */
    <T extends ImageSource> T setCoordinates(double[][] coordinates);
}
