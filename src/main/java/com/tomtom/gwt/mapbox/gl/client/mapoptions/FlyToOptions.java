package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * TODO: somehow extend or aggregate with CameraOptions and AnimationOptions together
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#flyTo
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class FlyToOptions {
    
    @JsFunction
    public interface FlyToEasing {
        
        double apply(double input);
    }
    
    @JsOverlay
    public static FlyToOptions build() {
        return new FlyToOptions();
    }
    
    @JsOverlay
    public static FlyToOptions build(CameraOptions cameraOptions, AnimationOptions animationOptions, 
            Double curve, Integer minZoom, Double speed, Double screenSpeed, FlyToEasing easing) {
        FlyToOptions options = new FlyToOptions();
        if (cameraOptions != null) {
            JSUtils.copyAllFields(cameraOptions, options);
        }
        if (animationOptions != null) {
            JSUtils.copyAllFields(animationOptions, options);
        }
        if (curve != null) {
            options.setCurve(curve);
        }
        if (minZoom != null) {
            options.setMinZoom(minZoom);
        }
        if (speed != null) {
            options.setSpeed(speed);
        }
        if (screenSpeed != null) {
            options.setScreenSpeed(screenSpeed);
        }
        if (easing != null) {
            options.setEasing(easing);
        }
        return options;
    }
    
    private FlyToOptions() {
    }
    
    @JsProperty
    private native void setCurve(double curveAmount);
    
    @JsProperty
    private native void setMinZoom(int minZoom);
    
    @JsProperty
    private native void setSpeed(double curveScreenfulsPerSecond);
    
    @JsProperty
    private native void setScreenSpeed(double screenfulsPerSecond);
    
    @JsProperty
    private native void setEasing(FlyToEasing easing);
    
    
    // TODO
    
    
}
