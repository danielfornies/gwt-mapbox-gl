package com.tomtom.gwt.mapbox.gl.client.layers.paint;

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
            JSUtils.setInt(this, "circle-radius", radiusPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleRadiusFunction(StyleFunction  radiusFunction) {
            JSUtils.setObject(this, "circle-radius", radiusFunction);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleColor(String color) {
            JSUtils.setObject(this, "circle-color", color);
            return this;
        }

        @JsOverlay
        public Builder withCircleColorFunction(StyleFunction colorFunction) {
            JSUtils.setObject(this, "circle-color", colorFunction);
            return this;
        }

        @JsOverlay
        public Builder withCircleBlur(double blur) {
            JSUtils.setDouble(this, "circle-blur", blur);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleBlurFunction(StyleFunction blurFunction) {
            JSUtils.setObject(this, "circle-blur", blurFunction);
            return this;
        }

        @JsOverlay
        public Builder withCircleOpacity(double opacity) {
            JSUtils.setDouble(this, "circle-opacity", opacity);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleOpacityFunction(StyleFunction function) {
            JSUtils.setObject(this, "circle-opacity", function);
            return this;
        }

        @JsOverlay
        public Builder withCircleTranslate(int offsetPixelsX, int offsetPixelsY) {
            JSUtils.setObject(this, "circle-translate", new int[]{offsetPixelsX, offsetPixelsY});
            return this;
        }
        
        @JsOverlay
        public Builder withCircleTranslateFunction(StyleFunction function) {
            JSUtils.setObject(this, "circle-translate", function);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleTranslateAnchor(Anchor anchor) {
            JSUtils.setObject(this, "circle-translate-anchor", anchor.name());
            return this;
        }
        
        @JsOverlay
        public Builder withCircleTranslateAnchorFunction(StyleFunction function) {
            JSUtils.setObject(this, "circle-translate-anchor", function);
            return this;
        }
        
        @JsOverlay
        public Builder withCirclePitchScale(Anchor anchor) {
            JSUtils.setObject(this, "circle-pitch-scale", anchor.name());
            return this;
        }
        
        @JsOverlay
        public Builder withCirclePitchScaleFunction(StyleFunction function) {
            JSUtils.setObject(this, "circle-pitch-scale", function);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleStrokeWidth(int strokeWidthPixels) {
            JSUtils.setInt(this, "circle-stroke-width", strokeWidthPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleStrokeWidthFunction(StyleFunction function) {
            JSUtils.setObject(this, "circle-stroke-width", function);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleStrokeColor(String strokeColor) {
            JSUtils.setObject(this, "circle-stroke-color", strokeColor);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleStrokeColorFunction(StyleFunction function) {
            JSUtils.setObject(this, "circle-stroke-color", function);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleStrokeOpacity(double opacity) {
            JSUtils.setDouble(this, "circle-stroke-opacity", opacity);
            return this;
        }
        
        @JsOverlay
        public Builder withCircleStrokeOpacityFunction(StyleFunction function) {
            JSUtils.setObject(this, "circle-stroke-opacity", function);
            return this;
        }
    }

    private CirclePaint() {
    }
    
}
