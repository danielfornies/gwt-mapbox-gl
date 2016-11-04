package com.tomtom.gwt.mapbox.gl.client;

import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * 
 */
@JsType(isNative = true)
public class Point {
    
    public Point(int x, int y) {
    }
    
    @JsProperty
    public native int getX();
    
    @JsProperty
    public native int getY();
}
