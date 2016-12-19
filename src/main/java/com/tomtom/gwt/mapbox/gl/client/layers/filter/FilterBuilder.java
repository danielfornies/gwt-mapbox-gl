package com.tomtom.gwt.mapbox.gl.client.layers.filter;

import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 *
 * 
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public final class FilterBuilder {
    
    public static enum Existential {
        HAS("has"),
        HAS_NOT("!has");
        
        final String apiValue;
        
        private Existential(String apiValue) {
            this.apiValue = apiValue;
        }
    }
    
    public static enum Compare {
        EQUAL("=="),
        NOT_EQUAL("!="),
        GREATER(">"),
        GREATER_OR_EQUAL(">="),
        LOWER("<"),
        LOWER_OR_EQUAL("<=");
        
        final String apiValue;
        
        private Compare(String apiValue) {
            this.apiValue = apiValue;
        }
    }
    
    public static enum Membership {
        IN("in"),
        NOT_IN("!in");
        
        final String apiValue;
        
        private Membership(String apiValue) {
            this.apiValue = apiValue;
        }
    }
    
    public static enum Combine {
        ALL("all"),
        ANY("any"),
        NONE("none");
        
        final String apiValue;
        
        private Combine(String apiValue) {
            this.apiValue = apiValue;
        }
    }
        
    @JsOverlay
    public static Object[] build(Compare compare, String key, Object value) {
        return new Object[]{compare.apiValue, key, value};
    }

    @JsOverlay
    public static Object[] build(Membership belongs, String key, Object... values) {
        return new Object[]{belongs.apiValue, key, values};
    }
    
    
    // TODO
    
    private FilterBuilder() {
    }
}
