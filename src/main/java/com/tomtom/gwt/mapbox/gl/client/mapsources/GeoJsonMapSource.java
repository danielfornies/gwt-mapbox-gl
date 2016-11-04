package com.tomtom.gwt.mapbox.gl.client.mapsources;

import com.tomtom.gwt.geojson.client.AbstractGeoJson;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 *
 * 
 * @param <T>
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class GeoJsonMapSource<T> extends AbstractMapSource {
    
    @JsOverlay
    public static GeoJsonMapSource<String> buildWithURL(String geoJsonUrl) {
        return build(geoJsonUrl);
    }
    
    @JsOverlay
    public static GeoJsonMapSource<AbstractGeoJson> buildWithInlineGeoJson(AbstractGeoJson inlineGeoJson) {
        return build(inlineGeoJson);
    }
    
//    @JsOverlay
//    private void init(D data, int maxZoom, int bufferValue, double tolerance, boolean cluster, int clusterRadius) {
//        init(data);
//        setMaxzoom(maxZoom);
//        setBuffer(bufferValue);
//        setTolerance(tolerance);
//        setCluster(cluster);
//        setClusterRadius(clusterRadius);
//    }
    
    @JsOverlay
    private static <T> GeoJsonMapSource<T> build(T data) {
        GeoJsonMapSource mapSource = new GeoJsonMapSource();
        mapSource.setType("geojson");
        mapSource.setData(data);
        return mapSource;
    }
    
    private GeoJsonMapSource() {
    }
    
    @JsProperty
    public native T getData();
    
    @JsProperty
    private native void setData(T geoJsonData);
    
    @JsProperty
    public native int getMaxzoom();
    
    @JsProperty
    private native void setMaxzoom(int value);
    
    @JsProperty
    public native int getBuffer();
    
    @JsProperty
    private native void setBuffer(int value);
    
    @JsProperty
    public native double getTolerance();
    
    @JsProperty
    private native void setTolerance(double value);
    
    @JsProperty
    public native boolean getCluster();
    
    @JsProperty
    private native void setCluster(boolean value);
    
    @JsProperty
    public native int getClusterRadius();
    
    @JsProperty
    private native void setClusterRadius(int value);
}
