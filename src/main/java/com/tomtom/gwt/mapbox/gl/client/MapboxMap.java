package com.tomtom.gwt.mapbox.gl.client;

import com.tomtom.gwt.mapbox.gl.client.layers.MapLayer;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.FitBoundsOptions;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.FlyToOptions;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.MapOptions;
import com.tomtom.gwt.mapbox.gl.client.mapsources.AbstractMapSource;
import jsinterop.annotations.JsType;

/**
 * https://www.mapbox.com/mapbox-gl-js/api/#Map
 */
@JsType(isNative = true, name = "Map")
public class MapboxMap {

    public MapboxMap(MapOptions options) {
    }

    public native MapboxMap panTo(LngLat lngLat);
    
    public native MapboxMap flyTo(FlyToOptions options);
    
    public native MapboxMap fitBounds(LngLatBounds bounds, FitBoundsOptions options);
    
    public native MapboxMap addSource(String id, AbstractMapSource source);
    
    public native MapboxMap addLayer(MapLayer layer);
    
    
    
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