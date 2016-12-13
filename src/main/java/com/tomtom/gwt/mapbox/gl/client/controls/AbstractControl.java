package com.tomtom.gwt.mapbox.gl.client.controls;

import com.google.gwt.dom.client.Element;
import com.tomtom.gwt.mapbox.gl.client.MapboxMap;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsType;

/**
 * Native abstract class adapter for the existing mapboxgl controls.
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = MAPBOX_GL_NAMESPACE)
public abstract class AbstractControl implements IControl {

    @Override
    public native Element onAdd(MapboxMap map);

    @Override
    public native String getDefaultPosition(MapboxMap map);

    @Override
    public native void onRemove(MapboxMap map);
}
