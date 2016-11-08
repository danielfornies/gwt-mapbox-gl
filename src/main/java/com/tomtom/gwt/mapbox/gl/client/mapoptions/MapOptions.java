package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import com.tomtom.gwt.mapbox.gl.client.mapsources.AbstractTiledMapSource;
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
public class MapOptions {
    
    // TODO: avoid specific source names in here. Perhaps define in the caller/client and use a generic type for it
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static class TomTomMapSources {

        public AbstractTiledMapSource baseMapTileSource;
        public AbstractTiledMapSource trafficIncidentsTileSource;
        public AbstractTiledMapSource trafficFlowTileSource;
        public AbstractTiledMapSource baseMapLabelsTileSource;
    }
    
    private MapOptions() {
    }

    @JsOverlay
    public static MapOptions build(String containerId, int minZoom, int maxZoom, int zoom, MapboxStyle style, double[] centerCoordinates) {
        MapOptions options = new MapOptions();
        options.setContainer(containerId);
        options.setMinZoom(minZoom);
        options.setMaxZoom(maxZoom);
        options.setZoom(zoom);
        options.setStyle(style);
        options.setCenter(centerCoordinates);
        
        // TODO
        
        return options;
    }
    
    @JsProperty
    private native void setContainer(String value);
    
    @JsProperty
    private native void setMinZoom(int value);
    
    @JsProperty
    private native void setMaxZoom(int value);
    
    @JsProperty
    private native void setZoom(int value);
    
    @JsProperty
    private native void setStyle(MapboxStyle style);
    
    @JsProperty
    private native void setCenter(double[] center);
    
    // TODO
}
