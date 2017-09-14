package com.tomtom.gwt.mapbox.gl.client.events;

/**
 *
 * @see Events for https://www.mapbox.com/mapbox-gl-js/api/#Map
 */
public enum MapEventType {

    /**
     * Fired immediately after the map has been resized.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:resize
     */
    resize,
    /**
     * Fired when the WebGL context is lost.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:webglcontextlost
     */
    webglcontextlost,
    /**
     * Fired when the WebGL context is restored.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:webglcontextrestored
     */
    webglcontextrestored,
    /**
     * Fired immediately after the map has been removed with Map#remove.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:remove
     */
    remove,
    /**
     * Fired whenever the map is drawn to the screen, as the result of
     *
     * - a change to the map's position, zoom, pitch, or bearing 
     * - a change to the map's style 
     * - a change to a GeoJSON source 
     * - the loading of a vector tile, GeoJSON file, glyph, or sprite
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:render
     */
    render,
    /**
     * Fired when a point device (usually a mouse) leaves the map's canvas.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:mouseout
     */
    mouseout,
    /**
     * Fired when a pointing device (usually a mouse) is pressed within the map.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:mousedown
     */
    mousedown,
    /**
     * Fired when a pointing device (usually a mouse) is released within the map.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:mouseup
     */
    mouseup,
    /**
     * Fired when a pointing device (usually a mouse) is moved within the map.
     * * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:mousemove
     */
    mousemove,
    /**
     * Fired when a pointing device (usually a mouse) enters a visible portion of a specified layer from outside that layer or outside the map canvas.
     * This event can only be listened for via the three-argument version of Map#on, where the second argument specifies the desired layer.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#map.event:mouseenter
     */
    mouseenter,
    /**
     * Fired when a pointing device (usually a mouse) leaves a visible portion of a specified layer, or leaves the map canvas. 
     * This event can only be listened for via the three-argument version of Map#on, where the second argument specifies the desired layer.
     */
    mouseleave,
    /**
     * Synonym for mouseenter.
     */
    mouseover,
    /**
     * Fired when a touch point is placed on the map.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:touchstart
     */
    touchstart,
    /**
     * Fired when a touch point is removed from the map.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:touchend
     */
    touchend,
    /**
     * Fired when a touch point is moved within the map.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:touchmove
     */
    touchmove,
    /**
     * Fired when a touch point has been disrupted.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:touchcancel
     */
    touchcancel,
    /**
     * Fired when a pointing device (usually a mouse) is pressed and released at the same point on the map.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:click
     */
    click,
    /**
     * Fired when a pointing device (usually a mouse) is clicked twice at the same point on the map.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:dblclick
     */
    dblclick,
    /**
     * Fired when the right button of the mouse is clicked or the context menu key is pressed within the map.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:contextmenu
     */
    contextmenu,
    /**
     * Fired immediately after all necessary resources have been downloaded and the first visually complete rendering of the map has occurred.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:load
     */
    load,
    /**
     * Fired just before the map begins a transition from one view to another, as the result of either user interaction or methods such as Map#jumpTo.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:movestart
     */
    movestart,
    /**
     * Fired repeatedly during an animated transition from one view to another, as the result of either user interaction or methods such as Map#flyTo.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:move
     */
    move,
    /**
     * Fired just after the map completes a transition from one view to another, as the result of either user interaction or methods such as Map#jumpTo.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:moveend
     */
    moveend,
    /**
     * Fired when an error occurs. This is GL JS's primary error reporting mechanism. 
     * We use an event instead of throw to better accommodate asyncronous operations. 
     * If no listeners are bound to the error event, the error will be printed to the console.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:error
     */
    error,
    /**
     * Fired when any map data loads or changes. See MapDataEvent for more information.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:data
     */
    data,
    /**
     * Fired when the map's style loads or changes. See MapDataEvent for more information.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:styledata
     */
    styledata,
    /**
     * Fired when one of the map's sources loads or changes. 
     * This event is not fired if a tile belonging to a source loads or changes (that is handled by tiledata). 
     * See MapDataEvent for more information.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:sourcedata
     */
    sourcedata,
    /**
     * Fired when one of the map's sources' tiles loads or changes. See MapDataEvent for more information.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:tiledata
     */
    tiledata,
    /**
     * Fired when any map data (style, source, tile, etc) begins loading or changing asyncronously. 
     * All dataloading events are followed by a data or error event. See MapDataEvent for more information.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:dataloading
     */
    dataloading,
    /**
     * Fired when the map's style begins loading or changing asyncronously. 
     * All styledataloading events are followed by a styledata or error event. See MapDataEvent for more information.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:styledataloading
     */
    styledataloading,
    /**
     * Fired when one of the map's sources begins loading or changing asyncronously. 
     * This event is not fired if a tile belonging to a source begins loading or changing (that is handled by tiledataloading). 
     * All sourcedataloading events are followed by a sourcedata or error event. See MapDataEvent for more information.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:sourcedataloading
     */
    sourcedataloading,
    /**
     * Fired when one of the map's sources' tiles begins loading or changing asyncronously. 
     * All tiledataloading events are followed by a tiledata or error event. 
     * See MapDataEvent for more information.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:tiledataloading
     */
    tiledataloading,
    /**
     * Fired repeatedly during an animated transition from one zoom level to another, as the result of either user interaction or methods such as Map#flyTo.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:zoom
     */
    zoom,
    /**
     * Fired just after the map completes a transition from one zoom level to another, as the result of either user interaction or methods such as Map#flyTo.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:zoomend
     */
    zoomend,
    /**
     * Fired just before the map begins a transition from one zoom level to another, as the result of either user interaction or methods such as Map#flyTo.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:zoomstart
     */
    zoomstart,
    /**
     * Fired when a "box zoom" interaction starts. See BoxZoomHandler.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:boxzoomstart
     */
    boxzoomstart,
    /**
     * Fired when a "box zoom" interaction ends. See BoxZoomHandler.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:boxzoomend
     */
    boxzoomend,
    /**
     * Fired when the user cancels a "box zoom" interaction, or when the bounding box does not meet the minimum size threshold. See BoxZoomHandler.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:boxzoomcancel
     */
    boxzoomcancel,
    /**
     * Fired when a "drag to rotate" interaction starts. See DragRotateHandler.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:rotatestart
     */
    rotatestart,
    /**
     * Fired repeatedly during a "drag to rotate" interaction. See DragRotateHandler.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:rotate
     */
    rotate,
    /**
     * Fired when a "drag to rotate" interaction ends. See DragRotateHandler.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:rotateend
     */
    rotateend,
    /**
     * Fired when a "drag to pan" interaction ends. See DragPanHandler.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:dragend
     */
    dragend,
    /**
     * Fired when a "drag to pan" interaction starts. See DragPanHandler.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:dragstart
     */
    dragstart,
    /**
     * Fired repeatedly during a "drag to pan" interaction. See DragPanHandler.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:drag
     */
    drag,
    /**
     * Fired whenever the map's pitch (tilt) changes.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#Map.event:pitch
     */
    pitch,
    /**
     * Fired whenever the map's pitch (tilt) begins a change as the result of either user interaction or methods such as Map#flyTo.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#map.event:pitchstart
     */
    pitchstart,
    /**
     * Fired immediately after the map's pitch (tilt) finishes changing as the result of either user interaction or methods such as Map#flyTo.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#map.event:pitchend
     */
    pitchend
}
