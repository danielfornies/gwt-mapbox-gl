package com.tomtom.gwt.mapbox.gl.client.overlay;

import com.google.gwt.dom.client.Node;
import com.tomtom.gwt.mapbox.gl.client.Point;
import static com.tomtom.gwt.mapbox.gl.client.overlay.Popup.POPUP_CLASS_NAME;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Popup
 */
@JsType(isNative = true, name = POPUP_CLASS_NAME, namespace = MAPBOX_GL_NAMESPACE)
public class Popup extends AbstractOverlay {
    
    @JsOverlay
    public static final String POPUP_CLASS_NAME = "Popup";
    
    public static enum PopupAnchor {
        TOP("top"),
        BOTTOM("bottom"),
        LEFT("left"),
        RIGHT("right"),
        TOP_LEFT("top-left"),
        TOP_RIGHT("top-right"),
        BOTTOM_LEFT("bottom-left"),
        BOTTOM_RIGHT("bottom-right");
        
        final String apiValue;

        private PopupAnchor(String apiValue) {
            this.apiValue = apiValue;
        }
    }
    
    @JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
    public static class PopupOptions {
        
        private PopupOptions() {
        }
        
        @JsOverlay
        public static PopupOptions build(boolean closeButton, boolean closeOnClick, PopupAnchor anchor, Point offset) {
            PopupOptions popupOptions = new PopupOptions();
            popupOptions.setCloseButton(closeButton);
            popupOptions.setCloseOnClick(closeOnClick);
            if (anchor != null) {
                popupOptions.setAnchor(anchor.apiValue);
            }
            if (offset != null) {
                popupOptions.setOffset(offset);
            }
            return popupOptions;
        }
        
        @JsProperty
        private native void setCloseButton(boolean enabled);
        
        @JsProperty
        private native void setCloseOnClick(boolean enabled);
        
        @JsProperty
        private native void setAnchor(String anchor);
        
        @JsProperty
        private native void setOffset(Point offset);
    }
    
    public Popup(PopupOptions options) {
    }
    
    public native boolean isOpen();
    
    public native Popup setText(String text);
    
    public native Popup setHtml(String html);
    
    public native Popup setDOMContent(Node htmlNode);
}
