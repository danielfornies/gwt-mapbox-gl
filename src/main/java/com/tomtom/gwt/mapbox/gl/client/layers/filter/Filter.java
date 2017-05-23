package com.tomtom.gwt.mapbox.gl.client.layers.filter;

import com.google.gwt.core.client.JsArray;
import static com.tomtom.gwt.mapbox.gl.client.util.Constants.JS_OBJECT_TYPE;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * A filter selects specific features from a layer.
 * @see https://www.mapbox.com/mapbox-gl-style-spec/#types-filter
 */
@JsType(isNative = true, name = JS_OBJECT_TYPE, namespace = JsPackage.GLOBAL)
public final class Filter {
    
    private Filter() {
    }
    
    @JsProperty
    private native void setExpression(JsArray filterArray);
    
    @JsProperty
    public native JsArray getExpression();
    
    @JsOverlay
    public static Filter build(Existential has, String key) {
        return Filter.build(has.apiValue, key);
    }
    
    @JsOverlay
    public static Filter build(Compare compare, String key, Object value) {
        return Filter.build(compare.apiValue, key, value);
    }

    @JsOverlay
    public static Filter build(Membership belongs, String key, Object... values) {
        Object[] expressionArray = new Object[values.length + 2];
        expressionArray[0] = belongs.apiValue;
        expressionArray[1] = key;
        System.arraycopy(values, 0, expressionArray, 2, values.length);
        return Filter.build(expressionArray);
    }
    
    @JsOverlay
    public static Filter build(Combine combine, Filter... filters) {
        Object[] combinedExpression = new Object[]{filters.length + 1};
        combinedExpression[0] = combine.apiValue;
        for (int i = 1; i < combinedExpression.length; i++) {
            combinedExpression[i] = filters[i-1].getExpression();
        }
        return Filter.build(combinedExpression);
    }
    
    @JsOverlay
    public static Filter build(JsArray expression) {
        Filter filter = new Filter();
        filter.setExpression(expression);
        return filter;
    }
    
    @JsOverlay
    private static Filter build(Object... array) {
        // we rebuild the array as a JS array to ensure no extra Java stuff is in there, which in this case seems to cause "DataCloneError: The object could not be cloned."
        return build(JSUtils.toJsArray(array));
    }
    
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
        
        public final String apiValue;
        
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
}
