package com.tomtom.gwt.mapbox.gl.client.overlay;

import com.google.gwt.user.client.ui.Widget;
import static com.tomtom.gwt.mapbox.gl.client.overlay.Popup.POPUP_CLASS_NAME;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsType;

/**
 *
 * @param <W>
 */
@JsType(isNative = true, name = POPUP_CLASS_NAME, namespace = MAPBOX_GL_NAMESPACE)
public class WidgetPopup<W extends Widget> extends Popup implements HasWidget<W> {
    
    private W widget;
    
    @JsOverlay
    public static <W extends Widget> WidgetPopup<W> build(W widget, PopupOptions options) {
        return new WidgetPopup(options).setWidget(widget);
    }
    
    private WidgetPopup(PopupOptions options) {
        super(options);
    }
    
    @JsOverlay
    private WidgetPopup setWidget(W widget) {
        this.widget = widget;
        return this;
    }

    @Override
    @JsOverlay
    public final W getWidget() {
        return widget;
    }
}
