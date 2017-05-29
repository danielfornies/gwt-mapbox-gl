package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#StyleOptions
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class StyleOptions {
    
    @JsOverlay
    public static StyleOptions build(boolean transition) {
        StyleOptions options = new StyleOptions();
        options.setTransition(transition);
        return options;
    }
    
    private StyleOptions() {
    }
    
    @JsProperty
    private native void setTransition(boolean transition);
}
