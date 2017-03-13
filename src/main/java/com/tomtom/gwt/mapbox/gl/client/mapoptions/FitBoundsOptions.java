package com.tomtom.gwt.mapbox.gl.client.mapoptions;

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
         * @param paddingPixels (default 0) The amount of padding, in pixels, to allow around the specified bounds.
         * @return This builder.
         */
        @JsOverlay
        public Builder withPadding(int paddingPixels) {
            setPadding(paddingPixels);
            return this;
        }
        
        /**
         * @param padding The amount of padding in pixels to add to the given bounds.
         * @return This builder.
         */
        @JsOverlay
        public Builder withPadding(PaddingOptions padding) {
            setPadding(padding);
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
        private native void setPadding(Object padding);

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
