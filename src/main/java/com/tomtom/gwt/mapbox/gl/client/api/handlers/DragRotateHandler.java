package com.tomtom.gwt.mapbox.gl.client.api.handlers;

import com.tomtom.gwt.mapbox.gl.client.api.MapboxMap;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * The DragRotateHandler allows the user to rotate the map by clicking and dragging the cursor while holding the right mouse button or ctrl key.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#DragRotateHandler
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class DragRotateHandler extends AbstractHandler {

    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class DragRotateOptions {
        
        /**
         * @param bearingSnapDegrees (default 7) The threshold, measured in degrees, that determines when the map's bearing (rotation) will snap to north.
         * @param pitchWithRotate (default true) Control the map pitch in addition to the bearing
         * @return The options for the DragRotateHandler.
         */
        @JsOverlay
        public static DragRotateOptions build(double bearingSnapDegrees, boolean pitchWithRotate) {
            DragRotateOptions options = new DragRotateOptions();
            options.setBearingSnap(bearingSnapDegrees);
            options.setPitchWithRotate(pitchWithRotate);
            return options;
        }
        
        private DragRotateOptions() {
        }
        
        @JsProperty
        private native void setBearingSnap(double degrees);
        
        @JsProperty
        private native void setPitchWithRotate(boolean enabled);
    }
    
    public DragRotateHandler(MapboxMap map) {
    }
    
    /**
     * Returns a Boolean indicating whether the "drag to pan" interaction is active, i.e. currently being used.
     * @return true if the "drag to pan" interaction is active.
     */
    public native boolean isActive();
}
