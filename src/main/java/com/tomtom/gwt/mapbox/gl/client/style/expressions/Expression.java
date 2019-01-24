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
     * @param expressionArray The array composing the expression, as documented in https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions
     * Any object within the expression array which is to be also an array, should be created as a JsArray (@see JSUtils.toJsArray(Object... elements))
     */
    public Expression(Object... expressionArray) {
        this.expressionArray = JSUtils.toJsArray(expressionArray);
    }
    
    /**
     * Returns the expression which returns true if all the inputs are true, false otherwise. 
     * The inputs are evaluated in order, and evaluation is short-circuiting: once an input expression evaluates to false, 
     * the result is false and no further input expressions are evaluated.
     * @param expressions The expressions to combine. Should evaluate to a boolean type, and not null.
     * @return The expression which returns true if all the inputs are true, false otherwise. 
     * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-all
     */
    public static Expression all(Expression... expressions) {
        return build("all", expressions);
    }
    
    /**
     * Returns the expression which returns true if any of the inputs are true, false otherwise. 
     * The inputs are evaluated in order, and evaluation is short-circuiting: once an input expression evaluates to true, 
     * the result is true and no further input expressions are evaluated.
     * @param expressions The expressions to combine. Should evaluate to a boolean type, and not null.
     * @return The expression which returns true if all the inputs are true, false otherwise. 
     * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-any
     */
    public static Expression any(Expression... expressions) {
        return build("any", expressions);
    }
    
    /**
     * Returns true if the input is false, and false if the input is true.
     * @param expression The expression to check.
     * @return Returns true if the input is false, and false if the input is true.
     * @see https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-any
     */
    public static Expression not(Expression expression) {
        return build("!", expression);
    }
    
    public static Expression build(String condition, Expression... expressions) {
        Object[] expressionArray = new Object[expressions.length + 1];
        expressionArray[0] = condition;
        for (int i = 0; i < expressions.length; i++) {
            expressionArray[i+1] = expressions[i].getExpressionArray();
        }
        return new Expression(expressionArray);
    }

    /**
     * @return The JSON array which represents this expression.
     */
    public JsArray getExpressionArray() {
        return expressionArray;
    }
}
