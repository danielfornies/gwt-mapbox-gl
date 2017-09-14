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
import jsinterop.annotations.JsType;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.ICON_ALLOW_OVERLAP;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.ICON_PITCH_ALIGNMENT;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.TEXT_ALLOW_OVERLAP;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.TEXT_ANCHOR;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.TEXT_FIELD;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.TEXT_FONT;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.TEXT_OFFSET;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.TEXT_PITCH_ALIGNMENT;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.TEXT_ROTATION_ALIGNMENT;
import static com.tomtom.gwt.mapbox.gl.client.layers.layout.LayoutProperties.TEXT_SIZE;
import com.tomtom.gwt.mapbox.gl.client.layers.style.StyleFunction;

/**
 * https://www.mapbox.com/mapbox-gl-style-spec/#layout_symbol
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class SymbolLayout extends BaseLayout {

    private SymbolLayout() {
    }
    
    /**
     * Label placement relative to its geometry.
     */
    public static enum SymbolPlacement {
        /**
         * The label is placed at the point where the geometry is located.
         */
        POINT("point"),
        /**
         * The label is placed along the line of the geometry. Can only be used on LineString and Polygon geometries.
         */
        LINE("line");
        
        private final String apiValue;
        
        private SymbolPlacement(String apiValue) {
            this.apiValue = apiValue;
        }
        
        public String getApiValue() {
            return apiValue;
        }
    }

    public static enum PitchRotationAlignment {
        /**
         * Aligned to the plane of the map.
         */
        MAP("map"),
        /**
         * Aligned to the plane of the viewport.
         */
        VIEWPORT("viewport"),
        /**
         * Automatically matches the value.
         */
        AUTO("auto");
        
        private final String apiValue;
        
        private PitchRotationAlignment(String apiValue) {
            this.apiValue = apiValue;
        }
        
        public String getApiValue() {
            return apiValue;
        }
    }
    
    public static enum IconTextFit {
        /**
         * The icon is displayed at its intrinsic aspect ratio.
         */
        NONE("none"),
        /**
         * The icon is scaled in the x-dimension to fit the width of the text.
         */
        WIDTH("width"),
        /**
         * The icon is scaled in the y-dimension to fit the height of the text.
         */
        HEIGHT("height"),
        /**
         * The icon is scaled in both x- and y-dimensions.
         */
        BOTH("both");
        
        private final String apiValue;
        
        private IconTextFit(String apiValue) {
            this.apiValue = apiValue;
        }
        
        public String getApiValue() {
            return apiValue;
        }
    }
    
    /**
     * Part of the text placed closest to the anchor.
     */
    public static enum TextAnchor {
        /**
         * The center of the text is placed closest to the anchor.
         */
        CENTER("center"),
        /**
         * The left side of the text is placed closest to the anchor.
         */
        LEFT("left"),
        /**
         * The right side of the text is placed closest to the anchor.
         */
        RIGHT("right"),
        /**
         * The top of the text is placed closest to the anchor.
         */
        TOP("top"),
        /**
         * The bottom of the text is placed closest to the anchor.
         */
        BOTTOM("bottom"),
        /**
         * The top left corner of the text is placed closest to the anchor.
         */
        TOP_LEFT("top-left"),
        /**
         * The top right corner of the text is placed closest to the anchor.
         */
        TOP_RIGHT("top-right"),
        /**
         * The bottom left corner of the text is placed closest to the anchor.
         */
        BOTTOM_LEFT("bottom-left"),
        /**
         * The bottom right corner of the text is placed closest to the anchor.
         */
        BOTTOM_RIGHT("bottom-right");
        
        private final String apiValue;
        
        private TextAnchor(String apiValue) {
            this.apiValue = apiValue;
        }
        
        public String getApiValue() {
            return apiValue;
        }
    }

    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class Builder extends BaseLayout.Builder<Builder> {

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

        /**
         * Label placement relative to its geometry.
         * @param placement One of point, line. Defaults to point.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-symbol-placement
         */
        @JsOverlay
        public Builder withSymbolPlacement(SymbolPlacement placement) {
            JSUtils.setObject(this, SYMBOL_PLACEMENT, placement.getApiValue());
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
        public Builder withIconRotationAlignment(PitchRotationAlignment alignment) {
            JSUtils.setObject(this, ICON_ROTATION_ALIGNMENT, alignment.getApiValue());
            return this;
        }
        
        /**
         * Scales the original size of the icon by the provided factor. The new pixel size of the image will be the original pixel size multiplied by icon-size. 1 is the original size; 3 triples the size of the image.
         * Scales less than 1 will scale the image down.
         * @param iconSizeFactor Units in factor of the original icon size. Defaults to 1. Requires icon-image.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-size
         */
        @JsOverlay
        public Builder withIconSize(double iconSizeFactor) {
            JSUtils.setDouble(this, ICON_SIZE, iconSizeFactor);
            return this;
        }
        
        /**
         * Scales the original size of the icon by the provided factor. The new pixel size of the image will be the original pixel size multiplied by icon-size. 1 is the original size; 3 triples the size of the image.
         * Scales less than 1 will scale the image down.
         * @param propertyFunction Interpolated or piecewise function to change the size depending on zoom level and-or property.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-size
         */
        @JsOverlay
        public Builder withIconSize(StyleFunction propertyFunction) {
            JSUtils.setObject(this, ICON_SIZE, propertyFunction);
            return this;
        }
        
        @JsOverlay
        public Builder withIconTextFit(IconTextFit iconTextFit) {
            JSUtils.setObject(this, ICON_TEXT_FIT, iconTextFit.getApiValue());
            return this;
        }
        
        @JsOverlay
        public Builder withIconTextFitPadding(int[] padding) {
            JSUtils.setObject(this, ICON_TEXT_FIT_PADDING, padding);
            return this;
        }
        
        /**
         * Name of image in sprite to use for drawing an image background. A string with {tokens} replaced, referencing the data property to pull from.
         * @param value A string with {tokens} replaced, referencing the data property to pull from.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-image
         */
        @JsOverlay
        public Builder withIconImage(String value) {
            JSUtils.setObject(this, ICON_IMAGE, value);
            return this;
        }
        
        /**
         * Name of image in sprite to use for drawing an image background. A string with {tokens} replaced, referencing the data property to pull from.
         * @param propertyFunction The property function determining what image or data property to pull from depending on what situation.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-image
         */
        @JsOverlay
        public Builder withIconImage(StyleFunction propertyFunction) {
            JSUtils.setObject(this, ICON_IMAGE, propertyFunction);
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
        
        /**
         * Offset distance of icon from its anchor. 
         * Positive values indicate right and down, while negative values indicate left and up. When combined with icon-rotate the offset will be as if the rotated direction was up.
         * @param right X offset distance from the anchor.
         * @param down Y offset distance from the anchor.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-offset
         */
        @JsOverlay
        public Builder withIconOffset(double right, double down) {
            JSUtils.setObject(this, ICON_OFFSET, JSUtils.toJsArray(right, down));
            return this;
        }
        
        /**
         * Offset distance of icon from its anchor. 
         * Positive values indicate right and down, while negative values indicate left and up. When combined with icon-rotate the offset will be as if the rotated direction was up.
         * @param propertyFunction The property function indicating the offset.
         * @return This Builder. 
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-offset
         */
        @JsOverlay
        public Builder withIconOffset(StyleFunction propertyFunction) {
            JSUtils.setObject(this, ICON_OFFSET, propertyFunction);
            return this;
        }
        
        @JsOverlay
        public Builder withIconPitchAlignment(PitchRotationAlignment alignment) {
            JSUtils.setObject(this, ICON_PITCH_ALIGNMENT, alignment.getApiValue());
            return this;
        }
        
        /**
         * Orientation of text when map is pitched.
         * @param alignment One of map, viewport, auto. Defaults to auto. Requires text-field.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-pitch-alignment
         */
        @JsOverlay
        public Builder withTextPitchAlignment(PitchRotationAlignment alignment) {
            JSUtils.setObject(this, TEXT_PITCH_ALIGNMENT, alignment.getApiValue());
            return this;
        }
        
        /**
         * In combination with symbol-placement, determines the rotation behavior of the individual glyphs forming the text.
         * @param alignment One of map, viewport, auto. Defaults to auto. Requires text-field.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-rotation-alignment
         */
        @JsOverlay
        public Builder withTextRotationAlignment(PitchRotationAlignment alignment) {
            JSUtils.setObject(this, TEXT_ROTATION_ALIGNMENT, alignment.getApiValue());
            return this;
        }
        
        /**
         * Value to use for a text label. 
         * Feature properties are specified using tokens like {field_name}. 
         * (Token replacement is only supported for literal text-field values--not for property functions.)
         * @param textValue Value to use for a text label. 
         * @return This Builder.
         * https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-field
         */
        @JsOverlay
        public Builder withTextField(String textValue) {
            JSUtils.setObject(this, TEXT_FIELD, textValue);
            return this;
        }
        
        /**
         * Value to use for a text label. 
         * Feature properties are specified using tokens like {field_name}. 
         * (Token replacement is only supported for literal text-field values--not for property functions.)
         * @param styleFunction Value to use for a text label. 
         * @return This Builder.
         * https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-field
         */
        @JsOverlay
        public Builder withTextField(StyleFunction styleFunction) {
            JSUtils.setObject(this, TEXT_FIELD, styleFunction);
            return this;
        }
        
        /**
         * Font stack to use for displaying text.
         * @param fonts Optional array.  Defaults to Open Sans Regular,Arial Unicode MS Regular. Requires text-field.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-font
         */
        @JsOverlay
        public Builder withTextFont(String... fonts) {
            JSUtils.setObject(this, TEXT_FONT, JSUtils.toJsArray((Object[])fonts));
            return this;
        }
        
        /**
         * Font size.
         * @param sizePixels Optional number.  Units in pixels. Defaults to 16. Requires text-field.
         * @return This Builder.
         * https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-size
         */
        @JsOverlay
        public Builder withTextSize(int sizePixels) {
            JSUtils.setInt(this, TEXT_SIZE, sizePixels);
            return this;
        }
        
        /**
         * Font size.
         * @param sizeFunction Data-driven styling function for the font size.
         * @return This Builder.
         * https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-size
         */
        @JsOverlay
        public Builder withTextSize(StyleFunction sizeFunction) {
            JSUtils.setObject(this, TEXT_SIZE, sizeFunction);
            return this;
        }
        
        /**
         * Offset distance of text from its anchor. Positive values indicate right and down, while negative values indicate left and up.
         * @param right Positive indicates right, negative left. Units in ems. Defaults to 0.
         * @param down Positive indicates down, negative up. Units in ems. Defaults to 0.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-offset
         */
        @JsOverlay
        public Builder withTextOffset(double right, double down) {
            JSUtils.setObject(this, TEXT_OFFSET, JSUtils.toJsArray(right, down));
            return this;
        }
        
        /**
         * Offset distance of text from its anchor. Positive values indicate right and down, while negative values indicate left and up.
         * @param offsetStyleFunction Style function to determine the offset, as an array of 2 ems.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-offset
         */
        @JsOverlay
        public Builder withTextOffset(StyleFunction offsetStyleFunction) {
            JSUtils.setObject(this, TEXT_OFFSET, offsetStyleFunction);
            return this;
        }
        
        /**
         * If true, the text will be visible even if it collides with other previously drawn symbols.
         * @param allow Defaults to false. Requires text-field.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-allow-overlap
         */
        @JsOverlay
        public Builder withTextAllowOverlap(boolean allow) {
            JSUtils.setBoolean(this, TEXT_ALLOW_OVERLAP, allow);
            return this;
        }
        
        /**
         * Optional enum.  One of center, left, right, top, bottom, top-left, top-right, bottom-left, bottom-right. Defaults to center. Requires text-field.
         * @param anchor One of center, left, right, top, bottom, top-left, top-right, bottom-left, bottom-right. Defaults to center.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-anchor
         */
        @JsOverlay
        public Builder withTextAnchor(TextAnchor anchor) {
            JSUtils.setObject(this, TEXT_ANCHOR, anchor.getApiValue());
            return this;
        }

        /**
         * Optional enum.  One of center, left, right, top, bottom, top-left, top-right, bottom-left, bottom-right. Defaults to center. Requires text-field.
         * @param propertyFunction The property function to set a certain anchor depending on some specific property value.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-anchor
         */
        @JsOverlay
        public Builder withTextAnchor(StyleFunction propertyFunction) {
            JSUtils.setObject(this, TEXT_ANCHOR, propertyFunction);
            return this;
        }
    }
}
