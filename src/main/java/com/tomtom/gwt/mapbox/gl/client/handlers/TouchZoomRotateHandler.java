package com.tomtom.gwt.mapbox.gl.client.handlers;

import com.tomtom.gwt.mapbox.gl.client.MapboxMap;

/**
 * The TouchZoomRotateHandler allows the user to zoom and rotate the map by pinching on a touchscreen.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#TouchZoomRotateHandler
 */
public class TouchZoomRotateHandler extends AbstractHandler {

    public TouchZoomRotateHandler(MapboxMap map) {
    }
    
    /**
     * Disables the "pinch to rotate" interaction, leaving the "pinch to zoom" interaction enabled.
     */
    public native void disableRotation();
    
    /**
     * Enables the "pinch to rotate" interaction.
     */
    public native void enableRotation();
}
