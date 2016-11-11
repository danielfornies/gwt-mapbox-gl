package com.tomtom.gwt.mapbox.gl.client.layers.paint;

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
    
    @JsOverlay
    public static CirclePaint build(int radiusPixels, String color, Double blur, Double opacity) {
        CirclePaint paint = new CirclePaint();
        paint.setCircleRadius(radiusPixels);
        if (color != null) {
            paint.setCircleColor(color);
        }
        if (blur != null) {
            paint.setCircleBlur(blur);
        }
        if (opacity != null) {
            paint.setCircleOpacity(opacity);
        }
        return paint;
    }
    
    private CirclePaint() {
    }
    
    @JsOverlay
    private void setCircleRadius(int radiusPixels) {
        JSUtils.setInt(this, "circle-radius", radiusPixels);
    }
    
    @JsOverlay
    private void setCircleColor(String color) {
        JSUtils.setObject(this, "circle-color", color);
    }
    
    @JsOverlay
    private void setCircleBlur(double blur) {
        JSUtils.setDouble(this, "circle-blur", blur);
    }
    
    @JsOverlay
    private void setCircleOpacity(double opacity) {
        JSUtils.setDouble(this, "circle-opacity", opacity);
    }
    
    // TODO: remaining properties
}
