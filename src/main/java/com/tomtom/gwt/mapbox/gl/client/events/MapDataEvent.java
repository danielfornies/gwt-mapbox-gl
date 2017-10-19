package com.tomtom.gwt.mapbox.gl.client.events;

import com.tomtom.gwt.mapbox.gl.client.sources.input.AbstractSourceInput;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * A MapDataEvent object is emitted with the Map#data and Map#dataloading events. 
 * Possible values for dataTypes are:
 * 'source': The non-tile data associated with any source 
 * 'style': The style used by the map 
 * 'tile': A vector or raster tile
 * @see https://www.mapbox.com/mapbox-gl-js/api/#MapDataEvent
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public interface MapDataEvent extends BaseEvent {
    
    /**
     * @return The event type.
     */
    @JsProperty
    String getType();
    
    /**
     * @return The type of data that has changed. One of 'source' , 'style' . 
     */
    @JsProperty
    String getDataType();
    
    /**
     * @return True if the event has a dataType of source and the source has no outstanding network requests. 
     */
    @JsProperty
    boolean isSourceLoaded();
    
    /**
     * @param <T> The source input type.
     * @return The style spec representation of the source if the event has a dataType of source . 
     */
    @JsProperty
    <T extends AbstractSourceInput> T getSource();
    
    /**
     * TODO: find out what type to use here
     * @return The coordinate of the tile if the event has a dataType of tile.
     */
    @JsProperty
    Object getCoord();
}
