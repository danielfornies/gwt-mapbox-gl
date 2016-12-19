package com.tomtom.gwt.mapbox.gl.client.layers.layout;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Common parent class for all layer layout types.
 * @see https://www.mapbox.com/mapbox-gl-style-spec/#layers
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public abstract class AbstractLayout {
    
    public static enum Visibility {
        visible,
        none
    }
    
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public abstract static class AbstractLayoutBuilder {
        
        protected AbstractLayoutBuilder() {
        }
        
        @JsOverlay
        public final AbstractLayoutBuilder withVisibility(Visibility value) {
            setVisibility(value.name());
            return this;
        }

        @JsProperty
        private native void setVisibility(Object value);
    }

    protected AbstractLayout() {
    }
}
