package com.tomtom.gwt.mapbox.gl.client.overlay;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Common interface for overlays which wrap a GWT Widget.
 * @param <W> The sub-type of wrapped widget.
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface HasWidget<W> {
    
    /**
     * @return The wrapped widget in this overlay.
     */
    W getWidget();
}
