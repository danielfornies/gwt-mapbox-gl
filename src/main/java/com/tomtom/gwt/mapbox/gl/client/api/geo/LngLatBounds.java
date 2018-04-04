package com.tomtom.gwt.mapbox.gl.client.api.geo;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsType;

/**
 * A LngLatBounds object represents a geographical bounding box, defined by its southwest and northeast points in longitude and latitude.
 * This GWT version is immutable. Use the embedded Builder class to have a mutable equivalent.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public class LngLatBounds {

    /**
     * Main constructor.
     * @param sw
     * @param ne 
     */
    public LngLatBounds(LngLat sw, LngLat ne) {
    }
    
    /**
     * Converts an array to a LngLatBounds object.
     * If a LngLatBounds object is passed in, the function returns it unchanged.
     * Internally, the function calls LngLat#convert to convert arrays to LngLat values.
     * @param input An array of two coordinates to convert.
     * @return A new LngLatBounds object, if a conversion occurred, or the original LngLatBounds object.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds.convert
     */
    public native static LngLatBounds convert(double[][] input);

    /**
     * Extends the bounds to include a given LngLat or LngLatBounds.
     * This method should only be accessible from the Builder object.
     * @param obj ((LngLat | LngLatBounds)) object to extend to
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds#extend
     */
    private native LngLatBounds extend(Object obj);

    /**
     * Set the northeast corner of the bounding box.
     * This method should only be accessible from the Builder object.
     * @param ne northeast corner of the bounding box.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds#setnortheast
     */
    private native LngLatBounds setNorthEast(LngLat ne);

    /**
     * Set the southwest corner of the bounding box.
     * This method should only be accessible from the Builder object.
     * @param sw southwest corner of the bounding box.
     * @return This.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds#setsouthwest
     */
    private native LngLatBounds setSouthWest(LngLat sw);

    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds#getsouthwest
     * @return The southwest corner of the bounding box.
     */
    public native LngLat getSouthWest();

    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds#getnortheast
     * @return The northeast corner of the bounding box.
     */
    public native LngLat getNorthEast();

    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds#getnorthwest
     * @return The northwest corner of the bounding box.
     */
    public native LngLat getNorthWest();

    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds#getsoutheast
     * @return The southeast corner of the bounding box.
     */
    public native LngLat getSouthEast();

    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds#getcenter
     * @return The bounding box's center.
     */
    public native LngLat getCenter();

    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds#getwest
     * @return The west edge of the bounding box.
     */
    public native LngLat getWest();

    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds#getsouth
     * @return The south edge of the bounding box.
     */
    public native LngLat getSouth();

    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds#geteast
     * @return The east edge of the bounding box.
     */
    public native LngLat getEast();

    /**
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds#getnorth
     * @return The north edge of the bounding box.
     */
    public native LngLat getNorth();

    /**
     * Returns the bounding box represented as an array.
     * @return The bounding box represented as an array, consisting of the southwest and northeast coordinates of the bounding represented as arrays of numbers.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds#toarray
     */
    public native double[][] toArray();
    
    /**
     * Return the bounding box represented as a string.
     * @return The bounding box represents as a string of the format  'LngLatBounds(LngLat(lng, lat), LngLat(lng, lat))' .
     */
    @Override
    public native String toString();
    
    /**
     * Check if the bounding box is an empty/null-type box.
     * @return True if bounds have been defined, otherwise false.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#lnglatbounds#isempty
     */
    public native boolean isEmpty();
    
    /**
     * Checks if this bounding box contains the given coordinates.
     * This includes the edges.
     * @param coordinates The coordinates to check. Must not be null.
     * @return A boolean determining if this bounding box contains the given coordinates.
     */
    @JsOverlay
    public final boolean contains(LngLat coordinates) {
        LngLat sw = getSouthWest();
        LngLat ne = getNorthEast();
        return sw.getLng() <= coordinates.getLng()
                && sw.getLat() <= coordinates.getLat()
                && ne.getLng() >= coordinates.getLng()
                && ne.getLat() >= coordinates.getLat();
    }

    /**
     * LngLatBounds builder object, convenient to keep a mutable version.
     */
    public static class Builder {

        // This convenience local reference can be mutated, since we can access its private setters from this builder.
        private final LngLatBounds bounds;

        public Builder(LngLat sw, LngLat ne) {
            bounds = new LngLatBounds(sw, ne);
        }
        
        /**
         * Sets the given north east corner.
         * @param northEast The north east corner.
         * @return This Builder.
         */
        public Builder withNorthEast(LngLat northEast) {
            bounds.setNorthEast(northEast);
            return this;
        }
        
        /**
         * Sets the south west corner.
         * @param southWest The south west corner.
         * @return This Builder.
         */
        public Builder withSouthWest(LngLat southWest) {
            bounds.setSouthWest(southWest);
            return this;
        }

        /**
         * Extends the bounds to include a given LngLat.
         *
         * @param coordinates Coordinates to extend these bounds with.
         * @return This Builder.
         */
        public Builder extend(LngLat coordinates) {
            bounds.extend(coordinates);
            return this;
        }

        /**
         * Extends the bounds to include a given LngLatBounds.
         *
         * @param bounds The bounds to extend with.
         * @return This Builder.
         */
        public Builder extend(LngLatBounds bounds) {
            this.bounds.extend(bounds);
            return this;
        }
        
        /**
         * @return A new LngLatBounds with the current state of this Builder.
         */
        public LngLatBounds build() {
            return new LngLatBounds(bounds.getSouthWest(), bounds.getNorthEast());
        }
    }
}
