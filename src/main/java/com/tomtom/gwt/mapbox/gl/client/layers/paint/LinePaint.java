package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import com.tomtom.gwt.mapbox.gl.client.layers.paint.AbstractPaint.Anchor;
import com.tomtom.gwt.mapbox.gl.client.layers.style.StyleFunction;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * https://www.mapbox.com/mapbox-gl-style-spec/#paint_line https://stackoverflow.com/questions/36867522/gwt-jsinterop-jstype-property-with-in-name#_=_
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class LinePaint extends AbstractPaint {

    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class Builder {

        @JsOverlay
        public static Builder newBuilder() {
            return new Builder();
        }

        private Builder() {
        }

        @JsOverlay
        public void setLineOpacity(double value) {
            JSUtils.setObject(this, "line-opacity", value);
        }

        @JsOverlay
        public void setLineColor(String value) {
            JSUtils.setObject(this, "line-color", value);
        }

        @JsOverlay
        public void setLineTranslate(double[][] rightDownPixelsOffset) {
            JSUtils.setObject(this, "line-translate", rightDownPixelsOffset);
        }

        @JsOverlay
        public void setLineTranslateAnchor(Anchor anchor) {
            setLineTranslateAnchor(anchor.name());
        }

        @JsOverlay
        public void setLineTranslateAnchor(String anchorName) {
            JSUtils.setObject(this, "line-translate-anchor", anchorName);
        }

        @JsOverlay
        public void setLineWidth(int widthPixels) {
            JSUtils.setInt(this, "line-width", widthPixels);
        }

        @JsOverlay
        public void setLineWidthFunction(StyleFunction widthFunction) {
            JSUtils.setObject(this, "line-width", widthFunction);
        }

        @JsOverlay
        public void setLineGapWidth(int innerGapWidthPixels) {
            JSUtils.setInt(this, "line-gap-width", innerGapWidthPixels);
        }

        @JsOverlay
        public void setLineOffset(int pixelsOffset) {
            JSUtils.setObject(this, "line-offset", pixelsOffset);
        }

        @JsOverlay
        public void setLineBlur(int blurPixels) {
            JSUtils.setObject(this, "line-blur", blurPixels);
        }

        @JsOverlay
        public void setLineDashArray(double[] lineWidthLengths) {
            JSUtils.setObject(this, "line-dasharray", lineWidthLengths);
        }

        @JsOverlay
        public void setLinePattern(String linePatternImage) {
            JSUtils.setObject(this, "line-pattern", linePatternImage);
        }
    }

    private LinePaint() {
    }
}
