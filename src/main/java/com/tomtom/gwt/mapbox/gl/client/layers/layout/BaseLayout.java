package com.tomtom.gwt.mapbox.gl.client.layers.layout;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.VISIBILITY;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;

/**
 * Common parent class for all layer layout types.
 * @see https://www.mapbox.com/mapbox-gl-style-spec/#layers
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class BaseLayout {
    
    protected BaseLayout() {
    }
    
    public static enum Visibility {
        visible,
        none
    }
    
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static class Builder<T extends Builder> {
        
        protected Builder() {
        }
        
        /**
         * 
         * @return A new base builder. Use only when no need to use an extension of this Builder.
         */
        @JsOverlay
        public static final Builder newBaseBuilder() {
            return new Builder();
        }
        
        @JsOverlay
        public final T withVisibility(Visibility value) {
            setVisibility(value.name());
            return (T)this;
        }

        @JsProperty(name = VISIBILITY)
        private native void setVisibility(Object value);
        
        /**
         * @return The built base layout. Use only when no need to use an extension of this builder.
         */
        @JsOverlay
        public final BaseLayout buildBaseLayout() {
            BaseLayout layout = new BaseLayout();
            JSUtils.copyAllFields(this, layout);
            return layout;
        }
    }
}
