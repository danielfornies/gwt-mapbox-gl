package com.tomtom.gwt.mapbox.gl.client.api.feature;

import com.tomtom.gwt.geojson.client.Feature;
import com.tomtom.gwt.geojson.client.geometry.Geometry;
import static com.tomtom.gwt.geojson.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * A Mapbox Feature is an extension of a GeoJSON Feature, with extra convenience attributes supported by the Mapbox library, such as numeric IDs for feature-state changes.
 * @param <C> The sub-type of the geometry coordinates.
 * @param <P> The sub-type for the feature properties.
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class MapboxFeature<C, P> extends Feature<C, P> {
    
    private MapboxFeature() {
    }
    
    @JsOverlay
    public static <C, P> MapboxFeature<C, P> build(Geometry<C> geometry, P properties, Double id) {
        MapboxFeature mapboxFeature = new MapboxFeature();
        mapboxFeature.withCoreAttributes(geometry, properties);
        mapboxFeature.setId(id);
        return mapboxFeature;
    }
    
    @JsProperty
    private native void setId(Double id);
    
    @JsProperty
    public native Double getId();
}
