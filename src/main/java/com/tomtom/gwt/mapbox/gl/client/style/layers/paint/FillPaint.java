package com.tomtom.gwt.mapbox.gl.client.style.layers.paint;

import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.FILL_ANTIALIAS;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.FILL_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.FILL_OPACITY;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.FILL_OUTLINE_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.FILL_PATTERN;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.FILL_TRANSLATE;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.FILL_TRANSLATE_ANCHOR;
import com.tomtom.gwt.mapbox.gl.client.style.other.StyleFunction;
import com.tomtom.gwt.mapbox.gl.client.api.mapoptions.Anchor;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Paint properties for LayerType.FILL.
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-fill
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class FillPaint extends AbstractPaint {
    
    private FillPaint() {
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
        public FillPaint build() {
            FillPaint paint = new FillPaint();
            JSUtils.copyAllFields(this, paint);
            return paint;
        }
        
        /**
         * Whether or not the fill should be antialiased.
         * @param antiAlias Paint property. Optional boolean. Defaults to true.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-fill-fill-antialias
         */
        @JsOverlay
        public Builder withAntialias(boolean antiAlias) {
            JSUtils.setBoolean(this, FILL_ANTIALIAS, antiAlias);
            return this;
        }

        /**
         * The opacity of the entire fill layer. In contrast to the fill-color, this value will also affect the 1px stroke around the fill, if the stroke is used.
         * @param opacity Paint property. Optional number between 0 and 1 inclusive. Defaults to 1. Transitionable.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-fill-fill-opacity
         */
        @JsOverlay
        public Builder withOpacity(double opacity) {
            JSUtils.setDouble(this, FILL_OPACITY, opacity);
            return this;
        }
        
        /**
         * The opacity of the entire fill layer. In contrast to the fill-color, this value will also affect the 1px stroke around the fill, if the stroke is used.
         * @param opacityFunction Interpolate function to set the opacity value.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-fill-fill-opacity
         */
        @JsOverlay
        public Builder withOpacity(StyleFunction opacityFunction) {
            JSUtils.setObject(this, FILL_OPACITY, opacityFunction);
            return this;
        }
        
        /**
         * The color of the filled part of this layer. 
         * This color can be specified as rgba with an alpha component and the color's opacity will not affect the opacity of the 1px stroke, if it is used.
         * @param color Paint property. Optional color. Defaults to "#000000". Disabled by fill-pattern.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-fill-fill-color
         */
        @JsOverlay
        public Builder withColor(String color) {
            JSUtils.setObject(this, FILL_COLOR, color);
            return this;
        }
        
        /**
         * The color of the filled part of this layer. 
         * This color can be specified as rgba with an alpha component and the color's opacity will not affect the opacity of the 1px stroke, if it is used.
         * @param colorFunction Interpolate function to establish the color values.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-fill-fill-color
         */
        @JsOverlay
        public Builder withColor(StyleFunction colorFunction) {
            JSUtils.setObject(this, FILL_COLOR, colorFunction);
            return this;
        }
        
        /**
         * The outline color of the fill. Matches the value of fill-color if unspecified.
         * @param outlineColor Paint property. Optional color. Disabled by fill-pattern. Requires fill-antialias to be .
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-fill-fill-outline-color
         */
        @JsOverlay
        public Builder withOutlineColor(String outlineColor) {
            JSUtils.setObject(this, FILL_OUTLINE_COLOR, outlineColor);
            return this;
        }
        
        /**
         * The outline color of the fill. Matches the value of fill-color if unspecified.
         * @param outlineColorFunction Interpolate function to determine the outline color values. Disabled by fill-pattern. Requires fill-antialias to be .
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-fill-fill-outline-color
         */
        @JsOverlay
        public Builder withOutlineColor(StyleFunction outlineColorFunction) {
            JSUtils.setObject(this, FILL_OUTLINE_COLOR, outlineColorFunction);
            return this;
        }
        
        /**
         * The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.
         * @param rightPixelsOffset x pixels offset. Positive values indicate right, negative left.
         * @param downPixelsOffset y pixels offset. Positive values indicate down, negative up.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-fill-fill-translate
         */
        @JsOverlay
        public Builder withTranslate(int rightPixelsOffset, int downPixelsOffset) {
            JSUtils.setObject(this, FILL_TRANSLATE, JSUtils.toJsArray(rightPixelsOffset, downPixelsOffset));
            return this;
        }
        
        /**
         * Controls the frame of reference for fill-translate.
         * @param anchor Paint property. Optional enum. One of "map", "viewport". Defaults to "map". Requires fill-translate.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-fill-fill-translate-anchor
         */
        @JsOverlay
        public Builder withTranslateAnchor(Anchor anchor) {
            JSUtils.setObject(this, FILL_TRANSLATE_ANCHOR, anchor);
            return this;
        }
        
        /**
         * Name of image in sprite to use for drawing image fills. 
         * For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512).
         * @param patternSprite Paint property. Optional string. Transitionable.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-fill-fill-pattern
         */
        @JsOverlay
        public Builder withPattern(String patternSprite) {
            JSUtils.setObject(this, FILL_PATTERN, patternSprite);
            return this;
        }
    }
}
