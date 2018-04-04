package com.tomtom.gwt.mapbox.gl.client.style.other;

/**
 * One of identity, exponential, interval, categorical.
 * @see https://www.mapbox.com/mapbox-gl-style-spec/#function-type
 */
public enum FunctionType {
    /**
     * functions return their input as their output.
     */
    identity,
    /**
     * functions generate an output by interpolating between stops just less than and just greater than the function input. The domain must be numeric. 
     * This is the default for properties marked with the "exponential" symbol.
     */
    exponential,
    /**
     * functions return the output value of the stop just less than the function input. The domain must be numeric. 
     * This is the default for properties marked with , the "interval" symbol.
     */
    interval,
    /**
     * functions return the output value of the stop equal to the function input.
     */
    categorical
}
