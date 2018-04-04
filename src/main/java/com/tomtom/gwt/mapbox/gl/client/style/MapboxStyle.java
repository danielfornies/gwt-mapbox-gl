package com.tomtom.gwt.mapbox.gl.client.style;

import com.tomtom.gwt.mapbox.gl.client.api.mapoptions.TransitionOptions;
import com.tomtom.gwt.mapbox.gl.client.style.layers.MapLayer;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-style-spec/#root
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class MapboxStyle {
    
    @JsOverlay
    private static final int MAPBOX_STYLE_VERSION = 8;
    
    private MapboxStyle() {
    }
    
    @JsOverlay
    public static MapboxStyle build(String name, Object sources, MapLayer[] layers, String sprite, String glyphs, TransitionOptions transition) {
        MapboxStyle style = new MapboxStyle();
        style.setVersion(MAPBOX_STYLE_VERSION);
        style.setName(name);
        style.setSources(sources);
        style.setLayers(layers);
        if (sprite != null) {
            style.setSprite(sprite);
        }
        if (glyphs != null) {
            style.setGlyphs(glyphs);
        }
        if (transition != null) {
            style.setTransition(transition);
        }
        return style;
    }
    
    @JsProperty
    private native void setVersion(int value);
    
    @JsProperty
    private native void setName(String value);
    
    @JsProperty
    private native void setSources(Object sources);
    
    @JsProperty
    public native Object getSources();
    
    @JsProperty
    private native void setLayers(MapLayer[] layers);
    
    @JsProperty
    private native void setTransition(TransitionOptions transition);
    
    @JsProperty
    private native void setSprite(String sprite);
    
    @JsProperty
    private native void setGlyphs(String glyphs);
}
