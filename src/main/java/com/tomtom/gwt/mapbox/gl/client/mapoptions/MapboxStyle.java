package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import com.tomtom.gwt.mapbox.gl.client.layers.MapLayer;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class MapboxStyle {
    
    @JsOverlay
    private static final int MAPBOX_STYLE_VERSION = 8;
    
    private MapboxStyle() {
    }
    
    @JsOverlay
    public static MapboxStyle build(String name, Object sources, MapLayer[] layers, String sprite, String glyphs) {
        MapboxStyle style = new MapboxStyle();
        style.setVersion(MAPBOX_STYLE_VERSION);
        style.setName(name);
        style.setSources(sources);
        style.setLayers(layers);
        style.setSprite(sprite);
        style.setGlyphs(glyphs);
        return style;
    }
    
    @JsProperty
    private native void setVersion(int value);
    
    @JsProperty
    private native void setName(String value);
    
    // TODO: create generic type for these:
    @JsProperty
    private native void setSources(Object sources);
    
    @JsProperty
    private native void setLayers(MapLayer[] layers);
    
    @JsProperty
    private native void setSprite(String sprite);
    
    @JsProperty
    private native void setGlyphs(String glyphs);
}
