package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import com.tomtom.gwt.mapbox.gl.client.layers.paint.AbstractPaint.Anchor;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * https://www.mapbox.com/mapbox-gl-style-spec/#paint_symbol
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class SymbolPaint extends AbstractPaint {
    
    private SymbolPaint() {
    }
    
    @JsProperty
    private native void setIconOpacity(int value);
    
    @JsProperty
    private native void setIconColor(String value);
    
    @JsProperty
    private native void setIconHaloColor(String value);
    
    @JsProperty
    private native void setIconHaloWidth(int widthPixels);
    
    @JsProperty
    private native void setIconHaloBlur(int blurPixels);
    
    @JsProperty
    private native void setIconTranslate(int[] rightDownPixelsOffset);
    
    @JsOverlay
    private void setIconTranslateAnchor(Anchor value) {
        setIconTranslateAnchor(value.name());
    }
    
    @JsProperty
    private native void setIconTranslateAnchor(String anchorName);
    
    
    
    // TODO: text properties
}
