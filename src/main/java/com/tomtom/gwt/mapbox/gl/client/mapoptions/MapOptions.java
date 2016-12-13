package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import com.tomtom.gwt.mapbox.gl.client.LngLat;
import com.tomtom.gwt.mapbox.gl.client.LngLatBounds;
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

    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public final static class Builder {

        @JsOverlay
        public static Builder newBuilder(String containerId, String styleUrl) {
            return newBuilderInternal(containerId, styleUrl);
        }
        
        @JsOverlay
        public static Builder newBuilder(String containerId, MapboxStyle style) {
            return newBuilderInternal(containerId, style);
        }
        
        @JsOverlay
        private static Builder newBuilderInternal(String containerId, Object style) {
            Builder builder = new Builder();
            builder.setContainer(containerId);
            builder.setStyle(style);
            return builder;
        }
        
        private Builder() {
        }
        
        @JsOverlay
        public MapOptions build() {
            MapOptions options = new MapOptions();
            JSUtils.copyAllFields(this, options);
            return options;
        }
        
        @JsProperty
        private native void setContainer(String value);

        @JsProperty
        private native void setStyle(Object style);

        @JsProperty
        public native void setMinZoom(int value);

        @JsProperty
        public native void setMaxZoom(int value);
        
        @JsProperty
        public native void setHash(boolean hash);
        
        @JsProperty
        public native void setInteractive(boolean interactive);
        
        @JsProperty
        public native void setBearingSnap(int degrees);
        
        @JsProperty
        public native void setClasses(String[] classes);
        
        @JsProperty
        public native void setAttributionControl(boolean attributionControl);
        
        @JsProperty
        public native void setFailIfMajorPerformanceCaveat(boolean enabled);
        
        @JsProperty
        public native void setPreserveDrawingBuffer(boolean preserveDrawingBuffer);
        
        @JsProperty
        public native void setMaxBounds(LngLatBounds bounds);
        
        @JsProperty
        public native void setScrollZoom(boolean enabled);
        
        @JsProperty
        public native void setBoxZoom(boolean enabled);
        
        @JsProperty
        public native void setDragRotate(boolean enabled);
        
        @JsProperty
        public native void setDragPan(boolean enabled);
        
        @JsProperty
        public native void setKeyboard(boolean enabled);
        
        @JsProperty
        public native void setDoubleClickZoom(boolean enabled);
        
        @JsProperty
        public native void setTouchZoomRotate(boolean enabled);
        
        @JsProperty
        public native void setCenter(LngLat center);
        
        @JsProperty
        public native void setZoom(int value);
        
        @JsProperty
        public native void setBearing(int degrees);
        
        @JsProperty
        public native void setPitch(int degrees);
    }

    private MapOptions() {
    }
}
