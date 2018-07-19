package com.tomtom.gwt.mapbox.gl.client.api.feature;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Feature identifier
 * @see https://www.mapbox.com/mapbox-gl-js/api#map#setfeaturestate
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public final class BasicFeatureIdentifier implements FeatureIdentifier {
    
    private BasicFeatureIdentifier() {
    }
    
    @JsOverlay
    public static final BasicFeatureIdentifier build(int id, String source) {
        return build(id, source, null);
    }
    
    /**
     * 
     * @param id
     * @param source
     * @param sourceLayer
     * @return 
     */
    @JsOverlay
    public static final BasicFeatureIdentifier build(int id, String source, String sourceLayer) {
        BasicFeatureIdentifier featureIdentifier = new BasicFeatureIdentifier();
        featureIdentifier.setSource(source);
        if (sourceLayer != null) {
            featureIdentifier.setSourceLayer(sourceLayer);
        }
        featureIdentifier.setId(id);
        return featureIdentifier;
    }
    
    @JsProperty
    private native void setSource(String source);
    
    @JsProperty
    private native void setSourceLayer(String sourceLayer);
    
    @JsProperty
    private native void setId(double id);

    @Override
    @JsProperty
    public native double getId();

    @Override
    @JsProperty
    public native String getSource();

    @Override
    @JsProperty
    public native String getSourceLayer();
}
