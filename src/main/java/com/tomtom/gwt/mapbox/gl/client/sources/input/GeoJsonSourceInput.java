package com.tomtom.gwt.mapbox.gl.client.sources.input;

import com.tomtom.gwt.geojson.client.AbstractGeoJson;
import com.tomtom.gwt.geojson.client.Feature;
import com.tomtom.gwt.geojson.client.FeatureCollection;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * A GeoJSON source. Data must be provided via a "data" property, whose value can be a URL or inline GeoJSON.
 * @param <T> A URL or inline GeoJson
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public final class GeoJsonSourceInput<T> extends AbstractSourceInput {
    
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class Builder<T> {
        
        @JsOverlay
        public static Builder<String> newWithURL(String geoJsonUrl) {
            return new Builder().withData(geoJsonUrl);
        }
        
        @JsOverlay
        public static <T extends AbstractGeoJson> Builder<T> newWithInlineGeoJson(T inlineGeoJson) {
            return new Builder().withData(inlineGeoJson);
        }
        
        @JsOverlay
        public static <T extends AbstractGeoJson> Builder<T> newEmpty() {
            return new Builder().withData(FeatureCollection.build(new Feature[]{}));
        }
        
        private Builder() {
        }
        
        @JsOverlay
        public <T extends AbstractGeoJson> GeoJsonSourceInput<T> build() {
            GeoJsonSourceInput sourceInput = new GeoJsonSourceInput();
            sourceInput.setType("geojson");
            JSUtils.copyAllFields(this, sourceInput);
            return sourceInput;
        }
        
        @JsOverlay
        private Builder withData(T data) {
            setData(data);
            return this;
        }
        
        @JsProperty
        private native void setData(T data);
    
        @JsProperty
        public native void setMaxzoom(int value);
        
        @JsProperty
        public native void setBuffer(int value);
    
        @JsProperty
        public native void setTolerance(double value);
    
        @JsProperty
        public native void setCluster(boolean value);
    
        @JsProperty
        public native void setClusterRadius(int value);
        
        @JsProperty
        public native void setClusterMaxZoom(int value);
    }
    
    @JsOverlay
    public final static GeoJsonSourceInput DEFAULT_EMPTY = Builder.newEmpty().build();
    
    private GeoJsonSourceInput() {
    }
    
    @JsProperty
    public native T getData();
    
    @JsProperty
    public native int getMaxzoom();
    
    @JsProperty
    public native int getBuffer();
    
    @JsProperty
    public native double getTolerance();
    
    @JsProperty
    public native boolean getCluster();
    
    @JsProperty
    public native int getClusterRadius();
}
