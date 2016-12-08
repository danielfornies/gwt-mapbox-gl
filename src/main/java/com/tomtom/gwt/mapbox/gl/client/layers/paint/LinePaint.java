package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import com.tomtom.gwt.mapbox.gl.client.layers.paint.AbstractPaint.Anchor;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * https://www.mapbox.com/mapbox-gl-style-spec/#paint_line
 * https://stackoverflow.com/questions/36867522/gwt-jsinterop-jstype-property-with-in-name#_=_
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class LinePaint extends AbstractPaint {

    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    static class LineWidthProperties {
        
        @JsOverlay
        public static LineWidthProperties build(Integer[][] stops) {
            LineWidthProperties properties = new LineWidthProperties();
            properties.setStops(stops);
            return properties;
        }
        
        private LineWidthProperties() {
        }
        
        @JsProperty
        private native void setStops(Integer[][] stops);
        
        @JsProperty
        private native Integer[][] getStops();
    }
    
    
    
    
    // TODO: use builder pattern
    
    // TODO
    @JsOverlay
    public static LinePaint build(double opacity, String color, Integer[][] widthsPerZoomLevel, Integer lineGapWidth) {
        LinePaint linePaint = new LinePaint();
        linePaint.setLineOpacity(opacity);
        linePaint.setLineColor(color);
        //linePaint.setLineWidths(LineWidthProperties.build(widthsPerZoomLevel));
        if (widthsPerZoomLevel != null) {
            JSUtils.setStopsTestShit(linePaint);
        }
        if (lineGapWidth != null) {
            linePaint.setLineGapWidth(lineGapWidth);
        }
        return linePaint;
    }
    
    @JsOverlay
    public static LinePaint build(double opacity, String color, Integer[][] widthsPerZoomLevel, double[] dashArrayWidthLengths) {
        LinePaint linePaint = new LinePaint();
        linePaint.setLineOpacity(opacity);
        linePaint.setLineColor(color);
        //linePaint.setLineWidths(LineWidthProperties.build(widthsPerZoomLevel));
        if (widthsPerZoomLevel != null) {
            JSUtils.setStopsTestShit(linePaint);
        }
        if (dashArrayWidthLengths != null) {
            linePaint.setLineDashArray(dashArrayWidthLengths);
        }
        return linePaint;
    }

    protected LinePaint() {
    }

    @JsOverlay
    private void setLineOpacity(double value) {
        JSUtils.setObject(this, "line-opacity", value);
    }

    @JsOverlay
    private void setLineColor(String value) {
        JSUtils.setObject(this, "line-color", value);
    }

    @JsOverlay
    private void setLineTranslate(double[][] rightDownPixelsOffset) {
        JSUtils.setObject(this, "line-translate", rightDownPixelsOffset);
    }
    
    @JsOverlay
    private void setLineTranslateAnchor(Anchor anchor) {
        setLineTranslateAnchor(anchor.name());
    }

    @JsOverlay
    private void setLineTranslateAnchor(String anchorName) {
        JSUtils.setObject(this, "line-translate-anchor", anchorName);
    }

    @JsOverlay
    private void setLineWidth(int widthPixels) {
        JSUtils.setObject(this, "line-width", widthPixels);
    }
    
    @JsOverlay
    private void setLineWidths(LineWidthProperties stops) {
        JSUtils.setObject(this, "line-width", stops);
    }
    
    @JsOverlay
    private void setLineGapWidth(int innerGapWidthPixels) {
        JSUtils.setInt(this, "line-gap-width", innerGapWidthPixels);
    }

    @JsOverlay
    private void setLineOffset(int pixelsOffset)  {
        JSUtils.setObject(this, "line-offset", pixelsOffset);
    }

    @JsOverlay
    private void setLineBlur(int blurPixels)  {
        JSUtils.setObject(this, "line-blur", blurPixels);
    }

    @JsOverlay
    private void setLineDashArray(double[] lineWidthLengths)  {
        JSUtils.setObject(this, "line-dasharray", lineWidthLengths);
    }

    @JsOverlay
    private void setLinePattern(String linePatternImage)  {
        JSUtils.setObject(this, "line-pattern", linePatternImage);
    }
}
