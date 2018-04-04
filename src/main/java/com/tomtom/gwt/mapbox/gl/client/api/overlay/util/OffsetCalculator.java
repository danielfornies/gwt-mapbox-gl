package com.tomtom.gwt.mapbox.gl.client.api.overlay.util;

import com.tomtom.gwt.mapbox.gl.client.api.Point;
import com.tomtom.gwt.mapbox.gl.client.api.overlay.Alignment;

/**
 * Utility class for point offset calculations.
 */
public class OffsetCalculator {

    private OffsetCalculator() {
    }
    
    public static Point toOffsetPx(int widthPx, int heightPx, Alignment alignment) {
        switch (alignment) {
            case BOTTOM_CENTER:
                return new Point(-widthPx/2, 0);
            case BOTTOM_LEFT:
                return new Point(-widthPx, 0);
            case MIDDLE_CENTER:
                return new Point(-widthPx/2, -heightPx/2);
            case MIDDLE_LEFT:
                return new Point(-widthPx, -heightPx/2);
            case MIDDLE_RIGHT:
                return new Point(0, -heightPx/2);
            case TOP_CENTER:
                return new Point(-widthPx/2, -heightPx);
            case TOP_LEFT:
                return new Point(-widthPx, -heightPx);
            case TOP_RIGHT:
                return new Point(0, -heightPx);
            default: 
                // BOTTOM_RIGHT
                return new Point(0, 0);
        }
    }
}
