package com.tomtom.gwt.mapbox.gl.client.sources;

import com.tomtom.gwt.mapbox.gl.client.events.Evented;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Sources specify the geographic features to be rendered on the map. Source objects may be obtained from Map#getSource.
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Sources
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface MapSource extends Evented {
}
