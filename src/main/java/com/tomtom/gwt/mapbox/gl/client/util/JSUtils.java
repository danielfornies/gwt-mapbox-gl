package com.tomtom.gwt.mapbox.gl.client.util;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;

/**
 * Various JS native utilities.
 */
public final class JSUtils {
    
    private JSUtils() {
    }
    
    /**
     * Sets the map access token.
     * To use any of Mapbox’s tools, APIs, or SDKs, you’ll need a Mapbox access token.
     * @param value The access token
     * @see https://www.mapbox.com/mapbox-gl-js/api/#accesstoken
     */
    public static native void setAccessToken(String value) /*-{
        $wnd.mapboxgl.accessToken = value;
    }-*/;
    
    /**
     * Sets the map's RTL text plugin. Necessary for supporting languages like Arabic and Hebrew that are written right-to-left.
     * @param url URL pointing to the Mapbox RTL text plugin source.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#setrtltextplugin
     */
    public static native void setRTLTextPlugin(String url) /*-{
        $wnd.mapboxgl.setRTLTextPlugin(url);
    }-*/;
    
    /**
     * Copies all the fields from JSON sourceObject into targetObject, if they are not null.
     * @param sourceObject The source object where to read the fields. Expected to be in JSON format.
     * @param targetObject The target object where to copy the non null fields into. Expected to be in JSON format.
     */
    public static native void copyAllNonNullFields(Object sourceObject, Object targetObject) /*-{
        if (sourceObject && targetObject) {
            for (var field in sourceObject) {
                if (sourceObject[field] !== null && sourceObject[field] !== undefined) {
                    targetObject[field] = sourceObject[field];
                }
            }
        }
    }-*/;
    
    public static native void setObject(Object targetObject, String fieldName, Object fieldValue) /*-{
        targetObject[fieldName] = fieldValue;
    }-*/;
    
    public static native JsArray toJsArray(Object... fieldValues) /*-{
        var result = [];
        for (index = 0, len = fieldValues.length; index < len; index++) {
            result.push(fieldValues[index]);
        }
        return result;
    }-*/;
    
    public static native JsArray toJsArray(double[] fieldValues) /*-{
        var result = [];
        for (index = 0, len = fieldValues.length; index < len; index++) {
            result.push(fieldValues[index]);
        }
        return result;
    }-*/;
    
    public static JsArray<JsArray> toTwoDimensionalJsArray(double[][] twoDimensionalArray) {
        JsArray<JsArray> result = JavaScriptObject.createArray(twoDimensionalArray.length).cast();
        for (int i = 0; i < twoDimensionalArray.length; i++) {
            result.set(i, toJsArray(twoDimensionalArray[i]));
        }
        return result;
    }
    
    public static JsArray<JsArray> toTwoDimensionalJsArray(Object[][] twoDimensionalArray) {
        JsArray<JsArray> result = JavaScriptObject.createArray(twoDimensionalArray.length).cast();
        for (int i = 0; i < twoDimensionalArray.length; i++) {
            result.set(i, toJsArray(twoDimensionalArray[i]));
        }
        return result;
    }
    
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
    
    public static native void log(Object object) /*-{
        $wnd.console.log(object);
    }-*/;
}
