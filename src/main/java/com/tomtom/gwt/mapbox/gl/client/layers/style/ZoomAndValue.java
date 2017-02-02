package com.tomtom.gwt.mapbox.gl.client.layers.style;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Zoom-and-property functions allow the appearance of a map feature to change with both its properties and zoom. 
 * Each stop is an array with two elements, the first is an object with a property input
 * value and a zoom, and the second is a function output value.
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#types-function Zoom-and-property functions
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class ZoomAndValue {

    @JsOverlay
    public static final ZoomAndValue build(Double zoom, Double value) {
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
    private native void setZoom(double zoom);

    @JsProperty
    private native void setValue(double value);
}
