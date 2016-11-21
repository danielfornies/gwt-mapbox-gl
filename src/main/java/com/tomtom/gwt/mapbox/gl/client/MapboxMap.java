package com.tomtom.gwt.mapbox.gl.client;

import com.tomtom.gwt.mapbox.gl.client.layers.MapLayer;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.FitBoundsOptions;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.FlyToOptions;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.MapOptions;
import com.tomtom.gwt.mapbox.gl.client.mapsources.AbstractMapSource;
import java.util.Collection;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsType;

/**
 * https://www.mapbox.com/mapbox-gl-js/api/#Map
 */
@JsType(isNative = true, name = "Map")
public class MapboxMap extends AbstractEvented {

//    @JsProperty
//    public static void setAccessToken(String accessToken) {
//        // TODO
//    }
//    
    public MapboxMap(MapOptions options) {
    }
    
    public native <T extends AbstractMapSource> T getSource(String id);
    
    public native MapboxMap addSource(String id, AbstractMapSource source);

    public native MapboxMap removeSource(String id);
    
    @JsOverlay
    public final MapboxMap addLayers(Collection<MapLayer> layers, MapLayer before) {
        layers.forEach((layer) -> {
            addLayer(layer, before);
        });
        return this;
    }

    @JsOverlay
    public final MapboxMap addLayer(MapLayer layer) {
        return addLayer(layer, (String) null);
    }

    @JsOverlay
    public final MapboxMap addLayer(MapLayer layer, MapLayer before) {
        String beforeId = before != null ? before.getId() : null;
        return addLayer(layer, beforeId);
    }

    public native MapboxMap addLayer(MapLayer layer, String before);

    @JsOverlay
    public final MapboxMap removeLayers(Collection<MapLayer> layers) {
        layers.forEach((layer) -> {
            removeLayer(layer);
        });
        return this;
    }

    @JsOverlay
    public final MapboxMap removeLayer(MapLayer layer) {
        if (layer != null) {
            try {
                removeLayer(layer.getId());
            } catch (Throwable t) {
                // does nothing
            }
        }
        return this;
    }

    public native MapboxMap removeLayer(String id);

    public native double getZoom();

    public native MapboxMap setZoom(int zoom);

    public native LngLat getCenter();

    public native void setCenter(LngLat center);

    public native LngLatBounds getBounds();

    public native MapboxMap fitBounds(LngLatBounds bounds, FitBoundsOptions options);

    public native MapboxMap panTo(LngLat lngLat);

    public native MapboxMap flyTo(FlyToOptions options);

    // TODO: all map methods
    //public native MapboxMap flyTo()
}

//        var tomtomMap = {
//        "version": 8,
//        "sources": {
//            "base-tiles-source": {
//                "type": "raster",
//                "tileSize": 512,
//                "tiles": ["https://a-mydrive.api-system.tomtom.com/map/1/tile/basic/main/{z}/{x}/{y}.png?key=GYPgtCIZpGd4Zbyjg6nDzGYGvO8HXJ4t&tileSize=512",
//                            "https://b-mydrive.api-system.tomtom.com/map/1/tile/basic/main/{z}/{x}/{y}.png?key=GYPgtCIZpGd4Zbyjg6nDzGYGvO8HXJ4t&tileSize=512",
//                            "https://c-mydrive.api-system.tomtom.com/map/1/tile/basic/main/{z}/{x}/{y}.png?key=GYPgtCIZpGd4Zbyjg6nDzGYGvO8HXJ4t&tileSize=512",
//                            "https://d-mydrive.api-system.tomtom.com/map/1/tile/basic/main/{z}/{x}/{y}.png?key=GYPgtCIZpGd4Zbyjg6nDzGYGvO8HXJ4t&tileSize=512"]
//            },
//            "traffic-tiles-source": {
//                "type": "raster",
//                "tileSize": 256,
//                "tiles": ["https://a.api.tomtom.com/lbs/map/3/traffic/s2/{z}/{x}/{y}.png?key=w7wd5devk7b9ejxfpx5jct48",
//                            "https://b.api.tomtom.com/lbs/map/3/traffic/s2/{z}/{x}/{y}.png?key=w7wd5devk7b9ejxfpx5jct48",
//                            "https://c.api.tomtom.com/lbs/map/3/traffic/s2/{z}/{x}/{y}.png?key=w7wd5devk7b9ejxfpx5jct48",
//                            "https://d.api.tomtom.com/lbs/map/3/traffic/s2/{z}/{x}/{y}.png?key=w7wd5devk7b9ejxfpx5jct48"]
//            }
//        },
//        "layers": [
//            {
//                "id": "base-layer",
//                "type": "raster",
//                "source": "base-tiles-source"
//            },
//            {
//                "id": "traffic-layer",
//                "type": "raster",
//                "source": "traffic-tiles-source"
//            }
//        ]
//    };
//
//    var map = new $wnd.mapboxgl.Map({
//        container: 'mapboxContainer',
//        style: tomtomMap,
//        pitch: 0,
//        zoom: 5,
//        center: [13.4454391,47.6620479],
//        maxZoom: 18,
//        minZoom: 2 });
