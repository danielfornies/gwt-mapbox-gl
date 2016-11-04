package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import com.tomtom.gwt.mapbox.gl.client.layers.MapLayer;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.MapOptions.BaseMapSources;
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
    public static MapboxStyle buid(String name, BaseMapSources sources, MapLayer[] layers) {
        MapboxStyle style = new MapboxStyle();
        style.setVersion(MAPBOX_STYLE_VERSION);
        style.setName(name);
        style.setSources(sources);
        style.setLayers(layers);
        
        return style;
    }
    
    @JsProperty
    private native void setVersion(int value);
    
    @JsProperty
    private native void setName(String value);
    
    // TODO: create generic type for these:
    @JsProperty
    private native void setSources(BaseMapSources sources);
    
    @JsProperty
    private native void setLayers(MapLayer[] layers);
}
