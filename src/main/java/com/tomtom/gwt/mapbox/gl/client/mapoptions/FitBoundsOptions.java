package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import com.tomtom.gwt.mapbox.gl.client.Point;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#fitBounds
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class FitBoundsOptions {

    @JsOverlay
    public static final FitBoundsOptions DEFAULT = Builder.newBuilder().build();
    
    private FitBoundsOptions() {
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
         * @param options The animation options to merge into these fit-bounds options. They will be used when internally flyTo or easyTo is invoked. If set, must not be null.
         * @return This builder.
         */
        @JsOverlay
        public Builder withAnimation(AnimationOptions options) {
            JSUtils.copyAllFields(options, this);
            return this;
        }
        
        /**
         * @param options The camera options to merge into these fit-bounds options. They will be used when internally flyTo or easyTo is invoked. If set, must not be null.
         * @return This builder.
         */
        @JsOverlay
        public Builder withCamera(CameraOptions options) {
            JSUtils.copyAllFields(options, this);
            return this;
        }
        
        /**
         * @param linear (default false). If  true , the map transitions using Map#easeTo . If  false , the map transitions using Map#flyTo. 
         * @return This builder.
         */
        @JsOverlay
        public Builder withLinear(boolean linear) {
            setLinear(linear);
            return this;
        }
        
        /**
         * @param easingFunction An easing function for the animated transition.
         * @return This builder.
         */
        @JsOverlay
        public Builder withEasing(EasingFunction easingFunction) {
            setEasing(easingFunction);
            return this;
        }
        
        /**
         * @param paddingPixels (default 0) The amount of padding, in pixels, to allow around the specified bounds.
         * @return This builder.
         */
        @JsOverlay
        public Builder withPadding(int paddingPixels) {
            setPadding(paddingPixels);
            return this;
        }
        
        /**
         * @param offsetPixels (default [0,0]) The center of the given bounds relative to the map's center, measured in pixels.
         * @return This builder.
         */
        @JsOverlay
        public Builder withOffset(Point offsetPixels) {
            setOffset(offsetPixels);
            return this;
        }
        
        /**
         * @param maxZoom The maximum zoom level to allow when the map view transitions to the specified bounds.
         * @return This builder.
         */
        @JsOverlay
        public Builder withMaxZoom(int maxZoom) {
            setMaxZoom(maxZoom);
            return this;
        }
        
        @JsProperty
        private native void setLinear(boolean linear);

        @JsProperty
        private native void setEasing(EasingFunction easingFunction);

        @JsProperty
        private native void setPadding(int paddingPixels);

        @JsProperty
        private native void setOffset(Point offsetPixels);

        @JsProperty
        private native void setMaxZoom(int maxZoom);
        
        @JsOverlay
        public FitBoundsOptions build() {
            FitBoundsOptions options = new FitBoundsOptions();
            JSUtils.copyAllFields(this, options);
            return options;
        }
    }
}
