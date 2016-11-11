package com.tomtom.gwt.mapbox.gl.client.layers.layout;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * https://www.mapbox.com/mapbox-gl-style-spec/#layout_line
 * Cannot use JSInterop due to invalid JS field names:
 * https://stackoverflow.com/questions/36867522/gwt-jsinterop-jstype-property-with-in-name#_=_
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public class LineLayout extends BaseLayout {
    
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
    
    protected LineLayout() {
    }
    
    @JsOverlay
    public static LineLayout build(LineCap lineCap, LineJoin lineJoin, Double lineMiterLimit, Double lineRoundLimit ) {
        LineLayout layout = new LineLayout();
        layout.setLineCap(lineCap.name());
        layout.setLineJoin(lineJoin.name());
        if (lineMiterLimit != null) {
            layout.setLineMiterLimit(lineMiterLimit);
        }
        if (lineRoundLimit != null) {
            layout.setLineJoinLimit(lineRoundLimit);
        }
        return layout;
    }
    
    @JsOverlay
    private void setLineCap(String value) {
        JSUtils.setObject(this, "line-cap", value);
    }
    
    @JsOverlay
    private void setLineJoin(String value) {
        JSUtils.setObject(this, "line-join", value);
    }
    
    @JsOverlay
    private void setLineMiterLimit(Double value) {
        JSUtils.setObject(this, "line-miter-limit", value);
    }
    
    @JsOverlay
    private void setLineJoinLimit(Double value) {
        JSUtils.setObject(this, "line-join-limit", value);
    }
}
