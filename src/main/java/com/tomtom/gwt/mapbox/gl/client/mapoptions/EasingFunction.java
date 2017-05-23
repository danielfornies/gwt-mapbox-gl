package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import jsinterop.annotations.JsFunction;

/**
 * Basic interface for an easing function.
 * @see AnimationOptions.
 */
@FunctionalInterface
@JsFunction
public interface EasingFunction {
    
    /**
     * Applies the easing transformation to the given input.
     * @param input The input value for which to apply the transformation. Expected values from 0 to 1.
     * @return The "eased" input.
     */
    double apply(double input);
}
