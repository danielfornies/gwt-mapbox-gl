package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import com.tomtom.gwt.mapbox.gl.client.layers.paint.AbstractPaint.Anchor;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.ICON_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.ICON_HALO_BLUR;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.ICON_HALO_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.ICON_HALO_WIDTH;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.ICON_OPACITY;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.ICON_TRANSLATE;
import static com.tomtom.gwt.mapbox.gl.client.layers.paint.PaintProperties.ICON_TRANSLATE_ANCHOR;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * https://www.mapbox.com/mapbox-gl-style-spec/#paint_symbol
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class SymbolPaint extends AbstractPaint {

    private SymbolPaint() {
    }
    
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class Builder {
        
        @JsOverlay
        public static Builder newBuilder() {
            return new Builder();
        }
        
        private Builder() {
        }
        
        @JsOverlay
        public SymbolPaint build() {
            SymbolPaint paint = new SymbolPaint();
            JSUtils.copyAllFields(this, paint);
            return paint;
        }
        
        @JsOverlay
        public Builder withIconOpacity(int value) {
            JSUtils.setInt(this, ICON_OPACITY, value);
            return this;
        }
        
        @JsOverlay
        public Builder withIconColor(String value) {
            JSUtils.setObject(this, ICON_COLOR, value);
            return this;
        }
        
        @JsOverlay
        public Builder withIconHaloColor(String value) {
            JSUtils.setObject(this, ICON_HALO_COLOR, value);
            return this;
        }
        
        @JsOverlay
        public Builder withIconHaloWidth(int widthPixels) {
            JSUtils.setInt(this, ICON_HALO_WIDTH, widthPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withIconHaloBlur(int blurPixels) {
            JSUtils.setInt(this, ICON_HALO_BLUR, blurPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withIconTranslate(int[] rightDownPixelsOffset) {
            JSUtils.setObject(this, ICON_TRANSLATE, rightDownPixelsOffset);
            return this;
        }
        
        @JsOverlay
        public Builder withIconTranslateAnchor(Anchor value) {
            return withIconTranslateAnchor(value.name());
        }

        @JsOverlay
        private Builder withIconTranslateAnchor(String anchorName) {
            JSUtils.setObject(this, ICON_TRANSLATE_ANCHOR, anchorName);
            return this;
        }
        
        // TODO: text properties
        
    }
}
