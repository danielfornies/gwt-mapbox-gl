package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import com.tomtom.gwt.mapbox.gl.client.layers.paint.AbstractPaint.Anchor;
import com.tomtom.gwt.mapbox.gl.client.layers.style.StyleFunction;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * https://www.mapbox.com/mapbox-gl-style-spec/#paint_line https://stackoverflow.com/questions/36867522/gwt-jsinterop-jstype-property-with-in-name#_=_
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class LinePaint extends AbstractPaint {

    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class Builder {

        @JsOverlay
        public static Builder newBuilder() {
            return new Builder();
        }

        private Builder() {
        }
        
        @JsOverlay
        public LinePaint build() {
            LinePaint paint = new LinePaint();
            JSUtils.copyAllFields(this, paint);
            return paint;
        }

        @JsOverlay
        public Builder withLineOpacity(double value) {
            JSUtils.setObject(this, "line-opacity", value);
            return this;
        }
        
        @JsOverlay
        public Builder withLineOpacityFunction(StyleFunction function) {
            JSUtils.setObject(this, "line-opacity", function);
            return this;
        }

        @JsOverlay
        public Builder withLineColor(String value) {
            JSUtils.setObject(this, "line-color", value);
            return this;
        }
        
        @JsOverlay
        public Builder withLineColorFunction(StyleFunction function) {
            JSUtils.setObject(this, "line-color", function);
            return this;
        }

        @JsOverlay
        public Builder withLineTranslate(double[][] rightDownPixelsOffset) {
            JSUtils.setObject(this, "line-translate", rightDownPixelsOffset);
            return this;
        }
        
        @JsOverlay
        public Builder withLineTranslateFunction(StyleFunction function) {
            JSUtils.setObject(this, "line-translate", function);
            return this;
        }

        @JsOverlay
        public Builder withLineTranslateAnchor(Anchor anchor) {
            withLineTranslateAnchor(anchor.name());
            return this;
        }
        
        @JsOverlay
        public Builder withLineTranslateAnchorFunction(StyleFunction function) {
            withLineTranslateAnchor(function);
            return this;
        }

        @JsOverlay
        public Builder withLineTranslateAnchor(Object value) {
            JSUtils.setObject(this, "line-translate-anchor", value);
            return this;
        }

        @JsOverlay
        public Builder withLineWidth(int widthPixels) {
            JSUtils.setInt(this, "line-width", widthPixels);
            return this;
        }

        @JsOverlay
        public Builder withLineWidthFunction(StyleFunction widthFunction) {
            JSUtils.setObject(this, "line-width", widthFunction);
            return this;
        }

        @JsOverlay
        public Builder withLineGapWidth(int innerGapWidthPixels) {
            JSUtils.setInt(this, "line-gap-width", innerGapWidthPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withLineGapWidthFunction(StyleFunction function) {
            JSUtils.setObject(this, "line-gap-width", function);
            return this;
        }

        @JsOverlay
        public Builder withLineOffset(int pixelsOffset) {
            JSUtils.setObject(this, "line-offset", pixelsOffset);
            return this;
        }
        
        @JsOverlay
        public Builder withLineOffsetFunction(StyleFunction function) {
            JSUtils.setObject(this, "line-offset", function);
            return this;
        }

        @JsOverlay
        public Builder withLineBlur(int blurPixels) {
            JSUtils.setObject(this, "line-blur", blurPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withLineBlurFunction(StyleFunction function) {
            JSUtils.setObject(this, "line-blur", function);
            return this;
        }

        @JsOverlay
        public Builder withLineDashArray(double[] lineWidthLengths) {
            JSUtils.setObject(this, "line-dasharray", lineWidthLengths);
            return this;
        }
        
        @JsOverlay
        public Builder withLineDashArrayFunction(StyleFunction function) {
            JSUtils.setObject(this, "line-dasharray", function);
            return this;
        }

        @JsOverlay
        public Builder withLinePattern(String linePatternImage) {
            JSUtils.setObject(this, "line-pattern", linePatternImage);
            return this;
        }
        
        @JsOverlay
        public Builder withLinePatternFunction(StyleFunction function) {
            JSUtils.setObject(this, "line-pattern", function);
            return this;
        }
    }

    private LinePaint() {
    }
}
