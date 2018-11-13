package com.tomtom.gwt.mapbox.gl.client.style.sources;

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
            JSUtils.copyAllNonNullFields(this, sourceInput);
            return sourceInput;
        }
        
        /**
         * @param data A URL to a GeoJSON file, or inline GeoJSON.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-data
         */
        @JsOverlay
        private Builder withData(T data) {
            setData(data);
            return this;
        }
        
        @JsProperty
        private native void setData(T data);
    
        /**
         * Maximum zoom level at which to create vector tiles (higher means greater detail at high zoom levels).
         * @param maxZoom Optional number.  Defaults to 18.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-maxzoom
         */
        @JsOverlay
        public Builder withMaxZoom(int maxZoom) {
            setMaxzoom(maxZoom);
            return this;
        }
        
        @JsProperty
        private native void setMaxzoom(int value);
        
        /**
         * Size of the tile buffer on each side. A value of 0 produces no buffer. 
         * A value of 512 produces a buffer as wide as the tile itself. Larger values produce fewer rendering artifacts near tile edges and slower performance.
         * @param buffer Optional number.  Defaults to 128.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-buffer
         */
        @JsOverlay
        public Builder withBuffer(int buffer) {
            setBuffer(buffer);
            return this;
        }
        
        @JsProperty
        private native void setBuffer(int value);
    
        /**
         * Douglas-Peucker simplification tolerance (higher means simpler geometries and faster performance).
         * @param tolerance Optional number. Defaults to 0.375. 
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-tolerance
         */
        @JsOverlay
        public Builder withTolerance(double tolerance) {
            setTolerance(tolerance);
            return this;
        }
        
        @JsProperty
        private native void setTolerance(double value);
    
        /**
         * If the data is a collection of point features, setting this to true clusters the points by radius into groups.
         * @param enableClustering Optional boolean. Defaults to false. 
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-cluster
         */
        @JsOverlay
        public Builder withCluster(boolean enableClustering) {
            setCluster(enableClustering);
            return this;
        }
        
        @JsProperty
        private native void setCluster(boolean value);
    
        /**
         * Radius of each cluster if clustering is enabled. A value of 512 indicates a radius equal to the width of a tile.
         * @param radiusPixels Optional number.  Defaults to 50.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-clusterRadius
         */
        @JsOverlay
        public Builder withClusterRadius(int radiusPixels) {
            setClusterRadius(radiusPixels);
            return this;
        }
        
        @JsProperty
        private native void setClusterRadius(int value);
        
        /**
         * Max zoom on which to cluster points if clustering is enabled. Defaults to one zoom less than maxzoom (so that last zoom features are not clustered).
         * @param maxZoom Optional number.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-clusterMaxZoom
         */
        @JsOverlay
        public Builder withClusterMaxZoom(int maxZoom) {
            setClusterMaxZoom(maxZoom);
            return this;
        }
        
        @JsProperty
        private native void setClusterMaxZoom(int value);
        
        /**
         * Whether to calculate line distance metrics. This is required for line layers that specify line-gradient values.
         * @param lineMetrics Optional boolean. Defaults to false.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#sources-geojson-lineMetrics
         */
        @JsOverlay
        public Builder withLineMetrics(boolean lineMetrics) {
            setLineMetrics(lineMetrics);
            return this;
        }
        
        @JsProperty
        private native void setLineMetrics(boolean lineMetrics);
        
        /**
         * Whether to generate ids for the geojson features. 
         * When enabled, the feature.id property will be auto assigned based on its index in the features array, over-writing any previous values.
         * @param generateId Optional boolean. Defaults to false.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#sources-geojson-generateId
         */
        @JsOverlay
        public Builder withGenerateId(boolean generateId) {
            setGenerateId(generateId);
            return this;
        }
        
        @JsProperty
        private native void setGenerateId(boolean generateId);
    }
}
