package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.HEATMAP_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.HEATMAP_INTENSITY;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.HEATMAP_OPACITY;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.HEATMAP_RADIUS;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.HEATMAP_WEIGHT;
import com.tomtom.gwt.mapbox.gl.client.layers.style.StyleFunction;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Paint properties for Paint properties for LayerType.HEATMAP.
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-heatmap
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class HeatmapPaint {
    
    private HeatmapPaint() {
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
        public HeatmapPaint build() {
            HeatmapPaint paint = new HeatmapPaint();
            JSUtils.copyAllFields(this, paint);
            return paint;
        }
        
        /**
         * Radius of influence of one heatmap point in pixels. 
         * Increasing the value makes the heatmap smoother, but less detailed.
         * @param radiusPixels Paint property. Optional number greater than or equal to 1. Units in pixels. Defaults to 30. 
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-heatmap-heatmap-radius
         */
        @JsOverlay
        public Builder withRadius(int radiusPixels) {
            JSUtils.setInt(this, HEATMAP_RADIUS, radiusPixels);
            return this;
        }
        
        /**
         * Radius of influence of one heatmap point in pixels. 
         * Increasing the value makes the heatmap smoother, but less detailed.
         * @param radiusFunction Interpolation function to determine the radius values.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-heatmap-heatmap-radius
         */
        @JsOverlay
        public Builder withRadius(StyleFunction radiusFunction) {
            JSUtils.setObject(this, HEATMAP_RADIUS, radiusFunction);
            return this;
        }
        
        /**
         * A measure of how much an individual point contributes to the heatmap. 
         * A value of 10 would be equivalent to having 10 points of weight 1 in the same spot. 
         * Especially useful when combined with clustering.
         * @param weight Paint property. Optional number greater than or equal to 0. Defaults to 1.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-heatmap-heatmap-weight
         */
        @JsOverlay
        public Builder withWeight(double weight) {
            JSUtils.setDouble(this, HEATMAP_WEIGHT, weight);
            return this;
        }
        
        /**
         * Similar to heatmap-weight but controls the intensity of the heatmap globally. 
         * Primarily used for adjusting the heatmap based on zoom level.
         * @param intensity Paint property. Optional number greater than or equal to 0. Defaults to 1.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-heatmap-heatmap-intensity
         */
        @JsOverlay
        public Builder withIntensity(double intensity) {
            JSUtils.setDouble(this, HEATMAP_INTENSITY, intensity);
            return this;
        }
        
        /**
         * Similar to heatmap-weight but controls the intensity of the heatmap globally. 
         * Primarily used for adjusting the heatmap based on zoom level.
         * @param intensityFunction Paint property. Interpolation function to determine the different intensity values.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-heatmap-heatmap-intensity
         */
        @JsOverlay
        public Builder withIntensity(StyleFunction intensityFunction) {
            JSUtils.setObject(this, HEATMAP_INTENSITY, intensityFunction);
            return this;
        }
        
        /**
         * Defines the color of each pixel based on its density value in a heatmap. 
         * Should be an expression that uses ["heatmap-density"] as input.
         * @param color Paint property. Optional color. Defaults to ["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-heatmap-heatmap-color
         */
        @JsOverlay
        public Builder withColor(String color) {
            JSUtils.setObject(this, HEATMAP_COLOR, color);
            return this;
        }
        
        /**
         * The global opacity at which the heatmap layer will be drawn.
         * @param opacity Paint property. Optional number between 0 and 1 inclusive. Defaults to 1. 
         * @return This Builder.
         */
        @JsOverlay
        public Builder withOpacity(double opacity) {
            JSUtils.setDouble(this, HEATMAP_OPACITY, opacity);
            return this;
        }
    }
}
