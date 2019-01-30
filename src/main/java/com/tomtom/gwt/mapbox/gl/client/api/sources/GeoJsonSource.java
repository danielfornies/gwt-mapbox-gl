package com.tomtom.gwt.mapbox.gl.client.api.sources;

import com.google.gwt.core.client.JavaScriptException;
import com.tomtom.gwt.geojson.client.Feature;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsType;

/**
 * A source containing GeoJSON.
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#GeoJSONSource
 */
@JsType(isNative = true, name = "GeoJSONSource", namespace = MAPBOX_GL_NAMESPACE)
public interface GeoJsonSource extends MapSource {

    /**
     * Sets the GeoJSON data and re-renders the map.
     *
     * @param data ((Object | string)) A GeoJSON data object or a URL to one. The latter is preferable in the case of large GeoJSON files.
     * @return this
     * @see https://docs.mapbox.com/mapbox-gl-js/api/#geojsonsource#setdata
     */
    GeoJsonSource setData(Object data);

    /**
     * For clustered sources, fetches the zoom at which the given cluster expands.
     *
     * @param clusterId The value of the cluster's cluster_id property.
     * @param callback A callback to be called when the zoom value is retrieved ( (error, zoom) => { ... } ).
     * @return this
     */
    GeoJsonSource getClusterExpansionZoom(double clusterId, NumberCallback callback);

    /**
     * For clustered sources, fetches the children of the given cluster on the next zoom level (as an array of GeoJSON features).
     *
     * @param clusterId The value of the cluster's cluster_id property.
     * @param callback A callback to be called when the features are retrieved ( (error, features) => { ... } ).
     * @return this
     */
    GeoJsonSource getClusterChildren(double clusterId, FeaturesCallback callback);

    /**
     * For clustered sources, fetches the original points that belong to the cluster (as an array of GeoJSON features).
     *
     * @param clusterId The value of the cluster's cluster_id property.
     * @param limit The maximum number of features to return.
     * @param offset The number of features to skip (e.g. for pagination).
     * @param callback A callback to be called when the features are retrieved ( (error, features) => { ... } ).
     * @return this.
     */
    GeoJsonSource getClusterLeaves(double clusterId, double limit, double offset, FeaturesCallback callback);

    /**
     * A callback to be called when the zoom value is retrieved ( (error, zoom) => { ... } ).
     */
    @FunctionalInterface
    @JsFunction
    interface NumberCallback {

        void callback(JavaScriptException error, double number);
    }

    /**
     * A callback to be called when the features are retrieved ( (error, features) => { ... } ).
     * @param <C> The feature geometry sub-type.
     * @param <P> The feature properties sub-type.
     */
    @FunctionalInterface
    @JsFunction
    interface FeaturesCallback<C, P> {

        void callback(JavaScriptException error, Feature<C, P>[] features);
    }
}
