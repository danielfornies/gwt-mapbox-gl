package com.tomtom.gwt.mapbox.gl.client.style.layers.layout;

import static com.tomtom.gwt.mapbox.gl.client.style.layers.layout.LayoutProperties.LINE_CAP;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.layout.LayoutProperties.LINE_JOIN;
import static com.tomtom.gwt.mapbox.gl.client.style.layers.layout.LayoutProperties.LINE_ROUND_LIMIT;
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
            JSUtils.copyAllNonNullFields(this, layout);
            return layout;
        }
        
        /**
         * The display of line endings.
         * @param value Optional enum. One of "butt", "round", "square". Defaults to "butt".
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-line-line-cap
         */
        @JsOverlay
        public Builder withLineCap(LineCap value) {
            JSUtils.setObject(this, LINE_CAP, value.name());
            return this;
        }
        
        /**
         * The display of lines when joining.
         * @param value Optional enum. One of "bevel", "round", "miter". Defaults to "miter".
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-line-line-join
         */
        @JsOverlay
        public Builder withLineJoin(LineJoin value) {
            JSUtils.setObject(this, LINE_JOIN, value.name());
            return this;
        }
        
        /**
         * Used to automatically convert miter joins to bevel joins for sharp angles.
         * @param value Layout property. Optional number. Defaults to 2. Requires line-join to be miter.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-line-line-miter-limit
         */
        @JsOverlay
        public Builder withLineMiterLimit(double value) {
            JSUtils.setDouble(this, LINE_MITER_LIMIT, value);
            return this;
        }
        
        /**
         * Used to automatically convert round joins to miter joins for shallow angles.
         * @param value Layout property. Optional number. Defaults to 1.05. Requires line-join to be round.
         * @return This Builder.
         * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layout-line-line-round-limit
         */
        @JsOverlay
        public Builder withLineRoundLimit(double value) {
            JSUtils.setDouble(this, LINE_ROUND_LIMIT, value);
            return this;
        }
    }
}