package com.tomtom.gwt.mapbox.gl.client.layers.layout;

import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.ICON_IGNORE_PLACEMENT;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.ICON_IMAGE;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.ICON_KEEP_UPRIGHT;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.ICON_OFFSET;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.ICON_OPTIONAL;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.ICON_PADDING;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.ICON_ROTATE;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.ICON_ROTATION_ALIGNMENT;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.ICON_SIZE;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.ICON_TEXT_FIT;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.ICON_TEXT_FIT_PADDING;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.SYMBOL_AVOID_EDGES;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.SYMBOL_PLACEMENT;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.SYMBOL_SPACING;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.ICON_ALLOW_OVERLAP;

/**
 * https://www.mapbox.com/mapbox-gl-style-spec/#layout_symbol
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class SymbolLayout extends AbstractLayout {

    private SymbolLayout() {
    }
    
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
    public static final class Builder extends AbstractLayoutBuilder<Builder> {

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
            JSUtils.setObject(this, SYMBOL_PLACEMENT, placement.name());
            return this;
        }
        
        @JsOverlay
        public Builder withSymbolSpacing(int spacingPixels) {
            JSUtils.setInt(this, SYMBOL_SPACING, spacingPixels);
            return this;
        }
        
        @JsOverlay
        public Builder withSymbolAvoidEdges(boolean avoidEdges) {
            JSUtils.setBoolean(this, SYMBOL_AVOID_EDGES, avoidEdges);
            return this;
        }
        
        @JsOverlay
        public Builder withIconAllowOverlap(boolean allowOverlap) {
            JSUtils.setBoolean(this, ICON_ALLOW_OVERLAP, allowOverlap);
            return this;
        }
        
        @JsOverlay
        public Builder withIconIgnorePlacement(boolean ignorePlacement) {
            JSUtils.setBoolean(this, ICON_IGNORE_PLACEMENT, ignorePlacement);
            return this;
        }
        
        @JsOverlay
        public Builder withIconOptional(boolean iconOptional) {
            JSUtils.setBoolean(this, ICON_OPTIONAL, iconOptional);
            return this;
        }
        
        @JsOverlay
        public Builder withIconRotationAlignment(IconRotationAlignment alignment) {
            JSUtils.setObject(this, ICON_ROTATION_ALIGNMENT, alignment.name());
            return this;
        }
        
        @JsOverlay
        public Builder withIconSize(int iconSizeFactor) {
            JSUtils.setInt(this, ICON_SIZE, iconSizeFactor);
            return this;
        }
        
        @JsOverlay
        public Builder withIconTextFit(IconTextFit iconTextFit) {
            JSUtils.setObject(this, ICON_TEXT_FIT, iconTextFit.name());
            return this;
        }
        
        @JsOverlay
        public Builder withIconTextFitPadding(int[] padding) {
            JSUtils.setObject(this, ICON_TEXT_FIT_PADDING, padding);
            return this;
        }
        
        @JsOverlay
        public Builder withIconImage(String value) {
            JSUtils.setObject(this, ICON_IMAGE, value);
            return this;
        }
        
        @JsOverlay
        public Builder withIconRotate(int degrees) {
            JSUtils.setInt(this, ICON_ROTATE, degrees);
            return this;
        }
        
        @JsOverlay
        public Builder withIconPadding(int pixels) {
            JSUtils.setInt(this, ICON_PADDING, pixels);
            return this;
        }
        
        @JsOverlay
        public Builder withIconKeepUpright(boolean keepUpright) {
            JSUtils.setBoolean(this, ICON_KEEP_UPRIGHT, keepUpright);
            return this;
        }
        
        @JsOverlay
        public Builder withIconOffset(int[] offset) {
            JSUtils.setObject(this, ICON_OFFSET, offset);
            return this;
        }
        
        // TODO: text properties
        @JsProperty
        public native void setTextField(String value);

        // TODO
    }
}
