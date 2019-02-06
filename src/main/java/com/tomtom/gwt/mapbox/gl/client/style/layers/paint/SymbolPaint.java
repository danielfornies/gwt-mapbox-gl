package com.tomtom.gwt.mapbox.gl.client.style.layers.paint;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArrayInteger;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.ICON_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.ICON_HALO_BLUR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.ICON_HALO_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.ICON_HALO_WIDTH;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.ICON_OPACITY;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.ICON_TRANSLATE;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.ICON_TRANSLATE_ANCHOR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.TEXT_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.TEXT_HALO_BLUR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.TEXT_HALO_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.TEXT_HALO_WIDTH;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.TEXT_OPACITY;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.TEXT_TRANSLATE;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.TEXT_TRANSLATE_ANCHOR;
import com.tomtom.gwt.mapbox.gl.client.style.other.StyleFunction;
import com.tomtom.gwt.mapbox.gl.client.api.mapoptions.Anchor;
import com.tomtom.gwt.mapbox.gl.client.style.expressions.Expression;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Paint properties for LayerType.SYMBOL.
 * @see https://www.mapbox.com/mapbox-gl-style-spec/#paint_symbol
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class SymbolPaint extends AbstractPaint {

    private SymbolPaint() {
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
        public SymbolPaint build() {
            SymbolPaint paint = new SymbolPaint();
            JSUtils.copyAllNonNullFields(this, paint);
            return paint;
        }
        
        /**
         * The opacity at which the icon will be drawn.
         * @param value Defaults to 1. Requires icon-image.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-opacity
         */
        @JsOverlay
        public Builder withIconOpacity(int value) {
            JSUtils.setInt(this, ICON_OPACITY, value);
            return this;
        }
        
        /**
         * The opacity at which the icon will be drawn.
         * @param function Data-driven style for the opacity.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-opacity
         */
        @JsOverlay
        public Builder withIconOpacity(StyleFunction function) {
            JSUtils.setObject(this, ICON_OPACITY, function);
            return this;
        }
        
        /**
         * The opacity at which the icon will be drawn.
         * @param expression Data-driven expression for the opacity.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-opacity
         */
        @JsOverlay
        public Builder withIconOpacity(Expression expression) {
            JSUtils.setObject(this, ICON_OPACITY, expression.getExpressionArray());
            return this;
        }
        
        /**
         * The color of the icon. This can only be used with sdf icons.
         * @param value Defaults to #000000. Requires icon-image.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-color
         */
        @JsOverlay
        public Builder withIconColor(String value) {
            JSUtils.setObject(this, ICON_COLOR, value);
            return this;
        }
        
        /**
         * The color of the icon. This can only be used with sdf icons.
         * @param function Data-driven style function for the icon color.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-color
         */
        @JsOverlay
        public Builder withIconColor(StyleFunction function) {
            JSUtils.setObject(this, ICON_COLOR, function);
            return this;
        }
        
        /**
         * The color of the icon's halo. Icon halos can only be used with SDF icons.
         * @param value Defaults to rgba(0, 0, 0, 0). Requires icon-image.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-halo-color
         */
        @JsOverlay
        public Builder withIconHaloColor(String value) {
            JSUtils.setObject(this, ICON_HALO_COLOR, value);
            return this;
        }
        
        /**
         * The color of the icon's halo. Icon halos can only be used with SDF icons.
         * @param function Data-driven function for the halo color.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-halo-color
         */
        @JsOverlay
        public Builder withIconHaloColor(StyleFunction function) {
            JSUtils.setObject(this, ICON_HALO_COLOR, function);
            return this;
        }
        
        /**
         * Distance of halo to the icon outline.
         * @param widthPixels Units in pixels. Defaults to 0. Requires icon-image.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-halo-width
         */
        @JsOverlay
        public Builder withIconHaloWidth(int widthPixels) {
            JSUtils.setInt(this, ICON_HALO_WIDTH, widthPixels);
            return this;
        }
        
        /**
         * Distance of halo to the icon outline.
         * @param function Data-driven function for the halo width.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-halo-width
         */
        @JsOverlay
        public Builder withIconHaloWidth(StyleFunction function) {
            JSUtils.setObject(this, ICON_HALO_WIDTH, function);
            return this;
        }
        
        /**
         * Distance of halo to the icon outline.
         * @param expression Data-driven expression for the halo width.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-halo-width
         */
        @JsOverlay
        public Builder withIconHaloWidth(Expression expression) {
            JSUtils.setObject(this, ICON_HALO_WIDTH, expression.getExpressionArray());
            return this;
        }
        
        /**
         * Fade out the halo towards the outside.
         * @param blurPixels Units in pixels. Defaults to 0. Requires icon-image.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-halo-blur
         */
        @JsOverlay
        public Builder withIconHaloBlur(int blurPixels) {
            JSUtils.setInt(this, ICON_HALO_BLUR, blurPixels);
            return this;
        }
        
        /**
         * Fade out the halo towards the outside.
         * @param function Data-driven style function for the halo blur.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-halo-blur
         */
        @JsOverlay
        public Builder withIconHaloBlur(StyleFunction function) {
            JSUtils.setObject(this, ICON_HALO_BLUR, function);
            return this;
        }
        
        /**
         * Distance that the icon's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up. Requires icon-image.
         * @param rightPixels Units in pixels. Defaults to 0.
         * @param downPixels Units in pixels. Defaults to 0.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-translate
         */
        @JsOverlay
        public Builder withIconTranslate(int rightPixels, int downPixels) {
            JsArrayInteger array = JavaScriptObject.createArray(2).cast();
            array.set(0, rightPixels);
            array.set(1, downPixels);
            JSUtils.setObject(this, ICON_TRANSLATE, array);
            return this;
        }
        
        /**
         * Distance that the icon's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.
         * @param function function to set for the property
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-translate
         */
        @JsOverlay
        public Builder withIconTranslate(StyleFunction function) {
            JSUtils.setObject(this, ICON_TRANSLATE, function);
            return this;
        }

        /**
         * Controls the translation reference point.
         * @param value One of map, viewport. Defaults to map. Requires icon-image. Requires icon-translate.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-icon-translate-anchor
         */
        @JsOverlay
        public Builder withIconTranslateAnchor(Anchor value) {
            JSUtils.setObject(this, ICON_TRANSLATE_ANCHOR, value.name());
            return this;
        }
        
        /**
         * The opacity at which the text will be drawn.
         * @param opacity Defaults to 1. Requires text-field.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-opacity
         */
        @JsOverlay
        public Builder withTextOpacity(double opacity) {
            JSUtils.setDouble(this, TEXT_OPACITY, opacity);
            return this;
        }
        
        /**
         * The opacity at which the text will be drawn.
         * @param function Data-driven style function for the opacity value.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-opacity
         */
        @JsOverlay
        public Builder withTextOpacity(StyleFunction function) {
            JSUtils.setObject(this, TEXT_OPACITY, function);
            return this;
        }
        
        /**
         * The opacity at which the text will be drawn.
         * @param expression Data-driven style expression for the opacity value.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-opacity
         */
        @JsOverlay
        public Builder withTextOpacity(Expression expression) {
            JSUtils.setObject(this, TEXT_OPACITY, expression.getExpressionArray());
            return this;
        }
        
        /**
         * The color with which the text will be drawn.
         * @param color Defaults to #000000. Requires text-field.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-color
         */
        @JsOverlay
        public Builder withTextColor(String color) {
            JSUtils.setObject(this, TEXT_COLOR, color);
            return this;
        }
        
        /**
         * The color with which the text will be drawn.
         * @param function Data-driven style function for the color value.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-color
         */
        @JsOverlay
        public Builder withTextColor(StyleFunction function) {
            JSUtils.setObject(this, TEXT_COLOR, function);
            return this;
        }
        
        /**
         * The color with which the text will be drawn.
         * @param expression Data-driven style expression for the color value.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-color
         */
        @JsOverlay
        public Builder withTextColor(Expression expression) {
            JSUtils.setObject(this, TEXT_COLOR, expression.getExpressionArray());
            return this;
        }
        
        /**
         * The color of the text's halo, which helps it stand out from backgrounds.
         * @param color Defaults to rgba(0, 0, 0, 0). Requires text-field.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-halo-color
         */
        @JsOverlay
        public Builder withTextHaloColor(String color) {
            JSUtils.setObject(this, TEXT_HALO_COLOR, color);
            return this;
        }
        
        /**
         * The color of the text's halo, which helps it stand out from backgrounds.
         * @param function Data-drive style function for the halo color.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-halo-color
         */
        @JsOverlay
        public Builder withTextHaloColor(StyleFunction function) {
            JSUtils.setObject(this, TEXT_HALO_COLOR, function);
            return this;
        }
        
        /**
         * Distance of halo to the font outline. Max text halo width is 1/4 of the font-size.
         * @param widthPixels Units in pixels. Defaults to 0. Requires text-field.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-halo-width
         */
        @JsOverlay
        public Builder withTextHaloWidth(int widthPixels) {
            JSUtils.setInt(this, TEXT_HALO_WIDTH, widthPixels);
            return this;
        }
        
        /**
         * Distance of halo to the font outline. Max text halo width is 1/4 of the font-size.
         * @param function Data-drive style function for the halo width in pixels.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-halo-width
         */
        @JsOverlay
        public Builder withTextHaloWidth(StyleFunction function) {
            JSUtils.setObject(this, TEXT_HALO_WIDTH, function);
            return this;
        }
        
        /**
         * Distance of halo to the font outline. Max text halo width is 1/4 of the font-size.
         * @param expression Data-drive style expression for the halo width in pixels.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-halo-width
         */
        @JsOverlay
        public Builder withTextHaloWidth(Expression expression) {
            JSUtils.setObject(this, TEXT_HALO_WIDTH, expression.getExpressionArray());
            return this;
        }
        
        /**
         * The halo's fadeout distance towards the outside.
         * @param blurPixels Units in pixels. Defaults to 0. Requires text-field.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-halo-blur
         */
        @JsOverlay
        public Builder withTextHaloBlur(int blurPixels) {
            JSUtils.setInt(this, TEXT_HALO_BLUR, blurPixels);
            return this;
        }
        
        /**
         * Distance that the text's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.
         * @param xPixels Units in pixels. Defaults to 0. Requires text-field.
         * @param yPixels Units in pixels. Defaults to 0. Requires text-field.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-translate
         */
        @JsOverlay
        public Builder withTextTranslate(int xPixels, int yPixels) {
            JsArrayInteger array = JavaScriptObject.createArray(2).cast();
            array.set(0, xPixels);
            array.set(1, yPixels);
            JSUtils.setObject(this, TEXT_TRANSLATE, array);
            return this;
        }
        
        /**
         * Distance that the text's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.
         * @param expression Expression to set for the property.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-translate
         */
        @JsOverlay
        public Builder withTextTranslate(Expression expression) {
            JSUtils.setObject(this, TEXT_TRANSLATE, expression.getExpressionArray());
            return this;
        }
        
        /**
         * Distance that the text's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.
         * @param function function to set for the property
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-translate
         */
        @JsOverlay
        public Builder withTextTranslate(StyleFunction function) {
            JSUtils.setObject(this, TEXT_TRANSLATE, function);
            return this;
        }
        
        /**
         * Controls the translation reference point.
         * @param anchor One of map, viewport. Defaults to map. Requires text-field. Requires text-translate.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-text-translate-anchor
         */
        @JsOverlay
        public Builder withTextTranslateAnchor(Anchor anchor) {
            JSUtils.setObject(this, TEXT_TRANSLATE_ANCHOR, anchor.name());
            return this;
        }
    }
}
