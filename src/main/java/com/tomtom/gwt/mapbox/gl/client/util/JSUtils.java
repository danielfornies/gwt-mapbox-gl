package com.tomtom.gwt.mapbox.gl.client.util;

/**
 *
 * 
 */
public class JSUtils {
    
    public static native void copyAllFields(Object sourceObject, Object targetObject) /*-{
        for (var field in sourceObject) {
            targetObject[field] = sourceObject[field];
        }
    }-*/;
}
