package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import com.tomtom.gwt.mapbox.gl.client.Point;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
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
    public static AnimationOptions build(Integer durationMillis, EasingFunction easingFunction, Point offset, Boolean animate) {
        AnimationOptions options = new AnimationOptions();
        if (durationMillis != null) {
            options.setDuration(durationMillis);
        }
        if (easingFunction != null) {
            options.setEasing(easingFunction);
        }
        if (offset != null) {
            options.setOffset(offset);
        }
        if (animate != null) {
            options.setAnimate(animate);
        }
        return options;
    }
    
    private AnimationOptions() {
    }
    
    @JsProperty
    private native void setDuration(Integer millis);
    
    @JsProperty
    private native void setEasing(EasingFunction easing);
    
    @JsProperty
    private native void setOffset(Point offset);
    
    @JsProperty
    private native void setAnimate(Boolean animate);
}
