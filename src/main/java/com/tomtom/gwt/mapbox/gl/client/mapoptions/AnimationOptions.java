package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import com.tomtom.gwt.mapbox.gl.client.Point;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#AnimationOptions
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class AnimationOptions {
    
    @JsOverlay
    public static final AnimationOptions DEFAULT = Builder.newBuilder().build();
    
    @JsOverlay
    public static final AnimationOptions DISABLED = Builder.newBuilder().withAnimate(false).build();
    
    private AnimationOptions() {
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
         * @param millis The animation's duration, measured in milliseconds.
         * @return This builder.
         */
        @JsOverlay
        public Builder withDuration(int millis) {
            setDuration(millis);
            return this;
        }
        
        /**
         *
         * @param easing The animation's easing function.
         * @return This builder.
         */
        @JsOverlay
        public Builder withEasing(EasingFunction easing) {
            setEasing(easing);
            return this;
        }
        
        /**
         * @param offset x and  y coordinates representing the animation's origin of movement relative to the map's center.
         * @return This builder.
         */
        @JsOverlay
        public Builder withOffset(Point offset) {
            setOffset(offset);
            return this;
        }
        
        /**
         * @param animate If  false , no animation will occur.
         * @return This builder.
         */
        @JsOverlay
        public Builder withAnimate(boolean animate) {
            setAnimate(animate);
            return this;
        }
        
        @JsProperty
        private native void setDuration(int millis);

        @JsProperty
        private native void setEasing(EasingFunction easing);

        @JsProperty
        private native void setOffset(Point offset);

        @JsProperty
        private native void setAnimate(boolean animate);
        
        @JsOverlay
        public AnimationOptions build() {
            AnimationOptions options = new AnimationOptions();
            JSUtils.copyAllFields(this, options);
            return options;
        }
    }
}
