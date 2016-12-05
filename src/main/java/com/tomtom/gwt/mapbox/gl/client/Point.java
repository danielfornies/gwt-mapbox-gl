package com.tomtom.gwt.mapbox.gl.client;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * 
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class Point {
    
    public Point(int x, int y) {
    }
    
    @JsProperty
    public native int getX();
    
    @JsProperty
    public native int getY();
}
