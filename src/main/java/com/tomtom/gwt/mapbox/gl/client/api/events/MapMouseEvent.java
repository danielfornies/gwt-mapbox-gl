package com.tomtom.gwt.mapbox.gl.client.api.events;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import elemental2.dom.MouseEvent;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#MapMouseEvent
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface MapMouseEvent extends MapEventWithLocation, MapUserEvent<MouseEvent> {
}
