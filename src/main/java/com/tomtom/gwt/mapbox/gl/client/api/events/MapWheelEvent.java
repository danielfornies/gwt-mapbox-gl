package com.tomtom.gwt.mapbox.gl.client.api.events;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import elemental2.dom.WheelEvent;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * MapWheelEvent is the event type for the wheel map event.
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface MapWheelEvent extends MapUserEvent<WheelEvent> {
}
