package com.tomtom.gwt.mapbox.gl.client.style.layers.paint;

import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.HILLSHADE_ACCENT_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.HILLSHADE_EXAGGERATION;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.HILLSHADE_HIGHLIGHT_COLOR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.HILLSHADE_ILLUMINATION_ANCHOR;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.HILLSHADE_ILLUMINATION_DIRECTION;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.paint.PaintProperties.HILLSHADE_SHADOW_COLOR;
import com.tomtom.gwt.mapbox.gl.client.api.mapoptions.Anchor;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Paint properties for LayerType.HILLSHADE.
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-hillshade
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class HillshadePaint {
    
    private HillshadePaint() {
    }
    
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class Builder {

        private Builder() {
        }
        
        @JsOverlay
        public static Builder newBuilder() {
            return new Builder();
        }
        
        @JsOverlay
        public HillshadePaint build() {
            HillshadePaint paint = new HillshadePaint();
            JSUtils.copyAllFields(this, paint);
            return paint;
        }
        
        /**
         * The direction of the light source used to generate the hillshading 
         * with 0 as the top of the viewport if hillshade-illumination-anchor is set to viewport and due north if hillshade-illumination-anchor is set to map.
         * @param directionDegrees Paint property. Optional number between 0 and 359 inclusive. Defaults to 335.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-hillshade-hillshade-illumination-direction
         */
        @JsOverlay
        public Builder withIlluminationDirection(double directionDegrees) {
            JSUtils.setDouble(this, HILLSHADE_ILLUMINATION_DIRECTION, directionDegrees);
            return this;
        }
        
        /**
         * Direction of light source when map is rotated.
         * @param anchor Paint property. Optional enum. One of "map", "viewport". Defaults to "viewport".
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-hillshade-hillshade-illumination-anchor
         */
        @JsOverlay
        public Builder withIlluminationAnchor(Anchor anchor) {
            JSUtils.setObject(this, HILLSHADE_ILLUMINATION_ANCHOR, anchor);
            return this;
        }
        
        /**
         * Intensity of the hillshade
         * @param exaggeration Paint property. Optional number between 0 and 1 inclusive. Defaults to 0.5.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-hillshade-hillshade-exaggeration
         */
        @JsOverlay
        public Builder withExaggeration(double exaggeration) {
            JSUtils.setDouble(this, HILLSHADE_EXAGGERATION, exaggeration);
            return this;
        }
        
        /**
         * The shading color of areas that face away from the light source.
         * @param shadowColor Paint property. Optional color. Defaults to "#000000".
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-hillshade-hillshade-shadow-color
         */
        @JsOverlay
        public Builder withShadowColor(String shadowColor) {
            JSUtils.setObject(this, HILLSHADE_SHADOW_COLOR, shadowColor);
            return this;
        }
        
        /**
         * The shading color of areas that faces towards the light source.
         * @param highlightColor Paint property. Optional color. Defaults to "#FFFFFF".
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-hillshade-hillshade-shadow-color
         */
        @JsOverlay
        public Builder withHighlightColor(String highlightColor) {
            JSUtils.setObject(this, HILLSHADE_HIGHLIGHT_COLOR, highlightColor);
            return this;
        }
        
        /**
         * The shading color used to accentuate rugged terrain like sharp cliffs and gorges.
         * @param accentColor Paint property. Optional color. Defaults to "#000000".
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec#paint-hillshade-hillshade-shadow-color
         */
        @JsOverlay
        public Builder withAccentColor(String accentColor) {
            JSUtils.setObject(this, HILLSHADE_ACCENT_COLOR, accentColor);
            return this;
        }
    }
}
