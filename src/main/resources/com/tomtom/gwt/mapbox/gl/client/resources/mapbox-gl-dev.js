(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.mapboxgl = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.glMatrix = factory());
}(this, (function () { 'use strict';

function create() {
    var out = new Float32Array(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
}





























function transformMat3(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
}




var vec = create();

function create$1() {
    var out = new Float32Array(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
}













function scale$1(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}







function normalize$1(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    var len = x * x + y * y + z * z + w * w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
    }
    return out;
}



function transformMat4$1(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
}

var vec$1 = create$1();

function create$2() {
    var out = new Float32Array(4);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}










function rotate(out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    return out;
}
function scale$2(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    return out;
}

function create$3() {
    var out = new Float32Array(9);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}















function fromRotation$1(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = -s;
    out[4] = c;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}

function create$4() {
    var out = new Float32Array(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}




function identity$2(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

function invert$2(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
}


function multiply$4(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}
function translate$1(out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;
    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];
        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;
        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
    return out;
}
function scale$4(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}

function rotateX$1(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    if (a !== out) {
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
}

function rotateZ$1(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    if (a !== out) {
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
}














function perspective(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
}

function ortho(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
}

var mapboxBuild = {
    vec3: {
        transformMat3: transformMat3
    },
    vec4: {
        transformMat4: transformMat4$1
    },
    mat2: {
        create: create$2,
        rotate: rotate,
        scale: scale$2
    },
    mat3: {
        create: create$3,
        fromRotation: fromRotation$1
    },
    mat4: {
        create: create$4,
        identity: identity$2,
        translate: translate$1,
        scale: scale$4,
        multiply: multiply$4,
        perspective: perspective,
        rotateX: rotateX$1,
        rotateZ: rotateZ$1,
        invert: invert$2,
        ortho: ortho
    }
};

return mapboxBuild;

})));

},{}],2:[function(require,module,exports){
'use strict';

module.exports = Point;

/**
 * A standalone point geometry with useful accessor, comparison, and
 * modification methods.
 *
 * @class Point
 * @param {Number} x the x-coordinate. this could be longitude or screen
 * pixels, or any other sort of unit.
 * @param {Number} y the y-coordinate. this could be latitude or screen
 * pixels, or any other sort of unit.
 * @example
 * var point = new Point(-77, 38);
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype = {

    /**
     * Clone this point, returning a new point that can be modified
     * without affecting the old one.
     * @return {Point} the clone
     */
    clone: function() { return new Point(this.x, this.y); },

    /**
     * Add this point's x & y coordinates to another point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    add:     function(p) { return this.clone()._add(p); },

    /**
     * Subtract this point's x & y coordinates to from point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    sub:     function(p) { return this.clone()._sub(p); },

    /**
     * Multiply this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    multByPoint:    function(p) { return this.clone()._multByPoint(p); },

    /**
     * Divide this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    divByPoint:     function(p) { return this.clone()._divByPoint(p); },

    /**
     * Multiply this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    mult:    function(k) { return this.clone()._mult(k); },

    /**
     * Divide this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    div:     function(k) { return this.clone()._div(k); },

    /**
     * Rotate this point around the 0, 0 origin by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @return {Point} output point
     */
    rotate:  function(a) { return this.clone()._rotate(a); },

    /**
     * Rotate this point around p point by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @param {Point} p Point to rotate around
     * @return {Point} output point
     */
    rotateAround:  function(a,p) { return this.clone()._rotateAround(a,p); },

    /**
     * Multiply this point by a 4x1 transformation matrix
     * @param {Array<Number>} m transformation matrix
     * @return {Point} output point
     */
    matMult: function(m) { return this.clone()._matMult(m); },

    /**
     * Calculate this point but as a unit vector from 0, 0, meaning
     * that the distance from the resulting point to the 0, 0
     * coordinate will be equal to 1 and the angle from the resulting
     * point to the 0, 0 coordinate will be the same as before.
     * @return {Point} unit vector point
     */
    unit:    function() { return this.clone()._unit(); },

    /**
     * Compute a perpendicular point, where the new y coordinate
     * is the old x coordinate and the new x coordinate is the old y
     * coordinate multiplied by -1
     * @return {Point} perpendicular point
     */
    perp:    function() { return this.clone()._perp(); },

    /**
     * Return a version of this point with the x & y coordinates
     * rounded to integers.
     * @return {Point} rounded point
     */
    round:   function() { return this.clone()._round(); },

    /**
     * Return the magitude of this point: this is the Euclidean
     * distance from the 0, 0 coordinate to this point's x and y
     * coordinates.
     * @return {Number} magnitude
     */
    mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    /**
     * Judge whether this point is equal to another point, returning
     * true or false.
     * @param {Point} other the other point
     * @return {boolean} whether the points are equal
     */
    equals: function(other) {
        return this.x === other.x &&
               this.y === other.y;
    },

    /**
     * Calculate the distance from this point to another point
     * @param {Point} p the other point
     * @return {Number} distance
     */
    dist: function(p) {
        return Math.sqrt(this.distSqr(p));
    },

    /**
     * Calculate the distance from this point to another point,
     * without the square root step. Useful if you're comparing
     * relative distances.
     * @param {Point} p the other point
     * @return {Number} distance
     */
    distSqr: function(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    /**
     * Get the angle from the 0, 0 coordinate to this point, in radians
     * coordinates.
     * @return {Number} angle
     */
    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    /**
     * Get the angle from this point to another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleTo: function(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    /**
     * Get the angle between this point and another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleWith: function(b) {
        return this.angleWithSep(b.x, b.y);
    },

    /*
     * Find the angle of the two vectors, solving the formula for
     * the cross product a x b = |a||b|sin(Î¸) for Î¸.
     * @param {Number} x the x-coordinate
     * @param {Number} y the y-coordinate
     * @return {Number} the angle in radians
     */
    angleWithSep: function(x, y) {
        return Math.atan2(
            this.x * y - this.y * x,
            this.x * x + this.y * y);
    },

    _matMult: function(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _multByPoint: function(p) {
        this.x *= p.x;
        this.y *= p.y;
        return this;
    },

    _divByPoint: function(p) {
        this.x /= p.x;
        this.y /= p.y;
        return this;
    },

    _unit: function() {
        this._div(this.mag());
        return this;
    },

    _perp: function() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _rotateAround: function(angle, p) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = p.x + cos * (this.x - p.x) - sin * (this.y - p.y),
            y = p.y + sin * (this.x - p.x) + cos * (this.y - p.y);
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

/**
 * Construct a point from an array if necessary, otherwise if the input
 * is already a Point, or an unknown type, return it unchanged
 * @param {Array<Number>|Point|*} a any kind of input value
 * @return {Point} constructed point, or passed-through value.
 * @example
 * // this
 * var point = Point.convert([0, 1]);
 * // is equivalent to
 * var point = new Point(0, 1);
 */
Point.convert = function (a) {
    if (a instanceof Point) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point(a[0], a[1]);
    }
    return a;
};

},{}],3:[function(require,module,exports){
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ShelfPack = factory());
}(this, (function () {

/**
 * Create a new ShelfPack bin allocator.
 *
 * Uses the Shelf Best Height Fit algorithm from
 * http://clb.demon.fi/files/RectangleBinPack.pdf
 *
 * @class  ShelfPack
 * @param  {number}  [w=64]  Initial width of the sprite
 * @param  {number}  [h=64]  Initial width of the sprite
 * @param  {Object}  [options]
 * @param  {boolean} [options.autoResize=false]  If `true`, the sprite will automatically grow
 * @example
 * var sprite = new ShelfPack(64, 64, { autoResize: false });
 */
function ShelfPack$1(w, h, options) {
    options = options || {};
    this.w = w || 64;
    this.h = h || 64;
    this.autoResize = !!options.autoResize;
    this.shelves = [];
    this.freebins = [];
    this.stats = {};
    this.bins = {};
    this.maxId = 0;
}


/**
 * Batch pack multiple bins into the sprite.
 *
 * @param   {Object[]} bins       Array of requested bins - each object should have `width`, `height` (or `w`, `h`) properties
 * @param   {number}   bins[].w   Requested bin width
 * @param   {number}   bins[].h   Requested bin height
 * @param   {Object}   [options]
 * @param   {boolean}  [options.inPlace=false] If `true`, the supplied bin objects will be updated inplace with `x` and `y` properties
 * @returns {Bin[]}    Array of allocated Bins - each Bin is an object with `id`, `x`, `y`, `w`, `h` properties
 * @example
 * var bins = [
 *     { id: 1, w: 12, h: 12 },
 *     { id: 2, w: 12, h: 16 },
 *     { id: 3, w: 12, h: 24 }
 * ];
 * var results = sprite.pack(bins, { inPlace: false });
 */
ShelfPack$1.prototype.pack = function(bins, options) {
    bins = [].concat(bins);
    options = options || {};

    var results = [],
        w, h, id, allocation;

    for (var i = 0; i < bins.length; i++) {
        w  = bins[i].w || bins[i].width;
        h  = bins[i].h || bins[i].height;
        id = bins[i].id;

        if (w && h) {
            allocation = this.packOne(w, h, id);
            if (!allocation) {
                continue;
            }
            if (options.inPlace) {
                bins[i].x  = allocation.x;
                bins[i].y  = allocation.y;
                bins[i].id = allocation.id;
            }
            results.push(allocation);
        }
    }

    this.shrink();

    return results;
};


/**
 * Pack a single bin into the sprite.
 *
 * Each bin will have a unique identitifer.
 * If no identifier is supplied in the `id` parameter, one will be created.
 * Note: The supplied `id` is used as an object index, so numeric values are fastest!
 *
 * Bins are automatically refcounted (i.e. a newly packed Bin will have a refcount of 1).
 * When a bin is no longer needed, use the `ShelfPack.unref` function to mark it
 *   as unused.  When a Bin's refcount decrements to 0, the Bin will be marked
 *   as free and its space may be reused by the packing code.
 *
 * @param    {number}         w      Width of the bin to allocate
 * @param    {number}         h      Height of the bin to allocate
 * @param    {number|string}  [id]   Unique identifier for this bin, (if unsupplied, assume it's a new bin and create an id)
 * @returns  {Bin}            Bin object with `id`, `x`, `y`, `w`, `h` properties, or `null` if allocation failed
 * @example
 * var results = sprite.packOne(12, 16, 'a');
 */
ShelfPack$1.prototype.packOne = function(w, h, id) {
    var best = { freebin: -1, shelf: -1, waste: Infinity },
        y = 0,
        bin, shelf, waste, i;

    // if id was supplied, attempt a lookup..
    if (typeof id === 'string' || typeof id === 'number') {
        bin = this.getBin(id);
        if (bin) {              // we packed this bin already
            this.ref(bin);
            return bin;
        }
        if (typeof id === 'number') {
            this.maxId = Math.max(id, this.maxId);
        }
    } else {
        id = ++this.maxId;
    }

    // First try to reuse a free bin..
    for (i = 0; i < this.freebins.length; i++) {
        bin = this.freebins[i];

        // exactly the right height and width, use it..
        if (h === bin.maxh && w === bin.maxw) {
            return this.allocFreebin(i, w, h, id);
        }
        // not enough height or width, skip it..
        if (h > bin.maxh || w > bin.maxw) {
            continue;
        }
        // extra height or width, minimize wasted area..
        if (h <= bin.maxh && w <= bin.maxw) {
            waste = (bin.maxw * bin.maxh) - (w * h);
            if (waste < best.waste) {
                best.waste = waste;
                best.freebin = i;
            }
        }
    }

    // Next find the best shelf..
    for (i = 0; i < this.shelves.length; i++) {
        shelf = this.shelves[i];
        y += shelf.h;

        // not enough width on this shelf, skip it..
        if (w > shelf.free) {
            continue;
        }
        // exactly the right height, pack it..
        if (h === shelf.h) {
            return this.allocShelf(i, w, h, id);
        }
        // not enough height, skip it..
        if (h > shelf.h) {
            continue;
        }
        // extra height, minimize wasted area..
        if (h < shelf.h) {
            waste = (shelf.h - h) * w;
            if (waste < best.waste) {
                best.freebin = -1;
                best.waste = waste;
                best.shelf = i;
            }
        }
    }

    if (best.freebin !== -1) {
        return this.allocFreebin(best.freebin, w, h, id);
    }

    if (best.shelf !== -1) {
        return this.allocShelf(best.shelf, w, h, id);
    }

    // No free bins or shelves.. add shelf..
    if (h <= (this.h - y) && w <= this.w) {
        shelf = new Shelf(y, this.w, h);
        return this.allocShelf(this.shelves.push(shelf) - 1, w, h, id);
    }

    // No room for more shelves..
    // If `autoResize` option is set, grow the sprite as follows:
    //  * double whichever sprite dimension is smaller (`w1` or `h1`)
    //  * if sprite dimensions are equal, grow width before height
    //  * accomodate very large bin requests (big `w` or `h`)
    if (this.autoResize) {
        var h1, h2, w1, w2;

        h1 = h2 = this.h;
        w1 = w2 = this.w;

        if (w1 <= h1 || w > w1) {   // grow width..
            w2 = Math.max(w, w1) * 2;
        }
        if (h1 < w1 || h > h1) {    // grow height..
            h2 = Math.max(h, h1) * 2;
        }

        this.resize(w2, h2);
        return this.packOne(w, h, id);  // retry
    }

    return null;
};


/**
 * Called by packOne() to allocate a bin by reusing an existing freebin
 *
 * @private
 * @param    {number}         index  Index into the `this.freebins` array
 * @param    {number}         w      Width of the bin to allocate
 * @param    {number}         h      Height of the bin to allocate
 * @param    {number|string}  id     Unique identifier for this bin
 * @returns  {Bin}            Bin object with `id`, `x`, `y`, `w`, `h` properties
 * @example
 * var bin = sprite.allocFreebin(0, 12, 16, 'a');
 */
ShelfPack$1.prototype.allocFreebin = function (index, w, h, id) {
    var bin = this.freebins.splice(index, 1)[0];
    bin.id = id;
    bin.w = w;
    bin.h = h;
    bin.refcount = 0;
    this.bins[id] = bin;
    this.ref(bin);
    return bin;
};


/**
 * Called by `packOne() to allocate bin on an existing shelf
 *
 * @private
 * @param    {number}         index  Index into the `this.shelves` array
 * @param    {number}         w      Width of the bin to allocate
 * @param    {number}         h      Height of the bin to allocate
 * @param    {number|string}  id     Unique identifier for this bin
 * @returns  {Bin}            Bin object with `id`, `x`, `y`, `w`, `h` properties
 * @example
 * var results = sprite.allocShelf(0, 12, 16, 'a');
 */
ShelfPack$1.prototype.allocShelf = function(index, w, h, id) {
    var shelf = this.shelves[index];
    var bin = shelf.alloc(w, h, id);
    this.bins[id] = bin;
    this.ref(bin);
    return bin;
};


/**
 * Shrink the width/height of the sprite to the bare minimum.
 * Since shelf-pack doubles first width, then height when running out of shelf space
 * this can result in fairly large unused space both in width and height if that happens
 * towards the end of bin packing.
 */
ShelfPack$1.prototype.shrink = function() {
    if (this.shelves.length > 0) {
        var w2 = 0;
        var h2 = 0;

        for (var j = 0; j < this.shelves.length; j++) {
            var shelf = this.shelves[j];
            h2 += shelf.h;
            w2 = Math.max(shelf.w - shelf.free, w2);
        }

        this.resize(w2, h2);
    }
};


/**
 * Return a packed bin given its id, or undefined if the id is not found
 *
 * @param    {number|string}  id  Unique identifier for this bin,
 * @returns  {Bin}            The requested bin, or undefined if not yet packed
 * @example
 * var b = sprite.getBin('a');
 */
ShelfPack$1.prototype.getBin = function(id) {
    return this.bins[id];
};


/**
 * Increment the ref count of a bin and update statistics.
 *
 * @param    {Bin}     bin  Bin instance
 * @returns  {number}  New refcount of the bin
 * @example
 * var bin = sprite.getBin('a');
 * sprite.ref(bin);
 */
ShelfPack$1.prototype.ref = function(bin) {
    if (++bin.refcount === 1) {   // a new Bin.. record height in stats historgram..
        var h = bin.h;
        this.stats[h] = (this.stats[h] | 0) + 1;
    }

    return bin.refcount;
};


/**
 * Decrement the ref count of a bin and update statistics.
 * The bin will be automatically marked as free space once the refcount reaches 0.
 *
 * @param    {Bin}     bin  Bin instance
 * @returns  {number}  New refcount of the bin
 * @example
 * var bin = sprite.getBin('a');
 * sprite.unref(bin);
 */
ShelfPack$1.prototype.unref = function(bin) {
    if (bin.refcount === 0) {
        return 0;
    }

    if (--bin.refcount === 0) {
        this.stats[bin.h]--;
        delete this.bins[bin.id];
        this.freebins.push(bin);
    }

    return bin.refcount;
};


/**
 * Clear the sprite.  Resets everything and resets statistics.
 *
 * @example
 * sprite.clear();
 */
ShelfPack$1.prototype.clear = function() {
    this.shelves = [];
    this.freebins = [];
    this.stats = {};
    this.bins = {};
    this.maxId = 0;
};


/**
 * Resize the sprite.
 *
 * @param   {number}  w  Requested new sprite width
 * @param   {number}  h  Requested new sprite height
 * @returns {boolean} `true` if resize succeeded, `false` if failed
 * @example
 * sprite.resize(256, 256);
 */
ShelfPack$1.prototype.resize = function(w, h) {
    this.w = w;
    this.h = h;
    for (var i = 0; i < this.shelves.length; i++) {
        this.shelves[i].resize(w);
    }
    return true;
};


/**
 * Create a new Shelf.
 *
 * @private
 * @class  Shelf
 * @param  {number}  y   Top coordinate of the new shelf
 * @param  {number}  w   Width of the new shelf
 * @param  {number}  h   Height of the new shelf
 * @example
 * var shelf = new Shelf(64, 512, 24);
 */
function Shelf(y, w, h) {
    this.x = 0;
    this.y = y;
    this.w = this.free = w;
    this.h = h;
}


/**
 * Allocate a single bin into the shelf.
 *
 * @private
 * @param   {number}         w   Width of the bin to allocate
 * @param   {number}         h   Height of the bin to allocate
 * @param   {number|string}  id  Unique id of the bin to allocate
 * @returns {Bin}            Bin object with `id`, `x`, `y`, `w`, `h` properties, or `null` if allocation failed
 * @example
 * shelf.alloc(12, 16, 'a');
 */
Shelf.prototype.alloc = function(w, h, id) {
    if (w > this.free || h > this.h) {
        return null;
    }
    var x = this.x;
    this.x += w;
    this.free -= w;
    return new Bin(id, x, this.y, w, h, w, this.h);
};


/**
 * Resize the shelf.
 *
 * @private
 * @param   {number}  w  Requested new width of the shelf
 * @returns {boolean}    true
 * @example
 * shelf.resize(512);
 */
Shelf.prototype.resize = function(w) {
    this.free += (w - this.w);
    this.w = w;
    return true;
};


/**
 * Create a new Bin object.
 *
 * @class  Bin
 * @param  {number|string}  id      Unique id of the bin
 * @param  {number}         x       Left coordinate of the bin
 * @param  {number}         y       Top coordinate of the bin
 * @param  {number}         w       Width of the bin
 * @param  {number}         h       Height of the bin
 * @param  {number}         [maxw]  Max width of the bin (defaults to `w` if not provided)
 * @param  {number}         [maxh]  Max height of the bin (defaults to `h` if not provided)
 * @example
 * var bin = new Bin('a', 0, 0, 12, 16);
 */
function Bin(id, x, y, w, h, maxw, maxh) {
    this.id = id;
    this.x  = x;
    this.y  = y;
    this.w  = w;
    this.h  = h;
    this.maxw = maxw || w;
    this.maxh = maxh || h;
    this.refcount = 0;
}

return ShelfPack$1;

})));

},{}],4:[function(require,module,exports){
'use strict';

module.exports = TinySDF;

var INF = 1e20;

function TinySDF(fontSize, buffer, radius, cutoff, fontFamily, fontWeight) {
    this.fontSize = fontSize || 24;
    this.buffer = buffer === undefined ? 3 : buffer;
    this.cutoff = cutoff || 0.25;
    this.fontFamily = fontFamily || 'sans-serif';
    this.fontWeight = fontWeight || 'normal';
    this.radius = radius || 8;
    var size = this.size = this.fontSize + this.buffer * 2;

    this.canvas = document.createElement('canvas');
    this.canvas.width = this.canvas.height = size;

    this.ctx = this.canvas.getContext('2d');
    this.ctx.font = this.fontWeight + ' ' + this.fontSize + 'px ' + this.fontFamily;
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = 'black';

    // temporary arrays for the distance transform
    this.gridOuter = new Float64Array(size * size);
    this.gridInner = new Float64Array(size * size);
    this.f = new Float64Array(size);
    this.d = new Float64Array(size);
    this.z = new Float64Array(size + 1);
    this.v = new Int16Array(size);

    // hack around https://bugzilla.mozilla.org/show_bug.cgi?id=737852
    this.middle = Math.round((size / 2) * (navigator.userAgent.indexOf('Gecko/') >= 0 ? 1.2 : 1));
}

TinySDF.prototype.draw = function (char) {
    this.ctx.clearRect(0, 0, this.size, this.size);
    this.ctx.fillText(char, this.buffer, this.middle);

    var imgData = this.ctx.getImageData(0, 0, this.size, this.size);
    var alphaChannel = new Uint8ClampedArray(this.size * this.size);

    for (var i = 0; i < this.size * this.size; i++) {
        var a = imgData.data[i * 4 + 3] / 255; // alpha value
        this.gridOuter[i] = a === 1 ? 0 : a === 0 ? INF : Math.pow(Math.max(0, 0.5 - a), 2);
        this.gridInner[i] = a === 1 ? INF : a === 0 ? 0 : Math.pow(Math.max(0, a - 0.5), 2);
    }

    edt(this.gridOuter, this.size, this.size, this.f, this.d, this.v, this.z);
    edt(this.gridInner, this.size, this.size, this.f, this.d, this.v, this.z);

    for (i = 0; i < this.size * this.size; i++) {
        var d = this.gridOuter[i] - this.gridInner[i];
        alphaChannel[i] = Math.max(0, Math.min(255, Math.round(255 - 255 * (d / this.radius + this.cutoff))));
    }

    return alphaChannel;
};

// 2D Euclidean distance transform by Felzenszwalb & Huttenlocher https://cs.brown.edu/~pff/dt/
function edt(data, width, height, f, d, v, z) {
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            f[y] = data[y * width + x];
        }
        edt1d(f, d, v, z, height);
        for (y = 0; y < height; y++) {
            data[y * width + x] = d[y];
        }
    }
    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            f[x] = data[y * width + x];
        }
        edt1d(f, d, v, z, width);
        for (x = 0; x < width; x++) {
            data[y * width + x] = Math.sqrt(d[x]);
        }
    }
}

// 1D squared distance transform
function edt1d(f, d, v, z, n) {
    v[0] = 0;
    z[0] = -INF;
    z[1] = +INF;

    for (var q = 1, k = 0; q < n; q++) {
        var s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
        while (s <= z[k]) {
            k--;
            s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
        }
        k++;
        v[k] = q;
        z[k] = s;
        z[k + 1] = +INF;
    }

    for (q = 0, k = 0; q < n; q++) {
        while (z[k + 1] < q) k++;
        d[q] = (q - v[k]) * (q - v[k]) + f[v[k]];
    }
}

},{}],5:[function(require,module,exports){
/*
 * Copyright (C) 2008 Apple Inc. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Ported from Webkit
 * http://svn.webkit.org/repository/webkit/trunk/Source/WebCore/platform/graphics/UnitBezier.h
 */

module.exports = UnitBezier;

function UnitBezier(p1x, p1y, p2x, p2y) {
    // Calculate the polynomial coefficients, implicit first and last control points are (0,0) and (1,1).
    this.cx = 3.0 * p1x;
    this.bx = 3.0 * (p2x - p1x) - this.cx;
    this.ax = 1.0 - this.cx - this.bx;

    this.cy = 3.0 * p1y;
    this.by = 3.0 * (p2y - p1y) - this.cy;
    this.ay = 1.0 - this.cy - this.by;

    this.p1x = p1x;
    this.p1y = p2y;
    this.p2x = p2x;
    this.p2y = p2y;
}

UnitBezier.prototype.sampleCurveX = function(t) {
    // `ax t^3 + bx t^2 + cx t' expanded using Horner's rule.
    return ((this.ax * t + this.bx) * t + this.cx) * t;
};

UnitBezier.prototype.sampleCurveY = function(t) {
    return ((this.ay * t + this.by) * t + this.cy) * t;
};

UnitBezier.prototype.sampleCurveDerivativeX = function(t) {
    return (3.0 * this.ax * t + 2.0 * this.bx) * t + this.cx;
};

UnitBezier.prototype.solveCurveX = function(x, epsilon) {
    if (typeof epsilon === 'undefined') epsilon = 1e-6;

    var t0, t1, t2, x2, i;

    // First try a few iterations of Newton's method -- normally very fast.
    for (t2 = x, i = 0; i < 8; i++) {

        x2 = this.sampleCurveX(t2) - x;
        if (Math.abs(x2) < epsilon) return t2;

        var d2 = this.sampleCurveDerivativeX(t2);
        if (Math.abs(d2) < 1e-6) break;

        t2 = t2 - x2 / d2;
    }

    // Fall back to the bisection method for reliability.
    t0 = 0.0;
    t1 = 1.0;
    t2 = x;

    if (t2 < t0) return t0;
    if (t2 > t1) return t1;

    while (t0 < t1) {

        x2 = this.sampleCurveX(t2);
        if (Math.abs(x2 - x) < epsilon) return t2;

        if (x > x2) {
            t0 = t2;
        } else {
            t1 = t2;
        }

        t2 = (t1 - t0) * 0.5 + t0;
    }

    // Failure.
    return t2;
};

UnitBezier.prototype.solve = function(x, epsilon) {
    return this.sampleCurveY(this.solveCurveX(x, epsilon));
};

},{}],6:[function(require,module,exports){
module.exports.VectorTile = require('./lib/vectortile.js');
module.exports.VectorTileFeature = require('./lib/vectortilefeature.js');
module.exports.VectorTileLayer = require('./lib/vectortilelayer.js');

},{"./lib/vectortile.js":7,"./lib/vectortilefeature.js":8,"./lib/vectortilelayer.js":9}],7:[function(require,module,exports){
'use strict';

var VectorTileLayer = require('./vectortilelayer');

module.exports = VectorTile;

function VectorTile(pbf, end) {
    this.layers = pbf.readFields(readTile, {}, end);
}

function readTile(tag, layers, pbf) {
    if (tag === 3) {
        var layer = new VectorTileLayer(pbf, pbf.readVarint() + pbf.pos);
        if (layer.length) layers[layer.name] = layer;
    }
}


},{"./vectortilelayer":9}],8:[function(require,module,exports){
'use strict';

var Point = require('@mapbox/point-geometry');

module.exports = VectorTileFeature;

function VectorTileFeature(pbf, end, extent, keys, values) {
    // Public
    this.properties = {};
    this.extent = extent;
    this.type = 0;

    // Private
    this._pbf = pbf;
    this._geometry = -1;
    this._keys = keys;
    this._values = values;

    pbf.readFields(readFeature, this, end);
}

function readFeature(tag, feature, pbf) {
    if (tag == 1) feature.id = pbf.readVarint();
    else if (tag == 2) readTag(pbf, feature);
    else if (tag == 3) feature.type = pbf.readVarint();
    else if (tag == 4) feature._geometry = pbf.pos;
}

function readTag(pbf, feature) {
    var end = pbf.readVarint() + pbf.pos;

    while (pbf.pos < end) {
        var key = feature._keys[pbf.readVarint()],
            value = feature._values[pbf.readVarint()];
        feature.properties[key] = value;
    }
}

VectorTileFeature.types = ['Unknown', 'Point', 'LineString', 'Polygon'];

VectorTileFeature.prototype.loadGeometry = function() {
    var pbf = this._pbf;
    pbf.pos = this._geometry;

    var end = pbf.readVarint() + pbf.pos,
        cmd = 1,
        length = 0,
        x = 0,
        y = 0,
        lines = [],
        line;

    while (pbf.pos < end) {
        if (!length) {
            var cmdLen = pbf.readVarint();
            cmd = cmdLen & 0x7;
            length = cmdLen >> 3;
        }

        length--;

        if (cmd === 1 || cmd === 2) {
            x += pbf.readSVarint();
            y += pbf.readSVarint();

            if (cmd === 1) { // moveTo
                if (line) lines.push(line);
                line = [];
            }

            line.push(new Point(x, y));

        } else if (cmd === 7) {

            // Workaround for https://github.com/mapbox/mapnik-vector-tile/issues/90
            if (line) {
                line.push(line[0].clone()); // closePolygon
            }

        } else {
            throw new Error('unknown command ' + cmd);
        }
    }

    if (line) lines.push(line);

    return lines;
};

VectorTileFeature.prototype.bbox = function() {
    var pbf = this._pbf;
    pbf.pos = this._geometry;

    var end = pbf.readVarint() + pbf.pos,
        cmd = 1,
        length = 0,
        x = 0,
        y = 0,
        x1 = Infinity,
        x2 = -Infinity,
        y1 = Infinity,
        y2 = -Infinity;

    while (pbf.pos < end) {
        if (!length) {
            var cmdLen = pbf.readVarint();
            cmd = cmdLen & 0x7;
            length = cmdLen >> 3;
        }

        length--;

        if (cmd === 1 || cmd === 2) {
            x += pbf.readSVarint();
            y += pbf.readSVarint();
            if (x < x1) x1 = x;
            if (x > x2) x2 = x;
            if (y < y1) y1 = y;
            if (y > y2) y2 = y;

        } else if (cmd !== 7) {
            throw new Error('unknown command ' + cmd);
        }
    }

    return [x1, y1, x2, y2];
};

VectorTileFeature.prototype.toGeoJSON = function(x, y, z) {
    var size = this.extent * Math.pow(2, z),
        x0 = this.extent * x,
        y0 = this.extent * y,
        coords = this.loadGeometry(),
        type = VectorTileFeature.types[this.type],
        i, j;

    function project(line) {
        for (var j = 0; j < line.length; j++) {
            var p = line[j], y2 = 180 - (p.y + y0) * 360 / size;
            line[j] = [
                (p.x + x0) * 360 / size - 180,
                360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90
            ];
        }
    }

    switch (this.type) {
    case 1:
        var points = [];
        for (i = 0; i < coords.length; i++) {
            points[i] = coords[i][0];
        }
        coords = points;
        project(coords);
        break;

    case 2:
        for (i = 0; i < coords.length; i++) {
            project(coords[i]);
        }
        break;

    case 3:
        coords = classifyRings(coords);
        for (i = 0; i < coords.length; i++) {
            for (j = 0; j < coords[i].length; j++) {
                project(coords[i][j]);
            }
        }
        break;
    }

    if (coords.length === 1) {
        coords = coords[0];
    } else {
        type = 'Multi' + type;
    }

    var result = {
        type: "Feature",
        geometry: {
            type: type,
            coordinates: coords
        },
        properties: this.properties
    };

    if ('id' in this) {
        result.id = this.id;
    }

    return result;
};

// classifies an array of rings into polygons with outer rings and holes

function classifyRings(rings) {
    var len = rings.length;

    if (len <= 1) return [rings];

    var polygons = [],
        polygon,
        ccw;

    for (var i = 0; i < len; i++) {
        var area = signedArea(rings[i]);
        if (area === 0) continue;

        if (ccw === undefined) ccw = area < 0;

        if (ccw === area < 0) {
            if (polygon) polygons.push(polygon);
            polygon = [rings[i]];

        } else {
            polygon.push(rings[i]);
        }
    }
    if (polygon) polygons.push(polygon);

    return polygons;
}

function signedArea(ring) {
    var sum = 0;
    for (var i = 0, len = ring.length, j = len - 1, p1, p2; i < len; j = i++) {
        p1 = ring[i];
        p2 = ring[j];
        sum += (p2.x - p1.x) * (p1.y + p2.y);
    }
    return sum;
}

},{"@mapbox/point-geometry":2}],9:[function(require,module,exports){
'use strict';

var VectorTileFeature = require('./vectortilefeature.js');

module.exports = VectorTileLayer;

function VectorTileLayer(pbf, end) {
    // Public
    this.version = 1;
    this.name = null;
    this.extent = 4096;
    this.length = 0;

    // Private
    this._pbf = pbf;
    this._keys = [];
    this._values = [];
    this._features = [];

    pbf.readFields(readLayer, this, end);

    this.length = this._features.length;
}

function readLayer(tag, layer, pbf) {
    if (tag === 15) layer.version = pbf.readVarint();
    else if (tag === 1) layer.name = pbf.readString();
    else if (tag === 5) layer.extent = pbf.readVarint();
    else if (tag === 2) layer._features.push(pbf.pos);
    else if (tag === 3) layer._keys.push(pbf.readString());
    else if (tag === 4) layer._values.push(readValueMessage(pbf));
}

function readValueMessage(pbf) {
    var value = null,
        end = pbf.readVarint() + pbf.pos;

    while (pbf.pos < end) {
        var tag = pbf.readVarint() >> 3;

        value = tag === 1 ? pbf.readString() :
            tag === 2 ? pbf.readFloat() :
            tag === 3 ? pbf.readDouble() :
            tag === 4 ? pbf.readVarint64() :
            tag === 5 ? pbf.readVarint() :
            tag === 6 ? pbf.readSVarint() :
            tag === 7 ? pbf.readBoolean() : null;
    }

    return value;
}

// return feature `i` from this layer as a `VectorTileFeature`
VectorTileLayer.prototype.feature = function(i) {
    if (i < 0 || i >= this._features.length) throw new Error('feature index out of bounds');

    this._pbf.pos = this._features[i];

    var end = this._pbf.readVarint() + this._pbf.pos;
    return new VectorTileFeature(this._pbf, end, this.extent, this._keys, this._values);
};

},{"./vectortilefeature.js":8}],10:[function(require,module,exports){
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.WhooTS = global.WhooTS || {})));
}(this, (function (exports) {

/**
 * getURL
 *
 * @param    {String}  baseUrl  Base url of the WMS server
 * @param    {String}  layer    Layer name
 * @param    {Number}  x        Tile coordinate x
 * @param    {Number}  y        Tile coordinate y
 * @param    {Number}  z        Tile zoom
 * @param    {Object}  [options]
 * @param    {String}  [options.format='image/png']
 * @param    {String}  [options.service='WMS']
 * @param    {String}  [options.version='1.1.1']
 * @param    {String}  [options.request='GetMap']
 * @param    {String}  [options.srs='EPSG:3857']
 * @param    {Number}  [options.width='256']
 * @param    {Number}  [options.height='256']
 * @returns  {String}  url
 * @example
 * var baseUrl = 'http://geodata.state.nj.us/imagerywms/Natural2015';
 * var layer = 'Natural2015';
 * var url = whoots.getURL(baseUrl, layer, 154308, 197167, 19);
 */
function getURL(baseUrl, layer, x, y, z, options) {
    options = options || {};

    var url = baseUrl + '?' + [
        'bbox='    + getTileBBox(x, y, z),
        'format='  + (options.format || 'image/png'),
        'service=' + (options.service || 'WMS'),
        'version=' + (options.version || '1.1.1'),
        'request=' + (options.request || 'GetMap'),
        'srs='     + (options.srs || 'EPSG:3857'),
        'width='   + (options.width || 256),
        'height='  + (options.height || 256),
        'layers='  + layer
    ].join('&');

    return url;
}


/**
 * getTileBBox
 *
 * @param    {Number}  x  Tile coordinate x
 * @param    {Number}  y  Tile coordinate y
 * @param    {Number}  z  Tile zoom
 * @returns  {String}  String of the bounding box
 */
function getTileBBox(x, y, z) {
    // for Google/OSM tile scheme we need to alter the y
    y = (Math.pow(2, z) - y - 1);

    var min = getMercCoords(x * 256, y * 256, z),
        max = getMercCoords((x + 1) * 256, (y + 1) * 256, z);

    return min[0] + ',' + min[1] + ',' + max[0] + ',' + max[1];
}


/**
 * getMercCoords
 *
 * @param    {Number}  x  Pixel coordinate x
 * @param    {Number}  y  Pixel coordinate y
 * @param    {Number}  z  Tile zoom
 * @returns  {Array}   [x, y]
 */
function getMercCoords(x, y, z) {
    var resolution = (2 * Math.PI * 6378137 / 256) / Math.pow(2, z),
        merc_x = (x * resolution - 2 * Math.PI  * 6378137 / 2.0),
        merc_y = (y * resolution - 2 * Math.PI  * 6378137 / 2.0);

    return [merc_x, merc_y];
}

exports.getURL = getURL;
exports.getTileBBox = getTileBBox;
exports.getMercCoords = getMercCoords;

Object.defineProperty(exports, '__esModule', { value: true });

})));

},{}],11:[function(require,module,exports){
(function (global){
'use strict';

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = require('util/');
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"util/":46}],12:[function(require,module,exports){
// (c) Dean McNamee <dean@gmail.com>, 2012.
//
// https://github.com/deanm/css-color-parser-js
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

// http://www.w3.org/TR/css3-color/
var kCSSColorTable = {
  "transparent": [0,0,0,0], "aliceblue": [240,248,255,1],
  "antiquewhite": [250,235,215,1], "aqua": [0,255,255,1],
  "aquamarine": [127,255,212,1], "azure": [240,255,255,1],
  "beige": [245,245,220,1], "bisque": [255,228,196,1],
  "black": [0,0,0,1], "blanchedalmond": [255,235,205,1],
  "blue": [0,0,255,1], "blueviolet": [138,43,226,1],
  "brown": [165,42,42,1], "burlywood": [222,184,135,1],
  "cadetblue": [95,158,160,1], "chartreuse": [127,255,0,1],
  "chocolate": [210,105,30,1], "coral": [255,127,80,1],
  "cornflowerblue": [100,149,237,1], "cornsilk": [255,248,220,1],
  "crimson": [220,20,60,1], "cyan": [0,255,255,1],
  "darkblue": [0,0,139,1], "darkcyan": [0,139,139,1],
  "darkgoldenrod": [184,134,11,1], "darkgray": [169,169,169,1],
  "darkgreen": [0,100,0,1], "darkgrey": [169,169,169,1],
  "darkkhaki": [189,183,107,1], "darkmagenta": [139,0,139,1],
  "darkolivegreen": [85,107,47,1], "darkorange": [255,140,0,1],
  "darkorchid": [153,50,204,1], "darkred": [139,0,0,1],
  "darksalmon": [233,150,122,1], "darkseagreen": [143,188,143,1],
  "darkslateblue": [72,61,139,1], "darkslategray": [47,79,79,1],
  "darkslategrey": [47,79,79,1], "darkturquoise": [0,206,209,1],
  "darkviolet": [148,0,211,1], "deeppink": [255,20,147,1],
  "deepskyblue": [0,191,255,1], "dimgray": [105,105,105,1],
  "dimgrey": [105,105,105,1], "dodgerblue": [30,144,255,1],
  "firebrick": [178,34,34,1], "floralwhite": [255,250,240,1],
  "forestgreen": [34,139,34,1], "fuchsia": [255,0,255,1],
  "gainsboro": [220,220,220,1], "ghostwhite": [248,248,255,1],
  "gold": [255,215,0,1], "goldenrod": [218,165,32,1],
  "gray": [128,128,128,1], "green": [0,128,0,1],
  "greenyellow": [173,255,47,1], "grey": [128,128,128,1],
  "honeydew": [240,255,240,1], "hotpink": [255,105,180,1],
  "indianred": [205,92,92,1], "indigo": [75,0,130,1],
  "ivory": [255,255,240,1], "khaki": [240,230,140,1],
  "lavender": [230,230,250,1], "lavenderblush": [255,240,245,1],
  "lawngreen": [124,252,0,1], "lemonchiffon": [255,250,205,1],
  "lightblue": [173,216,230,1], "lightcoral": [240,128,128,1],
  "lightcyan": [224,255,255,1], "lightgoldenrodyellow": [250,250,210,1],
  "lightgray": [211,211,211,1], "lightgreen": [144,238,144,1],
  "lightgrey": [211,211,211,1], "lightpink": [255,182,193,1],
  "lightsalmon": [255,160,122,1], "lightseagreen": [32,178,170,1],
  "lightskyblue": [135,206,250,1], "lightslategray": [119,136,153,1],
  "lightslategrey": [119,136,153,1], "lightsteelblue": [176,196,222,1],
  "lightyellow": [255,255,224,1], "lime": [0,255,0,1],
  "limegreen": [50,205,50,1], "linen": [250,240,230,1],
  "magenta": [255,0,255,1], "maroon": [128,0,0,1],
  "mediumaquamarine": [102,205,170,1], "mediumblue": [0,0,205,1],
  "mediumorchid": [186,85,211,1], "mediumpurple": [147,112,219,1],
  "mediumseagreen": [60,179,113,1], "mediumslateblue": [123,104,238,1],
  "mediumspringgreen": [0,250,154,1], "mediumturquoise": [72,209,204,1],
  "mediumvioletred": [199,21,133,1], "midnightblue": [25,25,112,1],
  "mintcream": [245,255,250,1], "mistyrose": [255,228,225,1],
  "moccasin": [255,228,181,1], "navajowhite": [255,222,173,1],
  "navy": [0,0,128,1], "oldlace": [253,245,230,1],
  "olive": [128,128,0,1], "olivedrab": [107,142,35,1],
  "orange": [255,165,0,1], "orangered": [255,69,0,1],
  "orchid": [218,112,214,1], "palegoldenrod": [238,232,170,1],
  "palegreen": [152,251,152,1], "paleturquoise": [175,238,238,1],
  "palevioletred": [219,112,147,1], "papayawhip": [255,239,213,1],
  "peachpuff": [255,218,185,1], "peru": [205,133,63,1],
  "pink": [255,192,203,1], "plum": [221,160,221,1],
  "powderblue": [176,224,230,1], "purple": [128,0,128,1],
  "rebeccapurple": [102,51,153,1],
  "red": [255,0,0,1], "rosybrown": [188,143,143,1],
  "royalblue": [65,105,225,1], "saddlebrown": [139,69,19,1],
  "salmon": [250,128,114,1], "sandybrown": [244,164,96,1],
  "seagreen": [46,139,87,1], "seashell": [255,245,238,1],
  "sienna": [160,82,45,1], "silver": [192,192,192,1],
  "skyblue": [135,206,235,1], "slateblue": [106,90,205,1],
  "slategray": [112,128,144,1], "slategrey": [112,128,144,1],
  "snow": [255,250,250,1], "springgreen": [0,255,127,1],
  "steelblue": [70,130,180,1], "tan": [210,180,140,1],
  "teal": [0,128,128,1], "thistle": [216,191,216,1],
  "tomato": [255,99,71,1], "turquoise": [64,224,208,1],
  "violet": [238,130,238,1], "wheat": [245,222,179,1],
  "white": [255,255,255,1], "whitesmoke": [245,245,245,1],
  "yellow": [255,255,0,1], "yellowgreen": [154,205,50,1]}

function clamp_css_byte(i) {  // Clamp to integer 0 .. 255.
  i = Math.round(i);  // Seems to be what Chrome does (vs truncation).
  return i < 0 ? 0 : i > 255 ? 255 : i;
}

function clamp_css_float(f) {  // Clamp to float 0.0 .. 1.0.
  return f < 0 ? 0 : f > 1 ? 1 : f;
}

function parse_css_int(str) {  // int or percentage.
  if (str[str.length - 1] === '%')
    return clamp_css_byte(parseFloat(str) / 100 * 255);
  return clamp_css_byte(parseInt(str));
}

function parse_css_float(str) {  // float or percentage.
  if (str[str.length - 1] === '%')
    return clamp_css_float(parseFloat(str) / 100);
  return clamp_css_float(parseFloat(str));
}

function css_hue_to_rgb(m1, m2, h) {
  if (h < 0) h += 1;
  else if (h > 1) h -= 1;

  if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
  if (h * 2 < 1) return m2;
  if (h * 3 < 2) return m1 + (m2 - m1) * (2/3 - h) * 6;
  return m1;
}

function parseCSSColor(css_str) {
  // Remove all whitespace, not compliant, but should just be more accepting.
  var str = css_str.replace(/ /g, '').toLowerCase();

  // Color keywords (and transparent) lookup.
  if (str in kCSSColorTable) return kCSSColorTable[str].slice();  // dup.

  // #abc and #abc123 syntax.
  if (str[0] === '#') {
    if (str.length === 4) {
      var iv = parseInt(str.substr(1), 16);  // TODO(deanm): Stricter parsing.
      if (!(iv >= 0 && iv <= 0xfff)) return null;  // Covers NaN.
      return [((iv & 0xf00) >> 4) | ((iv & 0xf00) >> 8),
              (iv & 0xf0) | ((iv & 0xf0) >> 4),
              (iv & 0xf) | ((iv & 0xf) << 4),
              1];
    } else if (str.length === 7) {
      var iv = parseInt(str.substr(1), 16);  // TODO(deanm): Stricter parsing.
      if (!(iv >= 0 && iv <= 0xffffff)) return null;  // Covers NaN.
      return [(iv & 0xff0000) >> 16,
              (iv & 0xff00) >> 8,
              iv & 0xff,
              1];
    }

    return null;
  }

  var op = str.indexOf('('), ep = str.indexOf(')');
  if (op !== -1 && ep + 1 === str.length) {
    var fname = str.substr(0, op);
    var params = str.substr(op+1, ep-(op+1)).split(',');
    var alpha = 1;  // To allow case fallthrough.
    switch (fname) {
      case 'rgba':
        if (params.length !== 4) return null;
        alpha = parse_css_float(params.pop());
        // Fall through.
      case 'rgb':
        if (params.length !== 3) return null;
        return [parse_css_int(params[0]),
                parse_css_int(params[1]),
                parse_css_int(params[2]),
                alpha];
      case 'hsla':
        if (params.length !== 4) return null;
        alpha = parse_css_float(params.pop());
        // Fall through.
      case 'hsl':
        if (params.length !== 3) return null;
        var h = (((parseFloat(params[0]) % 360) + 360) % 360) / 360;  // 0 .. 1
        // NOTE(deanm): According to the CSS spec s/l should only be
        // percentages, but we don't bother and let float or percentage.
        var s = parse_css_float(params[1]);
        var l = parse_css_float(params[2]);
        var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var m1 = l * 2 - m2;
        return [clamp_css_byte(css_hue_to_rgb(m1, m2, h+1/3) * 255),
                clamp_css_byte(css_hue_to_rgb(m1, m2, h) * 255),
                clamp_css_byte(css_hue_to_rgb(m1, m2, h-1/3) * 255),
                alpha];
      default:
        return null;
    }
  }

  return null;
}

try { exports.parseCSSColor = parseCSSColor } catch(e) { }

},{}],13:[function(require,module,exports){
'use strict';

module.exports = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode) return triangles;

    var minX, minY, maxX, maxY, x, y, size;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and size are later used to transform coords into integers for z-order calculation
        size = Math.max(maxX - minX, maxY - minY);
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, size);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) return null;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, size, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && size) indexCurve(ear, minX, minY, size);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (size ? isEarHashed(ear, minX, minY, size) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            // skipping the next vertice leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, size, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(ear, triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, size, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, size);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, size) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, size),
        maxZ = zOrder(maxTX, maxTY, minX, minY, size);

    // first look for points inside the triangle in increasing z-order
    var p = ear.nextZ;

    while (p && p.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.nextZ;
    }

    // then look for points in decreasing z-order
    p = ear.prevZ;

    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return p;
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, size) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, size);
                earcutLinked(c, triangles, dim, minX, minY, size);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
    }
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m.prev; // hole touches outer segment; pick lower endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m.next;

    while (p !== stop) {
        if (hx >= p.x && p.x >= mx &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if ((tan < tanMin || (tan === tanMin && p.x > m.x)) && locallyInside(p, hole)) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    }

    return m;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, size) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, size);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }

            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize === 0) {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                } else if (qSize === 0 || !q) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else if (p.z <= q.z) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and size of the data bounding box
function zOrder(x, y, minX, minY, size) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) / size;
    y = 32767 * (y - minY) / size;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) &&
           locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    if ((equals(p1, q1) && equals(p2, q2)) ||
        (equals(p1, q2) && equals(p2, q1))) return true;
    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 &&
           area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertice index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertice nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};

},{}],14:[function(require,module,exports){
var wgs84 = require('wgs84');

module.exports.geometry = geometry;
module.exports.ring = ringArea;

function geometry(_) {
    if (_.type === 'Polygon') return polygonArea(_.coordinates);
    else if (_.type === 'MultiPolygon') {
        var area = 0;
        for (var i = 0; i < _.coordinates.length; i++) {
            area += polygonArea(_.coordinates[i]);
        }
        return area;
    } else {
        return null;
    }
}

function polygonArea(coords) {
    var area = 0;
    if (coords && coords.length > 0) {
        area += Math.abs(ringArea(coords[0]));
        for (var i = 1; i < coords.length; i++) {
            area -= Math.abs(ringArea(coords[i]));
        }
    }
    return area;
}

/**
 * Calculate the approximate area of the polygon were it projected onto
 *     the earth.  Note that this area will be positive if ring is oriented
 *     clockwise, otherwise it will be negative.
 *
 * Reference:
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 *     Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 *     Laboratory, Pasadena, CA, June 2007 http://trs-new.jpl.nasa.gov/dspace/handle/2014/40409
 *
 * Returns:
 * {float} The approximate signed geodesic area of the polygon in square
 *     meters.
 */

function ringArea(coords) {
    var area = 0;

    if (coords.length > 2) {
        var p1, p2;
        for (var i = 0; i < coords.length - 1; i++) {
            p1 = coords[i];
            p2 = coords[i + 1];
            area += rad(p2[0] - p1[0]) * (2 + Math.sin(rad(p1[1])) + Math.sin(rad(p2[1])));
        }

        area = area * wgs84.RADIUS * wgs84.RADIUS / 2;
    }

    return area;
}

function rad(_) {
    return _ * Math.PI / 180;
}

},{"wgs84":50}],15:[function(require,module,exports){
var geojsonArea = require('geojson-area');

module.exports = rewind;

function rewind(gj, outer) {
    switch ((gj && gj.type) || null) {
        case 'FeatureCollection':
            gj.features = gj.features.map(curryOuter(rewind, outer));
            return gj;
        case 'Feature':
            gj.geometry = rewind(gj.geometry, outer);
            return gj;
        case 'Polygon':
        case 'MultiPolygon':
            return correct(gj, outer);
        default:
            return gj;
    }
}

function curryOuter(a, b) {
    return function(_) { return a(_, b); };
}

function correct(_, outer) {
    if (_.type === 'Polygon') {
        _.coordinates = correctRings(_.coordinates, outer);
    } else if (_.type === 'MultiPolygon') {
        _.coordinates = _.coordinates.map(curryOuter(correctRings, outer));
    }
    return _;
}

function correctRings(_, outer) {
    outer = !!outer;
    _[0] = wind(_[0], outer);
    for (var i = 1; i < _.length; i++) {
        _[i] = wind(_[i], !outer);
    }
    return _;
}

function wind(_, dir) {
    return cw(_) === dir ? _ : _.reverse();
}

function cw(_) {
    return geojsonArea.ring(_) >= 0;
}

},{"geojson-area":14}],16:[function(require,module,exports){
'use strict';

module.exports = clip;

var createFeature = require('./feature');

/* clip features between two axis-parallel lines:
 *     |        |
 *  ___|___     |     /
 * /   |   \____|____/
 *     |        |
 */

function clip(features, scale, k1, k2, axis, intersect, minAll, maxAll) {

    k1 /= scale;
    k2 /= scale;

    if (minAll >= k1 && maxAll <= k2) return features; // trivial accept
    else if (minAll > k2 || maxAll < k1) return null; // trivial reject

    var clipped = [];

    for (var i = 0; i < features.length; i++) {

        var feature = features[i],
            geometry = feature.geometry,
            type = feature.type,
            min, max;

        min = feature.min[axis];
        max = feature.max[axis];

        if (min >= k1 && max <= k2) { // trivial accept
            clipped.push(feature);
            continue;
        } else if (min > k2 || max < k1) continue; // trivial reject

        var slices = type === 1 ?
                clipPoints(geometry, k1, k2, axis) :
                clipGeometry(geometry, k1, k2, axis, intersect, type === 3);

        if (slices.length) {
            // if a feature got clipped, it will likely get clipped on the next zoom level as well,
            // so there's no need to recalculate bboxes
            clipped.push(createFeature(feature.tags, type, slices, feature.id));
        }
    }

    return clipped.length ? clipped : null;
}

function clipPoints(geometry, k1, k2, axis) {
    var slice = [];

    for (var i = 0; i < geometry.length; i++) {
        var a = geometry[i],
            ak = a[axis];

        if (ak >= k1 && ak <= k2) slice.push(a);
    }
    return slice;
}

function clipGeometry(geometry, k1, k2, axis, intersect, closed) {

    var slices = [];

    for (var i = 0; i < geometry.length; i++) {

        var ak = 0,
            bk = 0,
            b = null,
            points = geometry[i],
            area = points.area,
            dist = points.dist,
            outer = points.outer,
            len = points.length,
            a, j, last;

        var slice = [];

        for (j = 0; j < len - 1; j++) {
            a = b || points[j];
            b = points[j + 1];
            ak = bk || a[axis];
            bk = b[axis];

            if (ak < k1) {

                if ((bk > k2)) { // ---|-----|-->
                    slice.push(intersect(a, b, k1), intersect(a, b, k2));
                    if (!closed) slice = newSlice(slices, slice, area, dist, outer);

                } else if (bk >= k1) slice.push(intersect(a, b, k1)); // ---|-->  |

            } else if (ak > k2) {

                if ((bk < k1)) { // <--|-----|---
                    slice.push(intersect(a, b, k2), intersect(a, b, k1));
                    if (!closed) slice = newSlice(slices, slice, area, dist, outer);

                } else if (bk <= k2) slice.push(intersect(a, b, k2)); // |  <--|---

            } else {

                slice.push(a);

                if (bk < k1) { // <--|---  |
                    slice.push(intersect(a, b, k1));
                    if (!closed) slice = newSlice(slices, slice, area, dist, outer);

                } else if (bk > k2) { // |  ---|-->
                    slice.push(intersect(a, b, k2));
                    if (!closed) slice = newSlice(slices, slice, area, dist, outer);
                }
                // | --> |
            }
        }

        // add the last point
        a = points[len - 1];
        ak = a[axis];
        if (ak >= k1 && ak <= k2) slice.push(a);

        // close the polygon if its endpoints are not the same after clipping

        last = slice[slice.length - 1];
        if (closed && last && (slice[0][0] !== last[0] || slice[0][1] !== last[1])) slice.push(slice[0]);

        // add the final slice
        newSlice(slices, slice, area, dist, outer);
    }

    return slices;
}

function newSlice(slices, slice, area, dist, outer) {
    if (slice.length) {
        // we don't recalculate the area/length of the unclipped geometry because the case where it goes
        // below the visibility threshold as a result of clipping is rare, so we avoid doing unnecessary work
        slice.area = area;
        slice.dist = dist;
        if (outer !== undefined) slice.outer = outer;

        slices.push(slice);
    }
    return [];
}

},{"./feature":18}],17:[function(require,module,exports){
'use strict';

module.exports = convert;

var simplify = require('./simplify');
var createFeature = require('./feature');

// converts GeoJSON feature into an intermediate projected JSON vector format with simplification data

function convert(data, tolerance) {
    var features = [];

    if (data.type === 'FeatureCollection') {
        for (var i = 0; i < data.features.length; i++) {
            convertFeature(features, data.features[i], tolerance);
        }
    } else if (data.type === 'Feature') {
        convertFeature(features, data, tolerance);

    } else {
        // single geometry or a geometry collection
        convertFeature(features, {geometry: data}, tolerance);
    }
    return features;
}

function convertFeature(features, feature, tolerance) {
    if (feature.geometry === null) {
        // ignore features with null geometry
        return;
    }

    var geom = feature.geometry,
        type = geom.type,
        coords = geom.coordinates,
        tags = feature.properties,
        id = feature.id,
        i, j, rings, projectedRing;

    if (type === 'Point') {
        features.push(createFeature(tags, 1, [projectPoint(coords)], id));

    } else if (type === 'MultiPoint') {
        features.push(createFeature(tags, 1, project(coords), id));

    } else if (type === 'LineString') {
        features.push(createFeature(tags, 2, [project(coords, tolerance)], id));

    } else if (type === 'MultiLineString' || type === 'Polygon') {
        rings = [];
        for (i = 0; i < coords.length; i++) {
            projectedRing = project(coords[i], tolerance);
            if (type === 'Polygon') projectedRing.outer = (i === 0);
            rings.push(projectedRing);
        }
        features.push(createFeature(tags, type === 'Polygon' ? 3 : 2, rings, id));

    } else if (type === 'MultiPolygon') {
        rings = [];
        for (i = 0; i < coords.length; i++) {
            for (j = 0; j < coords[i].length; j++) {
                projectedRing = project(coords[i][j], tolerance);
                projectedRing.outer = (j === 0);
                rings.push(projectedRing);
            }
        }
        features.push(createFeature(tags, 3, rings, id));

    } else if (type === 'GeometryCollection') {
        for (i = 0; i < geom.geometries.length; i++) {
            convertFeature(features, {
                geometry: geom.geometries[i],
                properties: tags
            }, tolerance);
        }

    } else {
        throw new Error('Input data is not a valid GeoJSON object.');
    }
}

function project(lonlats, tolerance) {
    var projected = [];
    for (var i = 0; i < lonlats.length; i++) {
        projected.push(projectPoint(lonlats[i]));
    }
    if (tolerance) {
        simplify(projected, tolerance);
        calcSize(projected);
    }
    return projected;
}

function projectPoint(p) {
    var sin = Math.sin(p[1] * Math.PI / 180),
        x = (p[0] / 360 + 0.5),
        y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);

    y = y < 0 ? 0 :
        y > 1 ? 1 : y;

    return [x, y, 0];
}

// calculate area and length of the poly
function calcSize(points) {
    var area = 0,
        dist = 0;

    for (var i = 0, a, b; i < points.length - 1; i++) {
        a = b || points[i];
        b = points[i + 1];

        area += a[0] * b[1] - b[0] * a[1];

        // use Manhattan distance instead of Euclidian one to avoid expensive square root computation
        dist += Math.abs(b[0] - a[0]) + Math.abs(b[1] - a[1]);
    }
    points.area = Math.abs(area / 2);
    points.dist = dist;
}

},{"./feature":18,"./simplify":20}],18:[function(require,module,exports){
'use strict';

module.exports = createFeature;

function createFeature(tags, type, geom, id) {
    var feature = {
        id: id || null,
        type: type,
        geometry: geom,
        tags: tags || null,
        min: [Infinity, Infinity], // initial bbox values
        max: [-Infinity, -Infinity]
    };
    calcBBox(feature);
    return feature;
}

// calculate the feature bounding box for faster clipping later
function calcBBox(feature) {
    var geometry = feature.geometry,
        min = feature.min,
        max = feature.max;

    if (feature.type === 1) {
        calcRingBBox(min, max, geometry);
    } else {
        for (var i = 0; i < geometry.length; i++) {
            calcRingBBox(min, max, geometry[i]);
        }
    }

    return feature;
}

function calcRingBBox(min, max, points) {
    for (var i = 0, p; i < points.length; i++) {
        p = points[i];
        min[0] = Math.min(p[0], min[0]);
        max[0] = Math.max(p[0], max[0]);
        min[1] = Math.min(p[1], min[1]);
        max[1] = Math.max(p[1], max[1]);
    }
}

},{}],19:[function(require,module,exports){
'use strict';

module.exports = geojsonvt;

var convert = require('./convert'),     // GeoJSON conversion and preprocessing
    transform = require('./transform'), // coordinate transformation
    clip = require('./clip'),           // stripe clipping algorithm
    wrap = require('./wrap'),           // date line processing
    createTile = require('./tile');     // final simplified tile generation


function geojsonvt(data, options) {
    return new GeoJSONVT(data, options);
}

function GeoJSONVT(data, options) {
    options = this.options = extend(Object.create(this.options), options);

    var debug = options.debug;

    if (debug) console.time('preprocess data');

    var z2 = 1 << options.maxZoom, // 2^z
        features = convert(data, options.tolerance / (z2 * options.extent));

    this.tiles = {};
    this.tileCoords = [];

    if (debug) {
        console.timeEnd('preprocess data');
        console.log('index: maxZoom: %d, maxPoints: %d', options.indexMaxZoom, options.indexMaxPoints);
        console.time('generate tiles');
        this.stats = {};
        this.total = 0;
    }

    features = wrap(features, options.buffer / options.extent, intersectX);

    // start slicing from the top tile down
    if (features.length) this.splitTile(features, 0, 0, 0);

    if (debug) {
        if (features.length) console.log('features: %d, points: %d', this.tiles[0].numFeatures, this.tiles[0].numPoints);
        console.timeEnd('generate tiles');
        console.log('tiles generated:', this.total, JSON.stringify(this.stats));
    }
}

GeoJSONVT.prototype.options = {
    maxZoom: 14,            // max zoom to preserve detail on
    indexMaxZoom: 5,        // max zoom in the tile index
    indexMaxPoints: 100000, // max number of points per tile in the tile index
    solidChildren: false,   // whether to tile solid square tiles further
    tolerance: 3,           // simplification tolerance (higher means simpler)
    extent: 4096,           // tile extent
    buffer: 64,             // tile buffer on each side
    debug: 0                // logging level (0, 1 or 2)
};

GeoJSONVT.prototype.splitTile = function (features, z, x, y, cz, cx, cy) {

    var stack = [features, z, x, y],
        options = this.options,
        debug = options.debug,
        solid = null;

    // avoid recursion by using a processing queue
    while (stack.length) {
        y = stack.pop();
        x = stack.pop();
        z = stack.pop();
        features = stack.pop();

        var z2 = 1 << z,
            id = toID(z, x, y),
            tile = this.tiles[id],
            tileTolerance = z === options.maxZoom ? 0 : options.tolerance / (z2 * options.extent);

        if (!tile) {
            if (debug > 1) console.time('creation');

            tile = this.tiles[id] = createTile(features, z2, x, y, tileTolerance, z === options.maxZoom);
            this.tileCoords.push({z: z, x: x, y: y});

            if (debug) {
                if (debug > 1) {
                    console.log('tile z%d-%d-%d (features: %d, points: %d, simplified: %d)',
                        z, x, y, tile.numFeatures, tile.numPoints, tile.numSimplified);
                    console.timeEnd('creation');
                }
                var key = 'z' + z;
                this.stats[key] = (this.stats[key] || 0) + 1;
                this.total++;
            }
        }

        // save reference to original geometry in tile so that we can drill down later if we stop now
        tile.source = features;

        // if it's the first-pass tiling
        if (!cz) {
            // stop tiling if we reached max zoom, or if the tile is too simple
            if (z === options.indexMaxZoom || tile.numPoints <= options.indexMaxPoints) continue;

        // if a drilldown to a specific tile
        } else {
            // stop tiling if we reached base zoom or our target tile zoom
            if (z === options.maxZoom || z === cz) continue;

            // stop tiling if it's not an ancestor of the target tile
            var m = 1 << (cz - z);
            if (x !== Math.floor(cx / m) || y !== Math.floor(cy / m)) continue;
        }

        // stop tiling if the tile is solid clipped square
        if (!options.solidChildren && isClippedSquare(tile, options.extent, options.buffer)) {
            if (cz) solid = z; // and remember the zoom if we're drilling down
            continue;
        }

        // if we slice further down, no need to keep source geometry
        tile.source = null;

        if (debug > 1) console.time('clipping');

        // values we'll use for clipping
        var k1 = 0.5 * options.buffer / options.extent,
            k2 = 0.5 - k1,
            k3 = 0.5 + k1,
            k4 = 1 + k1,
            tl, bl, tr, br, left, right;

        tl = bl = tr = br = null;

        left  = clip(features, z2, x - k1, x + k3, 0, intersectX, tile.min[0], tile.max[0]);
        right = clip(features, z2, x + k2, x + k4, 0, intersectX, tile.min[0], tile.max[0]);

        if (left) {
            tl = clip(left, z2, y - k1, y + k3, 1, intersectY, tile.min[1], tile.max[1]);
            bl = clip(left, z2, y + k2, y + k4, 1, intersectY, tile.min[1], tile.max[1]);
        }

        if (right) {
            tr = clip(right, z2, y - k1, y + k3, 1, intersectY, tile.min[1], tile.max[1]);
            br = clip(right, z2, y + k2, y + k4, 1, intersectY, tile.min[1], tile.max[1]);
        }

        if (debug > 1) console.timeEnd('clipping');

        if (features.length) {
            stack.push(tl || [], z + 1, x * 2,     y * 2);
            stack.push(bl || [], z + 1, x * 2,     y * 2 + 1);
            stack.push(tr || [], z + 1, x * 2 + 1, y * 2);
            stack.push(br || [], z + 1, x * 2 + 1, y * 2 + 1);
        }
    }

    return solid;
};

GeoJSONVT.prototype.getTile = function (z, x, y) {
    var options = this.options,
        extent = options.extent,
        debug = options.debug;

    var z2 = 1 << z;
    x = ((x % z2) + z2) % z2; // wrap tile x coordinate

    var id = toID(z, x, y);
    if (this.tiles[id]) return transform.tile(this.tiles[id], extent);

    if (debug > 1) console.log('drilling down to z%d-%d-%d', z, x, y);

    var z0 = z,
        x0 = x,
        y0 = y,
        parent;

    while (!parent && z0 > 0) {
        z0--;
        x0 = Math.floor(x0 / 2);
        y0 = Math.floor(y0 / 2);
        parent = this.tiles[toID(z0, x0, y0)];
    }

    if (!parent || !parent.source) return null;

    // if we found a parent tile containing the original geometry, we can drill down from it
    if (debug > 1) console.log('found parent tile z%d-%d-%d', z0, x0, y0);

    // it parent tile is a solid clipped square, return it instead since it's identical
    if (isClippedSquare(parent, extent, options.buffer)) return transform.tile(parent, extent);

    if (debug > 1) console.time('drilling down');
    var solid = this.splitTile(parent.source, z0, x0, y0, z, x, y);
    if (debug > 1) console.timeEnd('drilling down');

    // one of the parent tiles was a solid clipped square
    if (solid !== null) {
        var m = 1 << (z - solid);
        id = toID(solid, Math.floor(x / m), Math.floor(y / m));
    }

    return this.tiles[id] ? transform.tile(this.tiles[id], extent) : null;
};

function toID(z, x, y) {
    return (((1 << z) * y + x) * 32) + z;
}

function intersectX(a, b, x) {
    return [x, (x - a[0]) * (b[1] - a[1]) / (b[0] - a[0]) + a[1], 1];
}
function intersectY(a, b, y) {
    return [(y - a[1]) * (b[0] - a[0]) / (b[1] - a[1]) + a[0], y, 1];
}

function extend(dest, src) {
    for (var i in src) dest[i] = src[i];
    return dest;
}

// checks whether a tile is a whole-area fill after clipping; if it is, there's no sense slicing it further
function isClippedSquare(tile, extent, buffer) {

    var features = tile.source;
    if (features.length !== 1) return false;

    var feature = features[0];
    if (feature.type !== 3 || feature.geometry.length > 1) return false;

    var len = feature.geometry[0].length;
    if (len !== 5) return false;

    for (var i = 0; i < len; i++) {
        var p = transform.point(feature.geometry[0][i], extent, tile.z2, tile.x, tile.y);
        if ((p[0] !== -buffer && p[0] !== extent + buffer) ||
            (p[1] !== -buffer && p[1] !== extent + buffer)) return false;
    }

    return true;
}

},{"./clip":16,"./convert":17,"./tile":21,"./transform":22,"./wrap":23}],20:[function(require,module,exports){
'use strict';

module.exports = simplify;

// calculate simplification data using optimized Douglas-Peucker algorithm

function simplify(points, tolerance) {

    var sqTolerance = tolerance * tolerance,
        len = points.length,
        first = 0,
        last = len - 1,
        stack = [],
        i, maxSqDist, sqDist, index;

    // always retain the endpoints (1 is the max value)
    points[first][2] = 1;
    points[last][2] = 1;

    // avoid recursion by using a stack
    while (last) {

        maxSqDist = 0;

        for (i = first + 1; i < last; i++) {
            sqDist = getSqSegDist(points[i], points[first], points[last]);

            if (sqDist > maxSqDist) {
                index = i;
                maxSqDist = sqDist;
            }
        }

        if (maxSqDist > sqTolerance) {
            points[index][2] = maxSqDist; // save the point importance in squared pixels as a z coordinate
            stack.push(first);
            stack.push(index);
            first = index;

        } else {
            last = stack.pop();
            first = stack.pop();
        }
    }
}

// square distance from a point to a segment
function getSqSegDist(p, a, b) {

    var x = a[0], y = a[1],
        bx = b[0], by = b[1],
        px = p[0], py = p[1],
        dx = bx - x,
        dy = by - y;

    if (dx !== 0 || dy !== 0) {

        var t = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);

        if (t > 1) {
            x = bx;
            y = by;

        } else if (t > 0) {
            x += dx * t;
            y += dy * t;
        }
    }

    dx = px - x;
    dy = py - y;

    return dx * dx + dy * dy;
}

},{}],21:[function(require,module,exports){
'use strict';

module.exports = createTile;

function createTile(features, z2, tx, ty, tolerance, noSimplify) {
    var tile = {
        features: [],
        numPoints: 0,
        numSimplified: 0,
        numFeatures: 0,
        source: null,
        x: tx,
        y: ty,
        z2: z2,
        transformed: false,
        min: [2, 1],
        max: [-1, 0]
    };
    for (var i = 0; i < features.length; i++) {
        tile.numFeatures++;
        addFeature(tile, features[i], tolerance, noSimplify);

        var min = features[i].min,
            max = features[i].max;

        if (min[0] < tile.min[0]) tile.min[0] = min[0];
        if (min[1] < tile.min[1]) tile.min[1] = min[1];
        if (max[0] > tile.max[0]) tile.max[0] = max[0];
        if (max[1] > tile.max[1]) tile.max[1] = max[1];
    }
    return tile;
}

function addFeature(tile, feature, tolerance, noSimplify) {

    var geom = feature.geometry,
        type = feature.type,
        simplified = [],
        sqTolerance = tolerance * tolerance,
        i, j, ring, p;

    if (type === 1) {
        for (i = 0; i < geom.length; i++) {
            simplified.push(geom[i]);
            tile.numPoints++;
            tile.numSimplified++;
        }

    } else {

        // simplify and transform projected coordinates for tile geometry
        for (i = 0; i < geom.length; i++) {
            ring = geom[i];

            // filter out tiny polylines & polygons
            if (!noSimplify && ((type === 2 && ring.dist < tolerance) ||
                                (type === 3 && ring.area < sqTolerance))) {
                tile.numPoints += ring.length;
                continue;
            }

            var simplifiedRing = [];

            for (j = 0; j < ring.length; j++) {
                p = ring[j];
                // keep points with importance > tolerance
                if (noSimplify || p[2] > sqTolerance) {
                    simplifiedRing.push(p);
                    tile.numSimplified++;
                }
                tile.numPoints++;
            }

            if (type === 3) rewind(simplifiedRing, ring.outer);

            simplified.push(simplifiedRing);
        }
    }

    if (simplified.length) {
        var tileFeature = {
            geometry: simplified,
            type: type,
            tags: feature.tags || null
        };
        if (feature.id !== null) {
            tileFeature.id = feature.id;
        }
        tile.features.push(tileFeature);
    }
}

function rewind(ring, clockwise) {
    var area = signedArea(ring);
    if (area < 0 === clockwise) ring.reverse();
}

function signedArea(ring) {
    var sum = 0;
    for (var i = 0, len = ring.length, j = len - 1, p1, p2; i < len; j = i++) {
        p1 = ring[i];
        p2 = ring[j];
        sum += (p2[0] - p1[0]) * (p1[1] + p2[1]);
    }
    return sum;
}

},{}],22:[function(require,module,exports){
'use strict';

exports.tile = transformTile;
exports.point = transformPoint;

// Transforms the coordinates of each feature in the given tile from
// mercator-projected space into (extent x extent) tile space.
function transformTile(tile, extent) {
    if (tile.transformed) return tile;

    var z2 = tile.z2,
        tx = tile.x,
        ty = tile.y,
        i, j, k;

    for (i = 0; i < tile.features.length; i++) {
        var feature = tile.features[i],
            geom = feature.geometry,
            type = feature.type;

        if (type === 1) {
            for (j = 0; j < geom.length; j++) geom[j] = transformPoint(geom[j], extent, z2, tx, ty);

        } else {
            for (j = 0; j < geom.length; j++) {
                var ring = geom[j];
                for (k = 0; k < ring.length; k++) ring[k] = transformPoint(ring[k], extent, z2, tx, ty);
            }
        }
    }

    tile.transformed = true;

    return tile;
}

function transformPoint(p, extent, z2, tx, ty) {
    var x = Math.round(extent * (p[0] * z2 - tx)),
        y = Math.round(extent * (p[1] * z2 - ty));
    return [x, y];
}

},{}],23:[function(require,module,exports){
'use strict';

var clip = require('./clip');
var createFeature = require('./feature');

module.exports = wrap;

function wrap(features, buffer, intersectX) {
    var merged = features,
        left  = clip(features, 1, -1 - buffer, buffer,     0, intersectX, -1, 2), // left world copy
        right = clip(features, 1,  1 - buffer, 2 + buffer, 0, intersectX, -1, 2); // right world copy

    if (left || right) {
        merged = clip(features, 1, -buffer, 1 + buffer, 0, intersectX, -1, 2) || []; // center world copy

        if (left) merged = shiftFeatureCoords(left, 1).concat(merged); // merge left into center
        if (right) merged = merged.concat(shiftFeatureCoords(right, -1)); // merge right into center
    }

    return merged;
}

function shiftFeatureCoords(features, offset) {
    var newFeatures = [];

    for (var i = 0; i < features.length; i++) {
        var feature = features[i],
            type = feature.type;

        var newGeometry;

        if (type === 1) {
            newGeometry = shiftCoords(feature.geometry, offset);
        } else {
            newGeometry = [];
            for (var j = 0; j < feature.geometry.length; j++) {
                newGeometry.push(shiftCoords(feature.geometry[j], offset));
            }
        }

        newFeatures.push(createFeature(feature.tags, type, newGeometry, feature.id));
    }

    return newFeatures;
}

function shiftCoords(points, offset) {
    var newPoints = [];
    newPoints.area = points.area;
    newPoints.dist = points.dist;

    for (var i = 0; i < points.length; i++) {
        newPoints.push([points[i][0] + offset, points[i][1], points[i][2]]);
    }
    return newPoints;
}

},{"./clip":16,"./feature":18}],24:[function(require,module,exports){
'use strict';

module.exports = GridIndex;

var NUM_PARAMS = 3;

function GridIndex(extent, n, padding) {
    var cells = this.cells = [];

    if (extent instanceof ArrayBuffer) {
        this.arrayBuffer = extent;
        var array = new Int32Array(this.arrayBuffer);
        extent = array[0];
        n = array[1];
        padding = array[2];

        this.d = n + 2 * padding;
        for (var k = 0; k < this.d * this.d; k++) {
            var start = array[NUM_PARAMS + k];
            var end = array[NUM_PARAMS + k + 1];
            cells.push(start === end ?
                    null :
                    array.subarray(start, end));
        }
        var keysOffset = array[NUM_PARAMS + cells.length];
        var bboxesOffset = array[NUM_PARAMS + cells.length + 1];
        this.keys = array.subarray(keysOffset, bboxesOffset);
        this.bboxes = array.subarray(bboxesOffset);

        this.insert = this._insertReadonly;

    } else {
        this.d = n + 2 * padding;
        for (var i = 0; i < this.d * this.d; i++) {
            cells.push([]);
        }
        this.keys = [];
        this.bboxes = [];
    }

    this.n = n;
    this.extent = extent;
    this.padding = padding;
    this.scale = n / extent;
    this.uid = 0;

    var p = (padding / n) * extent;
    this.min = -p;
    this.max = extent + p;
}


GridIndex.prototype.insert = function(key, x1, y1, x2, y2) {
    this._forEachCell(x1, y1, x2, y2, this._insertCell, this.uid++);
    this.keys.push(key);
    this.bboxes.push(x1);
    this.bboxes.push(y1);
    this.bboxes.push(x2);
    this.bboxes.push(y2);
};

GridIndex.prototype._insertReadonly = function() {
    throw 'Cannot insert into a GridIndex created from an ArrayBuffer.';
};

GridIndex.prototype._insertCell = function(x1, y1, x2, y2, cellIndex, uid) {
    this.cells[cellIndex].push(uid);
};

GridIndex.prototype.query = function(x1, y1, x2, y2) {
    var min = this.min;
    var max = this.max;
    if (x1 <= min && y1 <= min && max <= x2 && max <= y2) {
        // We use `Array#slice` because `this.keys` may be a `Int32Array` and
        // some browsers (Safari and IE) do not support `TypedArray#slice`
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice#Browser_compatibility
        return Array.prototype.slice.call(this.keys);

    } else {
        var result = [];
        var seenUids = {};
        this._forEachCell(x1, y1, x2, y2, this._queryCell, result, seenUids);
        return result;
    }
};

GridIndex.prototype._queryCell = function(x1, y1, x2, y2, cellIndex, result, seenUids) {
    var cell = this.cells[cellIndex];
    if (cell !== null) {
        var keys = this.keys;
        var bboxes = this.bboxes;
        for (var u = 0; u < cell.length; u++) {
            var uid = cell[u];
            if (seenUids[uid] === undefined) {
                var offset = uid * 4;
                if ((x1 <= bboxes[offset + 2]) &&
                    (y1 <= bboxes[offset + 3]) &&
                    (x2 >= bboxes[offset + 0]) &&
                    (y2 >= bboxes[offset + 1])) {
                    seenUids[uid] = true;
                    result.push(keys[uid]);
                } else {
                    seenUids[uid] = false;
                }
            }
        }
    }
};

GridIndex.prototype._forEachCell = function(x1, y1, x2, y2, fn, arg1, arg2) {
    var cx1 = this._convertToCellCoord(x1);
    var cy1 = this._convertToCellCoord(y1);
    var cx2 = this._convertToCellCoord(x2);
    var cy2 = this._convertToCellCoord(y2);
    for (var x = cx1; x <= cx2; x++) {
        for (var y = cy1; y <= cy2; y++) {
            var cellIndex = this.d * y + x;
            if (fn.call(this, x1, y1, x2, y2, cellIndex, arg1, arg2)) return;
        }
    }
};

GridIndex.prototype._convertToCellCoord = function(x) {
    return Math.max(0, Math.min(this.d - 1, Math.floor(x * this.scale) + this.padding));
};

GridIndex.prototype.toArrayBuffer = function() {
    if (this.arrayBuffer) return this.arrayBuffer;

    var cells = this.cells;

    var metadataLength = NUM_PARAMS + this.cells.length + 1 + 1;
    var totalCellLength = 0;
    for (var i = 0; i < this.cells.length; i++) {
        totalCellLength += this.cells[i].length;
    }

    var array = new Int32Array(metadataLength + totalCellLength + this.keys.length + this.bboxes.length);
    array[0] = this.extent;
    array[1] = this.n;
    array[2] = this.padding;

    var offset = metadataLength;
    for (var k = 0; k < cells.length; k++) {
        var cell = cells[k];
        array[NUM_PARAMS + k] = offset;
        array.set(cell, offset);
        offset += cell.length;
    }

    array[NUM_PARAMS + cells.length] = offset;
    array.set(this.keys, offset);
    offset += this.keys.length;

    array[NUM_PARAMS + cells.length + 1] = offset;
    array.set(this.bboxes, offset);
    offset += this.bboxes.length;

    return array.buffer;
};

},{}],25:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],26:[function(require,module,exports){
'use strict';

var sort = require('./sort');
var range = require('./range');
var within = require('./within');

module.exports = kdbush;

function kdbush(points, getX, getY, nodeSize, ArrayType) {
    return new KDBush(points, getX, getY, nodeSize, ArrayType);
}

function KDBush(points, getX, getY, nodeSize, ArrayType) {
    getX = getX || defaultGetX;
    getY = getY || defaultGetY;
    ArrayType = ArrayType || Array;

    this.nodeSize = nodeSize || 64;
    this.points = points;

    this.ids = new ArrayType(points.length);
    this.coords = new ArrayType(points.length * 2);

    for (var i = 0; i < points.length; i++) {
        this.ids[i] = i;
        this.coords[2 * i] = getX(points[i]);
        this.coords[2 * i + 1] = getY(points[i]);
    }

    sort(this.ids, this.coords, this.nodeSize, 0, this.ids.length - 1, 0);
}

KDBush.prototype = {
    range: function (minX, minY, maxX, maxY) {
        return range(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
    },

    within: function (x, y, r) {
        return within(this.ids, this.coords, x, y, r, this.nodeSize);
    }
};

function defaultGetX(p) { return p[0]; }
function defaultGetY(p) { return p[1]; }

},{"./range":27,"./sort":28,"./within":29}],27:[function(require,module,exports){
'use strict';

module.exports = range;

function range(ids, coords, minX, minY, maxX, maxY, nodeSize) {
    var stack = [0, ids.length - 1, 0];
    var result = [];
    var x, y;

    while (stack.length) {
        var axis = stack.pop();
        var right = stack.pop();
        var left = stack.pop();

        if (right - left <= nodeSize) {
            for (var i = left; i <= right; i++) {
                x = coords[2 * i];
                y = coords[2 * i + 1];
                if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
            }
            continue;
        }

        var m = Math.floor((left + right) / 2);

        x = coords[2 * m];
        y = coords[2 * m + 1];

        if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);

        var nextAxis = (axis + 1) % 2;

        if (axis === 0 ? minX <= x : minY <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? maxX >= x : maxY >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}

},{}],28:[function(require,module,exports){
'use strict';

module.exports = sortKD;

function sortKD(ids, coords, nodeSize, left, right, depth) {
    if (right - left <= nodeSize) return;

    var m = Math.floor((left + right) / 2);

    select(ids, coords, m, left, right, depth % 2);

    sortKD(ids, coords, nodeSize, left, m - 1, depth + 1);
    sortKD(ids, coords, nodeSize, m + 1, right, depth + 1);
}

function select(ids, coords, k, left, right, inc) {

    while (right > left) {
        if (right - left > 600) {
            var n = right - left + 1;
            var m = k - left + 1;
            var z = Math.log(n);
            var s = 0.5 * Math.exp(2 * z / 3);
            var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            select(ids, coords, k, newLeft, newRight, inc);
        }

        var t = coords[2 * k + inc];
        var i = left;
        var j = right;

        swapItem(ids, coords, left, k);
        if (coords[2 * right + inc] > t) swapItem(ids, coords, left, right);

        while (i < j) {
            swapItem(ids, coords, i, j);
            i++;
            j--;
            while (coords[2 * i + inc] < t) i++;
            while (coords[2 * j + inc] > t) j--;
        }

        if (coords[2 * left + inc] === t) swapItem(ids, coords, left, j);
        else {
            j++;
            swapItem(ids, coords, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

function swapItem(ids, coords, i, j) {
    swap(ids, i, j);
    swap(coords, 2 * i, 2 * j);
    swap(coords, 2 * i + 1, 2 * j + 1);
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

},{}],29:[function(require,module,exports){
'use strict';

module.exports = within;

function within(ids, coords, qx, qy, r, nodeSize) {
    var stack = [0, ids.length - 1, 0];
    var result = [];
    var r2 = r * r;

    while (stack.length) {
        var axis = stack.pop();
        var right = stack.pop();
        var left = stack.pop();

        if (right - left <= nodeSize) {
            for (var i = left; i <= right; i++) {
                if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
            }
            continue;
        }

        var m = Math.floor((left + right) / 2);

        var x = coords[2 * m];
        var y = coords[2 * m + 1];

        if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);

        var nextAxis = (axis + 1) % 2;

        if (axis === 0 ? qx - r <= x : qy - r <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? qx + r >= x : qy + r >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}

function sqDist(ax, ay, bx, by) {
    var dx = ax - bx;
    var dy = ay - by;
    return dx * dx + dy * dy;
}

},{}],30:[function(require,module,exports){
/**
 * lodash 3.0.7 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var isArray = require('lodash.isarray'),
    isTypedArray = require('lodash.istypedarray'),
    keys = require('lodash.keys');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    stringTag = '[object String]';

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * A specialized version of `_.some` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.isEqual` without support for `this` binding
 * `customizer` functions.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing objects.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = objToString.call(object);
    if (objTag == argsTag) {
      objTag = objectTag;
    } else if (objTag != objectTag) {
      objIsArr = isTypedArray(object);
    }
  }
  if (!othIsArr) {
    othTag = objToString.call(other);
    if (othTag == argsTag) {
      othTag = objectTag;
    } else if (othTag != objectTag) {
      othIsArr = isTypedArray(other);
    }
  }
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && !(objIsArr || objIsObj)) {
    return equalByTag(object, other, objTag);
  }
  if (!isLoose) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
    }
  }
  if (!isSameTag) {
    return false;
  }
  // Assume cyclic values are equal.
  // For more information on detecting circular references see https://es5.github.io/#JO.
  stackA || (stackA = []);
  stackB || (stackB = []);

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == object) {
      return stackB[length] == other;
    }
  }
  // Add `object` and `other` to the stack of traversed objects.
  stackA.push(object);
  stackB.push(other);

  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

  stackA.pop();
  stackB.pop();

  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing arrays.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var index = -1,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
    return false;
  }
  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index],
        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

    if (result !== undefined) {
      if (result) {
        continue;
      }
      return false;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (isLoose) {
      if (!arraySome(other, function(othValue) {
            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
          })) {
        return false;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
      return false;
    }
  }
  return true;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} value The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag) {
  switch (tag) {
    case boolTag:
    case dateTag:
      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
      return +object == +other;

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case numberTag:
      // Treat `NaN` vs. `NaN` as equal.
      return (object != +object)
        ? other != +other
        : object == +other;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings primitives and string
      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
      return object == (other + '');
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isLoose) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  var skipCtor = isLoose;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key],
        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

    // Recursively compare objects (susceptible to call stack limits).
    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
      return false;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (!skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = baseIsEqual;

},{"lodash.isarray":34,"lodash.istypedarray":36,"lodash.keys":37}],31:[function(require,module,exports){
/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * A specialized version of `baseCallback` which only supports `this` binding
 * and specifying the number of arguments to provide to `func`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function bindCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  if (thisArg === undefined) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return function() {
    return func.apply(thisArg, arguments);
  };
}

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = bindCallback;

},{}],32:[function(require,module,exports){
/**
 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = getNative;

},{}],33:[function(require,module,exports){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isArguments;

},{}],34:[function(require,module,exports){
/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = isArray;

},{}],35:[function(require,module,exports){
/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseIsEqual = require('lodash._baseisequal'),
    bindCallback = require('lodash._bindcallback');

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent. If `customizer` is provided it is invoked to compare values.
 * If `customizer` returns `undefined` comparisons are handled by the method
 * instead. The `customizer` is bound to `thisArg` and invoked with three
 * arguments: (value, other [, index|key]).
 *
 * **Note:** This method supports comparing arrays, booleans, `Date` objects,
 * numbers, `Object` objects, regexes, and strings. Objects are compared by
 * their own, not inherited, enumerable properties. Functions and DOM nodes
 * are **not** supported. Provide a customizer function to extend support
 * for comparing other values.
 *
 * @static
 * @memberOf _
 * @alias eq
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize value comparisons.
 * @param {*} [thisArg] The `this` binding of `customizer`.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'user': 'fred' };
 * var other = { 'user': 'fred' };
 *
 * object == other;
 * // => false
 *
 * _.isEqual(object, other);
 * // => true
 *
 * // using a customizer callback
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * _.isEqual(array, other, function(value, other) {
 *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
 *     return true;
 *   }
 * });
 * // => true
 */
function isEqual(value, other, customizer, thisArg) {
  customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
  var result = customizer ? customizer(value, other) : undefined;
  return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
}

module.exports = isEqual;

},{"lodash._baseisequal":30,"lodash._bindcallback":31}],36:[function(require,module,exports){
/**
 * lodash 3.0.6 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length,
 *  else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
function isTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

module.exports = isTypedArray;

},{}],37:[function(require,module,exports){
/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = require('lodash._getnative'),
    isArguments = require('lodash.isarguments'),
    isArray = require('lodash.isarray');

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;

},{"lodash._getnative":32,"lodash.isarguments":33,"lodash.isarray":34}],38:[function(require,module,exports){
'use strict';

if (typeof module !== 'undefined' && module.exports) {
    module.exports = isSupported;
} else if (window) {
    window.mapboxgl = window.mapboxgl || {};
    window.mapboxgl.supported = isSupported;
}

/**
 * Test whether the current browser supports Mapbox GL JS
 * @param {Object} options
 * @param {boolean} [options.failIfMajorPerformanceCaveat=false] Return `false`
 *   if the performance of Mapbox GL JS would be dramatically worse than
 *   expected (i.e. a software renderer is would be used)
 * @return {boolean}
 */
function isSupported(options) {
    return !!(
        isBrowser() &&
        isArraySupported() &&
        isFunctionSupported() &&
        isObjectSupported() &&
        isJSONSupported() &&
        isWorkerSupported() &&
        isUint8ClampedArraySupported() &&
        isWebGLSupportedCached(options && options.failIfMajorPerformanceCaveat)
    );
}

function isBrowser() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function isArraySupported() {
    return (
        Array.prototype &&
        Array.prototype.every &&
        Array.prototype.filter &&
        Array.prototype.forEach &&
        Array.prototype.indexOf &&
        Array.prototype.lastIndexOf &&
        Array.prototype.map &&
        Array.prototype.some &&
        Array.prototype.reduce &&
        Array.prototype.reduceRight &&
        Array.isArray
    );
}

function isFunctionSupported() {
    return Function.prototype && Function.prototype.bind;
}

function isObjectSupported() {
    return (
        Object.keys &&
        Object.create &&
        Object.getPrototypeOf &&
        Object.getOwnPropertyNames &&
        Object.isSealed &&
        Object.isFrozen &&
        Object.isExtensible &&
        Object.getOwnPropertyDescriptor &&
        Object.defineProperty &&
        Object.defineProperties &&
        Object.seal &&
        Object.freeze &&
        Object.preventExtensions
    );
}

function isJSONSupported() {
    return 'JSON' in window && 'parse' in JSON && 'stringify' in JSON;
}

function isWorkerSupported() {
    return 'Worker' in window;
}

// IE11 only supports `Uint8ClampedArray` as of version
// [KB2929437](https://support.microsoft.com/en-us/kb/2929437)
function isUint8ClampedArraySupported() {
    return 'Uint8ClampedArray' in window;
}

var isWebGLSupportedCache = {};
function isWebGLSupportedCached(failIfMajorPerformanceCaveat) {

    if (isWebGLSupportedCache[failIfMajorPerformanceCaveat] === undefined) {
        isWebGLSupportedCache[failIfMajorPerformanceCaveat] = isWebGLSupported(failIfMajorPerformanceCaveat);
    }

    return isWebGLSupportedCache[failIfMajorPerformanceCaveat];
}

isSupported.webGLContextAttributes = {
    antialias: false,
    alpha: true,
    stencil: true,
    depth: true
};

function isWebGLSupported(failIfMajorPerformanceCaveat) {

    var canvas = document.createElement('canvas');

    var attributes = Object.create(isSupported.webGLContextAttributes);
    attributes.failIfMajorPerformanceCaveat = failIfMajorPerformanceCaveat;

    if (canvas.probablySupportsContext) {
        return (
            canvas.probablySupportsContext('webgl', attributes) ||
            canvas.probablySupportsContext('experimental-webgl', attributes)
        );

    } else if (canvas.supportsContext) {
        return (
            canvas.supportsContext('webgl', attributes) ||
            canvas.supportsContext('experimental-webgl', attributes)
        );

    } else {
        return (
            canvas.getContext('webgl', attributes) ||
            canvas.getContext('experimental-webgl', attributes)
        );
    }
}

},{}],39:[function(require,module,exports){
'use strict';

module.exports = Pbf;

var ieee754 = require('ieee754');

function Pbf(buf) {
    this.buf = ArrayBuffer.isView && ArrayBuffer.isView(buf) ? buf : new Uint8Array(buf || 0);
    this.pos = 0;
    this.type = 0;
    this.length = this.buf.length;
}

Pbf.Varint  = 0; // varint: int32, int64, uint32, uint64, sint32, sint64, bool, enum
Pbf.Fixed64 = 1; // 64-bit: double, fixed64, sfixed64
Pbf.Bytes   = 2; // length-delimited: string, bytes, embedded messages, packed repeated fields
Pbf.Fixed32 = 5; // 32-bit: float, fixed32, sfixed32

var SHIFT_LEFT_32 = (1 << 16) * (1 << 16),
    SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32;

Pbf.prototype = {

    destroy: function() {
        this.buf = null;
    },

    // === READING =================================================================

    readFields: function(readField, result, end) {
        end = end || this.length;

        while (this.pos < end) {
            var val = this.readVarint(),
                tag = val >> 3,
                startPos = this.pos;

            this.type = val & 0x7;
            readField(tag, result, this);

            if (this.pos === startPos) this.skip(val);
        }
        return result;
    },

    readMessage: function(readField, result) {
        return this.readFields(readField, result, this.readVarint() + this.pos);
    },

    readFixed32: function() {
        var val = readUInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    readSFixed32: function() {
        var val = readInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    // 64-bit int handling is based on github.com/dpw/node-buffer-more-ints (MIT-licensed)

    readFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readUInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readSFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readFloat: function() {
        var val = ieee754.read(this.buf, this.pos, true, 23, 4);
        this.pos += 4;
        return val;
    },

    readDouble: function() {
        var val = ieee754.read(this.buf, this.pos, true, 52, 8);
        this.pos += 8;
        return val;
    },

    readVarint: function(isSigned) {
        var buf = this.buf,
            val, b;

        b = buf[this.pos++]; val  =  b & 0x7f;        if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 7;  if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 14; if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 21; if (b < 0x80) return val;
        b = buf[this.pos];   val |= (b & 0x0f) << 28;

        return readVarintRemainder(val, isSigned, this);
    },

    readVarint64: function() { // for compatibility with v2.0.1
        return this.readVarint(true);
    },

    readSVarint: function() {
        var num = this.readVarint();
        return num % 2 === 1 ? (num + 1) / -2 : num / 2; // zigzag encoding
    },

    readBoolean: function() {
        return Boolean(this.readVarint());
    },

    readString: function() {
        var end = this.readVarint() + this.pos,
            str = readUtf8(this.buf, this.pos, end);
        this.pos = end;
        return str;
    },

    readBytes: function() {
        var end = this.readVarint() + this.pos,
            buffer = this.buf.subarray(this.pos, end);
        this.pos = end;
        return buffer;
    },

    // verbose for performance reasons; doesn't affect gzipped size

    readPackedVarint: function(arr, isSigned) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readVarint(isSigned));
        return arr;
    },
    readPackedSVarint: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSVarint());
        return arr;
    },
    readPackedBoolean: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readBoolean());
        return arr;
    },
    readPackedFloat: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFloat());
        return arr;
    },
    readPackedDouble: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readDouble());
        return arr;
    },
    readPackedFixed32: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFixed32());
        return arr;
    },
    readPackedSFixed32: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSFixed32());
        return arr;
    },
    readPackedFixed64: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFixed64());
        return arr;
    },
    readPackedSFixed64: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSFixed64());
        return arr;
    },

    skip: function(val) {
        var type = val & 0x7;
        if (type === Pbf.Varint) while (this.buf[this.pos++] > 0x7f) {}
        else if (type === Pbf.Bytes) this.pos = this.readVarint() + this.pos;
        else if (type === Pbf.Fixed32) this.pos += 4;
        else if (type === Pbf.Fixed64) this.pos += 8;
        else throw new Error('Unimplemented type: ' + type);
    },

    // === WRITING =================================================================

    writeTag: function(tag, type) {
        this.writeVarint((tag << 3) | type);
    },

    realloc: function(min) {
        var length = this.length || 16;

        while (length < this.pos + min) length *= 2;

        if (length !== this.length) {
            var buf = new Uint8Array(length);
            buf.set(this.buf);
            this.buf = buf;
            this.length = length;
        }
    },

    finish: function() {
        this.length = this.pos;
        this.pos = 0;
        return this.buf.subarray(0, this.length);
    },

    writeFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeSFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeSFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeVarint: function(val) {
        val = +val || 0;

        if (val > 0xfffffff || val < 0) {
            writeBigVarint(val, this);
            return;
        }

        this.realloc(4);

        this.buf[this.pos++] =           val & 0x7f  | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] =   (val >>> 7) & 0x7f;
    },

    writeSVarint: function(val) {
        this.writeVarint(val < 0 ? -val * 2 - 1 : val * 2);
    },

    writeBoolean: function(val) {
        this.writeVarint(Boolean(val));
    },

    writeString: function(str) {
        str = String(str);
        this.realloc(str.length * 4);

        this.pos++; // reserve 1 byte for short string length

        var startPos = this.pos;
        // write the string directly to the buffer and see how much was written
        this.pos = writeUtf8(this.buf, str, this.pos);
        var len = this.pos - startPos;

        if (len >= 0x80) makeRoomForExtraLength(startPos, len, this);

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeFloat: function(val) {
        this.realloc(4);
        ieee754.write(this.buf, val, this.pos, true, 23, 4);
        this.pos += 4;
    },

    writeDouble: function(val) {
        this.realloc(8);
        ieee754.write(this.buf, val, this.pos, true, 52, 8);
        this.pos += 8;
    },

    writeBytes: function(buffer) {
        var len = buffer.length;
        this.writeVarint(len);
        this.realloc(len);
        for (var i = 0; i < len; i++) this.buf[this.pos++] = buffer[i];
    },

    writeRawMessage: function(fn, obj) {
        this.pos++; // reserve 1 byte for short message length

        // write the message directly to the buffer and see how much was written
        var startPos = this.pos;
        fn(obj, this);
        var len = this.pos - startPos;

        if (len >= 0x80) makeRoomForExtraLength(startPos, len, this);

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeMessage: function(tag, fn, obj) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeRawMessage(fn, obj);
    },

    writePackedVarint:   function(tag, arr) { this.writeMessage(tag, writePackedVarint, arr);   },
    writePackedSVarint:  function(tag, arr) { this.writeMessage(tag, writePackedSVarint, arr);  },
    writePackedBoolean:  function(tag, arr) { this.writeMessage(tag, writePackedBoolean, arr);  },
    writePackedFloat:    function(tag, arr) { this.writeMessage(tag, writePackedFloat, arr);    },
    writePackedDouble:   function(tag, arr) { this.writeMessage(tag, writePackedDouble, arr);   },
    writePackedFixed32:  function(tag, arr) { this.writeMessage(tag, writePackedFixed32, arr);  },
    writePackedSFixed32: function(tag, arr) { this.writeMessage(tag, writePackedSFixed32, arr); },
    writePackedFixed64:  function(tag, arr) { this.writeMessage(tag, writePackedFixed64, arr);  },
    writePackedSFixed64: function(tag, arr) { this.writeMessage(tag, writePackedSFixed64, arr); },

    writeBytesField: function(tag, buffer) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeBytes(buffer);
    },
    writeFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFixed32(val);
    },
    writeSFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeSFixed32(val);
    },
    writeFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeFixed64(val);
    },
    writeSFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeSFixed64(val);
    },
    writeVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeVarint(val);
    },
    writeSVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeSVarint(val);
    },
    writeStringField: function(tag, str) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeString(str);
    },
    writeFloatField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFloat(val);
    },
    writeDoubleField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeDouble(val);
    },
    writeBooleanField: function(tag, val) {
        this.writeVarintField(tag, Boolean(val));
    }
};

function readVarintRemainder(l, s, p) {
    var buf = p.buf,
        h, b;

    b = buf[p.pos++]; h  = (b & 0x70) >> 4;  if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 3;  if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 10; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 17; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 24; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x01) << 31; if (b < 0x80) return toNum(l, h, s);

    throw new Error('Expected varint not more than 10 bytes');
}

function readPackedEnd(pbf) {
    return pbf.type === Pbf.Bytes ?
        pbf.readVarint() + pbf.pos : pbf.pos + 1;
}

function toNum(low, high, isSigned) {
    if (isSigned) {
        return high * 0x100000000 + (low >>> 0);
    }

    return ((high >>> 0) * 0x100000000) + (low >>> 0);
}

function writeBigVarint(val, pbf) {
    var low, high;

    if (val >= 0) {
        low  = (val % 0x100000000) | 0;
        high = (val / 0x100000000) | 0;
    } else {
        low  = ~(-val % 0x100000000);
        high = ~(-val / 0x100000000);

        if (low ^ 0xffffffff) {
            low = (low + 1) | 0;
        } else {
            low = 0;
            high = (high + 1) | 0;
        }
    }

    if (val >= 0x10000000000000000 || val < -0x10000000000000000) {
        throw new Error('Given varint doesn\'t fit into 10 bytes');
    }

    pbf.realloc(10);

    writeBigVarintLow(low, high, pbf);
    writeBigVarintHigh(high, pbf);
}

function writeBigVarintLow(low, high, pbf) {
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos]   = low & 0x7f;
}

function writeBigVarintHigh(high, pbf) {
    var lsb = (high & 0x07) << 4;

    pbf.buf[pbf.pos++] |= lsb         | ((high >>>= 3) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f;
}

function makeRoomForExtraLength(startPos, len, pbf) {
    var extraLen =
        len <= 0x3fff ? 1 :
        len <= 0x1fffff ? 2 :
        len <= 0xfffffff ? 3 : Math.ceil(Math.log(len) / (Math.LN2 * 7));

    // if 1 byte isn't enough for encoding message length, shift the data to the right
    pbf.realloc(extraLen);
    for (var i = pbf.pos - 1; i >= startPos; i--) pbf.buf[i + extraLen] = pbf.buf[i];
}

function writePackedVarint(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeVarint(arr[i]);   }
function writePackedSVarint(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeSVarint(arr[i]);  }
function writePackedFloat(arr, pbf)    { for (var i = 0; i < arr.length; i++) pbf.writeFloat(arr[i]);    }
function writePackedDouble(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeDouble(arr[i]);   }
function writePackedBoolean(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeBoolean(arr[i]);  }
function writePackedFixed32(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed32(arr[i]);  }
function writePackedSFixed32(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed32(arr[i]); }
function writePackedFixed64(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed64(arr[i]);  }
function writePackedSFixed64(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed64(arr[i]); }

// Buffer code below from https://github.com/feross/buffer, MIT-licensed

function readUInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] * 0x1000000);
}

function writeInt32(buf, val, pos) {
    buf[pos] = val;
    buf[pos + 1] = (val >>> 8);
    buf[pos + 2] = (val >>> 16);
    buf[pos + 3] = (val >>> 24);
}

function readInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] << 24);
}

function readUtf8(buf, pos, end) {
    var str = '';
    var i = pos;

    while (i < end) {
        var b0 = buf[i];
        var c = null; // codepoint
        var bytesPerSequence =
            b0 > 0xEF ? 4 :
            b0 > 0xDF ? 3 :
            b0 > 0xBF ? 2 : 1;

        if (i + bytesPerSequence > end) break;

        var b1, b2, b3;

        if (bytesPerSequence === 1) {
            if (b0 < 0x80) {
                c = b0;
            }
        } else if (bytesPerSequence === 2) {
            b1 = buf[i + 1];
            if ((b1 & 0xC0) === 0x80) {
                c = (b0 & 0x1F) << 0x6 | (b1 & 0x3F);
                if (c <= 0x7F) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 3) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0xC | (b1 & 0x3F) << 0x6 | (b2 & 0x3F);
                if (c <= 0x7FF || (c >= 0xD800 && c <= 0xDFFF)) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 4) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            b3 = buf[i + 3];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0x12 | (b1 & 0x3F) << 0xC | (b2 & 0x3F) << 0x6 | (b3 & 0x3F);
                if (c <= 0xFFFF || c >= 0x110000) {
                    c = null;
                }
            }
        }

        if (c === null) {
            c = 0xFFFD;
            bytesPerSequence = 1;

        } else if (c > 0xFFFF) {
            c -= 0x10000;
            str += String.fromCharCode(c >>> 10 & 0x3FF | 0xD800);
            c = 0xDC00 | c & 0x3FF;
        }

        str += String.fromCharCode(c);
        i += bytesPerSequence;
    }

    return str;
}

function writeUtf8(buf, str, pos) {
    for (var i = 0, c, lead; i < str.length; i++) {
        c = str.charCodeAt(i); // code point

        if (c > 0xD7FF && c < 0xE000) {
            if (lead) {
                if (c < 0xDC00) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                    lead = c;
                    continue;
                } else {
                    c = lead - 0xD800 << 10 | c - 0xDC00 | 0x10000;
                    lead = null;
                }
            } else {
                if (c > 0xDBFF || (i + 1 === str.length)) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                } else {
                    lead = c;
                }
                continue;
            }
        } else if (lead) {
            buf[pos++] = 0xEF;
            buf[pos++] = 0xBF;
            buf[pos++] = 0xBD;
            lead = null;
        }

        if (c < 0x80) {
            buf[pos++] = c;
        } else {
            if (c < 0x800) {
                buf[pos++] = c >> 0x6 | 0xC0;
            } else {
                if (c < 0x10000) {
                    buf[pos++] = c >> 0xC | 0xE0;
                } else {
                    buf[pos++] = c >> 0x12 | 0xF0;
                    buf[pos++] = c >> 0xC & 0x3F | 0x80;
                }
                buf[pos++] = c >> 0x6 & 0x3F | 0x80;
            }
            buf[pos++] = c & 0x3F | 0x80;
        }
    }
    return pos;
}

},{"ieee754":25}],40:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],41:[function(require,module,exports){
'use strict';

module.exports = partialSort;

// Floyd-Rivest selection algorithm:
// Rearrange items so that all items in the [left, k] range are smaller than all items in (k, right];
// The k-th element will have the (k - left + 1)th smallest value in [left, right]

function partialSort(arr, k, left, right, compare) {
    left = left || 0;
    right = right || (arr.length - 1);
    compare = compare || defaultCompare;

    while (right > left) {
        if (right - left > 600) {
            var n = right - left + 1;
            var m = k - left + 1;
            var z = Math.log(n);
            var s = 0.5 * Math.exp(2 * z / 3);
            var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            partialSort(arr, k, newLeft, newRight, compare);
        }

        var t = arr[k];
        var i = left;
        var j = right;

        swap(arr, left, k);
        if (compare(arr[right], t) > 0) swap(arr, left, right);

        while (i < j) {
            swap(arr, i, j);
            i++;
            j--;
            while (compare(arr[i], t) < 0) i++;
            while (compare(arr[j], t) > 0) j--;
        }

        if (compare(arr[left], t) === 0) swap(arr, left, j);
        else {
            j++;
            swap(arr, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

},{}],42:[function(require,module,exports){
'use strict';

var kdbush = require('kdbush');

module.exports = supercluster;

function supercluster(options) {
    return new SuperCluster(options);
}

function SuperCluster(options) {
    this.options = extend(Object.create(this.options), options);
    this.trees = new Array(this.options.maxZoom + 1);
}

SuperCluster.prototype = {
    options: {
        minZoom: 0,   // min zoom to generate clusters on
        maxZoom: 16,  // max zoom level to cluster the points on
        radius: 40,   // cluster radius in pixels
        extent: 512,  // tile extent (radius is calculated relative to it)
        nodeSize: 64, // size of the KD-tree leaf node, affects performance
        log: false,   // whether to log timing info

        // a reduce function for calculating custom cluster properties
        reduce: null, // function (accumulated, props) { accumulated.sum += props.sum; }

        // initial properties of a cluster (before running the reducer)
        initial: function () { return {}; }, // function () { return {sum: 0}; },

        // properties to use for individual points when running the reducer
        map: function (props) { return props; } // function (props) { return {sum: props.my_value}; },
    },

    load: function (points) {
        var log = this.options.log;

        if (log) console.time('total time');

        var timerId = 'prepare ' + points.length + ' points';
        if (log) console.time(timerId);

        this.points = points;

        // generate a cluster object for each point
        var clusters = points.map(createPointCluster);
        if (log) console.timeEnd(timerId);

        // cluster points on max zoom, then cluster the results on previous zoom, etc.;
        // results in a cluster hierarchy across zoom levels
        for (var z = this.options.maxZoom; z >= this.options.minZoom; z--) {
            var now = +Date.now();

            // index input points into a KD-tree
            this.trees[z + 1] = kdbush(clusters, getX, getY, this.options.nodeSize, Float32Array);

            clusters = this._cluster(clusters, z); // create a new set of clusters for the zoom

            if (log) console.log('z%d: %d clusters in %dms', z, clusters.length, +Date.now() - now);
        }

        // index top-level clusters
        this.trees[this.options.minZoom] = kdbush(clusters, getX, getY, this.options.nodeSize, Float32Array);

        if (log) console.timeEnd('total time');

        return this;
    },

    getClusters: function (bbox, zoom) {
        var tree = this.trees[this._limitZoom(zoom)];
        var ids = tree.range(lngX(bbox[0]), latY(bbox[3]), lngX(bbox[2]), latY(bbox[1]));
        var clusters = [];
        for (var i = 0; i < ids.length; i++) {
            var c = tree.points[ids[i]];
            clusters.push(c.numPoints ? getClusterJSON(c) : this.points[c.id]);
        }
        return clusters;
    },

    getChildren: function (clusterId, clusterZoom) {
        var origin = this.trees[clusterZoom + 1].points[clusterId];
        var r = this.options.radius / (this.options.extent * Math.pow(2, clusterZoom));
        var points = this.trees[clusterZoom + 1].within(origin.x, origin.y, r);
        var children = [];
        for (var i = 0; i < points.length; i++) {
            var c = this.trees[clusterZoom + 1].points[points[i]];
            if (c.parentId === clusterId) {
                children.push(c.numPoints ? getClusterJSON(c) : this.points[c.id]);
            }
        }
        return children;
    },

    getLeaves: function (clusterId, clusterZoom, limit, offset) {
        limit = limit || 10;
        offset = offset || 0;

        var leaves = [];
        this._appendLeaves(leaves, clusterId, clusterZoom, limit, offset, 0);

        return leaves;
    },

    getTile: function (z, x, y) {
        var tree = this.trees[this._limitZoom(z)];
        var z2 = Math.pow(2, z);
        var extent = this.options.extent;
        var r = this.options.radius;
        var p = r / extent;
        var top = (y - p) / z2;
        var bottom = (y + 1 + p) / z2;

        var tile = {
            features: []
        };

        this._addTileFeatures(
            tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom),
            tree.points, x, y, z2, tile);

        if (x === 0) {
            this._addTileFeatures(
                tree.range(1 - p / z2, top, 1, bottom),
                tree.points, z2, y, z2, tile);
        }
        if (x === z2 - 1) {
            this._addTileFeatures(
                tree.range(0, top, p / z2, bottom),
                tree.points, -1, y, z2, tile);
        }

        return tile.features.length ? tile : null;
    },

    getClusterExpansionZoom: function (clusterId, clusterZoom) {
        while (clusterZoom < this.options.maxZoom) {
            var children = this.getChildren(clusterId, clusterZoom);
            clusterZoom++;
            if (children.length !== 1) break;
            clusterId = children[0].properties.cluster_id;
        }
        return clusterZoom;
    },

    _appendLeaves: function (result, clusterId, clusterZoom, limit, offset, skipped) {
        var children = this.getChildren(clusterId, clusterZoom);

        for (var i = 0; i < children.length; i++) {
            var props = children[i].properties;

            if (props.cluster) {
                if (skipped + props.point_count <= offset) {
                    // skip the whole cluster
                    skipped += props.point_count;
                } else {
                    // enter the cluster
                    skipped = this._appendLeaves(
                        result, props.cluster_id, clusterZoom + 1, limit, offset, skipped);
                    // exit the cluster
                }
            } else if (skipped < offset) {
                // skip a single point
                skipped++;
            } else {
                // add a single point
                result.push(children[i]);
            }
            if (result.length === limit) break;
        }

        return skipped;
    },

    _addTileFeatures: function (ids, points, x, y, z2, tile) {
        for (var i = 0; i < ids.length; i++) {
            var c = points[ids[i]];
            tile.features.push({
                type: 1,
                geometry: [[
                    Math.round(this.options.extent * (c.x * z2 - x)),
                    Math.round(this.options.extent * (c.y * z2 - y))
                ]],
                tags: c.numPoints ? getClusterProperties(c) : this.points[c.id].properties
            });
        }
    },

    _limitZoom: function (z) {
        return Math.max(this.options.minZoom, Math.min(z, this.options.maxZoom + 1));
    },

    _cluster: function (points, zoom) {
        var clusters = [];
        var r = this.options.radius / (this.options.extent * Math.pow(2, zoom));

        // loop through each point
        for (var i = 0; i < points.length; i++) {
            var p = points[i];
            // if we've already visited the point at this zoom level, skip it
            if (p.zoom <= zoom) continue;
            p.zoom = zoom;

            // find all nearby points
            var tree = this.trees[zoom + 1];
            var neighborIds = tree.within(p.x, p.y, r);

            var numPoints = p.numPoints || 1;
            var wx = p.x * numPoints;
            var wy = p.y * numPoints;

            var clusterProperties = null;

            if (this.options.reduce) {
                clusterProperties = this.options.initial();
                this._accumulate(clusterProperties, p);
            }

            for (var j = 0; j < neighborIds.length; j++) {
                var b = tree.points[neighborIds[j]];
                // filter out neighbors that are too far or already processed
                if (zoom < b.zoom) {
                    var numPoints2 = b.numPoints || 1;
                    b.zoom = zoom; // save the zoom (so it doesn't get processed twice)
                    wx += b.x * numPoints2; // accumulate coordinates for calculating weighted center
                    wy += b.y * numPoints2;
                    numPoints += numPoints2;
                    b.parentId = i;

                    if (this.options.reduce) {
                        this._accumulate(clusterProperties, b);
                    }
                }
            }

            if (numPoints === 1) {
                clusters.push(p);
            } else {
                p.parentId = i;
                clusters.push(createCluster(wx / numPoints, wy / numPoints, numPoints, i, clusterProperties));
            }
        }

        return clusters;
    },

    _accumulate: function (clusterProperties, point) {
        var properties = point.numPoints ?
            point.properties :
            this.options.map(this.points[point.id].properties);

        this.options.reduce(clusterProperties, properties);
    }
};

function createCluster(x, y, numPoints, id, properties) {
    return {
        x: x, // weighted cluster center
        y: y,
        zoom: Infinity, // the last zoom the cluster was processed at
        id: id, // index of the first child of the cluster in the zoom level tree
        properties: properties,
        parentId: -1, // parent cluster id
        numPoints: numPoints
    };
}

function createPointCluster(p, id) {
    var coords = p.geometry.coordinates;
    return {
        x: lngX(coords[0]), // projected point coordinates
        y: latY(coords[1]),
        zoom: Infinity, // the last zoom the point was processed at
        id: id, // index of the source feature in the original input array
        parentId: -1 // parent cluster id
    };
}

function getClusterJSON(cluster) {
    return {
        type: 'Feature',
        properties: getClusterProperties(cluster),
        geometry: {
            type: 'Point',
            coordinates: [xLng(cluster.x), yLat(cluster.y)]
        }
    };
}

function getClusterProperties(cluster) {
    var count = cluster.numPoints;
    var abbrev = count >= 10000 ? Math.round(count / 1000) + 'k' :
                 count >= 1000 ? (Math.round(count / 100) / 10) + 'k' : count;
    return extend(extend({}, cluster.properties), {
        cluster: true,
        cluster_id: cluster.id,
        point_count: count,
        point_count_abbreviated: abbrev
    });
}

// longitude/latitude to spherical mercator in [0..1] range
function lngX(lng) {
    return lng / 360 + 0.5;
}
function latY(lat) {
    var sin = Math.sin(lat * Math.PI / 180),
        y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);
    return y < 0 ? 0 :
           y > 1 ? 1 : y;
}

// spherical mercator to longitude/latitude
function xLng(x) {
    return (x - 0.5) * 360;
}
function yLat(y) {
    var y2 = (180 - y * 360) * Math.PI / 180;
    return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}

function extend(dest, src) {
    for (var id in src) dest[id] = src[id];
    return dest;
}

function getX(p) {
    return p.x;
}
function getY(p) {
    return p.y;
}

},{"kdbush":26}],43:[function(require,module,exports){
'use strict';

module.exports = TinyQueue;

function TinyQueue(data, compare) {
    if (!(this instanceof TinyQueue)) return new TinyQueue(data, compare);

    this.data = data || [];
    this.length = this.data.length;
    this.compare = compare || defaultCompare;

    if (this.length > 0) {
        for (var i = (this.length >> 1); i >= 0; i--) this._down(i);
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

TinyQueue.prototype = {

    push: function (item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    },

    pop: function () {
        if (this.length === 0) return undefined;
        var top = this.data[0];
        this.length--;
        if (this.length > 0) {
            this.data[0] = this.data[this.length];
            this._down(0);
        }
        this.data.pop();
        return top;
    },

    peek: function () {
        return this.data[0];
    },

    _up: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var item = data[pos];

        while (pos > 0) {
            var parent = (pos - 1) >> 1;
            var current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    },

    _down: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var len = this.length;
        var halfLen = len >> 1;
        var item = data[pos];

        while (pos < halfLen) {
            var left = (pos << 1) + 1;
            var right = left + 1;
            var best = data[left];

            if (right < len && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    }
};

},{}],44:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],45:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],46:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./support/isBuffer":45,"_process":40,"inherits":44}],47:[function(require,module,exports){
var Pbf = require('pbf')
var GeoJSONWrapper = require('./lib/geojson_wrapper')

module.exports = fromVectorTileJs
module.exports.fromVectorTileJs = fromVectorTileJs
module.exports.fromGeojsonVt = fromGeojsonVt
module.exports.GeoJSONWrapper = GeoJSONWrapper

/**
 * Serialize a vector-tile-js-created tile to pbf
 *
 * @param {Object} tile
 * @return {Buffer} uncompressed, pbf-serialized tile data
 */
function fromVectorTileJs (tile) {
  var out = new Pbf()
  writeTile(tile, out)
  return out.finish()
}

/**
 * Serialized a geojson-vt-created tile to pbf.
 *
 * @param {Object} layers - An object mapping layer names to geojson-vt-created vector tile objects
 * @return {Buffer} uncompressed, pbf-serialized tile data
 */
function fromGeojsonVt (layers) {
  var l = {}
  for (var k in layers) {
    l[k] = new GeoJSONWrapper(layers[k].features)
    l[k].name = k
  }
  return fromVectorTileJs({layers: l})
}

function writeTile (tile, pbf) {
  for (var key in tile.layers) {
    pbf.writeMessage(3, writeLayer, tile.layers[key])
  }
}

function writeLayer (layer, pbf) {
  pbf.writeVarintField(15, layer.version || 1)
  pbf.writeStringField(1, layer.name || '')
  pbf.writeVarintField(5, layer.extent || 4096)

  var i
  var context = {
    keys: [],
    values: [],
    keycache: {},
    valuecache: {}
  }

  for (i = 0; i < layer.length; i++) {
    context.feature = layer.feature(i)
    pbf.writeMessage(2, writeFeature, context)
  }

  var keys = context.keys
  for (i = 0; i < keys.length; i++) {
    pbf.writeStringField(3, keys[i])
  }

  var values = context.values
  for (i = 0; i < values.length; i++) {
    pbf.writeMessage(4, writeValue, values[i])
  }
}

function writeFeature (context, pbf) {
  var feature = context.feature

  if (feature.id !== undefined) {
    pbf.writeVarintField(1, feature.id)
  }

  pbf.writeMessage(2, writeProperties, context)
  pbf.writeVarintField(3, feature.type)
  pbf.writeMessage(4, writeGeometry, feature)
}

function writeProperties (context, pbf) {
  var feature = context.feature
  var keys = context.keys
  var values = context.values
  var keycache = context.keycache
  var valuecache = context.valuecache

  for (var key in feature.properties) {
    var keyIndex = keycache[key]
    if (typeof keyIndex === 'undefined') {
      keys.push(key)
      keyIndex = keys.length - 1
      keycache[key] = keyIndex
    }
    pbf.writeVarint(keyIndex)

    var value = feature.properties[key]
    var type = typeof value
    if (type !== 'string' && type !== 'boolean' && type !== 'number') {
      value = JSON.stringify(value)
    }
    var valueKey = type + ':' + value
    var valueIndex = valuecache[valueKey]
    if (typeof valueIndex === 'undefined') {
      values.push(value)
      valueIndex = values.length - 1
      valuecache[valueKey] = valueIndex
    }
    pbf.writeVarint(valueIndex)
  }
}

function command (cmd, length) {
  return (length << 3) + (cmd & 0x7)
}

function zigzag (num) {
  return (num << 1) ^ (num >> 31)
}

function writeGeometry (feature, pbf) {
  var geometry = feature.loadGeometry()
  var type = feature.type
  var x = 0
  var y = 0
  var rings = geometry.length
  for (var r = 0; r < rings; r++) {
    var ring = geometry[r]
    var count = 1
    if (type === 1) {
      count = ring.length
    }
    pbf.writeVarint(command(1, count)) // moveto
    for (var i = 0; i < ring.length; i++) {
      if (i === 1 && type !== 1) {
        pbf.writeVarint(command(2, ring.length - 1)) // lineto
      }
      var dx = ring[i].x - x
      var dy = ring[i].y - y
      pbf.writeVarint(zigzag(dx))
      pbf.writeVarint(zigzag(dy))
      x += dx
      y += dy
    }
  }
}

function writeValue (value, pbf) {
  var type = typeof value
  if (type === 'string') {
    pbf.writeStringField(1, value)
  } else if (type === 'boolean') {
    pbf.writeBooleanField(7, value)
  } else if (type === 'number') {
    if (value % 1 !== 0) {
      pbf.writeDoubleField(3, value)
    } else if (value < 0) {
      pbf.writeSVarintField(6, value)
    } else {
      pbf.writeVarintField(5, value)
    }
  }
}

},{"./lib/geojson_wrapper":48,"pbf":39}],48:[function(require,module,exports){
'use strict'

var Point = require('@mapbox/point-geometry')
var VectorTileFeature = require('@mapbox/vector-tile').VectorTileFeature

module.exports = GeoJSONWrapper

// conform to vectortile api
function GeoJSONWrapper (features) {
  this.features = features
  this.length = features.length
}

GeoJSONWrapper.prototype.feature = function (i) {
  return new FeatureWrapper(this.features[i])
}

function FeatureWrapper (feature) {
  this.id = typeof feature.id === 'number' ? feature.id : undefined
  this.type = feature.type
  this.rawGeometry = feature.type === 1 ? [feature.geometry] : feature.geometry
  this.properties = feature.tags
  this.extent = 4096
}

FeatureWrapper.prototype.loadGeometry = function () {
  var rings = this.rawGeometry
  this.geometry = []

  for (var i = 0; i < rings.length; i++) {
    var ring = rings[i]
    var newRing = []
    for (var j = 0; j < ring.length; j++) {
      newRing.push(new Point(ring[j][0], ring[j][1]))
    }
    this.geometry.push(newRing)
  }
  return this.geometry
}

FeatureWrapper.prototype.bbox = function () {
  if (!this.geometry) this.loadGeometry()

  var rings = this.geometry
  var x1 = Infinity
  var x2 = -Infinity
  var y1 = Infinity
  var y2 = -Infinity

  for (var i = 0; i < rings.length; i++) {
    var ring = rings[i]

    for (var j = 0; j < ring.length; j++) {
      var coord = ring[j]

      x1 = Math.min(x1, coord.x)
      x2 = Math.max(x2, coord.x)
      y1 = Math.min(y1, coord.y)
      y2 = Math.max(y2, coord.y)
    }
  }

  return [x1, y1, x2, y2]
}

FeatureWrapper.prototype.toGeoJSON = VectorTileFeature.prototype.toGeoJSON

},{"@mapbox/point-geometry":2,"@mapbox/vector-tile":6}],49:[function(require,module,exports){
var bundleFn = arguments[3];
var sources = arguments[4];
var cache = arguments[5];

var stringify = JSON.stringify;

module.exports = function (fn, options) {
    var wkey;
    var cacheKeys = Object.keys(cache);

    for (var i = 0, l = cacheKeys.length; i < l; i++) {
        var key = cacheKeys[i];
        var exp = cache[key].exports;
        // Using babel as a transpiler to use esmodule, the export will always
        // be an object with the default export as a property of it. To ensure
        // the existing api and babel esmodule exports are both supported we
        // check for both
        if (exp === fn || exp && exp.default === fn) {
            wkey = key;
            break;
        }
    }

    if (!wkey) {
        wkey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
        var wcache = {};
        for (var i = 0, l = cacheKeys.length; i < l; i++) {
            var key = cacheKeys[i];
            wcache[key] = key;
        }
        sources[wkey] = [
            Function(['require','module','exports'], '(' + fn + ')(self)'),
            wcache
        ];
    }
    var skey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);

    var scache = {}; scache[wkey] = wkey;
    sources[skey] = [
        Function(['require'], (
            // try to call default if defined to also support babel esmodule
            // exports
            'var f = require(' + stringify(wkey) + ');' +
            '(f.default ? f.default : f)(self);'
        )),
        scache
    ];

    var workerSources = {};
    resolveSources(skey);

    function resolveSources(key) {
        workerSources[key] = true;

        for (var depPath in sources[key][1]) {
            var depKey = sources[key][1][depPath];
            if (!workerSources[depKey]) {
                resolveSources(depKey);
            }
        }
    }

    var src = '(' + bundleFn + ')({'
        + Object.keys(workerSources).map(function (key) {
            return stringify(key) + ':['
                + sources[key][0]
                + ',' + stringify(sources[key][1]) + ']'
            ;
        }).join(',')
        + '},{},[' + stringify(skey) + '])'
    ;

    var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

    var blob = new Blob([src], { type: 'text/javascript' });
    if (options && options.bare) { return blob; }
    var workerUrl = URL.createObjectURL(blob);
    var worker = new Worker(workerUrl);
    worker.objectURL = workerUrl;
    return worker;
};

},{}],50:[function(require,module,exports){
module.exports.RADIUS = 6378137;
module.exports.FLATTENING = 1/298.257223563;
module.exports.POLAR_RADIUS = 6356752.3142;

},{}],51:[function(require,module,exports){
module.exports={
  "version": "0.42.2"
}
},{}],52:[function(require,module,exports){
'use strict';//      

var util = require('../util/util');

                                                             
                                        
                                                   
                                                

                                
                  
                              
                 
                       
                        
                                        
 

                                  
                               
                         
                         
 

                                
                 
                           
 

                              
                               
                  
                             
 

/**
 * The `Bucket` interface is the single point of knowledge about turning vector
 * tiles into WebGL buffers.
 *
 * `Bucket` is an abstract interface. An implementation exists for each style layer type.
 * Create a bucket via the `StyleLayer#createBucket` method.
 *
 * The concrete bucket types, using layout options from the style layer,
 * transform feature geometries into vertex and index data for use by the
 * vertex shader.  They also (via `ProgramConfiguration`) use feature
 * properties and the zoom level to populate the attributes needed for
 * data-driven styling.
 *
 * Buckets are designed to be built on a worker thread and then serialized and
 * transferred back to the main thread for rendering.  On the worker side, a
 * bucket's vertex, index, and attribute data is stored in `bucket.arrays:
 * ArrayGroup`.  When a bucket's data is serialized and sent back to the main
 * thread, is gets deserialized (using `new Bucket(serializedBucketData)`, with
 * the array data now stored in `bucket.buffers: BufferGroup`.  BufferGroups
 * hold the same data as ArrayGroups, but are tuned for consumption by WebGL.
 *
 * @private
 */
                         
                                                                                 
                       
                                                                     

                                            
                      

       
                                                                                 
                                                                                
                                                                                   
      
               
       
                    
 

module.exports = {
    deserialize: function deserialize(input                         , style       )                     {
        var output = {};

        // Guard against the case where the map's style has been set to null while
        // this bucket has been parsing.
        if (!style) { return output; }

        for (var i = 0, list = input; i < list.length; i += 1) {
            var serialized = list[i];

            var layers = serialized.layerIds
                .map(function (id) { return style.getLayer(id); })
                .filter(Boolean);

            if (layers.length === 0) {
                continue;
            }

            var bucket = layers[0].createBucket(util.extend({layers: layers}, serialized));
            for (var i$1 = 0, list$1 = layers; i$1 < list$1.length; i$1 += 1) {
                var layer = list$1[i$1];

                output[layer.id] = bucket;
            }
        }

        return output;
    }
};

},{"../util/util":267}],53:[function(require,module,exports){
'use strict';//      

var ref = require('../segment');
var SegmentVector = ref.SegmentVector;
var VertexBuffer = require('../../gl/vertex_buffer');
var IndexBuffer = require('../../gl/index_buffer');
var ref$1 = require('../program_configuration');
var ProgramConfigurationSet = ref$1.ProgramConfigurationSet;
var createVertexArrayType = require('../vertex_array_type');
var ref$2 = require('../index_array_type');
var TriangleIndexArray = ref$2.TriangleIndexArray;
var loadGeometry = require('../load_geometry');
var EXTENT = require('../extent');

                                                                                            
                                                               
                                                      
                                                         
                                                

var circleInterface = {
    layoutAttributes: [
        {name: 'a_pos', components: 2, type: 'Int16'}
    ],
    indexArrayType: TriangleIndexArray,

    paintAttributes: [
        {property: 'circle-color'},
        {property: 'circle-radius'},
        {property: 'circle-blur'},
        {property: 'circle-opacity'},
        {property: 'circle-stroke-color'},
        {property: 'circle-stroke-width'},
        {property: 'circle-stroke-opacity'}
    ]
};

function addCircleVertex(layoutVertexArray, x, y, extrudeX, extrudeY) {
    layoutVertexArray.emplaceBack(
        (x * 2) + ((extrudeX + 1) / 2),
        (y * 2) + ((extrudeY + 1) / 2));
}

var LayoutVertexArrayType = createVertexArrayType(circleInterface.layoutAttributes);

/**
 * Circles are represented by two triangles.
 *
 * Each corner has a pos that is the center of the circle and an extrusion
 * vector that is where it points.
 * @private
 */
var CircleBucket = function CircleBucket(options ) {
    this.zoom = options.zoom;
    this.overscaling = options.overscaling;
    this.layers = options.layers;
    this.index = options.index;

    this.layoutVertexArray = new LayoutVertexArrayType(options.layoutVertexArray);
    this.indexArray = new TriangleIndexArray(options.indexArray);
    this.segments = new SegmentVector(options.segments);
    this.programConfigurations = new ProgramConfigurationSet(
        this.constructor.programInterface, options.layers, options.zoom, options.programConfigurations);
};

CircleBucket.prototype.populate = function populate (features                   , options                ) {
        var this$1 = this;

    for (var i = 0, list = features; i < list.length; i += 1) {
        var ref = list[i];
            var feature = ref.feature;
            var index = ref.index;
            var sourceLayerIndex = ref.sourceLayerIndex;

            if (this$1.layers[0]._featureFilter({zoom: this$1.zoom}, feature)) {
            var geometry = loadGeometry(feature);
            this$1.addFeature(feature, geometry);
            options.featureIndex.insert(feature, geometry, index, sourceLayerIndex, this$1.index);
        }
    }
};

CircleBucket.prototype.isEmpty = function isEmpty () {
    return this.layoutVertexArray.length === 0;
};

CircleBucket.prototype.serialize = function serialize (transferables                  )               {
    return {
        zoom: this.zoom,
        layerIds: this.layers.map(function (l) { return l.id; }),
        layoutVertexArray: this.layoutVertexArray.serialize(transferables),
        indexArray: this.indexArray.serialize(transferables),
        programConfigurations: this.programConfigurations.serialize(transferables),
        segments: this.segments.get(),
    };
};

CircleBucket.prototype.upload = function upload (gl                   ) {
    this.layoutVertexBuffer = new VertexBuffer(gl, this.layoutVertexArray);
    this.indexBuffer = new IndexBuffer(gl, this.indexArray);
    this.programConfigurations.upload(gl);
};

CircleBucket.prototype.destroy = function destroy () {
    if (!this.layoutVertexBuffer) { return; }
    this.layoutVertexBuffer.destroy();
    this.indexBuffer.destroy();
    this.programConfigurations.destroy();
    this.segments.destroy();
};

CircleBucket.prototype.addFeature = function addFeature (feature               , geometry                 ) {
        var this$1 = this;

    for (var i = 0, list = geometry; i < list.length; i += 1) {
        var ring = list[i];

            for (var i$1 = 0, list$1 = ring; i$1 < list$1.length; i$1 += 1) {
            var point = list$1[i$1];

                var x = point.x;
            var y = point.y;

            // Do not include points that are outside the tile boundaries.
            if (x < 0 || x >= EXTENT || y < 0 || y >= EXTENT) { continue; }

            // this geometry will be of the Point type, and we'll derive
            // two triangles from it.
            //
            // â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”
            // â”‚ 3 2 â”‚
            // â”‚     â”‚
            // â”‚ 0 1 â”‚
            // â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

            var segment = this$1.segments.prepareSegment(4, this$1.layoutVertexArray, this$1.indexArray);
            var index = segment.vertexLength;

            addCircleVertex(this$1.layoutVertexArray, x, y, -1, -1);
            addCircleVertex(this$1.layoutVertexArray, x, y, 1, -1);
            addCircleVertex(this$1.layoutVertexArray, x, y, 1, 1);
            addCircleVertex(this$1.layoutVertexArray, x, y, -1, 1);

            this$1.indexArray.emplaceBack(index, index + 1, index + 2);
            this$1.indexArray.emplaceBack(index, index + 3, index + 2);

            segment.vertexLength += 4;
            segment.primitiveLength += 2;
        }
    }

    this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, feature);
};

CircleBucket.programInterface = circleInterface;

module.exports = CircleBucket;

},{"../../gl/index_buffer":72,"../../gl/vertex_buffer":73,"../extent":59,"../index_array_type":61,"../load_geometry":62,"../program_configuration":64,"../segment":66,"../vertex_array_type":67}],54:[function(require,module,exports){
'use strict';//      

var ref = require('../segment');
var SegmentVector = ref.SegmentVector;
var VertexBuffer = require('../../gl/vertex_buffer');
var IndexBuffer = require('../../gl/index_buffer');
var ref$1 = require('../program_configuration');
var ProgramConfigurationSet = ref$1.ProgramConfigurationSet;
var createVertexArrayType = require('../vertex_array_type');
var ref$2 = require('../index_array_type');
var LineIndexArray = ref$2.LineIndexArray;
var TriangleIndexArray = ref$2.TriangleIndexArray;
var loadGeometry = require('../load_geometry');
var earcut = require('earcut');
var classifyRings = require('../../util/classify_rings');
var assert = require('assert');
var EARCUT_MAX_RINGS = 500;

                                                                                            
                                                               
                                                      
                                                         
                                                

var fillInterface = {
    layoutAttributes: [
        {name: 'a_pos', components: 2, type: 'Int16'}
    ],
    indexArrayType: TriangleIndexArray,
    indexArrayType2: LineIndexArray,

    paintAttributes: [
        {property: 'fill-color'},
        {property: 'fill-outline-color'},
        {property: 'fill-opacity'}
    ]
};

var LayoutVertexArrayType = createVertexArrayType(fillInterface.layoutAttributes);

var FillBucket = function FillBucket(options ) {
    this.zoom = options.zoom;
    this.overscaling = options.overscaling;
    this.layers = options.layers;
    this.index = options.index;

    this.layoutVertexArray = new LayoutVertexArrayType(options.layoutVertexArray);
    this.indexArray = new TriangleIndexArray(options.indexArray);
    this.indexArray2 = new LineIndexArray(options.indexArray2);
    this.programConfigurations = new ProgramConfigurationSet(fillInterface, options.layers, options.zoom, options.programConfigurations);
    this.segments = new SegmentVector(options.segments);
    this.segments2 = new SegmentVector(options.segments2);
};

FillBucket.prototype.populate = function populate (features                   , options                ) {
        var this$1 = this;

    for (var i = 0, list = features; i < list.length; i += 1) {
        var ref = list[i];
            var feature = ref.feature;
            var index = ref.index;
            var sourceLayerIndex = ref.sourceLayerIndex;

            if (this$1.layers[0]._featureFilter({zoom: this$1.zoom}, feature)) {
            var geometry = loadGeometry(feature);
            this$1.addFeature(feature, geometry);
            options.featureIndex.insert(feature, geometry, index, sourceLayerIndex, this$1.index);
        }
    }
};

FillBucket.prototype.isEmpty = function isEmpty () {
    return this.layoutVertexArray.length === 0;
};

FillBucket.prototype.serialize = function serialize (transferables                  )               {
    return {
        zoom: this.zoom,
        layerIds: this.layers.map(function (l) { return l.id; }),
        layoutVertexArray: this.layoutVertexArray.serialize(transferables),
        indexArray: this.indexArray.serialize(transferables),
        indexArray2: this.indexArray2.serialize(transferables),
        programConfigurations: this.programConfigurations.serialize(transferables),
        segments: this.segments.get(),
        segments2: this.segments2.get()
    };
};

FillBucket.prototype.upload = function upload (gl                   ) {
    this.layoutVertexBuffer = new VertexBuffer(gl, this.layoutVertexArray);
    this.indexBuffer = new IndexBuffer(gl, this.indexArray);
    this.indexBuffer2 = new IndexBuffer(gl, this.indexArray2);
    this.programConfigurations.upload(gl);
};

FillBucket.prototype.destroy = function destroy () {
    if (!this.layoutVertexBuffer) { return; }
    this.layoutVertexBuffer.destroy();
    this.indexBuffer.destroy();
    this.indexBuffer2.destroy();
    this.programConfigurations.destroy();
    this.segments.destroy();
    this.segments2.destroy();
};

FillBucket.prototype.addFeature = function addFeature (feature               , geometry                 ) {
        var this$1 = this;

    for (var i$2 = 0, list = classifyRings(geometry, EARCUT_MAX_RINGS); i$2 < list.length; i$2 += 1) {
        var polygon = list[i$2];

            var numVertices = 0;
        for (var i$3 = 0, list$1 = polygon; i$3 < list$1.length; i$3 += 1) {
            var ring = list$1[i$3];

                numVertices += ring.length;
        }

        var triangleSegment = this$1.segments.prepareSegment(numVertices, this$1.layoutVertexArray, this$1.indexArray);
        var triangleIndex = triangleSegment.vertexLength;

        var flattened = [];
        var holeIndices = [];

        for (var i$4 = 0, list$2 = polygon; i$4 < list$2.length; i$4 += 1) {
            var ring$1 = list$2[i$4];

                if (ring$1.length === 0) {
                continue;
            }

            if (ring$1 !== polygon[0]) {
                holeIndices.push(flattened.length / 2);
            }

            var lineSegment = this$1.segments2.prepareSegment(ring$1.length, this$1.layoutVertexArray, this$1.indexArray2);
            var lineIndex = lineSegment.vertexLength;

            this$1.layoutVertexArray.emplaceBack(ring$1[0].x, ring$1[0].y);
            this$1.indexArray2.emplaceBack(lineIndex + ring$1.length - 1, lineIndex);
            flattened.push(ring$1[0].x);
            flattened.push(ring$1[0].y);

            for (var i = 1; i < ring$1.length; i++) {
                this$1.layoutVertexArray.emplaceBack(ring$1[i].x, ring$1[i].y);
                this$1.indexArray2.emplaceBack(lineIndex + i - 1, lineIndex + i);
                flattened.push(ring$1[i].x);
                flattened.push(ring$1[i].y);
            }

            lineSegment.vertexLength += ring$1.length;
            lineSegment.primitiveLength += ring$1.length;
        }

        var indices = earcut(flattened, holeIndices);
        assert(indices.length % 3 === 0);

        for (var i$1 = 0; i$1 < indices.length; i$1 += 3) {
            this$1.indexArray.emplaceBack(
                triangleIndex + indices[i$1],
                triangleIndex + indices[i$1 + 1],
                triangleIndex + indices[i$1 + 2]);
        }

        triangleSegment.vertexLength += numVertices;
        triangleSegment.primitiveLength += indices.length / 3;
    }

    this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, feature);
};

FillBucket.programInterface = fillInterface;

module.exports = FillBucket;

},{"../../gl/index_buffer":72,"../../gl/vertex_buffer":73,"../../util/classify_rings":249,"../index_array_type":61,"../load_geometry":62,"../program_configuration":64,"../segment":66,"../vertex_array_type":67,"assert":11,"earcut":13}],55:[function(require,module,exports){
'use strict';//      

var ref = require('../segment');
var SegmentVector = ref.SegmentVector;
var MAX_VERTEX_ARRAY_LENGTH = ref.MAX_VERTEX_ARRAY_LENGTH;
var VertexBuffer = require('../../gl/vertex_buffer');
var IndexBuffer = require('../../gl/index_buffer');
var ref$1 = require('../program_configuration');
var ProgramConfigurationSet = ref$1.ProgramConfigurationSet;
var createVertexArrayType = require('../vertex_array_type');
var ref$2 = require('../index_array_type');
var TriangleIndexArray = ref$2.TriangleIndexArray;
var loadGeometry = require('../load_geometry');
var EXTENT = require('../extent');
var earcut = require('earcut');
var classifyRings = require('../../util/classify_rings');
var assert = require('assert');
var EARCUT_MAX_RINGS = 500;

                                                                                            
                                                               
                                                      
                                                         
                                                

var fillExtrusionInterface = {
    layoutAttributes: [
        {name: 'a_pos',          components: 2, type: 'Int16'},
        {name: 'a_normal',       components: 3, type: 'Int16'},
        {name: 'a_edgedistance', components: 1, type: 'Int16'}
    ],
    indexArrayType: TriangleIndexArray,

    paintAttributes: [
        {property: 'fill-extrusion-base'},
        {property: 'fill-extrusion-height'},
        {property: 'fill-extrusion-color'}
    ]
};

var FACTOR = Math.pow(2, 13);

function addVertex(vertexArray, x, y, nx, ny, nz, t, e) {
    vertexArray.emplaceBack(
        // a_pos
        x,
        y,
        // a_normal
        Math.floor(nx * FACTOR) * 2 + t,
        ny * FACTOR * 2,
        nz * FACTOR * 2,

        // a_edgedistance
        Math.round(e)
    );
}

var LayoutVertexArrayType = createVertexArrayType(fillExtrusionInterface.layoutAttributes);

var FillExtrusionBucket = function FillExtrusionBucket(options ) {
    this.zoom = options.zoom;
    this.overscaling = options.overscaling;
    this.layers = options.layers;
    this.index = options.index;

    this.layoutVertexArray = new LayoutVertexArrayType(options.layoutVertexArray);
    this.indexArray = new TriangleIndexArray(options.indexArray);
    this.programConfigurations = new ProgramConfigurationSet(fillExtrusionInterface, options.layers, options.zoom, options.programConfigurations);
    this.segments = new SegmentVector(options.segments);
};

FillExtrusionBucket.prototype.populate = function populate (features                   , options                ) {
        var this$1 = this;

    for (var i = 0, list = features; i < list.length; i += 1) {
        var ref = list[i];
            var feature = ref.feature;
            var index = ref.index;
            var sourceLayerIndex = ref.sourceLayerIndex;

            if (this$1.layers[0]._featureFilter({zoom: this$1.zoom}, feature)) {
            var geometry = loadGeometry(feature);
            this$1.addFeature(feature, geometry);
            options.featureIndex.insert(feature, geometry, index, sourceLayerIndex, this$1.index);
        }
    }
};

FillExtrusionBucket.prototype.isEmpty = function isEmpty () {
    return this.layoutVertexArray.length === 0;
};

FillExtrusionBucket.prototype.serialize = function serialize (transferables                  )               {
    return {
        zoom: this.zoom,
        layerIds: this.layers.map(function (l) { return l.id; }),
        layoutVertexArray: this.layoutVertexArray.serialize(transferables),
        indexArray: this.indexArray.serialize(transferables),
        programConfigurations: this.programConfigurations.serialize(transferables),
        segments: this.segments.get(),
    };
};

FillExtrusionBucket.prototype.upload = function upload (gl                   ) {
    this.layoutVertexBuffer = new VertexBuffer(gl, this.layoutVertexArray);
    this.indexBuffer = new IndexBuffer(gl, this.indexArray);
    this.programConfigurations.upload(gl);
};

FillExtrusionBucket.prototype.destroy = function destroy () {
    if (!this.layoutVertexBuffer) { return; }
    this.layoutVertexBuffer.destroy();
    this.indexBuffer.destroy();
    this.programConfigurations.destroy();
    this.segments.destroy();
};

FillExtrusionBucket.prototype.addFeature = function addFeature (feature               , geometry                 ) {
        var this$1 = this;

    for (var i$1 = 0, list = classifyRings(geometry, EARCUT_MAX_RINGS); i$1 < list.length; i$1 += 1) {
        var polygon = list[i$1];

            var numVertices = 0;
        for (var i$2 = 0, list$1 = polygon; i$2 < list$1.length; i$2 += 1) {
            var ring = list$1[i$2];

                numVertices += ring.length;
        }

        var segment = this$1.segments.prepareSegment(4, this$1.layoutVertexArray, this$1.indexArray);

        for (var i$3 = 0, list$2 = polygon; i$3 < list$2.length; i$3 += 1) {
            var ring$1 = list$2[i$3];

                if (ring$1.length === 0) {
                continue;
            }

            var edgeDistance = 0;

            for (var p = 0; p < ring$1.length; p++) {
                var p1 = ring$1[p];

                if (p >= 1) {
                    var p2 = ring$1[p - 1];

                    if (!isBoundaryEdge(p1, p2)) {
                        if (segment.vertexLength + 4 > MAX_VERTEX_ARRAY_LENGTH) {
                            segment = this$1.segments.prepareSegment(4, this$1.layoutVertexArray, this$1.indexArray);
                        }

                        var perp = p1.sub(p2)._perp()._unit();

                        addVertex(this$1.layoutVertexArray, p1.x, p1.y, perp.x, perp.y, 0, 0, edgeDistance);
                        addVertex(this$1.layoutVertexArray, p1.x, p1.y, perp.x, perp.y, 0, 1, edgeDistance);

                        edgeDistance += p2.dist(p1);

                        addVertex(this$1.layoutVertexArray, p2.x, p2.y, perp.x, perp.y, 0, 0, edgeDistance);
                        addVertex(this$1.layoutVertexArray, p2.x, p2.y, perp.x, perp.y, 0, 1, edgeDistance);

                        var bottomRight = segment.vertexLength;

                        this$1.indexArray.emplaceBack(bottomRight, bottomRight + 1, bottomRight + 2);
                        this$1.indexArray.emplaceBack(bottomRight + 1, bottomRight + 2, bottomRight + 3);

                        segment.vertexLength += 4;
                        segment.primitiveLength += 2;
                    }
                }
            }
        }

        if (segment.vertexLength + numVertices > MAX_VERTEX_ARRAY_LENGTH) {
            segment = this$1.segments.prepareSegment(numVertices, this$1.layoutVertexArray, this$1.indexArray);
        }

        var flattened = [];
        var holeIndices = [];
        var triangleIndex = segment.vertexLength;

        for (var i$4 = 0, list$3 = polygon; i$4 < list$3.length; i$4 += 1) {
            var ring$2 = list$3[i$4];

                if (ring$2.length === 0) {
                continue;
            }

            if (ring$2 !== polygon[0]) {
                holeIndices.push(flattened.length / 2);
            }

            for (var i = 0; i < ring$2.length; i++) {
                var p$1 = ring$2[i];

                addVertex(this$1.layoutVertexArray, p$1.x, p$1.y, 0, 0, 1, 1, 0);

                flattened.push(p$1.x);
                flattened.push(p$1.y);
            }
        }

        var indices = earcut(flattened, holeIndices);
        assert(indices.length % 3 === 0);

        for (var j = 0; j < indices.length; j += 3) {
            this$1.indexArray.emplaceBack(
                triangleIndex + indices[j],
                triangleIndex + indices[j + 1],
                triangleIndex + indices[j + 2]);
        }

        segment.primitiveLength += indices.length / 3;
        segment.vertexLength += numVertices;
    }

    this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, feature);
};

FillExtrusionBucket.programInterface = fillExtrusionInterface;

module.exports = FillExtrusionBucket;

function isBoundaryEdge(p1, p2) {
    return (p1.x === p2.x && (p1.x < 0 || p1.x > EXTENT)) ||
        (p1.y === p2.y && (p1.y < 0 || p1.y > EXTENT));
}

},{"../../gl/index_buffer":72,"../../gl/vertex_buffer":73,"../../util/classify_rings":249,"../extent":59,"../index_array_type":61,"../load_geometry":62,"../program_configuration":64,"../segment":66,"../vertex_array_type":67,"assert":11,"earcut":13}],56:[function(require,module,exports){
'use strict';//      

var CircleBucket = require('./circle_bucket');

var heatmapInterface = {
    layoutAttributes: CircleBucket.programInterface.layoutAttributes,
    indexArrayType: CircleBucket.programInterface.indexArrayType,

    paintAttributes: [
        {property: 'heatmap-weight'}
    ]
};

var HeatmapBucket = (function (CircleBucket) {
    function HeatmapBucket () {
        CircleBucket.apply(this, arguments);
    }if ( CircleBucket ) HeatmapBucket.__proto__ = CircleBucket;
    HeatmapBucket.prototype = Object.create( CircleBucket && CircleBucket.prototype );
    HeatmapBucket.prototype.constructor = HeatmapBucket;

    

    return HeatmapBucket;
}(CircleBucket));

HeatmapBucket.programInterface = heatmapInterface;

module.exports = HeatmapBucket;

},{"./circle_bucket":53}],57:[function(require,module,exports){
'use strict';//      

var ref = require('../segment');
var SegmentVector = ref.SegmentVector;
var VertexBuffer = require('../../gl/vertex_buffer');
var IndexBuffer = require('../../gl/index_buffer');
var ref$1 = require('../program_configuration');
var ProgramConfigurationSet = ref$1.ProgramConfigurationSet;
var createVertexArrayType = require('../vertex_array_type');
var ref$2 = require('../index_array_type');
var TriangleIndexArray = ref$2.TriangleIndexArray;
var loadGeometry = require('../load_geometry');
var EXTENT = require('../extent');
var vectorTileFeatureTypes = require('@mapbox/vector-tile').VectorTileFeature.types;

                                                                                            
                                                               
                                                                           
                                                
                                        
                                                         

// NOTE ON EXTRUDE SCALE:
// scale the extrusion vector so that the normal length is this value.
// contains the "texture" normals (-1..1). this is distinct from the extrude
// normals for line joins, because the x-value remains 0 for the texture
// normal array, while the extrude normal actually moves the vertex to create
// the acute/bevelled line join.
var EXTRUDE_SCALE = 63;

/*
 * Sharp corners cause dashed lines to tilt because the distance along the line
 * is the same at both the inner and outer corners. To improve the appearance of
 * dashed lines we add extra points near sharp corners so that a smaller part
 * of the line is tilted.
 *
 * COS_HALF_SHARP_CORNER controls how sharp a corner has to be for us to add an
 * extra vertex. The default is 75 degrees.
 *
 * The newly created vertices are placed SHARP_CORNER_OFFSET pixels from the corner.
 */
var COS_HALF_SHARP_CORNER = Math.cos(75 / 2 * (Math.PI / 180));
var SHARP_CORNER_OFFSET = 15;

// The number of bits that is used to store the line distance in the buffer.
var LINE_DISTANCE_BUFFER_BITS = 15;

// We don't have enough bits for the line distance as we'd like to have, so
// use this value to scale the line distance (in tile units) down to a smaller
// value. This lets us store longer distances while sacrificing precision.
var LINE_DISTANCE_SCALE = 1 / 2;

// The maximum line distance, in tile units, that fits in the buffer.
var MAX_LINE_DISTANCE = Math.pow(2, LINE_DISTANCE_BUFFER_BITS - 1) / LINE_DISTANCE_SCALE;

var lineInterface = {
    layoutAttributes: [
        {name: 'a_pos_normal', components: 4, type: 'Int16'},
        {name: 'a_data', components: 4, type: 'Uint8'}
    ],
    paintAttributes: [
        {property: 'line-color'},
        {property: 'line-blur'},
        {property: 'line-opacity'},
        {property: 'line-gap-width', name: 'gapwidth'},
        {property: 'line-offset'},
        {property: 'line-width'},
        {property: 'line-floorwidth'} ],
    indexArrayType: TriangleIndexArray
};

function addLineVertex(layoutVertexBuffer, point       , extrude       , round         , up         , dir        , linesofar        ) {
    layoutVertexBuffer.emplaceBack(
        // a_pos_normal
        point.x,
        point.y,
        round ? 1 : 0,
        up ? 1 : -1,
        // a_data
        // add 128 to store a byte in an unsigned byte
        Math.round(EXTRUDE_SCALE * extrude.x) + 128,
        Math.round(EXTRUDE_SCALE * extrude.y) + 128,
        // Encode the -1/0/1 direction value into the first two bits of .z of a_data.
        // Combine it with the lower 6 bits of `linesofar` (shifted by 2 bites to make
        // room for the direction value). The upper 8 bits of `linesofar` are placed in
        // the `w` component. `linesofar` is scaled down by `LINE_DISTANCE_SCALE` so that
        // we can store longer distances while sacrificing precision.
        ((dir === 0 ? 0 : (dir < 0 ? -1 : 1)) + 1) | (((linesofar * LINE_DISTANCE_SCALE) & 0x3F) << 2),
        (linesofar * LINE_DISTANCE_SCALE) >> 6);
}

var LayoutVertexArrayType = createVertexArrayType(lineInterface.layoutAttributes);

/**
 * @private
 */
var LineBucket = function LineBucket(options ) {
    this.zoom = options.zoom;
    this.overscaling = options.overscaling;
    this.layers = options.layers;
    this.index = options.index;

    this.layoutVertexArray = new LayoutVertexArrayType(options.layoutVertexArray);
    this.indexArray = new TriangleIndexArray(options.indexArray);
    this.programConfigurations = new ProgramConfigurationSet(lineInterface, options.layers, options.zoom, options.programConfigurations);
    this.segments = new SegmentVector(options.segments);
};

LineBucket.prototype.populate = function populate (features                   , options                ) {
        var this$1 = this;

    for (var i = 0, list = features; i < list.length; i += 1) {
        var ref = list[i];
            var feature = ref.feature;
            var index = ref.index;
            var sourceLayerIndex = ref.sourceLayerIndex;

            if (this$1.layers[0]._featureFilter({zoom: this$1.zoom}, feature)) {
            var geometry = loadGeometry(feature);
            this$1.addFeature(feature, geometry);
            options.featureIndex.insert(feature, geometry, index, sourceLayerIndex, this$1.index);
        }
    }
};

LineBucket.prototype.isEmpty = function isEmpty () {
    return this.layoutVertexArray.length === 0;
};

LineBucket.prototype.serialize = function serialize (transferables                  )               {
    return {
        zoom: this.zoom,
        layerIds: this.layers.map(function (l) { return l.id; }),
        layoutVertexArray: this.layoutVertexArray.serialize(transferables),
        indexArray: this.indexArray.serialize(transferables),
        programConfigurations: this.programConfigurations.serialize(transferables),
        segments: this.segments.get(),
    };
};

LineBucket.prototype.upload = function upload (gl                   ) {
    this.layoutVertexBuffer = new VertexBuffer(gl, this.layoutVertexArray);
    this.indexBuffer = new IndexBuffer(gl, this.indexArray);
    this.programConfigurations.upload(gl);
};

LineBucket.prototype.destroy = function destroy () {
    if (!this.layoutVertexBuffer) { return; }
    this.layoutVertexBuffer.destroy();
    this.indexBuffer.destroy();
    this.programConfigurations.destroy();
    this.segments.destroy();
};

LineBucket.prototype.addFeature = function addFeature (feature               , geometry                 ) {
        var this$1 = this;

    var layout = this.layers[0].layout;
    var join = layout.get('line-join').evaluate(feature);
    var cap = layout.get('line-cap');
    var miterLimit = layout.get('line-miter-limit');
    var roundLimit = layout.get('line-round-limit');

    for (var i = 0, list = geometry; i < list.length; i += 1) {
        var line = list[i];

            this$1.addLine(line, feature, join, cap, miterLimit, roundLimit);
    }
};

LineBucket.prototype.addLine = function addLine (vertices          , feature               , join    , cap    , miterLimit    , roundLimit    ) {
        var this$1 = this;

    var isPolygon = vectorTileFeatureTypes[feature.type] === 'Polygon';

    // If the line has duplicate vertices at the ends, adjust start/length to remove them.
    var len = vertices.length;
    while (len >= 2 && vertices[len - 1].equals(vertices[len - 2])) {
        len--;
    }
    var first = 0;
    while (first < len - 1 && vertices[first].equals(vertices[first + 1])) {
        first++;
    }

    // Ignore invalid geometry.
    if (len < (isPolygon ? 3 : 2)) { return; }

    if (join === 'bevel') { miterLimit = 1.05; }

    var sharpCornerOffset = SHARP_CORNER_OFFSET * (EXTENT / (512 * this.overscaling));

    var firstVertex = vertices[first];

    // we could be more precise, but it would only save a negligible amount of space
    var segment = this.segments.prepareSegment(len * 10, this.layoutVertexArray, this.indexArray);

    this.distance = 0;

    var beginCap = cap,
        endCap = isPolygon ? 'butt' : cap;
    var startOfLine = true;
    var currentVertex;
    var prevVertex = ((undefined )   );
    var nextVertex = ((undefined )   );
    var prevNormal = ((undefined )   );
    var nextNormal = ((undefined )   );
    var offsetA;
    var offsetB;

    // the last three vertices added
    this.e1 = this.e2 = this.e3 = -1;

    if (isPolygon) {
        currentVertex = vertices[len - 2];
        nextNormal = firstVertex.sub(currentVertex)._unit()._perp();
    }

    for (var i = first; i < len; i++) {

        nextVertex = isPolygon && i === len - 1 ?
            vertices[first + 1] : // if the line is closed, we treat the last vertex like the first
            vertices[i + 1]; // just the next vertex

        // if two consecutive vertices exist, skip the current one
        if (nextVertex && vertices[i].equals(nextVertex)) { continue; }

        if (nextNormal) { prevNormal = nextNormal; }
        if (currentVertex) { prevVertex = currentVertex; }

        currentVertex = vertices[i];

        // Calculate the normal towards the next vertex in this line. In case
        // there is no next vertex, pretend that the line is continuing straight,
        // meaning that we are just using the previous normal.
        nextNormal = nextVertex ? nextVertex.sub(currentVertex)._unit()._perp() : prevNormal;

        // If we still don't have a previous normal, this is the beginning of a
        // non-closed line, so we're doing a straight "join".
        prevNormal = prevNormal || nextNormal;

        // Determine the normal of the join extrusion. It is the angle bisector
        // of the segments between the previous line and the next line.
        // In the case of 180Â° angles, the prev and next normals cancel each other out:
        // prevNormal + nextNormal = (0, 0), its magnitude is 0, so the unit vector would be
        // undefined. In that case, we're keeping the joinNormal at (0, 0), so that the cosHalfAngle
        // below will also become 0 and miterLength will become Infinity.
        var joinNormal = prevNormal.add(nextNormal);
        if (joinNormal.x !== 0 || joinNormal.y !== 0) {
            joinNormal._unit();
        }
        /*  joinNormal prevNormal
         *         â†–  â†‘
         *            .________. prevVertex
         *            |
         * nextNormal  â†  |  currentVertex
         *            |
         * nextVertex !
         *
         */

        // Calculate the length of the miter (the ratio of the miter to the width).
        // Find the cosine of the angle between the next and join normals
        // using dot product. The inverse of that is the miter length.
        var cosHalfAngle = joinNormal.x * nextNormal.x + joinNormal.y * nextNormal.y;
        var miterLength = cosHalfAngle !== 0 ? 1 / cosHalfAngle : Infinity;

        var isSharpCorner = cosHalfAngle < COS_HALF_SHARP_CORNER && prevVertex && nextVertex;

        if (isSharpCorner && i > first) {
            var prevSegmentLength = currentVertex.dist(prevVertex);
            if (prevSegmentLength > 2 * sharpCornerOffset) {
                var newPrevVertex = currentVertex.sub(currentVertex.sub(prevVertex)._mult(sharpCornerOffset / prevSegmentLength)._round());
                this$1.distance += newPrevVertex.dist(prevVertex);
                this$1.addCurrentVertex(newPrevVertex, this$1.distance, prevNormal.mult(1), 0, 0, false, segment);
                prevVertex = newPrevVertex;
            }
        }

        // The join if a middle vertex, otherwise the cap.
        var middleVertex = prevVertex && nextVertex;
        var currentJoin = middleVertex ? join : nextVertex ? beginCap : endCap;

        if (middleVertex && currentJoin === 'round') {
            if (miterLength < roundLimit) {
                currentJoin = 'miter';
            } else if (miterLength <= 2) {
                currentJoin = 'fakeround';
            }
        }

        if (currentJoin === 'miter' && miterLength > miterLimit) {
            currentJoin = 'bevel';
        }

        if (currentJoin === 'bevel') {
            // The maximum extrude length is 128 / 63 = 2 times the width of the line
            // so if miterLength >= 2 we need to draw a different type of bevel here.
            if (miterLength > 2) { currentJoin = 'flipbevel'; }

            // If the miterLength is really small and the line bevel wouldn't be visible,
            // just draw a miter join to save a triangle.
            if (miterLength < miterLimit) { currentJoin = 'miter'; }
        }

        // Calculate how far along the line the currentVertex is
        if (prevVertex) { this$1.distance += currentVertex.dist(prevVertex); }

        if (currentJoin === 'miter') {

            joinNormal._mult(miterLength);
            this$1.addCurrentVertex(currentVertex, this$1.distance, joinNormal, 0, 0, false, segment);

        } else if (currentJoin === 'flipbevel') {
            // miter is too big, flip the direction to make a beveled join

            if (miterLength > 100) {
                // Almost parallel lines
                joinNormal = nextNormal.clone().mult(-1);

            } else {
                var direction = prevNormal.x * nextNormal.y - prevNormal.y * nextNormal.x > 0 ? -1 : 1;
                var bevelLength = miterLength * prevNormal.add(nextNormal).mag() / prevNormal.sub(nextNormal).mag();
                joinNormal._perp()._mult(bevelLength * direction);
            }
            this$1.addCurrentVertex(currentVertex, this$1.distance, joinNormal, 0, 0, false, segment);
            this$1.addCurrentVertex(currentVertex, this$1.distance, joinNormal.mult(-1), 0, 0, false, segment);

        } else if (currentJoin === 'bevel' || currentJoin === 'fakeround') {
            var lineTurnsLeft = (prevNormal.x * nextNormal.y - prevNormal.y * nextNormal.x) > 0;
            var offset = -Math.sqrt(miterLength * miterLength - 1);
            if (lineTurnsLeft) {
                offsetB = 0;
                offsetA = offset;
            } else {
                offsetA = 0;
                offsetB = offset;
            }

            // Close previous segment with a bevel
            if (!startOfLine) {
                this$1.addCurrentVertex(currentVertex, this$1.distance, prevNormal, offsetA, offsetB, false, segment);
            }

            if (currentJoin === 'fakeround') {
                // The join angle is sharp enough that a round join would be visible.
                // Bevel joins fill the gap between segments with a single pie slice triangle.
                // Create a round join by adding multiple pie slices. The join isn't actually round, but
                // it looks like it is at the sizes we render lines at.

                // Add more triangles for sharper angles.
                // This math is just a good enough approximation. It isn't "correct".
                var n = Math.floor((0.5 - (cosHalfAngle - 0.5)) * 8);
                var approxFractionalJoinNormal = (void 0);

                for (var m = 0; m < n; m++) {
                    approxFractionalJoinNormal = nextNormal.mult((m + 1) / (n + 1))._add(prevNormal)._unit();
                    this$1.addPieSliceVertex(currentVertex, this$1.distance, approxFractionalJoinNormal, lineTurnsLeft, segment);
                }

                this$1.addPieSliceVertex(currentVertex, this$1.distance, joinNormal, lineTurnsLeft, segment);

                for (var k = n - 1; k >= 0; k--) {
                    approxFractionalJoinNormal = prevNormal.mult((k + 1) / (n + 1))._add(nextNormal)._unit();
                    this$1.addPieSliceVertex(currentVertex, this$1.distance, approxFractionalJoinNormal, lineTurnsLeft, segment);
                }
            }

            // Start next segment
            if (nextVertex) {
                this$1.addCurrentVertex(currentVertex, this$1.distance, nextNormal, -offsetA, -offsetB, false, segment);
            }

        } else if (currentJoin === 'butt') {
            if (!startOfLine) {
                // Close previous segment with a butt
                this$1.addCurrentVertex(currentVertex, this$1.distance, prevNormal, 0, 0, false, segment);
            }

            // Start next segment with a butt
            if (nextVertex) {
                this$1.addCurrentVertex(currentVertex, this$1.distance, nextNormal, 0, 0, false, segment);
            }

        } else if (currentJoin === 'square') {

            if (!startOfLine) {
                // Close previous segment with a square cap
                this$1.addCurrentVertex(currentVertex, this$1.distance, prevNormal, 1, 1, false, segment);

                // The segment is done. Unset vertices to disconnect segments.
                this$1.e1 = this$1.e2 = -1;
            }

            // Start next segment
            if (nextVertex) {
                this$1.addCurrentVertex(currentVertex, this$1.distance, nextNormal, -1, -1, false, segment);
            }

        } else if (currentJoin === 'round') {

            if (!startOfLine) {
                // Close previous segment with butt
                this$1.addCurrentVertex(currentVertex, this$1.distance, prevNormal, 0, 0, false, segment);

                // Add round cap or linejoin at end of segment
                this$1.addCurrentVertex(currentVertex, this$1.distance, prevNormal, 1, 1, true, segment);

                // The segment is done. Unset vertices to disconnect segments.
                this$1.e1 = this$1.e2 = -1;
            }


            // Start next segment with a butt
            if (nextVertex) {
                // Add round cap before first segment
                this$1.addCurrentVertex(currentVertex, this$1.distance, nextNormal, -1, -1, true, segment);

                this$1.addCurrentVertex(currentVertex, this$1.distance, nextNormal, 0, 0, false, segment);
            }
        }

        if (isSharpCorner && i < len - 1) {
            var nextSegmentLength = currentVertex.dist(nextVertex);
            if (nextSegmentLength > 2 * sharpCornerOffset) {
                var newCurrentVertex = currentVertex.add(nextVertex.sub(currentVertex)._mult(sharpCornerOffset / nextSegmentLength)._round());
                this$1.distance += newCurrentVertex.dist(currentVertex);
                this$1.addCurrentVertex(newCurrentVertex, this$1.distance, nextNormal.mult(1), 0, 0, false, segment);
                currentVertex = newCurrentVertex;
            }
        }

        startOfLine = false;
    }

    this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, feature);
};

/**
 * Add two vertices to the buffers.
 *
 * @param {Object} currentVertex the line vertex to add buffer vertices for
 * @param {number} distance the distance from the beginning of the line to the vertex
 * @param {number} endLeft extrude to shift the left vertex along the line
 * @param {number} endRight extrude to shift the left vertex along the line
 * @param {boolean} round whether this is a round cap
 * @private
 */
LineBucket.prototype.addCurrentVertex = function addCurrentVertex (currentVertex   ,
                 distance    ,
                 normal   ,
                 endLeft    ,
                 endRight    ,
                 round     ,
                 segment     ) {
    var extrude;
    var layoutVertexArray = this.layoutVertexArray;
    var indexArray = this.indexArray;

    extrude = normal.clone();
    if (endLeft) { extrude._sub(normal.perp()._mult(endLeft)); }
    addLineVertex(layoutVertexArray, currentVertex, extrude, round, false, endLeft, distance);
    this.e3 = segment.vertexLength++;
    if (this.e1 >= 0 && this.e2 >= 0) {
        indexArray.emplaceBack(this.e1, this.e2, this.e3);
        segment.primitiveLength++;
    }
    this.e1 = this.e2;
    this.e2 = this.e3;

    extrude = normal.mult(-1);
    if (endRight) { extrude._sub(normal.perp()._mult(endRight)); }
    addLineVertex(layoutVertexArray, currentVertex, extrude, round, true, -endRight, distance);
    this.e3 = segment.vertexLength++;
    if (this.e1 >= 0 && this.e2 >= 0) {
        indexArray.emplaceBack(this.e1, this.e2, this.e3);
        segment.primitiveLength++;
    }
    this.e1 = this.e2;
    this.e2 = this.e3;

    // There is a maximum "distance along the line" that we can store in the buffers.
    // When we get close to the distance, reset it to zero and add the vertex again with
    // a distance of zero. The max distance is determined by the number of bits we allocate
    // to `linesofar`.
    if (distance > MAX_LINE_DISTANCE / 2) {
        this.distance = 0;
        this.addCurrentVertex(currentVertex, this.distance, normal, endLeft, endRight, round, segment);
    }
};

/**
 * Add a single new vertex and a triangle using two previous vertices.
 * This adds a pie slice triangle near a join to simulate round joins
 *
 * @param currentVertex the line vertex to add buffer vertices for
 * @param distance the distance from the beggining of the line to the vertex
 * @param extrude the offset of the new vertex from the currentVertex
 * @param lineTurnsLeft whether the line is turning left or right at this angle
 * @private
 */
LineBucket.prototype.addPieSliceVertex = function addPieSliceVertex (currentVertex   ,
                  distance    ,
                  extrude   ,
                  lineTurnsLeft     ,
                  segment     ) {
    extrude = extrude.mult(lineTurnsLeft ? -1 : 1);
    var layoutVertexArray = this.layoutVertexArray;
    var indexArray = this.indexArray;

    addLineVertex(layoutVertexArray, currentVertex, extrude, false, lineTurnsLeft, 0, distance);
    this.e3 = segment.vertexLength++;
    if (this.e1 >= 0 && this.e2 >= 0) {
        indexArray.emplaceBack(this.e1, this.e2, this.e3);
        segment.primitiveLength++;
    }

    if (lineTurnsLeft) {
        this.e2 = this.e3;
    } else {
        this.e1 = this.e3;
    }
};

LineBucket.programInterface = lineInterface;

module.exports = LineBucket;

},{"../../gl/index_buffer":72,"../../gl/vertex_buffer":73,"../extent":59,"../index_array_type":61,"../load_geometry":62,"../program_configuration":64,"../segment":66,"../vertex_array_type":67,"@mapbox/vector-tile":6}],58:[function(require,module,exports){
'use strict';//      

var Point = require('@mapbox/point-geometry');
var ref = require('../segment');
var SegmentVector = ref.SegmentVector;
var VertexBuffer = require('../../gl/vertex_buffer');
var IndexBuffer = require('../../gl/index_buffer');
var ref$1 = require('../program_configuration');
var ProgramConfigurationSet = ref$1.ProgramConfigurationSet;
var createVertexArrayType = require('../vertex_array_type');
var ref$2 = require('../index_array_type');
var TriangleIndexArray = ref$2.TriangleIndexArray;
var LineIndexArray = ref$2.LineIndexArray;
var transformText = require('../../symbol/transform_text');
var mergeLines = require('../../symbol/mergelines');
var scriptDetection = require('../../util/script_detection');
var loadGeometry = require('../load_geometry');
var vectorTileFeatureTypes = require('@mapbox/vector-tile').VectorTileFeature.types;
var createStructArrayType = require('../../util/struct_array');
var verticalizePunctuation = require('../../util/verticalize_punctuation');
var Anchor = require('../../symbol/anchor');
var OpacityState = require('../../symbol/opacity_state');
var ref$3 = require('../../symbol/symbol_size');
var getSizeData = ref$3.getSizeData;

                                                                              
                                                                          
                                                                                               
                                                                                
             
                
                         
                                 
                                                                               
                                                   
                                                       
                                                                           

                                  
               
               
               
               
                         
                         
  

                               
                                 
                                 
                                
  

                              
                
                              
                            
                              
                            
                                 
                                 
                   
                       
                         
                               
                                                                        
                                                                        
                                           
                             
                                     
                            
                                                        
                         
                                   
                                   
                                      
                         
                         
                     
  

                              
                        
                        
                  
                             
                                  
                       
                                             
            
   

var PlacedSymbolArray = createStructArrayType({
    members: [
        { type: 'Int16', name: 'anchorX' },
        { type: 'Int16', name: 'anchorY' },
        { type: 'Uint16', name: 'glyphStartIndex' },
        { type: 'Uint16', name: 'numGlyphs' },
        { type: 'Uint32', name: 'vertexStartIndex' },
        { type: 'Uint32', name: 'lineStartIndex' },
        { type: 'Uint32', name: 'lineLength' },
        { type: 'Uint16', name: 'segment' },
        { type: 'Uint16', name: 'lowerSize' },
        { type: 'Uint16', name: 'upperSize' },
        { type: 'Float32', name: 'lineOffsetX' },
        { type: 'Float32', name: 'lineOffsetY' },
        { type: 'Uint8', name: 'writingMode' },
        { type: 'Uint8', name: 'hidden' }
    ]
});

var GlyphOffsetArray = createStructArrayType({
    members: [
        { type: 'Float32', name: 'offsetX' }
    ]
});

var LineVertexArray = createStructArrayType({
    members: [
        { type: 'Int16', name: 'x' },
        { type: 'Int16', name: 'y' },
        { type: 'Int16', name: 'tileUnitDistanceFromAnchor' }
    ]});

var layoutAttributes = [
    {name: 'a_pos_offset',  components: 4, type: 'Int16'},
    {name: 'a_data',        components: 4, type: 'Uint16'}
];

var dynamicLayoutAttributes = [
    { name: 'a_projected_pos', components: 3, type: 'Float32' }
];

// Opacity arrays are frequently updated but don't contain a lot of information, so we pack them
// tight. Each Uint32 is actually four duplicate Uint8s for the four corners of a glyph
// 7 bits are for the current opacity, and the lowest bit is the target opacity
var placementOpacityAttributes = [
    { name: 'a_fade_opacity', components: 1, type: 'Uint32' }
];
var shaderOpacityAttributes = [
    { name: 'a_fade_opacity', components: 1, type: 'Uint8', offset: 0 }
];

var collisionAttributes = [
    { name: 'a_placed', components: 2, type: 'Uint8' }
];

var symbolInterfaces = {
    text: {
        layoutAttributes: layoutAttributes,
        dynamicLayoutAttributes: dynamicLayoutAttributes,
        indexArrayType: TriangleIndexArray,
        opacityAttributes: placementOpacityAttributes,
        paintAttributes: [
            {property: 'text-color', name: 'fill_color'},
            {property: 'text-halo-color', name: 'halo_color'},
            {property: 'text-halo-width', name: 'halo_width'},
            {property: 'text-halo-blur', name: 'halo_blur'},
            {property: 'text-opacity', name: 'opacity'}
        ]
    },
    icon: {
        layoutAttributes: layoutAttributes,
        dynamicLayoutAttributes: dynamicLayoutAttributes,
        indexArrayType: TriangleIndexArray,
        opacityAttributes: placementOpacityAttributes,
        paintAttributes: [
            {property: 'icon-color', name: 'fill_color'},
            {property: 'icon-halo-color', name: 'halo_color'},
            {property: 'icon-halo-width', name: 'halo_width'},
            {property: 'icon-halo-blur', name: 'halo_blur'},
            {property: 'icon-opacity', name: 'opacity'}
        ]
    },
    collisionBox: { // used to render collision boxes for debugging purposes
        layoutAttributes: [
            {name: 'a_pos',        components: 2, type: 'Int16'},
            {name: 'a_anchor_pos', components: 2, type: 'Int16'},
            {name: 'a_extrude',    components: 2, type: 'Int16'}
        ],
        indexArrayType: LineIndexArray,
        collisionAttributes: collisionAttributes
    },
    collisionCircle: { // used to render collision circles for debugging purposes
        layoutAttributes: [
            {name: 'a_pos',        components: 2, type: 'Int16'},
            {name: 'a_anchor_pos', components: 2, type: 'Int16'},
            {name: 'a_extrude',    components: 2, type: 'Int16'}
        ],
        collisionAttributes: collisionAttributes,
        indexArrayType: TriangleIndexArray
    }
};

function addVertex(array, anchorX, anchorY, ox, oy, tx, ty, sizeVertex) {
    array.emplaceBack(
        // a_pos_offset
        anchorX,
        anchorY,
        Math.round(ox * 64),
        Math.round(oy * 64),

        // a_data
        tx, // x coordinate of symbol on glyph atlas texture
        ty, // y coordinate of symbol on glyph atlas texture
        sizeVertex ? sizeVertex[0] : undefined,
        sizeVertex ? sizeVertex[1] : undefined
    );
}

function addDynamicAttributes(dynamicLayoutVertexArray, p, angle) {
    dynamicLayoutVertexArray.emplaceBack(p.x, p.y, angle);
    dynamicLayoutVertexArray.emplaceBack(p.x, p.y, angle);
    dynamicLayoutVertexArray.emplaceBack(p.x, p.y, angle);
    dynamicLayoutVertexArray.emplaceBack(p.x, p.y, angle);
}

                               
                                             
                                                    
                                      
                                              
                                                
                                                                       
                            
  

var SymbolBuffers = function SymbolBuffers(programInterface                , layers                       , zoom      , arrays                       ) {
      this.programInterface = programInterface;

      var LayoutVertexArrayType = createVertexArrayType(programInterface.layoutAttributes);
      var IndexArrayType = programInterface.indexArrayType;

      this.layoutVertexArray = new LayoutVertexArrayType(arrays && arrays.layoutVertexArray);
      this.indexArray = new IndexArrayType(arrays && arrays.indexArray);
      this.programConfigurations = new ProgramConfigurationSet(programInterface, layers, zoom, arrays && arrays.programConfigurations);
      this.segments = new SegmentVector(arrays && arrays.segments);

      if (programInterface.dynamicLayoutAttributes) {
          var DynamicLayoutVertexArrayType = createVertexArrayType(programInterface.dynamicLayoutAttributes);
          this.dynamicLayoutVertexArray = new DynamicLayoutVertexArrayType(arrays && arrays.dynamicLayoutVertexArray);
      }

      if (programInterface.opacityAttributes) {
          var OpacityVertexArrayType = createVertexArrayType(programInterface.opacityAttributes);
          this.opacityVertexArray = new OpacityVertexArrayType(arrays && arrays.opacityVertexArray);
      }

      if (programInterface.collisionAttributes) {
          var CollisionVertexArrayType = createVertexArrayType(programInterface.collisionAttributes);
          this.collisionVertexArray = new CollisionVertexArrayType(arrays && arrays.collisionVertexArray);
      }

  };

  SymbolBuffers.prototype.serialize = function serialize (transferables                    )                       {
      return {
          layoutVertexArray: this.layoutVertexArray.serialize(transferables),
          indexArray: this.indexArray.serialize(transferables),
          programConfigurations: this.programConfigurations.serialize(transferables),
          segments: this.segments.get(),
          dynamicLayoutVertexArray: this.dynamicLayoutVertexArray && this.dynamicLayoutVertexArray.serialize(transferables),
          opacityVertexArray: this.opacityVertexArray && this.opacityVertexArray.serialize(transferables),
          collisionVertexArray: this.collisionVertexArray && this.collisionVertexArray.serialize(transferables)
      };
  };

  SymbolBuffers.prototype.upload = function upload (gl                     , dynamicIndexBuffer) {
      this.layoutVertexBuffer = new VertexBuffer(gl, this.layoutVertexArray);
      this.indexBuffer = new IndexBuffer(gl, this.indexArray, dynamicIndexBuffer);
      this.programConfigurations.upload(gl);

      if (this.programInterface.dynamicLayoutAttributes) {
          this.dynamicLayoutVertexBuffer = new VertexBuffer(gl, this.dynamicLayoutVertexArray, true);
      }
      if (this.programInterface.opacityAttributes) {
          this.opacityVertexBuffer = new VertexBuffer(gl, this.opacityVertexArray, true);
          // This is a performance hack so that we can write to opacityVertexArray with uint32s
          // even though the shaders read uint8s
          this.opacityVertexBuffer.itemSize = 1;
          this.opacityVertexBuffer.attributes = shaderOpacityAttributes;
      }
      if (this.programInterface.collisionAttributes) {
          this.collisionVertexBuffer = new VertexBuffer(gl, this.collisionVertexArray, true);
      }
  };

  SymbolBuffers.prototype.destroy = function destroy () {
      if (!this.layoutVertexBuffer) { return; }
      this.layoutVertexBuffer.destroy();
      this.indexBuffer.destroy();
      this.programConfigurations.destroy();
      this.segments.destroy();
      if (this.dynamicLayoutVertexBuffer) {
          this.dynamicLayoutVertexBuffer.destroy();
      }
      if (this.opacityVertexBuffer) {
          this.opacityVertexBuffer.destroy();
      }
      if (this.collisionVertexBuffer) {
          this.collisionVertexBuffer.destroy();
      }
  };

/**
 * Unlike other buckets, which simply implement #addFeature with type-specific
 * logic for (essentially) triangulating feature geometries, SymbolBucket
 * requires specialized behavior:
 *
 * 1. WorkerTile#parse(), the logical owner of the bucket creation process,
 *    calls SymbolBucket#populate(), which resolves text and icon tokens on
 *    each feature, adds each glyphs and symbols needed to the passed-in
 *    collections options.glyphDependencies and options.iconDependencies, and
 *    stores the feature data for use in subsequent step (this.features).
 *
 * 2. WorkerTile asynchronously requests from the main thread all of the glyphs
 *    and icons needed (by this bucket and any others). When glyphs and icons
 *    have been received, the WorkerTile creates a CollisionIndex and invokes:
 *
 * 3. performSymbolLayout(bucket, stacks, icons) perform texts shaping and
 *    layout on a Symbol Bucket. This step populates:
 *      `this.symbolInstances`: metadata on generated symbols
 *      `this.collisionBoxArray`: collision data for use by foreground
 *      `this.text`: SymbolBuffers for text symbols
 *      `this.icons`: SymbolBuffers for icons
 *      `this.collisionBox`: Debug SymbolBuffers for collision boxes
 *      `this.collisionCircle`: Debug SymbolBuffers for collision circles
 *    The results are sent to the foreground for rendering
 *
 * 4. performSymbolPlacement(bucket, collisionIndex) is run on the foreground,
 *    and uses the CollisionIndex along with current camera settings to determine
 *    which symbols can actually show on the map. Collided symbols are hidden
 *    using a dynamic "OpacityVertexArray".
 *
 * @private
 */
var SymbolBucket = function SymbolBucket(options   ) {
      this.collisionBoxArray = options.collisionBoxArray;
      this.zoom = options.zoom;
      this.overscaling = options.overscaling;
      this.layers = options.layers;
      this.index = options.index;
      this.sdfIcons = options.sdfIcons;
      this.iconsNeedLinear = options.iconsNeedLinear;
      this.pixelRatio = options.pixelRatio;

      // deserializing a bucket created on a worker thread
      if (options.text) {
          this.text = new SymbolBuffers(symbolInterfaces.text, options.layers, options.zoom, options.text);
          this.icon = new SymbolBuffers(symbolInterfaces.icon, options.layers, options.zoom, options.icon);
          this.collisionBox = new SymbolBuffers(symbolInterfaces.collisionBox, options.layers, options.zoom, options.collisionBox);
          this.collisionCircle = new SymbolBuffers(symbolInterfaces.collisionCircle, options.layers, options.zoom, options.collisionCircle);

          this.textSizeData = options.textSizeData;
          this.iconSizeData = options.iconSizeData;

          this.placedGlyphArray = new PlacedSymbolArray(options.placedGlyphArray);
          this.placedIconArray = new PlacedSymbolArray(options.placedIconArray);
          this.glyphOffsetArray = new GlyphOffsetArray(options.glyphOffsetArray);
          this.lineVertexArray = new LineVertexArray(options.lineVertexArray);

          this.symbolInstances = options.symbolInstances;

          var layout = options.layers[0].layout;
          this.sortFeaturesByY = layout.get('text-allow-overlap') || layout.get('icon-allow-overlap') ||
              layout.get('text-ignore-placement') || layout.get('icon-ignore-placement');

      } else {
          var layer                 = this.layers[0];
          var unevaluatedLayoutValues = layer._unevaluatedLayout._values;

          this.textSizeData = getSizeData(this.zoom, unevaluatedLayoutValues['text-size']);
          if (this.textSizeData.functionType === 'composite') {
              var ref = this.textSizeData.zoomRange;
              var min = ref.min;
              var max = ref.max;
              this.compositeTextSizes = [
                  unevaluatedLayoutValues['text-size'].possiblyEvaluate({zoom: min}),
                  unevaluatedLayoutValues['text-size'].possiblyEvaluate({zoom: max})
              ];
          }

          this.iconSizeData = getSizeData(this.zoom, unevaluatedLayoutValues['icon-size']);
          if (this.iconSizeData.functionType === 'composite') {
              var ref$1 = this.iconSizeData.zoomRange;
              var min$1 = ref$1.min;
              var max$1 = ref$1.max;
              this.compositeIconSizes = [
                  unevaluatedLayoutValues['icon-size'].possiblyEvaluate({zoom: min$1}),
                  unevaluatedLayoutValues['icon-size'].possiblyEvaluate({zoom: max$1})
              ];
          }

          this.layoutTextSize = unevaluatedLayoutValues['text-size'].possiblyEvaluate({zoom: this.zoom + 1});
          this.layoutIconSize = unevaluatedLayoutValues['icon-size'].possiblyEvaluate({zoom: this.zoom + 1});
          this.textMaxSize = unevaluatedLayoutValues['text-size'].possiblyEvaluate({zoom: 18});
      }
  };

  SymbolBucket.prototype.createArrays = function createArrays () {
      this.text = new SymbolBuffers(symbolInterfaces.text, this.layers, this.zoom);
      this.icon = new SymbolBuffers(symbolInterfaces.icon, this.layers, this.zoom);
      this.collisionBox = new SymbolBuffers(symbolInterfaces.collisionBox, this.layers, this.zoom);
      this.collisionCircle = new SymbolBuffers(symbolInterfaces.collisionCircle, this.layers, this.zoom);

      this.placedGlyphArray = new PlacedSymbolArray();
      this.placedIconArray = new PlacedSymbolArray();
      this.glyphOffsetArray = new GlyphOffsetArray();
      this.lineVertexArray = new LineVertexArray();
  };

  SymbolBucket.prototype.populate = function populate (features                     , options                  ) {
        var this$1 = this;

      var layer = this.layers[0];
      var layout = layer.layout;

      var textFont = layout.get('text-font').join(',');
      var textField = layout.get('text-field');
      var iconImage = layout.get('icon-image');
      var hasText = textField.value.kind !== 'constant' || textField.value.value.length > 0 && textFont.length > 0;
      var hasIcon = iconImage.value.kind !== 'constant' || iconImage.value.value && iconImage.value.value.length > 0;

      this.features = [];

      if (!hasText && !hasIcon) {
          return;
      }

      var icons = options.iconDependencies;
      var stacks = options.glyphDependencies;
      var stack = stacks[textFont] = stacks[textFont] || {};
      var globalProperties ={zoom: this.zoom};

      for (var i$1 = 0, list = features; i$1 < list.length; i$1 += 1) {
          var ref = list[i$1];
          var feature = ref.feature;
          var index = ref.index;
          var sourceLayerIndex = ref.sourceLayerIndex;

          if (!layer._featureFilter(globalProperties, feature)) {
              continue;
          }

          var text = (void 0);
          if (hasText) {
              text = layer.getValueAndResolveTokens('text-field', feature);
              text = transformText(text, layer, feature);
          }

          var icon = (void 0);
          if (hasIcon) {
              icon = layer.getValueAndResolveTokens('icon-image', feature);
          }

          if (!text && !icon) {
              continue;
          }

          var symbolFeature              = {
              text: text,
              icon: icon,
              index: index,
              sourceLayerIndex: sourceLayerIndex,
              geometry: loadGeometry(feature),
              properties: feature.properties,
              type: vectorTileFeatureTypes[feature.type]
          };
          if (typeof feature.id !== 'undefined') {
              symbolFeature.id = feature.id;
          }
          this$1.features.push(symbolFeature);

          if (icon) {
              icons[icon] = true;
          }

          if (text) {
              var textAlongLine = layout.get('text-rotation-alignment') === 'map' && layout.get('symbol-placement') === 'line';
              var allowsVerticalWritingMode = scriptDetection.allowsVerticalWritingMode(text);
              for (var i = 0; i < text.length; i++) {
                  stack[text.charCodeAt(i)] = true;
                  if (textAlongLine && allowsVerticalWritingMode) {
                      var verticalChar = verticalizePunctuation.lookup[text.charAt(i)];
                      if (verticalChar) {
                          stack[verticalChar.charCodeAt(0)] = true;
                      }
                  }
              }
          }
      }

      if (layout.get('symbol-placement') === 'line') {
          // Merge adjacent lines with the same text to improve labelling.
          // It's better to place labels on one long line than on many short segments.
          this.features = mergeLines(this.features);
      }
  };


  SymbolBucket.prototype.isEmpty = function isEmpty () {
      return this.symbolInstances.length === 0;
  };

  SymbolBucket.prototype.serialize = function serialize (transferables                    ) {
      return {
          zoom: this.zoom,
          layerIds: this.layers.map(function (l) { return l.id; }),
          sdfIcons: this.sdfIcons,
          iconsNeedLinear: this.iconsNeedLinear,
          textSizeData: this.textSizeData,
          iconSizeData: this.iconSizeData,
          placedGlyphArray: this.placedGlyphArray.serialize(transferables),
          placedIconArray: this.placedIconArray.serialize(transferables),
          glyphOffsetArray: this.glyphOffsetArray.serialize(transferables),
          lineVertexArray: this.lineVertexArray.serialize(transferables),
          text: this.text.serialize(transferables),
          icon: this.icon.serialize(transferables),
          collisionBox: this.collisionBox.serialize(transferables),
          collisionCircle: this.collisionCircle.serialize(transferables),
          symbolInstances: this.symbolInstances
      };
  };

  SymbolBucket.prototype.upload = function upload (gl                     ) {
      this.text.upload(gl, this.sortFeaturesByY);
      this.icon.upload(gl, this.sortFeaturesByY);
      this.collisionBox.upload(gl);
      this.collisionCircle.upload(gl);
  };

  SymbolBucket.prototype.destroy = function destroy () {
      this.text.destroy();
      this.icon.destroy();
      this.collisionBox.destroy();
      this.collisionCircle.destroy();
  };

  SymbolBucket.prototype.addToLineVertexArray = function addToLineVertexArray (anchor      , line   ) {
        var this$1 = this;

      var lineStartIndex = this.lineVertexArray.length;
      if (anchor.segment !== undefined) {
          var sumForwardLength = anchor.dist(line[anchor.segment + 1]);
          var sumBackwardLength = anchor.dist(line[anchor.segment]);
          var vertices = {};
          for (var i = anchor.segment + 1; i < line.length; i++) {
              vertices[i] = { x: line[i].x, y: line[i].y, tileUnitDistanceFromAnchor: sumForwardLength };
              if (i < line.length - 1) {
                  sumForwardLength += line[i + 1].dist(line[i]);
              }
          }
          for (var i$1 = anchor.segment || 0; i$1 >= 0; i$1--) {
              vertices[i$1] = { x: line[i$1].x, y: line[i$1].y, tileUnitDistanceFromAnchor: sumBackwardLength };
              if (i$1 > 0) {
                  sumBackwardLength += line[i$1 - 1].dist(line[i$1]);
              }
          }
          for (var i$2 = 0; i$2 < line.length; i$2++) {
              var vertex = vertices[i$2];
              this$1.lineVertexArray.emplaceBack(vertex.x, vertex.y, vertex.tileUnitDistanceFromAnchor);
          }
      }
      return {
          lineStartIndex: lineStartIndex,
          lineLength: this.lineVertexArray.length - lineStartIndex
      };
  };

  SymbolBucket.prototype.addSymbols = function addSymbols (arrays             ,
             quads                 ,
             sizeVertex   ,
             lineOffset                ,
             alongLine       ,
             feature                 ,
             writingMode   ,
             labelAnchor      ,
             lineStartIndex      ,
             lineLength      ,
             placedSymbolArray           ) {
        var this$1 = this;

      var indexArray = arrays.indexArray;
      var layoutVertexArray = arrays.layoutVertexArray;
      var dynamicLayoutVertexArray = arrays.dynamicLayoutVertexArray;

      var segment = arrays.segments.prepareSegment(4 * quads.length, arrays.layoutVertexArray, arrays.indexArray);
      var glyphOffsetArrayStart = this.glyphOffsetArray.length;
      var vertexStartIndex = segment.vertexLength;

      for (var i = 0, list = quads; i < list.length; i += 1) {

          var symbol = list[i];

          var tl = symbol.tl,
              tr = symbol.tr,
              bl = symbol.bl,
              br = symbol.br,
              tex = symbol.tex;

          var index = segment.vertexLength;

          var y = symbol.glyphOffset[1];
          addVertex(layoutVertexArray, labelAnchor.x, labelAnchor.y, tl.x, y + tl.y, tex.x, tex.y, sizeVertex);
          addVertex(layoutVertexArray, labelAnchor.x, labelAnchor.y, tr.x, y + tr.y, tex.x + tex.w, tex.y, sizeVertex);
          addVertex(layoutVertexArray, labelAnchor.x, labelAnchor.y, bl.x, y + bl.y, tex.x, tex.y + tex.h, sizeVertex);
          addVertex(layoutVertexArray, labelAnchor.x, labelAnchor.y, br.x, y + br.y, tex.x + tex.w, tex.y + tex.h, sizeVertex);

          addDynamicAttributes(dynamicLayoutVertexArray, labelAnchor, 0);

          indexArray.emplaceBack(index, index + 1, index + 2);
          indexArray.emplaceBack(index + 1, index + 2, index + 3);

          segment.vertexLength += 4;
          segment.primitiveLength += 2;

          this$1.glyphOffsetArray.emplaceBack(symbol.glyphOffset[0]);
      }

      placedSymbolArray.emplaceBack(labelAnchor.x, labelAnchor.y,
          glyphOffsetArrayStart, this.glyphOffsetArray.length - glyphOffsetArrayStart, vertexStartIndex,
          lineStartIndex, lineLength, labelAnchor.segment,
          sizeVertex ? sizeVertex[0] : 0, sizeVertex ? sizeVertex[1] : 0,
          lineOffset[0], lineOffset[1],
          writingMode, false);

      arrays.programConfigurations.populatePaintArrays(arrays.layoutVertexArray.length, feature);
  };

  SymbolBucket.prototype._addCollisionDebugVertex = function _addCollisionDebugVertex (layoutVertexArray           , collisionVertexArray           , point     , anchor     , extrude     ) {
      collisionVertexArray.emplaceBack(0, 0);
      return layoutVertexArray.emplaceBack(
          // pos
          point.x,
          point.y,
          // a_anchor_pos
          anchor.x,
          anchor.y,
          // extrude
          Math.round(extrude.x),
          Math.round(extrude.y));
  };


  SymbolBucket.prototype.addCollisionDebugVertices = function addCollisionDebugVertices (x1      , y1      , x2      , y2      , arrays             , boxAnchorPoint     , symbolInstance              , isCircle       ) {
      var segment = arrays.segments.prepareSegment(4, arrays.layoutVertexArray, arrays.indexArray);
      var index = segment.vertexLength;

      var layoutVertexArray = arrays.layoutVertexArray;
      var indexArray = arrays.indexArray;
      var collisionVertexArray = arrays.collisionVertexArray;

      this._addCollisionDebugVertex(layoutVertexArray, collisionVertexArray, boxAnchorPoint, symbolInstance.anchor, new Point(x1, y1));
      this._addCollisionDebugVertex(layoutVertexArray, collisionVertexArray, boxAnchorPoint, symbolInstance.anchor, new Point(x2, y1));
      this._addCollisionDebugVertex(layoutVertexArray, collisionVertexArray, boxAnchorPoint, symbolInstance.anchor, new Point(x2, y2));
      this._addCollisionDebugVertex(layoutVertexArray, collisionVertexArray, boxAnchorPoint, symbolInstance.anchor, new Point(x1, y2));

      segment.vertexLength += 4;
      if (isCircle) {
          indexArray.emplaceBack(index, index + 1, index + 2);
          indexArray.emplaceBack(index, index + 2, index + 3);

          segment.primitiveLength += 2;
      } else {
          indexArray.emplaceBack(index, index + 1);
          indexArray.emplaceBack(index + 1, index + 2);
          indexArray.emplaceBack(index + 2, index + 3);
          indexArray.emplaceBack(index + 3, index);

          segment.primitiveLength += 4;
      }
  };

  SymbolBucket.prototype.generateCollisionDebugBuffers = function generateCollisionDebugBuffers () {
        var this$1 = this;

      for (var i$1 = 0, list = this$1.symbolInstances; i$1 < list.length; i$1 += 1) {
          var symbolInstance = list[i$1];

          symbolInstance.textCollisionFeature = {boxStartIndex: symbolInstance.textBoxStartIndex, boxEndIndex: symbolInstance.textBoxEndIndex};
          symbolInstance.iconCollisionFeature = {boxStartIndex: symbolInstance.iconBoxStartIndex, boxEndIndex: symbolInstance.iconBoxEndIndex};

          for (var i = 0; i < 2; i++) {
              var feature = symbolInstance[i === 0 ? 'textCollisionFeature' : 'iconCollisionFeature'];
              if (!feature) { continue; }

              for (var b = feature.boxStartIndex; b < feature.boxEndIndex; b++) {
                  var box             = (this$1.collisionBoxArray.get(b)   );
                  var x1 = box.x1;
                  var y1 = box.y1;
                  var x2 = box.x2;
                  var y2 = box.y2;

                  // If the radius > 0, this collision box is actually a circle
                  // The data we add to the buffers is exactly the same, but we'll render with a different shader.
                  var isCircle = box.radius > 0;
                  this$1.addCollisionDebugVertices(x1, y1, x2, y2, isCircle ? this$1.collisionCircle : this$1.collisionBox, box.anchorPoint, symbolInstance, isCircle);
              }
          }
      }
  };

  // These flat arrays are meant to be quicker to iterate over than the source
  // CollisionBoxArray
  SymbolBucket.prototype.deserializeCollisionBoxes = function deserializeCollisionBoxes (collisionBoxArray                 , textStartIndex      , textEndIndex      , iconStartIndex      , iconEndIndex      )                {
      var collisionArrays = {};
      for (var k = textStartIndex; k < textEndIndex; k++) {
          var box             = (collisionBoxArray.get(k)   );
          if (box.radius === 0) {
              collisionArrays.textBox = { x1: box.x1, y1: box.y1, x2: box.x2, y2: box.y2, anchorPointX: box.anchorPointX, anchorPointY: box.anchorPointY };

              break; // Only one box allowed per instance
          } else {
              if (!collisionArrays.textCircles) {
                  collisionArrays.textCircles = [];
              }
              var used = 1; // May be updated at collision detection time
              collisionArrays.textCircles.push(box.anchorPointX, box.anchorPointY, box.radius, box.signedDistanceFromAnchor, used);
          }
      }
      for (var k$1 = iconStartIndex; k$1 < iconEndIndex; k$1++) {
          // An icon can only have one box now, so this indexing is a bit vestigial...
          var box$1             = (collisionBoxArray.get(k$1)   );
          if (box$1.radius === 0) {
              collisionArrays.iconBox = { x1: box$1.x1, y1: box$1.y1, x2: box$1.x2, y2: box$1.y2, anchorPointX: box$1.anchorPointX, anchorPointY: box$1.anchorPointY };
              break; // Only one box allowed per instance
          }
      }
      return collisionArrays;
  };

  SymbolBucket.prototype.sortFeatures = function sortFeatures (angle      ) {
        var this$1 = this;

      if (!this.sortFeaturesByY) { return; }

      if (this.sortedAngle === angle) { return; }
      this.sortedAngle = angle;

      // The current approach to sorting doesn't sort across segments so don't try.
      // Sorting within segments separately seemed not to be worth the complexity.
      if (this.text.segments.get().length > 1 || this.icon.segments.get().length > 1) { return; }

      // If the symbols are allowed to overlap sort them by their vertical screen position.
      // The index array buffer is rewritten to reference the (unchanged) vertices in the
      // sorted order.

      // To avoid sorting the actual symbolInstance array we sort an array of indexes.
      var symbolInstanceIndexes = [];
      for (var i = 0; i < this.symbolInstances.length; i++) {
          symbolInstanceIndexes.push(i);
      }

      var sin = Math.sin(angle),
          cos = Math.cos(angle);

      symbolInstanceIndexes.sort(function (aIndex, bIndex) {
          var a = this$1.symbolInstances[aIndex];
          var b = this$1.symbolInstances[bIndex];
          var aRotated = (sin * a.anchor.x + cos * a.anchor.y) | 0;
          var bRotated = (sin * b.anchor.x + cos * b.anchor.y) | 0;
          return (aRotated - bRotated) || (b.featureIndex - a.featureIndex);
      });

      this.text.indexArray.clear();
      this.icon.indexArray.clear();

      for (var i$2 = 0, list = symbolInstanceIndexes; i$2 < list.length; i$2 += 1) {
          var i$1 = list[i$2];

          var symbolInstance = this$1.symbolInstances[i$1];

          for (var i$3 = 0, list$1 = symbolInstance.placedTextSymbolIndices; i$3 < list$1.length; i$3 += 1) {
              var placedTextSymbolIndex = list$1[i$3];

              var placedSymbol = (this$1.placedGlyphArray.get(placedTextSymbolIndex)   );

              var endIndex = placedSymbol.vertexStartIndex + placedSymbol.numGlyphs * 4;
              for (var vertexIndex = placedSymbol.vertexStartIndex; vertexIndex < endIndex; vertexIndex += 4) {
                  this$1.text.indexArray.emplaceBack(vertexIndex, vertexIndex + 1, vertexIndex + 2);
                  this$1.text.indexArray.emplaceBack(vertexIndex + 1, vertexIndex + 2, vertexIndex + 3);
              }
          }

          var placedIcon = (this$1.placedIconArray.get(i$1)   );
          if (placedIcon.numGlyphs) {
              var vertexIndex$1 = placedIcon.vertexStartIndex;
              this$1.icon.indexArray.emplaceBack(vertexIndex$1, vertexIndex$1 + 1, vertexIndex$1 + 2);
              this$1.icon.indexArray.emplaceBack(vertexIndex$1 + 1, vertexIndex$1 + 2, vertexIndex$1 + 3);
          }
      }

      if (this.text.indexBuffer) { this.text.indexBuffer.updateData(this.text.indexArray.serialize()); }
      if (this.icon.indexBuffer) { this.icon.indexBuffer.updateData(this.icon.indexArray.serialize()); }
  };

SymbolBucket.programInterfaces = symbolInterfaces;

// this constant is based on the size of StructArray indexes used in a symbol
// bucket--namely, glyphOffsetArrayStart
// eg the max valid UInt16 is 65,535
// See https://github.com/mapbox/mapbox-gl-js/issues/2907 for motivation
// lineStartIndex and textBoxStartIndex could potentially be concerns
// but we expect there to be many fewer boxes/lines than glyphs
SymbolBucket.MAX_GLYPHS = 65535;

SymbolBucket.addDynamicAttributes = addDynamicAttributes;

module.exports = SymbolBucket;

},{"../../gl/index_buffer":72,"../../gl/vertex_buffer":73,"../../symbol/anchor":206,"../../symbol/mergelines":215,"../../symbol/opacity_state":216,"../../symbol/symbol_size":222,"../../symbol/transform_text":223,"../../util/script_detection":262,"../../util/struct_array":264,"../../util/verticalize_punctuation":269,"../index_array_type":61,"../load_geometry":62,"../program_configuration":64,"../segment":66,"../vertex_array_type":67,"@mapbox/point-geometry":2,"@mapbox/vector-tile":6}],59:[function(require,module,exports){
'use strict';//      

/**
 * The maximum value of a coordinate in the internal tile coordinate system. Coordinates of
 * all source features normalized to this extent upon load.
 *
 * The value is a consequence of the following:
 *
 * * Vertex buffer store positions as signed 16 bit integers.
 * * One bit is lost for signedness to support tile buffers.
 * * One bit is lost because the line vertex buffer used to pack 1 bit of other data into the int.
 *   This is no longer the case but we're reserving this bit anyway.
 * * One bit is lost to support features extending past the extent on the right edge of the tile.
 * * This leaves us with 2^13 = 8192
 *
 * @private
 * @readonly
 */
module.exports = 8192;

},{}],60:[function(require,module,exports){
'use strict';//      

var Point = require('@mapbox/point-geometry');
var loadGeometry = require('./load_geometry');
var EXTENT = require('./extent');
var featureFilter = require('../style-spec/feature_filter');
var createStructArrayType = require('../util/struct_array');
var Grid = require('grid-index');
var DictionaryCoder = require('../util/dictionary_coder');
var vt = require('@mapbox/vector-tile');
var Protobuf = require('pbf');
var GeoJSONFeature = require('../util/vectortile_to_geojson');
var arraysIntersect = require('../util/util').arraysIntersect;
var TileCoord = require('../source/tile_coord');

                                                            
                                                   
                                                                
                                                                

var FeatureIndexArray = createStructArrayType({
    members: [
        // the index of the feature in the original vectortile
        { type: 'Uint32', name: 'featureIndex' },
        // the source layer the feature appears in
        { type: 'Uint16', name: 'sourceLayerIndex' },
        // the bucket the feature appears in
        { type: 'Uint16', name: 'bucketIndex' }
    ]
});

                        
                  
                    
                     
                                       
                             
             
                                    
                              
      
                              
                           
                    
 

                                      
                     
                        
                      
                                             
                                        
 

var FeatureIndex = function FeatureIndex(coord       ,
            overscaling    ,
            grid   ,
            featureIndexArray                ) {
    this.coord = coord;
    this.overscaling = overscaling;
    this.x = coord.x;
    this.y = coord.y;
    this.z = coord.z - Math.log(overscaling) / Math.LN2;
    this.grid = grid || new Grid(EXTENT, 16, 0);
    this.featureIndexArray = featureIndexArray || new FeatureIndexArray();
};

FeatureIndex.deserialize = function deserialize (serialized                    ,
                   rawTileData         ) {
    var coord = serialized.coord;
    var self = new FeatureIndex(
        new TileCoord(coord.z, coord.x, coord.y, coord.w),
        serialized.overscaling,
        new Grid(serialized.grid),
        new FeatureIndexArray(serialized.featureIndexArray));

    self.rawTileData = rawTileData;
    self.bucketLayerIDs = serialized.bucketLayerIDs;

    return self;
};

FeatureIndex.prototype.insert = function insert (feature               , geometry                 , featureIndex    , sourceLayerIndex    , bucketIndex    ) {
        var this$1 = this;

    var key = this.featureIndexArray.length;
    this.featureIndexArray.emplaceBack(featureIndex, sourceLayerIndex, bucketIndex);

    for (var r = 0; r < geometry.length; r++) {
        var ring = geometry[r];

        var bbox = [Infinity, Infinity, -Infinity, -Infinity];
        for (var i = 0; i < ring.length; i++) {
            var p = ring[i];
            bbox[0] = Math.min(bbox[0], p.x);
            bbox[1] = Math.min(bbox[1], p.y);
            bbox[2] = Math.max(bbox[2], p.x);
            bbox[3] = Math.max(bbox[3], p.y);
        }

        this$1.grid.insert(key, bbox[0], bbox[1], bbox[2], bbox[3]);
    }
};

FeatureIndex.prototype.setCollisionIndex = function setCollisionIndex (collisionIndex            ) {
    this.collisionIndex = collisionIndex;
};

FeatureIndex.prototype.serialize = function serialize (transferables                  )                     {
    var grid = this.grid.toArrayBuffer();
    if (transferables) {
        transferables.push(grid);
    }
    return {
        coord: this.coord,
        overscaling: this.overscaling,
        grid: grid,
        featureIndexArray: this.featureIndexArray.serialize(transferables),
        bucketLayerIDs: this.bucketLayerIDs
    };
};

// Finds features in this tile at a particular position.
FeatureIndex.prototype.query = function query (args             , styleLayers                    ) {
    if (!this.vtLayers) {
        this.vtLayers = new vt.VectorTile(new Protobuf(this.rawTileData)).layers;
        this.sourceLayerCoder = new DictionaryCoder(this.vtLayers ? Object.keys(this.vtLayers).sort() : ['_geojsonTileLayer']);
    }

    var result = {};

    var params = args.params || {},
        pixelsToTileUnits = EXTENT / args.tileSize / args.scale,
        filter = featureFilter(params.filter);

    var queryGeometry = args.queryGeometry;
    var additionalRadius = args.additionalRadius * pixelsToTileUnits;

    var minX = Infinity;
    var minY = Infinity;
    var maxX = -Infinity;
    var maxY = -Infinity;
    for (var i = 0; i < queryGeometry.length; i++) {
        var ring = queryGeometry[i];
        for (var k = 0; k < ring.length; k++) {
            var p = ring[k];
            minX = Math.min(minX, p.x);
            minY = Math.min(minY, p.y);
            maxX = Math.max(maxX, p.x);
            maxY = Math.max(maxY, p.y);
        }
    }

    var matching = this.grid.query(minX - additionalRadius, minY - additionalRadius, maxX + additionalRadius, maxY + additionalRadius);
    matching.sort(topDownFeatureComparator);
    this.filterMatching(result, matching, this.featureIndexArray, queryGeometry, filter, params.layers, styleLayers, args.bearing, pixelsToTileUnits);

    var matchingSymbols = this.collisionIndex ?
        this.collisionIndex.queryRenderedSymbols(queryGeometry, this.coord, args.tileSourceMaxZoom, EXTENT / args.tileSize, args.collisionBoxArray, args.sourceID) :
        [];
    matchingSymbols.sort();
    this.filterMatching(result, matchingSymbols, args.collisionBoxArray, queryGeometry, filter, params.layers, styleLayers, args.bearing, pixelsToTileUnits);

    return result;
};

FeatureIndex.prototype.filterMatching = function filterMatching (
    result                                                                  ,
    matching        ,
    array ,
    queryGeometry                 ,
    filter           ,
    filterLayerIDs           ,
    styleLayers                    ,
    bearing    ,
    pixelsToTileUnits        
) {
        var this$1 = this;

    var previousIndex;
    for (var k = 0; k < matching.length; k++) {
        var index = matching[k];

        // don't check the same feature more than once
        if (index === previousIndex) { continue; }
        previousIndex = index;

        var match = array.get(index);

        var layerIDs = this$1.bucketLayerIDs[match.bucketIndex];
        if (filterLayerIDs && !arraysIntersect(filterLayerIDs, layerIDs)) { continue; }

        var sourceLayerName = this$1.sourceLayerCoder.decode(match.sourceLayerIndex);
        var sourceLayer = this$1.vtLayers[sourceLayerName];
        var feature = sourceLayer.feature(match.featureIndex);

        if (!filter({zoom: this$1.coord.z}, feature)) { continue; }

        var geometry = null;

        for (var l = 0; l < layerIDs.length; l++) {
            var layerID = layerIDs[l];

            if (filterLayerIDs && filterLayerIDs.indexOf(layerID) < 0) {
                continue;
            }

            var styleLayer = styleLayers[layerID];
            if (!styleLayer) { continue; }

            if (styleLayer.type !== 'symbol') {
                // all symbols already match the style
                if (!geometry) {
                    geometry = loadGeometry(feature);
                }
                if (!styleLayer.queryIntersectsFeature(queryGeometry, feature, geometry, this$1.z, bearing, pixelsToTileUnits)) {
                    continue;
                }
            }

            var geojsonFeature = new GeoJSONFeature(feature, this$1.z, this$1.x, this$1.y);
            (geojsonFeature ).layer = styleLayer.serialize();
            var layerResult = result[layerID];
            if (layerResult === undefined) {
                layerResult = result[layerID] = [];
            }
            layerResult.push({ featureIndex: index, feature: geojsonFeature });
        }
    }
};

FeatureIndex.prototype.hasLayer = function hasLayer (id    ) {
        var this$1 = this;

    for (var i = 0, list = this$1.bucketLayerIDs; i < list.length; i += 1) {
        var layerIDs = list[i];

            for (var i$1 = 0, list$1 = layerIDs; i$1 < list$1.length; i$1 += 1) {
            var layerID = list$1[i$1];

                if (id === layerID) { return true; }
        }
    }

    return false;
};

module.exports = FeatureIndex;

function topDownFeatureComparator(a, b) {
    return b - a;
}

},{"../source/tile_coord":113,"../style-spec/feature_filter":146,"../util/dictionary_coder":251,"../util/struct_array":264,"../util/util":267,"../util/vectortile_to_geojson":268,"./extent":59,"./load_geometry":62,"@mapbox/point-geometry":2,"@mapbox/vector-tile":6,"grid-index":24,"pbf":39}],61:[function(require,module,exports){
'use strict';//      

var createStructArrayType = require('../util/struct_array');

/**
 * An index array stores Uint16 indicies of vertexes in a corresponding vertex array. We use
 * two kinds of index arrays: arrays storing groups of three indicies, forming triangles; and
 * arrays storing pairs of indicies, forming line segments.
 * @private
 */

function createIndexArrayType(components        ) {
    return createStructArrayType({
        members: [{
            type: 'Uint16',
            name: 'vertices',
            components: components
        }]
    });
}

module.exports = {
    LineIndexArray: createIndexArrayType(2),
    TriangleIndexArray: createIndexArrayType(3)
};

},{"../util/struct_array":264}],62:[function(require,module,exports){
'use strict';//      

var util = require('../util/util');
var EXTENT = require('./extent');

                                                

// These bounds define the minimum and maximum supported coordinate values.
// While visible coordinates are within [0, EXTENT], tiles may theoretically
// contain cordinates within [-Infinity, Infinity]. Our range is limited by the
// number of bits used to represent the coordinate.
function createBounds(bits) {
    return {
        min: -1 * Math.pow(2, bits - 1),
        max: Math.pow(2, bits - 1) - 1
    };
}

var bounds = createBounds(16);

/**
 * Loads a geometry from a VectorTileFeature and scales it to the common extent
 * used internally.
 * @param {VectorTileFeature} feature
 * @private
 */
module.exports = function loadGeometry(feature                   )                      {
    var scale = EXTENT / feature.extent;
    var geometry = feature.loadGeometry();
    for (var r = 0; r < geometry.length; r++) {
        var ring = geometry[r];
        for (var p = 0; p < ring.length; p++) {
            var point = ring[p];
            // round here because mapbox-gl-native uses integers to represent
            // points and we need to do the same to avoid renering differences.
            point.x = Math.round(point.x * scale);
            point.y = Math.round(point.y * scale);

            if (point.x < bounds.min || point.x > bounds.max || point.y < bounds.min || point.y > bounds.max) {
                util.warnOnce('Geometry exceeds allowed extent, reduce your vector tile buffer size');
            }
        }
    }
    return geometry;
};

},{"../util/util":267,"./extent":59}],63:[function(require,module,exports){
'use strict';//      

var createStructArrayType = require('../util/struct_array');

var PosArray = createStructArrayType({
    members: [{ name: 'a_pos', type: 'Int16', components: 2 }]
});

module.exports = PosArray;

},{"../util/struct_array":264}],64:[function(require,module,exports){
'use strict';//      

                                                                     

var createVertexArrayType = require('./vertex_array_type');
var packUint8ToFloat = require('../shaders/encode_attribute').packUint8ToFloat;
var VertexBuffer = require('../gl/vertex_buffer');
var Color = require('../style-spec/util/color');

                                                   
                                                                                                                  
                                             
                                                                                             
                                                                                           

                        
                 
                   
                       
 

                       
                     
                  
                            
 

                                       
                                       
 

                                
                                             
                                       
                                                     
                                               
                                                 
                                            
                                        
 

function packColor(color       )                   {
    return [
        packUint8ToFloat(255 * color.r, 255 * color.g),
        packUint8ToFloat(255 * color.b, 255 * color.a)
    ];
}

/**
 *  `Binder` is the interface definition for the strategies for constructing,
 *  uploading, and binding paint property data as GLSL attributes.
 *
 *  It has three implementations, one for each of the three strategies we use:
 *
 *  * For _constant_ properties -- those whose value is a constant, or the constant
 *    result of evaluating a camera expression at a particular camera position -- we
 *    don't need a vertex buffer, and instead use a uniform.
 *  * For data expressions, we use a vertex buffer with a single attribute value,
 *    the evaluated result of the source function for the given feature.
 *  * For composite expressions, we use a vertex buffer with two attributes: min and
 *    max values covering the range of zooms at which we expect the tile to be
 *    displayed. These values are calculated by evaluating the composite expression for
 *    the given feature at strategically chosen zoom levels. In addition to this
 *    attribute data, we also use a uniform value which the shader uses to interpolate
 *    between the min and max value at the final displayed zoom level. The use of a
 *    uniform allows us to cheaply update the value on every frame.
 *
 *  Note that the shader source varies depending on whether we're using a uniform or
 *  attribute. We dynamically compile shaders at runtime to accomodate this.
 *
 * @private
 */
                     
                     
                                

                                               
                                     
                                      
                                               

                             

                                          
                                 
                                          
                                                                       
 

var ConstantBinder = function ConstantBinder(value , name      , type      , property      ) {
      this.value = value;
      this.name = name;
      this.type = type;
      this.property = property;
      this.statistics = { max: -Infinity };
  };

  ConstantBinder.prototype.defines = function defines () {
      return [("#define HAS_UNIFORM_u_" + (this.name))];
  };

  ConstantBinder.prototype.populatePaintArray = function populatePaintArray () {};

  ConstantBinder.prototype.setUniforms = function setUniforms (gl                     ,
              program       ,
              globals                ,
              currentValue                                 ) {
      var value    = currentValue.constantOr(this.value);
      if (this.type === 'color') {
          gl.uniform4f(program.uniforms[("u_" + (this.name))], value.r, value.g, value.b, value.a);
      } else {
          gl.uniform1f(program.uniforms[("u_" + (this.name))], value);
      }
  };

var SourceExpressionBinder = function SourceExpressionBinder(expression                , name      , type      , property      ) {
      this.expression = expression;
      this.name = name;
      this.type = type;
      this.property = property;
      this.statistics = { max: -Infinity };
  };

  SourceExpressionBinder.prototype.defines = function defines () {
      return [];
  };

  SourceExpressionBinder.prototype.populatePaintArray = function populatePaintArray (paintArray           ,
                     start      ,
                     length      ,
                     feature       ) {
        var this$1 = this;

      var value = this.expression.evaluate({zoom: 0}, feature);

      if (this.type === 'color') {
          var color = packColor(value);
          for (var i = start; i < length; i++) {
              var struct    = paintArray.get(i);
              struct[("a_" + (this$1.name) + "0")] = color[0];
              struct[("a_" + (this$1.name) + "1")] = color[1];
          }
      } else {
          for (var i$1 = start; i$1 < length; i$1++) {
              var struct$1    = paintArray.get(i$1);
              struct$1[("a_" + (this$1.name))] = value;
          }

          this.statistics.max = Math.max(this.statistics.max, value);
      }
  };

  SourceExpressionBinder.prototype.setUniforms = function setUniforms (gl                     , program       ) {
      gl.uniform1f(program.uniforms[("a_" + (this.name) + "_t")], 0);
  };

var CompositeExpressionBinder = function CompositeExpressionBinder(expression                   , name      , type      , property      , useIntegerZoom       , zoom      ) {
      this.expression = expression;
      this.name = name;
      this.type = type;
      this.property = property;
      this.useIntegerZoom = useIntegerZoom;
      this.zoom = zoom;
      this.statistics = { max: -Infinity };
  };

  CompositeExpressionBinder.prototype.defines = function defines () {
      return [];
  };

  CompositeExpressionBinder.prototype.populatePaintArray = function populatePaintArray (paintArray           ,
                     start      ,
                     length      ,
                     feature       ) {
        var this$1 = this;

      var min = this.expression.evaluate({zoom: this.zoom  }, feature);
      var max = this.expression.evaluate({zoom: this.zoom + 1}, feature);

      if (this.type === 'color') {
          var minColor = packColor(min);
          var maxColor = packColor(max);
          for (var i = start; i < length; i++) {
              var struct    = paintArray.get(i);
              struct[("a_" + (this$1.name) + "0")] = minColor[0];
              struct[("a_" + (this$1.name) + "1")] = minColor[1];
              struct[("a_" + (this$1.name) + "2")] = maxColor[0];
              struct[("a_" + (this$1.name) + "3")] = maxColor[1];
          }
      } else {
          for (var i$1 = start; i$1 < length; i$1++) {
              var struct$1    = paintArray.get(i$1);
              struct$1[("a_" + (this$1.name) + "0")] = min;
              struct$1[("a_" + (this$1.name) + "1")] = max;
          }

          this.statistics.max = Math.max(this.statistics.max, min, max);
      }
  };

  CompositeExpressionBinder.prototype.interpolationFactor = function interpolationFactor (currentZoom      ) {
      if (this.useIntegerZoom) {
          return this.expression.interpolationFactor(Math.floor(currentZoom), this.zoom, this.zoom + 1);
      } else {
          return this.expression.interpolationFactor(currentZoom, this.zoom, this.zoom + 1);
      }
  };

  CompositeExpressionBinder.prototype.setUniforms = function setUniforms (gl                     , program       , globals                ) {
      gl.uniform1f(program.uniforms[("a_" + (this.name) + "_t")], this.interpolationFactor(globals.zoom));
  };

                                              
                                 
                                    
                                       
  

/**
 * ProgramConfiguration contains the logic for binding style layer properties and tile
 * layer feature data into GL program uniforms and vertex attributes.
 *
 * Non-data-driven property values are bound to shader uniforms. Data-driven property
 * values are bound to vertex attributes. In order to support a uniform GLSL syntax over
 * both, [Mapbox GL Shaders](https://github.com/mapbox/mapbox-gl-shaders) defines a `#pragma`
 * abstraction, which ProgramConfiguration is responsible for implementing. At runtime,
 * it examines the attributes of a particular layer, combines this with fixed knowledge
 * about how layers of the particular type are implemented, and determines which uniforms
 * and vertex attributes will be required. It can then substitute the appropriate text
 * into the shader source code, create and link a program, and bind the uniforms and
 * vertex attributes in preparation for drawing.
 *
 * When a vector tile is parsed, this same configuration information is used to
 * populate the attribute buffers needed for data-driven styling using the zoom
 * level and feature property data.
 *
 * @private
 */
var ProgramConfiguration = function ProgramConfiguration() {
      this.binders = {};
      this.cacheKey = '';
  };

  ProgramConfiguration.createDynamic = function createDynamic (programInterface                , layer          , zoom      ) {
      var self = new ProgramConfiguration();
      var attributes = [];

      for (var i = 0, list = programInterface.paintAttributes || []; i < list.length; i += 1) {
          var attribute = list[i];

          var property = attribute.property;
          var name = attribute.name || property.replace(((layer.type) + "-"), '').replace(/-/g, '_');
          var value                                    = (layer.paint   ).get(property);
          var type = value.property.specification.type;
          var useIntegerZoom = value.property.useIntegerZoom;

          if (value.value.kind === 'constant') {
              self.binders[name] = new ConstantBinder(value.value, name, type, property);
              self.cacheKey += "/u_" + name;
          } else if (value.value.kind === 'source') {
              self.binders[name] = new SourceExpressionBinder(value.value, name, type, property);
              self.cacheKey += "/a_" + name;
              attributes.push({
                  name: ("a_" + name),
                  type: 'Float32',
                  components: type === 'color' ? 2 : 1
              });
          } else {
              self.binders[name] = new CompositeExpressionBinder(value.value, name, type, property, useIntegerZoom, zoom);
              self.cacheKey += "/z_" + name;
              attributes.push({
                  name: ("a_" + name),
                  type: 'Float32',
                  components: type === 'color' ? 4 : 2
              });
          }
      }

      self.PaintVertexArray = createVertexArrayType(attributes);
      self.interface = programInterface;
      self.layer = layer;

      return self;
  };

  ProgramConfiguration.forBackgroundColor = function forBackgroundColor (color     , opacity      ) {
      var self = new ProgramConfiguration();

      self.binders.color = new ConstantBinder(color, 'color', 'color', 'background-color');
      self.cacheKey += "/u_color";

      self.binders.opacity = new ConstantBinder(opacity, 'opacity', 'number', 'background-opacity');
      self.cacheKey += "/u_opacity";

      return self;
  };

  ProgramConfiguration.forBackgroundPattern = function forBackgroundPattern (opacity      ) {
      var self = new ProgramConfiguration();

      self.binders.opacity = new ConstantBinder(opacity, 'opacity', 'number', 'background-opacity');
      self.cacheKey += "/u_opacity";

      return self;
  };

  ProgramConfiguration.forTileClippingMask = function forTileClippingMask () {
      // The color and opacity values don't matter.
      return ProgramConfiguration.forBackgroundColor(Color.black, 1);
  };

  ProgramConfiguration.prototype.populatePaintArray = function populatePaintArray (length      , feature       ) {
        var this$1 = this;

      var paintArray = this.paintVertexArray;
      if (paintArray.bytesPerElement === 0) { return; }

      var start = paintArray.length;
      paintArray.resize(length);

      for (var name in this$1.binders) {
          this$1.binders[name].populatePaintArray(
              paintArray,
              start, length,
              feature);
      }
  };

  ProgramConfiguration.prototype.defines = function defines ()              {
        var this$1 = this;

      var result = [];
      for (var name in this$1.binders) {
          result.push.apply(result, this$1.binders[name].defines());
      }
      return result;
  };

  ProgramConfiguration.prototype.setUniforms = function setUniforms (gl                     , program       , properties                             , globals                ) {
        var this$1 = this;

      for (var name in this$1.binders) {
          var binder = this$1.binders[name];
          binder.setUniforms(gl, program, globals, properties.get(binder.property));
      }
  };

  ProgramConfiguration.prototype.serialize = function serialize (transferables                    )                                {
        var this$1 = this;

      if (this.paintVertexArray.length === 0) {
          return null;
      }

      var statistics                        = {};
      for (var name in this$1.binders) {
          statistics[this$1.binders[name].property] = this$1.binders[name].statistics;
      }

      return {
          array: this.paintVertexArray.serialize(transferables),
          type: this.paintVertexArray.constructor.serialize(),
          statistics: statistics
      };
  };

  ProgramConfiguration.deserialize = function deserialize (programInterface                , layer          , zoom      , serialized                               ) {
      var self = ProgramConfiguration.createDynamic(programInterface, layer, zoom);
      if (serialized) {
          self.PaintVertexArray = createVertexArrayType(serialized.type.members);
          self.paintVertexArray = new self.PaintVertexArray(serialized.array);
          self.paintPropertyStatistics = serialized.statistics;
      }
      return self;
  };

  ProgramConfiguration.prototype.upload = function upload (gl                     ) {
      if (this.paintVertexArray) {
          this.paintVertexBuffer = new VertexBuffer(gl, this.paintVertexArray);
      }
  };

  ProgramConfiguration.prototype.destroy = function destroy () {
      if (this.paintVertexBuffer) {
          this.paintVertexBuffer.destroy();
      }
  };

var ProgramConfigurationSet = function ProgramConfigurationSet(programInterface                , layers                          , zoom      , arrays                                             ) {
      var this$1 = this;

      this.programConfigurations = {};
      if (arrays) {
          for (var i = 0, list = layers; i < list.length; i += 1) {
              var layer = list[i];

            this$1.programConfigurations[layer.id] = ProgramConfiguration.deserialize(programInterface, layer, zoom, arrays[layer.id]);
          }
      } else {
          for (var i$1 = 0, list$1 = layers; i$1 < list$1.length; i$1 += 1) {
              var layer$1 = list$1[i$1];

            var programConfiguration = ProgramConfiguration.createDynamic(programInterface, layer$1, zoom);
              programConfiguration.paintVertexArray = new programConfiguration.PaintVertexArray();
              this$1.programConfigurations[layer$1.id] = programConfiguration;
          }
      }
  };

  ProgramConfigurationSet.prototype.populatePaintArrays = function populatePaintArrays (length      , feature       ) {
        var this$1 = this;

      for (var key in this$1.programConfigurations) {
          this$1.programConfigurations[key].populatePaintArray(length, feature);
      }
  };

  ProgramConfigurationSet.prototype.serialize = function serialize (transferables                    ) {
        var this$1 = this;

      var result = {};
      for (var layerId in this$1.programConfigurations) {
          var serialized = this$1.programConfigurations[layerId].serialize(transferables);
          if (!serialized) { continue; }
          result[layerId] = serialized;
      }
      return result;
  };

  ProgramConfigurationSet.prototype.get = function get (layerId      ) {
      return this.programConfigurations[layerId];
  };

  ProgramConfigurationSet.prototype.upload = function upload (gl                     ) {
        var this$1 = this;

      for (var layerId in this$1.programConfigurations) {
          this$1.programConfigurations[layerId].upload(gl);
      }
  };

  ProgramConfigurationSet.prototype.destroy = function destroy () {
        var this$1 = this;

      for (var layerId in this$1.programConfigurations) {
          this$1.programConfigurations[layerId].destroy();
      }
  };

module.exports = {
    ProgramConfiguration: ProgramConfiguration,
    ProgramConfigurationSet: ProgramConfigurationSet
};

},{"../gl/vertex_buffer":73,"../shaders/encode_attribute":97,"../style-spec/util/color":151,"./vertex_array_type":67}],65:[function(require,module,exports){
'use strict';//      

var createStructArrayType = require('../util/struct_array');

var RasterBoundsArray = createStructArrayType({
    members: [
        { name: 'a_pos', type: 'Int16', components: 2 },
        { name: 'a_texture_pos', type: 'Int16', components: 2 }
    ]
});

module.exports = RasterBoundsArray;

},{"../util/struct_array":264}],66:[function(require,module,exports){
'use strict';//      

var ref = require('../util/util');
var warnOnce = ref.warnOnce;

                                                                   
                                                      

var MAX_VERTEX_ARRAY_LENGTH = Math.pow(2, 16) - 1;

                       
                         
                            
                         
                            
                                       
 

var SegmentVector = function SegmentVector(segments) {
    if ( segments === void 0 ) segments              = [];

    this.segments = segments;
};

SegmentVector.prototype.prepareSegment = function prepareSegment (numVertices    , layoutVertexArray         , indexArray         )      {
    var segment      = this.segments[this.segments.length - 1];
    if (numVertices > MAX_VERTEX_ARRAY_LENGTH) { warnOnce(("Max vertices per segment is " + MAX_VERTEX_ARRAY_LENGTH + ": bucket requested " + numVertices)); }
    if (!segment || segment.vertexLength + numVertices > module.exports.MAX_VERTEX_ARRAY_LENGTH) {
        segment = ({
            vertexOffset: layoutVertexArray.length,
            primitiveOffset: indexArray.length,
            vertexLength: 0,
            primitiveLength: 0
        } );
        this.segments.push(segment);
    }
    return segment;
};

SegmentVector.prototype.get = function get () {
    return this.segments;
};

SegmentVector.prototype.destroy = function destroy () {
        var this$1 = this;

    for (var i = 0, list = this$1.segments; i < list.length; i += 1) {
        var segment = list[i];

            for (var k in segment.vaos) {
            segment.vaos[k].destroy();
        }
    }
};

module.exports = {
    SegmentVector: SegmentVector,

    /**
     * The maximum size of a vertex array. This limit is imposed by WebGL's 16 bit
     * addressing of vertex buffers.
     * @private
     * @readonly
     */
    MAX_VERTEX_ARRAY_LENGTH: MAX_VERTEX_ARRAY_LENGTH
};

},{"../util/util":267}],67:[function(require,module,exports){
'use strict';//      

var createStructArrayType = require('../util/struct_array');

                                                   

module.exports = createVertexArrayType;

/**
 * A vertex array stores data for each vertex in a geometry. Elements are aligned to 4 byte
 * boundaries for best performance in WebGL.
 * @private
 */
function createVertexArrayType(members                  
                 
                   
                         
  ) {
    return createStructArrayType({
        members: members,
        alignment: 4
    });
}

},{"../util/struct_array":264}],68:[function(require,module,exports){
'use strict';//      

/**
 * A coordinate is a column, row, zoom combination, often used
 * as the data component of a tile.
 *
 * @param {number} column
 * @param {number} row
 * @param {number} zoom
 * @private
 */
var Coordinate = function Coordinate(column    , row    , zoom    ) {
    this.column = column;
    this.row = row;
    this.zoom = zoom;
};

/**
 * Create a clone of this coordinate that can be mutated without
 * changing the original coordinate
 *
 * @returns {Coordinate} clone
 * @private
 * var coord = new Coordinate(0, 0, 0);
 * var c2 = coord.clone();
 * // since coord is cloned, modifying a property of c2 does
 * // not modify it.
 * c2.zoom = 2;
 */
Coordinate.prototype.clone = function clone () {
    return new Coordinate(this.column, this.row, this.zoom);
};

/**
 * Zoom this coordinate to a given zoom level. This returns a new
 * coordinate object, not mutating the old one.
 *
 * @param {number} zoom
 * @returns {Coordinate} zoomed coordinate
 * @private
 * @example
 * var coord = new Coordinate(0, 0, 0);
 * var c2 = coord.zoomTo(1);
 * c2 // equals new Coordinate(0, 0, 1);
 */
Coordinate.prototype.zoomTo = function zoomTo (zoom    ) { return this.clone()._zoomTo(zoom); };

/**
 * Subtract the column and row values of this coordinate from those
 * of another coordinate. The other coordinat will be zoomed to the
 * same level as `this` before the subtraction occurs
 *
 * @param {Coordinate} c other coordinate
 * @returns {Coordinate} result
 * @private
 */
Coordinate.prototype.sub = function sub (c        ) { return this.clone()._sub(c); };

Coordinate.prototype._zoomTo = function _zoomTo (zoom    ) {
    var scale = Math.pow(2, zoom - this.zoom);
    this.column *= scale;
    this.row *= scale;
    this.zoom = zoom;
    return this;
};

Coordinate.prototype._sub = function _sub (c        ) {
    c = c.zoomTo(this.zoom);
    this.column -= c.column;
    this.row -= c.row;
    return this;
};

module.exports = Coordinate;

},{}],69:[function(require,module,exports){
'use strict';//      

var wrap = require('../util/util').wrap;

/**
 * A `LngLat` object represents a given longitude and latitude coordinate, measured in degrees.
 *
 * Mapbox GL uses longitude, latitude coordinate order (as opposed to latitude, longitude) to match GeoJSON.
 *
 * Note that any Mapbox GL method that accepts a `LngLat` object as an argument or option
 * can also accept an `Array` of two numbers and will perform an implicit conversion.
 * This flexible type is documented as {@link LngLatLike}.
 *
 * @param {number} lng Longitude, measured in degrees.
 * @param {number} lat Latitude, measured in degrees.
 * @example
 * var ll = new mapboxgl.LngLat(-73.9749, 40.7736);
 * @see [Get coordinates of the mouse pointer](https://www.mapbox.com/mapbox-gl-js/example/mouse-position/)
 * @see [Display a popup](https://www.mapbox.com/mapbox-gl-js/example/popup/)
 * @see [Highlight features within a bounding box](https://www.mapbox.com/mapbox-gl-js/example/using-box-queryrenderedfeatures/)
 * @see [Create a timeline animation](https://www.mapbox.com/mapbox-gl-js/example/timeline-animation/)
 */
var LngLat = function LngLat(lng    , lat    ) {
    if (isNaN(lng) || isNaN(lat)) {
        throw new Error(("Invalid LngLat object: (" + lng + ", " + lat + ")"));
    }
    this.lng = +lng;
    this.lat = +lat;
    if (this.lat > 90 || this.lat < -90) {
        throw new Error('Invalid LngLat latitude value: must be between -90 and 90');
    }
};

/**
 * Returns a new `LngLat` object whose longitude is wrapped to the range (-180, 180).
 *
 * @returns {LngLat} The wrapped `LngLat` object.
 * @example
 * var ll = new mapboxgl.LngLat(286.0251, 40.7736);
 * var wrapped = ll.wrap();
 * wrapped.lng; // = -73.9749
 */
LngLat.prototype.wrap = function wrap$1 () {
    return new LngLat(wrap(this.lng, -180, 180), this.lat);
};

/**
 * Returns the coordinates represented as an array of two numbers.
 *
 * @returns {Array<number>} The coordinates represeted as an array of longitude and latitude.
 * @example
 * var ll = new mapboxgl.LngLat(-73.9749, 40.7736);
 * ll.toArray(); // = [-73.9749, 40.7736]
 */
LngLat.prototype.toArray = function toArray () {
    return [this.lng, this.lat];
};

/**
 * Returns the coordinates represent as a string.
 *
 * @returns {string} The coordinates represented as a string of the format `'LngLat(lng, lat)'`.
 * @example
 * var ll = new mapboxgl.LngLat(-73.9749, 40.7736);
 * ll.toString(); // = "LngLat(-73.9749, 40.7736)"
 */
LngLat.prototype.toString = function toString () {
    return ("LngLat(" + (this.lng) + ", " + (this.lat) + ")");
};

/**
 * Returns a `LngLatBounds` from the coordinates extended by a given `radius`.
 *
 * @param {number} radius Distance in meters from the coordinates to extend the bounds.
 * @returns {LngLatBounds} A new `LngLatBounds` object representing the coordinates extended by the `radius`.
 * @example
 * var ll = new mapboxgl.LngLat(-73.9749, 40.7736);
 * ll.toBounds(100).toArray(); // = [[-73.97501862141328, 40.77351016847229], [-73.97478137858673, 40.77368983152771]]
 */
LngLat.prototype.toBounds = function toBounds (radius    ) {
    var earthCircumferenceInMetersAtEquator = 40075017;
    var latAccuracy = 360 * radius / earthCircumferenceInMetersAtEquator,
        lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);

    var LngLatBounds = require('./lng_lat_bounds');
    return new LngLatBounds(new LngLat(this.lng - lngAccuracy, this.lat - latAccuracy),
        new LngLat(this.lng + lngAccuracy, this.lat + latAccuracy));
};

/**
 * Converts an array of two numbers to a `LngLat` object.
 *
 * If a `LngLat` object is passed in, the function returns it unchanged.
 *
 * @param {LngLatLike} input An array of two numbers to convert, or a `LngLat` object to return.
 * @returns {LngLat} A new `LngLat` object, if a conversion occurred, or the original `LngLat` object.
 * @example
 * var arr = [-73.9749, 40.7736];
 * var ll = mapboxgl.LngLat.convert(arr);
 * ll;   // = LngLat {lng: -73.9749, lat: 40.7736}
 */
LngLat.convert = function convert (input        )     {
    if (input instanceof LngLat) {
        return input;
    }
    if (Array.isArray(input) && (input.length === 2 || input.length === 3)) {
        return new LngLat(Number(input[0]), Number(input[1]));
    }
    if (!Array.isArray(input) && typeof input === 'object' && input !== null) {
        return new LngLat(Number(input.lng), Number(input.lat));
    }
    throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]");
};

/**
 * A {@link LngLat} object, an array of two numbers representing longitude and latitude,
 * or an object with `lng` and `lat` properties.
 *
 * @typedef {LngLat | {lng: number, lat: number} | [number, number]} LngLatLike
 * @example
 * var v1 = new mapboxgl.LngLat(-122.420679, 37.772537);
 * var v2 = [-122.420679, 37.772537];
 */
                                                                                

module.exports = LngLat;

},{"../util/util":267,"./lng_lat_bounds":70}],70:[function(require,module,exports){
'use strict';//      

var LngLat = require('./lng_lat');

                                          

/**
 * A `LngLatBounds` object represents a geographical bounding box,
 * defined by its southwest and northeast points in longitude and latitude.
 *
 * If no arguments are provided to the constructor, a `null` bounding box is created.
 *
 * Note that any Mapbox GL method that accepts a `LngLatBounds` object as an argument or option
 * can also accept an `Array` of two {@link LngLatLike} constructs and will perform an implicit conversion.
 * This flexible type is documented as {@link LngLatBoundsLike}.
 *
 * @param {LngLatLike} [sw] The southwest corner of the bounding box.
 * @param {LngLatLike} [ne] The northeast corner of the bounding box.
 * @example
 * var sw = new mapboxgl.LngLat(-73.9876, 40.7661);
 * var ne = new mapboxgl.LngLat(-73.9397, 40.8002);
 * var llb = new mapboxgl.LngLatBounds(sw, ne);
 */
var LngLatBounds = function LngLatBounds(sw , ne ) {
    if (!sw) {
        return;
    } else if (ne) {
        this.setSouthWest(sw).setNorthEast(ne);
    } else if (sw.length === 4) {
        this.setSouthWest([sw[0], sw[1]]).setNorthEast([sw[2], sw[3]]);
    } else {
        this.setSouthWest(sw[0]).setNorthEast(sw[1]);
    }
};

/**
 * Set the northeast corner of the bounding box
 *
 * @param {LngLatLike} ne
 * @returns {LngLatBounds} `this`
 */
LngLatBounds.prototype.setNorthEast = function setNorthEast (ne        ) {
    this._ne = ne instanceof LngLat ? new LngLat(ne.lng, ne.lat) : LngLat.convert(ne);
    return this;
};

/**
 * Set the southwest corner of the bounding box
 *
 * @param {LngLatLike} sw
 * @returns {LngLatBounds} `this`
 */
LngLatBounds.prototype.setSouthWest = function setSouthWest (sw        ) {
    this._sw = sw instanceof LngLat ? new LngLat(sw.lng, sw.lat) : LngLat.convert(sw);
    return this;
};

/**
 * Extend the bounds to include a given LngLat or LngLatBounds.
 *
 * @param {LngLat|LngLatBounds} obj object to extend to
 * @returns {LngLatBounds} `this`
 */
LngLatBounds.prototype.extend = function extend (obj) {
    var sw = this._sw,
        ne = this._ne;
    var sw2, ne2;

    if (obj instanceof LngLat) {
        sw2 = obj;
        ne2 = obj;

    } else if (obj instanceof LngLatBounds) {
        sw2 = obj._sw;
        ne2 = obj._ne;

        if (!sw2 || !ne2) { return this; }

    } else {
        if (Array.isArray(obj)) {
            if (obj.every(Array.isArray)) {
                return this.extend(LngLatBounds.convert(obj));
            } else {
                return this.extend(LngLat.convert(obj));
            }
        }
        return this;
    }

    if (!sw && !ne) {
        this._sw = new LngLat(sw2.lng, sw2.lat);
        this._ne = new LngLat(ne2.lng, ne2.lat);

    } else {
        sw.lng = Math.min(sw2.lng, sw.lng);
        sw.lat = Math.min(sw2.lat, sw.lat);
        ne.lng = Math.max(ne2.lng, ne.lng);
        ne.lat = Math.max(ne2.lat, ne.lat);
    }

    return this;
};

/**
 * Returns the geographical coordinate equidistant from the bounding box's corners.
 *
 * @returns {LngLat} The bounding box's center.
 * @example
 * var llb = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
 * llb.getCenter(); // = LngLat {lng: -73.96365, lat: 40.78315}
 */
LngLatBounds.prototype.getCenter = function getCenter ()     {
    return new LngLat((this._sw.lng + this._ne.lng) / 2, (this._sw.lat + this._ne.lat) / 2);
};

/**
 * Returns the southwest corner of the bounding box.
 *
 * @returns {LngLat} The southwest corner of the bounding box.
 */
LngLatBounds.prototype.getSouthWest = function getSouthWest ()     { return this._sw; };

/**
* Returns the northeast corner of the bounding box.
*
* @returns {LngLat} The northeast corner of the bounding box.
 */
LngLatBounds.prototype.getNorthEast = function getNorthEast ()     { return this._ne; };

/**
* Returns the northwest corner of the bounding box.
*
* @returns {LngLat} The northwest corner of the bounding box.
 */
LngLatBounds.prototype.getNorthWest = function getNorthWest ()     { return new LngLat(this.getWest(), this.getNorth()); };

/**
* Returns the southeast corner of the bounding box.
*
* @returns {LngLat} The southeast corner of the bounding box.
 */
LngLatBounds.prototype.getSouthEast = function getSouthEast ()     { return new LngLat(this.getEast(), this.getSouth()); };

/**
* Returns the west edge of the bounding box.
*
* @returns {number} The west edge of the bounding box.
 */
LngLatBounds.prototype.getWest = function getWest ()     { return this._sw.lng; };

/**
* Returns the south edge of the bounding box.
*
* @returns {number} The south edge of the bounding box.
 */
LngLatBounds.prototype.getSouth = function getSouth ()     { return this._sw.lat; };

/**
* Returns the east edge of the bounding box.
*
* @returns {number} The east edge of the bounding box.
 */
LngLatBounds.prototype.getEast = function getEast ()     { return this._ne.lng; };

/**
* Returns the north edge of the bounding box.
*
* @returns {number} The north edge of the bounding box.
 */
LngLatBounds.prototype.getNorth = function getNorth ()     { return this._ne.lat; };

/**
 * Returns the bounding box represented as an array.
 *
 * @returns {Array<Array<number>>} The bounding box represented as an array, consisting of the
 *   southwest and northeast coordinates of the bounding represented as arrays of numbers.
 * @example
 * var llb = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
 * llb.toArray(); // = [[-73.9876, 40.7661], [-73.9397, 40.8002]]
 */
LngLatBounds.prototype.toArray = function toArray () {
    return [this._sw.toArray(), this._ne.toArray()];
};

/**
 * Return the bounding box represented as a string.
 *
 * @returns {string} The bounding box represents as a string of the format
 *   `'LngLatBounds(LngLat(lng, lat), LngLat(lng, lat))'`.
 * @example
 * var llb = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
 * llb.toString(); // = "LngLatBounds(LngLat(-73.9876, 40.7661), LngLat(-73.9397, 40.8002))"
 */
LngLatBounds.prototype.toString = function toString () {
    return ("LngLatBounds(" + (this._sw.toString()) + ", " + (this._ne.toString()) + ")");
};

/**
 * Converts an array to a `LngLatBounds` object.
 *
 * If a `LngLatBounds` object is passed in, the function returns it unchanged.
 *
 * Internally, the function calls `LngLat#convert` to convert arrays to `LngLat` values.
 *
 * @param {LngLatBoundsLike} input An array of two coordinates to convert, or a `LngLatBounds` object to return.
 * @returns {LngLatBounds} A new `LngLatBounds` object, if a conversion occurred, or the original `LngLatBounds` object.
 * @example
 * var arr = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
 * var llb = mapboxgl.LngLatBounds.convert(arr);
 * llb;   // = LngLatBounds {_sw: LngLat {lng: -73.9876, lat: 40.7661}, _ne: LngLat {lng: -73.9397, lat: 40.8002}}
 */
LngLatBounds.convert = function convert (input              )           {
    if (!input || input instanceof LngLatBounds) { return input; }
    return new LngLatBounds(input);
};

/**
 * A {@link LngLatBounds} object, an array of {@link LngLatLike} objects in [sw, ne] order,
 * or an array of numbers in [west, south, east, north] order.
 *
 * @typedef {LngLatBounds | [LngLatLike, LngLatLike] | [number, number, number, number]} LngLatBoundsLike
 * @example
 * var v1 = new mapboxgl.LngLatBounds(
 *   new mapboxgl.LngLat(-73.9876, 40.7661),
 *   new mapboxgl.LngLat(-73.9397, 40.8002)
 * );
 * var v2 = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002])
 * var v3 = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
 */
                                                                                                          

module.exports = LngLatBounds;

},{"./lng_lat":69}],71:[function(require,module,exports){
'use strict';//      

var LngLat = require('./lng_lat'),
    Point = require('@mapbox/point-geometry'),
    Coordinate = require('./coordinate'),
    util = require('../util/util'),
    interp = require('../style-spec/util/interpolate').number,
    TileCoord = require('../source/tile_coord'),
    EXTENT = require('../data/extent'),
    glmatrix = require('@mapbox/gl-matrix');

var vec4 = glmatrix.vec4,
    mat4 = glmatrix.mat4,
    mat2 = glmatrix.mat2;

/**
 * A single transform, generally used for a single tile to be
 * scaled, rotated, and zoomed.
 * @private
 */
var Transform = function Transform(minZoom     , maxZoom     , renderWorldCopies            ) {
    this.tileSize = 512; // constant

    this._renderWorldCopies = renderWorldCopies === undefined ? true : renderWorldCopies;
    this._minZoom = minZoom || 0;
    this._maxZoom = maxZoom || 22;

    this.latRange = [-85.05113, 85.05113];

    this.width = 0;
    this.height = 0;
    this._center = new LngLat(0, 0);
    this.zoom = 0;
    this.angle = 0;
    this._fov = 0.6435011087932844;
    this._pitch = 0;
    this._unmodified = true;
    this._posMatrixCache = {};
};

var prototypeAccessors = { minZoom: {},maxZoom: {},renderWorldCopies: {},worldSize: {},centerPoint: {},size: {},bearing: {},pitch: {},fov: {},zoom: {},center: {},unmodified: {},x: {},y: {},point: {} };

Transform.prototype.clone = function clone ()        {
    var clone = new Transform(this._minZoom, this._maxZoom, this._renderWorldCopies);
    clone.tileSize = this.tileSize;
    clone.latRange = this.latRange;
    clone.width = this.width;
    clone.height = this.height;
    clone._center = this._center;
    clone.zoom = this.zoom;
    clone.angle = this.angle;
    clone._fov = this._fov;
    clone._pitch = this._pitch;
    clone._unmodified = this._unmodified;
    clone._calcMatrices();
    return clone;
};

prototypeAccessors.minZoom.get = function ()     { return this._minZoom; };
prototypeAccessors.minZoom.set = function (zoom    ) {
    if (this._minZoom === zoom) { return; }
    this._minZoom = zoom;
    this.zoom = Math.max(this.zoom, zoom);
};

prototypeAccessors.maxZoom.get = function ()     { return this._maxZoom; };
prototypeAccessors.maxZoom.set = function (zoom    ) {
    if (this._maxZoom === zoom) { return; }
    this._maxZoom = zoom;
    this.zoom = Math.min(this.zoom, zoom);
};

prototypeAccessors.renderWorldCopies.get = function ()      {
    return this._renderWorldCopies;
};

prototypeAccessors.worldSize.get = function ()     {
    return this.tileSize * this.scale;
};

prototypeAccessors.centerPoint.get = function () {
    return this.size._div(2);
};

prototypeAccessors.size.get = function () {
    return new Point(this.width, this.height);
};

prototypeAccessors.bearing.get = function ()     {
    return -this.angle / Math.PI * 180;
};
prototypeAccessors.bearing.set = function (bearing    ) {
    var b = -util.wrap(bearing, -180, 180) * Math.PI / 180;
    if (this.angle === b) { return; }
    this._unmodified = false;
    this.angle = b;
    this._calcMatrices();

    // 2x2 matrix for rotating points
    this.rotationMatrix = mat2.create();
    mat2.rotate(this.rotationMatrix, this.rotationMatrix, this.angle);
};

prototypeAccessors.pitch.get = function ()     {
    return this._pitch / Math.PI * 180;
};
prototypeAccessors.pitch.set = function (pitch    ) {
    var p = util.clamp(pitch, 0, 60) / 180 * Math.PI;
    if (this._pitch === p) { return; }
    this._unmodified = false;
    this._pitch = p;
    this._calcMatrices();
};

prototypeAccessors.fov.get = function ()     {
    return this._fov / Math.PI * 180;
};
prototypeAccessors.fov.set = function (fov    ) {
    fov = Math.max(0.01, Math.min(60, fov));
    if (this._fov === fov) { return; }
    this._unmodified = false;
    this._fov = fov / 180 * Math.PI;
    this._calcMatrices();
};

prototypeAccessors.zoom.get = function ()     { return this._zoom; };
prototypeAccessors.zoom.set = function (zoom    ) {
    var z = Math.min(Math.max(zoom, this.minZoom), this.maxZoom);
    if (this._zoom === z) { return; }
    this._unmodified = false;
    this._zoom = z;
    this.scale = this.zoomScale(z);
    this.tileZoom = Math.floor(z);
    this.zoomFraction = z - this.tileZoom;
    this._constrain();
    this._calcMatrices();
};

prototypeAccessors.center.get = function ()     { return this._center; };
prototypeAccessors.center.set = function (center    ) {
    if (center.lat === this._center.lat && center.lng === this._center.lng) { return; }
    this._unmodified = false;
    this._center = center;
    this._constrain();
    this._calcMatrices();
};

/**
 * Return a zoom level that will cover all tiles the transform
 * @param {Object} options
 * @param {number} options.tileSize
 * @param {boolean} options.roundZoom
 * @returns {number} zoom level
 */
Transform.prototype.coveringZoomLevel = function coveringZoomLevel (options                                     ) {
    return (options.roundZoom ? Math.round : Math.floor)(
        this.zoom + this.scaleZoom(this.tileSize / options.tileSize)
    );
};

/**
 * Return any "wrapped" copies of a given tile coordinate that are visible
 * in the current view.
 *
 * @private
 */
Transform.prototype.getVisibleWrappedCoordinates = function getVisibleWrappedCoordinates (tileCoord       ) {
    var ul = this.pointCoordinate(new Point(0, 0), 0);
    var ur = this.pointCoordinate(new Point(this.width, 0), 0);
    var w0 = Math.floor(ul.column);
    var w1 = Math.floor(ur.column);
    var result = [tileCoord];
    for (var w = w0; w <= w1; w++) {
        if (w === 0) { continue; }
        result.push(new TileCoord(tileCoord.z, tileCoord.x, tileCoord.y, w));
    }
    return result;
};

/**
 * Return all coordinates that could cover this transform for a covering
 * zoom level.
 * @param {Object} options
 * @param {number} options.tileSize
 * @param {number} options.minzoom
 * @param {number} options.maxzoom
 * @param {boolean} options.roundZoom
 * @param {boolean} options.reparseOverscaled
 * @param {boolean} options.renderWorldCopies
 * @returns {Array<Tile>} tiles
 */
Transform.prototype.coveringTiles = function coveringTiles (
    options   
                             
                             
                             
                                
                                        
                                       
         
) {
    var z = this.coveringZoomLevel(options);
    var actualZ = z;

    if (options.minzoom !== undefined && z < options.minzoom) { return []; }
    if (options.maxzoom !== undefined && z > options.maxzoom) { z = options.maxzoom; }

    var centerCoord = this.pointCoordinate(this.centerPoint, z);
    var centerPoint = new Point(centerCoord.column - 0.5, centerCoord.row - 0.5);
    var cornerCoords = [
        this.pointCoordinate(new Point(0, 0), z),
        this.pointCoordinate(new Point(this.width, 0), z),
        this.pointCoordinate(new Point(this.width, this.height), z),
        this.pointCoordinate(new Point(0, this.height), z)
    ];
    return TileCoord.cover(z, cornerCoords, options.reparseOverscaled ? actualZ : z, this._renderWorldCopies)
        .sort(function (a, b) { return centerPoint.dist(a) - centerPoint.dist(b); });
};

Transform.prototype.resize = function resize (width    , height    ) {
    this.width = width;
    this.height = height;

    this.pixelsToGLUnits = [2 / width, -2 / height];
    this._constrain();
    this._calcMatrices();
};

prototypeAccessors.unmodified.get = function ()      { return this._unmodified; };

Transform.prototype.zoomScale = function zoomScale (zoom    ) { return Math.pow(2, zoom); };
Transform.prototype.scaleZoom = function scaleZoom (scale    ) { return Math.log(scale) / Math.LN2; };

Transform.prototype.project = function project (lnglat    ) {
    return new Point(
        this.lngX(lnglat.lng),
        this.latY(lnglat.lat));
};

Transform.prototype.unproject = function unproject (point) {
    return new LngLat(
        this.xLng(point.x),
        this.yLat(point.y));
};

prototypeAccessors.x.get = function ()     { return this.lngX(this.center.lng); };
prototypeAccessors.y.get = function ()     { return this.latY(this.center.lat); };

prototypeAccessors.point.get = function () { return new Point(this.x, this.y); };

/**
 * latitude to absolute x coord
 * @returns {number} pixel coordinate
 */
Transform.prototype.lngX = function lngX (lng    ) {
    return (180 + lng) * this.worldSize / 360;
};
/**
 * latitude to absolute y coord
 * @returns {number} pixel coordinate
 */
Transform.prototype.latY = function latY (lat    ) {
    var y = 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
    return (180 - y) * this.worldSize / 360;
};

Transform.prototype.xLng = function xLng (x) {
    return x * 360 / this.worldSize - 180;
};
Transform.prototype.yLat = function yLat (y) {
    var y2 = 180 - y * 360 / this.worldSize;
    return 360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90;
};

Transform.prototype.setLocationAtPoint = function setLocationAtPoint (lnglat    , point   ) {
    var translate = this.pointCoordinate(point)._sub(this.pointCoordinate(this.centerPoint));
    this.center = this.coordinateLocation(this.locationCoordinate(lnglat)._sub(translate));
    if (this._renderWorldCopies) {
        this.center = this.center.wrap();
    }
};

/**
 * Given a location, return the screen point that corresponds to it
 * @param {LngLat} lnglat location
 * @returns {Point} screen point
 */
Transform.prototype.locationPoint = function locationPoint (lnglat    ) {
    return this.coordinatePoint(this.locationCoordinate(lnglat));
};

/**
 * Given a point on screen, return its lnglat
 * @param {Point} p screen point
 * @returns {LngLat} lnglat location
 */
Transform.prototype.pointLocation = function pointLocation (p   ) {
    return this.coordinateLocation(this.pointCoordinate(p));
};

/**
 * Given a geographical lnglat, return an unrounded
 * coordinate that represents it at this transform's zoom level.
 * @param {LngLat} lnglat
 * @returns {Coordinate}
 */
Transform.prototype.locationCoordinate = function locationCoordinate (lnglat    ) {
    return new Coordinate(
        this.lngX(lnglat.lng) / this.tileSize,
        this.latY(lnglat.lat) / this.tileSize,
        this.zoom).zoomTo(this.tileZoom);
};

/**
 * Given a Coordinate, return its geographical position.
 * @param {Coordinate} coord
 * @returns {LngLat} lnglat
 */
Transform.prototype.coordinateLocation = function coordinateLocation (coord) {
    var zoomedCoord = coord.zoomTo(this.zoom);
    return new LngLat(
        this.xLng(zoomedCoord.column * this.tileSize),
        this.yLat(zoomedCoord.row * this.tileSize));
};

Transform.prototype.pointCoordinate = function pointCoordinate (p   , zoom     ) {
    if (zoom === undefined) { zoom = this.tileZoom; }

    var targetZ = 0;
    // since we don't know the correct projected z value for the point,
    // unproject two points to get a line and then find the point on that
    // line with z=0

    var coord0 = [p.x, p.y, 0, 1];
    var coord1 = [p.x, p.y, 1, 1];

    vec4.transformMat4(coord0, coord0, this.pixelMatrixInverse);
    vec4.transformMat4(coord1, coord1, this.pixelMatrixInverse);

    var w0 = coord0[3];
    var w1 = coord1[3];
    var x0 = coord0[0] / w0;
    var x1 = coord1[0] / w1;
    var y0 = coord0[1] / w0;
    var y1 = coord1[1] / w1;
    var z0 = coord0[2] / w0;
    var z1 = coord1[2] / w1;

    var t = z0 === z1 ? 0 : (targetZ - z0) / (z1 - z0);

    return new Coordinate(
        interp(x0, x1, t) / this.tileSize,
        interp(y0, y1, t) / this.tileSize,
        this.zoom)._zoomTo(zoom);
};

/**
 * Given a coordinate, return the screen point that corresponds to it
 * @param {Coordinate} coord
 * @returns {Point} screen point
 */
Transform.prototype.coordinatePoint = function coordinatePoint (coord) {
    var zoomedCoord = coord.zoomTo(this.zoom);
    var p = [zoomedCoord.column * this.tileSize, zoomedCoord.row * this.tileSize, 0, 1];
    vec4.transformMat4(p, p, this.pixelMatrix);
    return new Point(p[0] / p[3], p[1] / p[3]);
};

/**
 * Calculate the posMatrix that, given a tile coordinate, would be used to display the tile on a map.
 * @param {TileCoord} tileCoord
 * @param {number} maxZoom maximum source zoom to account for overscaling
 */
Transform.prototype.calculatePosMatrix = function calculatePosMatrix (tileCoord       , maxZoom     )           {
    var posMatrixKey = tileCoord.id.toString();
    if (maxZoom) {
        posMatrixKey += maxZoom.toString();
    }
    if (this._posMatrixCache[posMatrixKey]) {
        return this._posMatrixCache[posMatrixKey];
    }
    // if z > maxzoom then the tile is actually a overscaled maxzoom tile,
    // so calculate the matrix the maxzoom tile would use.
    var coord = tileCoord.toCoordinate(maxZoom);
    var scale = this.worldSize / this.zoomScale(coord.zoom);

    var posMatrix = mat4.identity(new Float64Array(16));
    mat4.translate(posMatrix, posMatrix, [coord.column * scale, coord.row * scale, 0]);
    mat4.scale(posMatrix, posMatrix, [scale / EXTENT, scale / EXTENT, 1]);
    mat4.multiply(posMatrix, this.projMatrix, posMatrix);

    this._posMatrixCache[posMatrixKey] = new Float32Array(posMatrix);
    return this._posMatrixCache[posMatrixKey];
};

Transform.prototype._constrain = function _constrain () {
    if (!this.center || !this.width || !this.height || this._constraining) { return; }

    this._constraining = true;

    var minY = -90;
    var maxY = 90;
    var minX = -180;
    var maxX = 180;
    var sy, sx, x2, y2;
    var size = this.size,
        unmodified = this._unmodified;

    if (this.latRange) {
        var latRange = this.latRange;
        minY = this.latY(latRange[1]);
        maxY = this.latY(latRange[0]);
        sy = maxY - minY < size.y ? size.y / (maxY - minY) : 0;
    }

    if (this.lngRange) {
        var lngRange = this.lngRange;
        minX = this.lngX(lngRange[0]);
        maxX = this.lngX(lngRange[1]);
        sx = maxX - minX < size.x ? size.x / (maxX - minX) : 0;
    }

    // how much the map should scale to fit the screen into given latitude/longitude ranges
    var s = Math.max(sx || 0, sy || 0);

    if (s) {
        this.center = this.unproject(new Point(
            sx ? (maxX + minX) / 2 : this.x,
            sy ? (maxY + minY) / 2 : this.y));
        this.zoom += this.scaleZoom(s);
        this._unmodified = unmodified;
        this._constraining = false;
        return;
    }

    if (this.latRange) {
        var y = this.y,
            h2 = size.y / 2;

        if (y - h2 < minY) { y2 = minY + h2; }
        if (y + h2 > maxY) { y2 = maxY - h2; }
    }

    if (this.lngRange) {
        var x = this.x,
            w2 = size.x / 2;

        if (x - w2 < minX) { x2 = minX + w2; }
        if (x + w2 > maxX) { x2 = maxX - w2; }
    }

    // pan the map if the screen goes off the range
    if (x2 !== undefined || y2 !== undefined) {
        this.center = this.unproject(new Point(
            x2 !== undefined ? x2 : this.x,
            y2 !== undefined ? y2 : this.y));
    }

    this._unmodified = unmodified;
    this._constraining = false;
};

Transform.prototype._calcMatrices = function _calcMatrices () {
    if (!this.height) { return; }

    this.cameraToCenterDistance = 0.5 / Math.tan(this._fov / 2) * this.height;

    // Find the distance from the center point [width/2, height/2] to the
    // center top point [width/2, 0] in Z units, using the law of sines.
    // 1 Z unit is equivalent to 1 horizontal px at the center of the map
    // (the distance between[width/2, height/2] and [width/2 + 1, height/2])
    var halfFov = this._fov / 2;
    var groundAngle = Math.PI / 2 + this._pitch;
    var topHalfSurfaceDistance = Math.sin(halfFov) * this.cameraToCenterDistance / Math.sin(Math.PI - groundAngle - halfFov);

    // Calculate z distance of the farthest fragment that should be rendered.
    var furthestDistance = Math.cos(Math.PI / 2 - this._pitch) * topHalfSurfaceDistance + this.cameraToCenterDistance;
    // Add a bit extra to avoid precision problems when a fragment's distance is exactly `furthestDistance`
    var farZ = furthestDistance * 1.01;

    // matrix for conversion from location to GL coordinates (-1 .. 1)
    var m = new Float64Array(16);
    mat4.perspective(m, this._fov, this.width / this.height, 1, farZ);

    mat4.scale(m, m, [1, -1, 1]);
    mat4.translate(m, m, [0, 0, -this.cameraToCenterDistance]);
    mat4.rotateX(m, m, this._pitch);
    mat4.rotateZ(m, m, this.angle);
    mat4.translate(m, m, [-this.x, -this.y, 0]);

    // scale vertically to meters per pixel (inverse of ground resolution):
    // worldSize / (circumferenceOfEarth * cos(lat * Ï€ / 180))
    var verticalScale = this.worldSize / (2 * Math.PI * 6378137 * Math.abs(Math.cos(this.center.lat * (Math.PI / 180))));
    mat4.scale(m, m, [1, 1, verticalScale, 1]);

    this.projMatrix = m;

    // matrix for conversion from location to screen coordinates
    m = mat4.create();
    mat4.scale(m, m, [this.width / 2, -this.height / 2, 1]);
    mat4.translate(m, m, [1, -1, 0]);
    this.pixelMatrix = mat4.multiply(new Float64Array(16), m, this.projMatrix);

    // inverse matrix for conversion from screen coordinaes to location
    m = mat4.invert(new Float64Array(16), this.pixelMatrix);
    if (!m) { throw new Error("failed to invert matrix"); }
    this.pixelMatrixInverse = m;

    this._posMatrixCache = {};
};

Object.defineProperties( Transform.prototype, prototypeAccessors );

module.exports = Transform;

},{"../data/extent":59,"../source/tile_coord":113,"../style-spec/util/interpolate":155,"../util/util":267,"./coordinate":68,"./lng_lat":69,"@mapbox/gl-matrix":1,"@mapbox/point-geometry":2}],72:[function(require,module,exports){
'use strict';//      
var assert = require('assert');

                                                                                 
                                                                


var IndexBuffer = function IndexBuffer(gl                   , array                                 , dynamicDraw      ) {
    this.gl = gl;
    this.buffer = gl.createBuffer();
    this.dynamicDraw = Boolean(dynamicDraw);

    this.unbindVAO();

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, array.arrayBuffer, this.dynamicDraw ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW);

    if (!this.dynamicDraw) {
        delete array.arrayBuffer;
    }
};

IndexBuffer.prototype.unbindVAO = function unbindVAO () {
    // The bound index buffer is part of vertex array object state. We don't want to
    // modify whatever VAO happens to be currently bound, so make sure the default
    // vertex array provided by the context is bound instead.
    if (this.gl.extVertexArrayObject === undefined) {
        (this.gl ).extVertexArrayObject = this.gl.getExtension("OES_vertex_array_object");
    }
    if (this.gl.extVertexArrayObject) {
        (this.gl ).extVertexArrayObject.bindVertexArrayOES(null);
    }
};

IndexBuffer.prototype.bind = function bind () {
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.buffer);
};

IndexBuffer.prototype.updateData = function updateData (array                   ) {
    assert(this.dynamicDraw);
    // The right VAO will get this buffer re-bound later in VertexArrayObject#bind
    // See https://github.com/mapbox/mapbox-gl-js/issues/5620
    this.unbindVAO();
    this.bind();
    this.gl.bufferSubData(this.gl.ELEMENT_ARRAY_BUFFER, 0, array.arrayBuffer);
};

IndexBuffer.prototype.destroy = function destroy () {
    if (this.buffer) {
        this.gl.deleteBuffer(this.buffer);
        delete this.buffer;
    }
};

module.exports = IndexBuffer;

},{"assert":11}],73:[function(require,module,exports){
'use strict';//      

             
                
                      
                         
                              

                                             

/**
 * @enum {string} AttributeType
 * @private
 * @readonly
 */
var AttributeType = {
    Int8:   'BYTE',
    Uint8:  'UNSIGNED_BYTE',
    Int16:  'SHORT',
    Uint16: 'UNSIGNED_SHORT',
    Int32:  'INT',
    Uint32: 'UNSIGNED_INT',
    Float32: 'FLOAT'
};

/**
 * The `VertexBuffer` class turns a `StructArray` into a WebGL buffer. Each member of the StructArray's
 * Struct type is converted to a WebGL atribute.
 * @private
 */
var VertexBuffer = function VertexBuffer(gl                   , array         , dynamicDraw      ) {
    this.length = array.length;
    this.attributes = array.members;
    this.itemSize = array.bytesPerElement;
    this.dynamicDraw = dynamicDraw;

    this.gl = gl;
    this.buffer = gl.createBuffer();
    this.gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    this.gl.bufferData(gl.ARRAY_BUFFER, array.arrayBuffer, this.dynamicDraw ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW);

    if (!this.dynamicDraw) {
        delete array.arrayBuffer;
    }
};

VertexBuffer.prototype.bind = function bind () {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
};

VertexBuffer.prototype.updateData = function updateData (array                   ) {
    this.bind();
    this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, array.arrayBuffer);
};

VertexBuffer.prototype.enableAttributes = function enableAttributes (gl                   , program     ) {
        var this$1 = this;

    for (var j = 0; j < this.attributes.length; j++) {
        var member = this$1.attributes[j];
        var attribIndex            = program.attributes[member.name];
        if (attribIndex !== undefined) {
            gl.enableVertexAttribArray(attribIndex);
        }
    }
};

/**
 * Set the attribute pointers in a WebGL context
 * @param gl The WebGL context
 * @param program The active WebGL program
 * @param vertexOffset Index of the starting vertex of the segment
 */
VertexBuffer.prototype.setVertexAttribPointers = function setVertexAttribPointers (gl                   , program     , vertexOffset     ) {
        var this$1 = this;

    for (var j = 0; j < this.attributes.length; j++) {
        var member = this$1.attributes[j];
        var attribIndex            = program.attributes[member.name];

        if (attribIndex !== undefined) {
            gl.vertexAttribPointer(
                attribIndex,
                member.components,
                (gl )[AttributeType[member.type]],
                false,
                this$1.itemSize,
                member.offset + (this$1.itemSize * (vertexOffset || 0))
            );
        }
    }
};

/**
 * Destroy the GL buffer bound to the given WebGL context
 */
VertexBuffer.prototype.destroy = function destroy () {
    if (this.buffer) {
        this.gl.deleteBuffer(this.buffer);
        delete this.buffer;
    }
};

module.exports = VertexBuffer;

},{}],74:[function(require,module,exports){
'use strict';//      

var supported = require('mapbox-gl-supported');
var browser = require('./util/browser');
var version         = require('../package.json').version;
var Map = require('./ui/map');
var NavigationControl = require('./ui/control/navigation_control');
var GeolocateControl = require('./ui/control/geolocate_control');
var AttributionControl = require('./ui/control/attribution_control');
var ScaleControl = require('./ui/control/scale_control');
var FullscreenControl = require('./ui/control/fullscreen_control');
var Popup = require('./ui/popup');
var Marker = require('./ui/marker');
var Style = require('./style/style');
var LngLat = require('./geo/lng_lat');
var LngLatBounds = require('./geo/lng_lat_bounds');
var Point = require('@mapbox/point-geometry');
var Evented = require('./util/evented');
var config = require('./util/config');
var rtlTextPlugin = require('./source/rtl_text_plugin');

module.exports = {
    version: version,
    supported: supported,

    workerCount: Math.max(Math.floor(browser.hardwareConcurrency / 2), 1),
    setRTLTextPlugin: rtlTextPlugin.setRTLTextPlugin,

    Map: Map,
    NavigationControl: NavigationControl,
    GeolocateControl: GeolocateControl,
    AttributionControl: AttributionControl,
    ScaleControl: ScaleControl,
    FullscreenControl: FullscreenControl,
    Popup: Popup,
    Marker: Marker,
    Style: Style,
    LngLat: LngLat,
    LngLatBounds: LngLatBounds,
    Point: Point,
    Evented: Evented,
    config: config,

    /**
     * Gets and sets the map's [access token](https://www.mapbox.com/help/define-access-token/).
     *
     * @var {string} accessToken
     * @example
     * mapboxgl.accessToken = myAccessToken;
     * @see [Display a map](https://www.mapbox.com/mapbox-gl-js/examples/)
     */
    get accessToken() {
        return config.ACCESS_TOKEN;
    },

    set accessToken(token        ) {
        config.ACCESS_TOKEN = token;
    }
};

/**
 * The version of Mapbox GL JS in use as specified in `package.json`,
 * `CHANGELOG.md`, and the GitHub release.
 *
 * @var {string} version
 */

/**
 * Test whether the browser [supports Mapbox GL JS](https://www.mapbox.com/help/mapbox-browser-support/#mapbox-gl-js).
 *
 * @function supported
 * @param {Object} [options]
 * @param {boolean} [options.failIfMajorPerformanceCaveat=false] If `true`,
 *   the function will return `false` if the performance of Mapbox GL JS would
 *   be dramatically worse than expected (e.g. a software WebGL renderer would be used).
 * @return {boolean}
 * @example
 * mapboxgl.supported() // = true
 * @see [Check for browser support](https://www.mapbox.com/mapbox-gl-js/example/check-for-support/)
 */

/**
 * Sets the map's [RTL text plugin](https://www.mapbox.com/mapbox-gl-js/plugins/#mapbox-gl-rtl-text).
 * Necessary for supporting languages like Arabic and Hebrew that are written right-to-left.
 *
 * @function setRTLTextPlugin
 * @param {string} pluginURL URL pointing to the Mapbox RTL text plugin source.
 * @param {Function} callback Called with an error argument if there is an error.
 * @example
 * mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.1/mapbox-gl-rtl-text.js');
 * @see [Add support for right-to-left scripts](https://www.mapbox.com/mapbox-gl-js/example/mapbox-gl-rtl-text/)
 */

},{"../package.json":51,"./geo/lng_lat":69,"./geo/lng_lat_bounds":70,"./source/rtl_text_plugin":108,"./style/style":186,"./ui/control/attribution_control":226,"./ui/control/fullscreen_control":227,"./ui/control/geolocate_control":228,"./ui/control/navigation_control":230,"./ui/control/scale_control":231,"./ui/map":241,"./ui/marker":242,"./ui/popup":243,"./util/browser":246,"./util/config":250,"./util/evented":254,"@mapbox/point-geometry":2,"mapbox-gl-supported":38}],75:[function(require,module,exports){
'use strict';//      

var pattern = require('./pattern');
var ref = require('../data/program_configuration');
var ProgramConfiguration = ref.ProgramConfiguration;
var ref$1 = require('../style/properties');
var PossiblyEvaluated = ref$1.PossiblyEvaluated;
var PossiblyEvaluatedPropertyValue = ref$1.PossiblyEvaluatedPropertyValue;
var fillLayerPaintProperties = require('../style/style_layer/fill_style_layer_properties').paint;

                                     
                                                      
                                                                                    

module.exports = drawBackground;

function drawBackground(painter         , sourceCache             , layer                      ) {
    var color = layer.paint.get('background-color');
    var opacity = layer.paint.get('background-opacity');

    if (opacity === 0) { return; }

    var gl = painter.gl;
    var transform = painter.transform;
    var tileSize = transform.tileSize;
    var image = layer.paint.get('background-pattern');
    var globals = {zoom: transform.zoom};

    var pass = (!image && color.a === 1 && opacity === 1) ? 'opaque' : 'translucent';
    if (painter.renderPass !== pass) { return; }

    gl.disable(gl.STENCIL_TEST);

    painter.setDepthSublayer(0);

    var properties = new PossiblyEvaluated(fillLayerPaintProperties);

    (properties._values     )['background-color'] = new PossiblyEvaluatedPropertyValue(
        fillLayerPaintProperties.properties['fill-color'], {kind: 'constant', value: color}, globals);
    (properties._values     )['background-opacity'] = new PossiblyEvaluatedPropertyValue(
        fillLayerPaintProperties.properties['fill-opacity'], {kind: 'constant', value: opacity}, globals);

    var program;
    if (image) {
        if (pattern.isPatternMissing(image, painter)) { return; }
        var configuration = ProgramConfiguration.forBackgroundPattern(opacity);
        program = painter.useProgram('fillPattern', configuration);
        configuration.setUniforms(gl, program, properties, globals);
        pattern.prepare(image, painter, program);
        painter.tileExtentPatternVAO.bind(gl, program, painter.tileExtentBuffer);
    } else {
        var configuration$1 = ProgramConfiguration.forBackgroundColor(color, opacity);
        program = painter.useProgram('fill', configuration$1);
        configuration$1.setUniforms(gl, program, properties, globals);
        painter.tileExtentVAO.bind(gl, program, painter.tileExtentBuffer);
    }

    var coords = transform.coveringTiles({tileSize: tileSize});

    for (var i = 0, list = coords; i < list.length; i += 1) {
        var coord = list[i];

        if (image) {
            pattern.setTile({coord: coord, tileSize: tileSize}, painter, program);
        }
        gl.uniformMatrix4fv(program.uniforms.u_matrix, false, painter.transform.calculatePosMatrix(coord));
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, painter.tileExtentBuffer.length);
    }
}

},{"../data/program_configuration":64,"../style/properties":184,"../style/style_layer/fill_style_layer_properties":195,"./pattern":91}],76:[function(require,module,exports){
'use strict';//      

var pixelsToTileUnits = require('../source/pixels_to_tile_units');

                                     
                                                      
                                                                            
                                                             
                                                  

module.exports = drawCircles;

function drawCircles(painter         , sourceCache             , layer                  , coords                  ) {
    if (painter.renderPass !== 'translucent') { return; }

    var opacity = layer.paint.get('circle-opacity');
    var strokeWidth = layer.paint.get('circle-stroke-width');
    var strokeOpacity = layer.paint.get('circle-stroke-opacity');

    if (opacity.constantOr(1) === 0 && (strokeWidth.constantOr(1) === 0 || strokeOpacity.constantOr(1) === 0)) {
        return;
    }

    var gl = painter.gl;

    painter.setDepthSublayer(0);
    painter.depthMask(false);

    // Allow circles to be drawn across boundaries, so that
    // large circles are not clipped to tiles
    gl.disable(gl.STENCIL_TEST);

    for (var i = 0; i < coords.length; i++) {
        var coord = coords[i];

        var tile = sourceCache.getTile(coord);
        var bucket                = (tile.getBucket(layer)     );
        if (!bucket) { continue; }

        var programConfiguration = bucket.programConfigurations.get(layer.id);
        var program = painter.useProgram('circle', programConfiguration);
        programConfiguration.setUniforms(gl, program, layer.paint, {zoom: painter.transform.zoom});

        gl.uniform1f(program.uniforms.u_camera_to_center_distance, painter.transform.cameraToCenterDistance);
        gl.uniform1i(program.uniforms.u_scale_with_map, layer.paint.get('circle-pitch-scale') === 'map' ? 1 : 0);
        if (layer.paint.get('circle-pitch-alignment') === 'map') {
            gl.uniform1i(program.uniforms.u_pitch_with_map, 1);
            var pixelRatio = pixelsToTileUnits(tile, 1, painter.transform.zoom);
            gl.uniform2f(program.uniforms.u_extrude_scale, pixelRatio, pixelRatio);
        } else {
            gl.uniform1i(program.uniforms.u_pitch_with_map, 0);
            gl.uniform2fv(program.uniforms.u_extrude_scale, painter.transform.pixelsToGLUnits);
        }

        gl.uniformMatrix4fv(program.uniforms.u_matrix, false, painter.translatePosMatrix(
            coord.posMatrix,
            tile,
            layer.paint.get('circle-translate'),
            layer.paint.get('circle-translate-anchor')
        ));

        program.draw(
            gl,
            gl.TRIANGLES,
            layer.id,
            bucket.layoutVertexBuffer,
            bucket.indexBuffer,
            bucket.segments,
            programConfiguration);
    }
}

},{"../source/pixels_to_tile_units":105}],77:[function(require,module,exports){
'use strict';//      

                                     
                                                      
                                                   
                                                  
                                                             
var pixelsToTileUnits = require('../source/pixels_to_tile_units');

module.exports = drawCollisionDebug;

function drawCollisionDebugGeometry(painter         , sourceCache             , layer            , coords                  , drawCircles         ) {
    var gl = painter.gl;
    var program = drawCircles ? painter.useProgram('collisionCircle') : painter.useProgram('collisionBox');
    for (var i = 0; i < coords.length; i++) {
        var coord = coords[i];
        var tile = sourceCache.getTile(coord);
        var bucket                = (tile.getBucket(layer)     );
        if (!bucket) { continue; }
        var buffers = drawCircles ? bucket.collisionCircle : bucket.collisionBox;
        if (!buffers) { continue; }

        gl.uniformMatrix4fv(program.uniforms.u_matrix, false, coord.posMatrix);

        if (!drawCircles) {
            painter.lineWidth(1);
        }

        gl.uniform1f(program.uniforms.u_camera_to_center_distance, painter.transform.cameraToCenterDistance);
        var pixelRatio = pixelsToTileUnits(tile, 1, painter.transform.zoom);
        var scale = Math.pow(2, painter.transform.zoom - tile.coord.z);
        gl.uniform1f(program.uniforms.u_pixels_to_tile_units, pixelRatio);
        gl.uniform2f(program.uniforms.u_extrude_scale,
            painter.transform.pixelsToGLUnits[0] / (pixelRatio * scale),
            painter.transform.pixelsToGLUnits[1] / (pixelRatio * scale));

        program.draw(
            gl,
            drawCircles ? gl.TRIANGLES : gl.LINES,
            layer.id,
            buffers.layoutVertexBuffer,
            buffers.indexBuffer,
            buffers.segments,
            null,
            buffers.collisionVertexBuffer,
            null);
    }
}

function drawCollisionDebug(painter         , sourceCache             , layer            , coords                  ) {
    drawCollisionDebugGeometry(painter, sourceCache, layer, coords, false);
    drawCollisionDebugGeometry(painter, sourceCache, layer, coords, true);
}

},{"../source/pixels_to_tile_units":105}],78:[function(require,module,exports){
'use strict';//      

var browser = require('../util/browser');
var mat4 = require('@mapbox/gl-matrix').mat4;
var EXTENT = require('../data/extent');
var VertexBuffer = require('../gl/vertex_buffer');
var VertexArrayObject = require('./vertex_array_object');
var PosArray = require('../data/pos_array');

                                     
                                                      
                                                  

module.exports = drawDebug;

function drawDebug(painter         , sourceCache             , coords                  ) {
    for (var i = 0; i < coords.length; i++) {
        drawDebugTile(painter, sourceCache, coords[i]);
    }
}

function drawDebugTile(painter, sourceCache, coord) {
    var gl = painter.gl;

    gl.disable(gl.STENCIL_TEST);
    painter.lineWidth(1 * browser.devicePixelRatio);

    var posMatrix = coord.posMatrix;
    var program = painter.useProgram('debug');

    gl.uniformMatrix4fv(program.uniforms.u_matrix, false, posMatrix);
    gl.uniform4f(program.uniforms.u_color, 1, 0, 0, 1);
    painter.debugVAO.bind(gl, program, painter.debugBuffer);
    gl.drawArrays(gl.LINE_STRIP, 0, painter.debugBuffer.length);

    var vertices = createTextVerticies(coord.toString(), 50, 200, 5);
    var debugTextArray = new PosArray();
    for (var v = 0; v < vertices.length; v += 2) {
        debugTextArray.emplaceBack(vertices[v], vertices[v + 1]);
    }
    var debugTextBuffer = new VertexBuffer(gl, debugTextArray);
    var debugTextVAO = new VertexArrayObject();
    debugTextVAO.bind(gl, program, debugTextBuffer);
    gl.uniform4f(program.uniforms.u_color, 1, 1, 1, 1);

    // Draw the halo with multiple 1px lines instead of one wider line because
    // the gl spec doesn't guarantee support for lines with width > 1.
    var tileSize = sourceCache.getTile(coord).tileSize;
    var onePixel = EXTENT / (Math.pow(2, painter.transform.zoom - coord.z) * tileSize);
    var translations = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
    for (var i = 0; i < translations.length; i++) {
        var translation = translations[i];
        gl.uniformMatrix4fv(program.uniforms.u_matrix, false, mat4.translate([], posMatrix, [onePixel * translation[0], onePixel * translation[1], 0]));
        gl.drawArrays(gl.LINES, 0, debugTextBuffer.length);
    }

    gl.uniform4f(program.uniforms.u_color, 0, 0, 0, 1);
    gl.uniformMatrix4fv(program.uniforms.u_matrix, false, posMatrix);
    gl.drawArrays(gl.LINES, 0, debugTextBuffer.length);
}

// Font data From Hershey Simplex Font
// http://paulbourke.net/dataformats/hershey/
var simplexFont = {
    " ": [16, []],
    "!": [10, [5, 21, 5, 7, -1, -1, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2]],
    "\"": [16, [4, 21, 4, 14, -1, -1, 12, 21, 12, 14]],
    "#": [21, [11, 25, 4, -7, -1, -1, 17, 25, 10, -7, -1, -1, 4, 12, 18, 12, -1, -1, 3, 6, 17, 6]],
    "$": [20, [8, 25, 8, -4, -1, -1, 12, 25, 12, -4, -1, -1, 17, 18, 15, 20, 12, 21, 8, 21, 5, 20, 3, 18, 3, 16, 4, 14, 5, 13, 7, 12, 13, 10, 15, 9, 16, 8, 17, 6, 17, 3, 15, 1, 12, 0, 8, 0, 5, 1, 3, 3]],
    "%": [24, [21, 21, 3, 0, -1, -1, 8, 21, 10, 19, 10, 17, 9, 15, 7, 14, 5, 14, 3, 16, 3, 18, 4, 20, 6, 21, 8, 21, 10, 20, 13, 19, 16, 19, 19, 20, 21, 21, -1, -1, 17, 7, 15, 6, 14, 4, 14, 2, 16, 0, 18, 0, 20, 1, 21, 3, 21, 5, 19, 7, 17, 7]],
    "&": [26, [23, 12, 23, 13, 22, 14, 21, 14, 20, 13, 19, 11, 17, 6, 15, 3, 13, 1, 11, 0, 7, 0, 5, 1, 4, 2, 3, 4, 3, 6, 4, 8, 5, 9, 12, 13, 13, 14, 14, 16, 14, 18, 13, 20, 11, 21, 9, 20, 8, 18, 8, 16, 9, 13, 11, 10, 16, 3, 18, 1, 20, 0, 22, 0, 23, 1, 23, 2]],
    "'": [10, [5, 19, 4, 20, 5, 21, 6, 20, 6, 18, 5, 16, 4, 15]],
    "(": [14, [11, 25, 9, 23, 7, 20, 5, 16, 4, 11, 4, 7, 5, 2, 7, -2, 9, -5, 11, -7]],
    ")": [14, [3, 25, 5, 23, 7, 20, 9, 16, 10, 11, 10, 7, 9, 2, 7, -2, 5, -5, 3, -7]],
    "*": [16, [8, 21, 8, 9, -1, -1, 3, 18, 13, 12, -1, -1, 13, 18, 3, 12]],
    "+": [26, [13, 18, 13, 0, -1, -1, 4, 9, 22, 9]],
    ",": [10, [6, 1, 5, 0, 4, 1, 5, 2, 6, 1, 6, -1, 5, -3, 4, -4]],
    "-": [26, [4, 9, 22, 9]],
    ".": [10, [5, 2, 4, 1, 5, 0, 6, 1, 5, 2]],
    "/": [22, [20, 25, 2, -7]],
    "0": [20, [9, 21, 6, 20, 4, 17, 3, 12, 3, 9, 4, 4, 6, 1, 9, 0, 11, 0, 14, 1, 16, 4, 17, 9, 17, 12, 16, 17, 14, 20, 11, 21, 9, 21]],
    "1": [20, [6, 17, 8, 18, 11, 21, 11, 0]],
    "2": [20, [4, 16, 4, 17, 5, 19, 6, 20, 8, 21, 12, 21, 14, 20, 15, 19, 16, 17, 16, 15, 15, 13, 13, 10, 3, 0, 17, 0]],
    "3": [20, [5, 21, 16, 21, 10, 13, 13, 13, 15, 12, 16, 11, 17, 8, 17, 6, 16, 3, 14, 1, 11, 0, 8, 0, 5, 1, 4, 2, 3, 4]],
    "4": [20, [13, 21, 3, 7, 18, 7, -1, -1, 13, 21, 13, 0]],
    "5": [20, [15, 21, 5, 21, 4, 12, 5, 13, 8, 14, 11, 14, 14, 13, 16, 11, 17, 8, 17, 6, 16, 3, 14, 1, 11, 0, 8, 0, 5, 1, 4, 2, 3, 4]],
    "6": [20, [16, 18, 15, 20, 12, 21, 10, 21, 7, 20, 5, 17, 4, 12, 4, 7, 5, 3, 7, 1, 10, 0, 11, 0, 14, 1, 16, 3, 17, 6, 17, 7, 16, 10, 14, 12, 11, 13, 10, 13, 7, 12, 5, 10, 4, 7]],
    "7": [20, [17, 21, 7, 0, -1, -1, 3, 21, 17, 21]],
    "8": [20, [8, 21, 5, 20, 4, 18, 4, 16, 5, 14, 7, 13, 11, 12, 14, 11, 16, 9, 17, 7, 17, 4, 16, 2, 15, 1, 12, 0, 8, 0, 5, 1, 4, 2, 3, 4, 3, 7, 4, 9, 6, 11, 9, 12, 13, 13, 15, 14, 16, 16, 16, 18, 15, 20, 12, 21, 8, 21]],
    "9": [20, [16, 14, 15, 11, 13, 9, 10, 8, 9, 8, 6, 9, 4, 11, 3, 14, 3, 15, 4, 18, 6, 20, 9, 21, 10, 21, 13, 20, 15, 18, 16, 14, 16, 9, 15, 4, 13, 1, 10, 0, 8, 0, 5, 1, 4, 3]],
    ":": [10, [5, 14, 4, 13, 5, 12, 6, 13, 5, 14, -1, -1, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2]],
    ";": [10, [5, 14, 4, 13, 5, 12, 6, 13, 5, 14, -1, -1, 6, 1, 5, 0, 4, 1, 5, 2, 6, 1, 6, -1, 5, -3, 4, -4]],
    "<": [24, [20, 18, 4, 9, 20, 0]],
    "=": [26, [4, 12, 22, 12, -1, -1, 4, 6, 22, 6]],
    ">": [24, [4, 18, 20, 9, 4, 0]],
    "?": [18, [3, 16, 3, 17, 4, 19, 5, 20, 7, 21, 11, 21, 13, 20, 14, 19, 15, 17, 15, 15, 14, 13, 13, 12, 9, 10, 9, 7, -1, -1, 9, 2, 8, 1, 9, 0, 10, 1, 9, 2]],
    "@": [27, [18, 13, 17, 15, 15, 16, 12, 16, 10, 15, 9, 14, 8, 11, 8, 8, 9, 6, 11, 5, 14, 5, 16, 6, 17, 8, -1, -1, 12, 16, 10, 14, 9, 11, 9, 8, 10, 6, 11, 5, -1, -1, 18, 16, 17, 8, 17, 6, 19, 5, 21, 5, 23, 7, 24, 10, 24, 12, 23, 15, 22, 17, 20, 19, 18, 20, 15, 21, 12, 21, 9, 20, 7, 19, 5, 17, 4, 15, 3, 12, 3, 9, 4, 6, 5, 4, 7, 2, 9, 1, 12, 0, 15, 0, 18, 1, 20, 2, 21, 3, -1, -1, 19, 16, 18, 8, 18, 6, 19, 5]],
    "A": [18, [9, 21, 1, 0, -1, -1, 9, 21, 17, 0, -1, -1, 4, 7, 14, 7]],
    "B": [21, [4, 21, 4, 0, -1, -1, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 15, 17, 13, 16, 12, 13, 11, -1, -1, 4, 11, 13, 11, 16, 10, 17, 9, 18, 7, 18, 4, 17, 2, 16, 1, 13, 0, 4, 0]],
    "C": [21, [18, 16, 17, 18, 15, 20, 13, 21, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5]],
    "D": [21, [4, 21, 4, 0, -1, -1, 4, 21, 11, 21, 14, 20, 16, 18, 17, 16, 18, 13, 18, 8, 17, 5, 16, 3, 14, 1, 11, 0, 4, 0]],
    "E": [19, [4, 21, 4, 0, -1, -1, 4, 21, 17, 21, -1, -1, 4, 11, 12, 11, -1, -1, 4, 0, 17, 0]],
    "F": [18, [4, 21, 4, 0, -1, -1, 4, 21, 17, 21, -1, -1, 4, 11, 12, 11]],
    "G": [21, [18, 16, 17, 18, 15, 20, 13, 21, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 18, 8, -1, -1, 13, 8, 18, 8]],
    "H": [22, [4, 21, 4, 0, -1, -1, 18, 21, 18, 0, -1, -1, 4, 11, 18, 11]],
    "I": [8, [4, 21, 4, 0]],
    "J": [16, [12, 21, 12, 5, 11, 2, 10, 1, 8, 0, 6, 0, 4, 1, 3, 2, 2, 5, 2, 7]],
    "K": [21, [4, 21, 4, 0, -1, -1, 18, 21, 4, 7, -1, -1, 9, 12, 18, 0]],
    "L": [17, [4, 21, 4, 0, -1, -1, 4, 0, 16, 0]],
    "M": [24, [4, 21, 4, 0, -1, -1, 4, 21, 12, 0, -1, -1, 20, 21, 12, 0, -1, -1, 20, 21, 20, 0]],
    "N": [22, [4, 21, 4, 0, -1, -1, 4, 21, 18, 0, -1, -1, 18, 21, 18, 0]],
    "O": [22, [9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 19, 8, 19, 13, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21]],
    "P": [21, [4, 21, 4, 0, -1, -1, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 14, 17, 12, 16, 11, 13, 10, 4, 10]],
    "Q": [22, [9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 19, 8, 19, 13, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21, -1, -1, 12, 4, 18, -2]],
    "R": [21, [4, 21, 4, 0, -1, -1, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 15, 17, 13, 16, 12, 13, 11, 4, 11, -1, -1, 11, 11, 18, 0]],
    "S": [20, [17, 18, 15, 20, 12, 21, 8, 21, 5, 20, 3, 18, 3, 16, 4, 14, 5, 13, 7, 12, 13, 10, 15, 9, 16, 8, 17, 6, 17, 3, 15, 1, 12, 0, 8, 0, 5, 1, 3, 3]],
    "T": [16, [8, 21, 8, 0, -1, -1, 1, 21, 15, 21]],
    "U": [22, [4, 21, 4, 6, 5, 3, 7, 1, 10, 0, 12, 0, 15, 1, 17, 3, 18, 6, 18, 21]],
    "V": [18, [1, 21, 9, 0, -1, -1, 17, 21, 9, 0]],
    "W": [24, [2, 21, 7, 0, -1, -1, 12, 21, 7, 0, -1, -1, 12, 21, 17, 0, -1, -1, 22, 21, 17, 0]],
    "X": [20, [3, 21, 17, 0, -1, -1, 17, 21, 3, 0]],
    "Y": [18, [1, 21, 9, 11, 9, 0, -1, -1, 17, 21, 9, 11]],
    "Z": [20, [17, 21, 3, 0, -1, -1, 3, 21, 17, 21, -1, -1, 3, 0, 17, 0]],
    "[": [14, [4, 25, 4, -7, -1, -1, 5, 25, 5, -7, -1, -1, 4, 25, 11, 25, -1, -1, 4, -7, 11, -7]],
    "\\": [14, [0, 21, 14, -3]],
    "]": [14, [9, 25, 9, -7, -1, -1, 10, 25, 10, -7, -1, -1, 3, 25, 10, 25, -1, -1, 3, -7, 10, -7]],
    "^": [16, [6, 15, 8, 18, 10, 15, -1, -1, 3, 12, 8, 17, 13, 12, -1, -1, 8, 17, 8, 0]],
    "_": [16, [0, -2, 16, -2]],
    "`": [10, [6, 21, 5, 20, 4, 18, 4, 16, 5, 15, 6, 16, 5, 17]],
    "a": [19, [15, 14, 15, 0, -1, -1, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]],
    "b": [19, [4, 21, 4, 0, -1, -1, 4, 11, 6, 13, 8, 14, 11, 14, 13, 13, 15, 11, 16, 8, 16, 6, 15, 3, 13, 1, 11, 0, 8, 0, 6, 1, 4, 3]],
    "c": [18, [15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]],
    "d": [19, [15, 21, 15, 0, -1, -1, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]],
    "e": [18, [3, 8, 15, 8, 15, 10, 14, 12, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]],
    "f": [12, [10, 21, 8, 21, 6, 20, 5, 17, 5, 0, -1, -1, 2, 14, 9, 14]],
    "g": [19, [15, 14, 15, -2, 14, -5, 13, -6, 11, -7, 8, -7, 6, -6, -1, -1, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]],
    "h": [19, [4, 21, 4, 0, -1, -1, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0]],
    "i": [8, [3, 21, 4, 20, 5, 21, 4, 22, 3, 21, -1, -1, 4, 14, 4, 0]],
    "j": [10, [5, 21, 6, 20, 7, 21, 6, 22, 5, 21, -1, -1, 6, 14, 6, -3, 5, -6, 3, -7, 1, -7]],
    "k": [17, [4, 21, 4, 0, -1, -1, 14, 14, 4, 4, -1, -1, 8, 8, 15, 0]],
    "l": [8, [4, 21, 4, 0]],
    "m": [30, [4, 14, 4, 0, -1, -1, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0, -1, -1, 15, 10, 18, 13, 20, 14, 23, 14, 25, 13, 26, 10, 26, 0]],
    "n": [19, [4, 14, 4, 0, -1, -1, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0]],
    "o": [19, [8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3, 16, 6, 16, 8, 15, 11, 13, 13, 11, 14, 8, 14]],
    "p": [19, [4, 14, 4, -7, -1, -1, 4, 11, 6, 13, 8, 14, 11, 14, 13, 13, 15, 11, 16, 8, 16, 6, 15, 3, 13, 1, 11, 0, 8, 0, 6, 1, 4, 3]],
    "q": [19, [15, 14, 15, -7, -1, -1, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]],
    "r": [13, [4, 14, 4, 0, -1, -1, 4, 8, 5, 11, 7, 13, 9, 14, 12, 14]],
    "s": [17, [14, 11, 13, 13, 10, 14, 7, 14, 4, 13, 3, 11, 4, 9, 6, 8, 11, 7, 13, 6, 14, 4, 14, 3, 13, 1, 10, 0, 7, 0, 4, 1, 3, 3]],
    "t": [12, [5, 21, 5, 4, 6, 1, 8, 0, 10, 0, -1, -1, 2, 14, 9, 14]],
    "u": [19, [4, 14, 4, 4, 5, 1, 7, 0, 10, 0, 12, 1, 15, 4, -1, -1, 15, 14, 15, 0]],
    "v": [16, [2, 14, 8, 0, -1, -1, 14, 14, 8, 0]],
    "w": [22, [3, 14, 7, 0, -1, -1, 11, 14, 7, 0, -1, -1, 11, 14, 15, 0, -1, -1, 19, 14, 15, 0]],
    "x": [17, [3, 14, 14, 0, -1, -1, 14, 14, 3, 0]],
    "y": [16, [2, 14, 8, 0, -1, -1, 14, 14, 8, 0, 6, -4, 4, -6, 2, -7, 1, -7]],
    "z": [17, [14, 14, 3, 0, -1, -1, 3, 14, 14, 14, -1, -1, 3, 0, 14, 0]],
    "{": [14, [9, 25, 7, 24, 6, 23, 5, 21, 5, 19, 6, 17, 7, 16, 8, 14, 8, 12, 6, 10, -1, -1, 7, 24, 6, 22, 6, 20, 7, 18, 8, 17, 9, 15, 9, 13, 8, 11, 4, 9, 8, 7, 9, 5, 9, 3, 8, 1, 7, 0, 6, -2, 6, -4, 7, -6, -1, -1, 6, 8, 8, 6, 8, 4, 7, 2, 6, 1, 5, -1, 5, -3, 6, -5, 7, -6, 9, -7]],
    "|": [8, [4, 25, 4, -7]],
    "}": [14, [5, 25, 7, 24, 8, 23, 9, 21, 9, 19, 8, 17, 7, 16, 6, 14, 6, 12, 8, 10, -1, -1, 7, 24, 8, 22, 8, 20, 7, 18, 6, 17, 5, 15, 5, 13, 6, 11, 10, 9, 6, 7, 5, 5, 5, 3, 6, 1, 7, 0, 8, -2, 8, -4, 7, -6, -1, -1, 8, 8, 6, 6, 6, 4, 7, 2, 8, 1, 9, -1, 9, -3, 8, -5, 7, -6, 5, -7]],
    "~": [24, [3, 6, 3, 8, 4, 11, 6, 12, 8, 12, 10, 11, 14, 8, 16, 7, 18, 7, 20, 8, 21, 10, -1, -1, 3, 8, 4, 10, 6, 11, 8, 11, 10, 10, 14, 7, 16, 6, 18, 6, 20, 7, 21, 10, 21, 12]]
};

function createTextVerticies(text, left, baseline, scale) {
    scale = scale || 1;

    var strokes = [];
    var i, len, j, len2, glyph, x, y, prev;

    for (i = 0, len = text.length; i < len; i++) {
        glyph = simplexFont[text[i]];
        if (!glyph) { continue; }
        prev = null;

        for (j = 0, len2 = glyph[1].length; j < len2; j += 2) {
            if (glyph[1][j] === -1 && glyph[1][j + 1] === -1) {
                prev = null;

            } else {
                x = left + glyph[1][j] * scale;
                y = baseline - glyph[1][j + 1] * scale;
                if (prev) {
                    strokes.push(prev.x, prev.y, x, y);
                }
                prev = {x: x, y: y};
            }
        }
        left += glyph[0] * scale;
    }

    return strokes;
}

},{"../data/extent":59,"../data/pos_array":63,"../gl/vertex_buffer":73,"../util/browser":246,"./vertex_array_object":96,"@mapbox/gl-matrix":1}],79:[function(require,module,exports){
'use strict';//      

var pattern = require('./pattern');
var Color = require('../style-spec/util/color');

                                     
                                                      
                                                                        
                                                         
                                                  
                                                     

module.exports = drawFill;

function drawFill(painter         , sourceCache             , layer                , coords                  ) {
    var color = layer.paint.get('fill-color');
    var opacity = layer.paint.get('fill-opacity');

    if (opacity.constantOr(1) === 0) {
        return;
    }

    var gl = painter.gl;
    gl.enable(gl.STENCIL_TEST);

    var pass = (!layer.paint.get('fill-pattern') &&
        color.constantOr(Color.transparent).a === 1 &&
        opacity.constantOr(0) === 1) ? 'opaque' : 'translucent';

    // Draw fill
    if (painter.renderPass === pass) {
        // Once we switch to earcut drawing we can pull most of the WebGL setup
        // outside of this coords loop.
        painter.setDepthSublayer(1);
        painter.depthMask(painter.renderPass === 'opaque');
        drawFillTiles(painter, sourceCache, layer, coords, drawFillTile);
    }

    // Draw stroke
    if (painter.renderPass === 'translucent' && layer.paint.get('fill-antialias')) {
        painter.lineWidth(2);
        painter.depthMask(false);

        // If we defined a different color for the fill outline, we are
        // going to ignore the bits in 0x07 and just care about the global
        // clipping mask.
        // Otherwise, we only want to drawFill the antialiased parts that are
        // *outside* the current shape. This is important in case the fill
        // or stroke color is translucent. If we wouldn't clip to outside
        // the current shape, some pixels from the outline stroke overlapped
        // the (non-antialiased) fill.
        painter.setDepthSublayer(layer.getPaintProperty('fill-outline-color') ? 2 : 0);
        drawFillTiles(painter, sourceCache, layer, coords, drawStrokeTile);
    }
}

function drawFillTiles(painter, sourceCache, layer, coords, drawFn) {
    if (pattern.isPatternMissing(layer.paint.get('fill-pattern'), painter)) { return; }

    var firstTile = true;
    for (var i = 0, list = coords; i < list.length; i += 1) {
        var coord = list[i];

        var tile = sourceCache.getTile(coord);
        var bucket              = (tile.getBucket(layer)     );
        if (!bucket) { continue; }

        painter.enableTileClippingMask(coord);
        drawFn(painter, sourceCache, layer, tile, coord, bucket, firstTile);
        firstTile = false;
    }
}

function drawFillTile(painter, sourceCache, layer, tile, coord, bucket, firstTile) {
    var gl = painter.gl;
    var programConfiguration = bucket.programConfigurations.get(layer.id);

    var program = setFillProgram('fill', layer.paint.get('fill-pattern'), painter, programConfiguration, layer, tile, coord, firstTile);

    program.draw(
        gl,
        gl.TRIANGLES,
        layer.id,
        bucket.layoutVertexBuffer,
        bucket.indexBuffer,
        bucket.segments,
        programConfiguration);
}

function drawStrokeTile(painter, sourceCache, layer, tile, coord, bucket, firstTile) {
    var gl = painter.gl;
    var programConfiguration = bucket.programConfigurations.get(layer.id);
    var pattern = layer.getPaintProperty('fill-outline-color') ? null : layer.paint.get('fill-pattern');

    var program = setFillProgram('fillOutline', pattern, painter, programConfiguration, layer, tile, coord, firstTile);
    gl.uniform2f(program.uniforms.u_world, gl.drawingBufferWidth, gl.drawingBufferHeight);

    program.draw(
        gl,
        gl.LINES,
        layer.id,
        bucket.layoutVertexBuffer,
        bucket.indexBuffer2,
        bucket.segments2,
        programConfiguration);
}

function setFillProgram(programId, pat                     , painter, programConfiguration, layer, tile, coord, firstTile) {
    var program;
    var prevProgram = painter.currentProgram;
    if (!pat) {
        program = painter.useProgram(programId, programConfiguration);
        if (firstTile || program !== prevProgram) {
            programConfiguration.setUniforms(painter.gl, program, layer.paint, {zoom: painter.transform.zoom});
        }
    } else {
        program = painter.useProgram((programId + "Pattern"), programConfiguration);
        if (firstTile || program !== prevProgram) {
            programConfiguration.setUniforms(painter.gl, program, layer.paint, {zoom: painter.transform.zoom});
            pattern.prepare(pat, painter, program);
        }
        pattern.setTile(tile, painter, program);
    }
    painter.gl.uniformMatrix4fv(program.uniforms.u_matrix, false, painter.translatePosMatrix(
        coord.posMatrix, tile,
        layer.paint.get('fill-translate'),
        layer.paint.get('fill-translate-anchor')
    ));
    return program;
}

},{"../style-spec/util/color":151,"./pattern":91}],80:[function(require,module,exports){
'use strict';//      

var glMatrix = require('@mapbox/gl-matrix');
var pattern = require('./pattern');
var mat3 = glMatrix.mat3;
var mat4 = glMatrix.mat4;
var vec3 = glMatrix.vec3;

                                     
                                                      
                                                                                           
                                                                            
                                                  

module.exports = draw;

function draw(painter         , source             , layer                         , coords                  ) {
    if (layer.paint.get('fill-extrusion-opacity') === 0) {
        return;
    }

    if (painter.renderPass === '3d') {
        var gl = painter.gl;

        gl.disable(gl.STENCIL_TEST);
        gl.enable(gl.DEPTH_TEST);

        painter.clearColor();
        painter.depthMask(true);

        for (var i = 0; i < coords.length; i++) {
            drawExtrusion(painter, source, layer, coords[i]);
        }
    } else if (painter.renderPass === 'translucent') {
        drawExtrusionTexture(painter, layer);
    }
}

function drawExtrusionTexture(painter, layer) {
    var renderedTexture = layer.viewportFrame;
    if (!renderedTexture) { return; }

    var gl = painter.gl;
    var program = painter.useProgram('extrusionTexture');

    gl.disable(gl.STENCIL_TEST);
    gl.disable(gl.DEPTH_TEST);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, renderedTexture.texture);

    gl.uniform1f(program.uniforms.u_opacity, layer.paint.get('fill-extrusion-opacity'));
    gl.uniform1i(program.uniforms.u_image, 0);

    var matrix = mat4.create();
    mat4.ortho(matrix, 0, painter.width, painter.height, 0, 0, 1);
    gl.uniformMatrix4fv(program.uniforms.u_matrix, false, matrix);

    gl.uniform2f(program.uniforms.u_world, gl.drawingBufferWidth, gl.drawingBufferHeight);

    painter.viewportVAO.bind(gl, program, painter.viewportBuffer);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function drawExtrusion(painter, source, layer, coord) {
    var tile = source.getTile(coord);
    var bucket                       = (tile.getBucket(layer)     );
    if (!bucket) { return; }

    var gl = painter.gl;

    var image = layer.paint.get('fill-extrusion-pattern');

    var programConfiguration = bucket.programConfigurations.get(layer.id);
    var program = painter.useProgram(image ? 'fillExtrusionPattern' : 'fillExtrusion', programConfiguration);
    programConfiguration.setUniforms(gl, program, layer.paint, {zoom: painter.transform.zoom});

    if (image) {
        if (pattern.isPatternMissing(image, painter)) { return; }
        pattern.prepare(image, painter, program);
        pattern.setTile(tile, painter, program);
        gl.uniform1f(program.uniforms.u_height_factor, -Math.pow(2, coord.z) / tile.tileSize / 8);
    }

    painter.gl.uniformMatrix4fv(program.uniforms.u_matrix, false, painter.translatePosMatrix(
        coord.posMatrix,
        tile,
        layer.paint.get('fill-extrusion-translate'),
        layer.paint.get('fill-extrusion-translate-anchor')
    ));

    setLight(program, painter);

    program.draw(
        gl,
        gl.TRIANGLES,
        layer.id,
        bucket.layoutVertexBuffer,
        bucket.indexBuffer,
        bucket.segments,
        programConfiguration);
}

function setLight(program, painter) {
    var gl = painter.gl;
    var light = painter.style.light;

    var _lp = light.properties.get('position');
    var lightPos = [_lp.x, _lp.y, _lp.z];

    var lightMat = mat3.create();
    if (light.properties.get('anchor') === 'viewport') {
        mat3.fromRotation(lightMat, -painter.transform.angle);
    }
    vec3.transformMat3(lightPos, lightPos, lightMat);

    var color = light.properties.get('color');

    gl.uniform3fv(program.uniforms.u_lightpos, lightPos);
    gl.uniform1f(program.uniforms.u_lightintensity, light.properties.get('intensity'));
    gl.uniform3f(program.uniforms.u_lightcolor, color.r, color.g, color.b);
}

},{"./pattern":91,"@mapbox/gl-matrix":1}],81:[function(require,module,exports){
'use strict';//      

var mat4 = require('@mapbox/gl-matrix').mat4;
var Texture = require('./texture');
var pixelsToTileUnits = require('../source/pixels_to_tile_units');

                                     
                                                      
                                                                              
                                                               
                                                  

module.exports = drawHeatmap;

function drawHeatmap(painter         , sourceCache             , layer                   , coords                  ) {
    if (painter.isOpaquePass) { return; }
    if (layer.paint.get('heatmap-opacity') === 0) {
        return;
    }

    var gl = painter.gl;

    painter.setDepthSublayer(0);
    painter.depthMask(false);

    // Allow kernels to be drawn across boundaries, so that
    // large kernels are not clipped to tiles
    gl.disable(gl.STENCIL_TEST);

    renderToTexture(gl, painter, layer);

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Turn on additive blending for kernels, which is a key aspect of kernel density estimation formula
    gl.blendFunc(gl.ONE, gl.ONE);

    for (var i = 0; i < coords.length; i++) {
        var coord = coords[i];

        // Skip tiles that have uncovered parents to avoid flickering; we don't need
        // to use complex tile masking here because the change between zoom levels is subtle,
        // so it's fine to simply render the parent until all its 4 children are loaded
        if (sourceCache.hasRenderableParent(coord)) { continue; }

        var tile = sourceCache.getTile(coord);
        var bucket                 = (tile.getBucket(layer)     );
        if (!bucket) { continue; }

        var programConfiguration = bucket.programConfigurations.get(layer.id);
        var program = painter.useProgram('heatmap', programConfiguration);
        var ref = painter.transform;
        var zoom = ref.zoom;
        programConfiguration.setUniforms(gl, program, layer.paint, {zoom: zoom});
        gl.uniform1f(program.uniforms.u_radius, layer.paint.get('heatmap-radius'));

        gl.uniform1f(program.uniforms.u_extrude_scale, pixelsToTileUnits(tile, 1, zoom));

        gl.uniform1f(program.uniforms.u_intensity, layer.paint.get('heatmap-intensity'));
        gl.uniformMatrix4fv(program.uniforms.u_matrix, false, coord.posMatrix);

        program.draw(
            gl,
            gl.TRIANGLES,
            layer.id,
            bucket.layoutVertexBuffer,
            bucket.indexBuffer,
            bucket.segments,
            programConfiguration);
    }

    renderTextureToMap(gl, painter, layer);
}

function renderToTexture(gl, painter, layer) {
    gl.activeTexture(gl.TEXTURE1);

    // Use a 4x downscaled screen texture for better performance
    gl.viewport(0, 0, painter.width / 4, painter.height / 4);

    var texture = layer.heatmapTexture;
    var fbo = layer.heatmapFbo;

    if (!texture) {
        texture = layer.heatmapTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

        fbo = layer.heatmapFbo = gl.createFramebuffer();

        bindTextureFramebuffer(gl, painter, texture, fbo);

    } else {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    }
}

function bindTextureFramebuffer(gl, painter, texture, fbo) {
    // Use the higher precision half-float texture where available (producing much smoother looking heatmaps);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, painter.width / 4, painter.height / 4, 0, gl.RGBA,
        painter.extTextureHalfFloat ? painter.extTextureHalfFloat.HALF_FLOAT_OES : gl.UNSIGNED_BYTE, null);

    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

    // If using half-float texture as a render target is not supported, fall back to a low precision texture
    if (painter.extTextureHalfFloat && gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
        painter.extTextureHalfFloat = null;
        bindTextureFramebuffer(gl, painter, texture, fbo);
    }
}

function renderTextureToMap(gl, painter, layer) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.activeTexture(gl.TEXTURE2);
    var colorRampTexture = layer.colorRampTexture;
    if (!colorRampTexture) {
        colorRampTexture = layer.colorRampTexture = new Texture(gl, layer.colorRamp, gl.RGBA);
    }
    colorRampTexture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE);

    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    var program = painter.useProgram('heatmapTexture');

    gl.viewport(0, 0, painter.width, painter.height);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, layer.heatmapTexture);

    var opacity = layer.paint.get('heatmap-opacity');
    gl.uniform1f(program.uniforms.u_opacity, opacity);
    gl.uniform1i(program.uniforms.u_image, 1);
    gl.uniform1i(program.uniforms.u_color_ramp, 2);

    var matrix = mat4.create();
    mat4.ortho(matrix, 0, painter.width, painter.height, 0, 0, 1);
    gl.uniformMatrix4fv(program.uniforms.u_matrix, false, matrix);

    gl.disable(gl.DEPTH_TEST);

    gl.uniform2f(program.uniforms.u_world, gl.drawingBufferWidth, gl.drawingBufferHeight);

    painter.viewportVAO.bind(gl, program, painter.viewportBuffer);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    gl.enable(gl.DEPTH_TEST);
}

},{"../source/pixels_to_tile_units":105,"./texture":94,"@mapbox/gl-matrix":1}],82:[function(require,module,exports){
'use strict';//      

var browser = require('../util/browser');
var pixelsToTileUnits = require('../source/pixels_to_tile_units');

                                     
                                                      
                                                                        
                                                         
                                                  

module.exports = function drawLine(painter         , sourceCache             , layer                , coords                  ) {
    if (painter.renderPass !== 'translucent') { return; }

    var opacity = layer.paint.get('line-opacity');
    if (opacity.constantOr(1) === 0) { return; }

    painter.setDepthSublayer(0);
    painter.depthMask(false);

    var gl = painter.gl;
    gl.enable(gl.STENCIL_TEST);

    var programId =
        layer.paint.get('line-dasharray') ? 'lineSDF' :
        layer.paint.get('line-pattern') ? 'linePattern' : 'line';

    var prevTileZoom;
    var firstTile = true;

    for (var i = 0, list = coords; i < list.length; i += 1) {
        var coord = list[i];

        var tile = sourceCache.getTile(coord);
        var bucket              = (tile.getBucket(layer)     );
        if (!bucket) { continue; }

        var programConfiguration = bucket.programConfigurations.get(layer.id);
        var prevProgram = painter.currentProgram;
        var program = painter.useProgram(programId, programConfiguration);
        var programChanged = firstTile || program !== prevProgram;
        var tileRatioChanged = prevTileZoom !== tile.coord.z;

        if (programChanged) {
            programConfiguration.setUniforms(painter.gl, program, layer.paint, {zoom: painter.transform.zoom});
        }
        drawLineTile(program, painter, tile, bucket, layer, coord, programConfiguration, programChanged, tileRatioChanged);
        prevTileZoom = tile.coord.z;
        firstTile = false;
    }
};

function drawLineTile(program, painter, tile, bucket, layer, coord, programConfiguration, programChanged, tileRatioChanged) {
    var gl = painter.gl;
    var dasharray = layer.paint.get('line-dasharray');
    var image = layer.paint.get('line-pattern');

    var posA, posB, imagePosA, imagePosB;

    if (programChanged || tileRatioChanged) {
        var tileRatio = 1 / pixelsToTileUnits(tile, 1, painter.transform.tileZoom);

        if (dasharray) {
            posA = painter.lineAtlas.getDash(dasharray.from, layer.layout.get('line-cap') === 'round');
            posB = painter.lineAtlas.getDash(dasharray.to, layer.layout.get('line-cap') === 'round');

            var widthA = posA.width * dasharray.fromScale;
            var widthB = posB.width * dasharray.toScale;

            gl.uniform2f(program.uniforms.u_patternscale_a, tileRatio / widthA, -posA.height / 2);
            gl.uniform2f(program.uniforms.u_patternscale_b, tileRatio / widthB, -posB.height / 2);
            gl.uniform1f(program.uniforms.u_sdfgamma, painter.lineAtlas.width / (Math.min(widthA, widthB) * 256 * browser.devicePixelRatio) / 2);

        } else if (image) {
            imagePosA = painter.imageManager.getPattern(image.from);
            imagePosB = painter.imageManager.getPattern(image.to);
            if (!imagePosA || !imagePosB) { return; }

            gl.uniform2f(program.uniforms.u_pattern_size_a, imagePosA.displaySize[0] * image.fromScale / tileRatio, imagePosB.displaySize[1]);
            gl.uniform2f(program.uniforms.u_pattern_size_b, imagePosB.displaySize[0] * image.toScale / tileRatio, imagePosB.displaySize[1]);

            var ref = painter.imageManager.getPixelSize();
            var width = ref.width;
            var height = ref.height;
            gl.uniform2fv(program.uniforms.u_texsize, [width, height]);
        }

        gl.uniform2f(program.uniforms.u_gl_units_to_pixels, 1 / painter.transform.pixelsToGLUnits[0], 1 / painter.transform.pixelsToGLUnits[1]);
    }

    if (programChanged) {

        if (dasharray) {
            gl.uniform1i(program.uniforms.u_image, 0);
            gl.activeTexture(gl.TEXTURE0);
            painter.lineAtlas.bind(gl);

            gl.uniform1f(program.uniforms.u_tex_y_a, (posA     ).y);
            gl.uniform1f(program.uniforms.u_tex_y_b, (posB     ).y);
            gl.uniform1f(program.uniforms.u_mix, dasharray.t);

        } else if (image) {
            gl.uniform1i(program.uniforms.u_image, 0);
            gl.activeTexture(gl.TEXTURE0);
            painter.imageManager.bind(gl);

            gl.uniform2fv(program.uniforms.u_pattern_tl_a, (imagePosA     ).tl);
            gl.uniform2fv(program.uniforms.u_pattern_br_a, (imagePosA     ).br);
            gl.uniform2fv(program.uniforms.u_pattern_tl_b, (imagePosB     ).tl);
            gl.uniform2fv(program.uniforms.u_pattern_br_b, (imagePosB     ).br);
            gl.uniform1f(program.uniforms.u_fade, image.t);
        }
    }

    painter.enableTileClippingMask(coord);

    var posMatrix = painter.translatePosMatrix(coord.posMatrix, tile, layer.paint.get('line-translate'), layer.paint.get('line-translate-anchor'));
    gl.uniformMatrix4fv(program.uniforms.u_matrix, false, posMatrix);

    gl.uniform1f(program.uniforms.u_ratio, 1 / pixelsToTileUnits(tile, 1, painter.transform.zoom));

    program.draw(
        gl,
        gl.TRIANGLES,
        layer.id,
        bucket.layoutVertexBuffer,
        bucket.indexBuffer,
        bucket.segments,
        programConfiguration);
}

},{"../source/pixels_to_tile_units":105,"../util/browser":246}],83:[function(require,module,exports){
'use strict';//      

var util = require('../util/util');
var ImageSource = require('../source/image_source');

                                     
                                                      
                                                                            
                                                  

module.exports = drawRaster;

function drawRaster(painter         , sourceCache             , layer                  , coords                  ) {
    if (painter.renderPass !== 'translucent') { return; }
    if (layer.paint.get('raster-opacity') === 0) { return; }

    var gl = painter.gl;
    var source = sourceCache.getSource();
    var program = painter.useProgram('raster');

    gl.enable(gl.DEPTH_TEST);
    painter.depthMask(layer.paint.get('raster-opacity') === 1);
    // Change depth function to prevent double drawing in areas where tiles overlap.
    gl.depthFunc(gl.LESS);

    gl.disable(gl.STENCIL_TEST);

    // Constant parameters.
    gl.uniform1f(program.uniforms.u_brightness_low, layer.paint.get('raster-brightness-min'));
    gl.uniform1f(program.uniforms.u_brightness_high, layer.paint.get('raster-brightness-max'));
    gl.uniform1f(program.uniforms.u_saturation_factor, saturationFactor(layer.paint.get('raster-saturation')));
    gl.uniform1f(program.uniforms.u_contrast_factor, contrastFactor(layer.paint.get('raster-contrast')));
    gl.uniform3fv(program.uniforms.u_spin_weights, spinWeights(layer.paint.get('raster-hue-rotate')));
    gl.uniform1f(program.uniforms.u_buffer_scale, 1);
    gl.uniform1i(program.uniforms.u_image0, 0);
    gl.uniform1i(program.uniforms.u_image1, 1);

    var minTileZ = coords.length && coords[0].z;

    for (var i = 0, list = coords; i < list.length; i += 1) {
        // set the lower zoom level to sublayer 0, and higher zoom levels to higher sublayers
        var coord = list[i];

        painter.setDepthSublayer(coord.z - minTileZ);

        var tile = sourceCache.getTile(coord);
        var posMatrix = painter.transform.calculatePosMatrix(coord, sourceCache.getSource().maxzoom);

        tile.registerFadeDuration(layer.paint.get('raster-fade-duration'));

        gl.uniformMatrix4fv(program.uniforms.u_matrix, false, posMatrix);

        var parentTile = sourceCache.findLoadedParent(coord, 0, {}),
            fade = getFadeValues(tile, parentTile, sourceCache, layer, painter.transform);

        var parentScaleBy = (void 0), parentTL = (void 0);

        gl.activeTexture(gl.TEXTURE0);
        tile.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE, gl.LINEAR_MIPMAP_NEAREST);

        gl.activeTexture(gl.TEXTURE1);

        if (parentTile) {
            parentTile.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE, gl.LINEAR_MIPMAP_NEAREST);
            parentScaleBy = Math.pow(2, parentTile.coord.z - tile.coord.z);
            parentTL = [tile.coord.x * parentScaleBy % 1, tile.coord.y * parentScaleBy % 1];

        } else {
            tile.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE, gl.LINEAR_MIPMAP_NEAREST);
        }

        // cross-fade parameters
        gl.uniform2fv(program.uniforms.u_tl_parent, parentTL || [0, 0]);
        gl.uniform1f(program.uniforms.u_scale_parent, parentScaleBy || 1);
        gl.uniform1f(program.uniforms.u_fade_t, fade.mix);
        gl.uniform1f(program.uniforms.u_opacity, fade.opacity * layer.paint.get('raster-opacity'));


        if (source instanceof ImageSource) {
            var buffer = source.boundsBuffer;
            var vao = source.boundsVAO;
            vao.bind(gl, program, buffer);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, buffer.length);
        } else if (tile.maskedBoundsBuffer && tile.maskedIndexBuffer && tile.segments) {
            program.draw(
                gl,
                gl.TRIANGLES,
                layer.id,
                tile.maskedBoundsBuffer,
                tile.maskedIndexBuffer,
                tile.segments
            );
        } else {
            var buffer$1 = painter.rasterBoundsBuffer;
            var vao$1 = painter.rasterBoundsVAO;
            vao$1.bind(gl, program, buffer$1);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, buffer$1.length);
        }
    }

    gl.depthFunc(gl.LEQUAL);
}

function spinWeights(angle) {
    angle *= Math.PI / 180;
    var s = Math.sin(angle);
    var c = Math.cos(angle);
    return [
        (2 * c + 1) / 3,
        (-Math.sqrt(3) * s - c + 1) / 3,
        (Math.sqrt(3) * s - c + 1) / 3
    ];
}

function contrastFactor(contrast) {
    return contrast > 0 ?
        1 / (1 - contrast) :
        1 + contrast;
}

function saturationFactor(saturation) {
    return saturation > 0 ?
        1 - 1 / (1.001 - saturation) :
        -saturation;
}

function getFadeValues(tile, parentTile, sourceCache, layer, transform) {
    var fadeDuration = layer.paint.get('raster-fade-duration');

    if (fadeDuration > 0) {
        var now = Date.now();
        var sinceTile = (now - tile.timeAdded) / fadeDuration;
        var sinceParent = parentTile ? (now - parentTile.timeAdded) / fadeDuration : -1;

        var source = sourceCache.getSource();
        var idealZ = transform.coveringZoomLevel({
            tileSize: source.tileSize,
            roundZoom: source.roundZoom
        });

        // if no parent or parent is older, fade in; if parent is younger, fade out
        var fadeIn = !parentTile || Math.abs(parentTile.coord.z - idealZ) > Math.abs(tile.coord.z - idealZ);

        var childOpacity = (fadeIn && tile.refreshedUponExpiration) ? 1 : util.clamp(fadeIn ? sinceTile : 1 - sinceParent, 0, 1);

        // we don't crossfade tiles that were just refreshed upon expiring:
        // once they're old enough to pass the crossfading threshold
        // (fadeDuration), unset the `refreshedUponExpiration` flag so we don't
        // incorrectly fail to crossfade them when zooming
        if (tile.refreshedUponExpiration && sinceTile >= 1) { tile.refreshedUponExpiration = false; }

        if (parentTile) {
            return {
                opacity: 1,
                mix: 1 - childOpacity
            };
        } else {
            return {
                opacity: childOpacity,
                mix: 0
            };
        }
    } else {
        return {
            opacity: 1,
            mix: 0
        };
    }
}

},{"../source/image_source":103,"../util/util":267}],84:[function(require,module,exports){
'use strict';//      

var drawCollisionDebug = require('./draw_collision_debug');
var pixelsToTileUnits = require('../source/pixels_to_tile_units');
var symbolProjection = require('../symbol/projection');
var symbolSize = require('../symbol/symbol_size');
var mat4 = require('@mapbox/gl-matrix').mat4;
var identityMat4 = mat4.identity(new Float32Array(16));
var symbolLayoutProperties = require('../style/style_layer/symbol_style_layer_properties').layout;

                                     
                                                      
                                                                            
                                                             
                                                  

module.exports = drawSymbols;

function drawSymbols(painter         , sourceCache             , layer                  , coords                  ) {
    if (painter.renderPass !== 'translucent') { return; }

    var gl = painter.gl;

    // Disable the stencil test so that labels aren't clipped to tile boundaries.
    gl.disable(gl.STENCIL_TEST);

    painter.setDepthSublayer(0);
    painter.depthMask(false);

    if (layer.paint.get('icon-opacity').constantOr(1) !== 0) {
        drawLayerSymbols(painter, sourceCache, layer, coords, false,
            layer.paint.get('icon-translate'),
            layer.paint.get('icon-translate-anchor'),
            layer.layout.get('icon-rotation-alignment'),
            layer.layout.get('icon-pitch-alignment'),
            layer.layout.get('icon-keep-upright')
        );
    }

    if (layer.paint.get('text-opacity').constantOr(1) !== 0) {
        drawLayerSymbols(painter, sourceCache, layer, coords, true,
            layer.paint.get('text-translate'),
            layer.paint.get('text-translate-anchor'),
            layer.layout.get('text-rotation-alignment'),
            layer.layout.get('text-pitch-alignment'),
            layer.layout.get('text-keep-upright')
        );
    }

    if (sourceCache.map.showCollisionBoxes) {
        drawCollisionDebug(painter, sourceCache, layer, coords);
    }
}

function drawLayerSymbols(painter, sourceCache, layer, coords, isText, translate, translateAnchor,
    rotationAlignment, pitchAlignment, keepUpright) {

    var gl = painter.gl;
    var tr = painter.transform;

    var rotateWithMap = rotationAlignment === 'map';
    var pitchWithMap = pitchAlignment === 'map';
    var alongLine = rotateWithMap && layer.layout.get('symbol-placement') === 'line';
    // Line label rotation happens in `updateLineLabels`
    // Pitched point labels are automatically rotated by the labelPlaneMatrix projection
    // Unpitched point labels need to have their rotation applied after projection
    var rotateInShader = rotateWithMap && !pitchWithMap && !alongLine;

    var depthOn = pitchWithMap;

    if (depthOn) {
        gl.enable(gl.DEPTH_TEST);
    } else {
        gl.disable(gl.DEPTH_TEST);
    }

    var program;

    for (var i = 0, list = coords; i < list.length; i += 1) {
        var coord = list[i];

        var tile = sourceCache.getTile(coord);
        var bucket               = (tile.getBucket(layer)     );
        if (!bucket) { continue; }
        var buffers = isText ? bucket.text : bucket.icon;
        if (!buffers || !buffers.segments.get().length) { continue; }
        var programConfiguration = buffers.programConfigurations.get(layer.id);

        var isSDF = isText || bucket.sdfIcons;

        var sizeData = isText ? bucket.textSizeData : bucket.iconSizeData;

        if (!program) {
            program = painter.useProgram(isSDF ? 'symbolSDF' : 'symbolIcon', programConfiguration);
            programConfiguration.setUniforms(gl, program, layer.paint, {zoom: painter.transform.zoom});

            setSymbolDrawState(program, painter, layer, isText, rotateInShader, pitchWithMap, sizeData);
        }

        gl.activeTexture(gl.TEXTURE0);
        gl.uniform1i(program.uniforms.u_texture, 0);

        if (isText) {
            tile.glyphAtlasTexture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE);
            gl.uniform2fv(program.uniforms.u_texsize, tile.glyphAtlasTexture.size);
        } else {
            var iconScaled = layer.layout.get('icon-size').constantOr(0) !== 1 || bucket.iconsNeedLinear;
            var iconTransformed = pitchWithMap || tr.pitch !== 0;

            tile.iconAtlasTexture.bind(isSDF || painter.options.rotating || painter.options.zooming || iconScaled || iconTransformed ?
                gl.LINEAR : gl.NEAREST, gl.CLAMP_TO_EDGE);
            gl.uniform2fv(program.uniforms.u_texsize, tile.iconAtlasTexture.size);
        }

        painter.enableTileClippingMask(coord);

        gl.uniformMatrix4fv(program.uniforms.u_matrix, false, painter.translatePosMatrix(coord.posMatrix, tile, translate, translateAnchor));

        var s = pixelsToTileUnits(tile, 1, painter.transform.zoom);
        var labelPlaneMatrix = symbolProjection.getLabelPlaneMatrix(coord.posMatrix, pitchWithMap, rotateWithMap, painter.transform, s);
        var glCoordMatrix = symbolProjection.getGlCoordMatrix(coord.posMatrix, pitchWithMap, rotateWithMap, painter.transform, s);
        gl.uniformMatrix4fv(program.uniforms.u_gl_coord_matrix, false, painter.translatePosMatrix(glCoordMatrix, tile, translate, translateAnchor, true));

        if (alongLine) {
            gl.uniformMatrix4fv(program.uniforms.u_label_plane_matrix, false, identityMat4);
            symbolProjection.updateLineLabels(bucket, coord.posMatrix, painter, isText, labelPlaneMatrix, glCoordMatrix, pitchWithMap, keepUpright);
        } else {
            gl.uniformMatrix4fv(program.uniforms.u_label_plane_matrix, false, labelPlaneMatrix);
        }

        gl.uniform1f(program.uniforms.u_fade_change, painter.options.collisionFadeDuration ? ((Date.now() - bucket.fadeStartTime) / painter.options.collisionFadeDuration) : 1);

        drawTileSymbols(program, programConfiguration, painter, layer, tile, buffers, isText, isSDF, pitchWithMap);
    }

    if (!depthOn) { gl.enable(gl.DEPTH_TEST); }
}

function setSymbolDrawState(program, painter, layer, isText, rotateInShader, pitchWithMap, sizeData) {

    var gl = painter.gl;
    var tr = painter.transform;

    gl.uniform1i(program.uniforms.u_pitch_with_map, pitchWithMap ? 1 : 0);

    gl.uniform1f(program.uniforms.u_is_text, isText ? 1 : 0);

    gl.uniform1f(program.uniforms.u_pitch, tr.pitch / 360 * 2 * Math.PI);

    var isZoomConstant = sizeData.functionType === 'constant' || sizeData.functionType === 'source';
    var isFeatureConstant = sizeData.functionType === 'constant' || sizeData.functionType === 'camera';
    gl.uniform1i(program.uniforms.u_is_size_zoom_constant, isZoomConstant ? 1 : 0);
    gl.uniform1i(program.uniforms.u_is_size_feature_constant, isFeatureConstant ? 1 : 0);

    gl.uniform1f(program.uniforms.u_camera_to_center_distance, tr.cameraToCenterDistance);

    var size = symbolSize.evaluateSizeForZoom(sizeData, tr.zoom, symbolLayoutProperties.properties[isText ? 'text-size' : 'icon-size']);
    if (size.uSizeT !== undefined) { gl.uniform1f(program.uniforms.u_size_t, size.uSizeT); }
    if (size.uSize !== undefined) { gl.uniform1f(program.uniforms.u_size, size.uSize); }

    gl.uniform1f(program.uniforms.u_aspect_ratio, tr.width / tr.height);
    gl.uniform1i(program.uniforms.u_rotate_symbol, rotateInShader ? 1 : 0);
}

function drawTileSymbols(program, programConfiguration, painter, layer, tile, buffers, isText, isSDF, pitchWithMap) {

    var gl = painter.gl;
    var tr = painter.transform;

    if (isSDF) {
        var hasHalo = layer.paint.get(isText ? 'text-halo-width' : 'icon-halo-width').constantOr(1) !== 0;
        var gammaScale = (pitchWithMap ? Math.cos(tr._pitch) * tr.cameraToCenterDistance : 1);
        gl.uniform1f(program.uniforms.u_gamma_scale, gammaScale);

        if (hasHalo) { // Draw halo underneath the text.
            gl.uniform1f(program.uniforms.u_is_halo, 1);
            drawSymbolElements(buffers, layer, gl, program);
        }

        gl.uniform1f(program.uniforms.u_is_halo, 0);
    }

    drawSymbolElements(buffers, layer, gl, program);
}

function drawSymbolElements(buffers, layer, gl, program) {
    program.draw(
        gl,
        gl.TRIANGLES,
        layer.id,
        buffers.layoutVertexBuffer,
        buffers.indexBuffer,
        buffers.segments,
        buffers.programConfigurations.get(layer.id),
        buffers.dynamicLayoutVertexBuffer,
        buffers.opacityVertexBuffer);
}

},{"../source/pixels_to_tile_units":105,"../style/style_layer/symbol_style_layer_properties":203,"../symbol/projection":217,"../symbol/symbol_size":222,"./draw_collision_debug":77,"@mapbox/gl-matrix":1}],85:[function(require,module,exports){
'use strict';//      

var ShelfPack = require('@mapbox/shelf-pack');
var ref = require('../util/image');
var AlphaImage = ref.AlphaImage;

                                                                   

var padding = 1;

             
              
              
              
             
  

                             
               
                         
  

                          
                      
                                                    
  

function makeGlyphAtlas(stacks                                     )             {
    var image = AlphaImage.create({width: 0, height: 0});
    var positions = {};

    var pack = new ShelfPack(0, 0, {autoResize: true});

    for (var stack in stacks) {
        var glyphs = stacks[stack];
        var stackPositions = positions[stack] = {};

        for (var id in glyphs) {
            var src = glyphs[+id];
            if (src && src.bitmap.width !== 0 && src.bitmap.height !== 0) {
                var bin = pack.packOne(
                    src.bitmap.width + 2 * padding,
                    src.bitmap.height + 2 * padding);

                AlphaImage.resize(image, {
                    width: pack.w,
                    height: pack.h
                });

                AlphaImage.copy(
                    src.bitmap,
                    image,
                    { x: 0, y: 0 },
                    {
                        x: bin.x + padding,
                        y: bin.y + padding
                    },
                    src.bitmap);

                stackPositions[id] = { rect: bin, metrics: src.metrics };
            }
        }
    }

    pack.shrink();
    AlphaImage.resize(image, {
        width: pack.w,
        height: pack.h
    });

    return {image: image, positions: positions};
}

module.exports = {
    makeGlyphAtlas: makeGlyphAtlas
};

},{"../util/image":257,"@mapbox/shelf-pack":3}],86:[function(require,module,exports){
'use strict';//      

var loadGlyphRange = require('../style/load_glyph_range');
var TinySDF = require('@mapbox/tiny-sdf');
var isChar = require('../util/is_char_in_unicode_block');
var ref = require('../util/util');
var asyncAll = ref.asyncAll;
var ref$1 = require('../util/image');
var AlphaImage = ref$1.AlphaImage;

                                                     
                                                        
                                                

              
                                                                                         
                                              
                                                                                
                     
  

var GlyphManager = function GlyphManager(requestTransform                        , localIdeographFontFamily       ) {
      this.requestTransform = requestTransform;
      this.localIdeographFontFamily = localIdeographFontFamily;
      this.entries = {};
  };

  GlyphManager.prototype.setURL = function setURL (url       ) {
      this.url = url;
  };

  GlyphManager.prototype.getGlyphs = function getGlyphs (glyphs                                , callback                                                        ) {
        var this$1 = this;

      var all = [];

      for (var stack in glyphs) {
          for (var i = 0, list = glyphs[stack]; i < list.length; i += 1) {
              var id = list[i];

              all.push({stack: stack, id: id});
          }
      }

      asyncAll(all, function (ref, callback                                                         ) {
            var stack = ref.stack;
            var id = ref.id;

          var entry = this$1.entries[stack];
          if (!entry) {
              entry = this$1.entries[stack] = {
                  glyphs: {},
                  requests: {}
              };
          }

          var glyph = entry.glyphs[id];
          if (glyph !== undefined) {
              callback(null, {stack: stack, id: id, glyph: glyph});
              return;
          }

          glyph = this$1._tinySDF(entry, stack, id);
          if (glyph) {
              callback(null, {stack: stack, id: id, glyph: glyph});
              return;
          }

          var range = Math.floor(id / 256);
          if (range * 256 > 65535) {
              callback(new Error('glyphs > 65535 not supported'));
              return;
          }

          var requests = entry.requests[range];
          if (!requests) {
              requests = entry.requests[range] = [];
              loadGlyphRange(stack, range, (this$1.url   ), this$1.requestTransform,
                  function (err, response                              ) {
                      if (response) {
                          for (var id in response) {
                              entry.glyphs[+id] = response[+id];
                          }
                      }
                      for (var i = 0, list = requests; i < list.length; i += 1) {
                          var cb = list[i];

                          cb(err, response);
                      }
                      delete entry.requests[range];
                  });
          }

          requests.push(function (err, result                              ) {
              if (err) {
                  callback(err);
              } else if (result) {
                  callback(null, {stack: stack, id: id, glyph: result[id] || null});
              }
          });
      }, function (err, glyphs                                                       ) {
          if (err) {
              callback(err);
          } else if (glyphs) {
              var result = {};

              for (var i = 0, list = glyphs; i < list.length; i += 1) {
                  var ref = list[i];
                  var stack = ref.stack;
                  var id = ref.id;
                  var glyph = ref.glyph;

                  (result[stack] || (result[stack] = {}))[id] = glyph;
              }

              callback(null, result);
          }
      });
  };

  GlyphManager.prototype._tinySDF = function _tinySDF (entry     , stack      , id      )            {
      var family = this.localIdeographFontFamily;
      if (!family) {
          return;
      }

      if (!isChar['CJK Unified Ideographs'](id) && !isChar['Hangul Syllables'](id)) { // eslint-disable-line new-cap
          return;
      }

      var tinySDF = entry.tinySDF;
      if (!tinySDF) {
          var fontWeight = '400';
          if (/bold/i.test(stack)) {
              fontWeight = '900';
          } else if (/medium/i.test(stack)) {
              fontWeight = '500';
          } else if (/light/i.test(stack)) {
              fontWeight = '200';
          }
          tinySDF = entry.tinySDF = new TinySDF(24, 3, 8, .25, family, fontWeight);
      }

      return {
          id: id,
          bitmap: AlphaImage.create({width: 30, height: 30}, tinySDF.draw(String.fromCharCode(id))),
          metrics: {
              width: 24,
              height: 24,
              left: 0,
              top: -8,
              advance: 24
          }
      };
  };

module.exports = GlyphManager;

},{"../style/load_glyph_range":180,"../util/image":257,"../util/is_char_in_unicode_block":259,"../util/util":267,"@mapbox/tiny-sdf":4}],87:[function(require,module,exports){
'use strict';//      

var ShelfPack = require('@mapbox/shelf-pack');
var ref = require('../util/image');
var RGBAImage = ref.RGBAImage;

                                                     

var padding = 1;

             
              
              
              
             
  

                             
                       
                      
                         
                         
                                 
  

// This wants to be a class, but is sent to workers, so must be a plain JSON blob.
function imagePosition(rect      , ref            )                {
    var pixelRatio = ref.pixelRatio;

    var textureRect = {
        x: rect.x + padding,
        y: rect.y + padding,
        w: rect.w - padding * 2,
        h: rect.h - padding * 2
    };
    return {
        pixelRatio: pixelRatio,
        textureRect: textureRect,

        // Redundant calculated members.
        tl: [
            textureRect.x,
            textureRect.y
        ],
        br: [
            textureRect.x + textureRect.w,
            textureRect.y + textureRect.h
        ],
        displaySize: [
            textureRect.w / pixelRatio,
            textureRect.h / pixelRatio
        ]
    };
}

                          
                     
                                        
  

function makeImageAtlas(images                        )             {
    var image = RGBAImage.create({width: 0, height: 0});
    var positions = {};

    var pack = new ShelfPack(0, 0, {autoResize: true});

    for (var id in images) {
        var src = images[id];

        var bin = pack.packOne(
            src.data.width + 2 * padding,
            src.data.height + 2 * padding);

        RGBAImage.resize(image, {
            width: pack.w,
            height: pack.h
        });

        RGBAImage.copy(
            src.data,
            image,
            { x: 0, y: 0 },
            {
                x: bin.x + padding,
                y: bin.y + padding
            },
            src.data);

        positions[id] = imagePosition(bin, src);
    }

    pack.shrink();
    RGBAImage.resize(image, {
        width: pack.w,
        height: pack.h
    });

    return {image: image, positions: positions};
}

module.exports = {
    imagePosition: imagePosition,
    makeImageAtlas: makeImageAtlas
};

},{"../util/image":257,"@mapbox/shelf-pack":3}],88:[function(require,module,exports){
'use strict';//      

var ShelfPack = require('@mapbox/shelf-pack');
var ref = require('../util/image');
var RGBAImage = ref.RGBAImage;
var ref$1 = require('./image_atlas');
var imagePosition = ref$1.imagePosition;
var Texture = require('./texture');
var assert = require('assert');

                                                     
                                                 
                                            
                                                

                
             
                           
  

// When copied into the atlas texture, image data is padded by one pixel on each side. Icon
// images are padded with fully transparent pixels, while pattern images are padded with a
// copy of the image data wrapped from the opposite side. In both cases, this ensures the
// correct behavior of GL_LINEAR texture sampling mode.
var padding = 1;

/*
    ImageManager does two things:

        1. Tracks requests for icon images from tile workers and sends responses when the requests are fulfilled.
        2. Builds a texture atlas for pattern images.

    These are disparate responsibilities and should eventually be handled by different classes. When we implement
    data-driven support for `*-pattern`, we'll likely use per-bucket pattern atlases, and that would be a good time
    to refactor this.
*/
var ImageManager = function ImageManager() {
      this.images = {};
      this.loaded = false;
      this.requestors = [];

      this.shelfPack = new ShelfPack(64, 64, {autoResize: true});
      this.patterns = {};
      this.atlasImage = RGBAImage.create({width: 64, height: 64});
      this.dirty = true;
  };

  ImageManager.prototype.isLoaded = function isLoaded () {
      return this.loaded;
  };

  ImageManager.prototype.setLoaded = function setLoaded (loaded       ) {
        var this$1 = this;

      if (this.loaded === loaded) {
          return;
      }

      this.loaded = loaded;

      if (loaded) {
          for (var i = 0, list = this$1.requestors; i < list.length; i += 1) {
              var ref = list[i];
              var ids = ref.ids;
              var callback = ref.callback;

              this$1._notify(ids, callback);
          }
          this.requestors = [];
      }
  };

  ImageManager.prototype.getImage = function getImage (id      )            {
      return this.images[id];
  };

  ImageManager.prototype.addImage = function addImage (id      , image          ) {
      assert(!this.images[id]);
      this.images[id] = image;
  };

  ImageManager.prototype.removeImage = function removeImage (id      ) {
      assert(this.images[id]);
      delete this.images[id];

      var pattern = this.patterns[id];
      if (pattern) {
          this.shelfPack.unref(pattern.bin);
          delete this.patterns[id];
      }
  };

  ImageManager.prototype.getImages = function getImages (ids             , callback                                ) {
        var this$1 = this;

      // If the sprite has been loaded, or if all the icon dependencies are already present
      // (i.e. if they've been addeded via runtime styling), then notify the requestor immediately.
      // Otherwise, delay notification until the sprite is loaded. At that point, if any of the
      // dependencies are still unavailable, we'll just assume they are permanently missing.
      var hasAllDependencies = true;
      if (!this.isLoaded()) {
          for (var i = 0, list = ids; i < list.length; i += 1) {
              var id = list[i];

              if (!this$1.images[id]) {
                  hasAllDependencies = false;
              }
          }
      }
      if (this.isLoaded() || hasAllDependencies) {
          this._notify(ids, callback);
      } else {
          this.requestors.push({ids: ids, callback: callback});
      }
  };

  ImageManager.prototype._notify = function _notify (ids             , callback                                ) {
        var this$1 = this;

      var response = {};

      for (var i = 0, list = ids; i < list.length; i += 1) {
          var id = list[i];

          var image = this$1.images[id];
          if (image) {
              response[id] = image;
          }
      }

      callback(null, response);
  };

  // Pattern stuff

  ImageManager.prototype.getPixelSize = function getPixelSize () {
      return {
          width: this.shelfPack.w,
          height: this.shelfPack.h
      };
  };

  ImageManager.prototype.getPattern = function getPattern (id      )               {
      var pattern = this.patterns[id];
      if (pattern) {
          return pattern.position;
      }

      var image = this.getImage(id);
      if (!image) {
          return null;
      }

      var width = image.data.width + padding * 2;
      var height = image.data.height + padding * 2;

      var bin = this.shelfPack.packOne(width, height);
      if (!bin) {
          return null;
      }

      RGBAImage.resize(this.atlasImage, this.getPixelSize());

      var src = image.data;
      var dst = this.atlasImage;

      var x = bin.x + padding;
      var y = bin.y + padding;
      var w = src.width;
      var h = src.height;

      RGBAImage.copy(src, dst, { x: 0, y: 0 }, { x: x, y: y }, { width: w, height: h });

      // Add 1 pixel wrapped padding on each side of the image.
      RGBAImage.copy(src, dst, { x: 0, y: h - 1 }, { x: x, y: y - 1 }, { width: w, height: 1 }); // T
      RGBAImage.copy(src, dst, { x: 0, y:   0 }, { x: x, y: y + h }, { width: w, height: 1 }); // B
      RGBAImage.copy(src, dst, { x: w - 1, y: 0 }, { x: x - 1, y: y }, { width: 1, height: h }); // L
      RGBAImage.copy(src, dst, { x: 0,   y: 0 }, { x: x + w, y: y }, { width: 1, height: h }); // R

      this.dirty = true;

      var position = imagePosition(bin, image);
      this.patterns[id] = { bin: bin, position: position };
      return position;
  };

  ImageManager.prototype.bind = function bind (gl                     ) {
      if (!this.atlasTexture) {
          this.atlasTexture = new Texture(gl, this.atlasImage, gl.RGBA);
      } else if (this.dirty) {
          this.atlasTexture.update(this.atlasImage);
          this.dirty = false;
      }

      this.atlasTexture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE);
  };

module.exports = ImageManager;

},{"../util/image":257,"./image_atlas":87,"./texture":94,"@mapbox/shelf-pack":3,"assert":11}],89:[function(require,module,exports){
'use strict';//      

var util = require('../util/util');

/**
 * A LineAtlas lets us reuse rendered dashed lines
 * by writing many of them to a texture and then fetching their positions
 * using .getDash.
 *
 * @param {number} width
 * @param {number} height
 * @private
 */
var LineAtlas = function LineAtlas(width    , height    ) {
    this.width = width;
    this.height = height;
    this.nextRow = 0;

    this.bytes = 4;
    this.data = new Uint8Array(this.width * this.height * this.bytes);

    this.positions = {};
};

/**
 * Get or create a dash line pattern.
 *
 * @param {Array<number>} dasharray
 * @param {boolean} round whether to add circle caps in between dash segments
 * @returns {Object} position of dash texture in { y, height, width }
 * @private
 */
LineAtlas.prototype.getDash = function getDash (dasharray           , round     ) {
    var key = dasharray.join(",") + String(round);

    if (!this.positions[key]) {
        this.positions[key] = this.addDash(dasharray, round);
    }
    return this.positions[key];
};

LineAtlas.prototype.addDash = function addDash (dasharray           , round     ) {
        var this$1 = this;


    var n = round ? 7 : 0;
    var height = 2 * n + 1;
    var offset = 128;

    if (this.nextRow + height > this.height) {
        util.warnOnce('LineAtlas out of space');
        return null;
    }

    var length = 0;
    for (var i = 0; i < dasharray.length; i++) {
        length += dasharray[i];
    }

    var stretch = this.width / length;
    var halfWidth = stretch / 2;

    // If dasharray has an odd length, both the first and last parts
    // are dashes and should be joined seamlessly.
    var oddLength = dasharray.length % 2 === 1;

    for (var y = -n; y <= n; y++) {
        var row = this$1.nextRow + n + y;
        var index = this$1.width * row;

        var left = oddLength ? -dasharray[dasharray.length - 1] : 0;
        var right = dasharray[0];
        var partIndex = 1;

        for (var x = 0; x < this.width; x++) {

            while (right < x / stretch) {
                left = right;
                right = right + dasharray[partIndex];

                if (oddLength && partIndex === dasharray.length - 1) {
                    right += dasharray[0];
                }

                partIndex++;
            }

            var distLeft = Math.abs(x - left * stretch);
            var distRight = Math.abs(x - right * stretch);
            var dist = Math.min(distLeft, distRight);
            var inside = (partIndex % 2) === 1;
            var signedDistance = (void 0);

            if (round) {
                // Add circle caps
                var distMiddle = n ? y / n * (halfWidth + 1) : 0;
                if (inside) {
                    var distEdge = halfWidth - Math.abs(distMiddle);
                    signedDistance = Math.sqrt(dist * dist + distEdge * distEdge);
                } else {
                    signedDistance = halfWidth - Math.sqrt(dist * dist + distMiddle * distMiddle);
                }
            } else {
                signedDistance = (inside ? 1 : -1) * dist;
            }

            this$1.data[3 + (index + x) * 4] = Math.max(0, Math.min(255, signedDistance + offset));
        }
    }

    var pos = {
        y: (this.nextRow + n + 0.5) / this.height,
        height: 2 * n / this.height,
        width: length
    };

    this.nextRow += height;
    this.dirty = true;

    return pos;
};

LineAtlas.prototype.bind = function bind (gl                   ) {
    if (!this.texture) {
        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, this.data);

    } else {
        gl.bindTexture(gl.TEXTURE_2D, this.texture);

        if (this.dirty) {
            this.dirty = false;
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, this.width, this.height, gl.RGBA, gl.UNSIGNED_BYTE, this.data);
        }
    }
};

module.exports = LineAtlas;

},{"../util/util":267}],90:[function(require,module,exports){
'use strict';//      

var browser = require('../util/browser');
var mat4 = require('@mapbox/gl-matrix').mat4;
var SourceCache = require('../source/source_cache');
var EXTENT = require('../data/extent');
var pixelsToTileUnits = require('../source/pixels_to_tile_units');
var util = require('../util/util');
var VertexBuffer = require('../gl/vertex_buffer');
var VertexArrayObject = require('./vertex_array_object');
var RasterBoundsArray = require('../data/raster_bounds_array');
var PosArray = require('../data/pos_array');
var ref = require('../data/program_configuration');
var ProgramConfiguration = ref.ProgramConfiguration;
var CrossTileSymbolIndex = require('../symbol/cross_tile_symbol_index');
var shaders = require('../shaders');
var Program = require('./program');
var RenderTexture = require('./render_texture');
var updateTileMasks = require('./tile_mask');

var draw = {
    symbol: require('./draw_symbol'),
    circle: require('./draw_circle'),
    heatmap: require('./draw_heatmap'),
    line: require('./draw_line'),
    fill: require('./draw_fill'),
    'fill-extrusion': require('./draw_fill_extrusion'),
    raster: require('./draw_raster'),
    background: require('./draw_background'),
    debug: require('./draw_debug')
};

                                              
                                       
                                                  
                                        
                                                   
                                          
                                     
                                                
                                                

                                                         

                       
                                   
                                
                      
                     
                                 
 

/**
 * Initialize a new painter object.
 *
 * @param {Canvas} gl an experimental-webgl drawing context
 * @private
 */
var Painter = function Painter(gl                   , transform       ) {
    this.gl = gl;
    this.transform = transform;
    this._tileTextures = {};

    this.setup();

    // Within each layer there are multiple distinct z-planes that can be drawn to.
    // This is implemented using the WebGL depth buffer.
    this.numSublayers = SourceCache.maxUnderzooming + SourceCache.maxOverzooming + 1;
    this.depthEpsilon = 1 / Math.pow(2, 16);

    this.lineWidthRange = gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE);

    this.emptyProgramConfiguration = new ProgramConfiguration();

    this.crossTileSymbolIndex = new CrossTileSymbolIndex();
};

/*
 * Update the GL viewport, projection matrix, and transforms to compensate
 * for a new width and height value.
 */
Painter.prototype.resize = function resize (width    , height    ) {
        var this$1 = this;

    var gl = this.gl;

    this.width = width * browser.devicePixelRatio;
    this.height = height * browser.devicePixelRatio;
    gl.viewport(0, 0, this.width, this.height);

    if (this.style) {
        for (var i = 0, list = this$1.style._order; i < list.length; i += 1) {
            var layerId = list[i];

                this$1.style._layers[layerId].resize(gl);
        }
    }

    if (this.depthRbo) {
        this.gl.deleteRenderbuffer(this.depthRbo);
        this.depthRbo = null;
    }
};

Painter.prototype.setup = function setup () {
    var gl = this.gl;

    // We are blending the new pixels *behind* the existing pixels. That way we can
    // draw front-to-back and use then stencil buffer to cull opaque pixels early.
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    gl.enable(gl.STENCIL_TEST);

    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    this._depthMask = false;
    gl.depthMask(false);

    var tileExtentArray = new PosArray();
    tileExtentArray.emplaceBack(0, 0);
    tileExtentArray.emplaceBack(EXTENT, 0);
    tileExtentArray.emplaceBack(0, EXTENT);
    tileExtentArray.emplaceBack(EXTENT, EXTENT);
    this.tileExtentBuffer = new VertexBuffer(gl, tileExtentArray);
    this.tileExtentVAO = new VertexArrayObject();
    this.tileExtentPatternVAO = new VertexArrayObject();

    var debugArray = new PosArray();
    debugArray.emplaceBack(0, 0);
    debugArray.emplaceBack(EXTENT, 0);
    debugArray.emplaceBack(EXTENT, EXTENT);
    debugArray.emplaceBack(0, EXTENT);
    debugArray.emplaceBack(0, 0);
    this.debugBuffer = new VertexBuffer(gl, debugArray);
    this.debugVAO = new VertexArrayObject();

    var rasterBoundsArray = new RasterBoundsArray();
    rasterBoundsArray.emplaceBack(0, 0, 0, 0);
    rasterBoundsArray.emplaceBack(EXTENT, 0, EXTENT, 0);
    rasterBoundsArray.emplaceBack(0, EXTENT, 0, EXTENT);
    rasterBoundsArray.emplaceBack(EXTENT, EXTENT, EXTENT, EXTENT);
    this.rasterBoundsBuffer = new VertexBuffer(gl, rasterBoundsArray);
    this.rasterBoundsVAO = new VertexArrayObject();

    var viewportArray = new PosArray();
    viewportArray.emplaceBack(0, 0);
    viewportArray.emplaceBack(1, 0);
    viewportArray.emplaceBack(0, 1);
    viewportArray.emplaceBack(1, 1);
    this.viewportBuffer = new VertexBuffer(gl, viewportArray);
    this.viewportVAO = new VertexArrayObject();

    this.extTextureFilterAnisotropic = (
        gl.getExtension('EXT_texture_filter_anisotropic') ||
        gl.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
        gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic')
    );
    if (this.extTextureFilterAnisotropic) {
        this.extTextureFilterAnisotropicMax = gl.getParameter(this.extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    }

    this.extTextureHalfFloat = gl.getExtension('OES_texture_half_float');
    if (this.extTextureHalfFloat) {
        gl.getExtension('OES_texture_half_float_linear');
    }
};

/*
 * Reset the color buffers of the drawing canvas.
 */
Painter.prototype.clearColor = function clearColor () {
    var gl = this.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
};

/*
 * Reset the drawing canvas by clearing the stencil buffer so that we can draw
 * new tiles at the same location, while retaining previously drawn pixels.
 */
Painter.prototype.clearStencil = function clearStencil () {
    var gl = this.gl;

    // As a temporary workaround for https://github.com/mapbox/mapbox-gl-js/issues/5490,
    // pending an upstream fix, we draw a fullscreen stencil=0 clipping mask here,
    // effectively clearing the stencil buffer: restore this code for native
    // performance and readability once an upstream patch lands.

    // gl.clearStencil(0x0);
    // gl.stencilMask(0xFF);
    // gl.clear(gl.STENCIL_BUFFER_BIT);

    gl.colorMask(false, false, false, false);
    this.depthMask(false);
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.STENCIL_TEST);

    gl.stencilMask(0xFF);
    gl.stencilOp(gl.ZERO, gl.ZERO, gl.ZERO);

    gl.stencilFunc(gl.ALWAYS, 0x0, 0xFF);

    var matrix = mat4.create();
    mat4.ortho(matrix, 0, this.width, this.height, 0, 0, 1);
    mat4.scale(matrix, matrix, [gl.drawingBufferWidth, gl.drawingBufferHeight, 0]);

    var program = this.useProgram('fill', ProgramConfiguration.forTileClippingMask());
    gl.uniformMatrix4fv(program.uniforms.u_matrix, false, matrix);

    this.viewportVAO.bind(gl, program, this.viewportBuffer);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    gl.stencilMask(0x00);
    gl.colorMask(true, true, true, true);
    this.depthMask(true);
    gl.enable(gl.DEPTH_TEST);
};

Painter.prototype.clearDepth = function clearDepth () {
    var gl = this.gl;
    gl.clearDepth(1);
    this.depthMask(true);
    gl.clear(gl.DEPTH_BUFFER_BIT);
};

Painter.prototype._renderTileClippingMasks = function _renderTileClippingMasks (coords              ) {
        var this$1 = this;

    var gl = this.gl;
    gl.colorMask(false, false, false, false);
    this.depthMask(false);
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.STENCIL_TEST);

    gl.stencilMask(0xFF);
    // Tests will always pass, and ref value will be written to stencil buffer.
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);

    var idNext = 1;
    this._tileClippingMaskIDs = {};
    var programConfiguration = ProgramConfiguration.forTileClippingMask();

    for (var i = 0, list = coords; i < list.length; i += 1) {
        var coord = list[i];

            var id = this$1._tileClippingMaskIDs[coord.id] = idNext++;

        gl.stencilFunc(gl.ALWAYS, id, 0xFF);

        var program = this$1.useProgram('fill', programConfiguration);
        gl.uniformMatrix4fv(program.uniforms.u_matrix, false, coord.posMatrix);

        // Draw the clipping mask
        this$1.tileExtentVAO.bind(gl, program, this$1.tileExtentBuffer);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, this$1.tileExtentBuffer.length);
    }

    gl.stencilMask(0x00);
    gl.colorMask(true, true, true, true);
    this.depthMask(true);
    gl.enable(gl.DEPTH_TEST);
};

Painter.prototype.enableTileClippingMask = function enableTileClippingMask (coord       ) {
    var gl = this.gl;
    gl.stencilFunc(gl.EQUAL, this._tileClippingMaskIDs[coord.id], 0xFF);
};

Painter.prototype.render = function render (style   , options            ) {
        var this$1 = this;

    this.style = style;
    this.options = options;

    this.lineAtlas = style.lineAtlas;
    this.imageManager = style.imageManager;
    this.glyphManager = style.glyphManager;

    for (var id in style.sourceCaches) {
        var sourceCache = this$1.style.sourceCaches[id];
        if (sourceCache.used) {
            sourceCache.prepare(this$1.gl);
        }
    }

    var layerIds = this.style._order;

    var rasterSources = util.filterObject(this.style.sourceCaches, function (sc) { return sc._source.type === 'raster'; });
    var loop = function ( key ) {
        var sourceCache$1 = rasterSources[key];
        var coords = sourceCache$1.getVisibleCoordinates();
        var visibleTiles = coords.map(function (c){ return sourceCache$1.getTile(c); });
        updateTileMasks(visibleTiles, this$1.gl);
    };

        for (var key in rasterSources) loop( key );

    // 3D pass
    // We first create a renderbuffer that we'll use to preserve depth
    // results across 3D layers, then render each 3D layer to its own
    // framebuffer/texture, which we'll use later in the translucent pass
    // to render to the main framebuffer. By doing this before we render to
    // the main framebuffer we won't have to do an expensive framebuffer
    // restore mid-render pass.
    // The most important distinction of the 3D pass is that we use the
    // depth buffer in an entirely different way (to represent 3D space)
    // than we do in the 2D pass (to preserve layer order).
    this.renderPass = '3d';
    {
        // We'll wait and only attach the depth renderbuffer if we think we're
        // rendering something.
        var first = true;

        var sourceCache$2;
        var coords$1 = [];

        for (var i = 0; i < layerIds.length; i++) {
            var layer = this$1.style._layers[layerIds[i]];

            if (!layer.has3DPass() || layer.isHidden(this$1.transform.zoom)) { continue; }

            if (layer.source !== (sourceCache$2 && sourceCache$2.id)) {
                sourceCache$2 = this$1.style.sourceCaches[layer.source];
                coords$1 = [];

                if (sourceCache$2) {
                    this$1.clearStencil();
                    coords$1 = sourceCache$2.getVisibleCoordinates();
                }

                coords$1.reverse();
            }

            if (!coords$1.length) { continue; }

            this$1._setup3DRenderbuffer();

            var renderTarget = layer.viewportFrame || new RenderTexture(this$1);
            layer.viewportFrame = renderTarget;
            renderTarget.bindWithDepth(this$1.depthRbo);

            if (first) {
                this$1.clearDepth();
                first = false;
            }

            this$1.renderLayer(this$1, (sourceCache$2 ), layer, coords$1);

            renderTarget.unbind();
        }
    }

    // Clear buffers in preparation for drawing to the main framebuffer
    this.clearColor();
    this.clearDepth();

    this.showOverdrawInspector(options.showOverdrawInspector);

    this.depthRange = (style._order.length + 2) * this.numSublayers * this.depthEpsilon;

    // Opaque pass
    // Draw opaque layers top-to-bottom first.
    this.renderPass = 'opaque';
    {
        var sourceCache$3;
        var coords$2 = [];

        this.currentLayer = layerIds.length - 1;

        if (!this._showOverdrawInspector) {
            this.gl.disable(this.gl.BLEND);
        }

        for (this.currentLayer; this.currentLayer >= 0; this.currentLayer--) {
            var layer$1 = this$1.style._layers[layerIds[this$1.currentLayer]];

            if (layer$1.source !== (sourceCache$3 && sourceCache$3.id)) {
                sourceCache$3 = this$1.style.sourceCaches[layer$1.source];
                coords$2 = [];

                if (sourceCache$3) {
                    this$1.clearStencil();
                    coords$2 = sourceCache$3.getVisibleCoordinates();
                    if (sourceCache$3.getSource().isTileClipped) {
                        this$1._renderTileClippingMasks(coords$2);
                    }
                }
            }

            this$1.renderLayer(this$1, (sourceCache$3 ), layer$1, coords$2);
        }
    }

    // Translucent pass
    // Draw all other layers bottom-to-top.
    this.renderPass = 'translucent';
    {
        var sourceCache$4;
        var coords$3 = [];

        this.gl.enable(this.gl.BLEND);

        this.currentLayer = 0;

        for (this.currentLayer; this.currentLayer < layerIds.length; this.currentLayer++) {
            var layer$2 = this$1.style._layers[layerIds[this$1.currentLayer]];

            if (layer$2.source !== (sourceCache$4 && sourceCache$4.id)) {
                sourceCache$4 = this$1.style.sourceCaches[layer$2.source];
                coords$3 = [];

                if (sourceCache$4) {
                    this$1.clearStencil();
                    coords$3 = sourceCache$4.getVisibleCoordinates();
                    if (sourceCache$4.getSource().isTileClipped) {
                        this$1._renderTileClippingMasks(coords$3);
                    }
                }

                coords$3.reverse();
            }

            this$1.renderLayer(this$1, (sourceCache$4 ), layer$2, coords$3);
        }
    }

    if (this.options.showTileBoundaries) {
        var sourceCache$5 = this.style.sourceCaches[Object.keys(this.style.sourceCaches)[0]];
        if (sourceCache$5) {
            draw.debug(this, sourceCache$5, sourceCache$5.getVisibleCoordinates());
        }
    }
};

Painter.prototype._setup3DRenderbuffer = function _setup3DRenderbuffer () {
    // All of the 3D textures will use the same depth renderbuffer.
    if (!this.depthRbo) {
        var gl = this.gl;
        this.depthRbo = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthRbo);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    }

    this.depthRboAttached = true;
};

Painter.prototype.depthMask = function depthMask (mask     ) {
    if (mask !== this._depthMask) {
        this._depthMask = mask;
        this.gl.depthMask(mask);
    }
};

Painter.prototype.renderLayer = function renderLayer (painter     , sourceCache         , layer        , coords              ) {
    if (layer.isHidden(this.transform.zoom)) { return; }
    if (layer.type !== 'background' && !coords.length) { return; }
    this.id = layer.id;

    draw[layer.type](painter, sourceCache, layer, coords);
};

Painter.prototype.setDepthSublayer = function setDepthSublayer (n    ) {
    var farDepth = 1 - ((1 + this.currentLayer) * this.numSublayers + n) * this.depthEpsilon;
    var nearDepth = farDepth - 1 + this.depthRange;
    this.gl.depthRange(nearDepth, farDepth);
};

/**
 * Transform a matrix to incorporate the *-translate and *-translate-anchor properties into it.
 * @param inViewportPixelUnitsUnits True when the units accepted by the matrix are in viewport pixels instead of tile units.
 * @returns {Float32Array} matrix
 */
Painter.prototype.translatePosMatrix = function translatePosMatrix (matrix          , tile  , translate              , translateAnchor                , inViewportPixelUnitsUnits      ) {
    if (!translate[0] && !translate[1]) { return matrix; }

    var angle = inViewportPixelUnitsUnits ?
        (translateAnchor === 'map' ? this.transform.angle : 0) :
        (translateAnchor === 'viewport' ? -this.transform.angle : 0);

    if (angle) {
        var sinA = Math.sin(angle);
        var cosA = Math.cos(angle);
        translate = [
            translate[0] * cosA - translate[1] * sinA,
            translate[0] * sinA + translate[1] * cosA
        ];
    }

    var translation = [
        inViewportPixelUnitsUnits ? translate[0] : pixelsToTileUnits(tile, translate[0], this.transform.zoom),
        inViewportPixelUnitsUnits ? translate[1] : pixelsToTileUnits(tile, translate[1], this.transform.zoom),
        0
    ];

    var translatedMatrix = new Float32Array(16);
    mat4.translate(translatedMatrix, matrix, translation);
    return translatedMatrix;
};

Painter.prototype.saveTileTexture = function saveTileTexture (texture     ) {
    var textures = this._tileTextures[texture.size[0]];
    if (!textures) {
        this._tileTextures[texture.size[0]] = [texture];
    } else {
        textures.push(texture);
    }
};

Painter.prototype.getTileTexture = function getTileTexture (size    ) {
    var textures = this._tileTextures[size];
    return textures && textures.length > 0 ? textures.pop() : null;
};

Painter.prototype.lineWidth = function lineWidth (width    ) {
    this.gl.lineWidth(util.clamp(width, this.lineWidthRange[0], this.lineWidthRange[1]));
};

Painter.prototype.showOverdrawInspector = function showOverdrawInspector (enabled     ) {
    if (!enabled && !this._showOverdrawInspector) { return; }
    this._showOverdrawInspector = enabled;

    var gl = this.gl;
    if (enabled) {
        gl.blendFunc(gl.CONSTANT_COLOR, gl.ONE);
        var numOverdrawSteps = 8;
        var a = 1 / numOverdrawSteps;
        gl.blendColor(a, a, a, 0);
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
    } else {
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    }
};

Painter.prototype._createProgramCached = function _createProgramCached (name    , programConfiguration                  )      {
    this.cache = this.cache || {};
    var key = "" + name + (programConfiguration.cacheKey || '') + (this._showOverdrawInspector ? '/overdraw' : '');
    if (!this.cache[key]) {
        this.cache[key] = new Program(this.gl, shaders[name], programConfiguration, this._showOverdrawInspector);
    }
    return this.cache[key];
};

Painter.prototype.useProgram = function useProgram (name    , programConfiguration                   )      {
    var gl = this.gl;
    var nextProgram = this._createProgramCached(name, programConfiguration || this.emptyProgramConfiguration);

    if (this.currentProgram !== nextProgram) {
        gl.useProgram(nextProgram.program);
        this.currentProgram = nextProgram;
    }

    return nextProgram;
};

module.exports = Painter;

},{"../data/extent":59,"../data/pos_array":63,"../data/program_configuration":64,"../data/raster_bounds_array":65,"../gl/vertex_buffer":73,"../shaders":98,"../source/pixels_to_tile_units":105,"../source/source_cache":110,"../symbol/cross_tile_symbol_index":212,"../util/browser":246,"../util/util":267,"./draw_background":75,"./draw_circle":76,"./draw_debug":78,"./draw_fill":79,"./draw_fill_extrusion":80,"./draw_heatmap":81,"./draw_line":82,"./draw_raster":83,"./draw_symbol":84,"./program":92,"./render_texture":93,"./tile_mask":95,"./vertex_array_object":96,"@mapbox/gl-matrix":1}],91:[function(require,module,exports){
'use strict';//      

var assert = require('assert');
var pixelsToTileUnits = require('../source/pixels_to_tile_units');

                                     
                                     
                                                  
                                                     

/**
 * Checks whether a pattern image is needed, and if it is, whether it is not loaded.
 *
 * @returns true if a needed image is missing and rendering needs to be skipped.
 */
exports.isPatternMissing = function(image                     , painter         )          {
    if (!image) { return false; }
    var imagePosA = painter.imageManager.getPattern(image.from);
    var imagePosB = painter.imageManager.getPattern(image.to);
    return !imagePosA || !imagePosB;
};

exports.prepare = function (image                    , painter         , program         ) {
    var gl = painter.gl;

    var imagePosA = painter.imageManager.getPattern(image.from);
    var imagePosB = painter.imageManager.getPattern(image.to);
    assert(imagePosA && imagePosB);

    gl.uniform1i(program.uniforms.u_image, 0);
    gl.uniform2fv(program.uniforms.u_pattern_tl_a, (imagePosA     ).tl);
    gl.uniform2fv(program.uniforms.u_pattern_br_a, (imagePosA     ).br);
    gl.uniform2fv(program.uniforms.u_pattern_tl_b, (imagePosB     ).tl);
    gl.uniform2fv(program.uniforms.u_pattern_br_b, (imagePosB     ).br);
    var ref = painter.imageManager.getPixelSize();
    var width = ref.width;
    var height = ref.height;
    gl.uniform2fv(program.uniforms.u_texsize, [width, height]);
    gl.uniform1f(program.uniforms.u_mix, image.t);
    gl.uniform2fv(program.uniforms.u_pattern_size_a, (imagePosA     ).displaySize);
    gl.uniform2fv(program.uniforms.u_pattern_size_b, (imagePosB     ).displaySize);
    gl.uniform1f(program.uniforms.u_scale_a, image.fromScale);
    gl.uniform1f(program.uniforms.u_scale_b, image.toScale);

    gl.activeTexture(gl.TEXTURE0);
    painter.imageManager.bind(gl);
};

exports.setTile = function (tile                                      , painter         , program         ) {
    var gl = painter.gl;

    gl.uniform1f(program.uniforms.u_tile_units_to_pixels, 1 / pixelsToTileUnits(tile, 1, painter.transform.tileZoom));

    var numTiles = Math.pow(2, tile.coord.z);
    var tileSizeAtNearestZoom = tile.tileSize * Math.pow(2, painter.transform.tileZoom) / numTiles;

    var pixelX = tileSizeAtNearestZoom * (tile.coord.x + tile.coord.w * numTiles);
    var pixelY = tileSizeAtNearestZoom * tile.coord.y;

    // split the pixel coord into two pairs of 16 bit numbers. The glsl spec only guarantees 16 bits of precision.
    gl.uniform2f(program.uniforms.u_pixel_coord_upper, pixelX >> 16, pixelY >> 16);
    gl.uniform2f(program.uniforms.u_pixel_coord_lower, pixelX & 0xFFFF, pixelY & 0xFFFF);
};

},{"../source/pixels_to_tile_units":105,"assert":11}],92:[function(require,module,exports){
'use strict';//      

var browser = require('../util/browser');
var shaders = require('../shaders');
var assert = require('assert');
var ref = require('../data/program_configuration');
var ProgramConfiguration = ref.ProgramConfiguration;
var VertexArrayObject = require('./vertex_array_object');

                                                   
                                                    
                                                  

                      
                                                   
                                                        

var Program = function Program(gl                   ,
            source                                            ,
            configuration                  ,
            showOverdrawInspector     ) {
    var this$1 = this;

    this.gl = gl;
    this.program = gl.createProgram();

    var defines = configuration.defines().concat(
        ("#define DEVICE_PIXEL_RATIO " + (browser.devicePixelRatio.toFixed(1))));
    if (showOverdrawInspector) {
        defines.push('#define OVERDRAW_INSPECTOR;');
    }

    var fragmentSource = defines.concat(shaders.prelude.fragmentSource, source.fragmentSource).join('\n');
    var vertexSource = defines.concat(shaders.prelude.vertexSource, source.vertexSource).join('\n');

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentSource);
    gl.compileShader(fragmentShader);
    assert(gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS), (gl.getShaderInfoLog(fragmentShader) ));
    gl.attachShader(this.program, fragmentShader);

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexSource);
    gl.compileShader(vertexShader);
    assert(gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS), (gl.getShaderInfoLog(vertexShader) ));
    gl.attachShader(this.program, vertexShader);

    // Manually bind layout attributes in the order defined by their
    // ProgramInterface so that we don't dynamically link an unused
    // attribute at position 0, which can cause rendering to fail for an
    // entire layer (see #4607, #4728)
    var layoutAttributes = configuration.interface ? configuration.interface.layoutAttributes : [];
    for (var i = 0; i < layoutAttributes.length; i++) {
        gl.bindAttribLocation(this$1.program, i, layoutAttributes[i].name);
    }

    gl.linkProgram(this.program);
    assert(gl.getProgramParameter(this.program, gl.LINK_STATUS), (gl.getProgramInfoLog(this.program) ));

    this.numAttributes = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);

    this.attributes = {};
    this.uniforms = {};

    for (var i$1 = 0; i$1 < this.numAttributes; i$1++) {
        var attribute = gl.getActiveAttrib(this$1.program, i$1);
        if (attribute) {
            this$1.attributes[attribute.name] = gl.getAttribLocation(this$1.program, attribute.name);
        }
    }

    var numUniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
    for (var i$2 = 0; i$2 < numUniforms; i$2++) {
        var uniform = gl.getActiveUniform(this$1.program, i$2);
        if (uniform) {
            this$1.uniforms[uniform.name] = gl.getUniformLocation(this$1.program, uniform.name);
        }
    }
};

Program.prototype.draw = function draw (gl                   ,
     drawMode      ,
     layerID    ,
     layoutVertexBuffer          ,
     indexBuffer         ,
     segments           ,
     configuration                   ,
     dynamicLayoutBuffer           ,
     dynamicLayoutBuffer2           ) {
        var this$1 = this;


    var primitiveSize = ( obj = {}, obj[gl.LINES] = 2, obj[gl.TRIANGLES] = 3, obj )[drawMode];
        var obj;

    for (var i = 0, list = segments.get(); i < list.length; i += 1) {
        var segment = list[i];

            var vaos = segment.vaos || (segment.vaos = {});
        var vao = vaos[layerID] || (vaos[layerID] = new VertexArrayObject());

        vao.bind(
            gl,
            this$1,
            layoutVertexBuffer,
            indexBuffer,
            configuration && configuration.paintVertexBuffer,
            segment.vertexOffset,
            dynamicLayoutBuffer,
            dynamicLayoutBuffer2
        );

        gl.drawElements(
            drawMode,
            segment.primitiveLength * primitiveSize,
            gl.UNSIGNED_SHORT,
            segment.primitiveOffset * primitiveSize * 2);
    }
};

module.exports = Program;

},{"../data/program_configuration":64,"../shaders":98,"../util/browser":246,"./vertex_array_object":96,"assert":11}],93:[function(require,module,exports){
'use strict';//      

                                                    
                                                           

                                     

var RenderTexture = function RenderTexture(painter     ) {
    var gl = this.gl = painter.gl;

    var texture = this.texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, painter.width, painter.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    gl.bindTexture(gl.TEXTURE_2D, null);

    var fbo = this.fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
};

RenderTexture.prototype.bindWithDepth = function bindWithDepth (depthRbo               ) {
    var gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo);
    if (this.attachedRbo !== depthRbo) {
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthRbo);
        this.attachedRbo = depthRbo;
    }
};

RenderTexture.prototype.unbind = function unbind () {
    var gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
};

module.exports = RenderTexture;

},{}],94:[function(require,module,exports){
'use strict';//      

var ref = require('../util/window');
var HTMLImageElement = ref.HTMLImageElement;
var HTMLCanvasElement = ref.HTMLCanvasElement;
var HTMLVideoElement = ref.HTMLVideoElement;
var ImageData = ref.ImageData;

                                                         
                                                               

                           
                                                  
                                                    
                           
                                                    
                                                                   
                                                      
                         
                                                    
                                                           
                                                              

                          
               
                
                         

var Texture = function Texture(gl                   , image          , format           ) {
    this.gl = gl;

    var width = image.width;
    var height = image.height;
    this.size = [width, height];
    this.format = format;

    this.texture = gl.createTexture();
    this.update(image);
};

Texture.prototype.update = function update (image          ) {
    var width = image.width;
        var height = image.height;
    this.size = [width, height];

    var ref = this;
        var gl = ref.gl;
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);

    if (this.format === gl.RGBA) {
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, (true ));
    }

    if (image instanceof HTMLImageElement || image instanceof HTMLCanvasElement || image instanceof HTMLVideoElement || image instanceof ImageData) {
        gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, gl.UNSIGNED_BYTE, image);
    } else {
        gl.texImage2D(gl.TEXTURE_2D, 0, this.format, width, height, 0, this.format, gl.UNSIGNED_BYTE, image.data);
    }
};

Texture.prototype.bind = function bind (filter           , wrap         , minFilter            ) {
    var ref = this;
        var gl = ref.gl;
    gl.bindTexture(gl.TEXTURE_2D, this.texture);

    if (filter !== this.filter) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter || filter);
        this.filter = filter;
    }

    if (wrap !== this.wrap) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
        this.wrap = wrap;
    }
};

Texture.prototype.destroy = function destroy () {
    var ref = this;
        var gl = ref.gl;
    gl.deleteTexture(this.texture);
    this.texture = (null );
};

module.exports = Texture;

},{"../util/window":248}],95:[function(require,module,exports){
'use strict';//      

var TileCoord = require('../source/tile_coord');

                                         

                    
                     
  

// Updates the TileMasks for all renderable tiles. A TileMask describes all regions
// within that tile that are *not* covered by other renderable tiles.
// Example: renderableTiles in our list are 2/1/3, 3/3/6, and 4/5/13. The schematic for creating the
// TileMask for 2/1/3 looks like this:
//
//    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
//    â”‚        â”‚        â”‚#################â”‚
//    â”‚ 4/4/12 â”‚ 4/5/12 â”‚#################â”‚
//    â”‚        â”‚        â”‚#################â”‚
//    â”œâ”€â”€â”€â”€â”€â”€3/2/6â”€â”€â”€â”€â”€â”€â”¤#####3/3/6#######â”‚
//    â”‚        â”‚########â”‚#################â”‚
//    â”‚ 4/4/13 â”‚#4/5/13#â”‚#################â”‚
//    â”‚        â”‚########â”‚#################â”‚
//    â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€2/1/3â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
//    â”‚                 â”‚                 â”‚
//    â”‚                 â”‚                 â”‚
//    â”‚                 â”‚                 â”‚
//    â”‚      3/2/7      â”‚      3/3/7      â”‚
//    â”‚                 â”‚                 â”‚
//    â”‚                 â”‚                 â”‚
//    â”‚                 â”‚                 â”‚
//    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
//
// The TileMask for 2/1/3 thus consists of the tiles 4/4/12, 4/5/12, 4/4/13, 3/2/7, and 3/3/7,
// but it does *not* include 4/5/13, and 3/3/6, since these are other renderableTiles.
// A TileMask always contains TileIDs *relative* to the tile it is generated for, so 2/1/3 is
// "subtracted" from these TileIDs. The final TileMask for 2/1/3 will thus be:
//
//    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
//    â”‚        â”‚        â”‚#################â”‚
//    â”‚ 2/0/0  â”‚ 2/1/0  â”‚#################â”‚
//    â”‚        â”‚        â”‚#################â”‚
//    â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”¤#################â”‚
//    â”‚        â”‚########â”‚#################â”‚
//    â”‚ 2/0/1  â”‚########â”‚#################â”‚
//    â”‚        â”‚########â”‚#################â”‚
//    â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
//    â”‚                 â”‚                 â”‚
//    â”‚                 â”‚                 â”‚
//    â”‚                 â”‚                 â”‚
//    â”‚      1/0/1      â”‚      1/1/1      â”‚
//    â”‚                 â”‚                 â”‚
//    â”‚                 â”‚                 â”‚
//    â”‚                 â”‚                 â”‚
//    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
//
// Only other renderable tiles that are *children* of the tile we are generating the mask for will
// be considered. For example, adding TileID 4/8/13 to renderableTiles won't affect the TileMask for
// 2/1/3, since it is not a descendant of it.


module.exports = function(renderableTiles             , gl                       ) {
    var sortedRenderables = renderableTiles.sort(function (a, b) { return a.coord.isLessThan(b.coord) ? -1 : b.coord.isLessThan(a.coord) ? 1 : 0; });

    for (var i = 0; i < sortedRenderables.length; i++) {
        var mask = {};
        var tile =  sortedRenderables[i];
        var childArray = sortedRenderables.slice(i + 1);
        // Try to add all remaining ids as children. We sorted the tile list
        // by z earlier, so all preceding items cannot be children of the current
        // tile. We also compute the lower bound of the next wrap, because items of the next wrap
        // can never be children of the current wrap.

        computeTileMasks(tile.coord.wrapped(), tile.coord, childArray, new TileCoord(0, 0, 0, tile.coord.w + 1), mask);
        tile.setMask(mask, gl);
    }
};

function computeTileMasks(rootTile           , ref           , childArray             , lowerBound           , mask      ) {
    // If the reference or any of its children is found in the list, we need to recurse.
    for (var i = 0; i < childArray.length; i++) {
        var childTile = childArray[i];
        // childTile is from a larger wrap than the rootTile so it cannot be a child tile
        if (lowerBound.isLessThan(childTile.coord)) { break; }
        // The current tile is masked out, so we don't need to add them to the mask set.
        if (ref.id === childTile.coord.id) {
            return;
        } else if (childTile.coord.isChildOf(ref, childTile.sourceMaxZoom)) {
            // There's at least one child tile that is masked out, so recursively descend
            var children = ref.children(Infinity);
            for (var j = 0; j < children.length; j++) {
                var child = children[j];
                computeTileMasks(rootTile, child, childArray.slice(i), lowerBound, mask);
            }
            return;
        }
    }
    // We couldn't find a child, so it's definitely a masked part.
    // Compute the difference between the root tile ID and the reference tile ID, since TileMask
    // elements are always relative (see below for explanation).
    var diffZ = ref.z - rootTile.z;
    var maskTileId = new TileCoord(diffZ, ref.x - (rootTile.x << diffZ), ref.y - (rootTile.y << diffZ)).id;
    mask[maskTileId] = mask[maskTileId] || true;
}

},{"../source/tile_coord":113}],96:[function(require,module,exports){
'use strict';//      

var assert = require('assert');

                                     
                                                    
                                                  

var VertexArrayObject = function VertexArrayObject() {
    this.boundProgram = null;
    this.boundVertexBuffer = null;
    this.boundVertexBuffer2 = null;
    this.boundIndexBuffer = null;
    this.boundVertexOffset = null;
    this.boundDynamicVertexBuffer = null;
    this.vao = null;
};

VertexArrayObject.prototype.bind = function bind (gl                   ,
     program     ,
     layoutVertexBuffer          ,
     indexBuffer          ,
     vertexBuffer2           ,
     vertexOffset     ,
     dynamicVertexBuffer           ,
     dynamicVertexBuffer2           ) {

    if (gl.extVertexArrayObject === undefined) {
        (gl ).extVertexArrayObject = gl.getExtension("OES_vertex_array_object");
    }

    var isFreshBindRequired = (
        !this.vao ||
        this.boundProgram !== program ||
        this.boundVertexBuffer !== layoutVertexBuffer ||
        this.boundVertexBuffer2 !== vertexBuffer2 ||
        this.boundIndexBuffer !== indexBuffer ||
        this.boundVertexOffset !== vertexOffset ||
        this.boundDynamicVertexBuffer !== dynamicVertexBuffer ||
        this.boundDynamicVertexBuffer2 !== dynamicVertexBuffer2
    );

    if (!gl.extVertexArrayObject || isFreshBindRequired) {
        this.freshBind(gl, program, layoutVertexBuffer, indexBuffer, vertexBuffer2, vertexOffset, dynamicVertexBuffer, dynamicVertexBuffer2);
        this.gl = gl;
    } else {
        (gl ).extVertexArrayObject.bindVertexArrayOES(this.vao);

        if (dynamicVertexBuffer) {
            // The buffer may have been updated. Rebind to upload data.
            dynamicVertexBuffer.bind();
        }

        if (indexBuffer && indexBuffer.dynamicDraw) {
            indexBuffer.bind();
        }

        if (dynamicVertexBuffer2) {
            dynamicVertexBuffer2.bind();
        }
    }
};

VertexArrayObject.prototype.freshBind = function freshBind (gl                   ,
          program     ,
          layoutVertexBuffer          ,
          indexBuffer          ,
          vertexBuffer2           ,
          vertexOffset     ,
          dynamicVertexBuffer           ,
          dynamicVertexBuffer2           ) {
    var numPrevAttributes;
    var numNextAttributes = program.numAttributes;

    if (gl.extVertexArrayObject) {
        if (this.vao) { this.destroy(); }
        this.vao = (gl ).extVertexArrayObject.createVertexArrayOES();
        (gl ).extVertexArrayObject.bindVertexArrayOES(this.vao);
        numPrevAttributes = 0;

        // store the arguments so that we can verify them when the vao is bound again
        this.boundProgram = program;
        this.boundVertexBuffer = layoutVertexBuffer;
        this.boundVertexBuffer2 = vertexBuffer2;
        this.boundIndexBuffer = indexBuffer;
        this.boundVertexOffset = vertexOffset;
        this.boundDynamicVertexBuffer = dynamicVertexBuffer;
        this.boundDynamicVertexBuffer2 = dynamicVertexBuffer2;

    } else {
        numPrevAttributes = (gl ).currentNumAttributes || 0;

        // Disable all attributes from the previous program that aren't used in
        // the new program. Note: attribute indices are *not* program specific!
        for (var i = numNextAttributes; i < numPrevAttributes; i++) {
            // WebGL breaks if you disable attribute 0.
            // http://stackoverflow.com/questions/20305231
            assert(i !== 0);
            gl.disableVertexAttribArray(i);
        }
    }

    layoutVertexBuffer.enableAttributes(gl, program);
    if (vertexBuffer2) {
        vertexBuffer2.enableAttributes(gl, program);
    }
    if (dynamicVertexBuffer) {
        dynamicVertexBuffer.enableAttributes(gl, program);
    }
    if (dynamicVertexBuffer2) {
        dynamicVertexBuffer2.enableAttributes(gl, program);
    }

    layoutVertexBuffer.bind();
    layoutVertexBuffer.setVertexAttribPointers(gl, program, vertexOffset);
    if (vertexBuffer2) {
        vertexBuffer2.bind();
        vertexBuffer2.setVertexAttribPointers(gl, program, vertexOffset);
    }
    if (dynamicVertexBuffer) {
        dynamicVertexBuffer.bind();
        dynamicVertexBuffer.setVertexAttribPointers(gl, program, vertexOffset);
    }
    if (indexBuffer) {
        indexBuffer.bind();
    }
    if (dynamicVertexBuffer2) {
        dynamicVertexBuffer2.bind();
        dynamicVertexBuffer2.setVertexAttribPointers(gl, program, vertexOffset);
    }

    (gl ).currentNumAttributes = numNextAttributes;
};

VertexArrayObject.prototype.destroy = function destroy () {
    if (this.vao) {
        (this.gl ).extVertexArrayObject.deleteVertexArrayOES(this.vao);
        this.vao = null;
    }
};

module.exports = VertexArrayObject;

},{"assert":11}],97:[function(require,module,exports){
'use strict';//      

var util = require('../util/util');

/**
 * Packs two numbers, interpreted as 8-bit unsigned integers, into a single
 * float.  Unpack them in the shader using the `unpack_float()` function,
 * defined in _prelude.vertex.glsl
 *
 * @private
 */
exports.packUint8ToFloat = function pack(a        , b        ) {
    // coerce a and b to 8-bit ints
    a = util.clamp(Math.floor(a), 0, 255);
    b = util.clamp(Math.floor(b), 0, 255);
    return 256 * a + b;
};

},{"../util/util":267}],98:[function(require,module,exports){
'use strict';//      



// readFileSync calls must be written out long-form for brfs.
/* eslint-disable prefer-template, no-path-concat */

var shaders                                                             = {
    prelude: {
        fragmentSource: "#ifdef GL_ES\nprecision mediump float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n",
        vertexSource: "#ifdef GL_ES\nprecision highp float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n\n// Unpack a pair of values that have been packed into a single float.\n// The packed values are assumed to be 8-bit unsigned integers, and are\n// packed like so:\n// packedValue = floor(input[0]) * 256 + input[1],\nvec2 unpack_float(const float packedValue) {\n    int packedIntValue = int(packedValue);\n    int v0 = packedIntValue / 256;\n    return vec2(v0, packedIntValue - v0 * 256);\n}\n\nvec2 unpack_opacity(const float packedOpacity) {\n    int intOpacity = int(packedOpacity) / 2;\n    return vec2(float(intOpacity) / 127.0, mod(packedOpacity, 2.0));\n}\n\n// To minimize the number of attributes needed, we encode a 4-component\n// color into a pair of floats (i.e. a vec2) as follows:\n// [ floor(color.r * 255) * 256 + color.g * 255,\n//   floor(color.b * 255) * 256 + color.g * 255 ]\nvec4 decode_color(const vec2 encodedColor) {\n    return vec4(\n        unpack_float(encodedColor[0]) / 255.0,\n        unpack_float(encodedColor[1]) / 255.0\n    );\n}\n\n// Unpack a pair of paint values and interpolate between them.\nfloat unpack_mix_vec2(const vec2 packedValue, const float t) {\n    return mix(packedValue[0], packedValue[1], t);\n}\n\n// Unpack a pair of paint values and interpolate between them.\nvec4 unpack_mix_vec4(const vec4 packedColors, const float t) {\n    vec4 minColor = decode_color(vec2(packedColors[0], packedColors[1]));\n    vec4 maxColor = decode_color(vec2(packedColors[2], packedColors[3]));\n    return mix(minColor, maxColor, t);\n}\n\n// The offset depends on how many pixels are between the world origin and the edge of the tile:\n// vec2 offset = mod(pixel_coord, size)\n//\n// At high zoom levels there are a ton of pixels between the world origin and the edge of the tile.\n// The glsl spec only guarantees 16 bits of precision for highp floats. We need more than that.\n//\n// The pixel_coord is passed in as two 16 bit values:\n// pixel_coord_upper = floor(pixel_coord / 2^16)\n// pixel_coord_lower = mod(pixel_coord, 2^16)\n//\n// The offset is calculated in a series of steps that should preserve this precision:\nvec2 get_pattern_pos(const vec2 pixel_coord_upper, const vec2 pixel_coord_lower,\n    const vec2 pattern_size, const float tile_units_to_pixels, const vec2 pos) {\n\n    vec2 offset = mod(mod(mod(pixel_coord_upper, pattern_size) * 256.0, pattern_size) * 256.0 + pixel_coord_lower, pattern_size);\n    return (tile_units_to_pixels * pos + offset) / pattern_size;\n}\n"
    },
    circle: {
        fragmentSource: "#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec3 v_data;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    vec2 extrude = v_data.xy;\n    float extrude_length = length(extrude);\n\n    lowp float antialiasblur = v_data.z;\n    float antialiased_blur = -max(blur, antialiasblur);\n\n    float opacity_t = smoothstep(0.0, antialiased_blur, extrude_length - 1.0);\n\n    float color_t = stroke_width < 0.01 ? 0.0 : smoothstep(\n        antialiased_blur,\n        0.0,\n        extrude_length - radius / (radius + stroke_width)\n    );\n\n    gl_FragColor = opacity_t * mix(color * opacity, stroke_color * stroke_opacity, color_t);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "uniform mat4 u_matrix;\nuniform bool u_scale_with_map;\nuniform bool u_pitch_with_map;\nuniform vec2 u_extrude_scale;\nuniform highp float u_camera_to_center_distance;\n\nattribute vec2 a_pos;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec3 v_data;\n\nvoid main(void) {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    // unencode the extrusion vector that we snuck into the a_pos vector\n    vec2 extrude = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n\n    // multiply a_pos by 0.5, since we had it * 2 in order to sneak\n    // in extrusion data\n    vec2 circle_center = floor(a_pos * 0.5);\n    if (u_pitch_with_map) {\n        vec2 corner_position = circle_center;\n        if (u_scale_with_map) {\n            corner_position += extrude * (radius + stroke_width) * u_extrude_scale;\n        } else {\n            // Pitching the circle with the map effectively scales it with the map\n            // To counteract the effect for pitch-scale: viewport, we rescale the\n            // whole circle based on the pitch scaling effect at its central point\n            vec4 projected_center = u_matrix * vec4(circle_center, 0, 1);\n            corner_position += extrude * (radius + stroke_width) * u_extrude_scale * (projected_center.w / u_camera_to_center_distance);\n        }\n\n        gl_Position = u_matrix * vec4(corner_position, 0, 1);\n    } else {\n        gl_Position = u_matrix * vec4(circle_center, 0, 1);\n\n        if (u_scale_with_map) {\n            gl_Position.xy += extrude * (radius + stroke_width) * u_extrude_scale * u_camera_to_center_distance;\n        } else {\n            gl_Position.xy += extrude * (radius + stroke_width) * u_extrude_scale * gl_Position.w;\n        }\n    }\n\n    // This is a minimum blur distance that serves as a faux-antialiasing for\n    // the circle. since blur is a ratio of the circle's size and the intent is\n    // to keep the blur at roughly 1px, the two are inversely related.\n    lowp float antialiasblur = 1.0 / DEVICE_PIXEL_RATIO / (radius + stroke_width);\n\n    v_data = vec3(extrude.x, extrude.y, antialiasblur);\n}\n"
    },
    heatmap: {
        fragmentSource: "#pragma mapbox: define highp float weight\n\nuniform highp float u_intensity;\nuniform highp float u_radius;\nvarying vec2 v_extrude;\n\n// Gaussian kernel coefficient: 1 / sqrt(2 * PI)\n#define GAUSS_COEF 0.3989422804014327\n\nvoid main() {\n    #pragma mapbox: initialize highp float weight\n\n    // Kernel density estimation with a Gaussian kernel of size 5x5\n    float d = -0.5 * 3.0 * 3.0 * dot(v_extrude, v_extrude);\n    float val = weight * u_intensity * GAUSS_COEF * exp(d);\n\n    gl_FragColor = vec4(val, 1.0, 1.0, 1.0);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "#pragma mapbox: define highp float weight\n\nuniform mat4 u_matrix;\nuniform float u_extrude_scale;\nuniform float u_radius;\nuniform float u_opacity;\nuniform float u_intensity;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_extrude;\n\n// Effective \"0\" in the kernel density texture to adjust the kernel size to;\n// this empirically chosen number minimizes artifacts on overlapping kernels\n// for typical heatmap cases (assuming clustered source)\nconst highp float ZERO = 1.0 / 255.0 / 16.0;\n\n// Gaussian kernel coefficient: 1 / sqrt(2 * PI)\n#define GAUSS_COEF 0.3989422804014327\n\nvoid main(void) {\n    #pragma mapbox: initialize highp float weight\n\n    // unencode the extrusion vector that we snuck into the a_pos vector\n    vec2 unscaled_extrude = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n\n    // This 'extrude' comes in ranging from [-1, -1], to [1, 1].  We'll use\n    // it to produce the vertices of a square mesh framing the point feature\n    // we're adding to the kernel density texture.  We'll also pass it as\n    // a varying, so that the fragment shader can determine the distance of\n    // each fragment from the point feature.\n    // Before we do so, we need to scale it up sufficiently so that the\n    // kernel falls effectively to zero at the edge of the mesh.\n    // That is, we want to know S such that\n    // weight * u_intensity * GAUSS_COEF * exp(-0.5 * 3.0^2 * S^2) == ZERO\n    // Which solves to:\n    // S = sqrt(-2.0 * log(ZERO / (weight * u_intensity * GAUSS_COEF))) / 3.0\n    float S = sqrt(-2.0 * log(ZERO / weight / u_intensity / GAUSS_COEF)) / 3.0;\n\n    // Pass the varying in units of u_radius\n    v_extrude = S * unscaled_extrude;\n\n    // Scale by u_radius and the zoom-based scale factor to produce actual\n    // mesh position\n    vec2 extrude = v_extrude * u_radius * u_extrude_scale;\n\n    // multiply a_pos by 0.5, since we had it * 2 in order to sneak\n    // in extrusion data\n    vec4 pos = vec4(floor(a_pos * 0.5) + extrude, 0, 1);\n\n    gl_Position = u_matrix * pos;\n}\n"
    },
    heatmapTexture: {
        fragmentSource: "uniform sampler2D u_image;\nuniform sampler2D u_color_ramp;\nuniform float u_opacity;\nvarying vec2 v_pos;\n\nvoid main() {\n    float t = texture2D(u_image, v_pos).r;\n    vec4 color = texture2D(u_color_ramp, vec2(t, 0.5));\n    gl_FragColor = color * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(0.0);\n#endif\n}\n",
        vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_world;\nattribute vec2 a_pos;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos * u_world, 0, 1);\n\n    v_pos.x = a_pos.x;\n    v_pos.y = 1.0 - a_pos.y;\n}\n"
    },
    collisionBox: {
        fragmentSource: "\nvarying float v_placed;\nvarying float v_notUsed;\n\nvoid main() {\n\n    float alpha = 0.5;\n\n    // Red = collision, hide label\n    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0) * alpha;\n\n    // Blue = no collision, label is showing\n    if (v_placed > 0.5) {\n        gl_FragColor = vec4(0.0, 0.0, 1.0, 0.5) * alpha;\n    }\n\n    if (v_notUsed > 0.5) {\n        // This box not used, fade it out\n        gl_FragColor *= .1;\n    }\n}",
        vertexSource: "attribute vec2 a_pos;\nattribute vec2 a_anchor_pos;\nattribute vec2 a_extrude;\nattribute vec2 a_placed;\n\nuniform mat4 u_matrix;\nuniform vec2 u_extrude_scale;\nuniform float u_camera_to_center_distance;\n\nvarying float v_placed;\nvarying float v_notUsed;\n\nvoid main() {\n    vec4 projectedPoint = u_matrix * vec4(a_anchor_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    highp float collision_perspective_ratio = 0.5 + 0.5 * (u_camera_to_center_distance / camera_to_anchor_distance);\n\n    gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);\n    gl_Position.xy += a_extrude * u_extrude_scale * gl_Position.w * collision_perspective_ratio;\n\n    v_placed = a_placed.x;\n    v_notUsed = a_placed.y;\n}\n"
    },
    collisionCircle: {
        fragmentSource: "\nvarying float v_placed;\nvarying float v_notUsed;\nvarying float v_radius;\nvarying vec2 v_extrude;\nvarying vec2 v_extrude_scale;\n\nvoid main() {\n    float alpha = 0.5;\n\n    // Red = collision, hide label\n    vec4 color = vec4(1.0, 0.0, 0.0, 1.0) * alpha;\n\n    // Blue = no collision, label is showing\n    if (v_placed > 0.5) {\n        color = vec4(0.0, 0.0, 1.0, 0.5) * alpha;\n    }\n\n    if (v_notUsed > 0.5) {\n        // This box not used, fade it out\n        color *= .2;\n    }\n\n    float extrude_scale_length = length(v_extrude_scale);\n    float extrude_length = length(v_extrude) * extrude_scale_length;\n    float stroke_width = 3.0;\n    float radius = v_radius * extrude_scale_length;\n\n    float distance_to_edge = abs(extrude_length - radius);\n    float opacity_t = smoothstep(-stroke_width, 0.0, -distance_to_edge);\n\n    gl_FragColor = opacity_t * color;\n}\n",
        vertexSource: "attribute vec2 a_pos;\nattribute vec2 a_anchor_pos;\nattribute vec2 a_extrude;\nattribute vec2 a_placed;\n\nuniform mat4 u_matrix;\nuniform vec2 u_extrude_scale;\nuniform float u_camera_to_center_distance;\n\nvarying float v_placed;\nvarying float v_notUsed;\nvarying float v_radius;\n\nvarying vec2 v_extrude;\nvarying vec2 v_extrude_scale;\n\nvoid main() {\n    vec4 projectedPoint = u_matrix * vec4(a_anchor_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    highp float collision_perspective_ratio = 0.5 + 0.5 * (camera_to_anchor_distance / u_camera_to_center_distance);\n\n    gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);\n\n    highp float padding_factor = 1.2; // Pad the vertices slightly to make room for anti-alias blur\n    gl_Position.xy += a_extrude * u_extrude_scale * padding_factor * gl_Position.w / collision_perspective_ratio;\n\n    v_placed = a_placed.x;\n    v_notUsed = a_placed.y;\n    v_radius = abs(a_extrude.y); // We don't pitch the circles, so both units of the extrusion vector are equal in magnitude to the radius\n\n    v_extrude = a_extrude * padding_factor;\n    v_extrude_scale = u_extrude_scale * u_camera_to_center_distance / collision_perspective_ratio;\n}\n"
    },
    debug: {
        fragmentSource: "uniform highp vec4 u_color;\n\nvoid main() {\n    gl_FragColor = u_color;\n}\n",
        vertexSource: "attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"
    },
    fill: {
        fragmentSource: "#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_FragColor = color * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"
    },
    fillOutline: {
        fragmentSource: "#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_pos;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 outline_color\n    #pragma mapbox: initialize lowp float opacity\n\n    float dist = length(v_pos - gl_FragCoord.xy);\n    float alpha = 1.0 - smoothstep(0.0, 1.0, dist);\n    gl_FragColor = outline_color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\nuniform vec2 u_world;\n\nvarying vec2 v_pos;\n\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 outline_color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos = (gl_Position.xy / gl_Position.w + 1.0) / 2.0 * u_world;\n}\n"
    },
    fillOutlinePattern: {
        fragmentSource: "uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec2 v_pos;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    // find distance to outline for alpha interpolation\n\n    float dist = length(v_pos - gl_FragCoord.xy);\n    float alpha = 1.0 - smoothstep(0.0, 1.0, dist);\n\n\n    gl_FragColor = mix(color1, color2, u_mix) * alpha * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_world;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec2 v_pos;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n\n    v_pos = (gl_Position.xy / gl_Position.w + 1.0) / 2.0 * u_world;\n}\n"
    },
    fillPattern: {
        fragmentSource: "uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    gl_FragColor = mix(color1, color2, u_mix) * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n}\n"
    },
    fillExtrusion: {
        fragmentSource: "varying vec4 v_color;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    gl_FragColor = v_color;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "uniform mat4 u_matrix;\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec3 a_normal;\nattribute float a_edgedistance;\n\nvarying vec4 v_color;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float ed = a_edgedistance; // use each attrib in order to not trip a VAO assert\n    float t = mod(a_normal.x, 2.0);\n\n    gl_Position = u_matrix * vec4(a_pos, t > 0.0 ? height : base, 1);\n\n    // Relative luminance (how dark/bright is the surface color?)\n    float colorvalue = color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722;\n\n    v_color = vec4(0.0, 0.0, 0.0, 1.0);\n\n    // Add slight ambient lighting so no extrusions are totally black\n    vec4 ambientlight = vec4(0.03, 0.03, 0.03, 1.0);\n    color += ambientlight;\n\n    // Calculate cos(theta), where theta is the angle between surface normal and diffuse light ray\n    float directional = clamp(dot(a_normal / 16384.0, u_lightpos), 0.0, 1.0);\n\n    // Adjust directional so that\n    // the range of values for highlight/shading is narrower\n    // with lower light intensity\n    // and with lighter/brighter surface colors\n    directional = mix((1.0 - u_lightintensity), max((1.0 - colorvalue + u_lightintensity), 1.0), directional);\n\n    // Add gradient along z axis of side surfaces\n    if (a_normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    // Assign final color based on surface + ambient light color, diffuse light directional, and light color\n    // with lower bounds adjusted to hue of light\n    // so that shading is tinted with the complementary (opposite) color to the light color\n    v_color.r += clamp(color.r * directional * u_lightcolor.r, mix(0.0, 0.3, 1.0 - u_lightcolor.r), 1.0);\n    v_color.g += clamp(color.g * directional * u_lightcolor.g, mix(0.0, 0.3, 1.0 - u_lightcolor.g), 1.0);\n    v_color.b += clamp(color.b * directional * u_lightcolor.b, mix(0.0, 0.3, 1.0 - u_lightcolor.b), 1.0);\n}\n"
    },
    fillExtrusionPattern: {
        fragmentSource: "uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    vec4 mixedColor = mix(color1, color2, u_mix);\n\n    gl_FragColor = mixedColor * v_lighting;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\nuniform float u_height_factor;\n\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec3 a_normal;\nattribute float a_edgedistance;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\nvarying float v_directional;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float t = mod(a_normal.x, 2.0);\n    float z = t > 0.0 ? height : base;\n\n    gl_Position = u_matrix * vec4(a_pos, z, 1);\n\n    vec2 pos = a_normal.x == 1.0 && a_normal.y == 0.0 && a_normal.z == 16384.0\n        ? a_pos // extrusion top\n        : vec2(a_edgedistance, z * u_height_factor); // extrusion side\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, pos);\n\n    v_lighting = vec4(0.0, 0.0, 0.0, 1.0);\n    float directional = clamp(dot(a_normal / 16383.0, u_lightpos), 0.0, 1.0);\n    directional = mix((1.0 - u_lightintensity), max((0.5 + u_lightintensity), 1.0), directional);\n\n    if (a_normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    v_lighting.rgb += clamp(directional * u_lightcolor, mix(vec3(0.0), vec3(0.3), 1.0 - u_lightcolor), vec3(1.0));\n}\n"
    },
    extrusionTexture: {
        fragmentSource: "uniform sampler2D u_image;\nuniform float u_opacity;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_FragColor = texture2D(u_image, v_pos) * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(0.0);\n#endif\n}\n",
        vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_world;\nattribute vec2 a_pos;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos * u_world, 0, 1);\n\n    v_pos.x = a_pos.x;\n    v_pos.y = 1.0 - a_pos.y;\n}\n"
    },
    line: {
        fragmentSource: "#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_width2;\nvarying vec2 v_normal;\nvarying float v_gamma_scale;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\n// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\nattribute vec4 a_pos_normal;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float width\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n\n    vec2 pos = a_pos_normal.xy;\n\n    // x is 1 if it's a round cap, 0 otherwise\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = a_pos_normal.zw;\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases.\n    // moved them into the shader for clarity and simplicity.\n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset;\n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_width2 = vec2(outset, inset);\n}\n"
    },
    linePattern: {
        fragmentSource: "uniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_fade;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_linesofar;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    float x_a = mod(v_linesofar / u_pattern_size_a.x, 1.0);\n    float x_b = mod(v_linesofar / u_pattern_size_b.x, 1.0);\n    float y_a = 0.5 + (v_normal.y * v_width2.s / u_pattern_size_a.y);\n    float y_b = 0.5 + (v_normal.y * v_width2.s / u_pattern_size_b.y);\n    vec2 pos_a = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, vec2(x_a, y_a));\n    vec2 pos_b = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, vec2(x_b, y_b));\n\n    vec4 color = mix(texture2D(u_image, pos_a), texture2D(u_image, pos_b), u_fade);\n\n    gl_FragColor = color * alpha * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\n// We scale the distance before adding it to the buffers so that we can store\n// long distances for long segments. Use this value to unscale the distance.\n#define LINE_DISTANCE_SCALE 2.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\nattribute vec4 a_pos_normal;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_linesofar;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define mediump float width\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize mediump float width\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n    float a_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * LINE_DISTANCE_SCALE;\n\n    vec2 pos = a_pos_normal.xy;\n\n    // x is 1 if it's a round cap, 0 otherwise\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = a_pos_normal.zw;\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases.\n    // moved them into the shader for clarity and simplicity.\n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset;\n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_linesofar = a_linesofar;\n    v_width2 = vec2(outset, inset);\n}\n"
    },
    lineSDF: {
        fragmentSource: "\nuniform sampler2D u_image;\nuniform float u_sdfgamma;\nuniform float u_mix;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying vec2 v_tex_a;\nvarying vec2 v_tex_b;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float width\n    #pragma mapbox: initialize lowp float floorwidth\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    float sdfdist_a = texture2D(u_image, v_tex_a).a;\n    float sdfdist_b = texture2D(u_image, v_tex_b).a;\n    float sdfdist = mix(sdfdist_a, sdfdist_b, u_mix);\n    alpha *= smoothstep(0.5 - u_sdfgamma / floorwidth, 0.5 + u_sdfgamma / floorwidth, sdfdist);\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\n// We scale the distance before adding it to the buffers so that we can store\n// long distances for long segments. Use this value to unscale the distance.\n#define LINE_DISTANCE_SCALE 2.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\nattribute vec4 a_pos_normal;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_patternscale_a;\nuniform float u_tex_y_a;\nuniform vec2 u_patternscale_b;\nuniform float u_tex_y_b;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying vec2 v_tex_a;\nvarying vec2 v_tex_b;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float width\n    #pragma mapbox: initialize lowp float floorwidth\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n    float a_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * LINE_DISTANCE_SCALE;\n\n    vec2 pos = a_pos_normal.xy;\n\n    // x is 1 if it's a round cap, 0 otherwise\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = a_pos_normal.zw;\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases.\n    // moved them into the shader for clarity and simplicity.\n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset;\n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist =outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_tex_a = vec2(a_linesofar * u_patternscale_a.x / floorwidth, normal.y * u_patternscale_a.y + u_tex_y_a);\n    v_tex_b = vec2(a_linesofar * u_patternscale_b.x / floorwidth, normal.y * u_patternscale_b.y + u_tex_y_b);\n\n    v_width2 = vec2(outset, inset);\n}\n"
    },
    raster: {
        fragmentSource: "uniform float u_fade_t;\nuniform float u_opacity;\nuniform sampler2D u_image0;\nuniform sampler2D u_image1;\nvarying vec2 v_pos0;\nvarying vec2 v_pos1;\n\nuniform float u_brightness_low;\nuniform float u_brightness_high;\n\nuniform float u_saturation_factor;\nuniform float u_contrast_factor;\nuniform vec3 u_spin_weights;\n\nvoid main() {\n\n    // read and cross-fade colors from the main and parent tiles\n    vec4 color0 = texture2D(u_image0, v_pos0);\n    vec4 color1 = texture2D(u_image1, v_pos1);\n    if (color0.a > 0.0) {\n        color0.rgb = color0.rgb / color0.a;\n    }\n    if (color1.a > 0.0) {\n        color1.rgb = color1.rgb / color1.a;\n    }\n    vec4 color = mix(color0, color1, u_fade_t);\n    color.a *= u_opacity;\n    vec3 rgb = color.rgb;\n\n    // spin\n    rgb = vec3(\n        dot(rgb, u_spin_weights.xyz),\n        dot(rgb, u_spin_weights.zxy),\n        dot(rgb, u_spin_weights.yzx));\n\n    // saturation\n    float average = (color.r + color.g + color.b) / 3.0;\n    rgb += (average - rgb) * u_saturation_factor;\n\n    // contrast\n    rgb = (rgb - 0.5) * u_contrast_factor + 0.5;\n\n    // brightness\n    vec3 u_high_vec = vec3(u_brightness_low, u_brightness_low, u_brightness_low);\n    vec3 u_low_vec = vec3(u_brightness_high, u_brightness_high, u_brightness_high);\n\n    gl_FragColor = vec4(mix(u_high_vec, u_low_vec, rgb) * color.a, color.a);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_tl_parent;\nuniform float u_scale_parent;\nuniform float u_buffer_scale;\n\nattribute vec2 a_pos;\nattribute vec2 a_texture_pos;\n\nvarying vec2 v_pos0;\nvarying vec2 v_pos1;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    // We are using Int16 for texture position coordinates to give us enough precision for\n    // fractional coordinates. We use 8192 to scale the texture coordinates in the buffer\n    // as an arbitrarily high number to preserve adequate precision when rendering.\n    // This is also the same value as the EXTENT we are using for our tile buffer pos coordinates,\n    // so math for modifying either is consistent.\n    v_pos0 = (((a_texture_pos / 8192.0) - 0.5) / u_buffer_scale ) + 0.5;\n    v_pos1 = (v_pos0 * u_scale_parent) + u_tl_parent;\n}\n"
    },
    symbolIcon: {
        fragmentSource: "uniform sampler2D u_texture;\n\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_tex;\nvarying float v_fade_opacity;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    lowp float alpha = opacity * v_fade_opacity;\n    gl_FragColor = texture2D(u_texture, v_tex) * alpha;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "const float PI = 3.141592653589793;\n\nattribute vec4 a_pos_offset;\nattribute vec4 a_data;\nattribute vec3 a_projected_pos;\nattribute float a_fade_opacity;\n\nuniform bool u_is_size_zoom_constant;\nuniform bool u_is_size_feature_constant;\nuniform highp float u_size_t; // used to interpolate between zoom stops when size is a composite function\nuniform highp float u_size; // used when size is both zoom and feature constant\nuniform highp float u_camera_to_center_distance;\nuniform highp float u_pitch;\nuniform bool u_rotate_symbol;\nuniform highp float u_aspect_ratio;\nuniform float u_fade_change;\n\n#pragma mapbox: define lowp float opacity\n\nuniform mat4 u_matrix;\nuniform mat4 u_label_plane_matrix;\nuniform mat4 u_gl_coord_matrix;\n\nuniform bool u_is_text;\nuniform bool u_pitch_with_map;\n\nuniform vec2 u_texsize;\n\nvarying vec2 v_tex;\nvarying float v_fade_opacity;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 a_pos = a_pos_offset.xy;\n    vec2 a_offset = a_pos_offset.zw;\n\n    vec2 a_tex = a_data.xy;\n    vec2 a_size = a_data.zw;\n\n    highp float segment_angle = -a_projected_pos[2];\n\n    float size;\n    if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = mix(a_size[0], a_size[1], u_size_t) / 10.0;\n    } else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = a_size[0] / 10.0;\n    } else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {\n        size = u_size;\n    } else {\n        size = u_size;\n    }\n\n    vec4 projectedPoint = u_matrix * vec4(a_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    // See comments in symbol_sdf.vertex\n    highp float distance_ratio = u_pitch_with_map ?\n        camera_to_anchor_distance / u_camera_to_center_distance :\n        u_camera_to_center_distance / camera_to_anchor_distance;\n    highp float perspective_ratio = 0.5 + 0.5 * distance_ratio;\n\n    size *= perspective_ratio;\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    highp float symbol_rotation = 0.0;\n    if (u_rotate_symbol) {\n        // See comments in symbol_sdf.vertex\n        vec4 offsetProjectedPoint = u_matrix * vec4(a_pos + vec2(1, 0), 0, 1);\n\n        vec2 a = projectedPoint.xy / projectedPoint.w;\n        vec2 b = offsetProjectedPoint.xy / offsetProjectedPoint.w;\n\n        symbol_rotation = atan((b.y - a.y) / u_aspect_ratio, b.x - a.x);\n    }\n\n    highp float angle_sin = sin(segment_angle + symbol_rotation);\n    highp float angle_cos = cos(segment_angle + symbol_rotation);\n    mat2 rotation_matrix = mat2(angle_cos, -1.0 * angle_sin, angle_sin, angle_cos);\n\n    vec4 projected_pos = u_label_plane_matrix * vec4(a_projected_pos.xy, 0.0, 1.0);\n    gl_Position = u_gl_coord_matrix * vec4(projected_pos.xy / projected_pos.w + rotation_matrix * (a_offset / 64.0 * fontScale), 0.0, 1.0);\n\n    v_tex = a_tex / u_texsize;\n    vec2 fade_opacity = unpack_opacity(a_fade_opacity);\n    float fade_change = fade_opacity[1] > 0.5 ? u_fade_change : -u_fade_change;\n    v_fade_opacity = max(0.0, min(1.0, fade_opacity[0] + fade_change));\n}\n"
    },
    symbolSDF: {
        fragmentSource: "#define SDF_PX 8.0\n#define EDGE_GAMMA 0.105/DEVICE_PIXEL_RATIO\n\nuniform bool u_is_halo;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\n\nuniform sampler2D u_texture;\nuniform highp float u_gamma_scale;\nuniform bool u_is_text;\n\nvarying vec2 v_data0;\nvarying vec3 v_data1;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 fill_color\n    #pragma mapbox: initialize highp vec4 halo_color\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float halo_width\n    #pragma mapbox: initialize lowp float halo_blur\n\n    vec2 tex = v_data0.xy;\n    float gamma_scale = v_data1.x;\n    float size = v_data1.y;\n    float fade_opacity = v_data1[2];\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    lowp vec4 color = fill_color;\n    highp float gamma = EDGE_GAMMA / (fontScale * u_gamma_scale);\n    lowp float buff = (256.0 - 64.0) / 256.0;\n    if (u_is_halo) {\n        color = halo_color;\n        gamma = (halo_blur * 1.19 / SDF_PX + EDGE_GAMMA) / (fontScale * u_gamma_scale);\n        buff = (6.0 - halo_width / fontScale) / SDF_PX;\n    }\n\n    lowp float dist = texture2D(u_texture, tex).a;\n    highp float gamma_scaled = gamma * gamma_scale;\n    highp float alpha = smoothstep(buff - gamma_scaled, buff + gamma_scaled, dist);\n\n    gl_FragColor = color * (alpha * opacity * fade_opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "const float PI = 3.141592653589793;\n\nattribute vec4 a_pos_offset;\nattribute vec4 a_data;\nattribute vec3 a_projected_pos;\nattribute float a_fade_opacity;\n\n// contents of a_size vary based on the type of property value\n// used for {text,icon}-size.\n// For constants, a_size is disabled.\n// For source functions, we bind only one value per vertex: the value of {text,icon}-size evaluated for the current feature.\n// For composite functions:\n// [ text-size(lowerZoomStop, feature),\n//   text-size(upperZoomStop, feature) ]\nuniform bool u_is_size_zoom_constant;\nuniform bool u_is_size_feature_constant;\nuniform highp float u_size_t; // used to interpolate between zoom stops when size is a composite function\nuniform highp float u_size; // used when size is both zoom and feature constant\n\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\n\nuniform mat4 u_matrix;\nuniform mat4 u_label_plane_matrix;\nuniform mat4 u_gl_coord_matrix;\n\nuniform bool u_is_text;\nuniform bool u_pitch_with_map;\nuniform highp float u_pitch;\nuniform bool u_rotate_symbol;\nuniform highp float u_aspect_ratio;\nuniform highp float u_camera_to_center_distance;\nuniform float u_fade_change;\n\nuniform vec2 u_texsize;\n\nvarying vec2 v_data0;\nvarying vec3 v_data1;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 fill_color\n    #pragma mapbox: initialize highp vec4 halo_color\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float halo_width\n    #pragma mapbox: initialize lowp float halo_blur\n\n    vec2 a_pos = a_pos_offset.xy;\n    vec2 a_offset = a_pos_offset.zw;\n\n    vec2 a_tex = a_data.xy;\n    vec2 a_size = a_data.zw;\n\n    highp float segment_angle = -a_projected_pos[2];\n    float size;\n\n    if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = mix(a_size[0], a_size[1], u_size_t) / 10.0;\n    } else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = a_size[0] / 10.0;\n    } else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {\n        size = u_size;\n    } else {\n        size = u_size;\n    }\n\n    vec4 projectedPoint = u_matrix * vec4(a_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    // If the label is pitched with the map, layout is done in pitched space,\n    // which makes labels in the distance smaller relative to viewport space.\n    // We counteract part of that effect by multiplying by the perspective ratio.\n    // If the label isn't pitched with the map, we do layout in viewport space,\n    // which makes labels in the distance larger relative to the features around\n    // them. We counteract part of that effect by dividing by the perspective ratio.\n    highp float distance_ratio = u_pitch_with_map ?\n        camera_to_anchor_distance / u_camera_to_center_distance :\n        u_camera_to_center_distance / camera_to_anchor_distance;\n    highp float perspective_ratio = 0.5 + 0.5 * distance_ratio;\n\n    size *= perspective_ratio;\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    highp float symbol_rotation = 0.0;\n    if (u_rotate_symbol) {\n        // Point labels with 'rotation-alignment: map' are horizontal with respect to tile units\n        // To figure out that angle in projected space, we draw a short horizontal line in tile\n        // space, project it, and measure its angle in projected space.\n        vec4 offsetProjectedPoint = u_matrix * vec4(a_pos + vec2(1, 0), 0, 1);\n\n        vec2 a = projectedPoint.xy / projectedPoint.w;\n        vec2 b = offsetProjectedPoint.xy / offsetProjectedPoint.w;\n\n        symbol_rotation = atan((b.y - a.y) / u_aspect_ratio, b.x - a.x);\n    }\n\n    highp float angle_sin = sin(segment_angle + symbol_rotation);\n    highp float angle_cos = cos(segment_angle + symbol_rotation);\n    mat2 rotation_matrix = mat2(angle_cos, -1.0 * angle_sin, angle_sin, angle_cos);\n\n    vec4 projected_pos = u_label_plane_matrix * vec4(a_projected_pos.xy, 0.0, 1.0);\n    gl_Position = u_gl_coord_matrix * vec4(projected_pos.xy / projected_pos.w + rotation_matrix * (a_offset / 64.0 * fontScale), 0.0, 1.0);\n    float gamma_scale = gl_Position.w;\n\n    vec2 tex = a_tex / u_texsize;\n    vec2 fade_opacity = unpack_opacity(a_fade_opacity);\n    float fade_change = fade_opacity[1] > 0.5 ? u_fade_change : -u_fade_change;\n    float interpolated_fade_opacity = max(0.0, min(1.0, fade_opacity[0] + fade_change));\n\n    v_data0 = vec2(tex.x, tex.y);\n    v_data1 = vec3(gamma_scale, size, interpolated_fade_opacity);\n}\n"
    }
};

// Expand #pragmas to #ifdefs.

var re = /#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g;

var loop = function ( programName ) {
    var program = shaders[programName];
    var fragmentPragmas                      = {};

    program.fragmentSource = program.fragmentSource.replace(re, function (match        , operation        , precision        , type        , name        ) {
        fragmentPragmas[name] = true;
        if (operation === 'define') {
            return ("\n#ifndef HAS_UNIFORM_u_" + name + "\nvarying " + precision + " " + type + " " + name + ";\n#else\nuniform " + precision + " " + type + " u_" + name + ";\n#endif\n");
        } else /* if (operation === 'initialize') */ {
            return ("\n#ifdef HAS_UNIFORM_u_" + name + "\n    " + precision + " " + type + " " + name + " = u_" + name + ";\n#endif\n");
        }
    });

    program.vertexSource = program.vertexSource.replace(re, function (match        , operation        , precision        , type        , name        ) {
        var attrType = type === 'float' ? 'vec2' : 'vec4';
        if (fragmentPragmas[name]) {
            if (operation === 'define') {
                return ("\n#ifndef HAS_UNIFORM_u_" + name + "\nuniform lowp float a_" + name + "_t;\nattribute " + precision + " " + attrType + " a_" + name + ";\nvarying " + precision + " " + type + " " + name + ";\n#else\nuniform " + precision + " " + type + " u_" + name + ";\n#endif\n");
            } else /* if (operation === 'initialize') */ {
                return ("\n#ifndef HAS_UNIFORM_u_" + name + "\n    " + name + " = unpack_mix_" + attrType + "(a_" + name + ", a_" + name + "_t);\n#else\n    " + precision + " " + type + " " + name + " = u_" + name + ";\n#endif\n");
            }
        } else {
            if (operation === 'define') {
                return ("\n#ifndef HAS_UNIFORM_u_" + name + "\nuniform lowp float a_" + name + "_t;\nattribute " + precision + " " + attrType + " a_" + name + ";\n#else\nuniform " + precision + " " + type + " u_" + name + ";\n#endif\n");
            } else /* if (operation === 'initialize') */ {
                return ("\n#ifndef HAS_UNIFORM_u_" + name + "\n    " + precision + " " + type + " " + name + " = unpack_mix_" + attrType + "(a_" + name + ", a_" + name + "_t);\n#else\n    " + precision + " " + type + " " + name + " = u_" + name + ";\n#endif\n");
            }
        }
    });
};

for (var programName in shaders) loop( programName );

module.exports = shaders;

},{}],99:[function(require,module,exports){
'use strict';//      

var ImageSource = require('./image_source');
var window = require('../util/window');

                                 
                                                 
                                           

/**
 * A data source containing the contents of an HTML canvas.
 * (See the [Style Specification](https://www.mapbox.com/mapbox-gl-style-spec/#sources-canvas) for detailed documentation of options.)
 * @interface CanvasSource
 * @example
 * // add to map
 * map.addSource('some id', {
 *    type: 'canvas',
 *    canvas: 'idOfMyHTMLCanvas',
 *    animate: true,
 *    coordinates: [
 *        [-76.54, 39.18],
 *        [-76.52, 39.18],
 *        [-76.52, 39.17],
 *        [-76.54, 39.17]
 *    ]
 * });
 *
 * // update
 * var mySource = map.getSource('some id');
 * mySource.setCoordinates([
 *     [-76.54335737228394, 39.18579907229748],
 *     [-76.52803659439087, 39.1838364847587],
 *     [-76.5295386314392, 39.17683392507606],
 *     [-76.54520273208618, 39.17876344106642]
 * ]);
 *
 * map.removeSource('some id');  // remove
 */
var CanvasSource = (function (ImageSource) {
    function CanvasSource(id        , options                           , dispatcher            , eventedParent         ) {
        ImageSource.call(this, id, options, dispatcher, eventedParent);
        this.options = options;
        this.animate = options.animate !== undefined ? options.animate : true;
    }

    if ( ImageSource ) CanvasSource.__proto__ = ImageSource;
    CanvasSource.prototype = Object.create( ImageSource && ImageSource.prototype );
    CanvasSource.prototype.constructor = CanvasSource;

    /**
     * Enables animation. The image will be copied from the canvas to the map on each frame.
     * @method play
     * @instance
     * @memberof CanvasSource
     */

    /**
     * Disables animation. The map will display a static copy of the canvas image.
     * @method pause
     * @instance
     * @memberof CanvasSource
     */

    CanvasSource.prototype.load = function load () {
        this.canvas = this.canvas || window.document.getElementById(this.options.canvas);
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        if (this._hasInvalidDimensions()) { return this.fire('error', new Error('Canvas dimensions cannot be less than or equal to zero.')); }

        this.play = function() {
            this._playing = true;
            this.map._rerender();
        };

        this.pause = function() {
            this._playing = false;
        };

        this._finishLoading();
    };

    /**
     * Returns the HTML `canvas` element.
     *
     * @returns {HTMLCanvasElement} The HTML `canvas` element.
     */
    CanvasSource.prototype.getCanvas = function getCanvas () {
        return this.canvas;
    };

    CanvasSource.prototype.onAdd = function onAdd (map     ) {
        this.map = map;
        this.load();
        if (this.canvas) {
            if (this.animate) { this.play(); }
        }
    };

    CanvasSource.prototype.onRemove = function onRemove () {
        this.pause();
    };

    /**
     * Sets the canvas's coordinates and re-renders the map.
     *
     * @method setCoordinates
     * @instance
     * @memberof CanvasSource
     * @param {Array<Array<number>>} coordinates Four geographical coordinates,
     *   represented as arrays of longitude and latitude numbers, which define the corners of the canvas.
     *   The coordinates start at the top left corner of the canvas and proceed in clockwise order.
     *   They do not have to represent a rectangle.
     * @returns {CanvasSource} this
     */
    // setCoordinates inherited from ImageSource

    CanvasSource.prototype.prepare = function prepare () {
        var resize = false;
        if (this.canvas.width !== this.width) {
            this.width = this.canvas.width;
            resize = true;
        }
        if (this.canvas.height !== this.height) {
            this.height = this.canvas.height;
            resize = true;
        }

        if (this._hasInvalidDimensions()) { return; }

        if (Object.keys(this.tiles).length === 0) { return; } // not enough data for current position

        this._prepareImage(this.map.painter.gl, this.canvas, resize);
    };

    CanvasSource.prototype.serialize = function serialize ()         {
        return {
            type: 'canvas',
            canvas: this.canvas,
            coordinates: this.coordinates
        };
    };

    CanvasSource.prototype.hasTransition = function hasTransition () {
        return this._playing;
    };

    CanvasSource.prototype._hasInvalidDimensions = function _hasInvalidDimensions () {
        var this$1 = this;

        for (var i = 0, list = [this$1.canvas.width, this$1.canvas.height]; i < list.length; i += 1) {
            var x = list[i];

            if (isNaN(x) || x <= 0) { return true; }
        }
        return false;
    };

    return CanvasSource;
}(ImageSource));

module.exports = CanvasSource;

},{"../util/window":248,"./image_source":103}],100:[function(require,module,exports){
'use strict';//      

var Evented = require('../util/evented');
var util = require('../util/util');
var window = require('../util/window');
var EXTENT = require('../data/extent');
var ResourceType = require('../util/ajax').ResourceType;
var browser = require('../util/browser');

                                     
                                 
                                                 
                               
                                                

/**
 * A source containing GeoJSON.
 * (See the [Style Specification](https://www.mapbox.com/mapbox-gl-style-spec/#sources-geojson) for detailed documentation of options.)
 *
 * @interface GeoJSONSource
 * @example
 *
 * map.addSource('some id', {
 *     type: 'geojson',
 *     data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson'
 * });
 *
 * @example
 * map.addSource('some id', {
 *    type: 'geojson',
 *    data: {
 *        "type": "FeatureCollection",
 *        "features": [{
 *            "type": "Feature",
 *            "properties": {},
 *            "geometry": {
 *                "type": "Point",
 *                "coordinates": [
 *                    -76.53063297271729,
 *                    39.18174077994108
 *                ]
 *            }
 *        }]
 *    }
 * });
 *
 * @example
 * map.getSource('some id').setData({
 *   "type": "FeatureCollection",
 *   "features": [{
 *       "type": "Feature",
 *       "properties": { "name": "Null Island" },
 *       "geometry": {
 *           "type": "Point",
 *           "coordinates": [ 0, 0 ]
 *       }
 *   }]
 * });
 * @see [Draw GeoJSON points](https://www.mapbox.com/mapbox-gl-js/example/geojson-markers/)
 * @see [Add a GeoJSON line](https://www.mapbox.com/mapbox-gl-js/example/geojson-line/)
 * @see [Create a heatmap from points](https://www.mapbox.com/mapbox-gl-js/example/heatmap/)
 */
var GeoJSONSource = (function (Evented) {
    function GeoJSONSource(id        , options                                                      , dispatcher            , eventedParent         ) {
        Evented.call(this);

        this.id = id;

        // `type` is a property rather than a constant to make it easy for 3rd
        // parties to use GeoJSONSource to build their own source types.
        this.type = 'geojson';

        this.minzoom = 0;
        this.maxzoom = 18;
        this.tileSize = 512;
        this.isTileClipped = true;
        this.reparseOverscaled = true;

        this.dispatcher = dispatcher;
        this.setEventedParent(eventedParent);

        this._data = (options.data     );
        this._options = util.extend({}, options);

        if (options.maxzoom !== undefined) { this.maxzoom = options.maxzoom; }
        if (options.type) { this.type = options.type; }

        var scale = EXTENT / this.tileSize;

        // sent to the worker, along with `url: ...` or `data: literal geojson`,
        // so that it can load/parse/index the geojson data
        // extending with `options.workerOptions` helps to make it easy for
        // third-party sources to hack/reuse GeoJSONSource.
        this.workerOptions = util.extend({
            source: this.id,
            cluster: options.cluster || false,
            geojsonVtOptions: {
                buffer: (options.buffer !== undefined ? options.buffer : 128) * scale,
                tolerance: (options.tolerance !== undefined ? options.tolerance : 0.375) * scale,
                extent: EXTENT,
                maxZoom: this.maxzoom
            },
            superclusterOptions: {
                maxZoom: options.clusterMaxZoom !== undefined ?
                    Math.min(options.clusterMaxZoom, this.maxzoom - 1) :
                    (this.maxzoom - 1),
                extent: EXTENT,
                radius: (options.clusterRadius || 50) * scale,
                log: false
            }
        }, options.workerOptions);
    }

    if ( Evented ) GeoJSONSource.__proto__ = Evented;
    GeoJSONSource.prototype = Object.create( Evented && Evented.prototype );
    GeoJSONSource.prototype.constructor = GeoJSONSource;

    GeoJSONSource.prototype.load = function load () {
        var this$1 = this;

        this.fire('dataloading', {dataType: 'source'});
        this._updateWorkerData(function (err) {
            if (err) {
                this$1.fire('error', {error: err});
                return;
            }
            // although GeoJSON sources contain no metadata, we fire this event to let the SourceCache
            // know its ok to start requesting tiles.
            this$1.fire('data', {dataType: 'source', sourceDataType: 'metadata'});
        });
    };

    GeoJSONSource.prototype.onAdd = function onAdd (map     ) {
        this.map = map;
        this.load();
    };

    /**
     * Sets the GeoJSON data and re-renders the map.
     *
     * @param {Object|string} data A GeoJSON data object or a URL to one. The latter is preferable in the case of large GeoJSON files.
     * @returns {GeoJSONSource} this
     */
    GeoJSONSource.prototype.setData = function setData (data                  ) {
        var this$1 = this;

        this._data = data;
        this.fire('dataloading', {dataType: 'source'});
        this._updateWorkerData(function (err) {
            if (err) {
                return this$1.fire('error', { error: err });
            }
            this$1.fire('data', {dataType: 'source', sourceDataType: 'content'});
        });

        return this;
    };

    /*
     * Responsible for invoking WorkerSource's geojson.loadData target, which
     * handles loading the geojson data and preparing to serve it up as tiles,
     * using geojson-vt or supercluster as appropriate.
     */
    GeoJSONSource.prototype._updateWorkerData = function _updateWorkerData (callback          ) {
        var this$1 = this;

        var options = util.extend({}, this.workerOptions);
        var data = this._data;
        if (typeof data === 'string') {
            options.request = this.map._transformRequest(resolveURL(data), ResourceType.Source);
        } else {
            options.data = JSON.stringify(data);
        }

        // target {this.type}.loadData rather than literally geojson.loadData,
        // so that other geojson-like source types can easily reuse this
        // implementation
        this.workerID = this.dispatcher.send(((this.type) + ".loadData"), options, function (err) {
            this$1._loaded = true;
            callback(err);
        }, this.workerID);
    };

    GeoJSONSource.prototype.loadTile = function loadTile (tile      , callback                ) {
        var this$1 = this;

        var message = tile.workerID === undefined || tile.state === 'expired' ? 'loadTile' : 'reloadTile';
        var params = {
            type: this.type,
            uid: tile.uid,
            coord: tile.coord,
            zoom: tile.coord.z,
            maxZoom: this.maxzoom,
            tileSize: this.tileSize,
            source: this.id,
            pixelRatio: browser.devicePixelRatio,
            overscaling: tile.coord.z > this.maxzoom ? Math.pow(2, tile.coord.z - this.maxzoom) : 1,
            showCollisionBoxes: this.map.showCollisionBoxes
        };

        tile.workerID = this.dispatcher.send(message, params, function (err, data) {
            tile.unloadVectorData();

            if (tile.aborted) {
                return callback(null);
            }

            if (err) {
                return callback(err);
            }

            tile.loadVectorData(data, this$1.map.painter);

            return callback(null);
        }, this.workerID);
    };

    GeoJSONSource.prototype.abortTile = function abortTile (tile      ) {
        tile.aborted = true;
    };

    GeoJSONSource.prototype.unloadTile = function unloadTile (tile      ) {
        tile.unloadVectorData();
        this.dispatcher.send('removeTile', { uid: tile.uid, type: this.type, source: this.id }, null, tile.workerID);
    };

    GeoJSONSource.prototype.onRemove = function onRemove () {
        this.dispatcher.broadcast('removeSource', { type: this.type, source: this.id });
    };

    GeoJSONSource.prototype.serialize = function serialize () {
        return util.extend({}, this._options, {
            type: this.type,
            data: this._data
        });
    };

    GeoJSONSource.prototype.hasTransition = function hasTransition () {
        return false;
    };

    return GeoJSONSource;
}(Evented));

function resolveURL(url) {
    var a = window.document.createElement('a');
    a.href = url;
    return a.href;
}

module.exports = GeoJSONSource;

},{"../data/extent":59,"../util/ajax":245,"../util/browser":246,"../util/evented":254,"../util/util":267,"../util/window":248}],101:[function(require,module,exports){
'use strict';//      

var ajax = require('../util/ajax');
var rewind = require('geojson-rewind');
var GeoJSONWrapper = require('./geojson_wrapper');
var vtpbf = require('vt-pbf');
var supercluster = require('supercluster');
var geojsonvt = require('geojson-vt');

var VectorTileWorkerSource = require('./vector_tile_worker_source');

             
                         
                       
                                 

                                       
                                                              

                                                                        
                                                    
                                                  

                             

                                     
                                
                  
                   
                                 
                             
  

                                                                                             

                               
 

function loadGeoJSONTile(params                      , callback                        ) {
    var source = params.source,
        coord = params.coord;

    if (!this._geoJSONIndexes[source]) {
        return callback(null, null);  // we couldn't load the file
    }

    var geoJSONTile = this._geoJSONIndexes[source].getTile(Math.min(coord.z, params.maxZoom), coord.x, coord.y);
    if (!geoJSONTile) {
        return callback(null, null); // nothing in the given tile
    }

    var geojsonWrapper = new GeoJSONWrapper(geoJSONTile.features);

    // Encode the geojson-vt tile into binary vector tile form form.  This
    // is a convenience that allows `FeatureIndex` to operate the same way
    // across `VectorTileSource` and `GeoJSONSource` data.
    var pbf = vtpbf(geojsonWrapper);
    if (pbf.byteOffset !== 0 || pbf.byteLength !== pbf.buffer.byteLength) {
        // Compatibility with node Buffer (https://github.com/mapbox/pbf/issues/35)
        pbf = new Uint8Array(pbf);
    }

    callback(null, {
        vectorTile: geojsonWrapper,
        rawData: pbf.buffer
    });
}

/**
 * The {@link WorkerSource} implementation that supports {@link GeoJSONSource}.
 * This class is designed to be easily reused to support custom source types
 * for data formats that can be parsed/converted into an in-memory GeoJSON
 * representation.  To do so, create it with
 * `new GeoJSONWorkerSource(actor, layerIndex, customLoadGeoJSONFunction)`.
 * For a full example, see [mapbox-gl-topojson](https://github.com/developmentseed/mapbox-gl-topojson).
 *
 * @private
 */
var GeoJSONWorkerSource = (function (VectorTileWorkerSource) {
  function GeoJSONWorkerSource(actor       , layerIndex                 , loadGeoJSON              ) {
        VectorTileWorkerSource.call(this, actor, layerIndex, loadGeoJSONTile);
        if (loadGeoJSON) {
            this.loadGeoJSON = loadGeoJSON;
        }
        // object mapping source ids to geojson-vt-like tile indexes
        this._geoJSONIndexes = {};
    }

  if ( VectorTileWorkerSource ) GeoJSONWorkerSource.__proto__ = VectorTileWorkerSource;
  GeoJSONWorkerSource.prototype = Object.create( VectorTileWorkerSource && VectorTileWorkerSource.prototype );
  GeoJSONWorkerSource.prototype.constructor = GeoJSONWorkerSource;

    /**
     * Fetches (if appropriate), parses, and index geojson data into tiles. This
     * preparatory method must be called before {@link GeoJSONWorkerSource#loadTile}
     * can correctly serve up tiles.
     *
     * Defers to {@link GeoJSONWorkerSource#loadGeoJSON} for the fetching/parsing,
     * expecting `callback(error, data)` to be called with either an error or a
     * parsed GeoJSON object.
     * @param params
     * @param params.source The id of the source.
     * @param callback
     */
    GeoJSONWorkerSource.prototype.loadData = function loadData (params                       , callback                ) {
        var this$1 = this;

        this.loadGeoJSON(params, function (err, data) {
            if (err || !data) {
                return callback(err);
            } else if (typeof data !== 'object') {
                return callback(new Error("Input data is not a valid GeoJSON object."));
            } else {
                rewind(data, true);

                try {
                    this$1._geoJSONIndexes[params.source] = params.cluster ?
                        supercluster(params.superclusterOptions).load(data.features) :
                        geojsonvt(data, params.geojsonVtOptions);
                } catch (err) {
                    return callback(err);
                }

                this$1.loaded[params.source] = {};
                callback(null);
            }
        });
    };

    /**
    * Implements {@link WorkerSource#reloadTile}.
    *
    * If the tile is loaded, uses the implementation in VectorTileWorkerSource.
    * Otherwise, such as after a setData() call, we load the tile fresh.
    *
    * @param params
    * @param params.source The id of the source for which we're loading this tile.
    * @param params.uid The UID for this tile.
    */
    GeoJSONWorkerSource.prototype.reloadTile = function reloadTile (params                      , callback                    ) {
        var loaded = this.loaded[params.source],
            uid = params.uid;

        if (loaded && loaded[uid]) {
            return VectorTileWorkerSource.prototype.reloadTile.call(this, params, callback);
        } else {
            return this.loadTile(params, callback);
        }
    };

    /**
     * Fetch and parse GeoJSON according to the given params.  Calls `callback`
     * with `(err, data)`, where `data` is a parsed GeoJSON object.
     *
     * GeoJSON is loaded and parsed from `params.url` if it exists, or else
     * expected as a literal (string or object) `params.data`.
     *
     * @param params
     * @param [params.url] A URL to the remote GeoJSON data.
     * @param [params.data] Literal GeoJSON data. Must be provided if `params.url` is not.
     */
    GeoJSONWorkerSource.prototype.loadGeoJSON = function loadGeoJSON (params                       , callback                 ) {
        // Because of same origin issues, urls must either include an explicit
        // origin or absolute path.
        // ie: /foo/bar.json or http://example.com/bar.json
        // but not ../foo/bar.json
        if (params.request) {
            ajax.getJSON(params.request, callback);
        } else if (typeof params.data === 'string') {
            try {
                return callback(null, JSON.parse(params.data));
            } catch (e) {
                return callback(new Error("Input data is not a valid GeoJSON object."));
            }
        } else {
            return callback(new Error("Input data is not a valid GeoJSON object."));
        }
    };

    GeoJSONWorkerSource.prototype.removeSource = function removeSource (params                  , callback                 ) {
        if (this._geoJSONIndexes[params.source]) {
            delete this._geoJSONIndexes[params.source];
        }
        callback();
    };

  return GeoJSONWorkerSource;
}(VectorTileWorkerSource));

module.exports = GeoJSONWorkerSource;

},{"../util/ajax":245,"./geojson_wrapper":102,"./vector_tile_worker_source":115,"geojson-rewind":15,"geojson-vt":19,"supercluster":42,"vt-pbf":47}],102:[function(require,module,exports){
'use strict';//      

var Point = require('@mapbox/point-geometry');
var toGeoJSON = require('@mapbox/vector-tile').VectorTileFeature.prototype.toGeoJSON;
var EXTENT = require('../data/extent');

// The feature type used by geojson-vt and supercluster. Should be extracted to
// global type and used in module definitions for those two modules.
                
            
              
                                                
                                      
     
                
              
                                                
                                             
 

var FeatureWrapper = function FeatureWrapper(feature     ) {
    this._feature = feature;

    this.extent = EXTENT;
    this.type = feature.type;
    this.properties = feature.tags;

    // If the feature has a top-level `id` property, copy it over, but only
    // if it can be coerced to an integer, because this wrapper is used for
    // serializing geojson feature data into vector tile PBF data, and the
    // vector tile spec only supports integer values for feature ids --
    // allowing non-integer values here results in a non-compliant PBF
    // that causes an exception when it is parsed with vector-tile-js
    if ('id' in feature && !isNaN(feature.id)) {
        this.id = parseInt(feature.id, 10);
    }
};

FeatureWrapper.prototype.loadGeometry = function loadGeometry () {
        var this$1 = this;

    if (this._feature.type === 1) {
        var geometry = [];
        for (var i = 0, list = this$1._feature.geometry; i < list.length; i += 1) {
            var point = list[i];

                geometry.push([new Point(point[0], point[1])]);
        }
        return geometry;
    } else {
        var geometry$1 = [];
        for (var i$1 = 0, list$1 = this$1._feature.geometry; i$1 < list$1.length; i$1 += 1) {
            var ring = list$1[i$1];

                var newRing = [];
            for (var i$2 = 0, list$2 = ring; i$2 < list$2.length; i$2 += 1) {
                var point$1 = list$2[i$2];

                    newRing.push(new Point(point$1[0], point$1[1]));
            }
            geometry$1.push(newRing);
        }
        return geometry$1;
    }
};

FeatureWrapper.prototype.toGeoJSON = function toGeoJSON$1 (x    , y    , z    ) {
    return toGeoJSON.call(this, x, y, z);
};

var GeoJSONWrapper = function GeoJSONWrapper(features            ) {
    this.layers = { '_geojsonTileLayer': this };
    this.name = '_geojsonTileLayer';
    this.extent = EXTENT;
    this.length = features.length;
    this._features = features;
};

GeoJSONWrapper.prototype.feature = function feature (i    )                {
    return new FeatureWrapper(this._features[i]);
};

module.exports = GeoJSONWrapper;

},{"../data/extent":59,"@mapbox/point-geometry":2,"@mapbox/vector-tile":6}],103:[function(require,module,exports){
'use strict';//      

var util = require('../util/util');
var window = require('../util/window');
var TileCoord = require('./tile_coord');
var LngLat = require('../geo/lng_lat');
var Point = require('@mapbox/point-geometry');
var Evented = require('../util/evented');
var ajax = require('../util/ajax');
var browser = require('../util/browser');
var EXTENT = require('../data/extent');
var RasterBoundsArray = require('../data/raster_bounds_array');
var VertexBuffer = require('../gl/vertex_buffer');
var VertexArrayObject = require('../render/vertex_array_object');
var Texture = require('../render/texture');

                                     
                                 
                                                 
                               
                                                
                                                

                                
             
                    
                     
                   

/**
 * A data source containing an image.
 * (See the [Style Specification](https://www.mapbox.com/mapbox-gl-style-spec/#sources-image) for detailed documentation of options.)
 *
 * @interface ImageSource
 * @example
 * // add to map
 * map.addSource('some id', {
 *    type: 'image',
 *    url: 'https://www.mapbox.com/images/foo.png',
 *    coordinates: [
 *        [-76.54, 39.18],
 *        [-76.52, 39.18],
 *        [-76.52, 39.17],
 *        [-76.54, 39.17]
 *    ]
 * });
 *
 * // update
 * var mySource = map.getSource('some id');
 * mySource.setCoordinates([
 *     [-76.54335737228394, 39.18579907229748],
 *     [-76.52803659439087, 39.1838364847587],
 *     [-76.5295386314392, 39.17683392507606],
 *     [-76.54520273208618, 39.17876344106642]
 * ]);
 *
 * map.removeSource('some id');  // remove
 * @see [Add an image](https://www.mapbox.com/mapbox-gl-js/example/image-on-a-map/)
 */
var ImageSource = (function (Evented) {
    function ImageSource(id        , options                                                                                 , dispatcher            , eventedParent         ) {
        Evented.call(this);
        this.id = id;
        this.dispatcher = dispatcher;
        this.coordinates = options.coordinates;

        this.type = 'image';
        this.minzoom = 0;
        this.maxzoom = 22;
        this.tileSize = 512;
        this.tiles = {};

        this.setEventedParent(eventedParent);

        this.options = options;
        this.textureLoaded = false;
    }

    if ( Evented ) ImageSource.__proto__ = Evented;
    ImageSource.prototype = Object.create( Evented && Evented.prototype );
    ImageSource.prototype.constructor = ImageSource;

    ImageSource.prototype.load = function load () {
        var this$1 = this;

        this.fire('dataloading', {dataType: 'source'});

        this.url = this.options.url;

        ajax.getImage(this.map._transformRequest(this.url, ajax.ResourceType.Image), function (err, image) {
            if (err) {
                this$1.fire('error', {error: err});
            } else if (image) {
                this$1.image = browser.getImageData(image);
                this$1._finishLoading();
            }
        });
    };

    ImageSource.prototype._finishLoading = function _finishLoading () {
        if (this.map) {
            this.setCoordinates(this.coordinates);
            this.fire('data', {dataType: 'source', sourceDataType: 'metadata'});
        }
    };

    ImageSource.prototype.onAdd = function onAdd (map     ) {
        this.map = map;
        this.load();
    };

    /**
     * Sets the image's coordinates and re-renders the map.
     *
     * @param {Array<Array<number>>} coordinates Four geographical coordinates,
     *   represented as arrays of longitude and latitude numbers, which define the corners of the image.
     *   The coordinates start at the top left corner of the image and proceed in clockwise order.
     *   They do not have to represent a rectangle.
     * @returns {ImageSource} this
     */
    ImageSource.prototype.setCoordinates = function setCoordinates (coordinates                                                                          ) {
        this.coordinates = coordinates;

        // Calculate which mercator tile is suitable for rendering the video in
        // and create a buffer with the corner coordinates. These coordinates
        // may be outside the tile, because raster tiles aren't clipped when rendering.

        var map = this.map;

        // transform the geo coordinates into (zoom 0) tile space coordinates
        var cornerZ0Coords = coordinates.map(function (coord) {
            return map.transform.locationCoordinate(LngLat.convert(coord)).zoomTo(0);
        });

        // Compute the coordinates of the tile we'll use to hold this image's
        // render data
        var centerCoord = this.centerCoord = util.getCoordinatesCenter(cornerZ0Coords);
        // `column` and `row` may be fractional; round them down so that they
        // represent integer tile coordinates
        centerCoord.column = Math.floor(centerCoord.column);
        centerCoord.row = Math.floor(centerCoord.row);
        this.coord = new TileCoord(centerCoord.zoom, centerCoord.column, centerCoord.row);

        // Constrain min/max zoom to our tile's zoom level in order to force
        // SourceCache to request this tile (no matter what the map's zoom
        // level)
        this.minzoom = this.maxzoom = centerCoord.zoom;

        // Transform the corner coordinates into the coordinate space of our
        // tile.
        var tileCoords = cornerZ0Coords.map(function (coord) {
            var zoomedCoord = coord.zoomTo(centerCoord.zoom);
            return new Point(
                Math.round((zoomedCoord.column - centerCoord.column) * EXTENT),
                Math.round((zoomedCoord.row - centerCoord.row) * EXTENT));
        });

        this._boundsArray = new RasterBoundsArray();
        this._boundsArray.emplaceBack(tileCoords[0].x, tileCoords[0].y, 0, 0);
        this._boundsArray.emplaceBack(tileCoords[1].x, tileCoords[1].y, EXTENT, 0);
        this._boundsArray.emplaceBack(tileCoords[3].x, tileCoords[3].y, 0, EXTENT);
        this._boundsArray.emplaceBack(tileCoords[2].x, tileCoords[2].y, EXTENT, EXTENT);

        if (this.boundsBuffer) {
            this.boundsBuffer.destroy();
            delete this.boundsBuffer;
        }

        this.fire('data', {dataType:'source', sourceDataType: 'content'});
        return this;
    };

    ImageSource.prototype.prepare = function prepare () {
        if (Object.keys(this.tiles).length === 0 || !this.image) { return; }
        this._prepareImage(this.map.painter.gl, this.image);
    };

    ImageSource.prototype._prepareImage = function _prepareImage (gl                       , image                    , resize          ) {
        var this$1 = this;

        if (!this.boundsBuffer) {
            this.boundsBuffer = new VertexBuffer(gl, this._boundsArray);
        }

        if (!this.boundsVAO) {
            this.boundsVAO = new VertexArrayObject();
        }

        if (!this.textureLoaded) {
            this.textureLoaded = true;
            this.texture = new Texture(gl, image, gl.RGBA);
            this.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE);
        } else if (resize) {
            this.texture.update(image);
        } else if (image instanceof window.HTMLVideoElement || image instanceof window.ImageData || image instanceof window.HTMLCanvasElement) {
            this.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE);
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, image);
        }

        for (var w in this$1.tiles) {
            var tile = this$1.tiles[w];
            if (tile.state !== 'loaded') {
                tile.state = 'loaded';
                tile.texture = this$1.texture;
            }
        }
    };

    ImageSource.prototype.loadTile = function loadTile (tile      , callback                ) {
        // We have a single tile -- whoose coordinates are this.coord -- that
        // covers the image we want to render.  If that's the one being
        // requested, set it up with the image; otherwise, mark the tile as
        // `errored` to indicate that we have no data for it.
        // If the world wraps, we may have multiple "wrapped" copies of the
        // single tile.
        if (this.coord && this.coord.toString() === tile.coord.toString()) {
            this.tiles[String(tile.coord.w)] = tile;
            tile.buckets = {};
            callback(null);
        } else {
            tile.state = 'errored';
            callback(null);
        }
    };

    ImageSource.prototype.serialize = function serialize ()         {
        return {
            type: 'image',
            url: this.options.url,
            coordinates: this.coordinates
        };
    };

    ImageSource.prototype.hasTransition = function hasTransition () {
        return false;
    };

    return ImageSource;
}(Evented));

module.exports = ImageSource;

},{"../data/extent":59,"../data/raster_bounds_array":65,"../geo/lng_lat":69,"../gl/vertex_buffer":73,"../render/texture":94,"../render/vertex_array_object":96,"../util/ajax":245,"../util/browser":246,"../util/evented":254,"../util/util":267,"../util/window":248,"./tile_coord":113,"@mapbox/point-geometry":2}],104:[function(require,module,exports){
'use strict';//      

var util = require('../util/util');
var ajax = require('../util/ajax');
var browser = require('../util/browser');
var normalizeURL = require('../util/mapbox').normalizeSourceURL;

                                                        
                                                

module.exports = function(options     , requestTransformFn                          , callback                    ) {
    var loaded = function(err, tileJSON     ) {
        if (err) {
            return callback(err);
        } else if (tileJSON) {
            var result      = util.pick(tileJSON, ['tiles', 'minzoom', 'maxzoom', 'attribution', 'mapbox_logo', 'bounds']);

            if (tileJSON.vector_layers) {
                result.vectorLayers = tileJSON.vector_layers;
                result.vectorLayerIds = result.vectorLayers.map(function (layer) { return layer.id; });
            }

            callback(null, result);
        }
    };

    if (options.url) {
        ajax.getJSON(requestTransformFn(normalizeURL(options.url), ajax.ResourceType.Source), loaded);
    } else {
        browser.frame(function () { return loaded(null, options); });
    }
};

},{"../util/ajax":245,"../util/browser":246,"../util/mapbox":261,"../util/util":267}],105:[function(require,module,exports){
'use strict';//      

var EXTENT = require('../data/extent');

                                          

/**
 * Converts a pixel value at a the given zoom level to tile units.
 *
 * The shaders mostly calculate everything in tile units so style
 * properties need to be converted from pixels to tile units using this.
 *
 * For example, a translation by 30 pixels at zoom 6.5 will be a
 * translation by pixelsToTileUnits(30, 6.5) tile units.
 *
 * @returns value in tile units
 * @private
 */
module.exports = function(tile                                      , pixelValue        , z        )         {
    return pixelValue * (EXTENT / (tile.tileSize * Math.pow(2, z - tile.coord.z)));
};

},{"../data/extent":59}],106:[function(require,module,exports){
'use strict';//      

var TileCoord = require('./tile_coord');

                                              
                                                   
                                                

exports.rendered = function(sourceCache             ,
                            styleLayers                        ,
                            queryGeometry                   ,
                            params                                                        ,
                            zoom        ,
                            bearing        ) {
    var tilesIn = sourceCache.tilesIn(queryGeometry);

    tilesIn.sort(sortTilesIn);

    var renderedFeatureLayers = [];
    for (var i = 0, list = tilesIn; i < list.length; i += 1) {
        var tileIn = list[i];

        renderedFeatureLayers.push({
            wrappedTileID: tileIn.coord.wrapped().id,
            queryResults: tileIn.tile.queryRenderedFeatures(
                styleLayers,
                tileIn.queryGeometry,
                tileIn.scale,
                params,
                bearing,
                sourceCache.id)
        });
    }

    return mergeRenderedFeatureLayers(renderedFeatureLayers);
};

exports.source = function(sourceCache             , params     ) {
    var tiles = sourceCache.getRenderableIds().map(function (id) {
        return sourceCache.getTileByID(id);
    });

    var result = [];

    var dataTiles = {};
    for (var i = 0; i < tiles.length; i++) {
        var tile = tiles[i];
        var dataID = new TileCoord(Math.min(tile.sourceMaxZoom, tile.coord.z), tile.coord.x, tile.coord.y, 0).id;
        if (!dataTiles[dataID]) {
            dataTiles[dataID] = true;
            tile.querySourceFeatures(result, params);
        }
    }

    return result;
};

function sortTilesIn(a, b) {
    var coordA = a.coord;
    var coordB = b.coord;
    return (coordA.z - coordB.z) || (coordA.y - coordB.y) || (coordA.w - coordB.w) || (coordA.x - coordB.x);
}

function mergeRenderedFeatureLayers(tiles) {
    // Merge results from all tiles, but if two tiles share the same
    // wrapped ID, don't duplicate features between the two tiles
    var result = {};
    var wrappedIDLayerMap = {};
    for (var i = 0, list = tiles; i < list.length; i += 1) {
        var tile = list[i];

        var queryResults = tile.queryResults;
        var wrappedID = tile.wrappedTileID;
        var wrappedIDLayers = wrappedIDLayerMap[wrappedID] = wrappedIDLayerMap[wrappedID] || {};
        for (var layerID in queryResults) {
            var tileFeatures = queryResults[layerID];
            var wrappedIDFeatures = wrappedIDLayers[layerID] = wrappedIDLayers[layerID] || {};
            var resultFeatures = result[layerID] = result[layerID] || [];
            for (var i$1 = 0, list$1 = tileFeatures; i$1 < list$1.length; i$1 += 1) {
                var tileFeature = list$1[i$1];

                if (!wrappedIDFeatures[tileFeature.featureIndex]) {
                    wrappedIDFeatures[tileFeature.featureIndex] = true;
                    resultFeatures.push(tileFeature.feature);
                }
            }
        }
    }
    return result;
}

},{"./tile_coord":113}],107:[function(require,module,exports){
'use strict';//      

var util = require('../util/util');
var ajax = require('../util/ajax');
var Evented = require('../util/evented');
var loadTileJSON = require('./load_tilejson');
var normalizeURL = require('../util/mapbox').normalizeTileURL;
var TileBounds = require('./tile_bounds');
var Texture = require('../render/texture');

                                     
                                          
                                 
                                                 
                               
                                                

var RasterTileSource = (function (Evented) {
    function RasterTileSource(id        , options                           , dispatcher            , eventedParent         ) {
        Evented.call(this);
        this.id = id;
        this.dispatcher = dispatcher;
        this.setEventedParent(eventedParent);

        this.type = 'raster';
        this.minzoom = 0;
        this.maxzoom = 22;
        this.roundZoom = true;
        this.scheme = 'xyz';
        this.tileSize = 512;
        this._loaded = false;

        this._options = util.extend({}, options);
        util.extend(this, util.pick(options, ['url', 'scheme', 'tileSize']));
    }

    if ( Evented ) RasterTileSource.__proto__ = Evented;
    RasterTileSource.prototype = Object.create( Evented && Evented.prototype );
    RasterTileSource.prototype.constructor = RasterTileSource;

    RasterTileSource.prototype.load = function load () {
        var this$1 = this;

        this.fire('dataloading', {dataType: 'source'});
        loadTileJSON(this._options, this.map._transformRequest, function (err, tileJSON) {
            if (err) {
                this$1.fire('error', err);
            } else if (tileJSON) {
                util.extend(this$1, tileJSON);
                if (tileJSON.bounds) { this$1.tileBounds = new TileBounds(tileJSON.bounds, this$1.minzoom, this$1.maxzoom); }

                // `content` is included here to prevent a race condition where `Style#_updateSources` is called
                // before the TileJSON arrives. this makes sure the tiles needed are loaded once TileJSON arrives
                // ref: https://github.com/mapbox/mapbox-gl-js/pull/4347#discussion_r104418088
                this$1.fire('data', {dataType: 'source', sourceDataType: 'metadata'});
                this$1.fire('data', {dataType: 'source', sourceDataType: 'content'});
            }
        });
    };

    RasterTileSource.prototype.onAdd = function onAdd (map     ) {
        this.map = map;
        this.load();
    };

    RasterTileSource.prototype.serialize = function serialize () {
        return util.extend({}, this._options);
    };

    RasterTileSource.prototype.hasTile = function hasTile (coord           ) {
        return !this.tileBounds || this.tileBounds.contains(coord, this.maxzoom);
    };

    RasterTileSource.prototype.loadTile = function loadTile (tile      , callback                ) {
        var this$1 = this;

        var url = normalizeURL(tile.coord.url(this.tiles, null, this.scheme), this.url, this.tileSize);
        tile.request = ajax.getImage(this.map._transformRequest(url, ajax.ResourceType.Tile), function (err, img) {
            delete tile.request;

            if (tile.aborted) {
                tile.state = 'unloaded';
                callback(null);
            } else if (err) {
                tile.state = 'errored';
                callback(err);
            } else if (img) {
                if (this$1.map._refreshExpiredTiles) { tile.setExpiryData(img); }
                delete (img     ).cacheControl;
                delete (img     ).expires;

                var gl = this$1.map.painter.gl;
                tile.texture = this$1.map.painter.getTileTexture(img.width);
                if (tile.texture) {
                    tile.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE, gl.LINEAR_MIPMAP_NEAREST);
                    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, img);
                } else {
                    tile.texture = new Texture(gl, img, gl.RGBA);
                    tile.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE, gl.LINEAR_MIPMAP_NEAREST);

                    if (this$1.map.painter.extTextureFilterAnisotropic) {
                        gl.texParameterf(gl.TEXTURE_2D, this$1.map.painter.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT, this$1.map.painter.extTextureFilterAnisotropicMax);
                    }
                }
                gl.generateMipmap(gl.TEXTURE_2D);

                tile.state = 'loaded';

                callback(null);
            }
        });
    };

    RasterTileSource.prototype.abortTile = function abortTile (tile      , callback                ) {
        if (tile.request) {
            tile.request.abort();
            delete tile.request;
        }
        callback();
    };

    RasterTileSource.prototype.unloadTile = function unloadTile (tile      , callback                ) {
        if (tile.texture) { this.map.painter.saveTileTexture(tile.texture); }
        callback();
    };

    RasterTileSource.prototype.hasTransition = function hasTransition () {
        return false;
    };

    return RasterTileSource;
}(Evented));

module.exports = RasterTileSource;

},{"../render/texture":94,"../util/ajax":245,"../util/evented":254,"../util/mapbox":261,"../util/util":267,"./load_tilejson":104,"./tile_bounds":112}],108:[function(require,module,exports){
'use strict';//      

var ajax = require('../util/ajax');
var Evented = require('../util/evented');
var window = require('../util/window');

var pluginRequested = false;
var pluginBlobURL = null;

module.exports.evented = new Evented();

                                            

module.exports.registerForPluginAvailability = function(
    callback                                                                       
) {
    if (pluginBlobURL) {
        callback({ pluginBlobURL: pluginBlobURL, errorCallback: module.exports.errorCallback});
    } else {
        module.exports.evented.once('pluginAvailable', callback);
    }
    return callback;
};

// Exposed so it can be stubbed out by tests
module.exports.createBlobURL = function(response        ) {
    return window.URL.createObjectURL(new window.Blob([response.data], {type: "text/javascript"}));
};
// Only exposed for tests
module.exports.clearRTLTextPlugin = function() {
    pluginRequested = false;
    pluginBlobURL = null;
};

module.exports.setRTLTextPlugin = function(pluginURL        , callback               ) {
    if (pluginRequested) {
        throw new Error('setRTLTextPlugin cannot be called multiple times.');
    }
    pluginRequested = true;
    module.exports.errorCallback = callback;
    ajax.getArrayBuffer({ url: pluginURL }, function (err, response) {
        if (err) {
            callback(err);
        } else if (response) {
            pluginBlobURL = module.exports.createBlobURL(response);
            module.exports.evented.fire('pluginAvailable', { pluginBlobURL: pluginBlobURL, errorCallback: callback });
        }
    });
};

module.exports.applyArabicShaping = (null           );
module.exports.processBidirectionalText = (null                                           );

},{"../util/ajax":245,"../util/evented":254,"../util/window":248}],109:[function(require,module,exports){
'use strict';//      

var util = require('../util/util');

                                                 
                                           
                                 
                               
                                          
                                                

/**
 * The `Source` interface must be implemented by each source type, including "core" types (`vector`, `raster`,
 * `video`, etc.) and all custom, third-party types.
 *
 * @class Source
 * @private
 *
 * @param {string} id The id for the source. Must not be used by any existing source.
 * @param {Object} options Source options, specific to the source type (except for `options.type`, which is always
 * required).
 * @param {string} options.type The source type, matching the value of `name` used in {@link Style#addSourceType}.
 * @param {Dispatcher} dispatcher A {@link Dispatcher} instance, which can be used to send messages to the workers.
 *
 * @fires data with `{dataType: 'source', sourceDataType: 'metadata'}` to indicate that any necessary metadata
 * has been loaded so that it's okay to call `loadTile`; and with `{dataType: 'source', sourceDataType: 'content'}`
 * to indicate that the source data has changed, so that any current caches should be flushed.
 * @property {string} id The id for the source.  Must match the id passed to the constructor.
 * @property {number} minzoom
 * @property {number} maxzoom
 * @property {boolean} isTileClipped `false` if tiles can be drawn outside their boundaries, `true` if they cannot.
 * @property {boolean} reparseOverscaled `true` if tiles should be sent back to the worker for each overzoomed zoom
 * level, `false` if not.
 * @property {boolean} roundZoom `true` if zoom levels are rounded to the nearest integer in the source data, `false`
 * if they are floor-ed to the nearest integer.
 */
                         
       
                                                                                                
                                                                                                              
               
       
                                 

                  
               
                    
                    
                     
                         

                        
                                
                                   

                             

                                            

                                
                                   

                                                         
                                             
                                                                
                                                                 

       
                                                                                               
                                                                                                     
                              
               
       
                        

                          
 

var sourceTypes = {
    'vector': require('../source/vector_tile_source'),
    'raster': require('../source/raster_tile_source'),
    'geojson': require('../source/geojson_source'),
    'video': require('../source/video_source'),
    'image': require('../source/image_source'),
    'canvas': require('../source/canvas_source')
};

/*
 * Creates a tiled data source instance given an options object.
 *
 * @param id
 * @param {Object} source A source definition object compliant with
 * [`mapbox-gl-style-spec`](https://www.mapbox.com/mapbox-gl-style-spec/#sources) or, for a third-party source type,
  * with that type's requirements.
 * @param {Dispatcher} dispatcher
 * @returns {Source}
 */
exports.create = function(id        , specification                     , dispatcher            , eventedParent         ) {
    var source = new sourceTypes[specification.type](id, (specification     ), dispatcher, eventedParent);

    if (source.id !== id) {
        throw new Error(("Expected Source id to be " + id + " instead of " + (source.id)));
    }

    util.bindAll(['load', 'abort', 'unload', 'serialize', 'prepare'], source);
    return source;
};

exports.getType = function (name        ) {
    return sourceTypes[name];
};

exports.setType = function (name        , type               ) {
    sourceTypes[name] = type;
};

},{"../source/canvas_source":99,"../source/geojson_source":100,"../source/image_source":103,"../source/raster_tile_source":107,"../source/vector_tile_source":114,"../source/video_source":116,"../util/util":267}],110:[function(require,module,exports){
'use strict';//      

var createSource = require('./source').create;
var Tile = require('./tile');
var Evented = require('../util/evented');
var TileCoord = require('./tile_coord');
var Cache = require('../util/lru_cache');
var Coordinate = require('../geo/coordinate');
var util = require('../util/util');
var EXTENT = require('../data/extent');
var Point = require('@mapbox/point-geometry');

                                     
                                 
                                        
                                                 
                                              
                                      
                                                            
                                                

/**
 * `SourceCache` is responsible for
 *
 *  - creating an instance of `Source`
 *  - forwarding events from `Source`
 *  - caching tiles loaded from an instance of `Source`
 *  - loading the tiles needed to render a given viewport
 *  - unloading the cached tiles not needed to render a given viewport
 *
 * @private
 */
var SourceCache = (function (Evented) {
    function SourceCache(id        , options                     , dispatcher            ) {
        var this$1 = this;

        Evented.call(this);
        this.id = id;
        this.dispatcher = dispatcher;

        this.on('data', function (e) {
            // this._sourceLoaded signifies that the TileJSON is loaded if applicable.
            // if the source type does not come with a TileJSON, the flag signifies the
            // source data has loaded (i.e geojson has been tiled on the worker and is ready)
            if (e.dataType === 'source' && e.sourceDataType === 'metadata') { this$1._sourceLoaded = true; }

            // for sources with mutable data, this event fires when the underlying data
            // to a source is changed. (i.e. GeoJSONSource#setData and ImageSource#serCoordinates)
            if (this$1._sourceLoaded && !this$1._paused && e.dataType === "source" && e.sourceDataType === 'content') {
                this$1.reload();
                if (this$1.transform) {
                    this$1.update(this$1.transform);
                }
            }
        });

        this.on('error', function () {
            this$1._sourceErrored = true;
        });

        this._source = createSource(id, options, dispatcher, this);

        this._tiles = {};
        this._cache = new Cache(0, this._unloadTile.bind(this));
        this._timers = {};
        this._cacheTimers = {};
        this._maxTileCacheSize = null;

        this._isIdRenderable = this._isIdRenderable.bind(this);

        this._coveredTiles = {};
    }

    if ( Evented ) SourceCache.__proto__ = Evented;
    SourceCache.prototype = Object.create( Evented && Evented.prototype );
    SourceCache.prototype.constructor = SourceCache;

    SourceCache.prototype.onAdd = function onAdd (map     ) {
        this.map = map;
        this._maxTileCacheSize = map ? map._maxTileCacheSize : null;
        if (this._source && this._source.onAdd) {
            this._source.onAdd(map);
        }
    };

    SourceCache.prototype.onRemove = function onRemove (map     ) {
        if (this._source && this._source.onRemove) {
            this._source.onRemove(map);
        }
    };

    /**
     * Return true if no tile data is pending, tiles will not change unless
     * an additional API call is received.
     */
    SourceCache.prototype.loaded = function loaded ()          {
        var this$1 = this;

        if (this._sourceErrored) { return true; }
        if (!this._sourceLoaded) { return false; }
        for (var t in this$1._tiles) {
            var tile = this$1._tiles[t];
            if (tile.state !== 'loaded' && tile.state !== 'errored')
                { return false; }
        }
        return true;
    };

    SourceCache.prototype.getSource = function getSource ()         {
        return this._source;
    };

    SourceCache.prototype.pause = function pause () {
        this._paused = true;
    };

    SourceCache.prototype.getNeedsFullPlacement = function getNeedsFullPlacement () {
        return this._needsFullPlacement;
    };

    SourceCache.prototype.resume = function resume () {
        if (!this._paused) { return; }
        var shouldReload = this._shouldReloadOnResume;
        this._paused = false;
        this._shouldReloadOnResume = false;
        if (shouldReload) { this.reload(); }
        if (this.transform) { this.update(this.transform); }
    };

    SourceCache.prototype._loadTile = function _loadTile (tile      , callback                ) {
        return this._source.loadTile(tile, callback);
    };

    SourceCache.prototype._unloadTile = function _unloadTile (tile      ) {
        if (this._source.unloadTile)
            { return this._source.unloadTile(tile, function () {}); }
    };

    SourceCache.prototype._abortTile = function _abortTile (tile      ) {
        if (this._source.abortTile)
            { return this._source.abortTile(tile, function () {}); }
    };

    SourceCache.prototype.serialize = function serialize () {
        return this._source.serialize();
    };

    SourceCache.prototype.prepare = function prepare (gl                       ) {
        var this$1 = this;

        if  (this._source.prepare) {
            this._source.prepare();
        }

        for (var i in this$1._tiles) {
            this$1._tiles[i].upload(gl);
        }
    };

    /**
     * Return all tile ids ordered with z-order, and cast to numbers
     */
    SourceCache.prototype.getIds = function getIds ()                {
        var this$1 = this;


        var compareKeyZoom = function (a_, b_) {
            var a = TileCoord.fromID(a_);
            var b = TileCoord.fromID(b_);
            var rotatedA = (new Point(a.x, a.y)).rotate(this$1.transform.angle);
            var rotatedB = (new Point(b.x, b.y)).rotate(this$1.transform.angle);
            return a.z - b.z || rotatedB.y - rotatedA.y || rotatedB.x - rotatedA.x;
        };

        return Object.keys(this._tiles).map(Number).sort(compareKeyZoom);
    };

    SourceCache.prototype.getRenderableIds = function getRenderableIds () {
        return this.getIds().filter(this._isIdRenderable);
    };

    SourceCache.prototype.hasRenderableParent = function hasRenderableParent (coord           ) {
        var parentTile = this.findLoadedParent(coord, 0, {});
        if (parentTile) {
            return this._isIdRenderable(parentTile.coord.id);
        }
        return false;
    };

    SourceCache.prototype._isIdRenderable = function _isIdRenderable (id        ) {
        return this._tiles[id] && this._tiles[id].hasData() && !this._coveredTiles[id];
    };

    SourceCache.prototype.reload = function reload () {
        var this$1 = this;

        if (this._paused) {
            this._shouldReloadOnResume = true;
            return;
        }

        this._cache.reset();
        for (var i in this$1._tiles) {
            this$1._reloadTile(i, 'reloading');
        }
    };

    SourceCache.prototype._reloadTile = function _reloadTile (id                 , state           ) {
        var tile = this._tiles[id];

        // this potentially does not address all underlying
        // issues https://github.com/mapbox/mapbox-gl-js/issues/4252
        // - hard to tell without repro steps
        if (!tile) { return; }

        // The difference between "loading" tiles and "reloading" or "expired"
        // tiles is that "reloading"/"expired" tiles are "renderable".
        // Therefore, a "loading" tile cannot become a "reloading" tile without
        // first becoming a "loaded" tile.
        if (tile.state !== 'loading') {
            tile.state = state;
        }

        this._loadTile(tile, this._tileLoaded.bind(this, tile, id, state));
    };

    SourceCache.prototype._tileLoaded = function _tileLoaded (tile      , id                 , previousState           , err        ) {
        if (err) {
            tile.state = 'errored';
            if (err.status !== 404) { this._source.fire('error', {tile: tile, error: err}); }
            // continue to try loading parent/children tiles if a tile doesn't exist (404)
            else { this.update(this.transform); }
            return;
        }

        tile.timeAdded = new Date().getTime();
        if (previousState === 'expired') { tile.refreshedUponExpiration = true; }
        this._setTileReloadTimer(id, tile);
        this._source.fire('data', {dataType: 'source', tile: tile, coord: tile.coord});

        // HACK this is necessary to fix https://github.com/mapbox/mapbox-gl-js/issues/2986
        if (this.map) { this.map.painter.tileExtentVAO.vao = null; }

        this._updatePlacement();
        if (this.map)
            { tile.added(this.map.painter.crossTileSymbolIndex); }
    };

    /**
     * Get a specific tile by TileCoordinate
     */
    SourceCache.prototype.getTile = function getTile (coord           )       {
        return this.getTileByID(coord.id);
    };

    /**
     * Get a specific tile by id
     */
    SourceCache.prototype.getTileByID = function getTileByID (id                 )       {
        return this._tiles[id];
    };

    /**
     * get the zoom level adjusted for the difference in map and source tilesizes
     */
    SourceCache.prototype.getZoom = function getZoom (transform           )         {
        return transform.zoom + transform.scaleZoom(transform.tileSize / this._source.tileSize);
    };

    /**
     * Recursively find children of the given tile (up to maxCoveringZoom) that are already loaded;
     * adds found tiles to retain object; returns true if any child is found.
     */
    SourceCache.prototype._findLoadedChildren = function _findLoadedChildren (coord           , maxCoveringZoom        , retain                  )          {
        var this$1 = this;

        var found = false;

        for (var id in this$1._tiles) {
            var tile = this$1._tiles[id];

            // only consider renderable tiles on higher zoom levels (up to maxCoveringZoom)
            if (retain[id] || !tile.hasData() || tile.coord.z <= coord.z || tile.coord.z > maxCoveringZoom) { continue; }

            // disregard tiles that are not descendants of the given tile coordinate
            var z2 = Math.pow(2, Math.min(tile.coord.z, this$1._source.maxzoom) - Math.min(coord.z, this$1._source.maxzoom));
            if (Math.floor(tile.coord.x / z2) !== coord.x ||
                Math.floor(tile.coord.y / z2) !== coord.y)
                { continue; }

            // found loaded child
            retain[id] = true;
            found = true;

            // loop through parents; retain the topmost loaded one if found
            while (tile && tile.coord.z - 1 > coord.z) {
                var parent = tile.coord.parent(this$1._source.maxzoom);
                if (!parent) { break; }

                tile = this$1._tiles[parent.id];
                if (tile && tile.hasData()) {
                    delete retain[id];
                    retain[parent.id] = true;
                }
            }
        }
        return found;
    };

    /**
     * Find a loaded parent of the given tile (up to minCoveringZoom);
     * adds the found tile to retain object and returns the tile if found
     */
    SourceCache.prototype.findLoadedParent = function findLoadedParent (coord           , minCoveringZoom        , retain                  )        {
        var this$1 = this;

        for (var z = coord.z - 1; z >= minCoveringZoom; z--) {
            var parent = coord.parent(this$1._source.maxzoom);
            if (!parent) { return; }
            coord = parent;
            var id = String(coord.id);
            var tile = this$1._tiles[id];
            if (tile && tile.hasData()) {
                retain[id] = true;
                return tile;
            }
            if (this$1._cache.has(id)) {
                retain[id] = true;
                return this$1._cache.get(id);
            }
        }
    };

    /**
     * Resizes the tile cache based on the current viewport's size
     * or the maxTileCacheSize option passed during map creation
     *
     * Larger viewports use more tiles and need larger caches. Larger viewports
     * are more likely to be found on devices with more memory and on pages where
     * the map is more important.
     */
    SourceCache.prototype.updateCacheSize = function updateCacheSize (transform           ) {
        var widthInTiles = Math.ceil(transform.width / this._source.tileSize) + 1;
        var heightInTiles = Math.ceil(transform.height / this._source.tileSize) + 1;
        var approxTilesInView = widthInTiles * heightInTiles;
        var commonZoomRange = 5;

        var viewDependentMaxSize = Math.floor(approxTilesInView * commonZoomRange);
        var maxSize = typeof this._maxTileCacheSize === 'number' ? Math.min(this._maxTileCacheSize, viewDependentMaxSize) : viewDependentMaxSize;

        this._cache.setMaxSize(maxSize);
    };

    /**
     * Removes tiles that are outside the viewport and adds new tiles that
     * are inside the viewport.
     */
    SourceCache.prototype.update = function update (transform           ) {
        var this$1 = this;

        this.transform = transform;
        if (!this._sourceLoaded || this._paused) { return; }

        this.updateCacheSize(transform);
        // Covered is a list of retained tiles who's areas are fully covered by other,
        // better, retained tiles. They are not drawn separately.
        this._coveredTiles = {};

        var idealTileCoords;
        if (!this.used) {
            idealTileCoords = [];
        } else if (this._source.coord) {
            idealTileCoords = transform.getVisibleWrappedCoordinates((this._source.coord     ));
        } else {
            idealTileCoords = transform.coveringTiles({
                tileSize: this._source.tileSize,
                minzoom: this._source.minzoom,
                maxzoom: this._source.maxzoom,
                roundZoom: this._source.roundZoom,
                reparseOverscaled: this._source.reparseOverscaled
            });

            if (this._source.hasTile) {
                idealTileCoords = idealTileCoords.filter(function (coord) { return (this$1._source.hasTile     )(coord); });
            }
        }

        // Determine the overzooming/underzooming amounts.
        var zoom = (this._source.roundZoom ? Math.round : Math.floor)(this.getZoom(transform));
        var minCoveringZoom = Math.max(zoom - SourceCache.maxOverzooming, this._source.minzoom);
        var maxCoveringZoom = Math.max(zoom + SourceCache.maxUnderzooming,  this._source.minzoom);

        // Retain is a list of tiles that we shouldn't delete, even if they are not
        // the most ideal tile for the current viewport. This may include tiles like
        // parent or child tiles that are *already* loaded.
        var retain = this._updateRetainedTiles(idealTileCoords, zoom);

        var parentsForFading = {};

        if (isRasterType(this._source.type)) {
            var ids = Object.keys(retain);
            for (var k = 0; k < ids.length; k++) {
                var id = ids[k];
                var coord = TileCoord.fromID(+id);
                var tile = this$1._tiles[id];
                if (!tile) { continue; }

                // If the drawRasterTile has never seen this tile, then
                // tile.fadeEndTime may be unset.  In that case, or if
                // fadeEndTime is in the future, then this tile is still
                // fading in. Find tiles to cross-fade with it.
                if (typeof tile.fadeEndTime === 'undefined' || tile.fadeEndTime >= Date.now()) {
                    if (this$1._findLoadedChildren(coord, maxCoveringZoom, retain)) {
                        retain[id] = true;
                    }
                    var parentTile = this$1.findLoadedParent(coord, minCoveringZoom, parentsForFading);
                    if (parentTile) {
                        this$1._addTile(parentTile.coord);
                    }
                }
            }
        }

        var fadedParent;
        for (fadedParent in parentsForFading) {
            if (!retain[fadedParent]) {
                // If a tile is only needed for fading, mark it as covered so that it isn't rendered on it's own.
                this$1._coveredTiles[fadedParent] = true;
            }
        }
        for (fadedParent in parentsForFading) {
            retain[fadedParent] = true;
        }
        // Remove the tiles we don't need anymore.
        var remove = util.keysDifference(this._tiles, retain);
        for (var i = 0; i < remove.length; i++) {
            this$1._removeTile(remove[i]);
        }
    };

    SourceCache.prototype._updateRetainedTiles = function _updateRetainedTiles (idealTileCoords                  , zoom        )                       {
        var this$1 = this;

        var i, coord, tile, covered;
        var retain = {};
        var checked                       = {};
        var minCoveringZoom = Math.max(zoom - SourceCache.maxOverzooming, this._source.minzoom);


        for (i = 0; i < idealTileCoords.length; i++) {
            coord = idealTileCoords[i];
            tile = this$1._addTile(coord);
            var parentWasRequested = false;
            if (tile.hasData()) {
                retain[coord.id] = true;
            } else {
                // The tile we require is not yet loaded or does not exist.
                // We are now attempting to load child and parent tiles.

                // As we descend up and down the tile pyramid of the ideal tile, we check whether the parent
                // tile has been previously requested (and errored in this case due to the previous conditional)
                // in order to determine if we need to request its parent.
                parentWasRequested = tile.wasRequested();

                // The tile isn't loaded yet, but retain it anyway because it's an ideal tile.
                retain[coord.id] = true;
                covered = true;
                var overscaledZ = zoom + 1;
                if (overscaledZ > this$1._source.maxzoom) {
                    // We're looking for an overzoomed child tile.
                    var childCoord = coord.children(this$1._source.maxzoom)[0];
                    var childTile = this$1.getTile(childCoord);
                    if (!!childTile && childTile.hasData()) {
                        retain[childCoord.id] = true;
                    } else {
                        covered = false;
                    }
                } else {
                    // Check all four actual child tiles.
                    var children = coord.children(this$1._source.maxzoom);
                    for (var j = 0; j < children.length; j++) {
                        var childCoord$1 = children[j];
                        var childTile$1 = childCoord$1 ? this$1.getTile(childCoord$1) : null;
                        if (!!childTile$1 && childTile$1.hasData()) {
                            retain[childCoord$1.id] = true;
                        } else {
                            covered = false;
                        }
                    }
                }

                if (!covered) {

                    // We couldn't find child tiles that entirely cover the ideal tile.
                    for (var overscaledZ$1 = zoom - 1; overscaledZ$1 >= minCoveringZoom; --overscaledZ$1) {

                        var parentId = coord.scaledTo(overscaledZ$1, this$1._source.maxzoom);
                        if (checked[parentId.id]) {
                            // Break parent tile ascent, this route has been previously checked by another child.
                            break;
                        } else {
                            checked[parentId.id] = true;
                        }

                        tile = this$1.getTile(parentId);
                        if (!tile && parentWasRequested) {
                            tile = this$1._addTile(parentId);
                        }

                        if (tile) {
                            retain[parentId.id] = true;
                            // Save the current values, since they're the parent of the next iteration
                            // of the parent tile ascent loop.
                            parentWasRequested = tile.wasRequested();
                            if (tile.hasData()) {
                                break;
                            }
                        }
                    }
                }
            }
        }

        return retain;
    };

    /**
     * Add a tile, given its coordinate, to the pyramid.
     * @private
     */
    SourceCache.prototype._addTile = function _addTile (tileCoord           )       {
        var tile = this._tiles[tileCoord.id];
        if (tile)
            { return tile; }


        tile = this._cache.getAndRemove((tileCoord.id     ));
        if (tile) {
            this._updatePlacement();
            if (this.map)
                { tile.added(this.map.painter.crossTileSymbolIndex); }
            if (this._cacheTimers[tileCoord.id]) {
                clearTimeout(this._cacheTimers[tileCoord.id]);
                delete this._cacheTimers[tileCoord.id];
                this._setTileReloadTimer(tileCoord.id, tile);
            }
        }

        var cached = Boolean(tile);
        if (!cached) {
            var zoom = tileCoord.z;
            var overscaling = zoom > this._source.maxzoom ? Math.pow(2, zoom - this._source.maxzoom) : 1;
            tile = new Tile(tileCoord, this._source.tileSize * overscaling, this._source.maxzoom);
            this._loadTile(tile, this._tileLoaded.bind(this, tile, tileCoord.id, tile.state));
        }

        // Impossible, but silence flow.
        if (!tile) { return (null     ); }

        tile.uses++;
        this._tiles[tileCoord.id] = tile;
        if (!cached) { this._source.fire('dataloading', {tile: tile, coord: tile.coord, dataType: 'source'}); }

        return tile;
    };

    SourceCache.prototype._setTileReloadTimer = function _setTileReloadTimer (id                 , tile      ) {
        var this$1 = this;

        var expiryTimeout = tile.getExpiryTimeout();
        if (expiryTimeout) {
            this._timers[id] = setTimeout(function () {
                this$1._reloadTile(id, 'expired');
                delete this$1._timers[id];
            }, expiryTimeout);
        }
    };

    SourceCache.prototype._setCacheInvalidationTimer = function _setCacheInvalidationTimer (id                 , tile      ) {
        var this$1 = this;

        var expiryTimeout = tile.getExpiryTimeout();
        if (expiryTimeout) {
            this._cacheTimers[id] = setTimeout(function () {
                this$1._cache.remove((id     ));
                delete this$1._cacheTimers[id];
            }, expiryTimeout);
        }
    };

    /**
     * Remove a tile, given its id, from the pyramid
     * @private
     */
    SourceCache.prototype._removeTile = function _removeTile (id                 ) {
        var tile = this._tiles[id];
        if (!tile)
            { return; }

        tile.uses--;
        delete this._tiles[id];
        if (this._timers[id]) {
            clearTimeout(this._timers[id]);
            delete this._timers[id];
        }

        if (tile.uses > 0)
            { return; }

        this._updatePlacement();
        if (this.map)
            { tile.removed(this.map.painter.crossTileSymbolIndex); }

        if (tile.hasData()) {
            tile.coord = tile.coord.wrapped();
            var wrappedId = tile.coord.id;
            this._cache.add((wrappedId     ), tile);
            this._setCacheInvalidationTimer(wrappedId, tile);
        } else {
            tile.aborted = true;
            this._abortTile(tile);
            this._unloadTile(tile);
        }
    };

    SourceCache.prototype._updatePlacement = function _updatePlacement () {
        this._needsFullPlacement = true;
    };

    /**
     * Remove all tiles from this pyramid
     */
    SourceCache.prototype.clearTiles = function clearTiles () {
        var this$1 = this;

        this._shouldReloadOnResume = false;
        this._paused = false;

        for (var id in this$1._tiles)
            { this$1._removeTile(id); }
        this._cache.reset();
    };

    /**
     * Search through our current tiles and attempt to find the tiles that
     * cover the given bounds.
     * @param queryGeometry coordinates of the corners of bounding rectangle
     * @returns {Array<Object>} result items have {tile, minX, maxX, minY, maxY}, where min/max bounding values are the given bounds transformed in into the coordinate space of this tile.
     */
    SourceCache.prototype.tilesIn = function tilesIn (queryGeometry                   ) {
        var this$1 = this;

        var tileResults = [];
        var ids = this.getIds();

        var minX = Infinity;
        var minY = Infinity;
        var maxX = -Infinity;
        var maxY = -Infinity;
        var z = queryGeometry[0].zoom;

        for (var k = 0; k < queryGeometry.length; k++) {
            var p = queryGeometry[k];
            minX = Math.min(minX, p.column);
            minY = Math.min(minY, p.row);
            maxX = Math.max(maxX, p.column);
            maxY = Math.max(maxY, p.row);
        }


        for (var i = 0; i < ids.length; i++) {
            var tile = this$1._tiles[ids[i]];
            var coord = TileCoord.fromID(ids[i]);

            var tileSpaceBounds = [
                coordinateToTilePoint(coord, tile.sourceMaxZoom, new Coordinate(minX, minY, z)),
                coordinateToTilePoint(coord, tile.sourceMaxZoom, new Coordinate(maxX, maxY, z))
            ];

            if (tileSpaceBounds[0].x < EXTENT && tileSpaceBounds[0].y < EXTENT &&
                tileSpaceBounds[1].x >= 0 && tileSpaceBounds[1].y >= 0) {

                var tileSpaceQueryGeometry = [];
                for (var j = 0; j < queryGeometry.length; j++) {
                    tileSpaceQueryGeometry.push(coordinateToTilePoint(coord, tile.sourceMaxZoom, queryGeometry[j]));
                }

                tileResults.push({
                    tile: tile,
                    coord: coord,
                    queryGeometry: [tileSpaceQueryGeometry],
                    scale: Math.pow(2, this$1.transform.zoom - tile.coord.z)
                });
            }
        }

        return tileResults;
    };

    SourceCache.prototype.commitPlacement = function commitPlacement (collisionIndex                , collisionFadeTimes     ) {
        var this$1 = this;

        this._needsFullPlacement = false;
        var ids = this.getIds();
        for (var i = 0; i < ids.length; i++) {
            var tile = this$1.getTileByID(ids[i]);
            tile.commitPlacement(collisionIndex, collisionFadeTimes, this$1.transform.angle);
        }
    };

    SourceCache.prototype.getVisibleCoordinates = function getVisibleCoordinates () {
        var this$1 = this;

        var coords = this.getRenderableIds().map(TileCoord.fromID);
        for (var i = 0, list = coords; i < list.length; i += 1) {
            var coord = list[i];

            coord.posMatrix = this$1.transform.calculatePosMatrix(coord, this$1._source.maxzoom);
        }
        return coords;
    };

    SourceCache.prototype.hasTransition = function hasTransition () {
        var this$1 = this;

        if (this._source.hasTransition()) {
            return true;
        }

        if (isRasterType(this._source.type)) {
            for (var id in this$1._tiles) {
                var tile = this$1._tiles[id];
                if (tile.fadeEndTime !== undefined && tile.fadeEndTime >= Date.now()) {
                    return true;
                }
            }
        }

        return false;
    };

    return SourceCache;
}(Evented));

SourceCache.maxOverzooming = 10;
SourceCache.maxUnderzooming = 3;

/**
 * Convert a coordinate to a point in a tile's coordinate space.
 * @private
 */
function coordinateToTilePoint(tileCoord           , sourceMaxZoom        , coord            )        {
    var zoomedCoord = coord.zoomTo(Math.min(tileCoord.z, sourceMaxZoom));
    return new Point(
        (zoomedCoord.column - (tileCoord.x + tileCoord.w * Math.pow(2, tileCoord.z))) * EXTENT,
        (zoomedCoord.row - tileCoord.y) * EXTENT
    );
}

function isRasterType(type) {
    return type === 'raster' || type === 'image' || type === 'video';
}

module.exports = SourceCache;

},{"../data/extent":59,"../geo/coordinate":68,"../util/evented":254,"../util/lru_cache":260,"../util/util":267,"./source":109,"./tile":111,"./tile_coord":113,"@mapbox/point-geometry":2}],111:[function(require,module,exports){
'use strict';//      

var util = require('../util/util');
var deserializeBucket = require('../data/bucket').deserialize;
var SymbolBucket = require('../data/bucket/symbol_bucket');
var FeatureIndex = require('../data/feature_index');
var vt = require('@mapbox/vector-tile');
var Protobuf = require('pbf');
var GeoJSONFeature = require('../util/vectortile_to_geojson');
var featureFilter = require('../style-spec/feature_filter');
var CollisionIndex = require('../symbol/collision_index');
var CollisionBoxArray = require('../symbol/collision_box');
var RasterBoundsArray = require('../data/raster_bounds_array');
var TileCoord = require('./tile_coord');
var EXTENT = require('../data/extent');
var Point = require('@mapbox/point-geometry');
var VertexBuffer = require('../gl/vertex_buffer');
var IndexBuffer = require('../gl/index_buffer');
var Texture = require('../render/texture');
var ref = require('../data/segment');
var SegmentVector = ref.SegmentVector;
var ref$1 = require('../data/index_array_type');
var TriangleIndexArray = ref$1.TriangleIndexArray;
var projection = require('../symbol/projection');
var ref$2 = require('../symbol/symbol_placement');
var performSymbolPlacement = ref$2.performSymbolPlacement;
var updateOpacities = ref$2.updateOpacities;
var pixelsToTileUnits = require('../source/pixels_to_tile_units');

var CLOCK_SKEW_RETRY_TIMEOUT = 30000;

                                           
                                                   
                                                      
                                                         
                                            
                                                                          

                       
                                                            
                                                                     
                                                                                          
                                                
                                                                  
                  /* Tile data was previously loaded, but has expired per its
                   * HTTP headers and is in the process of refreshing. */

/**
 * A tile object is the combination of a Coordinate, which defines
 * its place, as well as a unique ID and data tracking for its content
 *
 * @private
 */
var Tile = function Tile(coord       , size    , sourceMaxZoom    ) {
    this.coord = coord;
    this.uid = util.uniqueId();
    this.uses = 0;
    this.tileSize = size;
    this.sourceMaxZoom = sourceMaxZoom;
    this.buckets = {};
    this.expirationTime = null;

    // Counts the number of times a response was already expired when
    // received. We're using this to add a delay when making a new request
    // so we don't have to keep retrying immediately in case of a server
    // serving expired tiles.
    this.expiredRequestCount = 0;

    this.state = 'loading';
};

Tile.prototype.registerFadeDuration = function registerFadeDuration (duration    ) {
    var fadeEndTime = duration + this.timeAdded;
    if (fadeEndTime < Date.now()) { return; }
    if (this.fadeEndTime && fadeEndTime < this.fadeEndTime) { return; }

    this.fadeEndTime = fadeEndTime;
};

Tile.prototype.wasRequested = function wasRequested () {
    return this.state === 'errored' || this.state === 'loaded' || this.state === 'reloading';
};

/**
 * Given a data object with a 'buffers' property, load it into
 * this tile's elementGroups and buffers properties and set loaded
 * to true. If the data is null, like in the case of an empty
 * GeoJSON tile, no-op but still set loaded to true.
 * @param {Object} data
 * @param painter
 * @returns {undefined}
 * @private
 */
Tile.prototype.loadVectorData = function loadVectorData (data              , painter ) {
 