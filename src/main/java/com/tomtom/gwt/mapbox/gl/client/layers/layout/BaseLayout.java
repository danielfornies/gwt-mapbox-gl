package com.tomtom.gwt.mapbox.gl.client.layers.layout;

import com.google.gwt.core.client.JavaScriptObject;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 *
 * 
 */
//@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class BaseLayout extends JavaScriptObject {
    
    public static enum Visibility {
        visible,
        none
    }
    
    protected BaseLayout() {
    }
    
    //@JsOverlay
    public final void setVisibility(Visibility value) {
        setVisibility(value.name());
    }
    
    //@JsProperty
    private native void setVisibility(String value) /*-{
        this.visibility = value;
    }-*/;
}
