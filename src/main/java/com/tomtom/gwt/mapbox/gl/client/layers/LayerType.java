package com.tomtom.gwt.mapbox.gl.client.layers;

/**
 * Rendering type of a layer. 
 * @see https://www.mapbox.com/mapbox-gl-style-spec/#layer-type
 */
public enum LayerType {
    /**
     * A filled polygon with an optional stroked border.
     * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-fill
     */
    FILL("fill"),
    /**
     * A stroked line.
     * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-line
     */
    LINE("line"),
    /**
     * An icon or a text label.
     * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-symbol
     */
    SYMBOL("symbol"),
    /**
     * A filled circle.
     * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-circle
     */
    CIRCLE("circle"),
    /**
     * A heatmap.
     * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-heatmap
     */
    HEATMAP("heatmap"),
    /**
     * An extruded (3D) polygon.
     * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-fill-extrusion
     */
    FILL_EXTRUSION("fill-extrusion"),
    /**
     * Raster map textures such as satellite imagery.
     * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-raster
     */
    RASTER("raster"),
    /**
     * Client-side hillshading visualization based on DEM data. Currently, the implementation only supports Mapbox Terrain RGB tiles
     * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-hillshade
     */
    HILLSHADE("hillshade"),
    /**
     * The background color or pattern of the map.
     * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-background
     */
    BACKGROUND("background");

    private final String apiValue;

    private LayerType(String apiValue) {
        this.apiValue = apiValue;
    }

    public String getApiValue() {
        return apiValue;
    }
}
