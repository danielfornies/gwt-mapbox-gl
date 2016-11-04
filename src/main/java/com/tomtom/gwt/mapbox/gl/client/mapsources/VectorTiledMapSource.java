package com.tomtom.gwt.mapbox.gl.client.mapsources;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 *
 * 
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class VectorTiledMapSource extends AbstractTiledMapSource {
    
    private VectorTiledMapSource() {
    }
    
    @JsOverlay
    public static VectorTiledMapSource build(String[] tiles, int minZoom, int maxZoom) {
        VectorTiledMapSource mapSource = new VectorTiledMapSource();
        mapSource.init("vector", tiles, minZoom, maxZoom);
        return mapSource;
    }
}
