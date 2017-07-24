package com.tomtom.gwt.mapbox.gl.client.layers.paint;

/**
 * Constants with paint property names.
 * They need to be to be set by object[property-name] since their names contain "-" and are illegal to be set as object.property-name.
 */
public final class PaintProperties {

    // Line Paint  -----------------------------
    public static final String LINE_OPACITY = "line-opacity";
    public static final String LINE_COLOR = "line-color";
    public static final String LINE_TRANSLATE = "line-translate";
    public static final String LINE_TRANSLATE_ANCHOR = "line-translate-anchor";
    public static final String LINE_WIDTH = "line-width";
    public static final String LINE_GAP_WIDTH = "line-gap-width";
    public static final String LINE_OFFSET = "line-offset";
    public static final String LINE_BLUR = "line-blur";
    public static final String LINE_DASHARRAY = "line-dasharray";
    public static final String LINE_PATTERN = "line-pattern";

    // Symbol Paint -----------------------------
    public static final String ICON_OPACITY = "icon-opacity";
    public static final String ICON_COLOR = "icon-color";
    public static final String ICON_HALO_COLOR = "icon-halo-color";
    public static final String ICON_HALO_WIDTH = "icon-halo-width";
    public static final String ICON_HALO_BLUR = "icon-halo-blur";
    public static final String ICON_TRANSLATE = "icon-translate";
    public static final String ICON_TRANSLATE_ANCHOR = "icon-translate-anchor";
    public static final String TEXT_OPACITY = "text-opacity";
    public static final String TEXT_COLOR = "text-color";
    public static final String TEXT_HALO_COLOR = "text-halo-color";
    public static final String TEXT_HALO_WIDTH = "text-halo-width";
    public static final String TEXT_HALO_BLUR = "text-halo-blur";
    public static final String TEXT_TRANSLATE = "text-translate";
    public static final String TEXT_TRANSLATE_ANCHOR = "text-translate-anchor";
    
    // Raster Paint -----------------------------
    public static final String RASTER_OPACITY = "raster-opacity";
    public static final String RASTER_HUE_ROTATE = "raster-hue-rotate";
    public static final String RASTER_BRIGHTNESS_MIN = "raster-brightness-min";
    public static final String RASTER_BRIGHTNESS_MAX = "raster-brightness-max";
    public static final String RASTER_SATURATION = "raster-saturation";
    public static final String RASTER_CONTRAST = "raster-contrast";
    public static final String RASTER_FADE_DURATION = "raster-fade-duration";
    
    // Circle Paint  --------------------------
    public static final String CIRCLE_RADIUS = "circle-radius";
    public static final String CIRCLE_COLOR = "circle-color";
    public static final String CIRCLE_BLUR = "circle-blur";
    public static final String CIRCLE_OPACITY = "circle-opacity";
    public static final String CIRCLE_TRANSLATE = "circle-translate";
    public static final String CIRCLE_TRANSLATE_ANCHOR = "circle-translate-anchor";
    public static final String CIRCLE_PITCH_SCALE = "circle-pitch-scale";
    public static final String CIRCLE_STROKE_WIDTH = "circle-stroke-width";
    public static final String CIRCLE_STROKE_COLOR = "circle-stroke-color";
    public static final String CIRCLE_STROKE_OPACITY = "circle-stroke-opacity";

    private PaintProperties() {
    }
}
