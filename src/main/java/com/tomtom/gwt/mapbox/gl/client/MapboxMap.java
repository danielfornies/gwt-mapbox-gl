package com.tomtom.gwt.mapbox.gl.client;

import com.tomtom.gwt.mapbox.gl.client.events.AbstractEvented;
import com.google.gwt.dom.client.CanvasElement;
import com.google.gwt.dom.client.Element;
import com.tomtom.gwt.geojson.client.AbstractGeoJson;
import com.tomtom.gwt.mapbox.gl.client.controls.IControl;
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

    public native MapboxMap removeSource(String id);

    @JsOverlay
    public final MapboxMap addLayers(MapLayer layerOnTop, Collection<MapLayer> layers) {
        layers.forEach((layer) -> {
            addLayer(layer, layerOnTop);
        });
        return this;
    }
    
    @JsOverlay
    public final MapboxMap addLayers(MapLayer layerOnTop, MapLayer... layers) {
        for (MapLayer layer : layers) {
            addLayer(layer, layerOnTop);
        }
        return this;
    }

    @JsOverlay
    public final MapboxMap addLayer(MapLayer layer) {
        return addLayer(layer, (String) null);
    }

    @JsOverlay
    public final MapboxMap addLayer(MapLayer layer, MapLayer layerOnTop) {
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
    public final MapboxMap moveLayer(MapLayer layer, MapLayer layerOnTop) {
        return moveLayer(layer.getId(), layerOnTop != null ? layerOnTop.getId() : null);
    }
    
    @JsOverlay
    public final MapboxMap moveLayers(MapLayer layerOnTop, Collection<MapLayer> layers) {
        layers.forEach((layer) -> {
            moveLayer(layer, layerOnTop);
        });
        return this;
    }
    
    @JsOverlay
    public final MapboxMap moveLayers(MapLayer layerOnTop, MapLayer... layers) {
        for (MapLayer layer : layers) {
            moveLayer(layer, layerOnTop);
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
    
    public native AbstractGeoJson[] queryRenderedFeatures(Point[] geometry, QueryRenderedFeaturesParams parameters);
    
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
     * 
     * @see com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties
     * @param layer
     * @param name
     * @param value
     * @return 
     */
    public native MapboxMap setLayoutProperty(String layer, String name, Object value);
    
    public native <T> T getLayoutProperty(String layer, String name);
    
    
    // TODO: all map methods
}
