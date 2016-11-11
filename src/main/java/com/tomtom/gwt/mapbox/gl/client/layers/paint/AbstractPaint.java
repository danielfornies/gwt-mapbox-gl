package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import jsinterop.annotations.JsType;

/**
 *
 * 
 * 
 */
@JsType(isNative = true)
public abstract class AbstractPaint {
    
    protected AbstractPaint() {
    }
    
    public static enum Anchor {
        map,
        viewport
    }
}
