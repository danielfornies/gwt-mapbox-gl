package com.tomtom.gwt.mapbox.gl.client.layers.layout;

/**
 * https://www.mapbox.com/mapbox-gl-style-spec/#layout_line
 * Cannot use JSInterop due to invalid JS field names:
 * https://stackoverflow.com/questions/36867522/gwt-jsinterop-jstype-property-with-in-name#_=_
 */
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
    
    public static LineLayout build(LineCap lineCap, LineJoin lineJoin, Double lineMiterLimit, Double lineRoundLimit ) {
        LineLayout layout = LineLayout.createObject().cast();
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
    
    private native void setLineCap(String value) /*-{
        this["line-cap"] = value;
    }-*/;
    
    private native void setLineJoin(String value) /*-{
        this["line-join"] = value;
    }-*/;
    
    private native void setLineMiterLimit(Double value) /*-{
        this["line-miter-limit"] = value;
    }-*/;
    
    private native void setLineJoinLimit(Double value) /*-{
        this["line-miter-limit"] = value;
    }-*/;
}
