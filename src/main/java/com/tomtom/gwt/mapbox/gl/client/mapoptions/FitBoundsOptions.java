package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import com.tomtom.gwt.mapbox.gl.client.Point;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#fitBounds
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class FitBoundsOptions {
    
    @JsOverlay
    public static FitBoundsOptions build() {
        return new FitBoundsOptions();
    }
    
    @JsOverlay
    public static FitBoundsOptions build(Boolean linear, EasingFunction easingFunction, Integer paddingPixels, Point offsetPixels, Integer maxZoom) {
        FitBoundsOptions options = new FitBoundsOptions();
        if (linear != null) {
            options.setLinear(linear);
        }
        if (easingFunction != null) {
            options.setEasing(easingFunction);
        }
        if (paddingPixels != null) {
            options.setPadding(paddingPixels);
        }
        if (offsetPixels != null) {
            options.setOffset(offsetPixels);
        }
        if (maxZoom != null) {
            options.setMaxZoom(maxZoom);
        }
        return options;
    }
    
    private FitBoundsOptions() {
    }
    
    @JsProperty
    private native void setLinear(boolean value);
    
    @JsProperty
    private native void setEasing(EasingFunction easingFunction);
    
    @JsProperty
    private native void setPadding(int paddingPixels);
    
    @JsProperty
    private native void setOffset(Point offsetPixels);
    
    @JsProperty
    private native void setMaxZoom(int maxZoom);
}
