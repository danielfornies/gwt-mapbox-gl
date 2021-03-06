package com.tomtom.gwt.mapbox.gl.client.style.layers;

import com.tomtom.gwt.mapbox.gl.client.style.other.Filter;
import com.tomtom.gwt.mapbox.gl.client.style.layers.layout.BaseLayout;
import com.tomtom.gwt.mapbox.gl.client.style.layers.paint.AbstractPaint;
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
public class MapLayer<L extends BaseLayout, P extends AbstractPaint> {
    
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
    public static <L extends BaseLayout, P extends AbstractPaint> MapLayer<L, P> build(
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
    public static final class Builder<L extends BaseLayout, P extends AbstractPaint> {

        @JsOverlay
        public static Builder newBuilder(String id) {
            return new Builder().withId(id);
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
            setType(type.getApiValue());
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
