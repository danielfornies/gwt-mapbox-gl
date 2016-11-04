package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import com.tomtom.gwt.mapbox.gl.client.LngLat;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#CameraOptions
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class CameraOptions {
    
    @JsOverlay
    public static CameraOptions build(LngLat center, Double zoom, Integer bearingDegrees, Integer pitchDegrees, LngLat zoomCenter) {
        CameraOptions options = new CameraOptions();
        if (center != null) {
            options.setCenter(center);
        }
        if (zoom != null) {
            options.setZoom(zoom);
        }
        if (bearingDegrees != null) {
            options.setBearing(bearingDegrees);
        }
        if (pitchDegrees != null) {
            options.setPitch(pitchDegrees);
        }
        if (zoomCenter != null) {
            options.setAround(zoomCenter);
        }
        return options;
    }
    
    private CameraOptions() {
    }
    
    @JsProperty
    private native void setCenter(LngLat center);
    
    @JsProperty
    private native void setZoom(Double zoom);
    
    @JsProperty
    private native void setBearing(Integer degrees);
    
    @JsProperty
    private native void setPitch(Integer pitchDegrees);
    
    @JsProperty
    private native void setAround(LngLat zoomCenter);
}
