package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import com.tomtom.gwt.mapbox.gl.client.layers.paint.AbstractPaint.Anchor;
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
            JSUtils.setInt(this, "icon-opacity", value);
            return this;
        }

        @JsOverlay
        public Builder withIconColor(String value) {
            JSUtils.setObject(this, "icon-color", value);
            return this;
        }

        @JsOverlay
        public Builder withIconHaloColor(String value) {
            JSUtils.setObject(this, "icon-halo-color", value);
            return this;
        }

        @JsOverlay
        public Builder withIconHaloWidth(int widthPixels) {
            JSUtils.setInt(this, "icon-halo-width", widthPixels);
            return this;
        }

        @JsOverlay
        public Builder withIconHaloBlur(int blurPixels) {
            JSUtils.setInt(this, "icon-halo-blur", blurPixels);
            return this;
        }

        @JsOverlay
        public Builder withIconTranslate(int[] rightDownPixelsOffset) {
            JSUtils.setObject(this, "icon-translate", rightDownPixelsOffset);
            return this;
        }

        @JsOverlay
        public Builder withIconTranslateAnchor(Anchor value) {
            return withIconTranslateAnchor(value.name());
        }

        @JsOverlay
        private Builder withIconTranslateAnchor(String anchorName) {
            JSUtils.setObject(this, "icon-translate-anchor", anchorName);
            return this;
        }
        
        // TODO: text properties
    }

    private SymbolPaint() {
    }
}
