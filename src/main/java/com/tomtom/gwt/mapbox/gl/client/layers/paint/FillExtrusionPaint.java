package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Paint properties for LayerType.FILL_EXTRUSION.
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-fill-extrusion
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class FillExtrusionPaint {
    
    private FillExtrusionPaint() {
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
        public FillExtrusionPaint build() {
            FillExtrusionPaint paint = new FillExtrusionPaint();
            JSUtils.copyAllFields(this, paint);
            return paint;
        }
        
        // TODO
        
        
//            public static final String FILL_EXTRUSION_OPACITY = "fill-extrusion-opacity";
//    public static final String FILL_EXTRUSION_COLOR = "fill-extrusion-color";
//    public static final String FILL_EXTRUSION_TRANSLATE = "fill-extrusion-translate";
//    public static final String FILL_EXTRUSION_TRANSLATE_ANCHOR = "fill-extrusion-translate-anchor";
//    public static final String FILL_EXTRUSION_PATTERN = "fill-extrusion-pattern";
//    public static final String FILL_EXTRUSION_HEIGHT = "fill-extrusion-height";
//    public static final String FILL_EXTRUSION_BASE = "fill-extrusion-base";
    }
}
