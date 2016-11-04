package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import com.google.gwt.core.client.JsArray;
import com.google.gwt.core.client.JsArrayInteger;
import com.google.gwt.core.client.JsArrayMixed;
import com.tomtom.gwt.mapbox.gl.client.layers.paint.AbstractPaint.Anchor;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * https://www.mapbox.com/mapbox-gl-style-spec/#paint_line
 * Cannot use JSInterop due to invalid JS field names:
 * https://stackoverflow.com/questions/36867522/gwt-jsinterop-jstype-property-with-in-name#_=_
 */
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
    
    // TODO
    public static LinePaint build(double opacity, String color, Integer[][] widthsPerZoomLevel, Integer lineGapWidth) {
        LinePaint linePaint = LinePaint.createObject().cast();
        linePaint.setLineOpacity(opacity);
        linePaint.setLineColor(color);
        //linePaint.setLineWidths(LineWidthProperties.build(widthsPerZoomLevel));
        linePaint.setLineWidths(widthsPerZoomLevel);
        if (lineGapWidth != null) {
            linePaint.setLineGapWidth(lineGapWidth);
        }
        return linePaint;
    }
    
    public static LinePaint build(double opacity, String color, Integer[][] widthsPerZoomLevel, double[] dashArrayWidthLengths) {
        LinePaint linePaint = LinePaint.createObject().cast();
        linePaint.setLineOpacity(opacity);
        linePaint.setLineColor(color);
        //linePaint.setLineWidths(LineWidthProperties.build(widthsPerZoomLevel));
        linePaint.setLineWidths(widthsPerZoomLevel);
        if (dashArrayWidthLengths != null) {
            linePaint.setLineDashArray(dashArrayWidthLengths);
        }
        return linePaint;
    }

    protected LinePaint() {
    }

    private native void setLineOpacity(double value) /*-{
        this["line-opacity"] = value;
    }-*/;

    private native void setLineColor(String value) /*-{
        this["line-color"] = value;
    }-*/;

    private native void setLineTranslate(double[][] rightDownPixelsOffset) /*-{
        this["line-translate"] = rightDownPixelsOffset;
    }-*/;

    private void setLineTranslateAnchor(Anchor anchor) {
        setLineTranslateAnchor(anchor.name());
    }

    private native void setLineTranslateAnchor(String anchorName) /*-{
        this["line-translate-anchor"] = anchorName;
    }-*/;

    private native void setLineWidth(int widthPixels) /*-{
        this["line-width"] = widthPixels;
    }-*/;
    
    private void setLineWidths(Integer[][] stops) {
        JsArrayMixed stopsJS = JsArrayMixed.createArray(stops.length).cast();
        for (Integer[] coordinates : stops) {
            JsArrayInteger coordsArray = JsArrayInteger.createArray(2).cast();
            coordsArray.push(coordinates[0]);
            coordsArray.push(coordinates[1]);
            stopsJS.push(coordsArray);
        }
        setLineWidthsJS(stopsJS);
    }
    
    private native void setLineWidthsJS(JsArrayMixed stops) /*-{
        $wnd.console.log("will use stops: " + stops);
        // TODO: this this!    
        //this["line-width"] = {"stops" : stops}
        this["line-width"] = {"stops" : [[1, 3], [5, 4], [10, 7], [18,9]]}
    }-*/;
    
    private native void setLineWidths(LineWidthProperties stops) /*-{
        this["line-width"] = {"stops" : stops}
    }-*/;
    
    private native void setLineGapWidth(int innerGapWidthPixels) /*-{
        this["line-gap-width"] = innerGapWidthPixels;
    }-*/;

    private native void setLineOffset(int pixelsOffset) /*-{
        this["line-offset"] = pixelsOffset;
    }-*/;

    private native void setLineBlur(int blurPixels) /*-{
        this["line-blur"] = blurPixels;
    }-*/;

    private native void setLineDashArray(double[] lineWidthLengths) /*-{
        this["line-dasharray"] = lineWidthLengths;
    }-*/;

    private native void setLinePattern(String linePatternImage) /*-{
        this["line-pattern"] = linePatternImage;
    }-*/;
}
