package com.tomtom.gwt.mapbox.gl.client.layers.style;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class ZoomAndValue {
    
    @JsOverlay
    public static final ZoomAndValue build(Integer zoom, Integer value) {
        ZoomAndValue result = new ZoomAndValue();
        if (zoom != null) {
            result.setZoom(zoom);
        }
        if (value != null) {
            result.setValue(value);
        }
        return result;
    }
    
    private ZoomAndValue() {
    }
    
    @JsProperty
    private native void setZoom(int zoom);
    
    @JsProperty
    private native void setValue(int value);
}
