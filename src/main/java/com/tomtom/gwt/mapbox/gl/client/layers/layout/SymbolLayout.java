package com.tomtom.gwt.mapbox.gl.client.layers.layout;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * https://www.mapbox.com/mapbox-gl-style-spec/#layout_symbol
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class SymbolLayout extends BaseLayout {
    
    public static enum SymbolPlacement {
        point,
        line
    }
    
    public static enum Alignment {
        map,
        viewport,
        auto
    }
    
    // TODO: builder pattern?
    @JsOverlay
    public static SymbolLayout build(SymbolPlacement placement, String iconImage) {
        SymbolLayout layout = new SymbolLayout();
        layout.setSymbolPlacement(placement.name());
        layout.setIconImage(iconImage);
        
        return layout;
    }
    
    protected SymbolLayout() {
    }
    
    @JsOverlay
    private void setSymbolPlacement(SymbolPlacement placement) {
        setSymbolPlacement(placement.name());
    }
    
    @JsProperty
    private native void setSymbolPlacement(String value);
    
    @JsProperty
    private native void setSymbolSpacing(int spacingPixels);
    
    @JsProperty
    private native void setSymbolAvoidEdges(boolean avoidEdges);
    
    @JsProperty
    private native void setIconAllowOverlap(boolean allowOverlap);
    
    @JsProperty
    private native void setIconIgnorePlacement(boolean ignorePlacement);
    
    @JsProperty
    private native void setIconOptional(boolean iconOptional);
    
    @JsProperty
    private native void setIconImage(String value);
    
    @JsOverlay
    private void setIconRotationAlignment(Alignment alignment) {
        setIconRotationAlignment(alignment.name());
    }
    
    @JsProperty
    private native void setIconRotationAlignment(String alignment);
    
    @JsProperty
    private native void setIconSize(int value);
    
    // TODO: text properties
    
    @JsProperty
    private native void setTextField(String value);
}
