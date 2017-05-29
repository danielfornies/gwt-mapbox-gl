package com.tomtom.gwt.mapbox.gl.client.sources.input;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * A vector tile source. Tiles must be in Mapbox Vector Tile format. All geometric coordinates in vector tiles must be between -1 * extent and (extent * 2) - 1 inclusive. 
 * All layers that use a vector source must specify a "source-layer" value. For vector tiles hosted by Mapbox, the "url" value should be of the form mapbox://mapid.
 *
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class VectorTiledSourceInput extends AbstractTiledSourceInput {

    private VectorTiledSourceInput() {
    }

    @JsOverlay
    public static VectorTiledSourceInput build(String[] tileURLs, int minZoom, int maxZoom) {
        VectorTiledSourceInput mapSource = new VectorTiledSourceInput();
        mapSource.init("vector", tileURLs, minZoom, maxZoom);
        return mapSource;
    }
}
