package com.tomtom.gwt.mapbox.gl.client.api.events;

import com.google.gwt.event.dom.client.MouseEvent;
import com.tomtom.gwt.mapbox.gl.client.api.geo.LngLatBounds;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#MapBoxZoomEvent
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface MapBoxZoomEvent extends UserEvent<MouseEvent> {
    
    /**
     * @return The bounding box of the "box zoom" interaction. This property is only provided for boxzoomend events. 
     */
    @JsProperty
    LngLatBounds getBoxZoomBounds();
}
