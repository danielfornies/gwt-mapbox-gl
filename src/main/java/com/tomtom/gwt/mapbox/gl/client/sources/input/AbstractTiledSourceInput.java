package com.tomtom.gwt.mapbox.gl.client.sources.input;

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
public abstract class AbstractTiledSourceInput extends AbstractSourceInput {
    
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
