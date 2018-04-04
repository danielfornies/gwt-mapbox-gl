package com.tomtom.gwt.mapbox.gl.client.api.handlers;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Base class for the Mapbox GL interaction handlers with common methods.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Handlers
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public abstract class AbstractHandler {
    
    /**
     * @return Whether this handler (user interaction type) is enabled.
     */
    public native boolean isEnabled();
    
    /**
     * Enables this handler, so the corresponding user interactions will work again.
     */
    public native void enable();
    
    /**
     * Disables this handler, so the corresponding user interactions won't have any effect..
     */
    public native void disable();
}
