package com.tomtom.gwt.mapbox.gl.client;

import com.tomtom.gwt.mapbox.gl.client.layers.MapLayer;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.FitBoundsOptions;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.FlyToOptions;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.MapOptions;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.StyleOptions;
import com.tomtom.gwt.mapbox.gl.client.mapsources.input.AbstractSourceInput;
import com.tomtom.gwt.mapbox.gl.client.overlay.AbstractOverlay;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import java.util.Collection;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsType;
import com.tomtom.gwt.mapbox.gl.client.mapsources.MapSource;

/**
 * https://www.mapbox.com/mapbox-gl-js/api/#Map
 */
@JsType(isNative = true, name = "Map", namespace = MAPBOX_GL_NAMESPACE)
public class MapboxMap extends AbstractEvented {

//    @JsProperty
//    public static void setAccessToken(String accessToken) {
//        // TODO
//    }
//    
    public MapboxMap(MapOptions options) {
    }

    public native MapboxMap addClass(String klass, StyleOptions options);

    public native MapboxMap removeClass(String klass, StyleOptions options);

    public native MapboxMap setClasses(String[] classes, StyleOptions options);

    public native boolean hasClass(String klass);

    public native <T extends MapSource> T getSource(String id);

    public native MapboxMap addSource(String id, AbstractSourceInput source);

    public native MapboxMap removeSource(String id);

    @JsOverlay
    public final MapboxMap addLayers(Collection<MapLayer> layers, MapLayer before) {
        layers.forEach((layer) -> {
            addLayer(layer, before);
        });
        return this;
    }

    @JsOverlay
    public final MapboxMap addLayer(MapLayer layer) {
        return addLayer(layer, (String) null);
    }

    @JsOverlay
    public final MapboxMap addLayer(MapLayer layer, MapLayer before) {
        return addLayer(layer, before != null ? before.getId() : null);
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

    public native double getZoom();

    @JsOverlay
    public final int getZoomInt() {
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

    // TODO: all map methods
    //public native MapboxMap flyTo()
}
