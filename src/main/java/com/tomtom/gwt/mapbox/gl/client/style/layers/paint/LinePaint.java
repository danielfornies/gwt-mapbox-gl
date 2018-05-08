package com.tomtom.gwt.mapbox.gl.client.style.layers.paint;

import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.LINE_BLUR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.LINE_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.LINE_DASHARRAY;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.LINE_GAP_WIDTH;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.LINE_OFFSET;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.LINE_OPACITY;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.LINE_PATTERN;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.LINE_TRANSLATE;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.LINE_TRANSLATE_ANCHOR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.LINE_WIDTH;
import com.tomtom.gwt.mapbox.gl.client.style.other.StyleFunction;
import com.tomtom.gwt.mapbox.gl.client.api.mapoptions.Anchor;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.LINE_GRADIENT;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Paint properties for LayerType.LINE.
 * @see https://www.mapbox.com/mapbox-gl-style-spec/#paint_line 
 * @see https://stackoverflow.com/questions/36867522/gwt-jsinterop-jstype-property-with-in-name#_=_
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class LinePaint extends AbstractPaint {

    private LinePaint() {
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
        public LinePaint build() {
            LinePaint paint = new LinePaint();
            JSUtils.copyAllFields(this, paint);
            return paint;
        }

        @JsOverlay
        public Builder withOpacity(double value) {
            JSUtils.setObject(this, LINE_OPACITY, value);
            return this;
        }
        
        @JsOverlay
        public Builder withOpacity(StyleFunction function) {
            JSUtils.setObject(this, LINE_OPACITY, function);
            return this;
        }

        @JsOverlay
        public Builder withColor(String value) {
            JSUtils.setObject(this, LINE_COLOR, value);
            return this;
        }
        
        @JsOverlay
        public Builder withColor(StyleFunction function) {
            JSUtils.setObject(this, LINE_COLOR, function);
            return this;
        }

        @JsOverlay
        public Builder withTranslate(int rightPixelsOffset, int downPixelsOffset) {
            JSUtils.setObject(this, LINE_TRANSLATE, JSUtils.toJsArray(rightPixelsOffset, downPixelsOffset));
            return this;
        }
        
        @JsOverlay
        public Builder withTranslate(StyleFunction function) {
            JSUtils.setObject(this, LINE_TRANSLATE, function);
            return this;
        }

        @JsOverlay
        public Builder withTranslateAnchor(Anchor anchor) {
            JSUtils.setObject(this, LINE_TRANSLATE_ANCHOR, anchor.name());
            return this;
        }
        
        @JsOverlay
        public Builder withTranslateAnchor(StyleFunction function) {
            JSUtils.setObject(this, LINE_TRANSLATE_ANCHOR, function);
            return this;
        }
        
        @JsOverlay
        public Builder withWidth(int widthPixels) {
            JSUtils.setInt(this, LINE_WIDTH, widthPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withWidth(StyleFunction widthFunction) {
            JSUtils.setObject(this, LINE_WIDTH, widthFunction);
            return this;
        }

        @JsOverlay
        public Builder withGapWidth(int innerGapWidthPixels) {
            JSUtils.setInt(this, LINE_GAP_WIDTH, innerGapWidthPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withGapWidth(StyleFunction function) {
            JSUtils.setObject(this, LINE_GAP_WIDTH, function);
            return this;
        }

        @JsOverlay
        public Builder withOffset(int pixelsOffset) {
            JSUtils.setInt(this, LINE_OFFSET, pixelsOffset);
            return this;
        }
        
        @JsOverlay
        public Builder withOffset(StyleFunction function) {
            JSUtils.setObject(this, LINE_OFFSET, function);
            return this;
        }

        @JsOverlay
        public Builder withBlur(int blurPixels) {
            JSUtils.setInt(this, LINE_BLUR, blurPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withBlur(StyleFunction function) {
            JSUtils.setObject(this, LINE_BLUR, function);
            return this;
        }

        @JsOverlay
        public Builder withDashArray(double[] lineWidthLengths) {
            JSUtils.setObject(this, LINE_DASHARRAY, JSUtils.toJsArray(lineWidthLengths));
            return this;
        }
        
        @JsOverlay
        public Builder withDashArray(StyleFunction function) {
            JSUtils.setObject(this, LINE_DASHARRAY, function);
            return this;
        }

        @JsOverlay
        public Builder withPattern(String linePatternImage) {
            JSUtils.setObject(this, LINE_PATTERN, linePatternImage);
            return this;
        }
        
        @JsOverlay
        public Builder withPattern(StyleFunction function) {
            JSUtils.setObject(this, LINE_PATTERN, function);
            return this;
        }
        
        /**
         * Paint property. Optional color. Disabled by line-dasharray. Disabled by line-pattern. Requires source to be geojson.
         * @param color The color code for this gradient.
         * @return 
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-line-line-gradient
         */
        @JsOverlay
        public Builder withGradient(String color) {
            JSUtils.setObject(this, LINE_GRADIENT, color);
            return this;
        }
        
        /**
         * Paint property. Optional color. Disabled by line-dasharray. Disabled by line-pattern. Requires source to be geojson. Supports interpolate expressions.
         * @param colorFunction The function/expression to determine the color based on zoom/property values.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-line-line-gradient
         */
        @JsOverlay
        public Builder withGradient(StyleFunction colorFunction) {
            JSUtils.setObject(this, LINE_GRADIENT, colorFunction);
            return this;
        }
    }
}
