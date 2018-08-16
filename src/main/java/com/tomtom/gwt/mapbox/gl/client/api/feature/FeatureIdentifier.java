package com.tomtom.gwt.mapbox.gl.client.api.feature;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Base interface for a feature identifier.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#map#setfeaturestate
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface FeatureIdentifier {
    
    /**
     * @return Unique id of the feature. Should be numeric without decimals.
     */
    @JsProperty
    Double getId();
    
    /**
     * @return The Id of the vector source or GeoJSON source for the feature.
     */
    @JsProperty
    String getSource();
    
    /**
     * (optional) For vector tile sources, the sourceLayer is required.
     * @return The ID of the source layer in the vector tiles.
     */
    @JsProperty
    String getSourceLayer();
}
