package com.tomtom.gwt.mapbox.gl.client.mapsources;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * 
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public abstract class AbstractMapSource {
    
    @JsProperty
    public native String getType();
    
    @JsProperty
    protected native void setType(String value);
}
