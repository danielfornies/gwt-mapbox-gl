package com.tomtom.gwt.mapbox.gl.client.sources.input;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 *
 * 
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class VectorTiledSourceInput extends AbstractTiledSourceInput {
    
    private VectorTiledSourceInput() {
    }
    
    @JsOverlay
    public static VectorTiledSourceInput build(String[] tileURLs, int minZoom, int maxZoom) {
        VectorTiledSourceInput mapSource = new VectorTiledSourceInput();
        mapSource.init("vector", tileURLs, minZoom, maxZoom);
        return mapSource;
    }
}
