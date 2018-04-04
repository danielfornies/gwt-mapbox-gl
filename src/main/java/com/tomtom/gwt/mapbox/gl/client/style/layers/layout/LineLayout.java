package com.tomtom.gwt.mapbox.gl.client.style.layers.layout;

import static com.tomtom.gwt.mapbox.gl.client.style.layers.layout.LayoutProperties.LINE_CAP;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.layout.LayoutProperties.LINE_JOIN;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.layout.LayoutProperties.LINE_JOIN_LIMIT;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.layout.LayoutProperties.LINE_MITER_LIMIT;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Layout properties for LayerType.LINE.
 * https://www.mapbox.com/mapbox-gl-style-spec/#layout_line Cannot use JSInterop due to invalid JS field names:
 * https://stackoverflow.com/questions/36867522/gwt-jsinterop-jstype-property-with-in-name#_=_
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-line
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class LineLayout extends BaseLayout {

    private LineLayout() {
    }
    
    public static enum LineCap {
        butt,
        round,
        square
    }

    public static enum LineJoin {
        bevel,
        round,
        miter
    }

    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static final class Builder extends BaseLayout.Builder<Builder> {

        @JsOverlay
        public static final Builder newBuilder() {
            return new Builder();
        }
        
        private Builder() {
        }
        
        @JsOverlay
        public LineLayout build() {
            LineLayout layout = new LineLayout();
            JSUtils.copyAllFields(this, layout);
            return layout;
        }
        
        @JsOverlay
        public Builder withLineCap(LineCap value) {
            return withLineCap(value.name());
        }
        
        @JsOverlay
        private Builder withLineCap(String value) {
            JSUtils.setObject(this, LINE_CAP, value);
            return this;
        }
        
        @JsOverlay
        public Builder withLineJoin(LineJoin value) {
            return withLineJoin(value.name());
        }

        @JsOverlay
        private Builder withLineJoin(String value) {
            JSUtils.setObject(this, LINE_JOIN, value);
            return this;
        }
        
        @JsOverlay
        public Builder withLineMiterLimit(Double value) {
            JSUtils.setObject(this, LINE_MITER_LIMIT, value);
            return this;
        }
        
        @JsOverlay
        public Builder withLineJoinLimit(Double value) {
            JSUtils.setObject(this, LINE_JOIN_LIMIT, value);
            return this;
        }
    }
}
