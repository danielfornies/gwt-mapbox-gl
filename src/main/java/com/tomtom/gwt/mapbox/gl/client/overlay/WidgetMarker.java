package com.tomtom.gwt.mapbox.gl.client.overlay;

import com.google.gwt.dom.client.Element;
import com.google.gwt.user.client.ui.Widget;
import static com.tomtom.gwt.mapbox.gl.client.overlay.Marker.API_CLASS_NAME;
import com.tomtom.gwt.mapbox.gl.client.overlay.util.OffsetCalculator;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsType;

/**
 *
 * @param <W>
 */
@JsType(isNative = true, name = API_CLASS_NAME)
public class WidgetMarker<W extends Widget> extends Marker implements HasWidget<W> {
    
    private W widget;
    
    @JsOverlay
    public static <W extends Widget> WidgetMarker<W> buildWithSize(W widget, int widthPx, int heightPx, Alignment alignment) {
        return build(widget, MarkerOptions.build(OffsetCalculator.toOffsetPx(widthPx, heightPx, alignment)));
    }
    
    @JsOverlay
    public static <W extends Widget> WidgetMarker<W> build(W widget, MarkerOptions options) {
        return new WidgetMarker(widget.getElement(), options).setWidget(widget);
    }
    
    private WidgetMarker(Element element, MarkerOptions options) {
        super(element, options);
    }
    
    @JsOverlay
    private WidgetMarker setWidget(W widget) {
        this.widget = widget;
        return this;
    }

    @Override
    @JsOverlay
    public final W getWidget() {
        return widget;
    }
}
