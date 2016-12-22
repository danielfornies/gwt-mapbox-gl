package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import com.google.gwt.core.client.JsArray;
import com.tomtom.gwt.mapbox.gl.client.layers.filter.Filter;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#queryRenderedFeatures
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class QueryRenderedFeaturesParams {
    
    @JsOverlay
    public static final QueryRenderedFeaturesParams build(String[] layerIDs, Filter filter) {
        QueryRenderedFeaturesParams params = new QueryRenderedFeaturesParams();
        if (layerIDs != null && layerIDs.length > 0) {
            params.setLayers(layerIDs);
        }
        if (filter != null) {
            params.setFilter(filter.getExpression());
        }
        
        return params;
    }
    
    private QueryRenderedFeaturesParams() {
    }
    
    @JsProperty
    private native void setLayers(String[] layerIDs);
    
    @JsProperty
    private native void setFilter(JsArray filterExpression);
}
