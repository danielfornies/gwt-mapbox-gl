package com.tomtom.gwt.mapbox.gl.client.layers.layout;

/**
 * Constants with layout property names.
 * They need to be to be set by object[property-name] since their names contain "-" and are illegal to be set as object.property-name.
 * Layout properties appear in the layer's "layout" object.
 * They are applied early in the rendering process and define how data for that layer is passed to the GPU. 
 * Changes to a layout property require an asynchronous "layout" step.
 */
public final class LayoutProperties {

    /**
     * Common visibility property to all layout types.
     */
    public static final String VISIBILITY = "visibility";

    // Line Layout ----------------------------
    public static final String LINE_CAP = "line-cap";
    public static final String LINE_JOIN = "line-join";
    public static final String LINE_MITER_LIMIT = "line-miter-limit";
    public static final String LINE_ROUND_LIMIT = "line-round-limit";

    // Symbol Layout -------------------------
    public static final String SYMBOL_PLACEMENT = "symbol-placement";
    public static final String SYMBOL_SPACING = "symbol-spacing";
    public static final String SYMBOL_AVOID_EDGES = "symbol-avoid-edges";
    public static final String ICON_ALLOW_OVERLAP = "icon-allow-overlap";
    public static final String ICON_IGNORE_PLACEMENT = "icon-ignore-placement";
    public static final String ICON_OPTIONAL = "icon-optional";
    public static final String ICON_ROTATION_ALIGNMENT = "icon-rotation-alignment";
    public static final String ICON_SIZE = "icon-size";
    public static final String ICON_TEXT_FIT = "icon-text-fit";
    public static final String ICON_TEXT_FIT_PADDING = "icon-text-fit-padding";
    public static final String ICON_IMAGE = "icon-image";
    public static final String ICON_ROTATE = "icon-rotate";
    public static final String ICON_PADDING = "icon-padding";
    public static final String ICON_KEEP_UPRIGHT = "icon-keep-upright";
    public static final String ICON_OFFSET = "icon-offset";
    public static final String ICON_ANCHOR = "icon-anchor";
    public static final String ICON_PITCH_ALIGNMENT = "icon-pitch-alignment";
    public static final String TEXT_PITCH_ALIGNMENT = "text-pitch-alignment";
    public static final String TEXT_ROTATION_ALIGNMENT = "text-rotation-alignment";
    public static final String TEXT_FIELD = "text-field";
    public static final String TEXT_FONT = "text-font";
    public static final String TEXT_SIZE = "text-size";
    public static final String TEXT_LETTER_SPACING = "text-letter-spacing";
    public static final String TEXT_ANCHOR = "text-anchor";
    public static final String TEXT_PADDING = "text-padding";
    public static final String TEXT_KEEP_UPRIGHT = "text-keep-upright";
    public static final String TEXT_IGNORE_PLACEMENT = "text-ignore-placement";
    public static final String TEXT_OPTIONAL = "text-optional";
    public static final String TEXT_OFFSET = "text-offset";
    public static final String TEXT_ALLOW_OVERLAP = "text-allow-overlap";
    
    private LayoutProperties() {
    }
}
