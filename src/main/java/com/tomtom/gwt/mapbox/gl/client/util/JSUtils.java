package com.tomtom.gwt.mapbox.gl.client.util;

import com.google.gwt.core.client.JsArray;

/**
 *
 * 
 */
public final class JSUtils {
    
    private JSUtils() {
    }
    
    public static native void setAccessToken(String value) /*-{
        $wnd.mapboxgl.accessToken = value;
    }-*/;
    
    public static native void copyAllFields(Object sourceObject, Object targetObject) /*-{
        for (var field in sourceObject) {
            targetObject[field] = sourceObject[field];
        }
    }-*/;
    
    public static native void setObject(Object targetObject, String fieldName, Object fieldValue) /*-{
        targetObject[fieldName] = fieldValue;
    }-*/;
    
    public static native JsArray toJsArray(Object... fieldValues) /*-{
        var result = [];
        for (index = 0, len = fieldValues.length; index < len; ++index) {
            result.push(fieldValues[index]);
        }
        return result;
    }-*/;
    
    public static native <T> T getObject(Object targetObject, String fieldName) /*-{
        return targetObject[fieldName];
    }-*/;
    
    public static native void setInt(Object targetObject, String fieldName, int fieldValue) /*-{
        targetObject[fieldName] = fieldValue;
    }-*/;
    
    public static native void setDouble(Object targetObject, String fieldName, double fieldValue) /*-{
        targetObject[fieldName] = fieldValue;
    }-*/;
    
    public static native void setBoolean(Object targetObject, String fieldName, boolean fieldValue) /*-{
        targetObject[fieldName] = fieldValue;
    }-*/;
    
//    public static native JsArray buildJsArray(Object... objects) {
//        JsArray array = (JsArray)JavaScriptObject.createArray();
//        for (Object object : objects) {
//            JavaScriptObject object = 
//            array.push(JavaScriptObject.createObject().);
//        }
//    }
    
    public static native void log(Object object) /*-{
        $wnd.console.log(object);
    }-*/;
}
