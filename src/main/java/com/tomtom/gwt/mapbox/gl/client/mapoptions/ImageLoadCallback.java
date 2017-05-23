package com.tomtom.gwt.mapbox.gl.client.mapoptions;

import com.google.gwt.core.client.JavaScriptException;
import com.google.gwt.dom.client.ImageElement;
import jsinterop.annotations.JsFunction;

/**
 * Basic image loading callback function, which might be invoked with a result image element or an error object.
 */
@FunctionalInterface
@JsFunction
public interface ImageLoadCallback {
    
    /**
     * Basic callback method, which can be invoked with a result or error object.
     * @param error The error object in case the image loading failed.
     * @param image The image element in case the operation was successful.
     */
    void callback(JavaScriptException error, ImageElement image);
}
