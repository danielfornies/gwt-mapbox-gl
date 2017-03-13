package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import com.tomtom.gwt.mapbox.gl.client.events.AbstractEvented;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Options for setting padding on a call to Map#fitBounds. All properties of this object must be non-negative integers.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#paddingoptions
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class PaddingOptions extends AbstractEvented {
    
    private PaddingOptions() {
    }
    
    /**
     * Options for setting padding on a call to Map#fitBounds. All properties of this object must be non-negative integers.
     * @param top Padding in pixels from the top of the map canvas.
     * @param bottom Padding in pixels from the bottom of the map canvas.
     * @param left Padding in pixels from the left of the map canvas.
     * @param right Padding in pixels from the right of the map canvas.
     * @return 
     */
    @JsOverlay
    public static final PaddingOptions build(int top, int bottom, int left, int right) {
        PaddingOptions options = new PaddingOptions();
        options.setTop(top);
        options.setBottom(bottom);
        options.setLeft(left);
        options.setRight(right);
        return options;
    }
    
    private native void setTop(int valuePixels);
    
    private native void setBottom(int valuePixels);
    
    private native void setLeft(int valuePixels);
    
    private native void setRight(int valuePixels);
}
