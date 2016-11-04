package com.tomtom.gwt.mapbox.gl.client.mapsources;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * 
 */
@JsType(isNative = true)
public abstract class AbstractTiledMapSource extends AbstractMapSource {
    
    @JsOverlay
    protected final void init(String type, String[] tiles, int minZoom, int maxZoom) {
        setType(type);
        setTiles(tiles);
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
