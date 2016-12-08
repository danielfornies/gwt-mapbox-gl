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
        public void setCircleRadius(int radiusPixels) {
            JSUtils.setInt(this, "circle-radius", radiusPixels);
        }
        
        @JsOverlay
        public void setCircleRadiusFunction(StyleFunction  radiusFunction) {
            JSUtils.setObject(this, "circle-radius", radiusFunction);
        }

        @JsOverlay
        public void setCircleColorFunction(StyleFunction colorFunction) {
            JSUtils.setObject(this, "circle-color", colorFunction);
        }
        
        @JsOverlay
        public void setCircleColor(String color) {
            JSUtils.setObject(this, "circle-color", color);
        }

        @JsOverlay
        public void setCircleBlur(double blur) {
            JSUtils.setDouble(this, "circle-blur", blur);
        }
        
        @JsOverlay
        public void setCircleBlurFunction(StyleFunction blurFunction) {
            JSUtils.setObject(this, "circle-blur", blurFunction);
        }

        @JsOverlay
        public void setCircleOpacity(double opacity) {
            JSUtils.setDouble(this, "circle-opacity", opacity);
        }

        @JsOverlay
        public void setCircleTranslate(int offsetPixelsX, int offsetPixelsY) {
            JSUtils.setObject(this, "circle-translate", new int[]{offsetPixelsX, offsetPixelsY});
        }
    }

    private CirclePaint() {
    }
    // TODO: remaining properties
}
