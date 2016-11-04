package com.tomtom.gwt.mapbox.gl.client.mapsources;

import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * 
 */
@JsType(isNative = true)
public abstract class AbstractMapSource {
    
    @JsProperty
    public native String getType();
    
    @JsProperty
    protected native void setType(String value);
}
