package com.tomtom.gwt.mapbox.gl.client.api.mapoptions;

import com.google.gwt.core.client.JsArray;
import com.tomtom.gwt.mapbox.gl.client.style.other.Filter;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#querySourceFeatures
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class QuerySourceFeaturesParams {
    
    private QuerySourceFeaturesParams() {
    }
    
    @JsOverlay
    public static final QuerySourceFeaturesParams build(String sourceLayerID, Filter filter) {
        QuerySourceFeaturesParams params = new QuerySourceFeaturesParams();
        if (sourceLayerID != null) {
            params.setSourceLayer(sourceLayerID);
        }
        if (filter != null) {
            params.setFilter(filter.getExpression());
        }
        return params;
    }
    
    @JsProperty
    private native void setSourceLayer(String sourceLayerID);
    
    @JsProperty
    private native void setFilter(JsArray filterExpression);
}
