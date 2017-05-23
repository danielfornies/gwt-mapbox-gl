package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Options for the map.addImage method.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#map#addimage
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class ImageOptions {
    
    private ImageOptions() {
    }
    
    @JsOverlay
    public static ImageOptions build(int pixelRatio) {
        ImageOptions options = new ImageOptions();
        options.setPixelRatio(pixelRatio);
        return options;
    }
    
    @JsProperty
    private native void setPixelRatio(int pixelRatio);
}
