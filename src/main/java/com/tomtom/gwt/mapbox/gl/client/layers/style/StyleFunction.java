package com.tomtom.gwt.mapbox.gl.client.layers.style;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * @see https://www.mapbox.com/mapbox-gl-style-spec/#types-function
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class StyleFunction {

    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public final static class Builder {

        @JsOverlay
        public static Builder newBuilder() {
            return new Builder();
        }

        private Builder() {
        }
        
        @JsOverlay
        public StyleFunction build() {
            StyleFunction function = new StyleFunction();
            JSUtils.copyAllFields(this, function);
            return function;
        }
        
        @JsProperty
        public native void setStops(Object[][] stops);

        @JsProperty
        public native void setProperty(String propertyName);
        
        @JsProperty
        public native void setBase(double base);

        @JsOverlay
        public final void setType(FunctionType type) {
            setType(type.name());
        }
        
        @JsProperty
        private native void setType(String type);
    }

    private StyleFunction() {
    }
}
