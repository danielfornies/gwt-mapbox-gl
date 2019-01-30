package com.tomtom.gwt.mapbox.gl.client.api.feature;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Read-only properties of a feature clustered by Mapbox GL, typically via a GeoJSONSource.
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface ClusteredFeatureProperties {
    
    @JsProperty
    Boolean getCluster();
    
    @JsProperty(name = "cluster_id")
    Double getClusterId();
    
    @JsProperty(name = "point_count")
    Double getPointCount();
    
    @JsProperty(name = "point_count_abbreviated")
    Double getPointCountAbbreviated();
}
