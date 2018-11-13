package com.tomtom.gwt.mapbox.gl.client.style.layers.paint;

import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.FILL_EXTRUSION_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.FILL_EXTRUSION_HEIGHT;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.FILL_EXTRUSION_OPACITY;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.FILL_EXTRUSION_PATTERN;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.FILL_EXTRUSION_TRANSLATE;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.FILL_EXTRUSION_TRANSLATE_ANCHOR;
import com.tomtom.gwt.mapbox.gl.client.style.other.StyleFunction;
import com.tomtom.gwt.mapbox.gl.client.api.mapoptions.Anchor;
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
            JSUtils.copyAllNonNullFields(this, paint);
            return paint;
        }
        
        /**
         * The opacity of the entire fill extrusion layer. 
         * This is rendered on a per-layer, not per-feature, basis, and data-driven styling is not available.
         * @param opacity Paint property. Optional number between 0 and 1 inclusive. Defaults to 1.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-fill-extrusion-fill-extrusion-opacity
         */
        @JsOverlay
        public Builder withOpacity(double opacity) {
            JSUtils.setDouble(this, FILL_EXTRUSION_OPACITY, opacity);
            return this;
        }
        
        /**
         * The base color of the extruded fill. 
         * The extrusion's surfaces will be shaded differently based on this color in combination with the root light settings. If this color is specified as  rgba with an alpha component, 
         * the alpha component will be ignored; use fill-extrusion-opacity to set layer opacity.
         * @param color Paint property. Optional color. Defaults to "#000000". Disabled by fill-extrusion-pattern. Supports interpolate expressions. Transitionable.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-fill-extrusion-fill-extrusion-color
         */
        @JsOverlay
        public Builder withColor(String color) {
            JSUtils.setObject(this, FILL_EXTRUSION_COLOR, color);
            return this;
        }
        
        /**
         * The base color of the extruded fill. 
         * The extrusion's surfaces will be shaded differently based on this color in combination with the root light settings. If this color is specified as  rgba with an alpha component, 
         * the alpha component will be ignored; use fill-extrusion-opacity to set layer opacity.
         * @param colorFunction Interpolation property function to determine the color values.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-fill-extrusion-fill-extrusion-color
         */
        @JsOverlay
        public Builder withColor(StyleFunction colorFunction) {
            JSUtils.setObject(this, FILL_EXTRUSION_COLOR, colorFunction);
            return this;
        }
        
        /**
         * The geometry's offset. Values are [x, y] where negatives indicate left and up (on the flat plane), respectively.
         * @param rightOffsetPixels x offset in pixels. Positive indicates right, negative left.
         * @param downOffsetPixels Y offset in pixels. Positive indicates down, negative up.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-fill-extrusion-fill-extrusion-translate
         */
        @JsOverlay
        public Builder withTranslate(int rightOffsetPixels, int downOffsetPixels) {
            JSUtils.setObject(this, FILL_EXTRUSION_TRANSLATE, JSUtils.toJsArray(rightOffsetPixels, downOffsetPixels));
            return this;
        }
        
        /**
         * Controls the frame of reference for fill-extrusion-translate.
         * @param anchor Paint property. Optional enum. One of "map", "viewport". Defaults to "map". Requires fill-extrusion-translate.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-fill-extrusion-fill-extrusion-translate-anchor
         */
        @JsOverlay
        public Builder withTranslateAnchor(Anchor anchor) {
            JSUtils.setObject(this, FILL_EXTRUSION_TRANSLATE_ANCHOR, anchor);
            return this;
        }
        
        /**
         * Name of image in sprite to use for drawing images on extruded fills. 
         * For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512).
         * @param pattern Paint property. Optional string.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-fill-extrusion-fill-extrusion-pattern
         */
        @JsOverlay
        public Builder withPattern(String pattern) {
            JSUtils.setObject(this, FILL_EXTRUSION_PATTERN, pattern);
            return this;
        }
        
        /**
         * The height with which to extrude this layer.
         * @param heightMeters Paint property. Optional number greater than or equal to 0. Units in meters. Defaults to 0. 
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-fill-extrusion-fill-extrusion-height
         */
        @JsOverlay
        public Builder withHeight(double heightMeters) {
            JSUtils.setDouble(this, FILL_EXTRUSION_HEIGHT, heightMeters);
            return this;
        }
        
        /**
         * The height with which to extrude this layer.
         * @param heightFunction Interpolation/data driven function to determine the height values.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-fill-extrusion-fill-extrusion-height
         */
        @JsOverlay
        public Builder withHeight(StyleFunction heightFunction) {
            JSUtils.setObject(this, FILL_EXTRUSION_HEIGHT, heightFunction);
            return this;
        }
        
        /**
         * The height with which to extrude the base of this layer. Must be less than or equal to fill-extrusion-height.
         * @param baseMeters Paint property. Optional number greater than or equal to 0. Units in meters. Defaults to 0. 
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-fill-extrusion-fill-extrusion-base
         */
        @JsOverlay
        public Builder withBase(double baseMeters) {
            JSUtils.setDouble(this, FILL_EXTRUSION_HEIGHT, baseMeters);
            return this;
        }
        
        /**
         * The height with which to extrude the base of this layer. Must be less than or equal to fill-extrusion-height.
         * @param baseFunction Interpolation/data driven function to determine the base values.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-fill-extrusion-fill-extrusion-base
         */
        @JsOverlay
        public Builder withBase(StyleFunction baseFunction) {
            JSUtils.setObject(this, FILL_EXTRUSION_HEIGHT, baseFunction);
            return this;
        }
    }
}
