package com.tomtom.gwt.mapbox.gl.client.layers.paint;

import com.google.gwt.core.client.JavaScriptObject;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 *
 * 
 * 
 */
//@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public abstract class AbstractPaint extends JavaScriptObject {
    
    protected AbstractPaint() {
    }
    
    public static enum Anchor {
        map,
        viewport
    }
}
