package com.tomtom.gwt.mapbox.gl.client.layers;

import com.tomtom.gwt.mapbox.gl.client.layers.filter.Filter;
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
 *
 * @param <L>
 * @param <P>
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class MapLayer<L extends AbstractLayout, P extends AbstractPaint> {
    
    private MapLayer() {
    }

    @JsProperty
    public native String getId();

    @JsProperty
    public native String getType();

    @JsProperty
    public native String getSource();

    @JsProperty
    public native L getLayout();

    @JsProperty
    public native P getPaint();
    
    @Deprecated
    @JsOverlay
    public static <L extends AbstractLayout, P extends AbstractPaint> MapLayer<L, P> build(
            String id, LayerType type, String source, String sourceLayer, L layout, P paint) {
        Builder builder = Builder.newBuilder(id).withType(type);
        if (type != null) {
            builder.withType(type);
        }
        if (source != null) {
            builder.withSource(source);
        }
        if (sourceLayer != null) {
            builder.withSourceLayer(sourceLayer);
        }
        if (layout != null) {
            builder.withLayout(layout);
        }
        if (paint != null) {
            builder.withPaint(paint);
        }
        return builder.build();
    }
    
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class Builder<L extends AbstractLayout, P extends AbstractPaint> {

        @JsOverlay
        public static Builder newBuilder(String id) {
            return new Builder().withId(id);
        }
        
        @JsOverlay
        public static Builder newBuilder(String id, MapLayer refLayer) {
            return new Builder().withId(id).withRef(refLayer);
        }

        private Builder() {
        }
        
        @JsOverlay
        public MapLayer<L, P> build() {
            MapLayer layer = new MapLayer();
            JSUtils.copyAllFields(this, layer);
            return layer;
        }
        
        @JsOverlay
        private Builder withId(String id) {
            setId(id);
            return this;
        }
        
        @JsProperty
        private native void setId(String value);

        @JsOverlay
        public Builder withType(LayerType type) {
            setType(type.name());
            return this;
        }
        
        @JsProperty
        private native void setType(String value);

        @JsOverlay
        public Builder withMetadata(Object metadata) {
            setMetadata(metadata);
            return this;
        }
        
        @JsProperty
        private native void setMetadata(Object metadata);
        
        @JsOverlay
        public Builder withRef(MapLayer layer) {
            setRef(layer.getId());
            return this;
        }
        
        @JsOverlay
        public Builder withRef(String layerId) {
            setRef(layerId);
            return this;
        }
        
        @JsProperty
        private native void setRef(String ref);
        
        @JsOverlay
        public Builder withSource(String source) {
            setSource(source);
            return this;
        }
        
        @JsProperty
        private native void setSource(String value);

        @JsOverlay
        public Builder withSourceLayer(String value) {
            JSUtils.setObject(this, "source-layer", value);
            return this;
        }
        
        @JsOverlay
        public Builder withMaxZoom(double maxZoom) {
            setMaxzoom(maxZoom);
            return this;
        }
        
        @JsProperty
        private native void setMaxzoom(double value);
        
        @JsOverlay
        public Builder withMinZoom(double minZoom) {
            setMinzoom(minZoom);
            return this;
        }
        
        @JsProperty
        private native void setMinzoom(double value);
        
        @JsOverlay
        public Builder withFilter(Filter filter) {
            setFilter(filter.getExpression());
            return this;
        }
        
        @JsProperty
        public native void setFilter(Object filter);
        
        @JsOverlay
        public Builder withLayout(L layout) {
            setLayout(layout);
            return this;
        }

        @JsProperty
        private native void setLayout(L layout);

        @JsOverlay
        public Builder withPaint(P paint) {
            setPaint(paint);
            return this;
        }
        
        @JsProperty
        private native void setPaint(P paint);
    }
}
