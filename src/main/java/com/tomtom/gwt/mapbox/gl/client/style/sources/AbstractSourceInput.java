package com.tomtom.gwt.mapbox.gl.client.style.sources;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Sources supply data to be shown on the map. The type of source is specified by the "type" property, and must be one of vector, raster, geojson, image, video, canvas. 
 * Adding a source won't immediately make data appear on the map because sources don't contain styling details like color or width. Layers refer to a source and give it a visual representation. 
 * This makes it possible to style the same source in different ways, like differentiating between types of roads in a highways layer.
 *
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#sources
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public abstract class AbstractSourceInput {

    @JsProperty
    public native String getType();

    @JsProperty
    protected native void setType(String value);
}
