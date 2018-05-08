package com.tomtom.gwt.mapbox.gl.client.api.events;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Represents an event triggered by the user (mouse-touch related).
 * @param <T> The sub-type for the original event.
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface MapUserEvent<T> extends BaseEvent {
    
    @JsProperty
    T getOriginalEvent();
    
    /**
     * Prevents subsequent default processing of the event by the map.
     *
     * Calling this method will prevent the following default map behaviors:
     * For mouse events:
     * - On mousedown events, the behavior of DragPanHandler 
     * - On mousedown events, the behavior of DragRotateHandler 
     * - On mousedown events, the behavior of BoxZoomHandler 
     * - On dblclick events, the behavior of DoubleClickZoomHandler
     * 
     * For touch events:
     * - On touchstart events, the behavior of DragPanHandler
     * - On touchstart events, the behavior of TouchZoomRotateHandler
     * 
     * For wheel events:
     * - Calling this method will prevent the the behavior of ScrollZoomHandler.
     */
    void preventDefault();
    
    /**
     * @return true if preventDefault has been called.
     */
    @JsProperty
    boolean isDefaultPrevented();
}
