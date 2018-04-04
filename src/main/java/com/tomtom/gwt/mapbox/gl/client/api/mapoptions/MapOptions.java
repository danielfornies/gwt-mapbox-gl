package com.tomtom.gwt.mapbox.gl.client.api.mapoptions;

import com.tomtom.gwt.mapbox.gl.client.style.MapboxStyle;
import com.tomtom.gwt.mapbox.gl.client.api.LngLat;
import com.tomtom.gwt.mapbox.gl.client.api.LngLatBounds;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Map
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public final class MapOptions {

    private MapOptions() {
    }
    
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public final static class Builder {

        private Builder() {
        }
        
        /**
         * 
         * @param containerId The HTML element in which Mapbox GL JS will render the map, or the element's string id .
         * @param styleUrl A URL of the form mapbox://styles/:owner/:style, where :owner is your Mapbox account name and :style is the style ID.
         * @return A Mapbox Map builder.
         */
        @JsOverlay
        public static Builder newBuilder(String containerId, String styleUrl) {
            return newBuilderInternal(containerId, styleUrl);
        }

        /**
         * 
         * @param containerId The HTML element in which Mapbox GL JS will render the map, or the element's string id .
         * @param style A custom style. See MapboxStyle (https://www.mapbox.com/mapbox-gl-style-spec/#root)
         * @return A Mapbox Map builder.
         */
        @JsOverlay
        public static Builder newBuilder(String containerId, MapboxStyle style) {
            return newBuilderInternal(containerId, style);
        }

        /**
         * 
         * @param containerId The HTML element in which Mapbox GL JS will render the map, or the element's string id .
         * @param style The map's Mapbox style. This must be an a JSON object conforming to the schema described in the Mapbox Style Specification , or a URL to such JSON. To load a style from the
         * Mapbox API, you can use a URL of the form mapbox://styles/:owner/:style, where :owner is your Mapbox account name and :style is the style ID.
         * @return A Mapbox Map builder.
         */
        @JsOverlay
        private static Builder newBuilderInternal(String containerId, Object style) {
            Builder builder = new Builder();
            builder.setContainer(containerId);
            builder.setStyle(style);
            return builder;
        }

        /**
         * @param value The HTML element in which Mapbox GL JS will render the map, or the element's string id .
         */
        @JsProperty
        private native void setContainer(String value);

        /**
         * @param value (default 0) The minimum zoom level of the map (1-20).
         */
        @JsProperty
        public native void setMinZoom(double value);

        /**
         * @param value (default 20) The maximum zoom level of the map (1-20).
         */
        @JsProperty
        public native void setMaxZoom(double value);
        
        /**
         * @param style The map's Mapbox style. This must be an a JSON object conforming to the schema described in the Mapbox Style Specification , or a URL to such JSON. To load a style from the
         * Mapbox API, you can use a URL of the form mapbox://styles/:owner/:style, where :owner is your Mapbox account name and :style is the style ID.
         */
        @JsProperty
        private native void setStyle(Object style);

        /**
         * @param hash (default false) If true , the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL. For example,
         * http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60 .
         */
        @JsProperty
        public native void setHash(boolean hash);

        /**
         * @param interactive (default true) If false , no mouse, touch, or keyboard listeners will be attached to the map, so it will not respond to interaction.
         */
        @JsProperty
        public native void setInteractive(boolean interactive);

        /**
         * @param degrees (default 7) The threshold, measured in degrees, that determines when the map's bearing (rotation) will snap to north. For example, with a bearingSnap of 7, if the user
         * rotates the map within 7 degrees of north, the map will automatically snap to exact north.
         */
        @JsProperty
        public native void setBearingSnap(int degrees);

        /**
         * @param attributionControl (default true) If true , an AttributionControl will be added to the map.
         */
        @JsProperty
        public native void setAttributionControl(boolean attributionControl);

        /**
         * @param enabled (default false) If true , map creation will fail if the performance of Mapbox GL JS would be dramatically worse than expected (i.e. a software renderer would be used).
         */
        @JsProperty
        public native void setFailIfMajorPerformanceCaveat(boolean enabled);

        /**
         * @param preserveDrawingBuffer (default false) If true , the map's canvas can be exported to a PNG using map.getCanvas().toDataURL() . This is false by default as a performance optimization.
         */
        @JsProperty
        public native void setPreserveDrawingBuffer(boolean preserveDrawingBuffer);

        /**
         * @param bounds If set, the map will be constrained to the given bounds.
         */
        @JsProperty
        public native void setMaxBounds(LngLatBounds bounds);

        /**
         * @param enabled (default true) If true , the "scroll to zoom" interaction is enabled (see ScrollZoomHandler ).
         */
        @JsProperty
        public native void setScrollZoom(boolean enabled);

        /**
         * @param enabled (default true) If true , the "box zoom" interaction is enabled (see BoxZoomHandler ).
         */
        @JsProperty
        public native void setBoxZoom(boolean enabled);

        /**
         * @param enabled (default true) If true , the "drag to rotate" interaction is enabled (see DragRotateHandler ).
         */
        @JsProperty
        public native void setDragRotate(boolean enabled);

        /**
         * @param enabled (default true) If true , the "drag to pan" interaction is enabled (see DragPanHandler ).
         */
        @JsProperty
        public native void setDragPan(boolean enabled);

        /**
         * @param enabled (default true) If true , keyboard shortcuts are enabled (see KeyboardHandler ).
         */
        @JsProperty
        public native void setKeyboard(boolean enabled);

        /**
         * @param enabled (default true) If true , the "double click to zoom" interaction is enabled (see DoubleClickZoomHandler ).
         */
        @JsProperty
        public native void setDoubleClickZoom(boolean enabled);

        /**
         * @param enabled (default true) If true , the "pinch to rotate and zoom" interaction is enabled (see TouchZoomRotateHandler ).
         */
        @JsProperty
        public native void setTouchZoomRotate(boolean enabled);

        /**
         * @param enabled (default true) If true, the map will automatically resize when the browser window resizes.
         */
        @JsProperty
        public native void setTrackResize(boolean enabled);

        /**
         * @param center The inital geographical centerpoint of the map. If center is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not
         * specified in the style, either, it will default to [0, 0] .
         */
        @JsProperty
        public native void setCenter(LngLat center);

        /**
         * @param value The initial zoom level of the map. If zoom is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the
         * style, either, it will default to 0 .
         */
        @JsProperty
        public native void setZoom(int value);

        /**
         * @param degrees (default 0) The initial bearing (rotation) of the map, measured in degrees counter-clockwise from north. If bearing is not specified in the constructor options, Mapbox GL JS
         * will look for it in the map's style object. If it is not specified in the style, either, it will default to 0 .
         */
        @JsProperty
        public native void setBearing(int degrees);

        /**
         * @param degrees (default 0) The initial pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-60). If pitch is not specified in the constructor options, Mapbox GL
         * JS will look for it in the map's style object. If it is not specified in the style, either, it will default to 0 .
         */
        @JsProperty
        public native void setPitch(int degrees);

        /**
         * @param enabled (default true) If true , multiple copies of the world will be rendered, when zoomed out.
         */
        @JsProperty
        public native void setRenderWorldCopies(boolean enabled);
        
        /**
         * @param cacheSize The maxiumum number of tiles stored in the tile cache for a given source. If omitted, the cache will be dynamically sized based on the current viewport.
         */
        @JsProperty
        public native void setMaxTileCacheSize(int cacheSize);
        
        @JsOverlay
        public MapOptions build() {
            MapOptions options = new MapOptions();
            JSUtils.copyAllFields(this, options);
            return options;
        }
    }
}
