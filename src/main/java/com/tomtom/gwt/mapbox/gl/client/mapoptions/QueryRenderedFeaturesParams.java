package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import com.google.gwt.core.client.JsArray;
import com.tomtom.gwt.mapbox.gl.client.layers.MapLayer;
import com.tomtom.gwt.mapbox.gl.client.layers.filter.Filter;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import java.util.Collection;
import java.util.stream.Collectors;
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
    
    private QueryRenderedFeaturesParams() {
    }
    
    @JsOverlay
    public static final QueryRenderedFeaturesParams buildWithMapLayers(Filter filter, Collection<MapLayer> mapLayers) {
        return build(filter, mapLayers.stream().map(MapLayer::getId).collect(Collectors.toList()));
    }
    
    @JsOverlay
    public static final QueryRenderedFeaturesParams build(Filter filter, Collection<String> layerIDs) {
        return build(filter, layerIDs.toArray(new String[layerIDs.size()]));
    }
    
    @JsOverlay
    public static final QueryRenderedFeaturesParams build(Filter filter, String... layerIDs) {
        QueryRenderedFeaturesParams params = new QueryRenderedFeaturesParams();
        if (layerIDs != null && layerIDs.length > 0) {
            params.setLayers(layerIDs);
        }
        if (filter != null) {
            params.setFilter(filter.getExpression());
        }
        
        return params;
    }
    
    @JsProperty
    private native void setLayers(String[] layerIDs);
    
    @JsProperty
    private native void setFilter(JsArray filterExpression);
}
