package com.tomtom.gwt.mapbox.gl.client.style.other;

import com.google.gwt.core.client.JsArray;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;

/**
 * A filter selects specific features from a layer.
 * Though filters defined with this syntax will continue to work, we recommend using the more flexible expression syntax instead. 
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#other-filter-deprecated-syntax
 */
public final class Filter {
    
    private final JsArray expressionArray;
    
    public Filter(JsArray expressionArray) {
        this.expressionArray = expressionArray;
    }
    
    public JsArray getExpression() {
        return expressionArray;
    }
    
    public static Filter build(Existential has, String key) {
        return Filter.build(has.apiValue, key);
    }
    
    public static Filter build(Compare compare, String key, Object value) {
        return Filter.build(compare.apiValue, key, value);
    }

    public static Filter build(Membership belongs, String key, Object... values) {
        Object[] expressionArray = new Object[values.length + 2];
        expressionArray[0] = belongs.apiValue;
        expressionArray[1] = key;
        System.arraycopy(values, 0, expressionArray, 2, values.length);
        return Filter.build(expressionArray);
    }
    
    public static Filter build(Combine combine, Filter... filters) {
        final int combinedExpressionLength = filters.length + 1;
        Object[] combinedExpression = new Object[]{combinedExpressionLength};
        combinedExpression[0] = combine.apiValue;
        for (int i = 1; i < combinedExpressionLength; i++) {
            combinedExpression[i] = filters[i-1].getExpression();
        }
        return Filter.build(combinedExpression);
    }
    
    private static Filter build(Object... array) {
        // we rebuild the array as a JS array to ensure no extra Java stuff is in there, which in this case seems to cause "DataCloneError: The object could not be cloned."
        return new Filter(JSUtils.toJsArray(array));
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
