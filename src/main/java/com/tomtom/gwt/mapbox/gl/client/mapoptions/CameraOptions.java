package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import com.tomtom.gwt.mapbox.gl.client.LngLat;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#CameraOptions
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class CameraOptions {
    
    @JsOverlay
    public static final CameraOptions DEFAULT = Builder.newBuilder().build();
    
    private CameraOptions() {
    }
    
    @JsOverlay
    public static final CameraOptions build(LngLat center, Double zoom) {
        Builder builder = Builder.newBuilder();
        if (center != null) {
            builder.withCenter(center);
        }
        if (zoom != null) {
            builder.withZoom(zoom);
        }
        return builder.build();
    }
    
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class Builder {
        
        private Builder() {
        }
        
        @JsOverlay
        public static Builder newBuilder() {
            return new Builder();
        }
        
        /**
         * @param center The destination's center.
         * @return This builder.
         */
        @JsOverlay
        public Builder withCenter(LngLat center) {
            setCenter(center);
            return this;
        }
        
        /**
         * @param zoom The destination's zoom level.
         * @return This builder.
         */
        @JsOverlay
        public Builder withZoom(double zoom) {
            setZoom(zoom);
            return this;
        }
        
        /**
         * @param bearingDegrees The destination's bearing (rotation), measured in degrees counter-clockwise from north.
         * @return This builder.
         */
        @JsOverlay
        public Builder withBearing(int bearingDegrees) {
            setBearing(bearingDegrees);
            return this;
        }
        
        /**
         * @param pitchDegrees The destination's pitch (tilt), measured in degrees.
         * @return This builder.
         */
        @JsOverlay
        public Builder withPitch(int pitchDegrees) {
            setPitch(pitchDegrees);
            return this;
        }
        
        /**
         * @param zoomCenter If a  zoom is specified,  around determines the zoom center (defaults to the center of the map).
         * @return This builder.
         */
        @JsOverlay
        public Builder withAround(LngLat zoomCenter) {
            setAround(zoomCenter);
            return this;
        }
        
        @JsProperty
        private native void setCenter(LngLat center);

        @JsProperty
        private native void setZoom(double zoom);

        @JsProperty
        private native void setBearing(int bearingDegrees);

        @JsProperty
        private native void setPitch(int pitchDegrees);

        @JsProperty
        private native void setAround(LngLat zoomCenter);
        
        @JsOverlay
        public CameraOptions build() {
            CameraOptions options = new CameraOptions();
            JSUtils.copyAllFields(this, options);
            return options;
        }
    }
}
