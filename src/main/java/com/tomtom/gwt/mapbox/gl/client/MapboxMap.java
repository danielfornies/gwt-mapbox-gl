package com.tomtom.gwt.mapbox.gl.client;

import com.google.gwt.core.client.JsArray;
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
import com.tomtom.gwt.mapbox.gl.client.layers.filter.Filter;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.MapboxStyle;
import jsinterop.annotations.JsProperty;

/**
 * The Map object represents the map on your page. 
 * It exposes methods and properties that enable you to programmatically change the map, and fires events as users interact with it. 
 * You create a Map by specifying a container and other options. Then Mapbox GL JS initializes the map on the page and returns your Map object.
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Map
 */
@JsType(isNative = true, name = "Map", namespace = MAPBOX_GL_NAMESPACE)
public class MapboxMap extends AbstractEvented {

    public MapboxMap(MapOptions options) {
    }

    /**
     * Adds a IControl to the map, calling control.onAdd(this).
     * @param control The  IControl to add.
     * @param position position on the map to which the control will be added. Valid values are  'top-left' ,  'top-right' ,  'bottom-left' , and  'bottom-right' . Defaults to  'top-right' .
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#addControl
     */
    @JsOverlay
    public final MapboxMap addControl(IControl control, ControlAlignment position) {
        return addControl(control, position.getApiValue());
    }

    private native MapboxMap addControl(IControl control, String position);

    /**
     * Removes the control from the map.
     * @param control The  IControl to remove.
     * @return This
     * @https://www.mapbox.com/mapbox-gl-js/api/#Map#removeControl
     */
    public native MapboxMap removeControl(IControl control);
    
    /**
     * Resizes the map according to the dimensions of its container element.
     * This method must be called after the map's container is resized by another script, or when the map is shown after being initially hidden with CSS.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#resize
     */
    public native void resize();
    
    /**
     * @return Returns the map's geographical bounds.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#getBounds
     */
    public native LngLatBounds getBounds();

    /**
     * Sets or clears the map's geographical bounds.
     *  Pan and zoom operations are constrained within these bounds. 
     * If a pan or zoom is performed that would display regions outside these bounds, 
     * the map will instead display a position and zoom level as close as possible to the operation's request while still remaining within the bounds.
     * @param lngLatBounds The maximum bounds to set. If null or  undefined is provided, the function removes the map's maximum bounds.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#setMaxBounds
     */
    public native MapboxMap setMaxBounds(LngLatBounds lngLatBounds);
    
    /**
     * Sets or clears the map's minimum zoom level. If the map's current zoom level is lower than the new minimum, the map will zoom to the new minimum.
     * @param minZoom The minimum zoom level to set (0-20). If  null or  undefined is provided, the function removes the current minimum zoom (i.e. sets it to 0).
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#setMinZoom
     */
    public native MapboxMap setMinZoom(Double minZoom);
    
    /**
     * @return Returns the map's minimum allowable zoom level.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#getMinZoom
     */
    public native double getMinZoom();
    
    /**
     * Sets or clears the map's maximum zoom level. If the map's current zoom level is higher than the new maximum, the map will zoom to the new maximum.
     * @param maxZoom The maximum zoom level to set. If  null or  undefined is provided, the function removes the current maximum zoom (sets it to 20).
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#setMaxZoom
     */
    public native MapboxMap setMaxZoom(Double maxZoom);
    
    /**
     * @return Returns the map's maximum allowable zoom level.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#getMaxZoom
     */
    public native double getMaxZoom();
    
    /**
     * Returns a Point representing pixel coordinates, relative to the map's container, that correspond to the specified geographical location.
     * @param lngLat The geographical location to project.
     * @return The  Point corresponding to  lnglat , relative to the map's  container .
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#project
     */
    public native Point project(LngLat lngLat);

    /**
     * Returns a LngLat representing geographical coordinates that correspond to the specified pixel coordinates.
     * @param point The pixel coordinates to unproject.
     * @return The  LngLat corresponding to  point.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#unproject
     */
    public native LngLat unproject(Point point);
    
    /**
     * Returns an array of GeoJSON Feature objects representing visible features that satisfy the query parameters.
     *
     * @param geometry (Point[]) The geometry of the query region: either a single point or southwest and northeast points describing a bounding box. Omitting this parameter (i.e. calling
     * Map#queryRenderedFeatures with zero arguments, or with only a parameters argument) is equivalent to passing a bounding box encompassing the entire map viewport.
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
     * @return Array of AbstractGeoJson: An array of GeoJSON Feature objects . In contrast to Map#queryRenderedFeatures, this function returns all features matching the query parameters, whether or
     * not they are rendered by the current style (i.e. visible). The domain of the query includes all currently-loaded vector tiles and GeoJSON source tiles: this function does not check tiles
     * outside the currently visible viewport.
     *
     * Because features come from tiled vector data or GeoJSON data that is converted to tiles internally, feature geometries may be split or duplicated across tile boundaries and, as a result,
     * features may appear multiple times in query results. For example, suppose there is a highway running through the bounding rectangle of a query. The results of the query will be those parts of
     * the highway that lie within the map tiles covering the bounding rectangle, even if the highway extends into other tiles, and the portion of the highway within each map tile will be returned as
     * a separate feature. Similarly, a point feature near a tile boundary may appear in multiple tiles due to tile buffering.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#querySourceFeatures
     */
    public native AbstractGeoJson[] querySourceFeatures(String sourceID, QuerySourceFeaturesParams parameters);

    /**
     * Updates the map's Mapbox style object with a new value. If the given value is style JSON object, compares it against the the map's current state and perform only the changes necessary to make the map style match the desired state.
     * @param styleURL A URL to the style JSON.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#setStyle
     */
    @JsOverlay
    public final MapboxMap setStyleFrom(String styleURL) {
        return setStyle(styleURL);
    }
    
    /**
     * Updates the map's Mapbox style object with a new value. If the given value is style JSON object, compares it against the the map's current state and perform only the changes necessary to make the map style match the desired state.
     * @param mapStyle The inline JSON style to set.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#setStyle
     */
    @JsOverlay
    public final MapboxMap setStyleFrom(MapboxStyle mapStyle) {
        return setStyle(mapStyle);
    }
    
    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#setStyle
     */
    private native MapboxMap setStyle(Object style);
    
    /**
     * Returns the map's Mapbox style object, which can be used to recreate the map's style.
     * @return The map's style object.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#getStyle
     */
    public native MapboxMap getStyle();
    
    /**
     * Adds a source to the map's style.
     * @param id The ID of the source to add. Must not conflict with existing sources.
     * @param source The source object, conforming to the Mapbox Style Specification's source definition .
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#addSource
     */
    public native MapboxMap addSource(String id, AbstractSourceInput source);
    
    /**
     * @param id The ID of the source to be checked.
     * @return A Boolean indicating whether the source is loaded.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#isSourceLoaded
     */
    public native boolean isSourceLoaded(String id);

    /**
     * Removes a source from the map's style.
     * @param id The ID of the source to remove.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#removeSource
     */
    public native MapboxMap removeSource(String id);

    /**
     * Returns the source with the specified ID in the map's style.
     * @param <T> The specific type of expected map source.
     * @param id The ID of the source to get.
     * @return The style source with the specified ID, or null if the ID corresponds to no existing sources.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#getSource
     */
    public native <T extends MapSource> T getSource(String id);

    /**
     * Adds the given Mapbox style layers to the map's style from bottom to top, in the given order.
     * @param layerOnTop An existing layer to insert the new layers before. If this argument is omitted, the layers will be appended to the end of the layers array.
     * @param layers The collection of layers to add, from bottom to top.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#addLayer
     */
    @JsOverlay
    public final MapboxMap addLayers(MapLayer layerOnTop, Collection<MapLayer> layers) {
        layers.forEach((layer) -> {
            addLayer(layerOnTop, layer);
        });
        return this;
    }

    /**
     * Adds the given Mapbox style layers to the map's style from bottom to top, in the given order.
     * @param layerOnTop An existing layer to insert the new layers before. If this argument is omitted, the layers will be appended to the end of the layers array.
     * @param layers The layers to add, from bottom to top.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#addLayer
     */
    @JsOverlay
    public final MapboxMap addLayers(MapLayer layerOnTop, MapLayer... layers) {
        for (MapLayer layer : layers) {
            addLayer(layerOnTop, layer);
        }
        return this;
    }

    /**
     * Adds a Mapbox style layer to the map's style.
     * A layer defines styling for data from a specified source.
     * The layer will be appended to the end of the layers array.
     * @param layer The style layer to add, conforming to the Mapbox Style Specification's layer definition .
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#addLayer
     */
    @JsOverlay
    public final MapboxMap addLayer(MapLayer layer) {
        return addLayer(layer, (String) null);
    }

    /**
     * Adds a Mapbox style layer to the map's style.
     * A layer defines styling for data from a specified source.
     * @param layerOnTop An existing layer to insert the new layer before. If this argument is omitted, the layer will be appended to the end of the layers array.
     * @param layer The style layer to add, conforming to the Mapbox Style Specification's layer definition .
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#addLayer
     */
    @JsOverlay
    public final MapboxMap addLayer(MapLayer layerOnTop, MapLayer layer) {
        return addLayer(layer, layerOnTop != null ? layerOnTop.getId() : null);
    }

    /**
     * Adds a Mapbox style layer to the map's style.
     * A layer defines styling for data from a specified source.
     * @param layer The style layer to add, conforming to the Mapbox Style Specification's layer definition .
     * @param before The ID of an existing layer to insert the new layer before. If this argument is omitted, the layer will be appended to the end of the layers array.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#addLayer
     */
    public native MapboxMap addLayer(MapLayer layer, String before);
    
    /**
     * Moves the given layers to a different z-position, keeping their relative order.
     * @param layerOnTop An existing layer to insert the new layer before. If this argument is omitted, the layer will be appended to the end of the layers array.
     * @param layers The layers to move, keeping their relative order (between themselves).
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#moveLayer
     */
    @JsOverlay
    public final MapboxMap moveLayers(MapLayer layerOnTop, Collection<MapLayer> layers) {
        layers.forEach((layer) -> {
            moveLayer(layerOnTop, layer);
        });
        return this;
    }

    /**
     * Moves the given layers to a different z-position, keeping their relative order.
     * @param layerOnTop An existing layer to insert the new layer before. If this argument is omitted, the layer will be appended to the end of the layers array.
     * @param layers The layers to move, keeping their relative order (between themselves).
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#moveLayer
     */
    @JsOverlay
    public final MapboxMap moveLayers(MapLayer layerOnTop, MapLayer... layers) {
        for (MapLayer layer : layers) {
            moveLayer(layerOnTop, layer);
        }
        return this;
    }
    
    /**
     * Moves a layer to a different z-position.
     * @param layerOnTop An existing layer to insert the new layer before. If this argument is omitted, the layer will be appended to the end of the layers array.
     * @param layer The layer to move.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#moveLayer
     */
    @JsOverlay
    public final MapboxMap moveLayer(MapLayer layerOnTop, MapLayer layer) {
        return moveLayer(layer.getId(), layerOnTop != null ? layerOnTop.getId() : null);
    }

    /**
     * Moves a layer to a different z-position.
     * @param id The ID of the layer to move.
     * @param beforeId The ID of an existing layer to insert the new layer before. If this argument is omitted, the layer will be appended to the end of the layers array.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#moveLayer
     */
    public native MapboxMap moveLayer(String id, String beforeId);

    /**
     * Removes the given layers from the map's style.
     * If any of the given layers does not exist, no error is thrown.
     * @param layers The layers to remove. None of them can be null.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#removeLayer
     */
    @JsOverlay
    public final MapboxMap removeLayers(Collection<MapLayer> layers) {
        layers.forEach((layer) -> {
            removeLayer(layer);
        });
        return this;
    }

    /**
     * Removes the given layers from the map's style.
     * If any of the given layers does not exist, no error is thrown.
     * @param layers The layers to remove. None of them can be null.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#removeLayer
     */
    @JsOverlay
    public final MapboxMap removeLayers(MapLayer... layers) {
        for (MapLayer layer : layers) {
            removeLayer(layer);
        }
        return this;
    }

    /**
     * Removes a layer from the map's style.
     * If the given layer does not exist, nothing happens.
     * @param layer The layer to remove. Must not be null.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#removeLayer
     */
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

    /**
     * Removes a layer from the map's style.
     * @param id The ID of the layer to remove.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#removeLayer
     * @throws Error: if no layer with the specified  id exists.
     */
    public native MapboxMap removeLayer(String id);

    /**
     * Returns the layer with the specified ID in the map's style.
     * @param id The ID of the layer to get.
     * @return The layer with the specified ID, or null if the ID corresponds to no existing layers.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#getLayer
     */
    public native MapLayer getLayer(String id);
    
    /**
     * Sets the filter for the specified style layer.
     * @param layer The layer for which the filter will be applied.
     * @param filter The filter, conforming to the Mapbox Style Specification's filter definition .
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#setFilter
     */
    @JsOverlay
    public final MapboxMap setFilter(MapLayer layer, Filter filter) {
        return setFilter(layer.getId(), filter.getExpression());
    }
    
    /**
     * Sets the filter for the specified style layer.
     * @param layer The ID of the layer to which the filter will be applied.
     * @param filter The filter, conforming to the Mapbox Style Specification's filter definition .
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#setFilter
     */
    private native MapboxMap setFilter(String layer, JsArray filter);
    
    /**
     * Sets the zoom extent for the specified style layer.
     * @param layerId The ID of the layer to which the zoom extent will be applied.
     * @param minzoom The minimum zoom to set (0-20).
     * @param maxzoom The maximum zoom to set (0-20).
     * @return This.
     */
    public native MapboxMap setLayerZoomRange(String layerId, double minzoom, double maxzoom);
    
    /**
     * Returns the filter applied to the specified style layer.
     * @param layer The layer whose filter to get. Must not be null.
     * @return The layer's filter.
     */
    @JsOverlay
    public final Filter getFilter(MapLayer layer) {
        return Filter.build(getFilter(layer.getId()));
    }
    
    /**
     * Returns the filter applied to the specified style layer.
     * @param layer The ID of the style layer whose filter to get.
     * @return The layer's filter.
     */
    private native JsArray getFilter(String layer);
    
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
    
    public native double getZoom();

    @JsOverlay
    public final int getRoundedZoom() {
        return (int) (Math.round(getZoom()));
    }

    public native MapboxMap setZoom(double zoom);

    public native LngLat getCenter();

    public native void setCenter(LngLat center);

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

    public native Element getContainer();

    public native Element getCanvasContainer();

    public native CanvasElement getCanvas();

    @JsProperty
    public native void setRepaint(boolean repaint);

    @JsProperty
    public native boolean getRepaint();
    
    /**
     * Returns a Boolean indicating whether the camera is moving.
     * @return A Boolean indicating whether the camera is moving.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#isMoving
     */
    public native boolean isMoving();

    /**
     * Stops any animated transition underway.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#stop
     */
    public native MapboxMap stop();
    
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
