package com.tomtom.gwt.mapbox.gl.client;

import com.tomtom.gwt.mapbox.gl.client.events.MapEventType;
import com.tomtom.gwt.mapbox.gl.client.events.AbstractEvented;
import com.google.gwt.dom.client.CanvasElement;
import com.google.gwt.dom.client.Element;
import com.tomtom.gwt.geojson.client.AbstractGeoJson;
import com.tomtom.gwt.mapbox.gl.client.controls.IControl;
import com.tomtom.gwt.mapbox.gl.client.events.MapboxEventListener;
import com.tomtom.gwt.mapbox.gl.client.layers.MapLayer;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.ControlAlignment;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.FitBoundsOptions;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.FlyToOptions;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.MapOptions;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.QueryRenderedFeaturesParams;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.QuerySourceFeaturesParams;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.StyleOptions;
import com.tomtom.gwt.mapbox.gl.client.sources.input.AbstractSourceInput;
import com.tomtom.gwt.mapbox.gl.client.overlay.AbstractOverlay;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import java.util.Collection;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsType;
import com.tomtom.gwt.mapbox.gl.client.sources.MapSource;
import com.tomtom.gwt.mapbox.gl.client.handlers.BoxZoomHandler;
import com.tomtom.gwt.mapbox.gl.client.handlers.DoubleClickZoomHandler;
import com.tomtom.gwt.mapbox.gl.client.handlers.DragPanHandler;
import com.tomtom.gwt.mapbox.gl.client.handlers.DragRotateHandler;
import com.tomtom.gwt.mapbox.gl.client.handlers.KeyboardHandler;
import com.tomtom.gwt.mapbox.gl.client.handlers.ScrollZoomHandler;
import com.tomtom.gwt.mapbox.gl.client.handlers.TouchZoomRotateHandler;
import jsinterop.annotations.JsProperty;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Map
 */
@JsType(isNative = true, name = "Map", namespace = MAPBOX_GL_NAMESPACE)
public class MapboxMap extends AbstractEvented {

    public MapboxMap(MapOptions options) {
    }

    @JsOverlay
    public final MapboxMap addControl(IControl control, ControlAlignment position) {
        return addControl(control, position.getApiValue());
    }

    public native MapboxMap addControl(IControl control, String position);

    public native MapboxMap removeControl(IControl control);

    public native MapboxMap addClass(String klass, StyleOptions options);

    public native MapboxMap removeClass(String klass, StyleOptions options);

    public native MapboxMap setClasses(String[] classes, StyleOptions options);

    public native boolean hasClass(String klass);

    public native <T extends MapSource> T getSource(String id);

    public native MapboxMap addSource(String id, AbstractSourceInput source);
    
    /**
     * @param id The ID of the source to be checked.
     * @return A Boolean indicating whether the source is loaded.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#isSourceLoaded
     */
    public native boolean isSourceLoaded (String id);

    public native MapboxMap removeSource(String id);

    @JsOverlay
    public final MapboxMap addLayers(MapLayer layerOnTop, Collection<MapLayer> layers) {
        layers.forEach((layer) -> {
            addLayer(layerOnTop, layer);
        });
        return this;
    }

    @JsOverlay
    public final MapboxMap addLayers(MapLayer layerOnTop, MapLayer... layers) {
        for (MapLayer layer : layers) {
            addLayer(layerOnTop, layer);
        }
        return this;
    }

    @JsOverlay
    public final MapboxMap addLayer(MapLayer layer) {
        return addLayer(layer, (String) null);
    }

    @JsOverlay
    public final MapboxMap addLayer(MapLayer layerOnTop, MapLayer layer) {
        return addLayer(layer, layerOnTop != null ? layerOnTop.getId() : null);
    }

    public native MapboxMap addLayer(MapLayer layer, String before);

    @JsOverlay
    public final MapboxMap removeLayers(Collection<MapLayer> layers) {
        layers.forEach((layer) -> {
            removeLayer(layer);
        });
        return this;
    }

    @JsOverlay
    public final MapboxMap removeLayers(MapLayer... layers) {
        for (MapLayer layer : layers) {
            removeLayer(layer);
        }
        return this;
    }

    @JsOverlay
    public final MapboxMap removeLayer(MapLayer layer) {
        if (layer != null) {
            try {
                removeLayer(layer.getId());
            } catch (Throwable t) {
                // does nothing
            }
        }
        return this;
    }

    public native MapboxMap removeLayer(String id);

    @JsOverlay
    public final MapboxMap moveLayer(MapLayer layerOnTop, MapLayer layer) {
        return moveLayer(layer.getId(), layerOnTop != null ? layerOnTop.getId() : null);
    }

    @JsOverlay
    public final MapboxMap moveLayers(MapLayer layerOnTop, Collection<MapLayer> layers) {
        layers.forEach((layer) -> {
            moveLayer(layerOnTop, layer);
        });
        return this;
    }

    @JsOverlay
    public final MapboxMap moveLayers(MapLayer layerOnTop, MapLayer... layers) {
        for (MapLayer layer : layers) {
            moveLayer(layerOnTop, layer);
        }
        return this;
    }

    public native MapboxMap moveLayer(String id, String beforeId);

    public native double getZoom();

    @JsOverlay
    public final int getRoundedZoom() {
        return (int) (Math.round(getZoom()));
    }

    public native MapboxMap setZoom(int zoom);

    public native LngLat getCenter();

    public native void setCenter(LngLat center);

    public native LngLatBounds getBounds();

    public native MapboxMap fitBounds(LngLatBounds bounds, FitBoundsOptions options);

    public native MapboxMap panTo(LngLat lngLat);

    public native MapboxMap flyTo(FlyToOptions options);

    @JsOverlay
    public final <T extends AbstractOverlay> void addOverlays(Collection<T> overlays) {
        overlays.forEach((overlay) -> {
            overlay.addTo(this);
        });
    }

    @JsOverlay
    public final <T extends AbstractOverlay> void removeOverlays(Collection<T> overlays) {
        overlays.forEach((overlay) -> {
            overlay.remove();
        });
    }

    public native Point project(LngLat lngLat);

    public native LngLat unproject(Point pixelCoordinates);

    public native Element getContainer();

    public native Element getCanvasContainer();

    public native CanvasElement getCanvas();

    @JsProperty
    public native void setRepaint(boolean repaint);

    @JsProperty
    public native boolean getRepaint();

    /**
     * Returns an array of GeoJSON Feature objects representing visible features that satisfy the query parameters.
     *
     * @param geometry (Point[]) The geometry of the query region: either a single point or southwest and northeast points describing a bounding box. Omitting this parameter
     * (i.e. calling Map#queryRenderedFeatures with zero arguments, or with only a parameters argument) is equivalent to passing a bounding box encompassing the entire map viewport.
     * @param parameters an instance of QueryRenderedFeaturesParams.
     * @return Array of AbstractGeoJson: An array of GeoJSON feature objects . The properties value of each returned feature object contains the properties of its source feature. For GeoJSON sources,
     * only string and numeric property values are supported (i.e. null, Array, and Object values are not supported).
     *
     * Each feature includes a top-level layer property whose value is an object representing the style layer to which the feature belongs. Layout and paint properties in this object contain values
     * which are fully evaluated for the given zoom level and feature.
     *
     * Features from layers whose visibility property is "none", or from layers whose zoom range excludes the current zoom level are not included. Symbol features that have been hidden due to text or
     * icon collision are not included. Features from all other layers are included, including features that may have no visible contribution to the rendered result; for example, because the layer's
     * opacity or color alpha component is set to 0.
     *
     * The topmost rendered feature appears first in the returned array, and subsequent features are sorted by descending z-order. Features that are rendered multiple times (due to wrapping across the
     * antimeridian at low zoom levels) are returned only once (though subject to the following caveat).
     *
     * Because features come from tiled vector data or GeoJSON data that is converted to tiles internally, feature geometries may be split or duplicated across tile boundaries and, as a result,
     * features may appear multiple times in query results. For example, suppose there is a highway running through the bounding rectangle of a query. The results of the query will be those parts of
     * the highway that lie within the map tiles covering the bounding rectangle, even if the highway extends into other tiles, and the portion of the highway within each map tile will be returned as
     * a separate feature. Similarly, a point feature near a tile boundary may appear in multiple tiles due to tile buffering.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#queryRenderedFeatures
     */
    public native AbstractGeoJson[] queryRenderedFeatures(Point geometry, QueryRenderedFeaturesParams parameters);

    /**
     * Returns an array of GeoJSON Feature objects representing features within the specified vector tile or GeoJSON source that satisfy the query parameters.
     *
     * @param sourceID The ID of the vector tile or GeoJSON source to query.
     * @param parameters an instance of QuerySourceFeaturesParams
     * @return Array of AbstractGeoJson: An array of GeoJSON Feature objects . In contrast to Map#queryRenderedFeatures, this function returns all features matching the query parameters, whether or not they are
     * rendered by the current style (i.e. visible). The domain of the query includes all currently-loaded vector tiles and GeoJSON source tiles: this function does not check tiles outside the
     * currently visible viewport.
     *
     * Because features come from tiled vector data or GeoJSON data that is converted to tiles internally, feature geometries may be split or duplicated across tile boundaries and, as a result,
     * features may appear multiple times in query results. For example, suppose there is a highway running through the bounding rectangle of a query. The results of the query will be those parts of
     * the highway that lie within the map tiles covering the bounding rectangle, even if the highway extends into other tiles, and the portion of the highway within each map tile will be returned as
     * a separate feature. Similarly, a point feature near a tile boundary may appear in multiple tiles due to tile buffering.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#querySourceFeatures
     */
    public native AbstractGeoJson[] querySourceFeatures(String sourceID, QuerySourceFeaturesParams parameters);

    /**
     *
     * @see com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties
     * @param layer
     * @param name
     * @param value
     * @param klass
     * @return
     */
    @JsOverlay
    public final MapboxMap setPaintProperty(MapLayer layer, String name, Object value, String klass) {
        return setPaintProperty(layer.getId(), name, value, klass);
    }

    /**
     * @see com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties
     * @param layers
     * @param name
     * @param value
     * @param klass
     * @return
     */
    @JsOverlay
    public final MapboxMap setPaintProperty(Collection<MapLayer> layers, String name, Object value, String klass) {
        layers.forEach((layer) -> {
            setPaintProperty(layer, name, value, klass);
        });
        return this;
    }

    /**
     *
     * @see com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties
     * @param layer
     * @param name
     * @param value
     * @param klass
     * @return
     */
    public native MapboxMap setPaintProperty(String layer, String name, Object value, String klass);

    public native <T> T getPaintProperty(String layer, String name, String klass);

    /**
     *
     * @see com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties
     * @param layer
     * @param name
     * @param value
     * @return
     */
    @JsOverlay
    public final MapboxMap setLayoutProperty(MapLayer layer, String name, Object value) {
        return setLayoutProperty(layer.getId(), name, value);
    }

    /**
     * @see com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties
     * @param layers
     * @param name
     * @param value
     * @return
     */
    @JsOverlay
    public final MapboxMap setLayoutProperty(Collection<MapLayer> layers, String name, Object value) {
        layers.forEach((layer) -> {
            setLayoutProperty(layer, name, value);
        });
        return this;
    }

    /**
     *
     * @see com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties
     * @param layer
     * @param name
     * @param value
     * @return
     */
    public native MapboxMap setLayoutProperty(String layer, String name, Object value);

    public native <T> T getLayoutProperty(String layer, String name);

    @JsOverlay
    public final <E> MapboxMap on(MapEventType eventType, MapboxEventListener<E> listener) {
        return on(eventType.name(), listener);
    }

    @JsOverlay
    public final <E> MapboxMap off(MapEventType eventType, MapboxEventListener<E> listener) {
        return off(eventType.name(), listener);
    }

    @JsOverlay
    public final <E> MapboxMap once(MapEventType eventType, MapboxEventListener<E> listener) {
        return once(eventType.name(), listener);
    }

    @JsOverlay
    public final MapboxMap fire(MapEventType eventType, Object data) {
        return fire(eventType.name(), data);
    }
    
    /**
     * @return The box zoom handler of this map.
     */
    @JsProperty
    public native BoxZoomHandler getBoxZoom();
    
    /**
     * @return The scroll zoom handler of this map.
     */
    @JsProperty
    public native ScrollZoomHandler getScrollZoom();
    
    /**
     * @return The drag-pan handler of this map.
     */
    @JsProperty
    public native DragPanHandler getDragPan();
    
    /**
     * @return The drag-rotate handler of this map.
     */
    @JsProperty
    public native DragRotateHandler getDragRotate();
    
    /**
     * @return The keyboard handler of this map.
     */
    @JsProperty
    public native KeyboardHandler getKeyboard();
    
    /**
     * @return The double-click-zoom handler of this map.
     */
    @JsProperty
    public native DoubleClickZoomHandler getDoubleClickZoom();
    
    /**
     * @return The touch-zoom-rotate handler of this map.
     */
    @JsProperty
    public native TouchZoomRotateHandler getTouchZoomRotate();
}
