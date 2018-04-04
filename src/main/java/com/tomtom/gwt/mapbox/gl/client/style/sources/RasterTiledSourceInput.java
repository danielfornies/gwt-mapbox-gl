package com.tomtom.gwt.mapbox.gl.client.style.sources;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * A raster tile source. For raster tiles hosted by Mapbox, the "url" value should be of the form mapbox://mapid.
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class RasterTiledSourceInput extends AbstractTiledSourceInput {
    
    private RasterTiledSourceInput() {
    }
    
    @JsOverlay
    public final static RasterTiledSourceInput build(String[] tileURLs, int minZoom, int maxZoom, int tileSizePx) {
        RasterTiledSourceInput mapSource = new RasterTiledSourceInput();
        mapSource.init("raster", tileURLs, minZoom, maxZoom);
        mapSource.setTileSize(tileSizePx);
        return mapSource;
    }
    
    @JsProperty
    public native int getTileSize();
    
    @JsProperty
    private native void setTileSize(int value);
}
