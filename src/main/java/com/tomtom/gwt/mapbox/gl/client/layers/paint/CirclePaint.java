package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.CIRCLE_BLUR;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.CIRCLE_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.CIRCLE_OPACITY;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.CIRCLE_PITCH_SCALE;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.CIRCLE_RADIUS;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.CIRCLE_STROKE_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.CIRCLE_STROKE_OPACITY;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.CIRCLE_STROKE_WIDTH;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.CIRCLE_TRANSLATE;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.CIRCLE_TRANSLATE_ANCHOR;
import com.tomtom.gwt.mapbox.gl.client.layers.style.StyleFunction;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 *
 *
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class CirclePaint extends AbstractPaint {

    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class Builder {

        @JsOverlay
        public static Builder newBuilder() {
            return new Builder();
        }
        
        private Builder() {
        }
        
        @JsOverlay 
        public CirclePaint build() {
            CirclePaint paint = new CirclePaint();;
            JSUtils.copyAllFields(this, paint);
            return paint;
        }
        
        @JsOverlay
        public Builder withCircleRadius(int radiusPixels) {
            JSUtils.setInt(this, CIRCLE_RADIUS, radiusPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleRadiusFunction(StyleFunction  radiusFunction) {
            JSUtils.setObject(this, CIRCLE_RADIUS, radiusFunction);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleColor(String color) {
            JSUtils.setObject(this, CIRCLE_COLOR, color);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleColorFunction(StyleFunction colorFunction) {
            JSUtils.setObject(this, CIRCLE_COLOR, colorFunction);
            return this;
        }

        @JsOverlay
        public Builder withCircleBlur(double blur) {
            JSUtils.setDouble(this, CIRCLE_BLUR, blur);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleBlurFunction(StyleFunction blurFunction) {
            JSUtils.setObject(this, CIRCLE_BLUR, blurFunction);
            return this;
        }

        @JsOverlay
        public Builder withCircleOpacity(double opacity) {
            JSUtils.setDouble(this, CIRCLE_OPACITY, opacity);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleOpacityFunction(StyleFunction function) {
            JSUtils.setObject(this, CIRCLE_OPACITY, function);
            return this;
        }

        @JsOverlay
        public Builder withCircleTranslate(int offsetPixelsX, int offsetPixelsY) {
            JSUtils.setObject(this, CIRCLE_TRANSLATE, new int[]{offsetPixelsX, offsetPixelsY});
            return this;
        }
        
        @JsOverlay
        public Builder withCircleTranslateFunction(StyleFunction function) {
            JSUtils.setObject(this, CIRCLE_TRANSLATE, function);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleTranslateAnchor(Anchor anchor) {
            JSUtils.setObject(this, CIRCLE_TRANSLATE_ANCHOR, anchor.name());
            return this;
        }
        
        @JsOverlay
        public Builder withCircleTranslateAnchorFunction(StyleFunction function) {
            JSUtils.setObject(this, CIRCLE_TRANSLATE_ANCHOR, function);
            return this;
        }
        
        @JsOverlay
        public Builder withCirclePitchScale(Anchor anchor) {
            JSUtils.setObject(this, CIRCLE_PITCH_SCALE, anchor.name());
            return this;
        }
        
        @JsOverlay
        public Builder withCirclePitchScaleFunction(StyleFunction function) {
            JSUtils.setObject(this, CIRCLE_PITCH_SCALE, function);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleStrokeWidth(int strokeWidthPixels) {
            JSUtils.setInt(this, CIRCLE_STROKE_WIDTH, strokeWidthPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleStrokeWidthFunction(StyleFunction function) {
            JSUtils.setObject(this, CIRCLE_STROKE_WIDTH, function);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleStrokeColor(String strokeColor) {
            JSUtils.setObject(this, CIRCLE_STROKE_COLOR, strokeColor);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleStrokeColorFunction(StyleFunction function) {
            JSUtils.setObject(this, CIRCLE_STROKE_COLOR, function);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleStrokeOpacity(double opacity) {
            JSUtils.setDouble(this, CIRCLE_STROKE_OPACITY, opacity);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleStrokeOpacityFunction(StyleFunction function) {
            JSUtils.setObject(this, CIRCLE_STROKE_OPACITY, function);
            return this;
        }
    }

    private CirclePaint() {
    }
    
}
