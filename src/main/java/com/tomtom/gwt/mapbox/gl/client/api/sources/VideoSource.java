package com.tomtom.gwt.mapbox.gl.client.api.sources;

import com.google.gwt.dom.client.VideoElement;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.MAPBOX_GL_NAMESPACE;
import jsinterop.annotations.JsType;

/**
 * A data source containing video.
 * @see https://www.mapbox.com/mapbox-gl-js/api/#VideoSource
 */
@JsType(isNative = true, namespace = MAPBOX_GL_NAMESPACE)
public interface VideoSource extends ImageSource {
    
    /**
     * @return The HTML  video element.
     * @see https://www.mapbox.com/mapbox-gl-js/api/#VideoSource#getVideo
     */
    VideoElement getVideo();
}
