package com.tomtom.gwt.mapbox.gl.client.overlay;

import com.tomtom.gwt.mapbox.gl.client.LngLat;
import com.tomtom.gwt.mapbox.gl.client.MapboxMap;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Overlays
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public abstract class AbstractOverlay {
    
    protected AbstractOverlay() {
    }
    
    public native <T extends AbstractOverlay> T addTo(MapboxMap map);

    public native <T extends AbstractOverlay> T remove();
    
    public native LngLat getLngLat();
    
    public native <T extends AbstractOverlay> T setLngLat(LngLat lnglat);
}
