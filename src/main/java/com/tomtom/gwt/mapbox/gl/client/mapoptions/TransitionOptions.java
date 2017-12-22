package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * A style's transition property provides global transition defaults for that style.
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec#root-transition
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class TransitionOptions {
    
    private TransitionOptions() {
    }
    
    /**
     * Builds a new transition properties object.
     * @param durationMillis Time allotted for transitions to complete. Optional number greater than or equal to 0. Units in milliseconds. Defaults to 300.
     * @param delayMillis Length of time before a transition begins. Optional number greater than or equal to 0. Units in milliseconds. Defaults to 0.
     * @return 
     */
    @JsOverlay
    public static final TransitionOptions build(Integer durationMillis, Integer delayMillis) {
        TransitionOptions options = new TransitionOptions();
        if (durationMillis != null) {
            options.setDuration(durationMillis);
        }
        if (delayMillis != null) {
            options.setDelay(delayMillis);
        }
        return options;
    }
    
    @JsProperty
    private native void setDuration(double durationMillis);
    
    @JsProperty
    private native void setDelay(double delayMillis);
}
