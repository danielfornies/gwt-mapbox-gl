package com.tomtom.gwt.mapbox.gl.client.events;

import com.google.gwt.event.dom.client.MouseEvent;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#MapMouseEvent
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface MapMouseEvent extends MapEventWithLocation, UserEvent<MouseEvent> {
}
