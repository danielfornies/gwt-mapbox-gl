package com.tomtom.gwt.mapbox.gl.client.overlay;

import com.tomtom.gwt.mapbox.gl.client.LngLat;
import com.tomtom.gwt.mapbox.gl.client.MapboxMap;
import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Overlays
 */
@JsType(isNative = true)
public abstract class AbstractOverlay {
    
    protected AbstractOverlay() {
    }
    
    public native void addTo(MapboxMap map);

    public native void remove();
    
    public native LngLat getLngLat();
    
    public native void setLngLat(LngLat lnglat);
}
