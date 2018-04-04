package com.tomtom.gwt.mapbox.gl.client.api.handlers;

import com.tomtom.gwt.mapbox.gl.client.api.MapboxMap;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsType;

/**
 * The KeyboardHandler allows the user to zoom, rotate, and pan the map using the following keyboard shortcuts:
 * = / +: Increase the zoom level by 1.
 * Shift-= / Shift-+: Increase the zoom level by 2.
 * -: Decrease the zoom level by 1.
 * Shift--: Decrease the zoom level by 2.
 * Arrow keys: Pan by 100 pixels.
 * Shift+⇢: Increase the rotation by 15 degrees.
 * Shift+⇠: Decrease the rotation by 15 degrees.
 * Shift+⇡: Increase the pitch by 10 degrees.
 * Shift+⇣: Decrease the pitch by 10 degrees.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#KeyboardHandler
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class KeyboardHandler extends AbstractHandler {
    
    public KeyboardHandler(MapboxMap map) {
    }
}
