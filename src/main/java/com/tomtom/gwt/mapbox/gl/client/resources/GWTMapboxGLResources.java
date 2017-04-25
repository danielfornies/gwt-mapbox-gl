package com.tomtom.gwt.mapbox.gl.client.resources;

import com.google.gwt.core.client.ScriptInjector;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;
import com.google.gwt.resources.client.ExternalTextResource;
import com.google.gwt.resources.client.TextResource;

/**
 * Resources related to the mapbox GL JS library.
 * These consist of the actual JS code and main CSS styles.
 * These resources need to be loaded by calling the load method below.
 */
public class GWTMapboxGLResources {

    private static boolean initialized = false;
    
    private GWTMapboxGLResources() {
    }

    /**
     * Loads the necessary resources for the GWT Mapbox GL library to start working.
     * Can be called after this GWT module is loaded, but before the parts that use the actual JS library start being used.
     */
    public static void load() {
        if (!initialized) {
            load(GWT.create(MapboxGLClientBundle.class));
        }
    }

    /**
     * Loads the necessary resources for the GWT Mapbox GL library to start working.
     * Can be called after this GWT module is loaded, but before the parts that use the actual JS library start being used.
     * @param clientBundle An instance to MapboxGLClientBundle. Convenient to reuse inherited client bundles.
     */
    public static void load(MapboxGLClientBundle clientBundle) {
        if (!initialized) {
            clientBundle.mapboxCSS().ensureInjected();
            ScriptInjector.fromString(clientBundle.getMapboxJS().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();
            initialized = true;
        }
    }
    
    /**
     * Client bundle containing references to the resources needed to use this library (JS and base CSS).
     */
    public interface MapboxGLClientBundle extends ClientBundle {

        /**
         * 
         * https://api.tiles.mapbox.com/mapbox-gl-js/{VERSION}/mapbox-gl.js
         * @return The resource with this production version of mapbox gl js.
         */
        @Source("mapbox-gl.js")
        TextResource getMapboxJS();
        
        /**
         * Returns the resource with this development version of mapbox gl js (not minimized).
         * This one is to be used for debugging purposes only.
         * https://api.tiles.mapbox.com/mapbox-gl-js/{VERSION}/mapbox-gl-dev.js
         * @return The resource with this development version of mapbox gl js.
         */
        @Source("mapbox-gl-dev.js")
        ExternalTextResource getMapboxDevJS();

        /**
         * https://api.tiles.mapbox.com/mapbox-gl-js/{VERSION}/mapbox-gl.css
         * @return 
         */
        @Source("mapbox-gl.css")
        @NotStrict
        CssResource mapboxCSS();
    }
}
