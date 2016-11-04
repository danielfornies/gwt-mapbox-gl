package com.tomtom.gwt.mapbox.gl.client.mapsources;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * 
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class RasterTiledMapSource extends AbstractTiledMapSource {
    
    private RasterTiledMapSource() {
    }
    
    @JsOverlay
    public final static RasterTiledMapSource build(String[] tiles, int minZoom, int maxZoom, int tileSizePx) {
        RasterTiledMapSource mapSource = new RasterTiledMapSource();
        mapSource.init("raster", tiles, minZoom, maxZoom);
        mapSource.setTileSize(tileSizePx);
        return mapSource;
    }
    
    @JsProperty
    public native int getTileSize();
    
    @JsProperty
    private native void setTileSize(int value);
}
