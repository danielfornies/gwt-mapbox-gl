package com.tomtom.gwt.mapbox.gl.client.controls;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * A ScaleControl control displays the ratio of a distance on the map to the corresponding distance on the ground.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#ScaleControl
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class ScaleControl extends AbstractControl {
    
    public static enum ScaleUnit {
        metric,
        imperial
    }
    
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = MAPBOX_GL_NAMESPACE)
    public static final class ScaleOptions {
        
        @JsOverlay
        public static final ScaleOptions build(Integer maxWidthPixels, ScaleUnit unit) {
            ScaleOptions options = new ScaleOptions();
            if (maxWidthPixels != null) {
                options.setMaxWidth(maxWidthPixels);
            }
            if (unit != null) {
                options.setUnit(unit.name());
            }
            return options;
        }
        
        private ScaleOptions() {
        }
        
        @JsProperty
        private native void setMaxWidth(int maxWidthPixels);
        
        @JsProperty
        private native void setUnit(String unit);
    }
    
    public ScaleControl(ScaleOptions options) {
    }
}
