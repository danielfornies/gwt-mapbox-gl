package com.tomtom.gwt.mapbox.gl.client.api.feature;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Read-only properties of a feature clustered by Mapbox GL, typically via a GeoJSONSource.
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface ClusteredFeatureProperties {
    
    @JsOverlay
    String CLUSTER_ID = "cluster_id";
    
    @JsOverlay
    String POINT_COUNT = "point_count";
    
    @JsOverlay
    String POINT_COUNT_ABBREVIATED = "point_count_abbreviated";
    
    @JsProperty
    Boolean getCluster();
    
    @JsProperty(name = CLUSTER_ID)
    Double getClusterId();
    
    @JsProperty(name = POINT_COUNT)
    Double getPointCount();
    
    @JsProperty(name = POINT_COUNT_ABBREVIATED)
    Double getPointCountAbbreviated();
}
