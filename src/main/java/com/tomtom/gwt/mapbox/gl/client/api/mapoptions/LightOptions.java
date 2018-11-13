package com.tomtom.gwt.mapbox.gl.client.api.mapoptions;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArrayNumber;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * A style's light property provides global light source for that style.
 *
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#light
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class LightOptions {

    @JsOverlay
    public static final LightOptions DEFAULT = Builder.newBuilder().build();
    
    private LightOptions() {
    }

    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class Builder {

        private Builder() {
        }

        @JsOverlay
        public static Builder newBuilder() {
            return new Builder();
        }

        /**
         * Whether extruded geometries are lit relative to the map or viewport.
         *
         * @param anchor One of map, viewport. Defaults to viewport.
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#light-anchor
         */
        @JsOverlay
        public Builder withAnchor(Anchor anchor) {
            setAnchor(anchor.name());
            return this;
        }

        /**
         * Position of the light source relative to lit (extruded) geometries, in [r radial coordinate, a azimuthal angle, p polar angle] where r indicates the distance from the center of the base of
         * an object to its light, a indicates the position of the light relative to 0° (0° when light.anchor is set to viewport corresponds to the top of the viewport, or 0° when light.anchor is set
         * to map corresponds to due north, and degrees proceed clockwise), and p indicates the height of the light (from 0°, directly above, to 180°, directly below).
         * @param radial (Defaults to 1.15)
         * @param azimuth (Defaults to 210)
         * @param polar (Defaults to 30)
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#light-position
         */
        @JsOverlay
        public Builder withPosition(double radial, double azimuth, double polar) {
            JsArrayNumber positionArray = JavaScriptObject.createArray(3).cast();
            positionArray.push(radial);
            positionArray.push(azimuth);
            positionArray.push(polar);
            setPosition(positionArray);
            return this;
        }

        /**
         * Color tint for lighting extruded geometries.
         * @param color (Defaults to #ffffff)
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#light-color
         */
        @JsOverlay
        public Builder withColor(String color) {
            setColor(color);
            return this;
        }

        /**
         * Intensity of lighting (on a scale from 0 to 1). Higher numbers will present as more extreme contrast.
         * @param intensity (Defaults to 0.5) Intensity of lighting (on a scale from 0 to 1).
         * @return This builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#light-intensity
         */
        @JsOverlay
        public Builder withIntensity(double intensity) {
            setIntensity(intensity);
            return this;
        }

        @JsProperty
        private native void setAnchor(String anchor);

        @JsProperty
        private native void setPosition(JsArrayNumber position);

        @JsProperty
        private native void setColor(String color);

        @JsProperty
        private native void setIntensity(double intensity);

        /**
         * @return A new LightOptions instance from this builder.
         */
        @JsOverlay
        public LightOptions build() {
            LightOptions options = new LightOptions();
            JSUtils.copyAllNonNullFields(this, options);
            return options;
        }
    }
}
