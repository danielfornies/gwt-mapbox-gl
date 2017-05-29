package com.tomtom.gwt.mapbox.gl.client.sources.input;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Tiled sources (vector and raster) must specify their details in terms of the TileJSON specification.
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#sources
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public abstract class AbstractTiledSourceInput extends AbstractSourceInput {
    
    @JsOverlay
    protected final void init(String type, String[] tileURLs, int minZoom, int maxZoom) {
        setType(type);
        setTiles(tileURLs);
        setMinzoom(minZoom);
        setMaxzoom(maxZoom);
    }
    
    @JsProperty
    public native String[] getTiles();
    
    @JsProperty
    private native void setTiles(String[] tiles);
    
    @JsProperty
    public native int getMinzoom();
    
    @JsProperty
    private native void setMinzoom(int value);
    
    @JsProperty
    public native int getMaxzoom();
    
    @JsProperty
    private native void setMaxzoom(int value);
}
