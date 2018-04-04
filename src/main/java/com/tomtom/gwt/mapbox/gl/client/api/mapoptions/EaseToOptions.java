package com.tomtom.gwt.mapbox.gl.client.api.mapoptions;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#easeTo
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class EaseToOptions {
    
    private EaseToOptions() {
    }
    
    /**
     * Builds a basic combination of optional animation and camera options.
     * @param animation Animation options. Can be null.
     * @param camera Camera options. Can be null.
     * @return 
     */
    @JsOverlay
    public static final EaseToOptions build(AnimationOptions animation, CameraOptions camera) {
        Builder builder = Builder.newBuilder();
        if (animation != null) {
            builder.withAnimation(animation);
        }
        if (camera != null) {
            builder.withCamera(camera);
        }
        return builder.build();
    }
    
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class Builder {
        
        private Builder() {
        }
        
        @JsOverlay
        public static Builder newBuilder() {
            return new Builder();
        }
        
        @JsOverlay
        public Builder withAnimation(AnimationOptions options) {
            JSUtils.copyAllFields(options, this);
            return this;
        }
        
        @JsOverlay
        public Builder withCamera(CameraOptions options) {
            JSUtils.copyAllFields(options, this);
            return this;
        }
        
        @JsOverlay
        public EaseToOptions build() {
            EaseToOptions options = new EaseToOptions();
            JSUtils.copyAllFields(this, options);
            return options;
        }
    }
}
