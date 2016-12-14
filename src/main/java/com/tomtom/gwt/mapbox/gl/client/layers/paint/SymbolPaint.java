package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import com.tomtom.gwt.mapbox.gl.client.layers.paint.AbstractPaint.Anchor;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
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
        
        @JsProperty
        public native void setIconOpacity(int value);

        @JsProperty
        public native void setIconColor(String value);

        @JsProperty
        public native void setIconHaloColor(String value);

        @JsProperty
        public native void setIconHaloWidth(int widthPixels);

        @JsProperty
        public native void setIconHaloBlur(int blurPixels);

        @JsProperty
        public native void setIconTranslate(int[] rightDownPixelsOffset);

        @JsOverlay
        public void setIconTranslateAnchor(Anchor value) {
            setIconTranslateAnchor(value.name());
        }

        @JsProperty
        private native void setIconTranslateAnchor(String anchorName);
    }

    private SymbolPaint() {
    }
}
