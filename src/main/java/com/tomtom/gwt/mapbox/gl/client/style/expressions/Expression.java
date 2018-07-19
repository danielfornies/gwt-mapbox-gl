package com.tomtom.gwt.mapbox.gl.client.style.expressions;

import com.google.gwt.core.client.JsArray;
import com.tomtom.gwt.mapbox.gl.client.util.JSUtils;

/**
 * The value for any layout property, paint property, or filter may be specified as an expression. 
 * An expression defines a formula for computing the value of the property using the operators described below. 
 * The set of expression operators provided by Mapbox GL includes:
 * - Mathematical operators for performing arithmetic and other operations on numeric values 
 * - Logical operators for manipulating boolean values and making conditional decisions 
 * - String operators for manipulating strings 
 * - Data operators, providing access to the properties of source features 
 * - Camera operators, providing access to the parameters defining the current map view 
 * Expressions are represented as JSON arrays. 
 * The first element of an expression array is a string naming the expression operator, e.g. "*"or "case". 
 * Subsequent elements (if any) are the arguments to the expression.
 * Each argument is either a literal value (a string, number, boolean, or null), or another expression array.
 * [expression_name, argument_0, argument_1, ...]
 *
 * @see https://www.mapbox.com/mapbox-gl-js/style-spec#expressions
 */
public class Expression {

    private final JsArray expressionArray;

    /**
     * Basic constructor which accepts an array of objects to be used in the expression array.
     * @param expressionArray 
     */
    public Expression(Object... expressionArray) {
        this.expressionArray = JSUtils.toJsArray(expressionArray);
    }

    /**
     * @return The JSON array which represents this expression.
     */
    public JsArray getExpressionArray() {
        return expressionArray;
    }
}
