package com.tomtom.gwt.mapbox.gl.client.util;

import static com.tomtom.gwt.geojson.client.util.Constants.JS_OBJECT_TYPE;
import java.util.Map;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 *
 * 
 * @param <T>
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class NamedProperties<T> {
    
    @JsOverlay
    public static final <T> NamedProperties<T> build(Map<String, T> propertiesMap) {
        NamedProperties properties = new NamedProperties();
        propertiesMap.keySet().forEach((propertyName) -> {
            JSUtils.setObject(properties, propertyName, propertiesMap.get(propertyName));
        });
        return properties;
    }
    
    @JsOverlay
    public static final <T> NamedProperties<T> build(Object[][] propertiesMap) {
        NamedProperties properties = new NamedProperties();
        for (Object[] entry : propertiesMap) {
            JSUtils.setObject(properties, (String)entry[0], entry[1]);
        }
        return properties;
    }
    
    private NamedProperties() {
    }
    
    @JsOverlay
    public T getValue(String propertyName) {
        return JSUtils.getObject(this, propertyName);
    }
}
