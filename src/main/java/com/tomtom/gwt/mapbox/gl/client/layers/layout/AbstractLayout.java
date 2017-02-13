package com.tomtom.gwt.mapbox.gl.client.layers.layout;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.VISIBILITY;

/**
 * Common parent class for all layer layout types.
 * @see https://www.mapbox.com/mapbox-gl-style-spec/#layers
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public abstract class AbstractLayout {
    
    protected AbstractLayout() {
    }
    
    public static enum Visibility {
        visible,
        none
    }
    
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public abstract static class AbstractLayoutBuilder<T extends AbstractLayoutBuilder> {
        
        protected AbstractLayoutBuilder() {
        }
        
        @JsOverlay
        public final T withVisibility(Visibility value) {
            setVisibility(value.name());
            return (T)this;
        }

        @JsProperty(name = VISIBILITY)
        private native void setVisibility(Object value);
    }
}
