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
    
    public static native void setObject(Object targetObject, String fieldName, Object fieldValue) /*-{
        targetObject[fieldName] = fieldValue;
    }-*/;
    
    public static native void setInt(Object targetObject, String fieldName, int fieldValue) /*-{
        targetObject[fieldName] = fieldValue;
    }-*/;
    
    public static native void setDouble(Object targetObject, String fieldName, double fieldValue) /*-{
        targetObject[fieldName] = fieldValue;
    }-*/;
    
    public static native void setStopsTestShit(Object targetObject) /*-{
        targetObject["line-width"] = {"stops" : [[1, 3], [5, 4], [10, 7], [18,9]]};
    }-*/;
}
