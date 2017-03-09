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
import com.tomtom.gwt.mapbox.gl.client.mapoptions.Anchor;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 *
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint_circle
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class CirclePaint extends AbstractPaint {

    private CirclePaint() {
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
        public CirclePaint build() {
            CirclePaint paint = new CirclePaint();;
            JSUtils.copyAllFields(this, paint);
            return paint;
        }
        
        @JsOverlay
        public Builder withRadius(int radiusPixels) {
            JSUtils.setInt(this, CIRCLE_RADIUS, radiusPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withRadius(StyleFunction  radiusFunction) {
            JSUtils.setObject(this, CIRCLE_RADIUS, radiusFunction);
            return this;
        }
        
        @JsOverlay
        public Builder withColor(String color) {
            JSUtils.setObject(this, CIRCLE_COLOR, color);
            return this;
        }
        
        @JsOverlay
        public Builder withColor(StyleFunction colorFunction) {
            JSUtils.setObject(this, CIRCLE_COLOR, colorFunction);
            return this;
        }

        @JsOverlay
        public Builder withBlur(double blur) {
            JSUtils.setDouble(this, CIRCLE_BLUR, blur);
            return this;
        }
        
        @JsOverlay
        public Builder withBlur(StyleFunction blurFunction) {
            JSUtils.setObject(this, CIRCLE_BLUR, blurFunction);
            return this;
        }

        @JsOverlay
        public Builder withOpacity(double opacity) {
            JSUtils.setDouble(this, CIRCLE_OPACITY, opacity);
            return this;
        }
        
        @JsOverlay
        public Builder withOpacity(StyleFunction function) {
            JSUtils.setObject(this, CIRCLE_OPACITY, function);
            return this;
        }

        @JsOverlay
        public Builder withTranslate(int offsetPixelsX, int offsetPixelsY) {
            JSUtils.setObject(this, CIRCLE_TRANSLATE, new int[]{offsetPixelsX, offsetPixelsY});
            return this;
        }
        
        @JsOverlay
        public Builder withTranslate(StyleFunction function) {
            JSUtils.setObject(this, CIRCLE_TRANSLATE, function);
            return this;
        }
        
        @JsOverlay
        public Builder withTranslateAnchor(Anchor anchor) {
            JSUtils.setObject(this, CIRCLE_TRANSLATE_ANCHOR, anchor.name());
            return this;
        }
        
        @JsOverlay
        public Builder withTranslateAnchor(StyleFunction function) {
            JSUtils.setObject(this, CIRCLE_TRANSLATE_ANCHOR, function);
            return this;
        }
        
        @JsOverlay
        public Builder withPitchScale(Anchor anchor) {
            JSUtils.setObject(this, CIRCLE_PITCH_SCALE, anchor.name());
            return this;
        }
        
        @JsOverlay
        public Builder withPitchScale(StyleFunction function) {
            JSUtils.setObject(this, CIRCLE_PITCH_SCALE, function);
            return this;
        }
        
        @JsOverlay
        public Builder withStrokeWidth(int strokeWidthPixels) {
            JSUtils.setInt(this, CIRCLE_STROKE_WIDTH, strokeWidthPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withStrokeWidth(StyleFunction function) {
            JSUtils.setObject(this, CIRCLE_STROKE_WIDTH, function);
            return this;
        }
        
        @JsOverlay
        public Builder withStrokeColor(String strokeColor) {
            JSUtils.setObject(this, CIRCLE_STROKE_COLOR, strokeColor);
            return this;
        }
        
        @JsOverlay
        public Builder withStrokeColor(StyleFunction function) {
            JSUtils.setObject(this, CIRCLE_STROKE_COLOR, function);
            return this;
        }
        
        @JsOverlay
        public Builder withStrokeOpacity(double opacity) {
            JSUtils.setDouble(this, CIRCLE_STROKE_OPACITY, opacity);
            return this;
        }
        
        @JsOverlay
        public Builder withStrokeOpacity(StyleFunction function) {
            JSUtils.setObject(this, CIRCLE_STROKE_OPACITY, function);
            return this;
        }
    }
}
