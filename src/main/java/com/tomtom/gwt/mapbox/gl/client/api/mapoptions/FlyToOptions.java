package com.tomtom.gwt.mapbox.gl.client.api.mapoptions;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Options describing the destination and animation of the transition. 
 * Accepts CameraOptions , AnimationOptions, and other additional options.
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#flyTo
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class FlyToOptions {

    @JsOverlay
    public static final FlyToOptions DEFAULT = Builder.newBuilder().build();
    
    private FlyToOptions() {
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
         * @param options The animation options to merge into these flyTo options. If set, must not be null.
         * @return This builder.
         */
        @JsOverlay
        public Builder withAnimation(AnimationOptions options) {
            JSUtils.copyAllNonNullFields(options, this);
            return this;
        }
        
        /**
         * @param options The camera options to merge into these flyTo options. If set, must not be null.
         * @return This builder.
         */
        @JsOverlay
        public Builder withCamera(CameraOptions options) {
            JSUtils.copyAllNonNullFields(options, this);
            return this;
        }
        
        /**
         * @param curveAmount (default 1.42) The zooming "curve" that will occur along the flight path. 
         * A high value maximizes zooming for an exaggerated animation, while a low value minimizes zooming for an effect closer to Map#easeTo .
         * 1.42 is the average value selected by participants in the user study discussed in van Wijk (2003) . 
         * A value of  Math.pow(6, 0.25) would be equivalent to the root mean squared average velocity. 
         * A value of 1 would produce a circular motion.
         * @return This builder.
         */
        @JsOverlay
        public Builder withCurve(double curveAmount) {
            setCurve(curveAmount);
            return this;
        }
        
        /**
         * @param minZoom The zero-based zoom level at the peak of the flight path. If  options.curve is specified, this option is ignored.
         * @return This builder.
         */
        @JsOverlay
        public Builder withMinZoom(double minZoom) {
            setMinZoom(minZoom);
            return this;
        }
        
        /**
         * @param curveScreenfulsPerSecond (default 1.2) The average speed of the animation defined in relation to  options.curve . 
         * A speed of 1.2 means that the map appears to move along the flight path by 1.2 times  options.curve screenfuls every second. 
         * A screenful is the map's visible span. It does not correspond to a fixed physical distance, but varies by zoom level.
         * @return This builder.
         */
        @JsOverlay
        public Builder withSpeed(double curveScreenfulsPerSecond) {
            setSpeed(curveScreenfulsPerSecond);
            return this;
        }
        
        /**
         * @param screenfulsPerSecond The average speed of the animation measured in screenfuls per second, assuming a linear timing curve. 
         * If options.speed is specified, this option is ignored.
         * @return This builder.
         */
        @JsOverlay
        public Builder withScreenSpeed(double screenfulsPerSecond) {
            setScreenSpeed(screenfulsPerSecond);
            return this;
        }
        
        @JsProperty
        private native void setCurve(double curveAmount);

        @JsProperty
        private native void setMinZoom(double minZoom);

        @JsProperty
        private native void setSpeed(double curveScreenfulsPerSecond);

        @JsProperty
        private native void setScreenSpeed(double screenfulsPerSecond);

        @JsOverlay
        public FlyToOptions build() {
            FlyToOptions options = new FlyToOptions();
            JSUtils.copyAllNonNullFields(this, options);
            return options;
        }
    }
}
