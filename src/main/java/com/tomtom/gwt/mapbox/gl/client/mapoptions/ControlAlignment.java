package com.tomtom.gwt.mapbox.gl.client.mapoptions;

/**
 * @see https://www.mapbox.com/mapbox-gl-js/api/#Map#addControl
 */
public enum ControlAlignment {
    
    TOP_LEFT("top-left"),
    TOP_RIGHT("top-right"),
    BOTTOM_LEFT("bottom-left"),
    BOTTOM_RIGHT("bottom-right");
    
    private final String apiValue;
    
    private ControlAlignment(String apiValue) {
        this.apiValue = apiValue;
    }

    public String getApiValue() {
        return apiValue;
    }
}
