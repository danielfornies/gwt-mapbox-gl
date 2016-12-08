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

    public static enum IconRotationAlignment {
        map,
        viewport,
        auto
    }
    
    public static enum IconTextFit {
        none,
        width,
        height,
        both
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
        public Builder withSymbolPlacement(SymbolPlacement placement) {
            JSUtils.setObject(this, "symbol-placement", placement.name());
            return this;
        }

        @JsOverlay
        public Builder withSymbolSpacing(int spacingPixels) {
            JSUtils.setInt(this, "symbol-spacing", spacingPixels);
            return this;
        }

        @JsOverlay
        public Builder withSymbolAvoidEdges(boolean avoidEdges) {
            JSUtils.setBoolean(this, "symbol-avoid-edges", avoidEdges);
            return this;
        }

        @JsOverlay
        public Builder withIconAllowOverlap(boolean allowOverlap) {
            JSUtils.setBoolean(this, "icon-avoid-overlap", allowOverlap);
            return this;
        }

        @JsOverlay
        public Builder withIconIgnorePlacement(boolean ignorePlacement) {
            JSUtils.setBoolean(this, "icon-ignore-placement", ignorePlacement);
            return this;
        }

        @JsOverlay
        public Builder withIconOptional(boolean iconOptional) {
            JSUtils.setBoolean(this, "icon-optional", iconOptional);
            return this;
        }
        
        @JsOverlay
        public Builder withIconRotationAlignment(IconRotationAlignment alignment) {
            JSUtils.setObject(this, "icon-rotation-alignment", alignment.name());
            return this;
        }
        
        @JsOverlay
        public Builder withIconSize(int iconSizeFactor) {
            JSUtils.setInt(this, "icon-size", iconSizeFactor);
            return this;
        }
        
        @JsOverlay
        public Builder withIconTextFit(IconTextFit iconTextFit) {
            JSUtils.setObject(this, "icon-text-fit", iconTextFit.name());
            return this;
        }
        
        @JsOverlay
        public Builder withIconTextFitPadding(int[] padding) {
            JSUtils.setObject(this, "icon-text-fit-padding", padding);
            return this;
        }

        @JsOverlay
        public Builder withIconImage(String value) {
            JSUtils.setObject(this, "icon-image", value);
            return this;
        }
        
        @JsOverlay
        public Builder withIconRotate(int degrees) {
            JSUtils.setInt(this, "icon-rotate", degrees);
            return this;
        }
        
        @JsOverlay
        public Builder withIconPadding(int pixels) {
            JSUtils.setInt(this, "icon-padding", pixels);
            return this;
        }
        
        @JsOverlay
        public Builder withIconKeepUpright(boolean keepUpright) {
            JSUtils.setBoolean(this, "icon-keep-upright", keepUpright);
            return this;
        }
        
        @JsOverlay
        public Builder withIconOffset(int[] offset) {
            JSUtils.setObject(this, "icon-offset", offset);
            return this;
        }
        
        // TODO: text properties
        @JsProperty
        public native void setTextField(String value);

        // TODO
    }

    private SymbolLayout() {
    }
}
