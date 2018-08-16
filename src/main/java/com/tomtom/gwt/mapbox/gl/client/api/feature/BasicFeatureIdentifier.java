package com.tomtom.gwt.mapbox.gl.client.api.feature;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Feature identifier basic implementation, containing only the FeatureIdentifier fields.
 * @see https://www.mapbox.com/mapbox-gl-js/api#map#setfeaturestate
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public final class BasicFeatureIdentifier implements FeatureIdentifier {
    
    private BasicFeatureIdentifier() {
    }
    
    /**
     * Builds a BasicFeatureIdentifier.
     * @param id The numeric ID of the feature.
     * @param source The ID of the source where this feature is to be found, typically a GeoJSON/Vector-tiles source.
     * @param sourceLayer If coming via vector-tiles the ID of the source layer.
     * @return The built BasicFeatureIdentifier.
     */
    @JsOverlay
    public static final BasicFeatureIdentifier build(Integer id, String source, String sourceLayer) {
        BasicFeatureIdentifier featureIdentifier = new BasicFeatureIdentifier();
        featureIdentifier.setSource(source);
        if (sourceLayer != null) {
            featureIdentifier.setSourceLayer(sourceLayer);
        }
        featureIdentifier.setId(id.doubleValue());
        return featureIdentifier;
    }
    
    @JsProperty
    private native void setSource(String source);
    
    @JsProperty
    private native void setSourceLayer(String sourceLayer);
    
    @JsProperty
    private native void setId(Double id);

    @Override
    @JsProperty
    public native Double getId();

    @Override
    @JsProperty
    public native String getSource();

    @Override
    @JsProperty
    public native String getSourceLayer();
}
