package com.tomtom.gwt.mapbox.gl.client.layers;

import com.tomtom.gwt.mapbox.gl.client.layers.layout.AbstractLayout;
import com.tomtom.gwt.mapbox.gl.client.layers.paint.AbstractPaint;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * https://www.mapbox.com/mapbox-gl-style-spec/#layers
 * @param <L>
 * @param <P>
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class MapLayer<L extends AbstractLayout, P extends AbstractPaint> {
    
    @JsOverlay
    public static <L extends AbstractLayout, P extends AbstractPaint> MapLayer<L, P> build(
            String id, LayerType type, String source, String sourceLayer, L layout, P paint) {
        MapLayer mapLayer = new MapLayer();
        mapLayer.setId(id);
        mapLayer.setType(type.name());
        if (source != null) {
            mapLayer.setSource(source);
        }
        if (sourceLayer != null) {
            mapLayer.setSourceLayer(sourceLayer);
        }
        if (layout != null) {
            mapLayer.setLayout(layout);
        }
        if (paint != null) {
            mapLayer.setPaint(paint);
        }
        return mapLayer;
    }
    
    private MapLayer() {
    }

    @JsProperty
    public native String getId();

    @JsProperty
    private native void setId(String value);

    @JsProperty
    public native String getType();

    @JsProperty
    private native void setType(String value);

    @JsProperty
    public native String getSource();

    @JsProperty
    private native void setSource(String value);
    
    @JsOverlay
    private void setSourceLayer(String value) {
        JSUtils.setObject(this, "source-layer", value);
    }
    
    @JsProperty
    public native L getLayout();
    
    @JsProperty
    private native void setLayout(L layout);
    
    @JsProperty
    public native P getPaint();
    
    @JsProperty
    private native void setPaint(P paint);
}
