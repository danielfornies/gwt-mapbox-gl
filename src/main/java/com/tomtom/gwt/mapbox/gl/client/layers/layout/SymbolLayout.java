package com.tomtom.gwt.mapbox.gl.client.layers.layout;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
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

    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class Builder {

        @JsOverlay
        public static Builder newBuilder() {
            return new Builder();
        }
        
        @JsOverlay
        public SymbolLayout build() {
            SymbolLayout layout = new SymbolLayout();
            JSUtils.copyAllFields(this, layout);
            return layout;
        }

        private Builder() {
        }

        @JsOverlay
        public void setSymbolPlacement(SymbolPlacement placement) {
            setSymbolPlacement(placement.name());
        }

        @JsProperty
        private native void setSymbolPlacement(String value);

        @JsProperty
        public native void setSymbolSpacing(int spacingPixels);

        @JsProperty
        public native void setSymbolAvoidEdges(boolean avoidEdges);

        @JsProperty
        public native void setIconAllowOverlap(boolean allowOverlap);

        @JsProperty
        public native void setIconIgnorePlacement(boolean ignorePlacement);

        @JsProperty
        public native void setIconOptional(boolean iconOptional);

        @JsProperty
        public native void setIconImage(String value);

        @JsOverlay
        public void setIconRotationAlignment(Alignment alignment) {
            setIconRotationAlignment(alignment.name());
        }

        @JsProperty
        public native void setIconRotationAlignment(String alignment);

        @JsProperty
        public native void setIconSize(int value);

        // TODO: text properties
        @JsProperty
        public native void setTextField(String value);

        // TODO
    }

    private SymbolLayout() {
    }
}
