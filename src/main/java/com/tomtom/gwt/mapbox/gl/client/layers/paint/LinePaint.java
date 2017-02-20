package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.LINE_BLUR;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.LINE_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.LINE_DASHARRAY;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.LINE_GAP_WIDTH;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.LINE_OFFSET;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.LINE_OPACITY;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.LINE_PATTERN;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.LINE_TRANSLATE;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.LINE_TRANSLATE_ANCHOR;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.LINE_WIDTH;
import com.tomtom.gwt.mapbox.gl.client.layers.style.StyleFunction;
import com.tomtom.gwt.mapbox.gl.client.mapoptions.Anchor;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
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
        public Builder withOpacityFunction(StyleFunction function) {
            JSUtils.setObject(this, LINE_OPACITY, function);
            return this;
        }

        @JsOverlay
        public Builder withColor(String value) {
            JSUtils.setObject(this, LINE_COLOR, value);
            return this;
        }
        
        @JsOverlay
        public Builder withColorFunction(StyleFunction function) {
            JSUtils.setObject(this, LINE_COLOR, function);
            return this;
        }

        @JsOverlay
        public Builder withTranslate(double[][] rightDownPixelsOffset) {
            JSUtils.setObject(this, LINE_TRANSLATE, rightDownPixelsOffset);
            return this;
        }
        
        @JsOverlay
        public Builder withTranslateFunction(StyleFunction function) {
            JSUtils.setObject(this, LINE_TRANSLATE, function);
            return this;
        }

        @JsOverlay
        public Builder withTranslateAnchor(Anchor anchor) {
            withTranslateAnchor(anchor.name());
            return this;
        }
        
        @JsOverlay
        public Builder withTranslateAnchorFunction(StyleFunction function) {
            withTranslateAnchor(function);
            return this;
        }

        @JsOverlay
        public Builder withTranslateAnchor(Object value) {
            JSUtils.setObject(this, LINE_TRANSLATE_ANCHOR, value);
            return this;
        }
        
        @JsOverlay
        public Builder withWidth(int widthPixels) {
            JSUtils.setInt(this, LINE_WIDTH, widthPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withWidthFunction(StyleFunction widthFunction) {
            JSUtils.setObject(this, LINE_WIDTH, widthFunction);
            return this;
        }

        @JsOverlay
        public Builder withGapWidth(int innerGapWidthPixels) {
            JSUtils.setInt(this, LINE_GAP_WIDTH, innerGapWidthPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withGapWidthFunction(StyleFunction function) {
            JSUtils.setObject(this, LINE_GAP_WIDTH, function);
            return this;
        }

        @JsOverlay
        public Builder withOffset(int pixelsOffset) {
            JSUtils.setInt(this, LINE_OFFSET, pixelsOffset);
            return this;
        }
        
        @JsOverlay
        public Builder withOffsetFunction(StyleFunction function) {
            JSUtils.setObject(this, LINE_OFFSET, function);
            return this;
        }

        @JsOverlay
        public Builder withBlur(int blurPixels) {
            JSUtils.setObject(this, LINE_BLUR, blurPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withBlurFunction(StyleFunction function) {
            JSUtils.setObject(this, LINE_BLUR, function);
            return this;
        }

        @JsOverlay
        public Builder withDashArray(double[] lineWidthLengths) {
            JSUtils.setObject(this, LINE_DASHARRAY, lineWidthLengths);
            return this;
        }
        
        @JsOverlay
        public Builder withDashArrayFunction(StyleFunction function) {
            JSUtils.setObject(this, LINE_DASHARRAY, function);
            return this;
        }

        @JsOverlay
        public Builder withPattern(String linePatternImage) {
            JSUtils.setObject(this, LINE_PATTERN, linePatternImage);
            return this;
        }
        
        @JsOverlay
        public Builder withPatternFunction(StyleFunction function) {
            JSUtils.setObject(this, LINE_PATTERN, function);
            return this;
        }
    }
}
