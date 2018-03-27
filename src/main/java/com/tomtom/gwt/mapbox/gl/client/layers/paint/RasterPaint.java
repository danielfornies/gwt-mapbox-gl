package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.RASTER_BRIGHTNESS_MAX;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.RASTER_BRIGHTNESS_MIN;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.RASTER_CONTRAST;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.RASTER_FADE_DURATION;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.RASTER_HUE_ROTATE;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.RASTER_OPACITY;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.RASTER_SATURATION;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Paint properties for LayerType.RASTER.
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint_raster
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class RasterPaint extends AbstractPaint {
    
    private RasterPaint() {
    }
    
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class Builder {
        
        private Builder() {
        }
        
        @JsOverlay
        public static Builder newBuilder() {
            return new Builder();
        }
        
        /**
         * @param opacity (Defaults to 1) The opacity at which the image will be drawn.
         * @return This.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-raster-opacity
         */
        @JsOverlay
        public Builder withOpacity(double opacity) {
            JSUtils.setDouble(this, RASTER_OPACITY, opacity);
            return this;
        }
        
        /**
         * Rotates hues around the color wheel.
         * @param degrees (Defaults to 0) Degrees for the rotation.
         * @return This.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-raster-hue-rotate
         */
        @JsOverlay
        public Builder withHueRotate(int degrees) {
            JSUtils.setInt(this, RASTER_HUE_ROTATE, degrees);
            return this;
        }
        
        /**
         * Increase or reduce the brightness of the image.
         * @param brightnessMin (Defaults to 0) The value is the minimum brightness.
         * @return This.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-raster-brightness-min
         */
        @JsOverlay
        public Builder withBrightnessMin(double brightnessMin) {
            JSUtils.setDouble(this, RASTER_BRIGHTNESS_MIN, brightnessMin);
            return this;
        }
        
        /**
         * Increase or reduce the brightness of the image.
         * @param brightnessMax (Defaults to 1) The value is the maximum brightness.
         * @return This.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-raster-brightness-max
         */
        @JsOverlay
        public Builder withBrightnessMax(double brightnessMax) {
            JSUtils.setDouble(this, RASTER_BRIGHTNESS_MAX, brightnessMax);
            return this;
        }
        
        /**
         * Increase or reduce the saturation of the image.
         * @param saturation (Defaults to 0) Image saturation.
         * @return This.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-raster-saturation
         */
        @JsOverlay
        public Builder withSaturation(double saturation) {
            JSUtils.setDouble(this, RASTER_SATURATION, saturation);
            return this;
        }
        
        /**
         * Increase or reduce the contrast of the image.
         * @param contrast (Defaults to 0). The contrast value.
         * @return This.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-raster-contrast
         */
        @JsOverlay
        public Builder withContrast(double contrast) {
            JSUtils.setDouble(this, RASTER_CONTRAST, contrast);
            return this;
        }
        
        /**
         * @param millis (Defaults to 300) Fade duration when a new tile is added.
         * @return This.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-raster-fade-duration
         */
        @JsOverlay
        public Builder withFadeDuration(int millis) {
            JSUtils.setInt(this, RASTER_FADE_DURATION, millis);
            return this;
        }
        
        /**
         * @return A new RasterPaint instance from this builder.
         */
        @JsOverlay
        public final RasterPaint build() {
            RasterPaint paint = new RasterPaint();
            JSUtils.copyAllFields(this, paint);
            return paint;
        }
    }
}
