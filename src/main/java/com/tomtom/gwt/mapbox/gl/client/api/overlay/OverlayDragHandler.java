package com.tomtom.gwt.mapbox.gl.client.api.overlay;

import com.tomtom.gwt.mapbox.gl.client.api.events.MapEventWithLocation;

/**
 * Handler for map overlay drag events.
 * @param <T> The sub-type of overlay (e.g. Marker vs Popup)
 */
public interface OverlayDragHandler<T extends AbstractOverlay> {
    
    /**
     * The overlay got dragged to the new given coordinates.
     * This implies that the overialy is still being dragged at this moment.
     * @param overlay The overlay being dragged.
     * @param event The event with the dragged information.
     */
    void onOverlayDragged(T overlay, MapEventWithLocation event);
    
    /**
     * The overlay finished dragging (mouse up/touch end).
     * @param overlay The overlay which was being dragged.
     */
    void onOverlayDragEnd(T overlay);
}
