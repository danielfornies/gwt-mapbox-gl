package com.tomtom.gwt.mapbox.gl.client.api.feature;

import com.tomtom.gwt.geojson.client.Feature;
import com.tomtom.gwt.geojson.client.geometry.Geometry;
import static com.tomtom.gwt.geojson.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * A Mapbox Feature is an extension of a GeoJSON Feature, with extra convenience attributes supported by the Mapbox library (FeatureIdentifier), such as numeric IDs for feature-state changes.
 * @param <C> The sub-type of the geometry coordinates.
 * @param <P> The sub-type for the feature properties.
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class MapboxFeature<C, P> extends Feature<C, P> implements FeatureIdentifier {
    
    private MapboxFeature() {
    }
    
    /**
     * Builds a new MapboxFeature with the given parameters.
     * @param <C> The sub-type of the geometry coordinates. 
     * @param <P> The sub-type for the feature properties.
     * @param geometry The geometry coordinates containing the poin, linestring, multilinestrings, etc for this feature.
     * @param properties The GeoJSON Feature properties.
     * @param id The numeric ID of the feature.
     * @param source The ID of the source where this feature is to be found, typically a GeoJSON/Vector-tiles source.
     * @param sourceLayer )Optional) If coming via vector-tiles the ID of the source layer.
     * @return 
     */
    @JsOverlay
    public static <C, P> MapboxFeature<C, P> build(Geometry<C> geometry, P properties, Double id, String source, String sourceLayer) {
        MapboxFeature mapboxFeature = new MapboxFeature();
        mapboxFeature.withCoreAttributes(geometry, properties);
        mapboxFeature.setId(id);
        mapboxFeature.setSource(source);
        if (sourceLayer != null) {
            mapboxFeature.setSourceLayer(sourceLayer);
        }
        return mapboxFeature;
    }
    
    @JsProperty
    private native void setId(Double id);
    
    @JsProperty
    @Override
    public native Double getId();

    @JsProperty
    @Override
    public native String getSource();
    
    @JsProperty
    private native void setSource(String source);

    @JsProperty
    @Override
    public native String getSourceLayer();
    
    @JsProperty
    private native void setSourceLayer(String sourceLayer);
}
