package com.tomtom.gwt.mapbox.gl.client.layers.style;

import com.google.gwt.core.client.JsArray;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * The value for any layout or paint property may be specified as a function. 
 * Functions allow you to make the appearance of a map feature change with the current zoom level and/or the feature's properties.
 * @see https://www.mapbox.com/mapbox-gl-style-spec/#types-function
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class StyleFunction {

    private StyleFunction() {
    }
    
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public final static class Builder {

        private Builder() {
        }
        
        @JsOverlay
        public static Builder newBuilder() {
            return new Builder();
        }

        @JsOverlay
        public StyleFunction build() {
            StyleFunction function = new StyleFunction();
            JSUtils.copyAllFields(this, function);
            return function;
        }

        /**
         * Functions are defined in terms of input and output values. A set of one input value and one output value is known as a "stop."
         * @param stops Required (except for identity functions) array.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#function-stops
         */
        @JsOverlay
        public void setStopsArray(Object[][] stops) {
            setStops(JSUtils.toDoubleJsArray(stops));
        }
        
        // Using JsArray to avoid unnecessary java stuff in the arrays. 
        // This was done to try to fix a bug, but the bug turned to be inside mapbox library itself. However, leaving it like this shouldn't harm.
        @JsProperty
        private native void setStops(JsArray<JsArray> stops);

        /**
         * If specified, the function will take the specified feature property as an input. See Zoom Functions and Property Functions for more information.
         * @param propertyName Optional string.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#function-property
         */
        @JsProperty
        public native void setProperty(String propertyName);

        /**
         * The exponential base of the interpolation curve. It controls the rate at which the function output increases. 
         * Higher values make the output increase more towards the high end of the range. With values close to 1 the output increases linearly.
         * @param base Optional number. Default is 1.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#function-base
         */
        @JsProperty
        public native void setBase(double base);

        /**
         * A value to serve as a fallback function result when a value isn't otherwise available. It is used in the following circumstances:
         *
         * In categorical functions, when the feature value does not match any of the stop domain values. 
         * In property and zoom-and-property functions, when a feature does not contain a value for the specified property. 
         * In identity functions, when the feature value is not valid for the style property (for example, if the function is being used for a circle-color property but the feature property value is not a string or not a valid color). 
         * In interval or exponential property and zoom-and-property functions, when the feature value is not numeric.
         * If no default is provided, the style property's default is used in these circumstances.
         *
         * @param value The value to serve as a fallback function result when a value isn't otherwise available
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#function-default
         */
        @JsProperty
        public native void setDefault(Object value);

        /**
         * The color space in which colors interpolated. 
         * Interpolating colors in perceptual color spaces like LAB and HCL tend to produce color ramps that look more consistent and produce colors that can be differentiated more easily than those interpolated in RGB space.
         * @param colorSpace Optional enum. One of rgb, lab, hcl.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#function-colorSpace
         */
        @JsOverlay
        public final void setColorSpace(ColorSpace colorSpace) {
            setColorSpace(colorSpace.name());
        }

        @JsProperty
        private native void setColorSpace(String colorSpace);

        /**
         * 
         * @param type Optional enum. One of identity, exponential, interval, categorical.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#function-type
         */
        @JsOverlay
        public final void setType(FunctionType type) {
            setType(type.name());
        }

        @JsProperty
        private native void setType(String type);
    }
}
