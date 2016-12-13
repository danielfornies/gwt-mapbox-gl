package com.tomtom.gwt.mapbox.gl.client.controls;

import com.google.gwt.dom.client.Element;
import com.tomtom.gwt.mapbox.gl.client.MapboxMap;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsType;

/**
 * Interface for interactive controls added to the map. 
 * This is an specification for implementers to model: it is not an exported method or class.
 * Controls must implement onAdd and onRemove, and must own an element, which is often a div element. 
 * To use Mapbox GL JS's default control styling, add the mapboxgl-ctrl class to your control's node.
 *
 * @see https://www.mapbox.com/mapbox-gl-js/api/#IControl
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = MAPBOX_GL_NAMESPACE)
public interface IControl {

    /**
     * Register a control on the map and give it a chance to register event listeners and resources. This method is called by Map#addControl internally.
     *
     * @param map the Map this control will be added to
     * @return The control's container element. This should be created by the control and returned by onAdd without being attached to the DOM: the map will insert the control's element into the DOM as
     * necessary.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#IControl#onAdd
     */
    Element onAdd(MapboxMap map);

    /**
     * Optionally provide a default position for this control. 
     * If this method is implemented and Map#addControl is called without the position parameter, 
     * the value returned by getDefaultPosition will be used as the control's position.
     * @param map the Map this control will be added to.
     * @return a control position, one of the values valid in addControl.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#IControl#getDefaultPosition
     * @see com.tomtom.gwt.mapbox.gl.client.mapoptions.ControlAlignment
     */
    String getDefaultPosition(MapboxMap map);

    /**
     * Unregister a control on the map and give it a chance to detach event listeners and resources. This method is called by Map#removeControl internally.
     *
     * @param map the Map this control will be removed from
     * @see https://www.mapbox.com/mapbox-gl-js/api/#IControl#onRemove
     */
    void onRemove(MapboxMap map);
}
