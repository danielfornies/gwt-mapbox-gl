(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.mapboxgl = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var wgs84 = require('wgs84');

module.exports.geometry = geometry;
module.exports.ring = ringArea;

function geometry(_) {
    var area = 0, i;
    switch (_.type) {
        case 'Polygon':
            return polygonArea(_.coordinates);
        case 'MultiPolygon':
            for (i = 0; i < _.coordinates.length; i++) {
                area += polygonArea(_.coordinates[i]);
            }
            return area;
        case 'Point':
        case 'MultiPoint':
        case 'LineString':
        case 'MultiLineString':
            return 0;
        case 'GeometryCollection':
            for (i = 0; i < _.geometries.length; i++) {
                area += geometry(_.geometries[i]);
            }
            return area;
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
    var p1, p2, p3, lowerIndex, middleIndex, upperIndex, i,
    area = 0,
    coordsLength = coords.length;

    if (coordsLength > 2) {
        for (i = 0; i < coordsLength; i++) {
            if (i === coordsLength - 2) {// i = N-2
                lowerIndex = coordsLength - 2;
                middleIndex = coordsLength -1;
                upperIndex = 0;
            } else if (i === coordsLength - 1) {// i = N-1
                lowerIndex = coordsLength - 1;
                middleIndex = 0;
                upperIndex = 1;
            } else { // i = 0 to N-3
                lowerIndex = i;
                middleIndex = i+1;
                upperIndex = i+2;
            }
            p1 = coords[lowerIndex];
            p2 = coords[middleIndex];
            p3 = coords[upperIndex];
            area += ( rad(p3[0]) - rad(p1[0]) ) * Math.sin( rad(p2[1]));
        }

        area = area * wgs84.RADIUS * wgs84.RADIUS / 2;
    }

    return area;
}

function rad(_) {
    return _ * Math.PI / 180;
}
},{"wgs84":42}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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
    if (!('Worker' in window && 'Blob' in window)) {
        return false;
    }

    var blob = new Blob([''], { type: 'text/javascript' });
    var workerURL = URL.createObjectURL(blob);
    var supported;
    var worker;

    try {
        worker = new Worker(workerURL);
        supported = true;
    } catch (e) {
        supported = false;
    }

    if (worker) {
        worker.terminate();
    }
    URL.revokeObjectURL(workerURL);

    return supported;
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

},{}],4:[function(require,module,exports){
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
     * the cross product a x b = |a||b|sin(θ) for θ.
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
module.exports.VectorTile = require('./lib/vectortile.js');
module.exports.VectorTileFeature = require('./lib/vectortilefeature.js');
module.exports.VectorTileLayer = require('./lib/vectortilelayer.js');

},{"./lib/vectortile.js":9,"./lib/vectortilefeature.js":10,"./lib/vectortilelayer.js":11}],9:[function(require,module,exports){
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


},{"./vectortilelayer":11}],10:[function(require,module,exports){
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

},{"@mapbox/point-geometry":4}],11:[function(require,module,exports){
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

},{"./vectortilefeature.js":10}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{"util/":38}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
'use strict';

module.exports = earcut;
module.exports.default = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode) return triangles;

    var minX, minY, maxX, maxY, x, y, invSize;

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

        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 1 / invSize : 0;
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, invSize);

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
            if (p === p.next) break;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
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
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(ear, triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
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

function isEarHashed(ear, minX, minY, invSize) {
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
    var minZ = zOrder(minTX, minTY, minX, minY, invSize),
        maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);

    var p = ear.prevZ,
        n = ear.nextZ;

    // look for points inside the triangle in both directions
    while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;

        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    // look for remaining points in decreasing z-order
    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    // look for remaining points in increasing z-order
    while (n && n.z <= maxZ) {
        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
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
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
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
                earcutLinked(a, triangles, dim, minX, minY, invSize);
                earcutLinked(c, triangles, dim, minX, minY, invSize);
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
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
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
        if (hx >= p.x && p.x >= mx && hx !== p.x &&
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
function indexCurve(start, minX, minY, invSize) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
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

                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
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

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) * invSize;
    y = 32767 * (y - minY) * invSize;

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
        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
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

},{}],16:[function(require,module,exports){
var geojsonArea = require('@mapbox/geojson-area');

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

},{"@mapbox/geojson-area":1}],17:[function(require,module,exports){
'use strict';

module.exports = clip;

var createFeature = require('./feature');

/* clip features between two axis-parallel lines:
 *     |        |
 *  ___|___     |     /
 * /   |   \____|____/
 *     |        |
 */

function clip(features, scale, k1, k2, axis, minAll, maxAll) {

    k1 /= scale;
    k2 /= scale;

    if (minAll >= k1 && maxAll <= k2) return features; // trivial accept
    else if (minAll > k2 || maxAll < k1) return null; // trivial reject

    var clipped = [];

    for (var i = 0; i < features.length; i++) {

        var feature = features[i];
        var geometry = feature.geometry;
        var type = feature.type;

        var min = axis === 0 ? feature.minX : feature.minY;
        var max = axis === 0 ? feature.maxX : feature.maxY;

        if (min >= k1 && max <= k2) { // trivial accept
            clipped.push(feature);
            continue;
        } else if (min > k2 || max < k1) { // trivial reject
            continue;
        }

        var newGeometry = [];

        if (type === 'Point' || type === 'MultiPoint') {
            clipPoints(geometry, newGeometry, k1, k2, axis);

        } else if (type === 'LineString') {
            clipLine(geometry, newGeometry, k1, k2, axis, false);

        } else if (type === 'MultiLineString') {
            clipLines(geometry, newGeometry, k1, k2, axis, false);

        } else if (type === 'Polygon') {
            clipLines(geometry, newGeometry, k1, k2, axis, true);

        } else if (type === 'MultiPolygon') {
            for (var j = 0; j < geometry.length; j++) {
                var polygon = [];
                clipLines(geometry[j], polygon, k1, k2, axis, true);
                if (polygon.length) {
                    newGeometry.push(polygon);
                }
            }
        }

        if (newGeometry.length) {
            if (type === 'LineString' || type === 'MultiLineString') {
                if (newGeometry.length === 1) {
                    type = 'LineString';
                    newGeometry = newGeometry[0];
                } else {
                    type = 'MultiLineString';
                }
            }
            if (type === 'Point' || type === 'MultiPoint') {
                type = newGeometry.length === 3 ? 'Point' : 'MultiPoint';
            }

            clipped.push(createFeature(feature.id, type, newGeometry, feature.tags));
        }
    }

    return clipped.length ? clipped : null;
}

function clipPoints(geom, newGeom, k1, k2, axis) {
    for (var i = 0; i < geom.length; i += 3) {
        var a = geom[i + axis];

        if (a >= k1 && a <= k2) {
            newGeom.push(geom[i]);
            newGeom.push(geom[i + 1]);
            newGeom.push(geom[i + 2]);
        }
    }
}

function clipLine(geom, newGeom, k1, k2, axis, isPolygon) {

    var slice = [];
    var intersect = axis === 0 ? intersectX : intersectY;

    for (var i = 0; i < geom.length - 3; i += 3) {
        var ax = geom[i];
        var ay = geom[i + 1];
        var az = geom[i + 2];
        var bx = geom[i + 3];
        var by = geom[i + 4];
        var a = axis === 0 ? ax : ay;
        var b = axis === 0 ? bx : by;
        var sliced = false;

        if (a < k1) {
            // ---|-->  |
            if (b >= k1) intersect(slice, ax, ay, bx, by, k1);
        } else if (a > k2) {
            // |  <--|---
            if (b <= k2) intersect(slice, ax, ay, bx, by, k2);
        } else {
            addPoint(slice, ax, ay, az);
        }
        if (b < k1 && a >= k1) {
            // <--|---  | or <--|-----|---
            intersect(slice, ax, ay, bx, by, k1);
            sliced = true;
        }
        if (b > k2 && a <= k2) {
            // |  ---|--> or ---|-----|-->
            intersect(slice, ax, ay, bx, by, k2);
            sliced = true;
        }

        if (!isPolygon && sliced) {
            slice.size = geom.size;
            newGeom.push(slice);
            slice = [];
        }
    }

    // add the last point
    var last = geom.length - 3;
    ax = geom[last];
    ay = geom[last + 1];
    az = geom[last + 2];
    a = axis === 0 ? ax : ay;
    if (a >= k1 && a <= k2) addPoint(slice, ax, ay, az);

    // close the polygon if its endpoints are not the same after clipping
    last = slice.length - 3;
    if (isPolygon && last >= 3 && (slice[last] !== slice[0] || slice[last + 1] !== slice[1])) {
        addPoint(slice, slice[0], slice[1], slice[2]);
    }

    // add the final slice
    if (slice.length) {
        slice.size = geom.size;
        newGeom.push(slice);
    }
}

function clipLines(geom, newGeom, k1, k2, axis, isPolygon) {
    for (var i = 0; i < geom.length; i++) {
        clipLine(geom[i], newGeom, k1, k2, axis, isPolygon);
    }
}

function addPoint(out, x, y, z) {
    out.push(x);
    out.push(y);
    out.push(z);
}

function intersectX(out, ax, ay, bx, by, x) {
    out.push(x);
    out.push(ay + (x - ax) * (by - ay) / (bx - ax));
    out.push(1);
}

function intersectY(out, ax, ay, bx, by, y) {
    out.push(ax + (y - ay) * (bx - ax) / (by - ay));
    out.push(y);
    out.push(1);
}

},{"./feature":19}],18:[function(require,module,exports){
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

function convertFeature(features, geojson, tolerance) {
    if (!geojson.geometry) return;

    var coords = geojson.geometry.coordinates;
    var type = geojson.geometry.type;
    var tol = tolerance * tolerance;
    var geometry = [];

    if (type === 'Point') {
        convertPoint(coords, geometry);

    } else if (type === 'MultiPoint') {
        for (var i = 0; i < coords.length; i++) {
            convertPoint(coords[i], geometry);
        }

    } else if (type === 'LineString') {
        convertLine(coords, geometry, tol, false);

    } else if (type === 'MultiLineString') {
        convertLines(coords, geometry, tol, false);

    } else if (type === 'Polygon') {
        convertLines(coords, geometry, tol, true);

    } else if (type === 'MultiPolygon') {
        for (i = 0; i < coords.length; i++) {
            var polygon = [];
            convertLines(coords[i], polygon, tol, true);
            geometry.push(polygon);
        }
    } else if (type === 'GeometryCollection') {
        for (i = 0; i < geojson.geometry.geometries.length; i++) {
            convertFeature(features, {
                geometry: geojson.geometry.geometries[i],
                properties: geojson.properties
            }, tolerance);
        }
        return;
    } else {
        throw new Error('Input data is not a valid GeoJSON object.');
    }

    features.push(createFeature(geojson.id, type, geometry, geojson.properties));
}

function convertPoint(coords, out) {
    out.push(projectX(coords[0]));
    out.push(projectY(coords[1]));
    out.push(0);
}

function convertLine(ring, out, tol, isPolygon) {
    var x0, y0;
    var size = 0;

    for (var j = 0; j < ring.length; j++) {
        var x = projectX(ring[j][0]);
        var y = projectY(ring[j][1]);

        out.push(x);
        out.push(y);
        out.push(0);

        if (j > 0) {
            if (isPolygon) {
                size += (x0 * y - x * y0) / 2; // area
            } else {
                size += Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)); // length
            }
        }
        x0 = x;
        y0 = y;
    }

    var last = out.length - 3;
    out[2] = 1;
    simplify(out, 0, last, tol);
    out[last + 2] = 1;

    out.size = Math.abs(size);
}

function convertLines(rings, out, tol, isPolygon) {
    for (var i = 0; i < rings.length; i++) {
        var geom = [];
        convertLine(rings[i], geom, tol, isPolygon);
        out.push(geom);
    }
}

function projectX(x) {
    return x / 360 + 0.5;
}

function projectY(y) {
    var sin = Math.sin(y * Math.PI / 180);
    var y2 = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
    return y2 < 0 ? 0 : y2 > 1 ? 1 : y2;
}

},{"./feature":19,"./simplify":21}],19:[function(require,module,exports){
'use strict';

module.exports = createFeature;

function createFeature(id, type, geom, tags) {
    var feature = {
        id: id || null,
        type: type,
        geometry: geom,
        tags: tags,
        minX: Infinity,
        minY: Infinity,
        maxX: -Infinity,
        maxY: -Infinity
    };
    calcBBox(feature);
    return feature;
}

function calcBBox(feature) {
    var geom = feature.geometry;
    var type = feature.type;

    if (type === 'Point' || type === 'MultiPoint' || type === 'LineString') {
        calcLineBBox(feature, geom);

    } else if (type === 'Polygon' || type === 'MultiLineString') {
        for (var i = 0; i < geom.length; i++) {
            calcLineBBox(feature, geom[i]);
        }

    } else if (type === 'MultiPolygon') {
        for (i = 0; i < geom.length; i++) {
            for (var j = 0; j < geom[i].length; j++) {
                calcLineBBox(feature, geom[i][j]);
            }
        }
    }
}

function calcLineBBox(feature, geom) {
    for (var i = 0; i < geom.length; i += 3) {
        feature.minX = Math.min(feature.minX, geom[i]);
        feature.minY = Math.min(feature.minY, geom[i + 1]);
        feature.maxX = Math.max(feature.maxX, geom[i]);
        feature.maxY = Math.max(feature.maxY, geom[i + 1]);
    }
}

},{}],20:[function(require,module,exports){
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

    if (options.maxZoom < 0 || options.maxZoom > 24) throw new Error('maxZoom should be in the 0-24 range');

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

    features = wrap(features, options.buffer / options.extent);

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
    tolerance: 3,           // simplification tolerance (higher means simpler)
    extent: 4096,           // tile extent
    buffer: 64,             // tile buffer on each side
    debug: 0                // logging level (0, 1 or 2)
};

GeoJSONVT.prototype.splitTile = function (features, z, x, y, cz, cx, cy) {

    var stack = [features, z, x, y],
        options = this.options,
        debug = options.debug;

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

        // if we slice further down, no need to keep source geometry
        tile.source = null;

        if (features.length === 0) continue;

        if (debug > 1) console.time('clipping');

        // values we'll use for clipping
        var k1 = 0.5 * options.buffer / options.extent,
            k2 = 0.5 - k1,
            k3 = 0.5 + k1,
            k4 = 1 + k1,
            tl, bl, tr, br, left, right;

        tl = bl = tr = br = null;

        left  = clip(features, z2, x - k1, x + k3, 0, tile.minX, tile.maxX);
        right = clip(features, z2, x + k2, x + k4, 0, tile.minX, tile.maxX);
        features = null;

        if (left) {
            tl = clip(left, z2, y - k1, y + k3, 1, tile.minY, tile.maxY);
            bl = clip(left, z2, y + k2, y + k4, 1, tile.minY, tile.maxY);
            left = null;
        }

        if (right) {
            tr = clip(right, z2, y - k1, y + k3, 1, tile.minY, tile.maxY);
            br = clip(right, z2, y + k2, y + k4, 1, tile.minY, tile.maxY);
            right = null;
        }

        if (debug > 1) console.timeEnd('clipping');

        stack.push(tl || [], z + 1, x * 2,     y * 2);
        stack.push(bl || [], z + 1, x * 2,     y * 2 + 1);
        stack.push(tr || [], z + 1, x * 2 + 1, y * 2);
        stack.push(br || [], z + 1, x * 2 + 1, y * 2 + 1);
    }
};

GeoJSONVT.prototype.getTile = function (z, x, y) {
    var options = this.options,
        extent = options.extent,
        debug = options.debug;

    if (z < 0 || z > 24) return null;

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

    if (debug > 1) console.time('drilling down');
    this.splitTile(parent.source, z0, x0, y0, z, x, y);
    if (debug > 1) console.timeEnd('drilling down');

    return this.tiles[id] ? transform.tile(this.tiles[id], extent) : null;
};

function toID(z, x, y) {
    return (((1 << z) * y + x) * 32) + z;
}

function extend(dest, src) {
    for (var i in src) dest[i] = src[i];
    return dest;
}

},{"./clip":17,"./convert":18,"./tile":22,"./transform":23,"./wrap":24}],21:[function(require,module,exports){
'use strict';

module.exports = simplify;

// calculate simplification data using optimized Douglas-Peucker algorithm

function simplify(coords, first, last, sqTolerance) {
    var maxSqDist = sqTolerance;
    var index;

    var ax = coords[first];
    var ay = coords[first + 1];
    var bx = coords[last];
    var by = coords[last + 1];

    for (var i = first + 3; i < last; i += 3) {
        var d = getSqSegDist(coords[i], coords[i + 1], ax, ay, bx, by);
        if (d > maxSqDist) {
            index = i;
            maxSqDist = d;
        }
    }

    if (maxSqDist > sqTolerance) {
        if (index - first > 3) simplify(coords, first, index, sqTolerance);
        coords[index + 2] = maxSqDist;
        if (last - index > 3) simplify(coords, index, last, sqTolerance);
    }
}

// square distance from a point to a segment
function getSqSegDist(px, py, x, y, bx, by) {

    var dx = bx - x;
    var dy = by - y;

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

},{}],22:[function(require,module,exports){
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
        minX: 2,
        minY: 1,
        maxX: -1,
        maxY: 0
    };
    for (var i = 0; i < features.length; i++) {
        tile.numFeatures++;
        addFeature(tile, features[i], tolerance, noSimplify);

        var minX = features[i].minX;
        var minY = features[i].minY;
        var maxX = features[i].maxX;
        var maxY = features[i].maxY;

        if (minX < tile.minX) tile.minX = minX;
        if (minY < tile.minY) tile.minY = minY;
        if (maxX > tile.maxX) tile.maxX = maxX;
        if (maxY > tile.maxY) tile.maxY = maxY;
    }
    return tile;
}

function addFeature(tile, feature, tolerance, noSimplify) {

    var geom = feature.geometry,
        type = feature.type,
        simplified = [];

    if (type === 'Point' || type === 'MultiPoint') {
        for (var i = 0; i < geom.length; i += 3) {
            simplified.push(geom[i]);
            simplified.push(geom[i + 1]);
            tile.numPoints++;
            tile.numSimplified++;
        }

    } else if (type === 'LineString') {
        addLine(simplified, geom, tile, tolerance, noSimplify, false, false);

    } else if (type === 'MultiLineString' || type === 'Polygon') {
        for (i = 0; i < geom.length; i++) {
            addLine(simplified, geom[i], tile, tolerance, noSimplify, type === 'Polygon', i === 0);
        }

    } else if (type === 'MultiPolygon') {

        for (var k = 0; k < geom.length; k++) {
            var polygon = geom[k];
            for (i = 0; i < polygon.length; i++) {
                addLine(simplified, polygon[i], tile, tolerance, noSimplify, true, i === 0);
            }
        }
    }

    if (simplified.length) {
        var tileFeature = {
            geometry: simplified,
            type: type === 'Polygon' || type === 'MultiPolygon' ? 3 :
                type === 'LineString' || type === 'MultiLineString' ? 2 : 1,
            tags: feature.tags || null
        };
        if (feature.id !== null) {
            tileFeature.id = feature.id;
        }
        tile.features.push(tileFeature);
    }
}

function addLine(result, geom, tile, tolerance, noSimplify, isPolygon, isOuter) {
    var sqTolerance = tolerance * tolerance;

    if (!noSimplify && (geom.size < (isPolygon ? sqTolerance : tolerance))) {
        tile.numPoints += geom.length / 3;
        return;
    }

    var ring = [];

    for (var i = 0; i < geom.length; i += 3) {
        if (noSimplify || geom[i + 2] > sqTolerance) {
            tile.numSimplified++;
            ring.push(geom[i]);
            ring.push(geom[i + 1]);
        }
        tile.numPoints++;
    }

    if (isPolygon) rewind(ring, isOuter);

    result.push(ring);
}

function rewind(ring, clockwise) {
    var area = 0;
    for (var i = 0, len = ring.length, j = len - 2; i < len; j = i, i += 2) {
        area += (ring[i] - ring[j]) * (ring[i + 1] + ring[j + 1]);
    }
    if (area > 0 === clockwise) {
        for (i = 0, len = ring.length; i < len / 2; i += 2) {
            var x = ring[i];
            var y = ring[i + 1];
            ring[i] = ring[len - 2 - i];
            ring[i + 1] = ring[len - 1 - i];
            ring[len - 2 - i] = x;
            ring[len - 1 - i] = y;
        }
    }
}

},{}],23:[function(require,module,exports){
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

        feature.geometry = [];

        if (type === 1) {
            for (j = 0; j < geom.length; j += 2) {
                feature.geometry.push(transformPoint(geom[j], geom[j + 1], extent, z2, tx, ty));
            }
        } else {
            for (j = 0; j < geom.length; j++) {
                var ring = [];
                for (k = 0; k < geom[j].length; k += 2) {
                    ring.push(transformPoint(geom[j][k], geom[j][k + 1], extent, z2, tx, ty));
                }
                feature.geometry.push(ring);
            }
        }
    }

    tile.transformed = true;

    return tile;
}

function transformPoint(x, y, extent, z2, tx, ty) {
    return [
        Math.round(extent * (x * z2 - tx)),
        Math.round(extent * (y * z2 - ty))];
}

},{}],24:[function(require,module,exports){
'use strict';

var clip = require('./clip');
var createFeature = require('./feature');

module.exports = wrap;

function wrap(features, buffer) {
    var merged = features,
        left  = clip(features, 1, -1 - buffer, buffer,     0, -1, 2), // left world copy
        right = clip(features, 1,  1 - buffer, 2 + buffer, 0, -1, 2); // right world copy

    if (left || right) {
        merged = clip(features, 1, -buffer, 1 + buffer, 0, -1, 2) || []; // center world copy

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

        if (type === 'Point' || type === 'MultiPoint' || type === 'LineString') {
            newGeometry = shiftCoords(feature.geometry, offset);

        } else if (type === 'MultiLineString' || type === 'Polygon') {
            newGeometry = [];
            for (var j = 0; j < feature.geometry.length; j++) {
                newGeometry.push(shiftCoords(feature.geometry[j], offset));
            }
        } else if (type === 'MultiPolygon') {
            newGeometry = [];
            for (j = 0; j < feature.geometry.length; j++) {
                var newPolygon = [];
                for (var k = 0; k < feature.geometry[j].length; k++) {
                    newPolygon.push(shiftCoords(feature.geometry[j][k], offset));
                }
                newGeometry.push(newPolygon);
            }
        }

        newFeatures.push(createFeature(feature.id, type, newGeometry, feature.tags));
    }

    return newFeatures;
}

function shiftCoords(points, offset) {
    var newPoints = [];
    newPoints.size = points.size;

    for (var i = 0; i < points.length; i += 3) {
        newPoints.push(points[i] + offset, points[i + 1], points[i + 2]);
    }
    return newPoints;
}

},{"./clip":17,"./feature":19}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
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

},{"./range":28,"./sort":29,"./within":30}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
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

},{"ieee754":26}],32:[function(require,module,exports){
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

},{}],33:[function(require,module,exports){
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

},{}],34:[function(require,module,exports){
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

},{"kdbush":27}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
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

},{}],37:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],38:[function(require,module,exports){
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

},{"./support/isBuffer":37,"_process":32,"inherits":36}],39:[function(require,module,exports){
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

},{"./lib/geojson_wrapper":40,"pbf":31}],40:[function(require,module,exports){
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

},{"@mapbox/point-geometry":4,"@mapbox/vector-tile":8}],41:[function(require,module,exports){
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
            'function(require,module,exports){' + fn + '(self); }',
            wcache
        ];
    }
    var skey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);

    var scache = {}; scache[wkey] = wkey;
    sources[skey] = [
        'function(require,module,exports){' +
            // try to call default if defined to also support babel esmodule exports
            'var f = require(' + stringify(wkey) + ');' +
            '(f.default ? f.default : f)(self);' +
        '}',
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

},{}],42:[function(require,module,exports){
module.exports.RADIUS = 6378137;
module.exports.FLATTENING = 1/298.257223563;
module.exports.POLAR_RADIUS = 6356752.3142;

},{}],43:[function(require,module,exports){
module.exports={
  "version": "0.44.1"
}
},{}],44:[function(require,module,exports){
'use strict';// This file is generated. Edit build/generate-struct-arrays.js, then run `yarn run codegen`.
//      

var assert = require('assert');
var ref = require('../util/struct_array');
var StructArray = ref.StructArray;
var ref$1 = require('../util/struct_array');
var Struct = ref$1.Struct;
var ref$2 = require('../util/web_worker_transfer');
var register = ref$2.register;
var Point = require('@mapbox/point-geometry');


/**
 * Implementation of the StructArray layout:
 * [0]: Int16[2]
 *
 * @private
 */
var StructArrayLayout2i4 = (function (StructArray) {
    function StructArrayLayout2i4 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout2i4.__proto__ = StructArray;
    StructArrayLayout2i4.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout2i4.prototype.constructor = StructArrayLayout2i4;

    StructArrayLayout2i4.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    };

    StructArrayLayout2i4.prototype.emplaceBack = function emplaceBack (v0        , v1        ) {
        var i = this.length;
        this.resize(i + 1);
        var o2 = i * 2;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        return i;
    };

    return StructArrayLayout2i4;
}(StructArray));

StructArrayLayout2i4.prototype.bytesPerElement = 4;
register('StructArrayLayout2i4', StructArrayLayout2i4);


/**
 * Implementation of the StructArray layout:
 * [0]: Int16[4]
 *
 * @private
 */
var StructArrayLayout4i8 = (function (StructArray) {
    function StructArrayLayout4i8 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout4i8.__proto__ = StructArray;
    StructArrayLayout4i8.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout4i8.prototype.constructor = StructArrayLayout4i8;

    StructArrayLayout4i8.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    };

    StructArrayLayout4i8.prototype.emplaceBack = function emplaceBack (v0        , v1        , v2        , v3        ) {
        var i = this.length;
        this.resize(i + 1);
        var o2 = i * 4;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        return i;
    };

    return StructArrayLayout4i8;
}(StructArray));

StructArrayLayout4i8.prototype.bytesPerElement = 8;
register('StructArrayLayout4i8', StructArrayLayout4i8);


/**
 * Implementation of the StructArray layout:
 * [0]: Int16[2]
 * [4]: Int16[4]
 *
 * @private
 */
var StructArrayLayout2i4i12 = (function (StructArray) {
    function StructArrayLayout2i4i12 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout2i4i12.__proto__ = StructArray;
    StructArrayLayout2i4i12.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout2i4i12.prototype.constructor = StructArrayLayout2i4i12;

    StructArrayLayout2i4i12.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    };

    StructArrayLayout2i4i12.prototype.emplaceBack = function emplaceBack (v0        , v1        , v2        , v3        , v4        , v5        ) {
        var i = this.length;
        this.resize(i + 1);
        var o2 = i * 6;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.int16[o2 + 4] = v4;
        this.int16[o2 + 5] = v5;
        return i;
    };

    return StructArrayLayout2i4i12;
}(StructArray));

StructArrayLayout2i4i12.prototype.bytesPerElement = 12;
register('StructArrayLayout2i4i12', StructArrayLayout2i4i12);


/**
 * Implementation of the StructArray layout:
 * [0]: Int16[4]
 * [8]: Uint8[4]
 *
 * @private
 */
var StructArrayLayout4i4ub12 = (function (StructArray) {
    function StructArrayLayout4i4ub12 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout4i4ub12.__proto__ = StructArray;
    StructArrayLayout4i4ub12.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout4i4ub12.prototype.constructor = StructArrayLayout4i4ub12;

    StructArrayLayout4i4ub12.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    };

    StructArrayLayout4i4ub12.prototype.emplaceBack = function emplaceBack (v0        , v1        , v2        , v3        , v4        , v5        , v6        , v7        ) {
        var i = this.length;
        this.resize(i + 1);
        var o2 = i * 6;
        var o1 = i * 12;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.uint8[o1 + 8] = v4;
        this.uint8[o1 + 9] = v5;
        this.uint8[o1 + 10] = v6;
        this.uint8[o1 + 11] = v7;
        return i;
    };

    return StructArrayLayout4i4ub12;
}(StructArray));

StructArrayLayout4i4ub12.prototype.bytesPerElement = 12;
register('StructArrayLayout4i4ub12', StructArrayLayout4i4ub12);


/**
 * Implementation of the StructArray layout:
 * [0]: Int16[4]
 * [8]: Uint16[4]
 *
 * @private
 */
var StructArrayLayout4i4ui16 = (function (StructArray) {
    function StructArrayLayout4i4ui16 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout4i4ui16.__proto__ = StructArray;
    StructArrayLayout4i4ui16.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout4i4ui16.prototype.constructor = StructArrayLayout4i4ui16;

    StructArrayLayout4i4ui16.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    };

    StructArrayLayout4i4ui16.prototype.emplaceBack = function emplaceBack (v0        , v1        , v2        , v3        , v4        , v5        , v6        , v7        ) {
        var i = this.length;
        this.resize(i + 1);
        var o2 = i * 8;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.uint16[o2 + 4] = v4;
        this.uint16[o2 + 5] = v5;
        this.uint16[o2 + 6] = v6;
        this.uint16[o2 + 7] = v7;
        return i;
    };

    return StructArrayLayout4i4ui16;
}(StructArray));

StructArrayLayout4i4ui16.prototype.bytesPerElement = 16;
register('StructArrayLayout4i4ui16', StructArrayLayout4i4ui16);


/**
 * Implementation of the StructArray layout:
 * [0]: Float32[3]
 *
 * @private
 */
var StructArrayLayout3f12 = (function (StructArray) {
    function StructArrayLayout3f12 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout3f12.__proto__ = StructArray;
    StructArrayLayout3f12.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout3f12.prototype.constructor = StructArrayLayout3f12;

    StructArrayLayout3f12.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    };

    StructArrayLayout3f12.prototype.emplaceBack = function emplaceBack (v0        , v1        , v2        ) {
        var i = this.length;
        this.resize(i + 1);
        var o4 = i * 3;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        return i;
    };

    return StructArrayLayout3f12;
}(StructArray));

StructArrayLayout3f12.prototype.bytesPerElement = 12;
register('StructArrayLayout3f12', StructArrayLayout3f12);


/**
 * Implementation of the StructArray layout:
 * [0]: Uint32[1]
 *
 * @private
 */
var StructArrayLayout1ul4 = (function (StructArray) {
    function StructArrayLayout1ul4 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout1ul4.__proto__ = StructArray;
    StructArrayLayout1ul4.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout1ul4.prototype.constructor = StructArrayLayout1ul4;

    StructArrayLayout1ul4.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
    };

    StructArrayLayout1ul4.prototype.emplaceBack = function emplaceBack (v0        ) {
        var i = this.length;
        this.resize(i + 1);
        var o4 = i * 1;
        this.uint32[o4 + 0] = v0;
        return i;
    };

    return StructArrayLayout1ul4;
}(StructArray));

StructArrayLayout1ul4.prototype.bytesPerElement = 4;
register('StructArrayLayout1ul4', StructArrayLayout1ul4);


/**
 * Implementation of the StructArray layout:
 * [0]: Int16[6]
 * [12]: Uint32[1]
 * [16]: Uint16[2]
 * [20]: Int16[2]
 *
 * @private
 */
var StructArrayLayout6i1ul2ui2i24 = (function (StructArray) {
    function StructArrayLayout6i1ul2ui2i24 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout6i1ul2ui2i24.__proto__ = StructArray;
    StructArrayLayout6i1ul2ui2i24.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout6i1ul2ui2i24.prototype.constructor = StructArrayLayout6i1ul2ui2i24;

    StructArrayLayout6i1ul2ui2i24.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    };

    StructArrayLayout6i1ul2ui2i24.prototype.emplaceBack = function emplaceBack (v0        , v1        , v2        , v3        , v4        , v5        , v6        , v7        , v8        , v9        , v10        ) {
        var i = this.length;
        this.resize(i + 1);
        var o2 = i * 12;
        var o4 = i * 6;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.int16[o2 + 4] = v4;
        this.int16[o2 + 5] = v5;
        this.uint32[o4 + 3] = v6;
        this.uint16[o2 + 8] = v7;
        this.uint16[o2 + 9] = v8;
        this.int16[o2 + 10] = v9;
        this.int16[o2 + 11] = v10;
        return i;
    };

    return StructArrayLayout6i1ul2ui2i24;
}(StructArray));

StructArrayLayout6i1ul2ui2i24.prototype.bytesPerElement = 24;
register('StructArrayLayout6i1ul2ui2i24', StructArrayLayout6i1ul2ui2i24);


/**
 * Implementation of the StructArray layout:
 * [0]: Int16[2]
 * [4]: Int16[2]
 * [8]: Int16[2]
 *
 * @private
 */
var StructArrayLayout2i2i2i12 = (function (StructArray) {
    function StructArrayLayout2i2i2i12 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout2i2i2i12.__proto__ = StructArray;
    StructArrayLayout2i2i2i12.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout2i2i2i12.prototype.constructor = StructArrayLayout2i2i2i12;

    StructArrayLayout2i2i2i12.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    };

    StructArrayLayout2i2i2i12.prototype.emplaceBack = function emplaceBack (v0        , v1        , v2        , v3        , v4        , v5        ) {
        var i = this.length;
        this.resize(i + 1);
        var o2 = i * 6;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.int16[o2 + 4] = v4;
        this.int16[o2 + 5] = v5;
        return i;
    };

    return StructArrayLayout2i2i2i12;
}(StructArray));

StructArrayLayout2i2i2i12.prototype.bytesPerElement = 12;
register('StructArrayLayout2i2i2i12', StructArrayLayout2i2i2i12);


/**
 * Implementation of the StructArray layout:
 * [0]: Uint8[2]
 *
 * @private
 */
var StructArrayLayout2ub4 = (function (StructArray) {
    function StructArrayLayout2ub4 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout2ub4.__proto__ = StructArray;
    StructArrayLayout2ub4.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout2ub4.prototype.constructor = StructArrayLayout2ub4;

    StructArrayLayout2ub4.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
    };

    StructArrayLayout2ub4.prototype.emplaceBack = function emplaceBack (v0        , v1        ) {
        var i = this.length;
        this.resize(i + 1);
        var o1 = i * 4;
        this.uint8[o1 + 0] = v0;
        this.uint8[o1 + 1] = v1;
        return i;
    };

    return StructArrayLayout2ub4;
}(StructArray));

StructArrayLayout2ub4.prototype.bytesPerElement = 4;
register('StructArrayLayout2ub4', StructArrayLayout2ub4);


/**
 * Implementation of the StructArray layout:
 * [0]: Int16[2]
 * [4]: Uint16[2]
 * [8]: Uint32[3]
 * [20]: Uint16[3]
 * [28]: Float32[2]
 * [36]: Uint8[2]
 *
 * @private
 */
var StructArrayLayout2i2ui3ul3ui2f2ub40 = (function (StructArray) {
    function StructArrayLayout2i2ui3ul3ui2f2ub40 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout2i2ui3ul3ui2f2ub40.__proto__ = StructArray;
    StructArrayLayout2i2ui3ul3ui2f2ub40.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout2i2ui3ul3ui2f2ub40.prototype.constructor = StructArrayLayout2i2ui3ul3ui2f2ub40;

    StructArrayLayout2i2ui3ul3ui2f2ub40.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    };

    StructArrayLayout2i2ui3ul3ui2f2ub40.prototype.emplaceBack = function emplaceBack (v0        , v1        , v2        , v3        , v4        , v5        , v6        , v7        , v8        , v9        , v10        , v11        , v12        , v13        ) {
        var i = this.length;
        this.resize(i + 1);
        var o2 = i * 20;
        var o4 = i * 10;
        var o1 = i * 40;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.uint16[o2 + 2] = v2;
        this.uint16[o2 + 3] = v3;
        this.uint32[o4 + 2] = v4;
        this.uint32[o4 + 3] = v5;
        this.uint32[o4 + 4] = v6;
        this.uint16[o2 + 10] = v7;
        this.uint16[o2 + 11] = v8;
        this.uint16[o2 + 12] = v9;
        this.float32[o4 + 7] = v10;
        this.float32[o4 + 8] = v11;
        this.uint8[o1 + 36] = v12;
        this.uint8[o1 + 37] = v13;
        return i;
    };

    return StructArrayLayout2i2ui3ul3ui2f2ub40;
}(StructArray));

StructArrayLayout2i2ui3ul3ui2f2ub40.prototype.bytesPerElement = 40;
register('StructArrayLayout2i2ui3ul3ui2f2ub40', StructArrayLayout2i2ui3ul3ui2f2ub40);


/**
 * Implementation of the StructArray layout:
 * [0]: Float32[1]
 *
 * @private
 */
var StructArrayLayout1f4 = (function (StructArray) {
    function StructArrayLayout1f4 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout1f4.__proto__ = StructArray;
    StructArrayLayout1f4.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout1f4.prototype.constructor = StructArrayLayout1f4;

    StructArrayLayout1f4.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    };

    StructArrayLayout1f4.prototype.emplaceBack = function emplaceBack (v0        ) {
        var i = this.length;
        this.resize(i + 1);
        var o4 = i * 1;
        this.float32[o4 + 0] = v0;
        return i;
    };

    return StructArrayLayout1f4;
}(StructArray));

StructArrayLayout1f4.prototype.bytesPerElement = 4;
register('StructArrayLayout1f4', StructArrayLayout1f4);


/**
 * Implementation of the StructArray layout:
 * [0]: Int16[3]
 *
 * @private
 */
var StructArrayLayout3i6 = (function (StructArray) {
    function StructArrayLayout3i6 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout3i6.__proto__ = StructArray;
    StructArrayLayout3i6.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout3i6.prototype.constructor = StructArrayLayout3i6;

    StructArrayLayout3i6.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    };

    StructArrayLayout3i6.prototype.emplaceBack = function emplaceBack (v0        , v1        , v2        ) {
        var i = this.length;
        this.resize(i + 1);
        var o2 = i * 3;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        return i;
    };

    return StructArrayLayout3i6;
}(StructArray));

StructArrayLayout3i6.prototype.bytesPerElement = 6;
register('StructArrayLayout3i6', StructArrayLayout3i6);


/**
 * Implementation of the StructArray layout:
 * [0]: Uint32[1]
 * [4]: Uint16[2]
 *
 * @private
 */
var StructArrayLayout1ul2ui8 = (function (StructArray) {
    function StructArrayLayout1ul2ui8 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout1ul2ui8.__proto__ = StructArray;
    StructArrayLayout1ul2ui8.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout1ul2ui8.prototype.constructor = StructArrayLayout1ul2ui8;

    StructArrayLayout1ul2ui8.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    };

    StructArrayLayout1ul2ui8.prototype.emplaceBack = function emplaceBack (v0        , v1        , v2        ) {
        var i = this.length;
        this.resize(i + 1);
        var o4 = i * 2;
        var o2 = i * 4;
        this.uint32[o4 + 0] = v0;
        this.uint16[o2 + 2] = v1;
        this.uint16[o2 + 3] = v2;
        return i;
    };

    return StructArrayLayout1ul2ui8;
}(StructArray));

StructArrayLayout1ul2ui8.prototype.bytesPerElement = 8;
register('StructArrayLayout1ul2ui8', StructArrayLayout1ul2ui8);


/**
 * Implementation of the StructArray layout:
 * [0]: Uint16[3]
 *
 * @private
 */
var StructArrayLayout3ui6 = (function (StructArray) {
    function StructArrayLayout3ui6 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout3ui6.__proto__ = StructArray;
    StructArrayLayout3ui6.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout3ui6.prototype.constructor = StructArrayLayout3ui6;

    StructArrayLayout3ui6.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    };

    StructArrayLayout3ui6.prototype.emplaceBack = function emplaceBack (v0        , v1        , v2        ) {
        var i = this.length;
        this.resize(i + 1);
        var o2 = i * 3;
        this.uint16[o2 + 0] = v0;
        this.uint16[o2 + 1] = v1;
        this.uint16[o2 + 2] = v2;
        return i;
    };

    return StructArrayLayout3ui6;
}(StructArray));

StructArrayLayout3ui6.prototype.bytesPerElement = 6;
register('StructArrayLayout3ui6', StructArrayLayout3ui6);


/**
 * Implementation of the StructArray layout:
 * [0]: Uint16[2]
 *
 * @private
 */
var StructArrayLayout2ui4 = (function (StructArray) {
    function StructArrayLayout2ui4 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout2ui4.__proto__ = StructArray;
    StructArrayLayout2ui4.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout2ui4.prototype.constructor = StructArrayLayout2ui4;

    StructArrayLayout2ui4.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    };

    StructArrayLayout2ui4.prototype.emplaceBack = function emplaceBack (v0        , v1        ) {
        var i = this.length;
        this.resize(i + 1);
        var o2 = i * 2;
        this.uint16[o2 + 0] = v0;
        this.uint16[o2 + 1] = v1;
        return i;
    };

    return StructArrayLayout2ui4;
}(StructArray));

StructArrayLayout2ui4.prototype.bytesPerElement = 4;
register('StructArrayLayout2ui4', StructArrayLayout2ui4);


/**
 * Implementation of the StructArray layout:
 * [0]: Float32[2]
 *
 * @private
 */
var StructArrayLayout2f8 = (function (StructArray) {
    function StructArrayLayout2f8 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout2f8.__proto__ = StructArray;
    StructArrayLayout2f8.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout2f8.prototype.constructor = StructArrayLayout2f8;

    StructArrayLayout2f8.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    };

    StructArrayLayout2f8.prototype.emplaceBack = function emplaceBack (v0        , v1        ) {
        var i = this.length;
        this.resize(i + 1);
        var o4 = i * 2;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        return i;
    };

    return StructArrayLayout2f8;
}(StructArray));

StructArrayLayout2f8.prototype.bytesPerElement = 8;
register('StructArrayLayout2f8', StructArrayLayout2f8);


/**
 * Implementation of the StructArray layout:
 * [0]: Float32[4]
 *
 * @private
 */
var StructArrayLayout4f16 = (function (StructArray) {
    function StructArrayLayout4f16 () {
        StructArray.apply(this, arguments);
    }

    if ( StructArray ) StructArrayLayout4f16.__proto__ = StructArray;
    StructArrayLayout4f16.prototype = Object.create( StructArray && StructArray.prototype );
    StructArrayLayout4f16.prototype.constructor = StructArrayLayout4f16;

    StructArrayLayout4f16.prototype._refreshViews = function _refreshViews () {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    };

    StructArrayLayout4f16.prototype.emplaceBack = function emplaceBack (v0        , v1        , v2        , v3        ) {
        var i = this.length;
        this.resize(i + 1);
        var o4 = i * 4;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        this.float32[o4 + 3] = v3;
        return i;
    };

    return StructArrayLayout4f16;
}(StructArray));

StructArrayLayout4f16.prototype.bytesPerElement = 16;
register('StructArrayLayout4f16', StructArrayLayout4f16);


var CollisionBoxStruct = (function (Struct) {
    function CollisionBoxStruct () {
        Struct.apply(this, arguments);
    }

    if ( Struct ) CollisionBoxStruct.__proto__ = Struct;
    CollisionBoxStruct.prototype = Object.create( Struct && Struct.prototype );
    CollisionBoxStruct.prototype.constructor = CollisionBoxStruct;

    var prototypeAccessors = { anchorPointX: {},anchorPointY: {},x1: {},y1: {},x2: {},y2: {},featureIndex: {},sourceLayerIndex: {},bucketIndex: {},radius: {},signedDistanceFromAnchor: {},anchorPoint: {} };

    prototypeAccessors.anchorPointX.get = function () { return this._structArray.int16[this._pos2 + 0]; };
    prototypeAccessors.anchorPointX.set = function (x) { this._structArray.int16[this._pos2 + 0] = x; };
    prototypeAccessors.anchorPointY.get = function () { return this._structArray.int16[this._pos2 + 1]; };
    prototypeAccessors.anchorPointY.set = function (x) { this._structArray.int16[this._pos2 + 1] = x; };
    prototypeAccessors.x1.get = function () { return this._structArray.int16[this._pos2 + 2]; };
    prototypeAccessors.x1.set = function (x) { this._structArray.int16[this._pos2 + 2] = x; };
    prototypeAccessors.y1.get = function () { return this._structArray.int16[this._pos2 + 3]; };
    prototypeAccessors.y1.set = function (x) { this._structArray.int16[this._pos2 + 3] = x; };
    prototypeAccessors.x2.get = function () { return this._structArray.int16[this._pos2 + 4]; };
    prototypeAccessors.x2.set = function (x) { this._structArray.int16[this._pos2 + 4] = x; };
    prototypeAccessors.y2.get = function () { return this._structArray.int16[this._pos2 + 5]; };
    prototypeAccessors.y2.set = function (x) { this._structArray.int16[this._pos2 + 5] = x; };
    prototypeAccessors.featureIndex.get = function () { return this._structArray.uint32[this._pos4 + 3]; };
    prototypeAccessors.featureIndex.set = function (x) { this._structArray.uint32[this._pos4 + 3] = x; };
    prototypeAccessors.sourceLayerIndex.get = function () { return this._structArray.uint16[this._pos2 + 8]; };
    prototypeAccessors.sourceLayerIndex.set = function (x) { this._structArray.uint16[this._pos2 + 8] = x; };
    prototypeAccessors.bucketIndex.get = function () { return this._structArray.uint16[this._pos2 + 9]; };
    prototypeAccessors.bucketIndex.set = function (x) { this._structArray.uint16[this._pos2 + 9] = x; };
    prototypeAccessors.radius.get = function () { return this._structArray.int16[this._pos2 + 10]; };
    prototypeAccessors.radius.set = function (x) { this._structArray.int16[this._pos2 + 10] = x; };
    prototypeAccessors.signedDistanceFromAnchor.get = function () { return this._structArray.int16[this._pos2 + 11]; };
    prototypeAccessors.signedDistanceFromAnchor.set = function (x) { this._structArray.int16[this._pos2 + 11] = x; };
    prototypeAccessors.anchorPoint.get = function () { return new Point(this.anchorPointX, this.anchorPointY); };

    Object.defineProperties( CollisionBoxStruct.prototype, prototypeAccessors );

    return CollisionBoxStruct;
}(Struct));

CollisionBoxStruct.prototype.size = 24;

                                              


/**
 * @private
 */
var CollisionBoxArray = (function (StructArrayLayout6i1ul2ui2i24) {
    function CollisionBoxArray () {
        StructArrayLayout6i1ul2ui2i24.apply(this, arguments);
    }

    if ( StructArrayLayout6i1ul2ui2i24 ) CollisionBoxArray.__proto__ = StructArrayLayout6i1ul2ui2i24;
    CollisionBoxArray.prototype = Object.create( StructArrayLayout6i1ul2ui2i24 && StructArrayLayout6i1ul2ui2i24.prototype );
    CollisionBoxArray.prototype.constructor = CollisionBoxArray;

    CollisionBoxArray.prototype.get = function get (index        )                     {
        assert(!this.isTransferred);
        return new CollisionBoxStruct(this, index);
    };

    return CollisionBoxArray;
}(StructArrayLayout6i1ul2ui2i24));

register('CollisionBoxArray', CollisionBoxArray);

var PlacedSymbolStruct = (function (Struct) {
    function PlacedSymbolStruct () {
        Struct.apply(this, arguments);
    }

    if ( Struct ) PlacedSymbolStruct.__proto__ = Struct;
    PlacedSymbolStruct.prototype = Object.create( Struct && Struct.prototype );
    PlacedSymbolStruct.prototype.constructor = PlacedSymbolStruct;

    var prototypeAccessors$1 = { anchorX: {},anchorY: {},glyphStartIndex: {},numGlyphs: {},vertexStartIndex: {},lineStartIndex: {},lineLength: {},segment: {},lowerSize: {},upperSize: {},lineOffsetX: {},lineOffsetY: {},writingMode: {},hidden: {} };

    prototypeAccessors$1.anchorX.get = function () { return this._structArray.int16[this._pos2 + 0]; };
    prototypeAccessors$1.anchorX.set = function (x) { this._structArray.int16[this._pos2 + 0] = x; };
    prototypeAccessors$1.anchorY.get = function () { return this._structArray.int16[this._pos2 + 1]; };
    prototypeAccessors$1.anchorY.set = function (x) { this._structArray.int16[this._pos2 + 1] = x; };
    prototypeAccessors$1.glyphStartIndex.get = function () { return this._structArray.uint16[this._pos2 + 2]; };
    prototypeAccessors$1.glyphStartIndex.set = function (x) { this._structArray.uint16[this._pos2 + 2] = x; };
    prototypeAccessors$1.numGlyphs.get = function () { return this._structArray.uint16[this._pos2 + 3]; };
    prototypeAccessors$1.numGlyphs.set = function (x) { this._structArray.uint16[this._pos2 + 3] = x; };
    prototypeAccessors$1.vertexStartIndex.get = function () { return this._structArray.uint32[this._pos4 + 2]; };
    prototypeAccessors$1.vertexStartIndex.set = function (x) { this._structArray.uint32[this._pos4 + 2] = x; };
    prototypeAccessors$1.lineStartIndex.get = function () { return this._structArray.uint32[this._pos4 + 3]; };
    prototypeAccessors$1.lineStartIndex.set = function (x) { this._structArray.uint32[this._pos4 + 3] = x; };
    prototypeAccessors$1.lineLength.get = function () { return this._structArray.uint32[this._pos4 + 4]; };
    prototypeAccessors$1.lineLength.set = function (x) { this._structArray.uint32[this._pos4 + 4] = x; };
    prototypeAccessors$1.segment.get = function () { return this._structArray.uint16[this._pos2 + 10]; };
    prototypeAccessors$1.segment.set = function (x) { this._structArray.uint16[this._pos2 + 10] = x; };
    prototypeAccessors$1.lowerSize.get = function () { return this._structArray.uint16[this._pos2 + 11]; };
    prototypeAccessors$1.lowerSize.set = function (x) { this._structArray.uint16[this._pos2 + 11] = x; };
    prototypeAccessors$1.upperSize.get = function () { return this._structArray.uint16[this._pos2 + 12]; };
    prototypeAccessors$1.upperSize.set = function (x) { this._structArray.uint16[this._pos2 + 12] = x; };
    prototypeAccessors$1.lineOffsetX.get = function () { return this._structArray.float32[this._pos4 + 7]; };
    prototypeAccessors$1.lineOffsetX.set = function (x) { this._structArray.float32[this._pos4 + 7] = x; };
    prototypeAccessors$1.lineOffsetY.get = function () { return this._structArray.float32[this._pos4 + 8]; };
    prototypeAccessors$1.lineOffsetY.set = function (x) { this._structArray.float32[this._pos4 + 8] = x; };
    prototypeAccessors$1.writingMode.get = function () { return this._structArray.uint8[this._pos1 + 36]; };
    prototypeAccessors$1.writingMode.set = function (x) { this._structArray.uint8[this._pos1 + 36] = x; };
    prototypeAccessors$1.hidden.get = function () { return this._structArray.uint8[this._pos1 + 37]; };
    prototypeAccessors$1.hidden.set = function (x) { this._structArray.uint8[this._pos1 + 37] = x; };

    Object.defineProperties( PlacedSymbolStruct.prototype, prototypeAccessors$1 );

    return PlacedSymbolStruct;
}(Struct));

PlacedSymbolStruct.prototype.size = 40;

                                              


/**
 * @private
 */
var PlacedSymbolArray = (function (StructArrayLayout2i2ui3ul3ui2f2ub40) {
    function PlacedSymbolArray () {
        StructArrayLayout2i2ui3ul3ui2f2ub40.apply(this, arguments);
    }

    if ( StructArrayLayout2i2ui3ul3ui2f2ub40 ) PlacedSymbolArray.__proto__ = StructArrayLayout2i2ui3ul3ui2f2ub40;
    PlacedSymbolArray.prototype = Object.create( StructArrayLayout2i2ui3ul3ui2f2ub40 && StructArrayLayout2i2ui3ul3ui2f2ub40.prototype );
    PlacedSymbolArray.prototype.constructor = PlacedSymbolArray;

    PlacedSymbolArray.prototype.get = function get (index        )                     {
        assert(!this.isTransferred);
        return new PlacedSymbolStruct(this, index);
    };

    return PlacedSymbolArray;
}(StructArrayLayout2i2ui3ul3ui2f2ub40));

register('PlacedSymbolArray', PlacedSymbolArray);

var GlyphOffsetStruct = (function (Struct) {
    function GlyphOffsetStruct () {
        Struct.apply(this, arguments);
    }

    if ( Struct ) GlyphOffsetStruct.__proto__ = Struct;
    GlyphOffsetStruct.prototype = Object.create( Struct && Struct.prototype );
    GlyphOffsetStruct.prototype.constructor = GlyphOffsetStruct;

    var prototypeAccessors$2 = { offsetX: {} };

    prototypeAccessors$2.offsetX.get = function () { return this._structArray.float32[this._pos4 + 0]; };
    prototypeAccessors$2.offsetX.set = function (x) { this._structArray.float32[this._pos4 + 0] = x; };

    Object.defineProperties( GlyphOffsetStruct.prototype, prototypeAccessors$2 );

    return GlyphOffsetStruct;
}(Struct));

GlyphOffsetStruct.prototype.size = 4;

                                            


/**
 * @private
 */
var GlyphOffsetArray = (function (StructArrayLayout1f4) {
    function GlyphOffsetArray () {
        StructArrayLayout1f4.apply(this, arguments);
    }

    if ( StructArrayLayout1f4 ) GlyphOffsetArray.__proto__ = StructArrayLayout1f4;
    GlyphOffsetArray.prototype = Object.create( StructArrayLayout1f4 && StructArrayLayout1f4.prototype );
    GlyphOffsetArray.prototype.constructor = GlyphOffsetArray;

    GlyphOffsetArray.prototype.getoffsetX = function getoffsetX (index        ) { return this.float32[index * 1 + 0]; };
    /**
     * Return the GlyphOffsetStruct at the given location in the array.
     * @param {number} index The index of the element.
     */
    GlyphOffsetArray.prototype.get = function get (index        )                    {
        assert(!this.isTransferred);
        return new GlyphOffsetStruct(this, index);
    };

    return GlyphOffsetArray;
}(StructArrayLayout1f4));

register('GlyphOffsetArray', GlyphOffsetArray);

var SymbolLineVertexStruct = (function (Struct) {
    function SymbolLineVertexStruct () {
        Struct.apply(this, arguments);
    }

    if ( Struct ) SymbolLineVertexStruct.__proto__ = Struct;
    SymbolLineVertexStruct.prototype = Object.create( Struct && Struct.prototype );
    SymbolLineVertexStruct.prototype.constructor = SymbolLineVertexStruct;

    var prototypeAccessors$3 = { x: {},y: {},tileUnitDistanceFromAnchor: {} };

    prototypeAccessors$3.x.get = function () { return this._structArray.int16[this._pos2 + 0]; };
    prototypeAccessors$3.x.set = function (x) { this._structArray.int16[this._pos2 + 0] = x; };
    prototypeAccessors$3.y.get = function () { return this._structArray.int16[this._pos2 + 1]; };
    prototypeAccessors$3.y.set = function (x) { this._structArray.int16[this._pos2 + 1] = x; };
    prototypeAccessors$3.tileUnitDistanceFromAnchor.get = function () { return this._structArray.int16[this._pos2 + 2]; };
    prototypeAccessors$3.tileUnitDistanceFromAnchor.set = function (x) { this._structArray.int16[this._pos2 + 2] = x; };

    Object.defineProperties( SymbolLineVertexStruct.prototype, prototypeAccessors$3 );

    return SymbolLineVertexStruct;
}(Struct));

SymbolLineVertexStruct.prototype.size = 6;

                                                      


/**
 * @private
 */
var SymbolLineVertexArray = (function (StructArrayLayout3i6) {
    function SymbolLineVertexArray () {
        StructArrayLayout3i6.apply(this, arguments);
    }

    if ( StructArrayLayout3i6 ) SymbolLineVertexArray.__proto__ = StructArrayLayout3i6;
    SymbolLineVertexArray.prototype = Object.create( StructArrayLayout3i6 && StructArrayLayout3i6.prototype );
    SymbolLineVertexArray.prototype.constructor = SymbolLineVertexArray;

    SymbolLineVertexArray.prototype.getx = function getx (index        ) { return this.int16[index * 3 + 0]; };
    SymbolLineVertexArray.prototype.gety = function gety (index        ) { return this.int16[index * 3 + 1]; };
    SymbolLineVertexArray.prototype.gettileUnitDistanceFromAnchor = function gettileUnitDistanceFromAnchor (index        ) { return this.int16[index * 3 + 2]; };
    /**
     * Return the SymbolLineVertexStruct at the given location in the array.
     * @param {number} index The index of the element.
     */
    SymbolLineVertexArray.prototype.get = function get (index        )                         {
        assert(!this.isTransferred);
        return new SymbolLineVertexStruct(this, index);
    };

    return SymbolLineVertexArray;
}(StructArrayLayout3i6));

register('SymbolLineVertexArray', SymbolLineVertexArray);

var FeatureIndexStruct = (function (Struct) {
    function FeatureIndexStruct () {
        Struct.apply(this, arguments);
    }

    if ( Struct ) FeatureIndexStruct.__proto__ = Struct;
    FeatureIndexStruct.prototype = Object.create( Struct && Struct.prototype );
    FeatureIndexStruct.prototype.constructor = FeatureIndexStruct;

    var prototypeAccessors$4 = { featureIndex: {},sourceLayerIndex: {},bucketIndex: {} };

    prototypeAccessors$4.featureIndex.get = function () { return this._structArray.uint32[this._pos4 + 0]; };
    prototypeAccessors$4.featureIndex.set = function (x) { this._structArray.uint32[this._pos4 + 0] = x; };
    prototypeAccessors$4.sourceLayerIndex.get = function () { return this._structArray.uint16[this._pos2 + 2]; };
    prototypeAccessors$4.sourceLayerIndex.set = function (x) { this._structArray.uint16[this._pos2 + 2] = x; };
    prototypeAccessors$4.bucketIndex.get = function () { return this._structArray.uint16[this._pos2 + 3]; };
    prototypeAccessors$4.bucketIndex.set = function (x) { this._structArray.uint16[this._pos2 + 3] = x; };

    Object.defineProperties( FeatureIndexStruct.prototype, prototypeAccessors$4 );

    return FeatureIndexStruct;
}(Struct));

FeatureIndexStruct.prototype.size = 8;

                                              


/**
 * @private
 */
var FeatureIndexArray = (function (StructArrayLayout1ul2ui8) {
    function FeatureIndexArray () {
        StructArrayLayout1ul2ui8.apply(this, arguments);
    }

    if ( StructArrayLayout1ul2ui8 ) FeatureIndexArray.__proto__ = StructArrayLayout1ul2ui8;
    FeatureIndexArray.prototype = Object.create( StructArrayLayout1ul2ui8 && StructArrayLayout1ul2ui8.prototype );
    FeatureIndexArray.prototype.constructor = FeatureIndexArray;

    FeatureIndexArray.prototype.get = function get (index        )                     {
        assert(!this.isTransferred);
        return new FeatureIndexStruct(this, index);
    };

    return FeatureIndexArray;
}(StructArrayLayout1ul2ui8));

register('FeatureIndexArray', FeatureIndexArray);


module.exports = {
    StructArrayLayout2i4: StructArrayLayout2i4,
    StructArrayLayout4i8: StructArrayLayout4i8,
    StructArrayLayout2i4i12: StructArrayLayout2i4i12,
    StructArrayLayout4i4ub12: StructArrayLayout4i4ub12,
    StructArrayLayout4i4ui16: StructArrayLayout4i4ui16,
    StructArrayLayout3f12: StructArrayLayout3f12,
    StructArrayLayout1ul4: StructArrayLayout1ul4,
    StructArrayLayout6i1ul2ui2i24: StructArrayLayout6i1ul2ui2i24,
    StructArrayLayout2i2i2i12: StructArrayLayout2i2i2i12,
    StructArrayLayout2ub4: StructArrayLayout2ub4,
    StructArrayLayout2i2ui3ul3ui2f2ub40: StructArrayLayout2i2ui3ul3ui2f2ub40,
    StructArrayLayout1f4: StructArrayLayout1f4,
    StructArrayLayout3i6: StructArrayLayout3i6,
    StructArrayLayout1ul2ui8: StructArrayLayout1ul2ui8,
    StructArrayLayout3ui6: StructArrayLayout3ui6,
    StructArrayLayout2ui4: StructArrayLayout2ui4,
    StructArrayLayout2f8: StructArrayLayout2f8,
    StructArrayLayout4f16: StructArrayLayout4f16,
    PosArray: StructArrayLayout2i4,
    RasterBoundsArray: StructArrayLayout4i8,
    CircleLayoutArray: StructArrayLayout2i4,
    FillLayoutArray: StructArrayLayout2i4,
    FillExtrusionLayoutArray: StructArrayLayout2i4i12,
    HeatmapLayoutArray: StructArrayLayout2i4,
    LineLayoutArray: StructArrayLayout4i4ub12,
    SymbolLayoutArray: StructArrayLayout4i4ui16,
    SymbolDynamicLayoutArray: StructArrayLayout3f12,
    SymbolOpacityArray: StructArrayLayout1ul4,
    CollisionBoxLayoutArray: StructArrayLayout2i2i2i12,
    CollisionCircleLayoutArray: StructArrayLayout2i2i2i12,
    CollisionVertexArray: StructArrayLayout2ub4,
    TriangleIndexArray: StructArrayLayout3ui6,
    LineIndexArray: StructArrayLayout2ui4,
    CollisionBoxArray: CollisionBoxArray,
    PlacedSymbolArray: PlacedSymbolArray,
    GlyphOffsetArray: GlyphOffsetArray,
    SymbolLineVertexArray: SymbolLineVertexArray,
    FeatureIndexArray: FeatureIndexArray
};

},{"../util/struct_array":276,"../util/web_worker_transfer":283,"@mapbox/point-geometry":4,"assert":13}],45:[function(require,module,exports){
'use strict';//      

                                                     
                                        
                                                                            
                                                
                                         

                                                        
                  
                         
                 
                       
                        
                                        
 

                                  
                               
                         
                         
 

                              
                               
                  
                             
 

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
    deserialize: function deserialize(input               , style       )                     {
        var output = {};

        // Guard against the case where the map's style has been set to null while
        // this bucket has been parsing.
        if (!style) { return output; }

        for (var i = 0, list = input; i < list.length; i += 1) {
            var bucket = list[i];

            var layers = bucket.layerIds
                .map(function (id) { return style.getLayer(id); })
                .filter(Boolean);

            if (layers.length === 0) {
                continue;
            }

            // look up StyleLayer objects from layer ids (since we don't
            // want to waste time serializing/copying them from the worker)
            (bucket     ).layers = layers;

            for (var i$1 = 0, list$1 = layers; i$1 < list$1.length; i$1 += 1) {
                var layer = list$1[i$1];

                output[layer.id] = bucket;
            }
        }

        return output;
    }
};

},{}],46:[function(require,module,exports){
'use strict';//      
var ref = require('../../util/struct_array');
var createLayout = ref.createLayout;
module.exports = createLayout([
    {name: 'a_pos', components: 2, type: 'Int16'}
], 4);

},{"../../util/struct_array":276}],47:[function(require,module,exports){
'use strict';//      

var ref = require('../array_types');
var CircleLayoutArray = ref.CircleLayoutArray;
var layoutAttributes = require('./circle_attributes').members;
var ref$1 = require('../segment');
var SegmentVector = ref$1.SegmentVector;
var ref$2 = require('../program_configuration');
var ProgramConfigurationSet = ref$2.ProgramConfigurationSet;
var ref$3 = require('../index_array_type');
var TriangleIndexArray = ref$3.TriangleIndexArray;
var loadGeometry = require('../load_geometry');
var EXTENT = require('../extent');
var ref$4 = require('../../util/web_worker_transfer');
var register = ref$4.register;

             
           
                     
                   
                      
                   
                                                                               
                                                                                 
                                            
                                                     
                                                       
                                                

function addCircleVertex(layoutVertexArray, x, y, extrudeX, extrudeY) {
    layoutVertexArray.emplaceBack(
        (x * 2) + ((extrudeX + 1) / 2),
        (y * 2) + ((extrudeY + 1) / 2));
}


/**
 * Circles are represented by two triangles.
 *
 * Each corner has a pos that is the center of the circle and an extrusion
 * vector that is where it points.
 * @private
 */
var CircleBucket = function CircleBucket(options                     ) {
    this.zoom = options.zoom;
    this.overscaling = options.overscaling;
    this.layers = options.layers;
    this.layerIds = this.layers.map(function (layer) { return layer.id; });
    this.index = options.index;

    this.layoutVertexArray = new CircleLayoutArray();
    this.indexArray = new TriangleIndexArray();
    this.segments = new SegmentVector();
    this.programConfigurations = new ProgramConfigurationSet(layoutAttributes, options.layers, options.zoom);
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

CircleBucket.prototype.upload = function upload (context     ) {
    this.layoutVertexBuffer = context.createVertexBuffer(this.layoutVertexArray, layoutAttributes);
    this.indexBuffer = context.createIndexBuffer(this.indexArray);
    this.programConfigurations.upload(context);
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
            // ┌─────────┐
            // │ 3 2 │
            // │     │
            // │ 0 1 │
            // └─────────┘

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

register('CircleBucket', CircleBucket, {omit: ['layers']});

module.exports = CircleBucket;

},{"../../util/web_worker_transfer":283,"../array_types":44,"../extent":58,"../index_array_type":60,"../load_geometry":61,"../program_configuration":63,"../segment":65,"./circle_attributes":46}],48:[function(require,module,exports){
'use strict';//      
var ref = require('../../util/struct_array');
var createLayout = ref.createLayout;
module.exports = createLayout([
    {name: 'a_pos', components: 2, type: 'Int16'}
], 4);

},{"../../util/struct_array":276}],49:[function(require,module,exports){
'use strict';//      

var ref = require('../array_types');
var FillLayoutArray = ref.FillLayoutArray;
var layoutAttributes = require('./fill_attributes').members;
var ref$1 = require('../segment');
var SegmentVector = ref$1.SegmentVector;
var ref$2 = require('../program_configuration');
var ProgramConfigurationSet = ref$2.ProgramConfigurationSet;
var ref$3 = require('../index_array_type');
var LineIndexArray = ref$3.LineIndexArray;
var TriangleIndexArray = ref$3.TriangleIndexArray;
var loadGeometry = require('../load_geometry');
var earcut = require('earcut');
var classifyRings = require('../../util/classify_rings');
var assert = require('assert');
var EARCUT_MAX_RINGS = 500;
var ref$4 = require('../../util/web_worker_transfer');
var register = ref$4.register;

             
           
                     
                   
                      
                   
                                                                           
                                            
                                                     
                                                       
                                                

var FillBucket = function FillBucket(options                              ) {
    this.zoom = options.zoom;
    this.overscaling = options.overscaling;
    this.layers = options.layers;
    this.layerIds = this.layers.map(function (layer) { return layer.id; });
    this.index = options.index;

    this.layoutVertexArray = new FillLayoutArray();
    this.indexArray = new TriangleIndexArray();
    this.indexArray2 = new LineIndexArray();
    this.programConfigurations = new ProgramConfigurationSet(layoutAttributes, options.layers, options.zoom);
    this.segments = new SegmentVector();
    this.segments2 = new SegmentVector();
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

FillBucket.prototype.upload = function upload (context     ) {
    this.layoutVertexBuffer = context.createVertexBuffer(this.layoutVertexArray, layoutAttributes);
    this.indexBuffer = context.createIndexBuffer(this.indexArray);
    this.indexBuffer2 = context.createIndexBuffer(this.indexArray2);
    this.programConfigurations.upload(context);
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

register('FillBucket', FillBucket, {omit: ['layers']});

module.exports = FillBucket;

},{"../../util/classify_rings":260,"../../util/web_worker_transfer":283,"../array_types":44,"../index_array_type":60,"../load_geometry":61,"../program_configuration":63,"../segment":65,"./fill_attributes":48,"assert":13,"earcut":15}],50:[function(require,module,exports){
'use strict';//      
var ref = require('../../util/struct_array');
var createLayout = ref.createLayout;
module.exports = createLayout([
    {name: 'a_pos',          components: 2, type: 'Int16'},
    {name: 'a_normal_ed',    components: 4, type: 'Int16'} ], 4);

},{"../../util/struct_array":276}],51:[function(require,module,exports){
'use strict';//      

var ref = require('../array_types');
var FillExtrusionLayoutArray = ref.FillExtrusionLayoutArray;
var layoutAttributes = require('./fill_extrusion_attributes').members;
var ref$1 = require('../segment');
var SegmentVector = ref$1.SegmentVector;
var MAX_VERTEX_ARRAY_LENGTH = ref$1.MAX_VERTEX_ARRAY_LENGTH;
var ref$2 = require('../program_configuration');
var ProgramConfigurationSet = ref$2.ProgramConfigurationSet;
var ref$3 = require('../index_array_type');
var TriangleIndexArray = ref$3.TriangleIndexArray;
var loadGeometry = require('../load_geometry');
var EXTENT = require('../extent');
var earcut = require('earcut');
var classifyRings = require('../../util/classify_rings');
var assert = require('assert');
var EARCUT_MAX_RINGS = 500;
var ref$4 = require('../../util/web_worker_transfer');
var register = ref$4.register;

             
           
                     
                   
                      
                   
                                                                                              
                                            
                                                     
                                                       
                                                

var FACTOR = Math.pow(2, 13);

function addVertex(vertexArray, x, y, nx, ny, nz, t, e) {
    vertexArray.emplaceBack(
        // a_pos
        x,
        y,
        // a_normal_ed: 3-component normal and 1-component edgedistance
        Math.floor(nx * FACTOR) * 2 + t,
        ny * FACTOR * 2,
        nz * FACTOR * 2,
        // edgedistance (used for wrapping patterns around extrusion sides)
        Math.round(e)
    );
}


var FillExtrusionBucket = function FillExtrusionBucket(options                                       ) {
    this.zoom = options.zoom;
    this.overscaling = options.overscaling;
    this.layers = options.layers;
    this.layerIds = this.layers.map(function (layer) { return layer.id; });
    this.index = options.index;

    this.layoutVertexArray = new FillExtrusionLayoutArray();
    this.indexArray = new TriangleIndexArray();
    this.programConfigurations = new ProgramConfigurationSet(layoutAttributes, options.layers, options.zoom);
    this.segments = new SegmentVector();
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

FillExtrusionBucket.prototype.upload = function upload (context     ) {
    this.layoutVertexBuffer = context.createVertexBuffer(this.layoutVertexArray, layoutAttributes);
    this.indexBuffer = context.createIndexBuffer(this.indexArray);
    this.programConfigurations.upload(context);
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

            if (isEntirelyOutside(ring$1)) {
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
                        var dist = p2.dist(p1);
                        if (edgeDistance + dist > 32768) { edgeDistance = 0; }

                        addVertex(this$1.layoutVertexArray, p1.x, p1.y, perp.x, perp.y, 0, 0, edgeDistance);
                        addVertex(this$1.layoutVertexArray, p1.x, p1.y, perp.x, perp.y, 0, 1, edgeDistance);

                        edgeDistance += dist;

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

register('FillExtrusionBucket', FillExtrusionBucket, {omit: ['layers']});

module.exports = FillExtrusionBucket;

function isBoundaryEdge(p1, p2) {
    return (p1.x === p2.x && (p1.x < 0 || p1.x > EXTENT)) ||
        (p1.y === p2.y && (p1.y < 0 || p1.y > EXTENT));
}

function isEntirelyOutside(ring) {
    return ring.every(function (p) { return p.x < 0; }) ||
        ring.every(function (p) { return p.x > EXTENT; }) ||
        ring.every(function (p) { return p.y < 0; }) ||
        ring.every(function (p) { return p.y > EXTENT; });
}

},{"../../util/classify_rings":260,"../../util/web_worker_transfer":283,"../array_types":44,"../extent":58,"../index_array_type":60,"../load_geometry":61,"../program_configuration":63,"../segment":65,"./fill_extrusion_attributes":50,"assert":13,"earcut":15}],52:[function(require,module,exports){
'use strict';//      

var CircleBucket = require('./circle_bucket');
var ref = require('../../util/web_worker_transfer');
var register = ref.register;

                                                                                 

var HeatmapBucket = (function (CircleBucket) {
    function HeatmapBucket () {
        CircleBucket.apply(this, arguments);
    }if ( CircleBucket ) HeatmapBucket.__proto__ = CircleBucket;
    HeatmapBucket.prototype = Object.create( CircleBucket && CircleBucket.prototype );
    HeatmapBucket.prototype.constructor = HeatmapBucket;

    

    return HeatmapBucket;
}(CircleBucket));

register('HeatmapBucket', HeatmapBucket, {omit: ['layers']});

module.exports = HeatmapBucket;

},{"../../util/web_worker_transfer":283,"./circle_bucket":47}],53:[function(require,module,exports){
'use strict';//      
var ref = require('../../util/struct_array');
var createLayout = ref.createLayout;
module.exports = createLayout([
    {name: 'a_pos_normal', components: 4, type: 'Int16'},
    {name: 'a_data', components: 4, type: 'Uint8'}
], 4);

},{"../../util/struct_array":276}],54:[function(require,module,exports){
'use strict';//      

var ref = require('../array_types');
var LineLayoutArray = ref.LineLayoutArray;
var layoutAttributes = require('./line_attributes').members;
var ref$1 = require('../segment');
var SegmentVector = ref$1.SegmentVector;
var ref$2 = require('../program_configuration');
var ProgramConfigurationSet = ref$2.ProgramConfigurationSet;
var ref$3 = require('../index_array_type');
var TriangleIndexArray = ref$3.TriangleIndexArray;
var loadGeometry = require('../load_geometry');
var EXTENT = require('../extent');
var vectorTileFeatureTypes = require('@mapbox/vector-tile').VectorTileFeature.types;
var ref$4 = require('../../util/web_worker_transfer');
var register = ref$4.register;

             
           
                     
                   
                      
                   
                                                                           
                                                
                                        
                                            
                                                     
                                                       

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


/**
 * @private
 */
var LineBucket = function LineBucket(options                              ) {
    this.zoom = options.zoom;
    this.overscaling = options.overscaling;
    this.layers = options.layers;
    this.layerIds = this.layers.map(function (layer) { return layer.id; });
    this.index = options.index;

    this.layoutVertexArray = new LineLayoutArray();
    this.indexArray = new TriangleIndexArray();
    this.programConfigurations = new ProgramConfigurationSet(layoutAttributes, options.layers, options.zoom);
    this.segments = new SegmentVector();
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

LineBucket.prototype.upload = function upload (context     ) {
    this.layoutVertexBuffer = context.createVertexBuffer(this.layoutVertexArray, layoutAttributes);
    this.indexBuffer = context.createIndexBuffer(this.indexArray);
    this.programConfigurations.upload(context);
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
        // In the case of 180° angles, the prev and next normals cancel each other out:
        // prevNormal + nextNormal = (0, 0), its magnitude is 0, so the unit vector would be
        // undefined. In that case, we're keeping the joinNormal at (0, 0), so that the cosHalfAngle
        // below will also become 0 and miterLength will become Infinity.
        var joinNormal = prevNormal.add(nextNormal);
        if (joinNormal.x !== 0 || joinNormal.y !== 0) {
            joinNormal._unit();
        }
        /*  joinNormal prevNormal
         *         ↖  ↑
         *            .________. prevVertex
         *            |
         * nextNormal  ←  |  currentVertex
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

register('LineBucket', LineBucket, {omit: ['layers']});

module.exports = LineBucket;

},{"../../util/web_worker_transfer":283,"../array_types":44,"../extent":58,"../index_array_type":60,"../load_geometry":61,"../program_configuration":63,"../segment":65,"./line_attributes":53,"@mapbox/vector-tile":8}],55:[function(require,module,exports){
'use strict';//      

var ref = require('../../util/struct_array');
var createLayout = ref.createLayout;
                                                               

var symbolLayoutAttributes = createLayout([
    {name: 'a_pos_offset',  components: 4, type: 'Int16'},
    {name: 'a_data',        components: 4, type: 'Uint16'}
]);

var dynamicLayoutAttributes = createLayout([
    { name: 'a_projected_pos', components: 3, type: 'Float32' }
], 4);

var placementOpacityAttributes = createLayout([
    { name: 'a_fade_opacity', components: 1, type: 'Uint32' }
], 4);

var collisionVertexAttributes = createLayout([
    { name: 'a_placed', components: 2, type: 'Uint8' }
], 4);

var symbolAttributes                                = {
    symbolLayoutAttributes: symbolLayoutAttributes,
    dynamicLayoutAttributes: dynamicLayoutAttributes,
    placementOpacityAttributes: placementOpacityAttributes,
    collisionVertexAttributes: collisionVertexAttributes,
    collisionBox: createLayout([
        // the box is centered around the anchor point
        { type: 'Int16', name: 'anchorPointX' },
        { type: 'Int16', name: 'anchorPointY' },

        // distances to the edges from the anchor
        { type: 'Int16', name: 'x1' },
        { type: 'Int16', name: 'y1' },
        { type: 'Int16', name: 'x2' },
        { type: 'Int16', name: 'y2' },

        // the index of the feature in the original vectortile
        { type: 'Uint32', name: 'featureIndex' },
        // the source layer the feature appears in
        { type: 'Uint16', name: 'sourceLayerIndex' },
        // the bucket the feature appears in
        { type: 'Uint16', name: 'bucketIndex' },

        // collision circles for lines store their distance to the anchor in tile units
        // so that they can be ignored if the projected label doesn't extend into
        // the box area
        { type: 'Int16', name: 'radius' },
        { type: 'Int16', name: 'signedDistanceFromAnchor' }
    ]),
    collisionBoxLayout: createLayout([ // used to render collision boxes for debugging purposes
        {name: 'a_pos',        components: 2, type: 'Int16'},
        {name: 'a_anchor_pos', components: 2, type: 'Int16'},
        {name: 'a_extrude',    components: 2, type: 'Int16'}
    ], 4),
    collisionCircleLayout: createLayout([ // used to render collision circles for debugging purposes
        {name: 'a_pos',        components: 2, type: 'Int16'},
        {name: 'a_anchor_pos', components: 2, type: 'Int16'},
        {name: 'a_extrude',    components: 2, type: 'Int16'}
    ], 4),
    placement: createLayout([
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
    ]),
    glyphOffset: createLayout([
        { type: 'Float32', name: 'offsetX' }
    ]),
    lineVertex: createLayout([
        { type: 'Int16', name: 'x' },
        { type: 'Int16', name: 'y' },
        { type: 'Int16', name: 'tileUnitDistanceFromAnchor' }
    ])
};

module.exports = symbolAttributes;

},{"../../util/struct_array":276}],56:[function(require,module,exports){
'use strict';//      

var ref = require('./symbol_attributes');
var symbolLayoutAttributes = ref.symbolLayoutAttributes;
var collisionVertexAttributes = ref.collisionVertexAttributes;
var collisionBoxLayout = ref.collisionBoxLayout;
var collisionCircleLayout = ref.collisionCircleLayout;
var dynamicLayoutAttributes = ref.dynamicLayoutAttributes;

var ref$1 = require('../array_types');
var SymbolLayoutArray = ref$1.SymbolLayoutArray;
var SymbolDynamicLayoutArray = ref$1.SymbolDynamicLayoutArray;
var SymbolOpacityArray = ref$1.SymbolOpacityArray;
var CollisionBoxLayoutArray = ref$1.CollisionBoxLayoutArray;
var CollisionCircleLayoutArray = ref$1.CollisionCircleLayoutArray;
var CollisionVertexArray = ref$1.CollisionVertexArray;
var PlacedSymbolArray = ref$1.PlacedSymbolArray;
var GlyphOffsetArray = ref$1.GlyphOffsetArray;
var SymbolLineVertexArray = ref$1.SymbolLineVertexArray;

var Point = require('@mapbox/point-geometry');
var ref$2 = require('../segment');
var SegmentVector = ref$2.SegmentVector;
var ref$3 = require('../program_configuration');
var ProgramConfigurationSet = ref$3.ProgramConfigurationSet;
var ref$4 = require('../index_array_type');
var TriangleIndexArray = ref$4.TriangleIndexArray;
var LineIndexArray = ref$4.LineIndexArray;
var transformText = require('../../symbol/transform_text');
var mergeLines = require('../../symbol/mergelines');
var scriptDetection = require('../../util/script_detection');
var loadGeometry = require('../load_geometry');
var vectorTileFeatureTypes = require('@mapbox/vector-tile').VectorTileFeature.types;
var verticalizePunctuation = require('../../util/verticalize_punctuation');
var Anchor = require('../../symbol/anchor');
var ref$5 = require('../../symbol/symbol_size');
var getSizeData = ref$5.getSizeData;
var ref$6 = require('../../util/web_worker_transfer');
var register = ref$6.register;

                                                                              
             
           
                     
                   
                      
                   
                                                                    
                                                                              
                                                                               
                                            
                                                     
                                                       
                                                   
                                                       

                                  
               
               
               
               
                         
                         
  

                               
                                 
                                 
                                
  

                              
                
                              
                            
                              
                            
                                 
                                 
                   
                       
                         
                               
                                                                        
                                                                        
                                           
                             
                                     
                            
                                                        
                         
                        
                                      
                         
                         
                     
  

                              
                        
                        
                  
                             
                                  
                       
                                             
            
   

// Opacity arrays are frequently updated but don't contain a lot of information, so we pack them
// tight. Each Uint32 is actually four duplicate Uint8s for the four corners of a glyph
// 7 bits are for the current opacity, and the lowest bit is the target opacity

// actually defined in symbol_attributes.js
// const placementOpacityAttributes = [
//     { name: 'a_fade_opacity', components: 1, type: 'Uint32' }
// ];
var shaderOpacityAttributes = [
    { name: 'a_fade_opacity', components: 1, type: 'Uint8', offset: 0 }
];

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
        sizeVertex ? sizeVertex[0] : 0,
        sizeVertex ? sizeVertex[1] : 0
    );
}

function addDynamicAttributes(dynamicLayoutVertexArray             , p       , angle        ) {
    dynamicLayoutVertexArray.emplaceBack(p.x, p.y, angle);
    dynamicLayoutVertexArray.emplaceBack(p.x, p.y, angle);
    dynamicLayoutVertexArray.emplaceBack(p.x, p.y, angle);
    dynamicLayoutVertexArray.emplaceBack(p.x, p.y, angle);
}

var SymbolBuffers = function SymbolBuffers(programConfigurations                                         ) {
      this.layoutVertexArray = new SymbolLayoutArray();
      this.indexArray = new TriangleIndexArray();
      this.programConfigurations = programConfigurations;
      this.segments = new SegmentVector();
      this.dynamicLayoutVertexArray = new SymbolDynamicLayoutArray();
      this.opacityVertexArray = new SymbolOpacityArray();
      this.placedSymbolArray = new PlacedSymbolArray();
  };

  SymbolBuffers.prototype.upload = function upload (context       , dynamicIndexBuffer       ) {
      this.layoutVertexBuffer = context.createVertexBuffer(this.layoutVertexArray, symbolLayoutAttributes.members);
      this.indexBuffer = context.createIndexBuffer(this.indexArray, dynamicIndexBuffer);
      this.programConfigurations.upload(context);
      this.dynamicLayoutVertexBuffer = context.createVertexBuffer(this.dynamicLayoutVertexArray, dynamicLayoutAttributes.members, true);
      this.opacityVertexBuffer = context.createVertexBuffer(this.opacityVertexArray, shaderOpacityAttributes, true);
      // This is a performance hack so that we can write to opacityVertexArray with uint32s
      // even though the shaders read uint8s
      this.opacityVertexBuffer.itemSize = 1;
  };

  SymbolBuffers.prototype.destroy = function destroy () {
      if (!this.layoutVertexBuffer) { return; }
      this.layoutVertexBuffer.destroy();
      this.indexBuffer.destroy();
      this.programConfigurations.destroy();
      this.segments.destroy();
      this.dynamicLayoutVertexBuffer.destroy();
      this.opacityVertexBuffer.destroy();
  };

register('SymbolBuffers', SymbolBuffers);

var CollisionBuffers = function CollisionBuffers(LayoutArray                  ,
              layoutAttributes                        ,
              IndexArray                                          ) {
      this.layoutVertexArray = new LayoutArray();
      this.layoutAttributes = layoutAttributes;
      this.indexArray = new IndexArray();
      this.segments = new SegmentVector();
      this.collisionVertexArray = new CollisionVertexArray();
  };

  CollisionBuffers.prototype.upload = function upload (context       ) {
      this.layoutVertexBuffer = context.createVertexBuffer(this.layoutVertexArray, this.layoutAttributes);
      this.indexBuffer = context.createIndexBuffer(this.indexArray);
      this.collisionVertexBuffer = context.createVertexBuffer(this.collisionVertexArray, collisionVertexAttributes.members, true);
  };

  CollisionBuffers.prototype.destroy = function destroy () {
      if (!this.layoutVertexBuffer) { return; }
      this.layoutVertexBuffer.destroy();
      this.indexBuffer.destroy();
      this.segments.destroy();
      this.collisionVertexBuffer.destroy();
  };

register('CollisionBuffers', CollisionBuffers);

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
var SymbolBucket = function SymbolBucket(options                                  ) {
      this.collisionBoxArray = options.collisionBoxArray;
      this.zoom = options.zoom;
      this.overscaling = options.overscaling;
      this.layers = options.layers;
      this.layerIds = this.layers.map(function (layer) { return layer.id; });
      this.index = options.index;
      this.pixelRatio = options.pixelRatio;

      var layer = this.layers[0];
      var unevaluatedLayoutValues = layer._unevaluatedLayout._values;

      this.textSizeData = getSizeData(this.zoom, unevaluatedLayoutValues['text-size']);
      this.iconSizeData = getSizeData(this.zoom, unevaluatedLayoutValues['icon-size']);

      var layout = this.layers[0].layout;
      this.sortFeaturesByY = layout.get('text-allow-overlap') || layout.get('icon-allow-overlap') ||
          layout.get('text-ignore-placement') || layout.get('icon-ignore-placement');
  };

  SymbolBucket.prototype.createArrays = function createArrays () {
      this.text = new SymbolBuffers(new ProgramConfigurationSet(symbolLayoutAttributes.members, this.layers, this.zoom, function (property) { return /^text/.test(property); }));
      this.icon = new SymbolBuffers(new ProgramConfigurationSet(symbolLayoutAttributes.members, this.layers, this.zoom, function (property) { return /^icon/.test(property); }));
      this.collisionBox = new CollisionBuffers(CollisionBoxLayoutArray, collisionBoxLayout.members, LineIndexArray);
      this.collisionCircle = new CollisionBuffers(CollisionCircleLayoutArray, collisionCircleLayout.members, TriangleIndexArray);

      this.glyphOffsetArray = new GlyphOffsetArray();
      this.lineVertexArray = new SymbolLineVertexArray();
  };

  SymbolBucket.prototype.populate = function populate (features                     , options                  ) {
        var this$1 = this;

      var layer = this.layers[0];
      var layout = layer.layout;

      var textFont = layout.get('text-font');
      var textField = layout.get('text-field');
      var iconImage = layout.get('icon-image');
      var hasText =
          (textField.value.kind !== 'constant' || textField.value.value.length > 0) &&
          (textFont.value.kind !== 'constant' || textFont.value.value.length > 0);
      var hasIcon = iconImage.value.kind !== 'constant' || iconImage.value.value && iconImage.value.value.length > 0;

      this.features = [];

      if (!hasText && !hasIcon) {
          return;
      }

      var icons = options.iconDependencies;
      var stacks = options.glyphDependencies;
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
              var fontStack = textFont.evaluate(feature).join(',');
              var stack = stacks[fontStack] = stacks[fontStack] || {};
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

  SymbolBucket.prototype.upload = function upload (context       ) {
      this.text.upload(context, this.sortFeaturesByY);
      this.icon.upload(context, this.sortFeaturesByY);
      this.collisionBox.upload(context);
      this.collisionCircle.upload(context);
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
             lineLength      ) {
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

      arrays.placedSymbolArray.emplaceBack(labelAnchor.x, labelAnchor.y,
          glyphOffsetArrayStart, this.glyphOffsetArray.length - glyphOffsetArrayStart, vertexStartIndex,
          lineStartIndex, lineLength, (labelAnchor.segment   ),
          sizeVertex ? sizeVertex[0] : 0, sizeVertex ? sizeVertex[1] : 0,
          lineOffset[0], lineOffset[1],
          writingMode, (false   ));

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


  SymbolBucket.prototype.addCollisionDebugVertices = function addCollisionDebugVertices (x1      , y1      , x2      , y2      , arrays                , boxAnchorPoint     , symbolInstance              , isCircle       ) {
      var segment = arrays.segments.prepareSegment(4, arrays.layoutVertexArray, arrays.indexArray);
      var index = segment.vertexLength;

      var layoutVertexArray = arrays.layoutVertexArray;
      var collisionVertexArray = arrays.collisionVertexArray;

      this._addCollisionDebugVertex(layoutVertexArray, collisionVertexArray, boxAnchorPoint, symbolInstance.anchor, new Point(x1, y1));
      this._addCollisionDebugVertex(layoutVertexArray, collisionVertexArray, boxAnchorPoint, symbolInstance.anchor, new Point(x2, y1));
      this._addCollisionDebugVertex(layoutVertexArray, collisionVertexArray, boxAnchorPoint, symbolInstance.anchor, new Point(x2, y2));
      this._addCollisionDebugVertex(layoutVertexArray, collisionVertexArray, boxAnchorPoint, symbolInstance.anchor, new Point(x1, y2));

      segment.vertexLength += 4;
      if (isCircle) {
          var indexArray                   = (arrays.indexArray   );
          indexArray.emplaceBack(index, index + 1, index + 2);
          indexArray.emplaceBack(index, index + 2, index + 3);

          segment.primitiveLength += 2;
      } else {
          var indexArray$1               = (arrays.indexArray   );
          indexArray$1.emplaceBack(index, index + 1);
          indexArray$1.emplaceBack(index + 1, index + 2);
          indexArray$1.emplaceBack(index + 2, index + 3);
          indexArray$1.emplaceBack(index + 3, index);

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

  SymbolBucket.prototype.hasTextData = function hasTextData () {
      return this.text.segments.get().length > 0;
  };

  SymbolBucket.prototype.hasIconData = function hasIconData () {
      return this.icon.segments.get().length > 0;
  };

  SymbolBucket.prototype.hasCollisionBoxData = function hasCollisionBoxData () {
      return this.collisionBox.segments.get().length > 0;
  };

  SymbolBucket.prototype.hasCollisionCircleData = function hasCollisionCircleData () {
      return this.collisionCircle.segments.get().length > 0;
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

              var placedSymbol = this$1.text.placedSymbolArray.get(placedTextSymbolIndex);

              var endIndex = placedSymbol.vertexStartIndex + placedSymbol.numGlyphs * 4;
              for (var vertexIndex = placedSymbol.vertexStartIndex; vertexIndex < endIndex; vertexIndex += 4) {
                  this$1.text.indexArray.emplaceBack(vertexIndex, vertexIndex + 1, vertexIndex + 2);
                  this$1.text.indexArray.emplaceBack(vertexIndex + 1, vertexIndex + 2, vertexIndex + 3);
              }
          }

          var placedIcon = this$1.icon.placedSymbolArray.get(i$1);
          if (placedIcon.numGlyphs) {
              var vertexIndex$1 = placedIcon.vertexStartIndex;
              this$1.icon.indexArray.emplaceBack(vertexIndex$1, vertexIndex$1 + 1, vertexIndex$1 + 2);
              this$1.icon.indexArray.emplaceBack(vertexIndex$1 + 1, vertexIndex$1 + 2, vertexIndex$1 + 3);
          }
      }

      if (this.text.indexBuffer) { this.text.indexBuffer.updateData(this.text.indexArray); }
      if (this.icon.indexBuffer) { this.icon.indexBuffer.updateData(this.icon.indexArray); }
  };

register('SymbolBucket', SymbolBucket, {
    omit: ['layers', 'collisionBoxArray', 'features', 'compareText'],
    shallow: ['symbolInstances']
});

// this constant is based on the size of StructArray indexes used in a symbol
// bucket--namely, glyphOffsetArrayStart
// eg the max valid UInt16 is 65,535
// See https://github.com/mapbox/mapbox-gl-js/issues/2907 for motivation
// lineStartIndex and textBoxStartIndex could potentially be concerns
// but we expect there to be many fewer boxes/lines than glyphs
SymbolBucket.MAX_GLYPHS = 65535;

SymbolBucket.addDynamicAttributes = addDynamicAttributes;

module.exports = SymbolBucket;

},{"../../symbol/anchor":218,"../../symbol/mergelines":226,"../../symbol/symbol_size":233,"../../symbol/transform_text":234,"../../util/script_detection":274,"../../util/verticalize_punctuation":282,"../../util/web_worker_transfer":283,"../array_types":44,"../index_array_type":60,"../load_geometry":61,"../program_configuration":63,"../segment":65,"./symbol_attributes":55,"@mapbox/point-geometry":4,"@mapbox/vector-tile":8}],57:[function(require,module,exports){
'use strict';//      
var ref = require('../util/image');
var RGBAImage = ref.RGBAImage;
var util = require('../util/util');
var ref$1 = require('../util/web_worker_transfer');
var register = ref$1.register;

var Level = function Level(dim    , border    , data         ) {
    if (dim <= 0) { throw new RangeError('Level must have positive dimension'); }
    this.dim = dim;
    this.border = border;
    this.stride = this.dim + 2 * this.border;
    this.data = data || new Int32Array((this.dim + 2 * this.border) * (this.dim + 2 * this.border));
};

Level.prototype.set = function set (x    , y    , value    ) {
    this.data[this._idx(x, y)] = value + 65536;
};

Level.prototype.get = function get (x    , y    ) {
    return this.data[this._idx(x, y)] - 65536;
};

Level.prototype._idx = function _idx (x    , y    ) {
    if (x < -this.border || x >= this.dim + this.border ||  y < -this.border || y >= this.dim + this.border) { throw new RangeError('out of range source coordinates for DEM data'); }
    return (y + this.border) * this.stride + (x + this.border);
};

register('Level', Level);

// DEMData is a data structure for decoding, backfilling, and storing elevation data for processing in the hillshade shaders
// data can be populated either from a pngraw image tile or from serliazed data sent back from a worker. When data is initially
// loaded from a image tile, we decode the pixel values using the mapbox terrain-rgb tileset decoding formula, but we store the
// elevation data in a Level as an Int32 value. we add 65536 (2^16) to eliminate negative values and enable the use of
// integer overflow when creating the texture used in the hillshadePrepare step.

// DEMData also handles the backfilling of data from a tile's neighboring tiles. This is necessary because we use a pixel's 8
// surrounding pixel values to compute the slope at that pixel, and we cannot accurately calculate the slope at pixels on a
// tile's edge without backfilling from neighboring tiles.

var DEMData = function DEMData(uid    , scale     , data    ) {
    this.uid = uid;
    this.scale = scale || 1;
    // if no data is provided, use a temporary empty level to satisfy flow
    this.level = data || new Level(256, 512);
    this.loaded = !!data;
};

DEMData.prototype.loadFromImage = function loadFromImage (data       ) {
        var this$1 = this;

    if (data.height !== data.width) { throw new RangeError('DEM tiles must be square'); }

    // Build level 0
    var level = this.level = new Level(data.width, data.width / 2);
    var pixels = data.data;

    // unpack
    for (var y = 0; y < level.dim; y++) {
        for (var x = 0; x < level.dim; x++) {
            var i = y * level.dim + x;
            var j = i * 4;
            // decoding per https://blog.mapbox.com/global-elevation-data-6689f1d0ba65
            level.set(x, y, this$1.scale * ((pixels[j] * 256 * 256 + pixels[j + 1] * 256.0 + pixels[j + 2]) / 10.0 - 10000.0));
        }
    }

    // in order to avoid flashing seams between tiles, here we are initially populating a 1px border of pixels around the image
    // with the data of the nearest pixel from the image. this data is eventually replaced when the tile's neighboring
    // tiles are loaded and the accurate data can be backfilled using DEMData#backfillBorder
    for (var x$1 = 0; x$1 < level.dim; x$1++) {
        // left vertical border
        level.set(-1, x$1, level.get(0, x$1));
        // right vertical border
        level.set(level.dim, x$1, level.get(level.dim - 1, x$1));
        // left horizontal border
        level.set(x$1, -1, level.get(x$1, 0));
        // right horizontal border
        level.set(x$1, level.dim, level.get(x$1, level.dim - 1));
    }
    // corners
    level.set(-1, -1, level.get(0, 0));
    level.set(level.dim, -1, level.get(level.dim - 1, 0));
    level.set(-1, level.dim, level.get(0, level.dim - 1));
    level.set(level.dim, level.dim, level.get(level.dim - 1, level.dim - 1));
    this.loaded = true;
};

DEMData.prototype.getPixels = function getPixels () {
    return new RGBAImage({width: this.level.dim + 2 * this.level.border, height: this.level.dim + 2 * this.level.border}, new Uint8Array(this.level.data.buffer));
};

DEMData.prototype.backfillBorder = function backfillBorder (borderTile     , dx    , dy    ) {
    var t = this.level;
    var o = borderTile.level;

    if (t.dim !== o.dim) { throw new Error('level mismatch (dem dimension)'); }

    var _xMin = dx * t.dim,
        _xMax = dx * t.dim + t.dim,
        _yMin = dy * t.dim,
        _yMax = dy * t.dim + t.dim;

    switch (dx) {
    case -1:
        _xMin = _xMax - 1;
        break;
    case 1:
        _xMax = _xMin + 1;
        break;
    }

    switch (dy) {
    case -1:
        _yMin = _yMax - 1;
        break;
    case 1:
        _yMax = _yMin + 1;
        break;
    }

    var xMin = util.clamp(_xMin, -t.border, t.dim + t.border);
    var xMax = util.clamp(_xMax, -t.border, t.dim + t.border);
    var yMin = util.clamp(_yMin, -t.border, t.dim + t.border);
    var yMax = util.clamp(_yMax, -t.border, t.dim + t.border);

    var ox = -dx * t.dim;
    var oy = -dy * t.dim;
    for (var y = yMin; y < yMax; y++) {
        for (var x = xMin; x < xMax; x++) {
            t.set(x, y, o.get(x + ox, y + oy));
        }
    }
};

register('DEMData', DEMData);
module.exports = {DEMData: DEMData, Level: Level};

},{"../util/image":268,"../util/util":280,"../util/web_worker_transfer":283}],58:[function(require,module,exports){
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

},{}],59:[function(require,module,exports){
'use strict';//      

var Point = require('@mapbox/point-geometry');
var loadGeometry = require('./load_geometry');
var EXTENT = require('./extent');
var featureFilter = require('../style-spec/feature_filter');
var Grid = require('grid-index');
var DictionaryCoder = require('../util/dictionary_coder');
var vt = require('@mapbox/vector-tile');
var Protobuf = require('pbf');
var GeoJSONFeature = require('../util/vectortile_to_geojson');
var arraysIntersect = require('../util/util').arraysIntersect;
var ref = require('../source/tile_id');
var OverscaledTileID = ref.OverscaledTileID;
var ref$1 = require('../util/web_worker_transfer');
var register = ref$1.register;

                                                            
                                                   
                                                                
                                                     

var ref$2 = require('./array_types');
var FeatureIndexArray = ref$2.FeatureIndexArray;

                        
                  
                    
                     
                                       
                             
             
                                    
                              
      
                                         
                     
                                             
                                   
 

var FeatureIndex = function FeatureIndex(tileID              ,
            overscaling    ,
            grid   ,
            featureIndexArray                ) {
    this.tileID = tileID;
    this.overscaling = overscaling;
    this.x = tileID.canonical.x;
    this.y = tileID.canonical.y;
    this.z = tileID.canonical.z;
    this.grid = grid || new Grid(EXTENT, 16, 0);
    this.featureIndexArray = featureIndexArray || new FeatureIndexArray();
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

    var matchingSymbols = args.collisionIndex ?
        args.collisionIndex.queryRenderedSymbols(queryGeometry, this.tileID, EXTENT / args.tileSize, args.collisionBoxArray, args.sourceID, args.bucketInstanceIds) :
        [];
    matchingSymbols.sort();
    this.filterMatching(result, matchingSymbols, args.collisionBoxArray, queryGeometry, filter, params.layers, styleLayers, args.bearing, pixelsToTileUnits);

    return result;
};

FeatureIndex.prototype.filterMatching = function filterMatching (
    result                                                                  ,
    matching        ,
    array                                   ,
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

        if (!filter({zoom: this$1.tileID.overscaledZ}, feature)) { continue; }

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

register(
    'FeatureIndex',
    FeatureIndex,
    { omit: ['rawTileData', 'sourceLayerCoder'] }
);

module.exports = FeatureIndex;

function topDownFeatureComparator(a, b) {
    return b - a;
}

},{"../source/tile_id":119,"../style-spec/feature_filter":153,"../util/dictionary_coder":262,"../util/util":280,"../util/vectortile_to_geojson":281,"../util/web_worker_transfer":283,"./array_types":44,"./extent":58,"./load_geometry":61,"@mapbox/point-geometry":4,"@mapbox/vector-tile":8,"grid-index":25,"pbf":31}],60:[function(require,module,exports){
'use strict';//      

/**
 * An index array stores Uint16 indicies of vertexes in a corresponding vertex array. We use
 * two kinds of index arrays: arrays storing groups of three indicies, forming triangles; and
 * arrays storing pairs of indicies, forming line segments.
 * @private
 */
module.exports = {
    LineIndexArray: require('./array_types').LineIndexArray,
    TriangleIndexArray: require('./array_types').TriangleIndexArray
};

},{"./array_types":44}],61:[function(require,module,exports){
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

},{"../util/util":280,"./extent":58}],62:[function(require,module,exports){
'use strict';//      
var ref = require('../util/struct_array');
var createLayout = ref.createLayout;
module.exports = createLayout([
    { name: 'a_pos', type: 'Int16', components: 2 }
]);

},{"../util/struct_array":276}],63:[function(require,module,exports){
'use strict';//      

                                                                     

var packUint8ToFloat = require('../shaders/encode_attribute').packUint8ToFloat;
var Color = require('../style-spec/util/color');
var ref = require('../util/web_worker_transfer');
var register = ref.register;
var ref$1 = require('../style/properties');
var PossiblyEvaluatedPropertyValue = ref$1.PossiblyEvaluatedPropertyValue;
var ref$2 = require('./array_types');
var StructArrayLayout1f4 = ref$2.StructArrayLayout1f4;
var StructArrayLayout2f8 = ref$2.StructArrayLayout2f8;
var StructArrayLayout4f16 = ref$2.StructArrayLayout4f16;

                                         
                                                                            
                                                                         
                                                    
                                             
                                                                                             
                                                           

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
                     
                                

                                                               
                          
                    

                             

                                 
                                 
                                          
                                                                       
 

var ConstantBinder = function ConstantBinder(value   , name    , type    ) {
    this.value = value;
    this.name = name;
    this.type = type;
    this.statistics = { max: -Infinity };
};

ConstantBinder.prototype.defines = function defines () {
    return [("#define HAS_UNIFORM_u_" + (this.name))];
};

ConstantBinder.prototype.populatePaintArray = function populatePaintArray () {};
ConstantBinder.prototype.upload = function upload () {};
ConstantBinder.prototype.destroy = function destroy () {};

ConstantBinder.prototype.setUniforms = function setUniforms (context     ,
            program     ,
            globals              ,
            currentValue                               ) {
    var value  = currentValue.constantOr(this.value);
    var gl = context.gl;
    if (this.type === 'color') {
        gl.uniform4f(program.uniforms[("u_" + (this.name))], value.r, value.g, value.b, value.a);
    } else {
        gl.uniform1f(program.uniforms[("u_" + (this.name))], value);
    }
};

var SourceExpressionBinder = function SourceExpressionBinder(expression              , name    , type    ) {
    this.expression = expression;
    this.name = name;
    this.type = type;
    this.statistics = { max: -Infinity };
    var PaintVertexArray = type === 'color' ? StructArrayLayout2f8 : StructArrayLayout1f4;
    this.paintVertexAttributes = [{
        name: ("a_" + name),
        type: 'Float32',
        components: type === 'color' ? 2 : 1,
        offset: 0
    }];
    this.paintVertexArray = new PaintVertexArray();
};

SourceExpressionBinder.prototype.defines = function defines () {
    return [];
};

SourceExpressionBinder.prototype.populatePaintArray = function populatePaintArray (length    , feature     ) {
    var paintArray = this.paintVertexArray;

    var start = paintArray.length;
    paintArray.reserve(length);

    var value = this.expression.evaluate({zoom: 0}, feature);

    if (this.type === 'color') {
        var color = packColor(value);
        for (var i = start; i < length; i++) {
            paintArray.emplaceBack(color[0], color[1]);
        }
    } else {
        for (var i$1 = start; i$1 < length; i$1++) {
            paintArray.emplaceBack(value);
        }

        this.statistics.max = Math.max(this.statistics.max, value);
    }
};

SourceExpressionBinder.prototype.upload = function upload (context     ) {
    if (this.paintVertexArray) {
        this.paintVertexBuffer = context.createVertexBuffer(this.paintVertexArray, this.paintVertexAttributes);
    }
};

SourceExpressionBinder.prototype.destroy = function destroy () {
    if (this.paintVertexBuffer) {
        this.paintVertexBuffer.destroy();
    }
};

SourceExpressionBinder.prototype.setUniforms = function setUniforms (context     , program     ) {
    context.gl.uniform1f(program.uniforms[("a_" + (this.name) + "_t")], 0);
};

var CompositeExpressionBinder = function CompositeExpressionBinder(expression                 , name    , type    , useIntegerZoom     , zoom    ) {
    this.expression = expression;
    this.name = name;
    this.type = type;
    this.useIntegerZoom = useIntegerZoom;
    this.zoom = zoom;
    this.statistics = { max: -Infinity };
    var PaintVertexArray = type === 'color' ? StructArrayLayout4f16 : StructArrayLayout2f8;
    this.paintVertexAttributes = [{
        name: ("a_" + name),
        type: 'Float32',
        components: type === 'color' ? 4 : 2,
        offset: 0
    }];
    this.paintVertexArray = new PaintVertexArray();
};

CompositeExpressionBinder.prototype.defines = function defines () {
    return [];
};

CompositeExpressionBinder.prototype.populatePaintArray = function populatePaintArray (length    , feature     ) {
    var paintArray = this.paintVertexArray;

    var start = paintArray.length;
    paintArray.reserve(length);

    var min = this.expression.evaluate({zoom: this.zoom}, feature);
    var max = this.expression.evaluate({zoom: this.zoom + 1}, feature);

    if (this.type === 'color') {
        var minColor = packColor(min);
        var maxColor = packColor(max);
        for (var i = start; i < length; i++) {
            paintArray.emplaceBack(minColor[0], minColor[1], maxColor[0], maxColor[1]);
        }
    } else {
        for (var i$1 = start; i$1 < length; i$1++) {
            paintArray.emplaceBack(min, max);
        }

        this.statistics.max = Math.max(this.statistics.max, min, max);
    }
};

CompositeExpressionBinder.prototype.upload = function upload (context     ) {
    if (this.paintVertexArray) {
        this.paintVertexBuffer = context.createVertexBuffer(this.paintVertexArray, this.paintVertexAttributes);
    }
};

CompositeExpressionBinder.prototype.destroy = function destroy () {
    if (this.paintVertexBuffer) {
        this.paintVertexBuffer.destroy();
    }
};

CompositeExpressionBinder.prototype.interpolationFactor = function interpolationFactor (currentZoom    ) {
    if (this.useIntegerZoom) {
        return this.expression.interpolationFactor(Math.floor(currentZoom), this.zoom, this.zoom + 1);
    } else {
        return this.expression.interpolationFactor(currentZoom, this.zoom, this.zoom + 1);
    }
};

CompositeExpressionBinder.prototype.setUniforms = function setUniforms (context     , program     , globals              ) {
    context.gl.uniform1f(program.uniforms[("a_" + (this.name) + "_t")], this.interpolationFactor(globals.zoom));
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

    this._buffers = [];
};

ProgramConfiguration.createDynamic = function createDynamic (layer   , zoom    , filterProperties                 ) {
    var self = new ProgramConfiguration();
    var keys = [];

    for (var property in layer.paint._values) {
        if (!filterProperties(property)) { continue; }
        var value = layer.paint.get(property);
        if (!(value instanceof PossiblyEvaluatedPropertyValue) || !value.property.specification['property-function']) {
            continue;
        }
        var name = paintAttributeName(property, layer.type);
        var type = value.property.specification.type;
        var useIntegerZoom = value.property.useIntegerZoom;

        if (value.value.kind === 'constant') {
            self.binders[property] = new ConstantBinder(value.value, name, type);
            keys.push(("/u_" + name));
        } else if (value.value.kind === 'source') {
            self.binders[property] = new SourceExpressionBinder(value.value, name, type);
            keys.push(("/a_" + name));
        } else {
            self.binders[property] = new CompositeExpressionBinder(value.value, name, type, useIntegerZoom, zoom);
            keys.push(("/z_" + name));
        }
    }

    self.cacheKey = keys.sort().join('');

    return self;
};

ProgramConfiguration.prototype.populatePaintArrays = function populatePaintArrays (length    , feature     ) {
        var this$1 = this;

    for (var property in this$1.binders) {
        this$1.binders[property].populatePaintArray(length, feature);
    }
};

ProgramConfiguration.prototype.defines = function defines ()            {
        var this$1 = this;

    var result = [];
    for (var property in this$1.binders) {
        result.push.apply(result, this$1.binders[property].defines());
    }
    return result;
};

ProgramConfiguration.prototype.setUniforms = function setUniforms (context     , program     , properties                           , globals              ) {
        var this$1 = this;

    for (var property in this$1.binders) {
        var binder = this$1.binders[property];
        binder.setUniforms(context, program, globals, properties.get(property));
    }
};

ProgramConfiguration.prototype.getPaintVertexBuffers = function getPaintVertexBuffers ()                  {
    return this._buffers;
};

ProgramConfiguration.prototype.upload = function upload (context     ) {
        var this$1 = this;

    for (var property in this$1.binders) {
        this$1.binders[property].upload(context);
    }

    var buffers = [];
    for (var property$1 in this$1.binders) {
        var binder = this$1.binders[property$1];
        if ((binder instanceof SourceExpressionBinder ||
            binder instanceof CompositeExpressionBinder) &&
            binder.paintVertexBuffer
        ) {
            buffers.push(binder.paintVertexBuffer);
        }
    }
    this._buffers = buffers;
};

ProgramConfiguration.prototype.destroy = function destroy () {
        var this$1 = this;

    for (var property in this$1.binders) {
        this$1.binders[property].destroy();
    }
};

var ProgramConfigurationSet = function ProgramConfigurationSet(layoutAttributes                      , layers                   , zoom    , filterProperties) {
    var this$1 = this;
    if ( filterProperties === void 0 ) filterProperties                  = function () { return true; };

    this.programConfigurations = {};
    for (var i = 0, list = layers; i < list.length; i += 1) {
        var layer = list[i];

        this$1.programConfigurations[layer.id] = ProgramConfiguration.createDynamic(layer, zoom, filterProperties);
        this$1.programConfigurations[layer.id].layoutAttributes = layoutAttributes;
    }
};

ProgramConfigurationSet.prototype.populatePaintArrays = function populatePaintArrays (length    , feature     ) {
        var this$1 = this;

    for (var key in this$1.programConfigurations) {
        this$1.programConfigurations[key].populatePaintArrays(length, feature);
    }
};

ProgramConfigurationSet.prototype.get = function get (layerId    ) {
    return this.programConfigurations[layerId];
};

ProgramConfigurationSet.prototype.upload = function upload (context     ) {
        var this$1 = this;

    for (var layerId in this$1.programConfigurations) {
        this$1.programConfigurations[layerId].upload(context);
    }
};

ProgramConfigurationSet.prototype.destroy = function destroy () {
        var this$1 = this;

    for (var layerId in this$1.programConfigurations) {
        this$1.programConfigurations[layerId].destroy();
    }
};

// paint property arrays
function paintAttributeName(property, type) {
    var attributeNameExceptions = {
        'text-opacity': 'opacity',
        'icon-opacity': 'opacity',
        'text-color': 'fill_color',
        'icon-color': 'fill_color',
        'text-halo-color': 'halo_color',
        'icon-halo-color': 'halo_color',
        'text-halo-blur': 'halo_blur',
        'icon-halo-blur': 'halo_blur',
        'text-halo-width': 'halo_width',
        'icon-halo-width': 'halo_width',
        'line-gap-width': 'gapwidth'
    };
    return attributeNameExceptions[property] ||
        property.replace((type + "-"), '').replace(/-/g, '_');
}

register('ConstantBinder', ConstantBinder);
register('SourceExpressionBinder', SourceExpressionBinder);
register('CompositeExpressionBinder', CompositeExpressionBinder);
register('ProgramConfiguration', ProgramConfiguration, {omit: ['_buffers']});
register('ProgramConfigurationSet', ProgramConfigurationSet);

module.exports = {
    ProgramConfiguration: ProgramConfiguration,
    ProgramConfigurationSet: ProgramConfigurationSet
};

},{"../shaders/encode_attribute":101,"../style-spec/util/color":158,"../style/properties":193,"../util/web_worker_transfer":283,"./array_types":44}],64:[function(require,module,exports){
'use strict';//      
var ref = require('../util/struct_array');
var createLayout = ref.createLayout;
module.exports = createLayout([
    { name: 'a_pos', type: 'Int16', components: 2 },
    { name: 'a_texture_pos', type: 'Int16', components: 2 }
]);

},{"../util/struct_array":276}],65:[function(require,module,exports){
'use strict';//      

var ref = require('../util/util');
var warnOnce = ref.warnOnce;
var ref$1 = require('../util/web_worker_transfer');
var register = ref$1.register;

                                                                   
                                                      

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

register('SegmentVector', SegmentVector);

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

},{"../util/util":280,"../util/web_worker_transfer":283}],66:[function(require,module,exports){
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

},{}],67:[function(require,module,exports){
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

},{"../util/util":280,"./lng_lat_bounds":68}],68:[function(require,module,exports){
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
 * Check if the bounding box is an empty/`null`-type box.
 *
 * @returns {boolean} True if bounds have been defined, otherwise false.
 */
LngLatBounds.prototype.isEmpty = function isEmpty () {
    return !(this._sw && this._ne);
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

},{"./lng_lat":67}],69:[function(require,module,exports){
'use strict';//      

var LngLat = require('./lng_lat'),
    Point = require('@mapbox/point-geometry'),
    Coordinate = require('./coordinate'),
    util = require('../util/util'),
    interp = require('../style-spec/util/interpolate').number,
    tileCover = require('../util/tile_cover');
var ref = require('../source/tile_id');
var CanonicalTileID = ref.CanonicalTileID;
var UnwrappedTileID = ref.UnwrappedTileID;
var EXTENT = require('../data/extent'),
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
    this._alignedPosMatrixCache = {};
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
Transform.prototype.getVisibleUnwrappedCoordinates = function getVisibleUnwrappedCoordinates (tileID             ) {
    var ul = this.pointCoordinate(new Point(0, 0), 0);
    var ur = this.pointCoordinate(new Point(this.width, 0), 0);
    var w0 = Math.floor(ul.column);
    var w1 = Math.floor(ur.column);
    var result = [new UnwrappedTileID(0, tileID)];
    if (this._renderWorldCopies) {
        for (var w = w0; w <= w1; w++) {
            if (w === 0) { continue; }
            result.push(new UnwrappedTileID(w, tileID));
        }
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
    return tileCover(z, cornerCoords, options.reparseOverscaled ? actualZ : z, this._renderWorldCopies)
        .sort(function (a, b) { return centerPoint.dist(a.canonical) - centerPoint.dist(b.canonical); });
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
 * @param {UnwrappedTileID} unwrappedTileID;
 */
Transform.prototype.calculatePosMatrix = function calculatePosMatrix (unwrappedTileID             , aligned)           {
        if ( aligned === void 0 ) aligned      = false;

    var posMatrixKey = unwrappedTileID.key;
    var cache = aligned ? this._alignedPosMatrixCache : this._posMatrixCache;
    if (cache[posMatrixKey]) {
        return cache[posMatrixKey];
    }

    var canonical = unwrappedTileID.canonical;
    var scale = this.worldSize / this.zoomScale(canonical.z);
    var unwrappedX = canonical.x + Math.pow(2, canonical.z) * unwrappedTileID.wrap;

    var posMatrix = mat4.identity(new Float64Array(16));
    mat4.translate(posMatrix, posMatrix, [unwrappedX * scale, canonical.y * scale, 0]);
    mat4.scale(posMatrix, posMatrix, [scale / EXTENT, scale / EXTENT, 1]);
    mat4.multiply(posMatrix, aligned ? this.alignedProjMatrix : this.projMatrix, posMatrix);

    cache[posMatrixKey] = new Float32Array(posMatrix);
    return cache[posMatrixKey];
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
    var x = this.x, y = this.y;

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
    mat4.translate(m, m, [-x, -y, 0]);

    // scale vertically to meters per pixel (inverse of ground resolution):
    // worldSize / (circumferenceOfEarth * cos(lat * π / 180))
    var verticalScale = this.worldSize / (2 * Math.PI * 6378137 * Math.abs(Math.cos(this.center.lat * (Math.PI / 180))));
    mat4.scale(m, m, [1, 1, verticalScale, 1]);

    this.projMatrix = m;

    // Make a second projection matrix that is aligned to a pixel grid for rendering raster tiles.
    // We're rounding the (floating point) x/y values to achieve to avoid rendering raster images to fractional
    // coordinates. Additionally, we adjust by half a pixel in either direction in case that viewport dimension
    // is an odd integer to preserve rendering to the pixel grid. We're rotating this shift based on the angle
    // of the transformation so that 0°, 90°, 180°, and 270° rasters are crisp, and adjust the shift so that
    // it is always <= 0.5 pixels.
    var xShift = (this.width % 2) / 2, yShift = (this.height % 2) / 2,
        angleCos = Math.cos(this.angle), angleSin = Math.sin(this.angle),
        dx = x - Math.round(x) + angleCos * xShift + angleSin * yShift,
        dy = y - Math.round(y) + angleCos * yShift + angleSin * xShift;
    var alignedM = new Float64Array(m);
    mat4.translate(alignedM, alignedM, [ dx > 0.5 ? dx - 1 : dx, dy > 0.5 ? dy - 1 : dy, 0 ]);
    this.alignedProjMatrix = alignedM;

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
    this._alignedPosMatrixCache = {};
};

Object.defineProperties( Transform.prototype, prototypeAccessors );

module.exports = Transform;

},{"../data/extent":58,"../source/tile_id":119,"../style-spec/util/interpolate":163,"../util/tile_cover":278,"../util/util":280,"./coordinate":66,"./lng_lat":67,"@mapbox/gl-matrix":2,"@mapbox/point-geometry":4}],70:[function(require,module,exports){
'use strict';//      
var Color = require('../style-spec/util/color');

                                                          

var ZERO = 0x0000;
var ONE = 0x0001;
var ONE_MINUS_SRC_ALPHA = 0x0303;

var ColorMode = function ColorMode(blendFunction           , blendColor   , mask           ) {
    this.blendFunction = blendFunction;
    this.blendColor = blendColor;
    this.mask = mask;
};

ColorMode.Replace = [ONE, ZERO];

ColorMode.disabled = new ColorMode(ColorMode.Replace, Color.transparent, [false, false, false, false]);
ColorMode.unblended = new ColorMode(ColorMode.Replace, Color.transparent, [true, true, true, true]);
ColorMode.alphaBlended = new ColorMode([ONE, ONE_MINUS_SRC_ALPHA], Color.transparent, [true, true, true, true]);

module.exports = ColorMode;

},{"../style-spec/util/color":158}],71:[function(require,module,exports){
'use strict';//      
var IndexBuffer = require('./index_buffer');
var VertexBuffer = require('./vertex_buffer');
var Framebuffer = require('./framebuffer');
var DepthMode = require('./depth_mode');
var StencilMode = require('./stencil_mode');
var ColorMode = require('./color_mode');
var util = require('../util/util');
var ref = require('./value');
var ClearColor = ref.ClearColor;
var ClearDepth = ref.ClearDepth;
var ClearStencil = ref.ClearStencil;
var ColorMask = ref.ColorMask;
var DepthMask = ref.DepthMask;
var StencilMask = ref.StencilMask;
var StencilFunc = ref.StencilFunc;
var StencilOp = ref.StencilOp;
var StencilTest = ref.StencilTest;
var DepthRange = ref.DepthRange;
var DepthTest = ref.DepthTest;
var DepthFunc = ref.DepthFunc;
var Blend = ref.Blend;
var BlendFunc = ref.BlendFunc;
var BlendColor = ref.BlendColor;
var Program = ref.Program;
var LineWidth = ref.LineWidth;
var ActiveTextureUnit = ref.ActiveTextureUnit;
var Viewport = ref.Viewport;
var BindFramebuffer = ref.BindFramebuffer;
var BindRenderbuffer = ref.BindRenderbuffer;
var BindTexture = ref.BindTexture;
var BindVertexBuffer = ref.BindVertexBuffer;
var BindElementBuffer = ref.BindElementBuffer;
var BindVertexArrayOES = ref.BindVertexArrayOES;
var PixelStoreUnpack = ref.PixelStoreUnpack;
var PixelStoreUnpackPremultiplyAlpha = ref.PixelStoreUnpackPremultiplyAlpha;


                                                                                 
             
                
                     
                              
                                                  

                  
                  
                   
                    
  


var Context = function Context(gl                     ) {
      this.gl = gl;
      this.extVertexArrayObject = this.gl.getExtension('OES_vertex_array_object');
      this.lineWidthRange = gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE);

      this.clearColor = new ClearColor(this);
      this.clearDepth = new ClearDepth(this);
      this.clearStencil = new ClearStencil(this);
      this.colorMask = new ColorMask(this);
      this.depthMask = new DepthMask(this);
      this.stencilMask = new StencilMask(this);
      this.stencilFunc = new StencilFunc(this);
      this.stencilOp = new StencilOp(this);
      this.stencilTest = new StencilTest(this);
      this.depthRange = new DepthRange(this);
      this.depthTest = new DepthTest(this);
      this.depthFunc = new DepthFunc(this);
      this.blend = new Blend(this);
      this.blendFunc = new BlendFunc(this);
      this.blendColor = new BlendColor(this);
      this.program = new Program(this);
      this.lineWidth = new LineWidth(this);
      this.activeTexture = new ActiveTextureUnit(this);
      this.viewport = new Viewport(this);
      this.bindFramebuffer = new BindFramebuffer(this);
      this.bindRenderbuffer = new BindRenderbuffer(this);
      this.bindTexture = new BindTexture(this);
      this.bindVertexBuffer = new BindVertexBuffer(this);
      this.bindElementBuffer = new BindElementBuffer(this);
      this.bindVertexArrayOES = this.extVertexArrayObject && new BindVertexArrayOES(this);
      this.pixelStoreUnpack = new PixelStoreUnpack(this);
      this.pixelStoreUnpackPremultiplyAlpha = new PixelStoreUnpackPremultiplyAlpha(this);

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

  Context.prototype.createIndexBuffer = function createIndexBuffer (array                                   , dynamicDraw        ) {
      return new IndexBuffer(this, array, dynamicDraw);
  };

  Context.prototype.createVertexBuffer = function createVertexBuffer (array           , attributes                                 , dynamicDraw        ) {
      return new VertexBuffer(this, array, attributes, dynamicDraw);
  };

  Context.prototype.createRenderbuffer = function createRenderbuffer (storageFormat      , width      , height      ) {
      var gl = this.gl;

      var rbo = gl.createRenderbuffer();
      this.bindRenderbuffer.set(rbo);
      gl.renderbufferStorage(gl.RENDERBUFFER, storageFormat, width, height);
      this.bindRenderbuffer.set(null);

      return rbo;
  };

  Context.prototype.createFramebuffer = function createFramebuffer (width      , height      ) {
      return new Framebuffer(this, width, height);
  };

  Context.prototype.clear = function clear (ref         ) {
        var color = ref.color;
        var depth = ref.depth;

      var gl = this.gl;
      var mask = 0;

      if (color) {
          mask |= gl.COLOR_BUFFER_BIT;
          this.clearColor.set(color);
          this.colorMask.set([true, true, true, true]);
      }

      if (typeof depth !== 'undefined') {
          mask |= gl.DEPTH_BUFFER_BIT;
          this.clearDepth.set(depth);
          this.depthMask.set(true);
      }

      // See note in Painter#clearStencil: implement this the easy way once GPU bug/workaround is fixed upstream
      // if (typeof stencil !== 'undefined') {
      //   mask |= gl.STENCIL_BUFFER_BIT;
      //   this.clearStencil.set(stencil);
      //   this.stencilMask.set(0xFF);
      // }

      gl.clear(mask);
  };

  Context.prototype.setDepthMode = function setDepthMode (depthMode                    ) {
      if (depthMode.func === this.gl.ALWAYS && !depthMode.mask) {
          this.depthTest.set(false);
      } else {
          this.depthTest.set(true);
          this.depthFunc.set(depthMode.func);
          this.depthMask.set(depthMode.mask);
          this.depthRange.set(depthMode.range);
      }
  };

  Context.prototype.setStencilMode = function setStencilMode (stencilMode                      ) {
      if (stencilMode.func === this.gl.ALWAYS && !stencilMode.mask) {
          this.stencilTest.set(false);
      } else {
          this.stencilTest.set(true);
          this.stencilMask.set(stencilMode.mask);
          this.stencilOp.set([stencilMode.fail, stencilMode.depthFail, stencilMode.pass]);
          this.stencilFunc.set({
              func: stencilMode.test.func,
              ref: stencilMode.ref,
              mask: stencilMode.test.mask
          });
      }
  };

  Context.prototype.setColorMode = function setColorMode (colorMode                    ) {
      if (util.deepEqual(colorMode.blendFunction, ColorMode.Replace)) {
          this.blend.set(false);
      } else {
          this.blend.set(true);
          this.blendFunc.set(colorMode.blendFunction);
          this.blendColor.set(colorMode.blendColor);
      }

      this.colorMask.set(colorMode.mask);
  };

module.exports = Context;

},{"../util/util":280,"./color_mode":70,"./depth_mode":72,"./framebuffer":73,"./index_buffer":74,"./stencil_mode":75,"./value":76,"./vertex_buffer":77}],72:[function(require,module,exports){
'use strict';//      
                                                                            

var ALWAYS = 0x0207;

var DepthMode = function DepthMode(depthFunc           , depthMask           , depthRange            ) {
    this.func = depthFunc;
    this.mask = depthMask;
    this.range = depthRange;
};

DepthMode.ReadOnly = false;
DepthMode.ReadWrite = true;

DepthMode.disabled = new DepthMode(ALWAYS, DepthMode.ReadOnly, [0, 1]);

module.exports = DepthMode;

},{}],73:[function(require,module,exports){
'use strict';//      
var ref = require('./value');
var ColorAttachment = ref.ColorAttachment;
var DepthAttachment = ref.DepthAttachment;

                                     

var Framebuffer = function Framebuffer(context     , width    , height    ) {
    this.context = context;
    this.width = width;
    this.height = height;
    var gl = context.gl;
    var fbo = this.framebuffer = gl.createFramebuffer();

    this.colorAttachment = new ColorAttachment(context, fbo);
    this.depthAttachment = new DepthAttachment(context, fbo);
};

Framebuffer.prototype.destroy = function destroy () {
    var gl = this.context.gl;

    var texture = this.colorAttachment.get();
    if (texture) { gl.deleteTexture(texture); }

    var renderbuffer = this.depthAttachment.get();
    if (renderbuffer) { gl.deleteRenderbuffer(renderbuffer); }

    gl.deleteFramebuffer(this.framebuffer);
};

module.exports = Framebuffer;

},{"./value":76}],74:[function(require,module,exports){
'use strict';//      
var assert = require('assert');

                                                      
                                                                                 
                                         


var IndexBuffer = function IndexBuffer(context     , array                                 , dynamicDraw      ) {
    this.context = context;
    var gl = context.gl;
    this.buffer = gl.createBuffer();
    this.dynamicDraw = Boolean(dynamicDraw);

    this.unbindVAO();

    context.bindElementBuffer.set(this.buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, array.arrayBuffer, this.dynamicDraw ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW);

    if (!this.dynamicDraw) {
        delete array.arrayBuffer;
    }
};

IndexBuffer.prototype.unbindVAO = function unbindVAO () {
    // The bound index buffer is part of vertex array object state. We don't want to
    // modify whatever VAO happens to be currently bound, so make sure the default
    // vertex array provided by the context is bound instead.
    if (this.context.extVertexArrayObject) {
        this.context.bindVertexArrayOES.set(null);
    }
};

IndexBuffer.prototype.bind = function bind () {
    this.context.bindElementBuffer.set(this.buffer);
};

IndexBuffer.prototype.updateData = function updateData (array         ) {
    var gl = this.context.gl;
    assert(this.dynamicDraw);
    // The right VAO will get this buffer re-bound later in VertexArrayObject#bind
    // See https://github.com/mapbox/mapbox-gl-js/issues/5620
    this.unbindVAO();
    this.bind();
    gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, array.arrayBuffer);
};

IndexBuffer.prototype.destroy = function destroy () {
    var gl = this.context.gl;
    if (this.buffer) {
        gl.deleteBuffer(this.buffer);
        delete this.buffer;
    }
};

module.exports = IndexBuffer;

},{"assert":13}],75:[function(require,module,exports){
'use strict';//      
                                                              

var ALWAYS = 0x0207;
var KEEP = 0x1E00;

var StencilMode = function StencilMode(test         , ref    , mask    , fail               ,
    depthFail               , pass               ) {
    this.test = test;
    this.ref = ref;
    this.mask = mask;
    this.fail = fail;
    this.depthFail = depthFail;
    this.pass = pass;
};

StencilMode.disabled = new StencilMode({ func: ALWAYS, mask: 0 }, 0, 0, KEEP, KEEP, KEEP);

module.exports = StencilMode;

},{}],76:[function(require,module,exports){
'use strict';//      

var Color = require('../style-spec/util/color');
var util = require('../util/util');

                                     
             
                  
                  
                   
                  
                    
                  
                  
                    
                 
                 

                           
                     
               
             
                        
 

var ClearColor = function ClearColor(context     ) {
    this.context = context;
    this.current = Color.transparent;
};

ClearColor.prototype.get = function get ()    { return this.current; };

ClearColor.prototype.set = function set (v   )   {
    var c = this.current;
    if (v.r !== c.r || v.g !== c.g || v.b !== c.b || v.a !== c.a) {
        this.context.gl.clearColor(v.r, v.g, v.b, v.a);
        this.current = v;
    }
};

var ClearDepth = function ClearDepth(context     ) {
    this.context = context;
    this.current = 1;
};

ClearDepth.prototype.get = function get ()     { return this.current; };

ClearDepth.prototype.set = function set (v    )   {
    if (this.current !== v) {
        this.context.gl.clearDepth(v);
        this.current = v;
    }
};

var ClearStencil = function ClearStencil(context     ) {
    this.context = context;
    this.current = 0;
};

ClearStencil.prototype.get = function get ()     { return this.current; };

ClearStencil.prototype.set = function set (v    )   {
    if (this.current !== v) {
        this.context.gl.clearStencil(v);
        this.current = v;
    }
};

var ColorMask = function ColorMask(context     ) {
    this.context = context;
    this.current = [true, true, true, true];
};

ColorMask.prototype.get = function get ()            { return this.current; };

ColorMask.prototype.set = function set (v           )   {
    var c = this.current;
    if (v[0] !== c[0] || v[1] !== c[1] || v[2] !== c[2] || v[3] !== c[3]) {
        this.context.gl.colorMask(v[0], v[1], v[2], v[3]);
        this.current = v;
    }
};

var DepthMask = function DepthMask(context     ) {
    this.context = context;
    this.current = true;
};

DepthMask.prototype.get = function get ()            { return this.current; };

DepthMask.prototype.set = function set (v           )   {
    if (this.current !== v) {
        this.context.gl.depthMask(v);
        this.current = v;
    }
};

var StencilMask = function StencilMask(context     ) {
    this.context = context;
    this.current = 0xFF;
};

StencilMask.prototype.get = function get ()     { return this.current; };

StencilMask.prototype.set = function set (v    )   {
    if (this.current !== v) {
        this.context.gl.stencilMask(v);
        this.current = v;
    }
};

var StencilFunc = function StencilFunc(context     ) {
    this.context = context;
    this.current = {
        func: context.gl.ALWAYS,
        ref: 0,
        mask: 0xFF
    };
};

StencilFunc.prototype.get = function get ()              { return this.current; };

StencilFunc.prototype.set = function set (v             )   {
    var c = this.current;
    if (v.func !== c.func || v.ref !== c.ref || v.mask !== c.mask) {
        this.context.gl.stencilFunc(v.func, v.ref, v.mask);
        this.current = v;
    }
};

var StencilOp = function StencilOp(context     ) {
    this.context = context;
    var gl = this.context.gl;
    this.current = [gl.KEEP, gl.KEEP, gl.KEEP];
};

StencilOp.prototype.get = function get ()            { return this.current; };

StencilOp.prototype.set = function set (v           )   {
    var c = this.current;
    if (v[0] !== c[0] || v[1] !== c[1] || v[2] !== c[2]) {
        this.context.gl.stencilOp(v[0], v[1], v[2]);
        this.current = v;
    }
};

var StencilTest = function StencilTest(context     ) {
    this.context = context;
    this.current = false;
};

StencilTest.prototype.get = function get ()      { return this.current; };

StencilTest.prototype.set = function set (v     )   {
    if (this.current !== v) {
        var gl = this.context.gl;
        if (v) {
            gl.enable(gl.STENCIL_TEST);
        } else {
            gl.disable(gl.STENCIL_TEST);
        }
        this.current = v;
    }
};

var DepthRange = function DepthRange(context     ) {
    this.context = context;
    this.current = [0, 1];
};

DepthRange.prototype.get = function get ()             { return this.current; };

DepthRange.prototype.set = function set (v            )   {
    var c = this.current;
    if (v[0] !== c[0] || v[1] !== c[1]) {
        this.context.gl.depthRange(v[0], v[1]);
        this.current = v;
    }
};

var DepthTest = function DepthTest(context     ) {
    this.context = context;
    this.current = false;
};

DepthTest.prototype.get = function get ()      { return this.current; };

DepthTest.prototype.set = function set (v     )   {
    if (this.current !== v) {
        var gl = this.context.gl;
        if (v) {
            gl.enable(gl.DEPTH_TEST);
        } else {
            gl.disable(gl.DEPTH_TEST);
        }
        this.current = v;
    }
};

var DepthFunc = function DepthFunc(context     ) {
    this.context = context;
    this.current = context.gl.LESS;
};

DepthFunc.prototype.get = function get ()            { return this.current; };

DepthFunc.prototype.set = function set (v           )   {
    if (this.current !== v) {
        this.context.gl.depthFunc(v);
        this.current = v;
    }
};

var Blend = function Blend(context     ) {
    this.context = context;
    this.current = false;
};

Blend.prototype.get = function get ()      { return this.current; };

Blend.prototype.set = function set (v     )   {
    if (this.current !== v) {
        var gl = this.context.gl;
        if (v) {
            gl.enable(gl.BLEND);
        } else {
            gl.disable(gl.BLEND);
        }
        this.current = v;
    }
};

var BlendFunc = function BlendFunc(context     ) {
    this.context = context;
    var gl = this.context.gl;
    this.current = [gl.ONE, gl.ZERO];
};

BlendFunc.prototype.get = function get ()            { return this.current; };

BlendFunc.prototype.set = function set (v           )   {
    var c = this.current;
    if (v[0] !== c[0] || v[1] !== c[1]) {
        this.context.gl.blendFunc(v[0], v[1]);
        this.current = v;
    }
};

var BlendColor = function BlendColor(context     ) {
    this.context = context;
    this.current = Color.transparent;
};

BlendColor.prototype.get = function get ()    { return this.current; };

BlendColor.prototype.set = function set (v   )   {
    var c = this.current;
    if (v.r !== c.r || v.g !== c.g || v.b !== c.b || v.a !== c.a) {
        this.context.gl.blendColor(v.r, v.g, v.b, v.a);
        this.current = v;
    }
};

var Program = function Program(context     ) {
    this.context = context;
    this.current = null;
};

Program.prototype.get = function get ()            { return this.current; };

Program.prototype.set = function set (v           )   {
    if (this.current !== v) {
        this.context.gl.useProgram(v);
        this.current = v;
    }
};

var LineWidth = function LineWidth(context     ) {
    this.context = context;
    this.current = 1;
};

LineWidth.prototype.get = function get ()     { return this.current; };

LineWidth.prototype.set = function set (v    )   {
    var range = this.context.lineWidthRange;
    var clamped = util.clamp(v, range[0], range[1]);
    if (this.current !== clamped) {
        this.context.gl.lineWidth(clamped);
        this.current = v;
    }
};

var ActiveTextureUnit = function ActiveTextureUnit(context     ) {
    this.context = context;
    this.current = context.gl.TEXTURE0;
};

ActiveTextureUnit.prototype.get = function get ()              { return this.current; };

ActiveTextureUnit.prototype.set = function set (v             )   {
    if (this.current !== v) {
        this.context.gl.activeTexture(v);
        this.current = v;
    }
};

var Viewport = function Viewport(context     ) {
    this.context = context;
    var gl = this.context.gl;
    this.current = [0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight];
};

Viewport.prototype.get = function get ()           { return this.current; };

Viewport.prototype.set = function set (v          )   {
    var c = this.current;
    if (v[0] !== c[0] || v[1] !== c[1] || v[2] !== c[2] || v[3] !== c[3]) {
        this.context.gl.viewport(v[0], v[1], v[2], v[3]);
        this.current = v;
    }
};

var BindFramebuffer = function BindFramebuffer(context     ) {
    this.context = context;
    this.current = null;
};

BindFramebuffer.prototype.get = function get ()                { return this.current; };

BindFramebuffer.prototype.set = function set (v               )   {
    if (this.current !== v) {
        var gl = this.context.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, v);
        this.current = v;
    }
};

var BindRenderbuffer = function BindRenderbuffer(context     ) {
    this.context = context;
    this.current = null;
};

BindRenderbuffer.prototype.get = function get ()                 { return this.current; };

BindRenderbuffer.prototype.set = function set (v                )   {
    if (this.current !== v) {
        var gl = this.context.gl;
        gl.bindRenderbuffer(gl.RENDERBUFFER, v);
        this.current = v;
    }
};

var BindTexture = function BindTexture(context     ) {
    this.context = context;
    this.current = null;
};

BindTexture.prototype.get = function get ()            { return this.current; };

BindTexture.prototype.set = function set (v           )   {
    if (this.current !== v) {
        var gl = this.context.gl;
        gl.bindTexture(gl.TEXTURE_2D, v);
        this.current = v;
    }
};

var BindVertexBuffer = function BindVertexBuffer(context     ) {
    this.context = context;
    this.current = null;
};

BindVertexBuffer.prototype.get = function get ()           { return this.current; };

BindVertexBuffer.prototype.set = function set (v          )   {
    if (this.current !== v) {
        var gl = this.context.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, v);
        this.current = v;
    }
};

var BindElementBuffer = function BindElementBuffer(context     ) {
    this.context = context;
    this.current = null;
};

BindElementBuffer.prototype.get = function get ()           { return this.current; };

BindElementBuffer.prototype.set = function set (v          )   {
    // Always rebind
    var gl = this.context.gl;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v);
    this.current = v;
};

var BindVertexArrayOES = function BindVertexArrayOES(context     ) {
    this.context = context;
    this.current = null;
};

BindVertexArrayOES.prototype.get = function get ()  { return this.current; };

BindVertexArrayOES.prototype.set = function set (v )   {
    if (this.current !== v && this.context.extVertexArrayObject) {
        this.context.extVertexArrayObject.bindVertexArrayOES(v);
        this.current = v;
    }
};

var PixelStoreUnpack = function PixelStoreUnpack(context     ) {
    this.context = context;
    this.current = 4;
};

PixelStoreUnpack.prototype.get = function get ()     { return this.current; };

PixelStoreUnpack.prototype.set = function set (v    )   {
    if (this.current !== v) {
        var gl = this.context.gl;
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, v);
        this.current = v;
    }
};

var PixelStoreUnpackPremultiplyAlpha = function PixelStoreUnpackPremultiplyAlpha(context     ) {
    this.context = context;
    this.current = false;
};

PixelStoreUnpackPremultiplyAlpha.prototype.get = function get ()      { return this.current; };

PixelStoreUnpackPremultiplyAlpha.prototype.set = function set (v     )   {
    if (this.current !== v) {
        var gl = this.context.gl;
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, (v ));
        this.current = v;
    }
};

/**
 * Framebuffer values
 * @private
 */
var FramebufferValue = function FramebufferValue(context     , parent              ) {
    this.context = context;
    this.current = null;
    this.parent = parent;
};

FramebufferValue.prototype.get = function get () { return this.current; };

var ColorAttachment = (function (FramebufferValue) {
    function ColorAttachment(context         , parent                  ) {
        FramebufferValue.call(this, context, parent);
        this.dirty = false;
    }

    if ( FramebufferValue ) ColorAttachment.__proto__ = FramebufferValue;
    ColorAttachment.prototype = Object.create( FramebufferValue && FramebufferValue.prototype );
    ColorAttachment.prototype.constructor = ColorAttachment;

    ColorAttachment.prototype.set = function set (v               )       {
        if (this.dirty || this.current !== v) {
            var gl = this.context.gl;
            this.context.bindFramebuffer.set(this.parent);
            // note: it's possible to attach a renderbuffer to the color
            // attachment point, but thus far MBGL only uses textures for color
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, v, 0);
            this.current = v;
            this.dirty = false;
        }
    };

    ColorAttachment.prototype.setDirty = function setDirty () {
        this.dirty = true;
    };

    return ColorAttachment;
}(FramebufferValue));

var DepthAttachment = (function (FramebufferValue) {
    function DepthAttachment () {
        FramebufferValue.apply(this, arguments);
    }

    if ( FramebufferValue ) DepthAttachment.__proto__ = FramebufferValue;
    DepthAttachment.prototype = Object.create( FramebufferValue && FramebufferValue.prototype );
    DepthAttachment.prototype.constructor = DepthAttachment;

    DepthAttachment.prototype.set = function set (v                    )       {
        if (this.current !== v) {
            var gl = this.context.gl;
            this.context.bindFramebuffer.set(this.parent);
            // note: it's possible to attach a texture to the depth attachment
            // point, but thus far MBGL only uses renderbuffers for depth
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, v);
            this.current = v;
        }
    };

    return DepthAttachment;
}(FramebufferValue));

module.exports = {
    ClearColor: ClearColor,
    ClearDepth: ClearDepth,
    ClearStencil: ClearStencil,
    ColorMask: ColorMask,
    DepthMask: DepthMask,
    StencilMask: StencilMask,
    StencilFunc: StencilFunc,
    StencilOp: StencilOp,
    StencilTest: StencilTest,
    DepthRange: DepthRange,
    DepthTest: DepthTest,
    DepthFunc: DepthFunc,
    Blend: Blend,
    BlendFunc: BlendFunc,
    BlendColor: BlendColor,
    Program: Program,
    LineWidth: LineWidth,
    ActiveTextureUnit: ActiveTextureUnit,
    Viewport: Viewport,
    BindFramebuffer: BindFramebuffer,
    BindRenderbuffer: BindRenderbuffer,
    BindTexture: BindTexture,
    BindVertexBuffer: BindVertexBuffer,
    BindElementBuffer: BindElementBuffer,
    BindVertexArrayOES: BindVertexArrayOES,
    PixelStoreUnpack: PixelStoreUnpack,
    PixelStoreUnpackPremultiplyAlpha: PixelStoreUnpackPremultiplyAlpha,

    ColorAttachment: ColorAttachment,
    DepthAttachment: DepthAttachment,
};

},{"../style-spec/util/color":158,"../util/util":280}],77:[function(require,module,exports){
'use strict';//      

var assert = require('assert');
             
                
                     
                              

                                             
                                         

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
var VertexBuffer = function VertexBuffer(context     , array         , attributes                               , dynamicDraw      ) {
    this.length = array.length;
    this.attributes = attributes;
    this.itemSize = array.bytesPerElement;
    this.dynamicDraw = dynamicDraw;

    this.context = context;
    var gl = context.gl;
    this.buffer = gl.createBuffer();
    context.bindVertexBuffer.set(this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, array.arrayBuffer, this.dynamicDraw ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW);

    if (!this.dynamicDraw) {
        delete array.arrayBuffer;
    }
};

VertexBuffer.prototype.bind = function bind () {
    this.context.bindVertexBuffer.set(this.buffer);
};

VertexBuffer.prototype.updateData = function updateData (array         ) {
    assert(array.length === this.length);
    var gl = this.context.gl;
    this.bind();
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, array.arrayBuffer);
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
    var gl = this.context.gl;
    if (this.buffer) {
        gl.deleteBuffer(this.buffer);
        delete this.buffer;
    }
};

module.exports = VertexBuffer;

},{"assert":13}],78:[function(require,module,exports){
'use strict';//      

var supported = require('@mapbox/mapbox-gl-supported');
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

},{"../package.json":43,"./geo/lng_lat":67,"./geo/lng_lat_bounds":68,"./source/rtl_text_plugin":114,"./style/style":195,"./ui/control/attribution_control":237,"./ui/control/fullscreen_control":238,"./ui/control/geolocate_control":239,"./ui/control/navigation_control":241,"./ui/control/scale_control":242,"./ui/map":252,"./ui/marker":253,"./ui/popup":254,"./util/browser":257,"./util/config":261,"./util/evented":265,"@mapbox/mapbox-gl-supported":3,"@mapbox/point-geometry":4}],79:[function(require,module,exports){
'use strict';//      

var pattern = require('./pattern');
var StencilMode = require('../gl/stencil_mode');
var DepthMode = require('../gl/depth_mode');

                                     
                                                      
                                                                                    

module.exports = drawBackground;

function drawBackground(painter         , sourceCache             , layer                      ) {
    var color = layer.paint.get('background-color');
    var opacity = layer.paint.get('background-opacity');

    if (opacity === 0) { return; }

    var context = painter.context;
    var gl = context.gl;
    var transform = painter.transform;
    var tileSize = transform.tileSize;
    var image = layer.paint.get('background-pattern');

    var pass = (!image && color.a === 1 && opacity === 1) ? 'opaque' : 'translucent';
    if (painter.renderPass !== pass) { return; }

    context.setStencilMode(StencilMode.disabled);
    context.setDepthMode(painter.depthModeForSublayer(0, pass === 'opaque' ? DepthMode.ReadWrite : DepthMode.ReadOnly));
    context.setColorMode(painter.colorModeForRenderPass());

    var program;
    if (image) {
        if (pattern.isPatternMissing(image, painter)) { return; }
        program = painter.useProgram('backgroundPattern');
        pattern.prepare(image, painter, program);
        painter.tileExtentPatternVAO.bind(context, program, painter.tileExtentBuffer, []);
    } else {
        program = painter.useProgram('background');
        gl.uniform4fv(program.uniforms.u_color, [color.r, color.g, color.b, color.a]);
        painter.tileExtentVAO.bind(context, program, painter.tileExtentBuffer, []);
    }

    gl.uniform1f(program.uniforms.u_opacity, opacity);
    var tileIDs = transform.coveringTiles({tileSize: tileSize});

    for (var i = 0, list = tileIDs; i < list.length; i += 1) {
        var tileID = list[i];

        if (image) {
            pattern.setTile({tileID: tileID, tileSize: tileSize}, painter, program);
        }
        gl.uniformMatrix4fv(program.uniforms.u_matrix, false, painter.transform.calculatePosMatrix(tileID.toUnwrapped()));
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, painter.tileExtentBuffer.length);
    }
}

},{"../gl/depth_mode":72,"../gl/stencil_mode":75,"./pattern":96}],80:[function(require,module,exports){
'use strict';//      

var pixelsToTileUnits = require('../source/pixels_to_tile_units');
var StencilMode = require('../gl/stencil_mode');
var DepthMode = require('../gl/depth_mode');

                                     
                                                      
                                                                            
                                                             
                                                        

module.exports = drawCircles;

function drawCircles(painter         , sourceCache             , layer                  , coords                         ) {
    if (painter.renderPass !== 'translucent') { return; }

    var opacity = layer.paint.get('circle-opacity');
    var strokeWidth = layer.paint.get('circle-stroke-width');
    var strokeOpacity = layer.paint.get('circle-stroke-opacity');

    if (opacity.constantOr(1) === 0 && (strokeWidth.constantOr(1) === 0 || strokeOpacity.constantOr(1) === 0)) {
        return;
    }

    var context = painter.context;
    var gl = context.gl;

    context.setDepthMode(painter.depthModeForSublayer(0, DepthMode.ReadOnly));
    // Allow circles to be drawn across boundaries, so that
    // large circles are not clipped to tiles
    context.setStencilMode(StencilMode.disabled);
    context.setColorMode(painter.colorModeForRenderPass());

    var first = true;
    for (var i = 0; i < coords.length; i++) {
        var coord = coords[i];

        var tile = sourceCache.getTile(coord);
        var bucket                   = (tile.getBucket(layer)     );
        if (!bucket) { continue; }

        var prevProgram = painter.context.program.get();
        var programConfiguration = bucket.programConfigurations.get(layer.id);
        var program = painter.useProgram('circle', programConfiguration);
        if (first || program.program !== prevProgram) {
            programConfiguration.setUniforms(context, program, layer.paint, {zoom: painter.transform.zoom});
            first = false;
        }

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
            context,
            gl.TRIANGLES,
            layer.id,
            bucket.layoutVertexBuffer,
            bucket.indexBuffer,
            bucket.segments,
            programConfiguration);
    }
}

},{"../gl/depth_mode":72,"../gl/stencil_mode":75,"../source/pixels_to_tile_units":109}],81:[function(require,module,exports){
'use strict';//      

                                     
                                                      
                                                   
                                                        
                                                             
var pixelsToTileUnits = require('../source/pixels_to_tile_units');
var DepthMode = require('../gl/depth_mode');
var StencilMode = require('../gl/stencil_mode');

module.exports = drawCollisionDebug;

function drawCollisionDebugGeometry(painter         , sourceCache             , layer            , coords                         , drawCircles         ) {
    var context = painter.context;
    var gl = context.gl;
    var program = drawCircles ? painter.useProgram('collisionCircle') : painter.useProgram('collisionBox');

    context.setDepthMode(DepthMode.disabled);
    context.setStencilMode(StencilMode.disabled);
    context.setColorMode(painter.colorModeForRenderPass());

    for (var i = 0; i < coords.length; i++) {
        var coord = coords[i];
        var tile = sourceCache.getTile(coord);
        var bucket                = (tile.getBucket(layer)     );
        if (!bucket) { continue; }
        var buffers = drawCircles ? bucket.collisionCircle : bucket.collisionBox;
        if (!buffers) { continue; }


        gl.uniformMatrix4fv(program.uniforms.u_matrix, false, coord.posMatrix);

        if (!drawCircles) {
            context.lineWidth.set(1);
        }

        gl.uniform1f(program.uniforms.u_camera_to_center_distance, painter.transform.cameraToCenterDistance);
        var pixelRatio = pixelsToTileUnits(tile, 1, painter.transform.zoom);
        var scale = Math.pow(2, painter.transform.zoom - tile.tileID.overscaledZ);
        gl.uniform1f(program.uniforms.u_pixels_to_tile_units, pixelRatio);
        gl.uniform2f(program.uniforms.u_extrude_scale,
            painter.transform.pixelsToGLUnits[0] / (pixelRatio * scale),
            painter.transform.pixelsToGLUnits[1] / (pixelRatio * scale));

        program.draw(
            context,
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

function drawCollisionDebug(painter         , sourceCache             , layer            , coords                         ) {
    drawCollisionDebugGeometry(painter, sourceCache, layer, coords, false);
    drawCollisionDebugGeometry(painter, sourceCache, layer, coords, true);
}

},{"../gl/depth_mode":72,"../gl/stencil_mode":75,"../source/pixels_to_tile_units":109}],82:[function(require,module,exports){
'use strict';//      

var browser = require('../util/browser');
var mat4 = require('@mapbox/gl-matrix').mat4;
var EXTENT = require('../data/extent');
var VertexArrayObject = require('./vertex_array_object');
var ref = require('../data/array_types');
var PosArray = ref.PosArray;
var posAttributes = require('../data/pos_attributes');
var DepthMode = require('../gl/depth_mode');
var StencilMode = require('../gl/stencil_mode');

                                     
                                                      
                                                        

module.exports = drawDebug;

function drawDebug(painter         , sourceCache             , coords                         ) {
    for (var i = 0; i < coords.length; i++) {
        drawDebugTile(painter, sourceCache, coords[i]);
    }
}

function drawDebugTile(painter, sourceCache, coord) {
    var context = painter.context;
    var gl = context.gl;

    context.lineWidth.set(1 * browser.devicePixelRatio);

    var posMatrix = coord.posMatrix;
    var program = painter.useProgram('debug');

    context.setDepthMode(DepthMode.disabled);
    context.setStencilMode(StencilMode.disabled);
    context.setColorMode(painter.colorModeForRenderPass());

    gl.uniformMatrix4fv(program.uniforms.u_matrix, false, posMatrix);
    gl.uniform4f(program.uniforms.u_color, 1, 0, 0, 1);
    painter.debugVAO.bind(context, program, painter.debugBuffer, []);
    gl.drawArrays(gl.LINE_STRIP, 0, painter.debugBuffer.length);

    var vertices = createTextVerticies(coord.toString(), 50, 200, 5);
    var debugTextArray = new PosArray();
    for (var v = 0; v < vertices.length; v += 2) {
        debugTextArray.emplaceBack(vertices[v], vertices[v + 1]);
    }
    var debugTextBuffer = context.createVertexBuffer(debugTextArray, posAttributes.members);
    var debugTextVAO = new VertexArrayObject();
    debugTextVAO.bind(context, program, debugTextBuffer, []);
    gl.uniform4f(program.uniforms.u_color, 1, 1, 1, 1);

    // Draw the halo with multiple 1px lines instead of one wider line because
    // the gl spec doesn't guarantee support for lines with width > 1.
    var tileSize = sourceCache.getTile(coord).tileSize;
    var onePixel = EXTENT / (Math.pow(2, painter.transform.zoom - coord.overscaledZ) * tileSize);
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

},{"../data/array_types":44,"../data/extent":58,"../data/pos_attributes":62,"../gl/depth_mode":72,"../gl/stencil_mode":75,"../util/browser":257,"./vertex_array_object":100,"@mapbox/gl-matrix":2}],83:[function(require,module,exports){
'use strict';//      

var pattern = require('./pattern');
var Color = require('../style-spec/util/color');
var DepthMode = require('../gl/depth_mode');

                                     
                                                      
                                                                        
                                                         
                                                        
                                                     

module.exports = drawFill;

function drawFill(painter         , sourceCache             , layer                , coords                         ) {
    var color = layer.paint.get('fill-color');
    var opacity = layer.paint.get('fill-opacity');

    if (opacity.constantOr(1) === 0) {
        return;
    }

    var context = painter.context;
    context.setColorMode(painter.colorModeForRenderPass());

    var pass = (!layer.paint.get('fill-pattern') &&
        color.constantOr(Color.transparent).a === 1 &&
        opacity.constantOr(0) === 1) ? 'opaque' : 'translucent';

    // Draw fill
    if (painter.renderPass === pass) {
        // Once we switch to earcut drawing we can pull most of the WebGL setup
        // outside of this coords loop.
        context.setDepthMode(painter.depthModeForSublayer(1, painter.renderPass === 'opaque' ? DepthMode.ReadWrite : DepthMode.ReadOnly));
        drawFillTiles(painter, sourceCache, layer, coords, drawFillTile);
    }

    // Draw stroke
    if (painter.renderPass === 'translucent' && layer.paint.get('fill-antialias')) {
        context.lineWidth.set(2);

        // If we defined a different color for the fill outline, we are
        // going to ignore the bits in 0x07 and just care about the global
        // clipping mask.
        // Otherwise, we only want to drawFill the antialiased parts that are
        // *outside* the current shape. This is important in case the fill
        // or stroke color is translucent. If we wouldn't clip to outside
        // the current shape, some pixels from the outline stroke overlapped
        // the (non-antialiased) fill.
        context.setDepthMode(painter.depthModeForSublayer(
            layer.getPaintProperty('fill-outline-color') ? 2 : 0, DepthMode.ReadOnly));
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

        painter.context.setStencilMode(painter.stencilModeForClipping(coord));
        drawFn(painter, sourceCache, layer, tile, coord, bucket, firstTile);
        firstTile = false;
    }
}

function drawFillTile(painter, sourceCache, layer, tile, coord, bucket, firstTile) {
    var gl = painter.context.gl;
    var programConfiguration = bucket.programConfigurations.get(layer.id);

    var program = setFillProgram('fill', layer.paint.get('fill-pattern'), painter, programConfiguration, layer, tile, coord, firstTile);

    program.draw(
        painter.context,
        gl.TRIANGLES,
        layer.id,
        bucket.layoutVertexBuffer,
        bucket.indexBuffer,
        bucket.segments,
        programConfiguration);
}

function drawStrokeTile(painter, sourceCache, layer, tile, coord, bucket, firstTile) {
    var gl = painter.context.gl;
    var programConfiguration = bucket.programConfigurations.get(layer.id);
    var pattern = layer.getPaintProperty('fill-outline-color') ? null : layer.paint.get('fill-pattern');

    var program = setFillProgram('fillOutline', pattern, painter, programConfiguration, layer, tile, coord, firstTile);
    gl.uniform2f(program.uniforms.u_world, gl.drawingBufferWidth, gl.drawingBufferHeight);

    program.draw(
        painter.context,
        gl.LINES,
        layer.id,
        bucket.layoutVertexBuffer,
        bucket.indexBuffer2,
        bucket.segments2,
        programConfiguration);
}

function setFillProgram(programId, pat                     , painter, programConfiguration, layer, tile, coord, firstTile) {
    var program;
    var prevProgram = painter.context.program.get();
    if (!pat) {
        program = painter.useProgram(programId, programConfiguration);
        if (firstTile || program.program !== prevProgram) {
            programConfiguration.setUniforms(painter.context, program, layer.paint, {zoom: painter.transform.zoom});
        }
    } else {
        program = painter.useProgram((programId + "Pattern"), programConfiguration);
        if (firstTile || program.program !== prevProgram) {
            programConfiguration.setUniforms(painter.context, program, layer.paint, {zoom: painter.transform.zoom});
            pattern.prepare(pat, painter, program);
        }
        pattern.setTile(tile, painter, program);
    }
    painter.context.gl.uniformMatrix4fv(program.uniforms.u_matrix, false, painter.translatePosMatrix(
        coord.posMatrix, tile,
        layer.paint.get('fill-translate'),
        layer.paint.get('fill-translate-anchor')
    ));
    return program;
}

},{"../gl/depth_mode":72,"../style-spec/util/color":158,"./pattern":96}],84:[function(require,module,exports){
'use strict';//      

var glMatrix = require('@mapbox/gl-matrix');
var pattern = require('./pattern');
var Texture = require('./texture');
var Color = require('../style-spec/util/color');
var DepthMode = require('../gl/depth_mode');
var mat3 = glMatrix.mat3;
var mat4 = glMatrix.mat4;
var vec3 = glMatrix.vec3;
var StencilMode = require('../gl/stencil_mode');

                                     
                                                      
                                                                                           
                                                                            
                                                        

module.exports = draw;

function draw(painter         , source             , layer                         , coords                         ) {
    if (layer.paint.get('fill-extrusion-opacity') === 0) {
        return;
    }

    if (painter.renderPass === 'offscreen') {
        drawToExtrusionFramebuffer(painter, layer);

        var first = true;
        for (var i = 0, list = coords; i < list.length; i += 1) {
            var coord = list[i];

            var tile = source.getTile(coord);
            var bucket                       = (tile.getBucket(layer)     );
            if (!bucket) { continue; }

            drawExtrusion(painter, source, layer, tile, coord, bucket, first);
            first = false;
        }
    } else if (painter.renderPass === 'translucent') {
        drawExtrusionTexture(painter, layer);
    }
}

function drawToExtrusionFramebuffer(painter, layer) {
    var context = painter.context;
    var gl = context.gl;

    var renderTarget = layer.viewportFrame;

    if (painter.depthRboNeedsClear) {
        painter.setupOffscreenDepthRenderbuffer();
    }

    if (!renderTarget) {
        var texture = new Texture(context, {width: painter.width, height: painter.height, data: null}, gl.RGBA);
        texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE);

        renderTarget = layer.viewportFrame = context.createFramebuffer(painter.width, painter.height);
        renderTarget.colorAttachment.set(texture.texture);
    }

    context.bindFramebuffer.set(renderTarget.framebuffer);
    renderTarget.depthAttachment.set(painter.depthRbo);

    if (painter.depthRboNeedsClear) {
        context.clear({ depth: 1 });
        painter.depthRboNeedsClear = false;
    }

    context.clear({ color: Color.transparent });

    context.setStencilMode(StencilMode.disabled);
    context.setDepthMode(new DepthMode(gl.LEQUAL, DepthMode.ReadWrite, [0, 1]));
    context.setColorMode(painter.colorModeForRenderPass());
}

function drawExtrusionTexture(painter, layer) {
    var renderedTexture = layer.viewportFrame;
    if (!renderedTexture) { return; }

    var context = painter.context;
    var gl = context.gl;
    var program = painter.useProgram('extrusionTexture');

    context.setStencilMode(StencilMode.disabled);
    context.setDepthMode(DepthMode.disabled);
    context.setColorMode(painter.colorModeForRenderPass());

    context.activeTexture.set(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, renderedTexture.colorAttachment.get());

    gl.uniform1f(program.uniforms.u_opacity, layer.paint.get('fill-extrusion-opacity'));
    gl.uniform1i(program.uniforms.u_image, 0);

    var matrix = mat4.create();
    mat4.ortho(matrix, 0, painter.width, painter.height, 0, 0, 1);
    gl.uniformMatrix4fv(program.uniforms.u_matrix, false, matrix);

    gl.uniform2f(program.uniforms.u_world, gl.drawingBufferWidth, gl.drawingBufferHeight);

    painter.viewportVAO.bind(context, program, painter.viewportBuffer, []);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function drawExtrusion(painter, source, layer, tile, coord, bucket, first) {
    var context = painter.context;
    var gl = context.gl;

    var image = layer.paint.get('fill-extrusion-pattern');

    var prevProgram = painter.context.program.get();
    var programConfiguration = bucket.programConfigurations.get(layer.id);
    var program = painter.useProgram(image ? 'fillExtrusionPattern' : 'fillExtrusion', programConfiguration);
    if (first || program.program !== prevProgram) {
        programConfiguration.setUniforms(context, program, layer.paint, {zoom: painter.transform.zoom});
    }

    if (image) {
        if (pattern.isPatternMissing(image, painter)) { return; }
        pattern.prepare(image, painter, program);
        pattern.setTile(tile, painter, program);
        gl.uniform1f(program.uniforms.u_height_factor, -Math.pow(2, coord.overscaledZ) / tile.tileSize / 8);
    }

    painter.context.gl.uniformMatrix4fv(program.uniforms.u_matrix, false, painter.translatePosMatrix(
        coord.posMatrix,
        tile,
        layer.paint.get('fill-extrusion-translate'),
        layer.paint.get('fill-extrusion-translate-anchor')
    ));

    setLight(program, painter);

    program.draw(
        context,
        gl.TRIANGLES,
        layer.id,
        bucket.layoutVertexBuffer,
        bucket.indexBuffer,
        bucket.segments,
        programConfiguration);
}

function setLight(program, painter) {
    var gl = painter.context.gl;
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

},{"../gl/depth_mode":72,"../gl/stencil_mode":75,"../style-spec/util/color":158,"./pattern":96,"./texture":98,"@mapbox/gl-matrix":2}],85:[function(require,module,exports){
'use strict';//      

var mat4 = require('@mapbox/gl-matrix').mat4;
var Texture = require('./texture');
var pixelsToTileUnits = require('../source/pixels_to_tile_units');
var Color = require('../style-spec/util/color');
var DepthMode = require('../gl/depth_mode');
var StencilMode = require('../gl/stencil_mode');
var ColorMode = require('../gl/color_mode');

                                     
                                                      
                                                                              
                                                               
                                                        

module.exports = drawHeatmap;

function drawHeatmap(painter         , sourceCache             , layer                   , coords                         ) {
    if (layer.paint.get('heatmap-opacity') === 0) {
        return;
    }

    if (painter.renderPass === 'offscreen') {
        var context = painter.context;
        var gl = context.gl;

        context.setDepthMode(painter.depthModeForSublayer(0, DepthMode.ReadOnly));

        // Allow kernels to be drawn across boundaries, so that
        // large kernels are not clipped to tiles
        context.setStencilMode(StencilMode.disabled);

        bindFramebuffer(context, painter, layer);

        context.clear({ color: Color.transparent });

        // Turn on additive blending for kernels, which is a key aspect of kernel density estimation formula
        context.setColorMode(new ColorMode([gl.ONE, gl.ONE], Color.transparent, [true, true, true, true]));

        var first = true;
        for (var i = 0; i < coords.length; i++) {
            var coord = coords[i];

            // Skip tiles that have uncovered parents to avoid flickering; we don't need
            // to use complex tile masking here because the change between zoom levels is subtle,
            // so it's fine to simply render the parent until all its 4 children are loaded
            if (sourceCache.hasRenderableParent(coord)) { continue; }

            var tile = sourceCache.getTile(coord);
            var bucket                 = (tile.getBucket(layer)     );
            if (!bucket) { continue; }

            var prevProgram = painter.context.program.get();
            var programConfiguration = bucket.programConfigurations.get(layer.id);
            var program = painter.useProgram('heatmap', programConfiguration);
            var ref = painter.transform;
            var zoom = ref.zoom;
            if (first || program.program !== prevProgram) {
                programConfiguration.setUniforms(painter.context, program, layer.paint, {zoom: zoom});
                first = false;
            }

            gl.uniform1f(program.uniforms.u_extrude_scale, pixelsToTileUnits(tile, 1, zoom));

            gl.uniform1f(program.uniforms.u_intensity, layer.paint.get('heatmap-intensity'));
            gl.uniformMatrix4fv(program.uniforms.u_matrix, false, coord.posMatrix);

            program.draw(
                context,
                gl.TRIANGLES,
                layer.id,
                bucket.layoutVertexBuffer,
                bucket.indexBuffer,
                bucket.segments,
                programConfiguration);
        }

        context.viewport.set([0, 0, painter.width, painter.height]);

    } else if (painter.renderPass === 'translucent') {
        painter.context.setColorMode(painter.colorModeForRenderPass());
        renderTextureToMap(painter, layer);
    }
}

function bindFramebuffer(context, painter, layer) {
    var gl = context.gl;
    context.activeTexture.set(gl.TEXTURE1);

    // Use a 4x downscaled screen texture for better performance
    context.viewport.set([0, 0, painter.width / 4, painter.height / 4]);

    var fbo = layer.heatmapFbo;

    if (!fbo) {
        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

        fbo = layer.heatmapFbo = context.createFramebuffer(painter.width / 4, painter.height / 4);

        bindTextureToFramebuffer(context, painter, texture, fbo);

    } else {
        gl.bindTexture(gl.TEXTURE_2D, fbo.colorAttachment.get());
        context.bindFramebuffer.set(fbo.framebuffer);
    }
}

function bindTextureToFramebuffer(context, painter, texture, fbo) {
    var gl = context.gl;
    // Use the higher precision half-float texture where available (producing much smoother looking heatmaps);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, painter.width / 4, painter.height / 4, 0, gl.RGBA,
        context.extTextureHalfFloat ? context.extTextureHalfFloat.HALF_FLOAT_OES : gl.UNSIGNED_BYTE, null);

    fbo.colorAttachment.set(texture);

    // If using half-float texture as a render target is not supported, fall back to a low precision texture
    if (context.extTextureHalfFloat && gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
        context.extTextureHalfFloat = null;
        fbo.colorAttachment.setDirty();
        bindTextureToFramebuffer(context, painter, texture, fbo);
    }
}

function renderTextureToMap(painter, layer) {
    var context = painter.context;
    var gl = context.gl;


    // Here we bind two different textures from which we'll sample in drawing
    // heatmaps: the kernel texture, prepared in the offscreen pass, and a
    // color ramp texture.
    var fbo = layer.heatmapFbo;
    if (!fbo) { return; }
    context.activeTexture.set(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, fbo.colorAttachment.get());

    context.activeTexture.set(gl.TEXTURE1);
    var colorRampTexture = layer.colorRampTexture;
    if (!colorRampTexture) {
        colorRampTexture = layer.colorRampTexture = new Texture(context, layer.colorRamp, gl.RGBA);
    }
    colorRampTexture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE);

    context.setDepthMode(DepthMode.disabled);

    var program = painter.useProgram('heatmapTexture');

    var opacity = layer.paint.get('heatmap-opacity');
    gl.uniform1f(program.uniforms.u_opacity, opacity);
    gl.uniform1i(program.uniforms.u_image, 0);
    gl.uniform1i(program.uniforms.u_color_ramp, 1);

    var matrix = mat4.create();
    mat4.ortho(matrix, 0, painter.width, painter.height, 0, 0, 1);
    gl.uniformMatrix4fv(program.uniforms.u_matrix, false, matrix);

    gl.uniform2f(program.uniforms.u_world, gl.drawingBufferWidth, gl.drawingBufferHeight);

    painter.viewportVAO.bind(painter.context, program, painter.viewportBuffer, []);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

},{"../gl/color_mode":70,"../gl/depth_mode":72,"../gl/stencil_mode":75,"../source/pixels_to_tile_units":109,"../style-spec/util/color":158,"./texture":98,"@mapbox/gl-matrix":2}],86:[function(require,module,exports){
'use strict';//      
var Coordinate = require('../geo/coordinate');
var Texture = require('./texture');
var EXTENT = require('../data/extent');
var mat4 = require('@mapbox/gl-matrix').mat4;
var StencilMode = require('../gl/stencil_mode');
var DepthMode = require('../gl/depth_mode');

                                     
                                                      
                                                                                  
                                                        

module.exports = drawHillshade;

function drawHillshade(painter         , sourceCache             , layer                     , tileIDs                         ) {
    if (painter.renderPass !== 'offscreen' && painter.renderPass !== 'translucent') { return; }

    var context = painter.context;

    context.setDepthMode(painter.depthModeForSublayer(0, DepthMode.ReadOnly));
    context.setStencilMode(StencilMode.disabled);
    context.setColorMode(painter.colorModeForRenderPass());

    for (var i = 0, list = tileIDs; i < list.length; i += 1) {
        var tileID = list[i];

        var tile = sourceCache.getTile(tileID);
        if (tile.needsHillshadePrepare && painter.renderPass === 'offscreen') {
            prepareHillshade(painter, tile);
            continue;
        } else if (painter.renderPass === 'translucent') {
            renderHillshade(painter, tile, layer);
        }
    }

    context.viewport.set([0, 0, painter.width, painter.height]);
}

function setLight(program, painter, layer) {
    var azimuthal = layer.paint.get('hillshade-illumination-direction') * (Math.PI / 180);
    // modify azimuthal angle by map rotation if light is anchored at the viewport
    if (layer.paint.get('hillshade-illumination-anchor') === 'viewport')  { azimuthal -= painter.transform.angle; }
    painter.context.gl.uniform2f(program.uniforms.u_light, layer.paint.get('hillshade-exaggeration'), azimuthal);

}

function getTileLatRange(painter, tileID                  ) {
    var coordinate0 = tileID.toCoordinate();
    var coordinate1 = new Coordinate(coordinate0.column, coordinate0.row + 1, coordinate0.zoom);
    return [painter.transform.coordinateLocation(coordinate0).lat, painter.transform.coordinateLocation(coordinate1).lat];
}

function renderHillshade(painter, tile, layer) {
    var context = painter.context;
    var gl = context.gl;
    var fbo = tile.fbo;
    if (!fbo) { return; }

    var program = painter.useProgram('hillshade');
    var posMatrix = painter.transform.calculatePosMatrix(tile.tileID.toUnwrapped());
    setLight(program, painter, layer);
    // for scaling the magnitude of a points slope by its latitude
    var latRange = getTileLatRange(painter, tile.tileID);
    context.activeTexture.set(gl.TEXTURE0);

    gl.bindTexture(gl.TEXTURE_2D, fbo.colorAttachment.get());

    gl.uniformMatrix4fv(program.uniforms.u_matrix, false, posMatrix);
    gl.uniform2fv(program.uniforms.u_latrange, latRange);
    gl.uniform1i(program.uniforms.u_image, 0);

    var shadowColor = layer.paint.get("hillshade-shadow-color");
    gl.uniform4f(program.uniforms.u_shadow, shadowColor.r, shadowColor.g, shadowColor.b, shadowColor.a);
    var highlightColor = layer.paint.get("hillshade-highlight-color");
    gl.uniform4f(program.uniforms.u_highlight, highlightColor.r, highlightColor.g, highlightColor.b, highlightColor.a);
    var accentColor = layer.paint.get("hillshade-accent-color");
    gl.uniform4f(program.uniforms.u_accent, accentColor.r, accentColor.g, accentColor.b, accentColor.a);

    if (tile.maskedBoundsBuffer && tile.maskedIndexBuffer && tile.segments) {
        program.draw(
            context,
            gl.TRIANGLES,
            layer.id,
            tile.maskedBoundsBuffer,
            tile.maskedIndexBuffer,
            tile.segments
        );
    } else {
        var buffer = painter.rasterBoundsBuffer;
        var vao = painter.rasterBoundsVAO;
        vao.bind(context, program, buffer, []);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, buffer.length);
    }
}


// hillshade rendering is done in two steps. the prepare step first calculates the slope of the terrain in the x and y
// directions for each pixel, and saves those values to a framebuffer texture in the r and g channels.
function prepareHillshade(painter, tile) {
    var context = painter.context;
    var gl = context.gl;
    // decode rgba levels by using integer overflow to convert each Uint32Array element -> 4 Uint8Array elements.
    // ex.
    // Uint32:
    // base 10 - 67308
    // base 2 - 0000 0000 0000 0001 0000 0110 1110 1100
    //
    // Uint8:
    // base 10 - 0, 1, 6, 236 (this order is reversed in the resulting array via the overflow.
    // first 8 bits represent 236, so the r component of the texture pixel will be 236 etc.)
    // base 2 - 0000 0000, 0000 0001, 0000 0110, 1110 1100
    if (tile.dem && tile.dem.level) {
        var tileSize = tile.dem.level.dim;

        var pixelData = tile.dem.getPixels();
        context.activeTexture.set(gl.TEXTURE1);

        // if UNPACK_PREMULTIPLY_ALPHA_WEBGL is set to true prior to drawHillshade being called
        // tiles will appear blank, because as you can see above the alpha value for these textures
        // is always 0
        context.pixelStoreUnpackPremultiplyAlpha.set(false);
        tile.demTexture = tile.demTexture || painter.getTileTexture(tile.tileSize);
        if (tile.demTexture) {
            var demTexture = tile.demTexture;
            demTexture.update(pixelData, false);
            demTexture.bind(gl.NEAREST, gl.CLAMP_TO_EDGE);
        } else {
            tile.demTexture = new Texture(context, pixelData, gl.RGBA, false);
            tile.demTexture.bind(gl.NEAREST, gl.CLAMP_TO_EDGE);
        }

        context.activeTexture.set(gl.TEXTURE0);

        var fbo = tile.fbo;

        if (!fbo) {
            var renderTexture = new Texture(context, {width: tileSize, height: tileSize, data: null}, gl.RGBA);
            renderTexture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE);

            fbo = tile.fbo = context.createFramebuffer(tileSize, tileSize);
            fbo.colorAttachment.set(renderTexture.texture);
        }

        context.bindFramebuffer.set(fbo.framebuffer);
        context.viewport.set([0, 0, tileSize, tileSize]);

        var matrix = mat4.create();
        // Flip rendering at y axis.
        mat4.ortho(matrix, 0, EXTENT, -EXTENT, 0, 0, 1);
        mat4.translate(matrix, matrix, [0, -EXTENT, 0]);

        var program = painter.useProgram('hillshadePrepare');

        gl.uniformMatrix4fv(program.uniforms.u_matrix, false, matrix);
        gl.uniform1f(program.uniforms.u_zoom, tile.tileID.overscaledZ);
        gl.uniform2fv(program.uniforms.u_dimension, [tileSize * 2, tileSize * 2]);
        gl.uniform1i(program.uniforms.u_image, 1);

        var buffer = painter.rasterBoundsBuffer;
        var vao = painter.rasterBoundsVAO;

        vao.bind(context, program, buffer, []);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, buffer.length);

        tile.needsHillshadePrepare = false;
    }
}

},{"../data/extent":58,"../geo/coordinate":66,"../gl/depth_mode":72,"../gl/stencil_mode":75,"./texture":98,"@mapbox/gl-matrix":2}],87:[function(require,module,exports){
'use strict';//      

var browser = require('../util/browser');
var pixelsToTileUnits = require('../source/pixels_to_tile_units');
var DepthMode = require('../gl/depth_mode');

                                     
                                                      
                                                                        
                                                         
                                                        

module.exports = function drawLine(painter         , sourceCache             , layer                , coords                         ) {
    if (painter.renderPass !== 'translucent') { return; }

    var opacity = layer.paint.get('line-opacity');
    if (opacity.constantOr(1) === 0) { return; }

    var context = painter.context;

    context.setDepthMode(painter.depthModeForSublayer(0, DepthMode.ReadOnly));
    context.setColorMode(painter.colorModeForRenderPass());

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
        var prevProgram = painter.context.program.get();
        var program = painter.useProgram(programId, programConfiguration);
        var programChanged = firstTile || program.program !== prevProgram;
        var tileRatioChanged = prevTileZoom !== tile.tileID.overscaledZ;

        if (programChanged) {
            programConfiguration.setUniforms(painter.context, program, layer.paint, {zoom: painter.transform.zoom});
        }
        drawLineTile(program, painter, tile, bucket, layer, coord, programConfiguration, programChanged, tileRatioChanged);
        prevTileZoom = tile.tileID.overscaledZ;
        firstTile = false;
    }
};

function drawLineTile(program, painter, tile, bucket, layer, coord, programConfiguration, programChanged, tileRatioChanged) {
    var context = painter.context;
    var gl = context.gl;
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
            context.activeTexture.set(gl.TEXTURE0);
            painter.lineAtlas.bind(context);

            gl.uniform1f(program.uniforms.u_tex_y_a, (posA     ).y);
            gl.uniform1f(program.uniforms.u_tex_y_b, (posB     ).y);
            gl.uniform1f(program.uniforms.u_mix, dasharray.t);

        } else if (image) {
            gl.uniform1i(program.uniforms.u_image, 0);
            context.activeTexture.set(gl.TEXTURE0);
            painter.imageManager.bind(context);

            gl.uniform2fv(program.uniforms.u_pattern_tl_a, (imagePosA     ).tl);
            gl.uniform2fv(program.uniforms.u_pattern_br_a, (imagePosA     ).br);
            gl.uniform2fv(program.uniforms.u_pattern_tl_b, (imagePosB     ).tl);
            gl.uniform2fv(program.uniforms.u_pattern_br_b, (imagePosB     ).br);
            gl.uniform1f(program.uniforms.u_fade, image.t);
        }
    }

    context.setStencilMode(painter.stencilModeForClipping(coord));

    var posMatrix = painter.translatePosMatrix(coord.posMatrix, tile, layer.paint.get('line-translate'), layer.paint.get('line-translate-anchor'));
    gl.uniformMatrix4fv(program.uniforms.u_matrix, false, posMatrix);

    gl.uniform1f(program.uniforms.u_ratio, 1 / pixelsToTileUnits(tile, 1, painter.transform.zoom));

    program.draw(
        context,
        gl.TRIANGLES,
        layer.id,
        bucket.layoutVertexBuffer,
        bucket.indexBuffer,
        bucket.segments,
        programConfiguration);
}

},{"../gl/depth_mode":72,"../source/pixels_to_tile_units":109,"../util/browser":257}],88:[function(require,module,exports){
'use strict';//      

var util = require('../util/util');
var ImageSource = require('../source/image_source');
var browser = require('../util/browser');
var StencilMode = require('../gl/stencil_mode');
var DepthMode = require('../gl/depth_mode');

                                     
                                                      
                                                                            
                                                        

module.exports = drawRaster;

function drawRaster(painter         , sourceCache             , layer                  , coords                         ) {
    if (painter.renderPass !== 'translucent') { return; }
    if (layer.paint.get('raster-opacity') === 0) { return; }

    var context = painter.context;
    var gl = context.gl;
    var source = sourceCache.getSource();
    var program = painter.useProgram('raster');

    context.setStencilMode(StencilMode.disabled);
    context.setColorMode(painter.colorModeForRenderPass());

    // Constant parameters.
    gl.uniform1f(program.uniforms.u_brightness_low, layer.paint.get('raster-brightness-min'));
    gl.uniform1f(program.uniforms.u_brightness_high, layer.paint.get('raster-brightness-max'));
    gl.uniform1f(program.uniforms.u_saturation_factor, saturationFactor(layer.paint.get('raster-saturation')));
    gl.uniform1f(program.uniforms.u_contrast_factor, contrastFactor(layer.paint.get('raster-contrast')));
    gl.uniform3fv(program.uniforms.u_spin_weights, spinWeights(layer.paint.get('raster-hue-rotate')));
    gl.uniform1f(program.uniforms.u_buffer_scale, 1);
    gl.uniform1i(program.uniforms.u_image0, 0);
    gl.uniform1i(program.uniforms.u_image1, 1);

    var minTileZ = coords.length && coords[0].overscaledZ;

    for (var i = 0, list = coords; i < list.length; i += 1) {
        // Set the lower zoom level to sublayer 0, and higher zoom levels to higher sublayers
        // Use gl.LESS to prevent double drawing in areas where tiles overlap.
        var coord = list[i];

        context.setDepthMode(painter.depthModeForSublayer(coord.overscaledZ - minTileZ,
            layer.paint.get('raster-opacity') === 1 ? DepthMode.ReadWrite : DepthMode.ReadOnly, gl.LESS));

        var tile = sourceCache.getTile(coord);
        var posMatrix = painter.transform.calculatePosMatrix(coord.toUnwrapped(), true);

        tile.registerFadeDuration(layer.paint.get('raster-fade-duration'));

        gl.uniformMatrix4fv(program.uniforms.u_matrix, false, posMatrix);

        var parentTile = sourceCache.findLoadedParent(coord, 0, {}),
            fade = getFadeValues(tile, parentTile, sourceCache, layer, painter.transform);

        var parentScaleBy = (void 0), parentTL = (void 0);

        context.activeTexture.set(gl.TEXTURE0);
        tile.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE, gl.LINEAR_MIPMAP_NEAREST);

        context.activeTexture.set(gl.TEXTURE1);

        if (parentTile) {
            parentTile.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE, gl.LINEAR_MIPMAP_NEAREST);
            parentScaleBy = Math.pow(2, parentTile.tileID.overscaledZ - tile.tileID.overscaledZ);
            parentTL = [tile.tileID.canonical.x * parentScaleBy % 1, tile.tileID.canonical.y * parentScaleBy % 1];

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
            vao.bind(context, program, buffer, []);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, buffer.length);
        } else if (tile.maskedBoundsBuffer && tile.maskedIndexBuffer && tile.segments) {
            program.draw(
                context,
                gl.TRIANGLES,
                layer.id,
                tile.maskedBoundsBuffer,
                tile.maskedIndexBuffer,
                tile.segments
            );
        } else {
            var buffer$1 = painter.rasterBoundsBuffer;
            var vao$1 = painter.rasterBoundsVAO;
            vao$1.bind(context, program, buffer$1, []);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, buffer$1.length);
        }
    }
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
        var now = browser.now();
        var sinceTile = (now - tile.timeAdded) / fadeDuration;
        var sinceParent = parentTile ? (now - parentTile.timeAdded) / fadeDuration : -1;

        var source = sourceCache.getSource();
        var idealZ = transform.coveringZoomLevel({
            tileSize: source.tileSize,
            roundZoom: source.roundZoom
        });

        // if no parent or parent is older, fade in; if parent is younger, fade out
        var fadeIn = !parentTile || Math.abs(parentTile.tileID.overscaledZ - idealZ) > Math.abs(tile.tileID.overscaledZ - idealZ);

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

},{"../gl/depth_mode":72,"../gl/stencil_mode":75,"../source/image_source":107,"../util/browser":257,"../util/util":280}],89:[function(require,module,exports){
'use strict';//      

var drawCollisionDebug = require('./draw_collision_debug');
var pixelsToTileUnits = require('../source/pixels_to_tile_units');
var symbolProjection = require('../symbol/projection');
var symbolSize = require('../symbol/symbol_size');
var mat4 = require('@mapbox/gl-matrix').mat4;
var identityMat4 = mat4.identity(new Float32Array(16));
var symbolLayoutProperties = require('../style/style_layer/symbol_style_layer_properties').layout;
var StencilMode = require('../gl/stencil_mode');
var DepthMode = require('../gl/depth_mode');

                                     
                                                      
                                                                            
                                                             
                                                        

module.exports = drawSymbols;

function drawSymbols(painter         , sourceCache             , layer                  , coords                         ) {
    if (painter.renderPass !== 'translucent') { return; }

    var context = painter.context;

    // Disable the stencil test so that labels aren't clipped to tile boundaries.
    context.setStencilMode(StencilMode.disabled);
    context.setColorMode(painter.colorModeForRenderPass());

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

    var context = painter.context;
    var gl = context.gl;
    var tr = painter.transform;

    var rotateWithMap = rotationAlignment === 'map';
    var pitchWithMap = pitchAlignment === 'map';
    var alongLine = rotateWithMap && layer.layout.get('symbol-placement') === 'line';
    // Line label rotation happens in `updateLineLabels`
    // Pitched point labels are automatically rotated by the labelPlaneMatrix projection
    // Unpitched point labels need to have their rotation applied after projection
    var rotateInShader = rotateWithMap && !pitchWithMap && !alongLine;

    var depthOn = pitchWithMap;

    context.setDepthMode(depthOn ? painter.depthModeForSublayer(0, DepthMode.ReadOnly) : DepthMode.disabled);

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
            programConfiguration.setUniforms(painter.context, program, layer.paint, {zoom: painter.transform.zoom});

            setSymbolDrawState(program, painter, layer, isText, rotateInShader, pitchWithMap, sizeData);
        }

        context.activeTexture.set(gl.TEXTURE0);
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

        gl.uniform1f(program.uniforms.u_fade_change, painter.options.fadeDuration ? painter.symbolFadeChange : 1);

        drawTileSymbols(program, programConfiguration, painter, layer, tile, buffers, isText, isSDF, pitchWithMap);
    }
}

function setSymbolDrawState(program, painter, layer, isText, rotateInShader, pitchWithMap, sizeData) {

    var gl = painter.context.gl;
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

    var context = painter.context;
    var gl = context.gl;
    var tr = painter.transform;

    if (isSDF) {
        var hasHalo = layer.paint.get(isText ? 'text-halo-width' : 'icon-halo-width').constantOr(1) !== 0;
        var gammaScale = (pitchWithMap ? Math.cos(tr._pitch) * tr.cameraToCenterDistance : 1);
        gl.uniform1f(program.uniforms.u_gamma_scale, gammaScale);

        if (hasHalo) { // Draw halo underneath the text.
            gl.uniform1f(program.uniforms.u_is_halo, 1);
            drawSymbolElements(buffers, layer, context, program);
        }

        gl.uniform1f(program.uniforms.u_is_halo, 0);
    }

    drawSymbolElements(buffers, layer, context, program);
}

function drawSymbolElements(buffers, layer, context, program) {
    program.draw(
        context,
        context.gl.TRIANGLES,
        layer.id,
        buffers.layoutVertexBuffer,
        buffers.indexBuffer,
        buffers.segments,
        buffers.programConfigurations.get(layer.id),
        buffers.dynamicLayoutVertexBuffer,
        buffers.opacityVertexBuffer);
}

},{"../gl/depth_mode":72,"../gl/stencil_mode":75,"../source/pixels_to_tile_units":109,"../style/style_layer/symbol_style_layer_properties":214,"../symbol/projection":229,"../symbol/symbol_size":233,"./draw_collision_debug":81,"@mapbox/gl-matrix":2}],90:[function(require,module,exports){
'use strict';//      

var ShelfPack = require('@mapbox/shelf-pack');
var ref = require('../util/image');
var AlphaImage = ref.AlphaImage;

                                                                   

var padding = 1;

             
              
              
              
             
  

                             
               
                         
  

                          
                      
                                                    
  

function makeGlyphAtlas(stacks                                     )             {
    var image = new AlphaImage({width: 0, height: 0});
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

                image.resize({
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
    image.resize({
        width: pack.w,
        height: pack.h
    });

    return {image: image, positions: positions};
}

module.exports = {
    makeGlyphAtlas: makeGlyphAtlas
};

},{"../util/image":268,"@mapbox/shelf-pack":5}],91:[function(require,module,exports){
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
                  // Clone the glyph so that our own copy of its ArrayBuffer doesn't get transferred.
                  var ref = list[i];
                  var stack = ref.stack;
                  var id = ref.id;
                  var glyph = ref.glyph;

                  (result[stack] || (result[stack] = {}))[id] = glyph && {
                      id: glyph.id,
                      bitmap: glyph.bitmap.clone(),
                      metrics: glyph.metrics
                  };
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
          bitmap: new AlphaImage({width: 30, height: 30}, tinySDF.draw(String.fromCharCode(id))),
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

},{"../style/load_glyph_range":189,"../util/image":268,"../util/is_char_in_unicode_block":270,"../util/util":280,"@mapbox/tiny-sdf":6}],92:[function(require,module,exports){
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
    var image = new RGBAImage({width: 0, height: 0});
    var positions = {};

    var pack = new ShelfPack(0, 0, {autoResize: true});

    for (var id in images) {
        var src = images[id];

        var bin = pack.packOne(
            src.data.width + 2 * padding,
            src.data.height + 2 * padding);

        image.resize({
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
    image.resize({
        width: pack.w,
        height: pack.h
    });

    return {image: image, positions: positions};
}

module.exports = {
    imagePosition: imagePosition,
    makeImageAtlas: makeImageAtlas
};

},{"../util/image":268,"@mapbox/shelf-pack":5}],93:[function(require,module,exports){
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
      this.atlasImage = new RGBAImage({width: 64, height: 64});
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
              // Clone the image so that our own copy of its ArrayBuffer doesn't get transferred.
              response[id] = {
                  data: image.data.clone(),
                  pixelRatio: image.pixelRatio,
                  sdf: image.sdf
              };
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

      this.atlasImage.resize(this.getPixelSize());

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

  ImageManager.prototype.bind = function bind (context       ) {
      var gl = context.gl;
      if (!this.atlasTexture) {
          this.atlasTexture = new Texture(context, this.atlasImage, gl.RGBA);
      } else if (this.dirty) {
          this.atlasTexture.update(this.atlasImage);
          this.dirty = false;
      }

      this.atlasTexture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE);
  };

module.exports = ImageManager;

},{"../util/image":268,"./image_atlas":92,"./texture":98,"@mapbox/shelf-pack":5,"assert":13}],94:[function(require,module,exports){
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

LineAtlas.prototype.bind = function bind (context     ) {
    var gl = context.gl;
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

},{"../util/util":280}],95:[function(require,module,exports){
'use strict';//      

var browser = require('../util/browser');
var mat4 = require('@mapbox/gl-matrix').mat4;
var SourceCache = require('../source/source_cache');
var EXTENT = require('../data/extent');
var pixelsToTileUnits = require('../source/pixels_to_tile_units');
var util = require('../util/util');
var VertexArrayObject = require('./vertex_array_object');
var ref = require('../data/array_types');
var RasterBoundsArray = ref.RasterBoundsArray;
var PosArray = ref.PosArray;
var rasterBoundsAttributes = require('../data/raster_bounds_attributes');
var posAttributes = require('../data/pos_attributes');
var ref$1 = require('../data/program_configuration');
var ProgramConfiguration = ref$1.ProgramConfiguration;
var CrossTileSymbolIndex = require('../symbol/cross_tile_symbol_index');
var shaders = require('../shaders');
var Program = require('./program');
var Context = require('../gl/context');
var DepthMode = require('../gl/depth_mode');
var StencilMode = require('../gl/stencil_mode');
var ColorMode = require('../gl/color_mode');
var Texture = require('./texture');
var updateTileMasks = require('./tile_mask');
var Color = require('../style-spec/util/color');

var draw = {
    symbol: require('./draw_symbol'),
    circle: require('./draw_circle'),
    heatmap: require('./draw_heatmap'),
    line: require('./draw_line'),
    fill: require('./draw_fill'),
    'fill-extrusion': require('./draw_fill_extrusion'),
    hillshade: require('./draw_hillshade'),
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
    this.context = new Context(gl);
    this.transform = transform;
    this._tileTextures = {};

    this.setup();

    // Within each layer there are multiple distinct z-planes that can be drawn to.
    // This is implemented using the WebGL depth buffer.
    this.numSublayers = SourceCache.maxUnderzooming + SourceCache.maxOverzooming + 1;
    this.depthEpsilon = 1 / Math.pow(2, 16);

    this.depthRboNeedsClear = true;

    this.emptyProgramConfiguration = new ProgramConfiguration();

    this.crossTileSymbolIndex = new CrossTileSymbolIndex();
};

/*
 * Update the GL viewport, projection matrix, and transforms to compensate
 * for a new width and height value.
 */
Painter.prototype.resize = function resize (width    , height    ) {
        var this$1 = this;

    var gl = this.context.gl;

    this.width = width * browser.devicePixelRatio;
    this.height = height * browser.devicePixelRatio;
    this.context.viewport.set([0, 0, this.width, this.height]);

    if (this.style) {
        for (var i = 0, list = this$1.style._order; i < list.length; i += 1) {
            var layerId = list[i];

                this$1.style._layers[layerId].resize();
        }
    }

    if (this.depthRbo) {
        gl.deleteRenderbuffer(this.depthRbo);
        this.depthRbo = null;
    }
};

Painter.prototype.setup = function setup () {
    var context = this.context;

    var tileExtentArray = new PosArray();
    tileExtentArray.emplaceBack(0, 0);
    tileExtentArray.emplaceBack(EXTENT, 0);
    tileExtentArray.emplaceBack(0, EXTENT);
    tileExtentArray.emplaceBack(EXTENT, EXTENT);
    this.tileExtentBuffer = context.createVertexBuffer(tileExtentArray, posAttributes.members);
    this.tileExtentVAO = new VertexArrayObject();
    this.tileExtentPatternVAO = new VertexArrayObject();

    var debugArray = new PosArray();
    debugArray.emplaceBack(0, 0);
    debugArray.emplaceBack(EXTENT, 0);
    debugArray.emplaceBack(EXTENT, EXTENT);
    debugArray.emplaceBack(0, EXTENT);
    debugArray.emplaceBack(0, 0);
    this.debugBuffer = context.createVertexBuffer(debugArray, posAttributes.members);
    this.debugVAO = new VertexArrayObject();

    var rasterBoundsArray = new RasterBoundsArray();
    rasterBoundsArray.emplaceBack(0, 0, 0, 0);
    rasterBoundsArray.emplaceBack(EXTENT, 0, EXTENT, 0);
    rasterBoundsArray.emplaceBack(0, EXTENT, 0, EXTENT);
    rasterBoundsArray.emplaceBack(EXTENT, EXTENT, EXTENT, EXTENT);
    this.rasterBoundsBuffer = context.createVertexBuffer(rasterBoundsArray, rasterBoundsAttributes.members);
    this.rasterBoundsVAO = new VertexArrayObject();

    var viewportArray = new PosArray();
    viewportArray.emplaceBack(0, 0);
    viewportArray.emplaceBack(1, 0);
    viewportArray.emplaceBack(0, 1);
    viewportArray.emplaceBack(1, 1);
    this.viewportBuffer = context.createVertexBuffer(viewportArray, posAttributes.members);
    this.viewportVAO = new VertexArrayObject();
};

/*
 * Reset the drawing canvas by clearing the stencil buffer so that we can draw
 * new tiles at the same location, while retaining previously drawn pixels.
 */
Painter.prototype.clearStencil = function clearStencil () {
    var context = this.context;
    var gl = context.gl;

    // As a temporary workaround for https://github.com/mapbox/mapbox-gl-js/issues/5490,
    // pending an upstream fix, we draw a fullscreen stencil=0 clipping mask here,
    // effectively clearing the stencil buffer: once an upstream patch lands, remove
    // this function in favor of context.clear({ stencil: 0x0 })

    context.setColorMode(ColorMode.disabled);
    context.setDepthMode(DepthMode.disabled);
    context.setStencilMode(new StencilMode({ func: gl.ALWAYS, mask: 0 }, 0x0, 0xFF, gl.ZERO, gl.ZERO, gl.ZERO));

    var matrix = mat4.create();
    mat4.ortho(matrix, 0, this.width, this.height, 0, 0, 1);
    mat4.scale(matrix, matrix, [gl.drawingBufferWidth, gl.drawingBufferHeight, 0]);

    var program = this.useProgram('clippingMask');
    gl.uniformMatrix4fv(program.uniforms.u_matrix, false, matrix);

    this.viewportVAO.bind(context, program, this.viewportBuffer, []);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
};

Painter.prototype._renderTileClippingMasks = function _renderTileClippingMasks (tileIDs                     ) {
        var this$1 = this;

    var context = this.context;
    var gl = context.gl;

    context.setColorMode(ColorMode.disabled);
    context.setDepthMode(DepthMode.disabled);

    var idNext = 1;
    this._tileClippingMaskIDs = {};

    for (var i = 0, list = tileIDs; i < list.length; i += 1) {
        var tileID = list[i];

            var id = this$1._tileClippingMaskIDs[tileID.key] = idNext++;

        // Tests will always pass, and ref value will be written to stencil buffer.
        context.setStencilMode(new StencilMode({ func: gl.ALWAYS, mask: 0 }, id, 0xFF, gl.KEEP, gl.KEEP, gl.REPLACE));

        var program = this$1.useProgram('clippingMask');
        gl.uniformMatrix4fv(program.uniforms.u_matrix, false, tileID.posMatrix);

        // Draw the clipping mask
        this$1.tileExtentVAO.bind(this$1.context, program, this$1.tileExtentBuffer, []);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, this$1.tileExtentBuffer.length);
    }
};

Painter.prototype.stencilModeForClipping = function stencilModeForClipping (tileID              )          {
    var gl = this.context.gl;
    return new StencilMode({ func: gl.EQUAL, mask: 0xFF }, this._tileClippingMaskIDs[tileID.key], 0x00, gl.KEEP, gl.KEEP, gl.REPLACE);
};

Painter.prototype.colorModeForRenderPass = function colorModeForRenderPass ()                   {
    var gl = this.context.gl;
    if (this._showOverdrawInspector) {
        var numOverdrawSteps = 8;
        var a = 1 / numOverdrawSteps;

        return new ColorMode([gl.CONSTANT_COLOR, gl.ONE], new Color(a, a, a, 0), [true, true, true, true]);
    } else if (this.renderPass === 'opaque') {
        return ColorMode.unblended;
    } else {
        return ColorMode.alphaBlended;
    }
};

Painter.prototype.depthModeForSublayer = function depthModeForSublayer (n    , mask           , func            )        {
    var farDepth = 1 - ((1 + this.currentLayer) * this.numSublayers + n) * this.depthEpsilon;
    var nearDepth = farDepth - 1 + this.depthRange;
    return new DepthMode(func || this.context.gl.LEQUAL, mask, [nearDepth, farDepth]);
};

Painter.prototype.render = function render (style   , options            ) {
        var this$1 = this;

    this.style = style;
    this.options = options;

    this.lineAtlas = style.lineAtlas;
    this.imageManager = style.imageManager;
    this.glyphManager = style.glyphManager;

    this.symbolFadeChange = style.placement.symbolFadeChange(browser.now());

    for (var id in style.sourceCaches) {
        var sourceCache = this$1.style.sourceCaches[id];
        if (sourceCache.used) {
            sourceCache.prepare(this$1.context);
        }
    }

    var layerIds = this.style._order;

    var rasterSources = util.filterObject(this.style.sourceCaches, function (sc) { return sc.getSource().type === 'raster' || sc.getSource().type === 'raster-dem'; });
    var loop = function ( key ) {
        var sourceCache$1 = rasterSources[key];
        var coords = sourceCache$1.getVisibleCoordinates();
        var visibleTiles = coords.map(function (c){ return sourceCache$1.getTile(c); });
        updateTileMasks(visibleTiles, this$1.context);
    };

        for (var key in rasterSources) loop( key );

    // Offscreen pass
    // We first do all rendering that requires rendering to a separate
    // framebuffer, and then save those for rendering back to the map
    // later: in doing this we avoid doing expensive framebuffer restores.
    this.renderPass = 'offscreen';
    {
        var sourceCache$2;
        var coords$1 = [];
        this.depthRboNeedsClear = true;

        for (var i = 0; i < layerIds.length; i++) {
            var layer = this$1.style._layers[layerIds[i]];

            if (!layer.hasOffscreenPass() || layer.isHidden(this$1.transform.zoom)) { continue; }

            if (layer.source !== (sourceCache$2 && sourceCache$2.id)) {
                sourceCache$2 = this$1.style.sourceCaches[layer.source];
                coords$1 = [];

                if (sourceCache$2) {
                    coords$1 = sourceCache$2.getVisibleCoordinates();
                    coords$1.reverse();
                }
            }

            if (!coords$1.length) { continue; }

            this$1.renderLayer(this$1, (sourceCache$2 ), layer, coords$1);
        }

        // Rebind the main framebuffer now that all offscreen layers
        // have been rendered:
        this.context.bindFramebuffer.set(null);
    }

    // Clear buffers in preparation for drawing to the main framebuffer
    this.context.clear({ color: options.showOverdrawInspector ? Color.black : Color.transparent, depth: 1 });

    this._showOverdrawInspector = options.showOverdrawInspector;

    this.depthRange = (style._order.length + 2) * this.numSublayers * this.depthEpsilon;

    // Opaque pass
    // Draw opaque layers top-to-bottom first.
    this.renderPass = 'opaque';
    {
        var sourceCache$3;
        var coords$2 = [];

        this.currentLayer = layerIds.length - 1;

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

Painter.prototype.setupOffscreenDepthRenderbuffer = function setupOffscreenDepthRenderbuffer ()   {
    var context = this.context;
    // All of the 3D textures will use the same depth renderbuffer.
    if (!this.depthRbo) {
        this.depthRbo = context.createRenderbuffer(context.gl.DEPTH_COMPONENT16, this.width, this.height);
    }
};

Painter.prototype.renderLayer = function renderLayer (painter     , sourceCache         , layer        , coords                     ) {
    if (layer.isHidden(this.transform.zoom)) { return; }
    if (layer.type !== 'background' && !coords.length) { return; }
    this.id = layer.id;

    draw[layer.type](painter, sourceCache, layer, coords);
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

Painter.prototype._createProgramCached = function _createProgramCached (name    , programConfiguration                  )      {
    this.cache = this.cache || {};
    var key = "" + name + (programConfiguration.cacheKey || '') + (this._showOverdrawInspector ? '/overdraw' : '');
    if (!this.cache[key]) {
        this.cache[key] = new Program(this.context, shaders[name], programConfiguration, this._showOverdrawInspector);
    }
    return this.cache[key];
};

Painter.prototype.useProgram = function useProgram (name    , programConfiguration                   )      {
    var nextProgram = this._createProgramCached(name, programConfiguration || this.emptyProgramConfiguration);

    this.context.program.set(nextProgram.program);

    return nextProgram;
};

module.exports = Painter;

},{"../data/array_types":44,"../data/extent":58,"../data/pos_attributes":62,"../data/program_configuration":63,"../data/raster_bounds_attributes":64,"../gl/color_mode":70,"../gl/context":71,"../gl/depth_mode":72,"../gl/stencil_mode":75,"../shaders":102,"../source/pixels_to_tile_units":109,"../source/source_cache":116,"../style-spec/util/color":158,"../symbol/cross_tile_symbol_index":223,"../util/browser":257,"../util/util":280,"./draw_background":79,"./draw_circle":80,"./draw_debug":82,"./draw_fill":83,"./draw_fill_extrusion":84,"./draw_heatmap":85,"./draw_hillshade":86,"./draw_line":87,"./draw_raster":88,"./draw_symbol":89,"./program":97,"./texture":98,"./tile_mask":99,"./vertex_array_object":100,"@mapbox/gl-matrix":2}],96:[function(require,module,exports){
'use strict';//      

var assert = require('assert');
var pixelsToTileUnits = require('../source/pixels_to_tile_units');

                                     
                                     
                                                        
                                                     

/**
 * Checks whether a pattern image is needed, and if it is, whether it is not loaded.
 * @private
 * @returns true if a needed image is missing and rendering needs to be skipped.
 */
exports.isPatternMissing = function(image                     , painter         )          {
    if (!image) { return false; }
    var imagePosA = painter.imageManager.getPattern(image.from);
    var imagePosB = painter.imageManager.getPattern(image.to);
    return !imagePosA || !imagePosB;
};

exports.prepare = function (image                    , painter         , program         ) {
    var context = painter.context;
    var gl = context.gl;

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

    context.activeTexture.set(gl.TEXTURE0);
    painter.imageManager.bind(painter.context);
};

exports.setTile = function (tile                                              , painter         , program         ) {
    var gl = painter.context.gl;

    gl.uniform1f(program.uniforms.u_tile_units_to_pixels, 1 / pixelsToTileUnits(tile, 1, painter.transform.tileZoom));

    var numTiles = Math.pow(2, tile.tileID.overscaledZ);
    var tileSizeAtNearestZoom = tile.tileSize * Math.pow(2, painter.transform.tileZoom) / numTiles;

    var pixelX = tileSizeAtNearestZoom * (tile.tileID.canonical.x + tile.tileID.wrap * numTiles);
    var pixelY = tileSizeAtNearestZoom * tile.tileID.canonical.y;

    // split the pixel coord into two pairs of 16 bit numbers. The glsl spec only guarantees 16 bits of precision.
    gl.uniform2f(program.uniforms.u_pixel_coord_upper, pixelX >> 16, pixelY >> 16);
    gl.uniform2f(program.uniforms.u_pixel_coord_lower, pixelX & 0xFFFF, pixelY & 0xFFFF);
};

},{"../source/pixels_to_tile_units":109,"assert":13}],97:[function(require,module,exports){
'use strict';//      

var browser = require('../util/browser');
var shaders = require('../shaders');
var assert = require('assert');
var ref = require('../data/program_configuration');
var ProgramConfiguration = ref.ProgramConfiguration;
var VertexArrayObject = require('./vertex_array_object');
var Context = require('../gl/context');

                                                   
                                                    
                                                  

                      
                                                   
                                                        

var Program = function Program(context     ,
            source                                            ,
            configuration                  ,
            showOverdrawInspector     ) {
    var this$1 = this;

    var gl = context.gl;
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
    var layoutAttributes = configuration.layoutAttributes || [];
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

Program.prototype.draw = function draw (context     ,
     drawMode      ,
     layerID    ,
     layoutVertexBuffer          ,
     indexBuffer         ,
     segments           ,
     configuration                   ,
     dynamicLayoutBuffer           ,
     dynamicLayoutBuffer2           ) {
        var this$1 = this;


    var gl = context.gl;

    var primitiveSize = ( obj = {}, obj[gl.LINES] = 2, obj[gl.TRIANGLES] = 3, obj )[drawMode];
        var obj;

    for (var i = 0, list = segments.get(); i < list.length; i += 1) {
        var segment = list[i];

            var vaos = segment.vaos || (segment.vaos = {});
        var vao                = vaos[layerID] || (vaos[layerID] = new VertexArrayObject());

        vao.bind(
            context,
            this$1,
            layoutVertexBuffer,
            configuration ? configuration.getPaintVertexBuffers() : [],
            indexBuffer,
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

},{"../data/program_configuration":63,"../gl/context":71,"../shaders":102,"../util/browser":257,"./vertex_array_object":100,"assert":13}],98:[function(require,module,exports){
'use strict';//      

var ref = require('../util/window');
var HTMLImageElement = ref.HTMLImageElement;
var HTMLCanvasElement = ref.HTMLCanvasElement;
var HTMLVideoElement = ref.HTMLVideoElement;
var ImageData = ref.ImageData;

                                         
                                                         

                           
                                                  
                                                    
                           
                                                    
                                                                   
                                                      
                         
                                                    
                                                           
                                                              

                   
                  
                   
              
 

                          
               
                
                      
                       
                      
               
                 

var Texture = function Texture(context     , image          , format           , premultiply      ) {
    this.context = context;

    var width = image.width;
    var height = image.height;
    this.size = [width, height];
    this.format = format;

    this.texture = context.gl.createTexture();
    this.update(image, premultiply);
};

Texture.prototype.update = function update (image          , premultiply      ) {
    var width = image.width;
        var height = image.height;
    this.size = [width, height];

    var ref = this;
        var context = ref.context;
    var gl = context.gl;
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    context.pixelStoreUnpack.set(1);

    if (this.format === gl.RGBA && premultiply !== false) {
        context.pixelStoreUnpackPremultiplyAlpha.set(true);
    }

    if (image instanceof HTMLImageElement || image instanceof HTMLCanvasElement || image instanceof HTMLVideoElement || image instanceof ImageData) {
        gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, gl.UNSIGNED_BYTE, image);
    } else {
        gl.texImage2D(gl.TEXTURE_2D, 0, this.format, width, height, 0, this.format, gl.UNSIGNED_BYTE, image.data);
    }
};

Texture.prototype.bind = function bind (filter           , wrap         , minFilter            ) {
    var ref = this;
        var context = ref.context;
    var gl = context.gl;
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
    var ref = this.context;
        var gl = ref.gl;
    gl.deleteTexture(this.texture);
    this.texture = (null );
};

module.exports = Texture;

},{"../util/window":259}],99:[function(require,module,exports){
'use strict';//      

var ref = require('../source/tile_id');
var OverscaledTileID = ref.OverscaledTileID;
var CanonicalTileID = ref.CanonicalTileID;

                                         
                                         

                    
                             
  

// Updates the TileMasks for all renderable tiles. A TileMask describes all regions
// within that tile that are *not* covered by other renderable tiles.
// Example: renderableTiles in our list are 2/1/3, 3/3/6, and 4/5/13. The schematic for creating the
// TileMask for 2/1/3 looks like this:
//
//    ┌────────┬────────┬─────────────────┐
//    │        │        │#################│
//    │ 4/4/12 │ 4/5/12 │#################│
//    │        │        │#################│
//    ├──────3/2/6──────┤#####3/3/6#######│
//    │        │########│#################│
//    │ 4/4/13 │#4/5/13#│#################│
//    │        │########│#################│
//    ├────────┴──────2/1/3───────────────┤
//    │                 │                 │
//    │                 │                 │
//    │                 │                 │
//    │      3/2/7      │      3/3/7      │
//    │                 │                 │
//    │                 │                 │
//    │                 │                 │
//    └─────────────────┴─────────────────┘
//
// The TileMask for 2/1/3 thus consists of the tiles 4/4/12, 4/5/12, 4/4/13, 3/2/7, and 3/3/7,
// but it does *not* include 4/5/13, and 3/3/6, since these are other renderableTiles.
// A TileMask always contains TileIDs *relative* to the tile it is generated for, so 2/1/3 is
// "subtracted" from these TileIDs. The final TileMask for 2/1/3 will thus be:
//
//    ┌────────┬────────┬─────────────────┐
//    │        │        │#################│
//    │ 2/0/0  │ 2/1/0  │#################│
//    │        │        │#################│
//    ├────────┼────────┤#################│
//    │        │########│#################│
//    │ 2/0/1  │########│#################│
//    │        │########│#################│
//    ├────────┴────────┼─────────────────┤
//    │                 │                 │
//    │                 │                 │
//    │                 │                 │
//    │      1/0/1      │      1/1/1      │
//    │                 │                 │
//    │                 │                 │
//    │                 │                 │
//    └─────────────────┴─────────────────┘
//
// Only other renderable tiles that are *children* of the tile we are generating the mask for will
// be considered. For example, adding TileID 4/8/13 to renderableTiles won't affect the TileMask for
// 2/1/3, since it is not a descendant of it.


module.exports = function(renderableTiles             , context         ) {
    var sortedRenderables = renderableTiles.sort(function (a, b) { return a.tileID.isLessThan(b.tileID) ? -1 : b.tileID.isLessThan(a.tileID) ? 1 : 0; });

    for (var i = 0; i < sortedRenderables.length; i++) {
        var mask = {};
        var tile =  sortedRenderables[i];
        var childArray = sortedRenderables.slice(i + 1);
        // Try to add all remaining ids as children. We sorted the tile list
        // by z earlier, so all preceding items cannot be children of the current
        // tile. We also compute the lower bound of the next wrap, because items of the next wrap
        // can never be children of the current wrap.

        computeTileMasks(tile.tileID.wrapped(), tile.tileID, childArray, new OverscaledTileID(0, tile.tileID.wrap + 1, 0, 0, 0), mask);
        tile.setMask(mask, context);
    }
};

function computeTileMasks(rootTile                  , ref                  , childArray             , lowerBound                  , mask      ) {
    // If the reference or any of its children is found in the list, we need to recurse.
    for (var i = 0; i < childArray.length; i++) {
        var childTile = childArray[i];
        // childTile is from a larger wrap than the rootTile so it cannot be a child tile
        if (lowerBound.isLessThan(childTile.tileID)) { break; }
        // The current tile is masked out, so we don't need to add them to the mask set.
        if (ref.key === childTile.tileID.key) {
            return;
        } else if (childTile.tileID.isChildOf(ref)) {
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
    var diffZ = ref.overscaledZ - rootTile.overscaledZ;
    var maskTileId = new CanonicalTileID(diffZ, ref.canonical.x - (rootTile.canonical.x << diffZ), ref.canonical.y - (rootTile.canonical.y << diffZ));
    mask[maskTileId.key] = mask[maskTileId.key] || maskTileId;
}

},{"../source/tile_id":119}],100:[function(require,module,exports){
'use strict';//      

var assert = require('assert');

                                     
                                                    
                                                  
                                         

var VertexArrayObject = function VertexArrayObject() {
    this.boundProgram = null;
    this.boundLayoutVertexBuffer = null;
    this.boundPaintVertexBuffers = [];
    this.boundIndexBuffer = null;
    this.boundVertexOffset = null;
    this.boundDynamicVertexBuffer = null;
    this.vao = null;
};

VertexArrayObject.prototype.bind = function bind (context     ,
     program     ,
     layoutVertexBuffer          ,
     paintVertexBuffers                 ,
     indexBuffer          ,
     vertexOffset     ,
     dynamicVertexBuffer           ,
     dynamicVertexBuffer2           ) {
        var this$1 = this;


    this.context = context;

    var paintBuffersDiffer = this.boundPaintVertexBuffers.length !== paintVertexBuffers.length;
    for (var i = 0; !paintBuffersDiffer && i < paintVertexBuffers.length; i++) {
        if (this$1.boundPaintVertexBuffers[i] !== paintVertexBuffers[i]) {
            paintBuffersDiffer = true;
        }
    }

    var isFreshBindRequired = (
        !this.vao ||
        this.boundProgram !== program ||
        this.boundLayoutVertexBuffer !== layoutVertexBuffer ||
        paintBuffersDiffer ||
        this.boundIndexBuffer !== indexBuffer ||
        this.boundVertexOffset !== vertexOffset ||
        this.boundDynamicVertexBuffer !== dynamicVertexBuffer ||
        this.boundDynamicVertexBuffer2 !== dynamicVertexBuffer2
    );

    if (!context.extVertexArrayObject || isFreshBindRequired) {
        this.freshBind(program, layoutVertexBuffer, paintVertexBuffers, indexBuffer, vertexOffset, dynamicVertexBuffer, dynamicVertexBuffer2);
    } else {
        context.bindVertexArrayOES.set(this.vao);

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

VertexArrayObject.prototype.freshBind = function freshBind (program     ,
          layoutVertexBuffer          ,
          paintVertexBuffers                 ,
          indexBuffer          ,
          vertexOffset     ,
          dynamicVertexBuffer           ,
          dynamicVertexBuffer2           ) {
    var numPrevAttributes;
    var numNextAttributes = program.numAttributes;

    var context = this.context;
    var gl = context.gl;

    if (context.extVertexArrayObject) {
        if (this.vao) { this.destroy(); }
        this.vao = context.extVertexArrayObject.createVertexArrayOES();
        context.bindVertexArrayOES.set(this.vao);
        numPrevAttributes = 0;

        // store the arguments so that we can verify them when the vao is bound again
        this.boundProgram = program;
        this.boundLayoutVertexBuffer = layoutVertexBuffer;
        this.boundPaintVertexBuffers = paintVertexBuffers;
        this.boundIndexBuffer = indexBuffer;
        this.boundVertexOffset = vertexOffset;
        this.boundDynamicVertexBuffer = dynamicVertexBuffer;
        this.boundDynamicVertexBuffer2 = dynamicVertexBuffer2;

    } else {
        numPrevAttributes = context.currentNumAttributes || 0;

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
    for (var i$1 = 0, list = paintVertexBuffers; i$1 < list.length; i$1 += 1) {
        var vertexBuffer = list[i$1];

            vertexBuffer.enableAttributes(gl, program);
    }

    if (dynamicVertexBuffer) {
        dynamicVertexBuffer.enableAttributes(gl, program);
    }
    if (dynamicVertexBuffer2) {
        dynamicVertexBuffer2.enableAttributes(gl, program);
    }

    layoutVertexBuffer.bind();
    layoutVertexBuffer.setVertexAttribPointers(gl, program, vertexOffset);
    for (var i$2 = 0, list$1 = paintVertexBuffers; i$2 < list$1.length; i$2 += 1) {
        var vertexBuffer$1 = list$1[i$2];

            vertexBuffer$1.bind();
        vertexBuffer$1.setVertexAttribPointers(gl, program, vertexOffset);
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

    context.currentNumAttributes = numNextAttributes;
};

VertexArrayObject.prototype.destroy = function destroy () {
    if (this.vao) {
        this.context.extVertexArrayObject.deleteVertexArrayOES(this.vao);
        this.vao = null;
    }
};

module.exports = VertexArrayObject;

},{"assert":13}],101:[function(require,module,exports){
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

},{"../util/util":280}],102:[function(require,module,exports){
'use strict';//      



// readFileSync calls must be written out long-form for brfs.
/* eslint-disable prefer-template, no-path-concat */

var shaders                                                             = {
    prelude: {
        fragmentSource: "#ifdef GL_ES\nprecision mediump float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n",
        vertexSource: "#ifdef GL_ES\nprecision highp float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n\n// Unpack a pair of values that have been packed into a single float.\n// The packed values are assumed to be 8-bit unsigned integers, and are\n// packed like so:\n// packedValue = floor(input[0]) * 256 + input[1],\nvec2 unpack_float(const float packedValue) {\n    int packedIntValue = int(packedValue);\n    int v0 = packedIntValue / 256;\n    return vec2(v0, packedIntValue - v0 * 256);\n}\n\nvec2 unpack_opacity(const float packedOpacity) {\n    int intOpacity = int(packedOpacity) / 2;\n    return vec2(float(intOpacity) / 127.0, mod(packedOpacity, 2.0));\n}\n\n// To minimize the number of attributes needed, we encode a 4-component\n// color into a pair of floats (i.e. a vec2) as follows:\n// [ floor(color.r * 255) * 256 + color.g * 255,\n//   floor(color.b * 255) * 256 + color.g * 255 ]\nvec4 decode_color(const vec2 encodedColor) {\n    return vec4(\n        unpack_float(encodedColor[0]) / 255.0,\n        unpack_float(encodedColor[1]) / 255.0\n    );\n}\n\n// Unpack a pair of paint values and interpolate between them.\nfloat unpack_mix_vec2(const vec2 packedValue, const float t) {\n    return mix(packedValue[0], packedValue[1], t);\n}\n\n// Unpack a pair of paint values and interpolate between them.\nvec4 unpack_mix_vec4(const vec4 packedColors, const float t) {\n    vec4 minColor = decode_color(vec2(packedColors[0], packedColors[1]));\n    vec4 maxColor = decode_color(vec2(packedColors[2], packedColors[3]));\n    return mix(minColor, maxColor, t);\n}\n\n// The offset depends on how many pixels are between the world origin and the edge of the tile:\n// vec2 offset = mod(pixel_coord, size)\n//\n// At high zoom levels there are a ton of pixels between the world origin and the edge of the tile.\n// The glsl spec only guarantees 16 bits of precision for highp floats. We need more than that.\n//\n// The pixel_coord is passed in as two 16 bit values:\n// pixel_coord_upper = floor(pixel_coord / 2^16)\n// pixel_coord_lower = mod(pixel_coord, 2^16)\n//\n// The offset is calculated in a series of steps that should preserve this precision:\nvec2 get_pattern_pos(const vec2 pixel_coord_upper, const vec2 pixel_coord_lower,\n    const vec2 pattern_size, const float tile_units_to_pixels, const vec2 pos) {\n\n    vec2 offset = mod(mod(mod(pixel_coord_upper, pattern_size) * 256.0, pattern_size) * 256.0 + pixel_coord_lower, pattern_size);\n    return (tile_units_to_pixels * pos + offset) / pattern_size;\n}\n"
    },
    background: {
        fragmentSource: "uniform vec4 u_color;\nuniform float u_opacity;\n\nvoid main() {\n    gl_FragColor = u_color * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"
    },
    backgroundPattern: {
        fragmentSource: "uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\nuniform float u_opacity;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\nvoid main() {\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    gl_FragColor = mix(color1, color2, u_mix) * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n}\n"
    },
    circle: {
        fragmentSource: "#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec3 v_data;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    vec2 extrude = v_data.xy;\n    float extrude_length = length(extrude);\n\n    lowp float antialiasblur = v_data.z;\n    float antialiased_blur = -max(blur, antialiasblur);\n\n    float opacity_t = smoothstep(0.0, antialiased_blur, extrude_length - 1.0);\n\n    float color_t = stroke_width < 0.01 ? 0.0 : smoothstep(\n        antialiased_blur,\n        0.0,\n        extrude_length - radius / (radius + stroke_width)\n    );\n\n    gl_FragColor = opacity_t * mix(color * opacity, stroke_color * stroke_opacity, color_t);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "uniform mat4 u_matrix;\nuniform bool u_scale_with_map;\nuniform bool u_pitch_with_map;\nuniform vec2 u_extrude_scale;\nuniform highp float u_camera_to_center_distance;\n\nattribute vec2 a_pos;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec3 v_data;\n\nvoid main(void) {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    // unencode the extrusion vector that we snuck into the a_pos vector\n    vec2 extrude = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n\n    // multiply a_pos by 0.5, since we had it * 2 in order to sneak\n    // in extrusion data\n    vec2 circle_center = floor(a_pos * 0.5);\n    if (u_pitch_with_map) {\n        vec2 corner_position = circle_center;\n        if (u_scale_with_map) {\n            corner_position += extrude * (radius + stroke_width) * u_extrude_scale;\n        } else {\n            // Pitching the circle with the map effectively scales it with the map\n            // To counteract the effect for pitch-scale: viewport, we rescale the\n            // whole circle based on the pitch scaling effect at its central point\n            vec4 projected_center = u_matrix * vec4(circle_center, 0, 1);\n            corner_position += extrude * (radius + stroke_width) * u_extrude_scale * (projected_center.w / u_camera_to_center_distance);\n        }\n\n        gl_Position = u_matrix * vec4(corner_position, 0, 1);\n    } else {\n        gl_Position = u_matrix * vec4(circle_center, 0, 1);\n\n        if (u_scale_with_map) {\n            gl_Position.xy += extrude * (radius + stroke_width) * u_extrude_scale * u_camera_to_center_distance;\n        } else {\n            gl_Position.xy += extrude * (radius + stroke_width) * u_extrude_scale * gl_Position.w;\n        }\n    }\n\n    // This is a minimum blur distance that serves as a faux-antialiasing for\n    // the circle. since blur is a ratio of the circle's size and the intent is\n    // to keep the blur at roughly 1px, the two are inversely related.\n    lowp float antialiasblur = 1.0 / DEVICE_PIXEL_RATIO / (radius + stroke_width);\n\n    v_data = vec3(extrude.x, extrude.y, antialiasblur);\n}\n"
    },
    clippingMask: {
        fragmentSource: "void main() {\n    gl_FragColor = vec4(1.0);\n}\n",
        vertexSource: "attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"
    },
    heatmap: {
        fragmentSource: "#pragma mapbox: define highp float weight\n\nuniform highp float u_intensity;\nvarying vec2 v_extrude;\n\n// Gaussian kernel coefficient: 1 / sqrt(2 * PI)\n#define GAUSS_COEF 0.3989422804014327\n\nvoid main() {\n    #pragma mapbox: initialize highp float weight\n\n    // Kernel density estimation with a Gaussian kernel of size 5x5\n    float d = -0.5 * 3.0 * 3.0 * dot(v_extrude, v_extrude);\n    float val = weight * u_intensity * GAUSS_COEF * exp(d);\n\n    gl_FragColor = vec4(val, 1.0, 1.0, 1.0);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "#pragma mapbox: define highp float weight\n#pragma mapbox: define mediump float radius\n\nuniform mat4 u_matrix;\nuniform float u_extrude_scale;\nuniform float u_opacity;\nuniform float u_intensity;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_extrude;\n\n// Effective \"0\" in the kernel density texture to adjust the kernel size to;\n// this empirically chosen number minimizes artifacts on overlapping kernels\n// for typical heatmap cases (assuming clustered source)\nconst highp float ZERO = 1.0 / 255.0 / 16.0;\n\n// Gaussian kernel coefficient: 1 / sqrt(2 * PI)\n#define GAUSS_COEF 0.3989422804014327\n\nvoid main(void) {\n    #pragma mapbox: initialize highp float weight\n    #pragma mapbox: initialize mediump float radius\n\n    // unencode the extrusion vector that we snuck into the a_pos vector\n    vec2 unscaled_extrude = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n\n    // This 'extrude' comes in ranging from [-1, -1], to [1, 1].  We'll use\n    // it to produce the vertices of a square mesh framing the point feature\n    // we're adding to the kernel density texture.  We'll also pass it as\n    // a varying, so that the fragment shader can determine the distance of\n    // each fragment from the point feature.\n    // Before we do so, we need to scale it up sufficiently so that the\n    // kernel falls effectively to zero at the edge of the mesh.\n    // That is, we want to know S such that\n    // weight * u_intensity * GAUSS_COEF * exp(-0.5 * 3.0^2 * S^2) == ZERO\n    // Which solves to:\n    // S = sqrt(-2.0 * log(ZERO / (weight * u_intensity * GAUSS_COEF))) / 3.0\n    float S = sqrt(-2.0 * log(ZERO / weight / u_intensity / GAUSS_COEF)) / 3.0;\n\n    // Pass the varying in units of radius\n    v_extrude = S * unscaled_extrude;\n\n    // Scale by radius and the zoom-based scale factor to produce actual\n    // mesh position\n    vec2 extrude = v_extrude * radius * u_extrude_scale;\n\n    // multiply a_pos by 0.5, since we had it * 2 in order to sneak\n    // in extrusion data\n    vec4 pos = vec4(floor(a_pos * 0.5) + extrude, 0, 1);\n\n    gl_Position = u_matrix * pos;\n}\n"
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
        fragmentSource: "\nvarying float v_placed;\nvarying float v_notUsed;\nvarying float v_radius;\nvarying vec2 v_extrude;\nvarying vec2 v_extrude_scale;\n\nvoid main() {\n    float alpha = 0.5;\n\n    // Red = collision, hide label\n    vec4 color = vec4(1.0, 0.0, 0.0, 1.0) * alpha;\n\n    // Blue = no collision, label is showing\n    if (v_placed > 0.5) {\n        color = vec4(0.0, 0.0, 1.0, 0.5) * alpha;\n    }\n\n    if (v_notUsed > 0.5) {\n        // This box not used, fade it out\n        color *= .2;\n    }\n\n    float extrude_scale_length = length(v_extrude_scale);\n    float extrude_length = length(v_extrude) * extrude_scale_length;\n    float stroke_width = 15.0 * extrude_scale_length;\n    float radius = v_radius * extrude_scale_length;\n\n    float distance_to_edge = abs(extrude_length - radius);\n    float opacity_t = smoothstep(-stroke_width, 0.0, -distance_to_edge);\n\n    gl_FragColor = opacity_t * color;\n}\n",
        vertexSource: "attribute vec2 a_pos;\nattribute vec2 a_anchor_pos;\nattribute vec2 a_extrude;\nattribute vec2 a_placed;\n\nuniform mat4 u_matrix;\nuniform vec2 u_extrude_scale;\nuniform float u_camera_to_center_distance;\n\nvarying float v_placed;\nvarying float v_notUsed;\nvarying float v_radius;\n\nvarying vec2 v_extrude;\nvarying vec2 v_extrude_scale;\n\nvoid main() {\n    vec4 projectedPoint = u_matrix * vec4(a_anchor_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    highp float collision_perspective_ratio = 0.5 + 0.5 * (u_camera_to_center_distance / camera_to_anchor_distance);\n\n    gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);\n\n    highp float padding_factor = 1.2; // Pad the vertices slightly to make room for anti-alias blur\n    gl_Position.xy += a_extrude * u_extrude_scale * padding_factor * gl_Position.w * collision_perspective_ratio;\n\n    v_placed = a_placed.x;\n    v_notUsed = a_placed.y;\n    v_radius = abs(a_extrude.y); // We don't pitch the circles, so both units of the extrusion vector are equal in magnitude to the radius\n\n    v_extrude = a_extrude * padding_factor;\n    v_extrude_scale = u_extrude_scale * u_camera_to_center_distance * collision_perspective_ratio;\n}\n"
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
        vertexSource: "uniform mat4 u_matrix;\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec4 a_normal_ed;\n\nvarying vec4 v_color;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    vec3 normal = a_normal_ed.xyz;\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float t = mod(normal.x, 2.0);\n\n    gl_Position = u_matrix * vec4(a_pos, t > 0.0 ? height : base, 1);\n\n    // Relative luminance (how dark/bright is the surface color?)\n    float colorvalue = color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722;\n\n    v_color = vec4(0.0, 0.0, 0.0, 1.0);\n\n    // Add slight ambient lighting so no extrusions are totally black\n    vec4 ambientlight = vec4(0.03, 0.03, 0.03, 1.0);\n    color += ambientlight;\n\n    // Calculate cos(theta), where theta is the angle between surface normal and diffuse light ray\n    float directional = clamp(dot(normal / 16384.0, u_lightpos), 0.0, 1.0);\n\n    // Adjust directional so that\n    // the range of values for highlight/shading is narrower\n    // with lower light intensity\n    // and with lighter/brighter surface colors\n    directional = mix((1.0 - u_lightintensity), max((1.0 - colorvalue + u_lightintensity), 1.0), directional);\n\n    // Add gradient along z axis of side surfaces\n    if (normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    // Assign final color based on surface + ambient light color, diffuse light directional, and light color\n    // with lower bounds adjusted to hue of light\n    // so that shading is tinted with the complementary (opposite) color to the light color\n    v_color.r += clamp(color.r * directional * u_lightcolor.r, mix(0.0, 0.3, 1.0 - u_lightcolor.r), 1.0);\n    v_color.g += clamp(color.g * directional * u_lightcolor.g, mix(0.0, 0.3, 1.0 - u_lightcolor.g), 1.0);\n    v_color.b += clamp(color.b * directional * u_lightcolor.b, mix(0.0, 0.3, 1.0 - u_lightcolor.b), 1.0);\n}\n"
    },
    fillExtrusionPattern: {
        fragmentSource: "uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    vec4 mixedColor = mix(color1, color2, u_mix);\n\n    gl_FragColor = mixedColor * v_lighting;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\nuniform float u_height_factor;\n\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec4 a_normal_ed;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\nvarying float v_directional;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    vec3 normal = a_normal_ed.xyz;\n    float edgedistance = a_normal_ed.w;\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float t = mod(normal.x, 2.0);\n    float z = t > 0.0 ? height : base;\n\n    gl_Position = u_matrix * vec4(a_pos, z, 1);\n\n    vec2 pos = normal.x == 1.0 && normal.y == 0.0 && normal.z == 16384.0\n        ? a_pos // extrusion top\n        : vec2(edgedistance, z * u_height_factor); // extrusion side\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, pos);\n\n    v_lighting = vec4(0.0, 0.0, 0.0, 1.0);\n    float directional = clamp(dot(normal / 16383.0, u_lightpos), 0.0, 1.0);\n    directional = mix((1.0 - u_lightintensity), max((0.5 + u_lightintensity), 1.0), directional);\n\n    if (normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    v_lighting.rgb += clamp(directional * u_lightcolor, mix(vec3(0.0), vec3(0.3), 1.0 - u_lightcolor), vec3(1.0));\n}\n"
    },
    extrusionTexture: {
        fragmentSource: "uniform sampler2D u_image;\nuniform float u_opacity;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_FragColor = texture2D(u_image, v_pos) * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(0.0);\n#endif\n}\n",
        vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_world;\nattribute vec2 a_pos;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos * u_world, 0, 1);\n\n    v_pos.x = a_pos.x;\n    v_pos.y = 1.0 - a_pos.y;\n}\n"
    },
    hillshadePrepare: {
        fragmentSource: "#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform sampler2D u_image;\nvarying vec2 v_pos;\nuniform vec2 u_dimension;\nuniform float u_zoom;\n\nfloat getElevation(vec2 coord, float bias) {\n    // Convert encoded elevation value to meters\n    vec4 data = texture2D(u_image, coord) * 255.0;\n    return (data.r + data.g * 256.0 + data.b * 256.0 * 256.0) / 4.0;\n}\n\nvoid main() {\n    vec2 epsilon = 1.0 / u_dimension;\n\n    // queried pixels:\n    // +-----------+\n    // |   |   |   |\n    // | a | b | c |\n    // |   |   |   |\n    // +-----------+\n    // |   |   |   |\n    // | d | e | f |\n    // |   |   |   |\n    // +-----------+\n    // |   |   |   |\n    // | g | h | i |\n    // |   |   |   |\n    // +-----------+\n\n    float a = getElevation(v_pos + vec2(-epsilon.x, -epsilon.y), 0.0);\n    float b = getElevation(v_pos + vec2(0, -epsilon.y), 0.0);\n    float c = getElevation(v_pos + vec2(epsilon.x, -epsilon.y), 0.0);\n    float d = getElevation(v_pos + vec2(-epsilon.x, 0), 0.0);\n    float e = getElevation(v_pos, 0.0);\n    float f = getElevation(v_pos + vec2(epsilon.x, 0), 0.0);\n    float g = getElevation(v_pos + vec2(-epsilon.x, epsilon.y), 0.0);\n    float h = getElevation(v_pos + vec2(0, epsilon.y), 0.0);\n    float i = getElevation(v_pos + vec2(epsilon.x, epsilon.y), 0.0);\n\n    // here we divide the x and y slopes by 8 * pixel size\n    // where pixel size (aka meters/pixel) is:\n    // circumference of the world / (pixels per tile * number of tiles)\n    // which is equivalent to: 8 * 40075016.6855785 / (512 * pow(2, u_zoom))\n    // which can be reduced to: pow(2, 19.25619978527 - u_zoom)\n    // we want to vertically exaggerate the hillshading though, because otherwise\n    // it is barely noticeable at low zooms. to do this, we multiply this by some\n    // scale factor pow(2, (u_zoom - 14) * a) where a is an arbitrary value and 14 is the\n    // maxzoom of the tile source. here we use a=0.3 which works out to the\n    // expression below. see nickidlugash's awesome breakdown for more info\n    // https://github.com/mapbox/mapbox-gl-js/pull/5286#discussion_r148419556\n    float exaggeration = u_zoom < 2.0 ? 0.4 : u_zoom < 4.5 ? 0.35 : 0.3;\n\n    vec2 deriv = vec2(\n        (c + f + f + i) - (a + d + d + g),\n        (g + h + h + i) - (a + b + b + c)\n    ) /  pow(2.0, (u_zoom - 14.0) * exaggeration + 19.2562 - u_zoom);\n\n    gl_FragColor = clamp(vec4(\n        deriv.x / 2.0 + 0.5,\n        deriv.y / 2.0 + 0.5,\n        1.0,\n        1.0), 0.0, 1.0);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "uniform mat4 u_matrix;\n\nattribute vec2 a_pos;\nattribute vec2 a_texture_pos;\n\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos = (a_texture_pos / 8192.0) / 2.0 + 0.25;\n}\n"
    },
    hillshade: {
        fragmentSource: "uniform sampler2D u_image;\nvarying vec2 v_pos;\n\nuniform vec2 u_latrange;\nuniform vec2 u_light;\nuniform vec4 u_shadow;\nuniform vec4 u_highlight;\nuniform vec4 u_accent;\n\n#define PI 3.141592653589793\n\nvoid main() {\n    vec4 pixel = texture2D(u_image, v_pos);\n\n    vec2 deriv = ((pixel.rg * 2.0) - 1.0);\n\n    // We divide the slope by a scale factor based on the cosin of the pixel's approximate latitude\n    // to account for mercator projection distortion. see #4807 for details\n    float scaleFactor = cos(radians((u_latrange[0] - u_latrange[1]) * (1.0 - v_pos.y) + u_latrange[1]));\n    // We also multiply the slope by an arbitrary z-factor of 1.25\n    float slope = atan(1.25 * length(deriv) / scaleFactor);\n    float aspect = deriv.x != 0.0 ? atan(deriv.y, -deriv.x) : PI / 2.0 * (deriv.y > 0.0 ? 1.0 : -1.0);\n\n    float intensity = u_light.x;\n    // We add PI to make this property match the global light object, which adds PI/2 to the light's azimuthal\n    // position property to account for 0deg corresponding to north/the top of the viewport in the style spec\n    // and the original shader was written to accept (-illuminationDirection - 90) as the azimuthal.\n    float azimuth = u_light.y + PI;\n\n    // We scale the slope exponentially based on intensity, using a calculation similar to\n    // the exponential interpolation function in the style spec:\n    // https://github.com/mapbox/mapbox-gl-js/blob/master/src/style-spec/expression/definitions/interpolate.js#L217-L228\n    // so that higher intensity values create more opaque hillshading.\n    float base = 1.875 - intensity * 1.75;\n    float maxValue = 0.5 * PI;\n    float scaledSlope = intensity != 0.5 ? ((pow(base, slope) - 1.0) / (pow(base, maxValue) - 1.0)) * maxValue : slope;\n\n    // The accent color is calculated with the cosine of the slope while the shade color is calculated with the sine\n    // so that the accent color's rate of change eases in while the shade color's eases out.\n    float accent = cos(scaledSlope);\n    // We multiply both the accent and shade color by a clamped intensity value\n    // so that intensities >= 0.5 do not additionally affect the color values\n    // while intensity values < 0.5 make the overall color more transparent.\n    vec4 accent_color = (1.0 - accent) * u_accent * clamp(intensity * 2.0, 0.0, 1.0);\n    float shade = abs(mod((aspect + azimuth) / PI + 0.5, 2.0) - 1.0);\n    vec4 shade_color = mix(u_shadow, u_highlight, shade) * sin(scaledSlope) * clamp(intensity * 2.0, 0.0, 1.0);\n    gl_FragColor = accent_color * (1.0 - shade_color.a) + shade_color;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
        vertexSource: "uniform mat4 u_matrix;\n\nattribute vec2 a_pos;\nattribute vec2 a_texture_pos;\n\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos = a_texture_pos / 8192.0;\n}\n"
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

},{}],103:[function(require,module,exports){
'use strict';//      

var ImageSource = require('./image_source');
var window = require('../util/window');
var rasterBoundsAttributes = require('../data/raster_bounds_attributes');
var VertexArrayObject = require('../render/vertex_array_object');
var Texture = require('../render/texture');

                                 
                                                 
                                           

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

        if (this._hasInvalidDimensions()) {
            this.fire('error', new Error('Canvas dimensions cannot be less than or equal to zero.'));
            return;
        }

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
        var this$1 = this;

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

        var context = this.map.painter.context;
        var gl = context.gl;

        if (!this.boundsBuffer) {
            this.boundsBuffer = context.createVertexBuffer(this._boundsArray, rasterBoundsAttributes.members);
        }

        if (!this.boundsVAO) {
            this.boundsVAO = new VertexArrayObject();
        }

        if (!this.texture) {
            this.texture = new Texture(context, this.canvas, gl.RGBA);
            this.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE);
        } else if (resize) {
            this.texture.update(this.canvas);
        } else if (this._playing) {
            this.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE);
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, this.canvas);
        }

        for (var w in this$1.tiles) {
            var tile = this$1.tiles[w];
            if (tile.state !== 'loaded') {
                tile.state = 'loaded';
                tile.texture = this$1.texture;
            }
        }
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

},{"../data/raster_bounds_attributes":64,"../render/texture":98,"../render/vertex_array_object":100,"../util/window":259,"./image_source":107}],104:[function(require,module,exports){
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
    function GeoJSONSource(id        , options                                                                                    , dispatcher            , eventedParent         ) {
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

        this._collectResourceTiming = options.collectResourceTiming;
        this._resourceTiming = [];

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

            var data         = { dataType: 'source', sourceDataType: 'metadata' };
            if (this$1._collectResourceTiming && this$1._resourceTiming && (this$1._resourceTiming.length > 0)) {
                data.resourceTiming = this$1._resourceTiming;
                this$1._resourceTiming = [];
            }

            // although GeoJSON sources contain no metadata, we fire this event to let the SourceCache
            // know its ok to start requesting tiles.
            this$1.fire('data', data);
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

            var data         = { dataType: 'source', sourceDataType: 'content' };
            if (this$1._collectResourceTiming && this$1._resourceTiming && (this$1._resourceTiming.length > 0)) {
                data.resourceTiming = this$1._resourceTiming;
                this$1._resourceTiming = [];
            }
            this$1.fire('data', data);
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
            options.request.collectResourceTiming = this._collectResourceTiming;
        } else {
            options.data = JSON.stringify(data);
        }

        // target {this.type}.loadData rather than literally geojson.loadData,
        // so that other geojson-like source types can easily reuse this
        // implementation
        this.workerID = this.dispatcher.send(((this.type) + ".loadData"), options, function (err, result) {
            this$1._loaded = true;

            if (result && result.resourceTiming && result.resourceTiming[this$1.id])
                { this$1._resourceTiming = result.resourceTiming[this$1.id].slice(0); }

            callback(err);
        }, this.workerID);
    };

    GeoJSONSource.prototype.loadTile = function loadTile (tile      , callback                ) {
        var this$1 = this;

        var message = tile.workerID === undefined || tile.state === 'expired' ? 'loadTile' : 'reloadTile';
        var params = {
            type: this.type,
            uid: tile.uid,
            tileID: tile.tileID,
            zoom: tile.tileID.overscaledZ,
            maxZoom: this.maxzoom,
            tileSize: this.tileSize,
            source: this.id,
            pixelRatio: browser.devicePixelRatio,
            overscaling: tile.tileID.overscaleFactor(),
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

            tile.loadVectorData(data, this$1.map.painter, message === 'reloadTile');

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

},{"../data/extent":58,"../util/ajax":256,"../util/browser":257,"../util/evented":265,"../util/util":280,"../util/window":259}],105:[function(require,module,exports){
'use strict';//      

var ajax = require('../util/ajax');
var perf = require('../util/performance');
var rewind = require('geojson-rewind');
var GeoJSONWrapper = require('./geojson_wrapper');
var vtpbf = require('vt-pbf');
var supercluster = require('supercluster');
var geojsonvt = require('geojson-vt');

var VectorTileWorkerSource = require('./vector_tile_worker_source');

             
                         
                       
                                 

                                       
                                                              

                                                                        
                                                    
                                                  

                             

                                     
                                
                  
                   
                                 
                             
  

                                                                                             

                               
 

function loadGeoJSONTile(params                      , callback                        ) {
    var source = params.source,
        canonical = params.tileID.canonical;

    if (!this._geoJSONIndexes[source]) {
        return callback(null, null);  // we couldn't load the file
    }

    var geoJSONTile = this._geoJSONIndexes[source].getTile(canonical.z, canonical.x, canonical.y);
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
    GeoJSONWorkerSource.prototype.loadData = function loadData (params                       , callback                                                                    ) {
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

                var result = {};
                if (params.request && params.request.collectResourceTiming) {
                    var resourceTimingData = perf.getEntriesByName(params.request.url);
                    // it's necessary to eval the result of getEntriesByName() here via parse/stringify
                    // late evaluation in the main thread causes TypeError: illegal invocation
                    if (resourceTimingData) {
                        result.resourceTiming = {};
                        result.resourceTiming[params.source] = JSON.parse(JSON.stringify(resourceTimingData));
                    }
                }
                callback(null, result);
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

},{"../util/ajax":256,"../util/performance":273,"./geojson_wrapper":106,"./vector_tile_worker_source":121,"geojson-rewind":16,"geojson-vt":20,"supercluster":34,"vt-pbf":39}],106:[function(require,module,exports){
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

},{"../data/extent":58,"@mapbox/point-geometry":4,"@mapbox/vector-tile":8}],107:[function(require,module,exports){
'use strict';//      

var util = require('../util/util');
var ref = require('./tile_id');
var CanonicalTileID = ref.CanonicalTileID;
var LngLat = require('../geo/lng_lat');
var Point = require('@mapbox/point-geometry');
var Evented = require('../util/evented');
var ajax = require('../util/ajax');
var browser = require('../util/browser');
var EXTENT = require('../data/extent');
var ref$1 = require('../data/array_types');
var RasterBoundsArray = ref$1.RasterBoundsArray;
var rasterBoundsAttributes = require('../data/raster_bounds_attributes');
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
        this.tileID = new CanonicalTileID(centerCoord.zoom, centerCoord.column, centerCoord.row);

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
        var this$1 = this;

        if (Object.keys(this.tiles).length === 0 || !this.image) {
            return;
        }

        var context = this.map.painter.context;
        var gl = context.gl;

        if (!this.boundsBuffer) {
            this.boundsBuffer = context.createVertexBuffer(this._boundsArray, rasterBoundsAttributes.members);
        }

        if (!this.boundsVAO) {
            this.boundsVAO = new VertexArrayObject();
        }

        if (!this.texture) {
            this.texture = new Texture(context, this.image, gl.RGBA);
            this.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE);
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
        // We have a single tile -- whoose coordinates are this.tileID -- that
        // covers the image we want to render.  If that's the one being
        // requested, set it up with the image; otherwise, mark the tile as
        // `errored` to indicate that we have no data for it.
        // If the world wraps, we may have multiple "wrapped" copies of the
        // single tile.
        if (this.tileID && this.tileID.equals(tile.tileID.canonical)) {
            this.tiles[String(tile.tileID.wrap)] = tile;
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

},{"../data/array_types":44,"../data/extent":58,"../data/raster_bounds_attributes":64,"../geo/lng_lat":67,"../render/texture":98,"../render/vertex_array_object":100,"../util/ajax":256,"../util/browser":257,"../util/evented":265,"../util/util":280,"./tile_id":119,"@mapbox/point-geometry":4}],108:[function(require,module,exports){
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

},{"../util/ajax":256,"../util/browser":257,"../util/mapbox":272,"../util/util":280}],109:[function(require,module,exports){
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
module.exports = function(tile                                              , pixelValue        , z        )         {
    return pixelValue * (EXTENT / (tile.tileSize * Math.pow(2, z - tile.tileID.overscaledZ)));
};

},{"../data/extent":58}],110:[function(require,module,exports){
'use strict';//      

                                              
                                                   
                                                
                                                            

exports.rendered = function(sourceCache             ,
                            styleLayers                        ,
                            queryGeometry                   ,
                            params                                                        ,
                            zoom        ,
                            bearing        ,
                            collisionIndex                 ) {
    var tilesIn = sourceCache.tilesIn(queryGeometry);

    tilesIn.sort(sortTilesIn);

    var renderedFeatureLayers = [];
    for (var i = 0, list = tilesIn; i < list.length; i += 1) {
        var tileIn = list[i];

        renderedFeatureLayers.push({
            wrappedTileID: tileIn.tileID.wrapped().key,
            queryResults: tileIn.tile.queryRenderedFeatures(
                styleLayers,
                tileIn.queryGeometry,
                tileIn.scale,
                params,
                bearing,
                sourceCache.id,
                collisionIndex)
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
        var dataID = tile.tileID.canonical.key;
        if (!dataTiles[dataID]) {
            dataTiles[dataID] = true;
            tile.querySourceFeatures(result, params);
        }
    }

    return result;
};

function sortTilesIn(a, b) {
    var idA = a.tileID;
    var idB = b.tileID;
    return (idA.overscaledZ - idB.overscaledZ) || (idA.canonical.y - idB.canonical.y) || (idA.wrap - idB.wrap) || (idA.canonical.x - idB.canonical.x);
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

},{}],111:[function(require,module,exports){
'use strict';//      

var ajax = require('../util/ajax');
var util = require('../util/util');
var Evented = require('../util/evented');
var normalizeURL = require('../util/mapbox').normalizeTileURL;
var browser = require('../util/browser');
var ref = require('./tile_id');
var OverscaledTileID = ref.OverscaledTileID;
var RasterTileSource = require('./raster_tile_source');

                                     
                                                 
                               
                                                


var RasterDEMTileSource = (function (RasterTileSource) {
    function RasterDEMTileSource(id        , options                              , dispatcher            , eventedParent         ) {
        RasterTileSource.call(this, id, options, dispatcher, eventedParent);
        this.type = 'raster-dem';
        this.maxzoom = 22;
        this._options = util.extend({}, options);
    }

    if ( RasterTileSource ) RasterDEMTileSource.__proto__ = RasterTileSource;
    RasterDEMTileSource.prototype = Object.create( RasterTileSource && RasterTileSource.prototype );
    RasterDEMTileSource.prototype.constructor = RasterDEMTileSource;

    RasterDEMTileSource.prototype.serialize = function serialize () {
        return {
            type: 'raster-dem',
            url: this.url,
            tileSize: this.tileSize,
            tiles: this.tiles,
            bounds: this.bounds,
        };
    };

    RasterDEMTileSource.prototype.loadTile = function loadTile (tile      , callback                ) {
        var url = normalizeURL(tile.tileID.canonical.url(this.tiles, this.scheme), this.url, this.tileSize);
        tile.request = ajax.getImage(this.map._transformRequest(url, ajax.ResourceType.Tile), imageLoaded.bind(this));

        tile.neighboringTiles = this._getNeighboringTiles(tile.tileID);
        function imageLoaded(err, img) {
            delete tile.request;
            if (tile.aborted) {
                tile.state = 'unloaded';
                callback(null);
            } else if (err) {
                tile.state = 'errored';
                callback(err);
            } else if (img) {
                if (this.map._refreshExpiredTiles) { tile.setExpiryData(img); }
                delete (img     ).cacheControl;
                delete (img     ).expires;

                var rawImageData = browser.getImageData(img);
                var params = {
                    uid: tile.uid,
                    coord: tile.tileID,
                    source: this.id,
                    rawImageData: rawImageData
                };

                if (!tile.workerID || tile.state === 'expired') {
                    tile.workerID = this.dispatcher.send('loadDEMTile', params, done.bind(this));
                }
            }
        }

        function done(err, dem) {
            if (err) {
                tile.state = 'errored';
                callback(err);
            }

            if (dem) {
                tile.dem = dem;
                tile.needsHillshadePrepare = true;
                tile.state = 'loaded';
                callback(null);
            }
        }
    };


    RasterDEMTileSource.prototype._getNeighboringTiles = function _getNeighboringTiles (tileID                  ) {
        var canonical = tileID.canonical;
        var dim = Math.pow(2, canonical.z);

        var px = (canonical.x - 1 + dim) % dim;
        var pxw = canonical.x === 0 ? tileID.wrap - 1 : tileID.wrap;
        var nx = (canonical.x + 1 + dim) % dim;
        var nxw = canonical.x + 1 === dim ? tileID.wrap + 1 : tileID.wrap;

        var neighboringTiles = {};
        // add adjacent tiles
        neighboringTiles[new OverscaledTileID(tileID.overscaledZ, pxw, canonical.z, px, canonical.y).key] = {backfilled: false};
        neighboringTiles[new OverscaledTileID(tileID.overscaledZ, nxw, canonical.z, nx, canonical.y).key] = {backfilled: false};

        // Add upper neighboringTiles
        if (canonical.y > 0) {
            neighboringTiles[new OverscaledTileID(tileID.overscaledZ, pxw, canonical.z, px, canonical.y - 1).key] = {backfilled: false};
            neighboringTiles[new OverscaledTileID(tileID.overscaledZ, tileID.wrap, canonical.z, canonical.x, canonical.y - 1).key] = {backfilled: false};
            neighboringTiles[new OverscaledTileID(tileID.overscaledZ, nxw, canonical.z, nx, canonical.y - 1).key] = {backfilled: false};
        }
        // Add lower neighboringTiles
        if (canonical.y + 1 < dim) {
            neighboringTiles[new OverscaledTileID(tileID.overscaledZ, pxw, canonical.z, px, canonical.y + 1).key] = {backfilled: false};
            neighboringTiles[new OverscaledTileID(tileID.overscaledZ, tileID.wrap, canonical.z, canonical.x, canonical.y + 1).key] = {backfilled: false};
            neighboringTiles[new OverscaledTileID(tileID.overscaledZ, nxw, canonical.z, nx, canonical.y + 1).key] = {backfilled: false};
        }

        return neighboringTiles;
    };


    RasterDEMTileSource.prototype.unloadTile = function unloadTile (tile      ) {
        if (tile.demTexture) { this.map.painter.saveTileTexture(tile.demTexture); }
        if (tile.fbo) {
            tile.fbo.destroy();
            delete tile.fbo;
        }
        if (tile.dem) { delete tile.dem; }
        delete tile.neighboringTiles;

        tile.state = 'unloaded';
        this.dispatcher.send('removeDEMTile', { uid: tile.uid, source: this.id }, undefined, tile.workerID);
    };

    return RasterDEMTileSource;
}(RasterTileSource));

module.exports = RasterDEMTileSource;

},{"../util/ajax":256,"../util/browser":257,"../util/evented":265,"../util/mapbox":272,"../util/util":280,"./raster_tile_source":113,"./tile_id":119}],112:[function(require,module,exports){
'use strict';//      

var ref = require('../data/dem_data');
var DEMData = ref.DEMData;

                                       
             
                            
                          
                  
                         


var RasterDEMTileWorkerSource = function RasterDEMTileWorkerSource() {
    this.loading = {};
    this.loaded = {};
};

RasterDEMTileWorkerSource.prototype.loadTile = function loadTile (params                     , callback                   ) {
    var source = params.source,
        uid = params.uid;

    if (!this.loading[source])
        { this.loading[source] = {}; }

    var dem = new DEMData(uid);
    this.loading[source][uid] = dem;
    dem.loadFromImage(params.rawImageData);
    delete this.loading[source][uid];

    this.loaded[source] = this.loaded[source] || {};
    this.loaded[source][uid] = dem;
    callback(null, dem);
};

RasterDEMTileWorkerSource.prototype.removeTile = function removeTile (params            ) {
    var loaded = this.loaded[params.source],
        uid = params.uid;
    if (loaded && loaded[uid]) {
        delete loaded[uid];
    }
};

module.exports = RasterDEMTileWorkerSource;

},{"../data/dem_data":57}],113:[function(require,module,exports){
'use strict';//      

var util = require('../util/util');
var ajax = require('../util/ajax');
var Evented = require('../util/evented');
var loadTileJSON = require('./load_tilejson');
var normalizeURL = require('../util/mapbox').normalizeTileURL;
var TileBounds = require('./tile_bounds');
var Texture = require('../render/texture');

                                     
                                                
                                 
                                                 
                               
                                                

var RasterTileSource = (function (Evented) {
    function RasterTileSource(id        , options                                                          , dispatcher            , eventedParent         ) {
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

    RasterTileSource.prototype.hasTile = function hasTile (tileID                  ) {
        return !this.tileBounds || this.tileBounds.contains(tileID.canonical);
    };

    RasterTileSource.prototype.loadTile = function loadTile (tile      , callback                ) {
        var this$1 = this;

        var url = normalizeURL(tile.tileID.canonical.url(this.tiles, this.scheme), this.url, this.tileSize);
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

                var context = this$1.map.painter.context;
                var gl = context.gl;
                tile.texture = this$1.map.painter.getTileTexture(img.width);
                if (tile.texture) {
                    tile.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE, gl.LINEAR_MIPMAP_NEAREST);
                    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, img);
                } else {
                    tile.texture = new Texture(context, img, gl.RGBA);
                    tile.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE, gl.LINEAR_MIPMAP_NEAREST);

                    if (context.extTextureFilterAnisotropic) {
                        gl.texParameterf(gl.TEXTURE_2D, context.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT, context.extTextureFilterAnisotropicMax);
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

},{"../render/texture":98,"../util/ajax":256,"../util/evented":265,"../util/mapbox":272,"../util/util":280,"./load_tilejson":108,"./tile_bounds":118}],114:[function(require,module,exports){
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

},{"../util/ajax":256,"../util/evented":265,"../util/window":259}],115:[function(require,module,exports){
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
    'raster-dem': require('../source/raster_dem_tile_source'),
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

},{"../source/canvas_source":103,"../source/geojson_source":104,"../source/image_source":107,"../source/raster_dem_tile_source":111,"../source/raster_tile_source":113,"../source/vector_tile_source":120,"../source/video_source":122,"../util/util":280}],116:[function(require,module,exports){
'use strict';//      

var createSource = require('./source').create;
var Tile = require('./tile');
var Evented = require('../util/evented');
var Cache = require('../util/lru_cache');
var Coordinate = require('../geo/coordinate');
var util = require('../util/util');
var EXTENT = require('../data/extent');
var Context = require('../gl/context');
var Point = require('@mapbox/point-geometry');
var browser = require('../util/browser');
var ref = require('./tile_id');
var OverscaledTileID = ref.OverscaledTileID;
var assert = require('assert');

                                     
                                 
                                        
                                                 
                                              
                                      
                                                

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

    SourceCache.prototype.prepare = function prepare (context         ) {
        var this$1 = this;

        if  (this._source.prepare) {
            this._source.prepare();
        }

        for (var i in this$1._tiles) {
            this$1._tiles[i].upload(context);
        }
    };

    /**
     * Return all tile ids ordered with z-order, and cast to numbers
     */
    SourceCache.prototype.getIds = function getIds ()                {
        var this$1 = this;


        var compareKeyZoom = function (a_, b_) {
            var a = this$1._tiles[a_].tileID;
            var b = this$1._tiles[b_].tileID;
            var rotatedA = (new Point(a.canonical.x, a.canonical.y)).rotate(this$1.transform.angle);
            var rotatedB = (new Point(b.canonical.x, b.canonical.y)).rotate(this$1.transform.angle);
            return a.overscaledZ - b.overscaledZ || rotatedB.y - rotatedA.y || rotatedB.x - rotatedA.x;
        };

        return Object.keys(this._tiles).map(Number).sort(compareKeyZoom);
    };

    SourceCache.prototype.getRenderableIds = function getRenderableIds () {
        return this.getIds().filter(this._isIdRenderable);
    };

    SourceCache.prototype.hasRenderableParent = function hasRenderableParent (tileID                  ) {
        var parentTile = this.findLoadedParent(tileID, 0, {});
        if (parentTile) {
            return this._isIdRenderable(parentTile.tileID.key);
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

        this._resetCache();

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

        tile.timeAdded = browser.now();
        if (previousState === 'expired') { tile.refreshedUponExpiration = true; }
        this._setTileReloadTimer(id, tile);
        if (this.getSource().type === 'raster-dem' && tile.dem) { this._backfillDEM(tile); }
        this._source.fire('data', {dataType: 'source', tile: tile, coord: tile.tileID});

        // HACK this is necessary to fix https://github.com/mapbox/mapbox-gl-js/issues/2986
        if (this.map) { this.map.painter.tileExtentVAO.vao = null; }
    };

    /**
    * For raster terrain source, backfill DEM to eliminate visible tile boundaries
    * @private
    */
    SourceCache.prototype._backfillDEM = function _backfillDEM (tile      ) {
        var this$1 = this;

        var renderables = this.getRenderableIds();
        for (var i = 0; i < renderables.length; i++) {
            var borderId = renderables[i];
            if (tile.neighboringTiles && tile.neighboringTiles[borderId]) {
                var borderTile = this$1.getTileByID(borderId);
                fillBorder(tile, borderTile);
                fillBorder(borderTile, tile);
            }
        }

        function fillBorder(tile, borderTile) {
            tile.needsHillshadePrepare = true;
            var dx = borderTile.tileID.canonical.x - tile.tileID.canonical.x;
            var dy = borderTile.tileID.canonical.y - tile.tileID.canonical.y;
            var dim = Math.pow(2, tile.tileID.canonical.z);
            var borderId = borderTile.tileID.key;
            if (dx === 0 && dy === 0) { return; }

            if (Math.abs(dy) > 1) {
                return;
            }
            if (Math.abs(dx) > 1) {
                // Adjust the delta coordinate for world wraparound.
                if (Math.abs(dx + dim) === 1) {
                    dx += dim;
                } else if (Math.abs(dx - dim) === 1) {
                    dx -= dim;
                }
            }
            if (!borderTile.dem || !tile.dem) { return; }
            tile.dem.backfillBorder(borderTile.dem, dx, dy);
            if (tile.neighboringTiles && tile.neighboringTiles[borderId])
                { tile.neighboringTiles[borderId].backfilled = true; }
        }
    };
    /**
     * Get a specific tile by TileID
     */
    SourceCache.prototype.getTile = function getTile (tileID                  )       {
        return this.getTileByID(tileID.key);
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
    SourceCache.prototype._findLoadedChildren = function _findLoadedChildren (tileID                  , maxCoveringZoom        , retain                           )          {
        var this$1 = this;

        var found = false;

        for (var id in this$1._tiles) {
            var tile = this$1._tiles[id];

            // only consider renderable tiles on higher zoom levels (up to maxCoveringZoom)
            if (retain[id] || !tile.hasData() || tile.tileID.overscaledZ <= tileID.overscaledZ || tile.tileID.overscaledZ > maxCoveringZoom) { continue; }

            // disregard tiles that are not descendants of the given tile coordinate
            var z2 = Math.pow(2, tile.tileID.canonical.z - tileID.canonical.z);
            if (Math.floor(tile.tileID.canonical.x / z2) !== tileID.canonical.x ||
                Math.floor(tile.tileID.canonical.y / z2) !== tileID.canonical.y)
                { continue; }

            // found loaded child
            retain[id] = tile.tileID;
            found = true;

            // loop through parents; retain the topmost loaded one if found
            while (tile && tile.tileID.overscaledZ - 1 > tileID.overscaledZ) {
                var parent = tile.tileID.scaledTo(tile.tileID.overscaledZ - 1);
                if (!parent) { break; }

                tile = this$1._tiles[parent.key];
                if (tile && tile.hasData()) {
                    delete retain[id];
                    retain[parent.key] = parent;
                }
            }
        }
        return found;
    };

    /**
     * Find a loaded parent of the given tile (up to minCoveringZoom);
     * adds the found tile to retain object and returns the tile if found
     */
    SourceCache.prototype.findLoadedParent = function findLoadedParent (tileID                  , minCoveringZoom        , retain                           )        {
        var this$1 = this;

        for (var z = tileID.overscaledZ - 1; z >= minCoveringZoom; z--) {
            var parent = tileID.scaledTo(z);
            if (!parent) { return; }
            var id = String(parent.key);
            var tile = this$1._tiles[id];
            if (tile && tile.hasData()) {
                retain[id] = parent;
                return tile;
            }
            if (this$1._cache.has(id)) {
                retain[id] = parent;
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

        var idealTileIDs;
        if (!this.used) {
            idealTileIDs = [];
        } else if (this._source.tileID) {
            idealTileIDs = transform.getVisibleUnwrappedCoordinates((this._source.tileID     ))
                .map(function (unwrapped) { return new OverscaledTileID(unwrapped.canonical.z, unwrapped.wrap, unwrapped.canonical.z, unwrapped.canonical.x, unwrapped.canonical.y); });
        } else {
            idealTileIDs = transform.coveringTiles({
                tileSize: this._source.tileSize,
                minzoom: this._source.minzoom,
                maxzoom: this._source.maxzoom,
                roundZoom: this._source.roundZoom,
                reparseOverscaled: this._source.reparseOverscaled
            });

            if (this._source.hasTile) {
                idealTileIDs = idealTileIDs.filter(function (coord) { return (this$1._source.hasTile     )(coord); });
            }
        }

        // Determine the overzooming/underzooming amounts.
        var zoom = (this._source.roundZoom ? Math.round : Math.floor)(this.getZoom(transform));
        var minCoveringZoom = Math.max(zoom - SourceCache.maxOverzooming, this._source.minzoom);
        var maxCoveringZoom = Math.max(zoom + SourceCache.maxUnderzooming,  this._source.minzoom);

        // Retain is a list of tiles that we shouldn't delete, even if they are not
        // the most ideal tile for the current viewport. This may include tiles like
        // parent or child tiles that are *already* loaded.
        var retain = this._updateRetainedTiles(idealTileIDs, zoom);

        var parentsForFading = {};

        if (isRasterType(this._source.type)) {
            var ids = Object.keys(retain);
            for (var k = 0; k < ids.length; k++) {
                var id = ids[k];
                var tileID = retain[id];
                assert(tileID.key === +id);
                var tile = this$1._tiles[id];
                if (!tile) { continue; }

                // If the drawRasterTile has never seen this tile, then
                // tile.fadeEndTime may be unset.  In that case, or if
                // fadeEndTime is in the future, then this tile is still
                // fading in. Find tiles to cross-fade with it.
                if (typeof tile.fadeEndTime === 'undefined' || tile.fadeEndTime >= browser.now()) {
                    if (this$1._findLoadedChildren(tileID, maxCoveringZoom, retain)) {
                        retain[id] = tileID;
                    }
                    var parentTile = this$1.findLoadedParent(tileID, minCoveringZoom, parentsForFading);
                    if (parentTile) {
                        this$1._addTile(parentTile.tileID);
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
            retain[fadedParent] = parentsForFading[fadedParent];
        }
        // Remove the tiles we don't need anymore.
        var remove = util.keysDifference(this._tiles, retain);
        for (var i = 0; i < remove.length; i++) {
            this$1._removeTile(remove[i]);
        }
    };

    SourceCache.prototype._updateRetainedTiles = function _updateRetainedTiles (idealTileIDs                         , zoom        )                                {
        var this$1 = this;

        var retain = {};
        var checked                       = {};
        var minCoveringZoom = Math.max(zoom - SourceCache.maxOverzooming, this._source.minzoom);
        var maxCoveringZoom = Math.max(zoom + SourceCache.maxUnderzooming,  this._source.minzoom);

        for (var i = 0; i < idealTileIDs.length; i++) {
            var tileID = idealTileIDs[i];
            var tile = this$1._addTile(tileID);
            var parentWasRequested = false;
            if (tile.hasData()) {
                retain[tileID.key] = tileID;
            } else {
                // The tile we require is not yet loaded or does not exist.
                // We are now attempting to load child and parent tiles.

                // As we descend up and down the tile pyramid of the ideal tile, we check whether the parent
                // tile has been previously requested (and errored in this case due to the previous conditional)
                // in order to determine if we need to request its parent.
                parentWasRequested = tile.wasRequested();

                // The tile isn't loaded yet, but retain it anyway because it's an ideal tile.
                retain[tileID.key] = tileID;
                var covered = true;
                var overscaledZ = zoom + 1;
                if (overscaledZ > this$1._source.maxzoom) {
                    // We're looking for an overzoomed child tile.
                    var childCoord = tileID.children(this$1._source.maxzoom)[0];
                    var childTile = this$1.getTile(childCoord);
                    if (!!childTile && childTile.hasData()) {
                        retain[childCoord.key] = childCoord;
                    } else {
                        covered = false;
                    }
                } else {
                    this$1._findLoadedChildren(tileID, maxCoveringZoom, retain);
                    // check if all 4 immediate children are loaded (i.e. the missing ideal tile is covered)
                    var children = tileID.children(this$1._source.maxzoom);
                    for (var j = 0; j < children.length; j++) {
                        if (!retain[children[j].key]) {
                            covered = false;
                            break;
                        }
                    }
                }

                if (!covered) {

                    // We couldn't find child tiles that entirely cover the ideal tile.
                    for (var overscaledZ$1 = tileID.overscaledZ - 1; overscaledZ$1 >= minCoveringZoom; --overscaledZ$1) {

                        var parentId = tileID.scaledTo(overscaledZ$1);
                        if (checked[parentId.key]) {
                            // Break parent tile ascent, this route has been previously checked by another child.
                            break;
                        } else {
                            checked[parentId.key] = true;
                        }

                        tile = this$1.getTile(parentId);
                        if (!tile && parentWasRequested) {
                            tile = this$1._addTile(parentId);
                        }

                        if (tile) {
                            retain[parentId.key] = parentId;
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
    SourceCache.prototype._addTile = function _addTile (tileID                  )       {
        var tile = this._tiles[tileID.key];
        if (tile)
            { return tile; }


        tile = this._cache.getAndRemove((tileID.key     ));
        if (tile) {
            if (this._cacheTimers[tileID.key]) {
                clearTimeout(this._cacheTimers[tileID.key]);
                delete this._cacheTimers[tileID.key];
                this._setTileReloadTimer(tileID.key, tile);
            }
        }

        var cached = Boolean(tile);
        if (!cached) {
            tile = new Tile(tileID, this._source.tileSize * tileID.overscaleFactor());
            this._loadTile(tile, this._tileLoaded.bind(this, tile, tileID.key, tile.state));
        }

        // Impossible, but silence flow.
        if (!tile) { return (null     ); }

        tile.uses++;
        this._tiles[tileID.key] = tile;
        if (!cached) { this._source.fire('dataloading', {tile: tile, coord: tile.tileID, dataType: 'source'}); }

        return tile;
    };

    SourceCache.prototype._setTileReloadTimer = function _setTileReloadTimer (id                 , tile      ) {
        var this$1 = this;

        if (id in this._timers) {
            clearTimeout(this._timers[id]);
            delete this._timers[id];
        }

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

        if (id in this._cacheTimers) {
            clearTimeout(this._cacheTimers[id]);
            delete this._cacheTimers[id];
        }

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

        if (tile.hasData()) {
            tile.tileID = tile.tileID.wrapped();
            var wrappedId = tile.tileID.key;
            this._cache.add((wrappedId     ), tile);
            this._setCacheInvalidationTimer(wrappedId, tile);
        } else {
            tile.aborted = true;
            this._abortTile(tile);
            this._unloadTile(tile);
        }
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

        this._resetCache();
    };

    SourceCache.prototype._resetCache = function _resetCache () {
        var this$1 = this;

        for (var id in this$1._cacheTimers)
            { clearTimeout(this$1._cacheTimers[id]); }

        this._cacheTimers = {};
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
            var tileID = tile.tileID;

            var tileSpaceBounds = [
                coordinateToTilePoint(tileID, new Coordinate(minX, minY, z)),
                coordinateToTilePoint(tileID, new Coordinate(maxX, maxY, z))
            ];

            if (tileSpaceBounds[0].x < EXTENT && tileSpaceBounds[0].y < EXTENT &&
                tileSpaceBounds[1].x >= 0 && tileSpaceBounds[1].y >= 0) {

                var tileSpaceQueryGeometry = [];
                for (var j = 0; j < queryGeometry.length; j++) {
                    tileSpaceQueryGeometry.push(coordinateToTilePoint(tileID, queryGeometry[j]));
                }

                tileResults.push({
                    tile: tile,
                    tileID: tileID,
                    queryGeometry: [tileSpaceQueryGeometry],
                    scale: Math.pow(2, this$1.transform.zoom - tile.tileID.overscaledZ)
                });
            }
        }

        return tileResults;
    };

    SourceCache.prototype.getVisibleCoordinates = function getVisibleCoordinates () {
        var this$1 = this;

        var coords = this.getRenderableIds().map(function (id) { return this$1._tiles[id].tileID; });
        for (var i = 0, list = coords; i < list.length; i += 1) {
            var coord = list[i];

            coord.posMatrix = this$1.transform.calculatePosMatrix(coord.toUnwrapped());
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
                if (tile.fadeEndTime !== undefined && tile.fadeEndTime >= browser.now()) {
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
function coordinateToTilePoint(tileID                  , coord            )        {
    var zoomedCoord = coord.zoomTo(tileID.canonical.z);
    return new Point(
        (zoomedCoord.column - (tileID.canonical.x + tileID.wrap * Math.pow(2, tileID.canonical.z))) * EXTENT,
        (zoomedCoord.row - tileID.canonical.y) * EXTENT
    );
}

function isRasterType(type) {
    return type === 'raster' || type === 'image' || type === 'video';
}

module.exports = SourceCache;

},{"../data/extent":58,"../geo/coordinate":66,"../gl/context":71,"../util/browser":257,"../util/evented":265,"../util/lru_cache":271,"../util/util":280,"./source":115,"./tile":117,"./tile_id":119,"@mapbox/point-geometry":4,"assert":13}],117:[function(require,module,exports){
'use strict';//      

var util = require('../util/util');
var deserializeBucket = require('../data/bucket').deserialize;
var FeatureIndex = require('../data/feature_index');
var vt = require('@mapbox/vector-tile');
var Protobuf = require('pbf');
var GeoJSONFeature = require('../util/vectortile_to_geojson');
var featureFilter = require('../style-spec/feature_filter');
var CollisionIndex = require('../symbol/collision_index');
var SymbolBucket = require('../data/bucket/symbol_bucket');
var ref = require('../data/array_types');
var RasterBoundsArray = ref.RasterBoundsArray;
var CollisionBoxArray = ref.CollisionBoxArray;
var rasterBoundsAttributes = require('../data/raster_bounds_attributes');
var EXTENT = require('../data/extent');
var Point = require('@mapbox/point-geometry');
var Texture = require('../render/texture');
var ref$1 = require('../data/segment');
var SegmentVector = ref$1.SegmentVector;
var ref$2 = require('../data/index_array_type');
var TriangleIndexArray = ref$2.TriangleIndexArray;
var browser = require('../util/browser');

var CLOCK_SKEW_RETRY_TIMEOUT = 30000;

                                           
                                                   
                                                      
                                              
                                                         
                                            
                                         
                                                  
                                                    
                                                
                                                 
                                                                                    

                       
                                                            
                                                                     
                                                                                          
                                                
                                                                  
                  /* Tile data was previously loaded, but has expired per its
                   * HTTP headers and is in the process of refreshing. */

/**
 * A tile object is the combination of a Coordinate, which defines
 * its place, as well as a unique ID and data tracking for its content
 *
 * @private
 */
var Tile = function Tile(tileID              , size    ) {
    this.tileID = tileID;
    this.uid = util.uniqueId();
    this.uses = 0;
    this.tileSize = size;
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
    if (fadeEndTime < browser.now()) { return; }
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
Tile.prototype.loadVectorData = function loadVectorData (data              , painter , justReloaded      ) {
        var this$1 = this;

    if (this.hasData()) {
        this.unloadVectorData();
    }

    this.state = 'loaded';

    // empty GeoJSON tile
    if (!data) {
        this.collisionBoxArray = new CollisionBoxArray();
        return;
    }

    if (data.rawTileData) {
        // Only vector tiles have rawTileData
        this.rawTileData = data.rawTileData;
    }
    this.collisionBoxArray = data.collisionBoxArray;
    this.featureIndex = data.featureIndex;
    this.featureIndex.rawTileData = this.rawTileData;
    this.buckets = deserializeBucket(data.buckets, painter.style);

    if (justReloaded) {
        for (var id in this$1.buckets) {
            var bucket = this$1.buckets[id];
            if (bucket instanceof SymbolBucket) {
                bucket.justReloaded = true;
            }
        }
    }

    if (data.iconAtlasImage) {
        this.iconAtlasImage = data.iconAtlasImage;
    }
    if (data.glyphAtlasImage) {
        this.glyphAtlasImage = data.glyphAtlasImage;
    }
};

/**
 * Release any data or WebGL resources referenced by this tile.
 * @returns {undefined}
 * @private
 */
Tile.prototype.unloadVectorData = function unloadVectorData () {
        var this$1 = this;

    for (var id in this$1.buckets) {
        this$1.buckets[id].destroy();
    }
    this.buckets = {};

    if (this.iconAtlasTexture) {
        this.iconAtlasTexture.destroy();
    }
    if (this.glyphAtlasTexture) {
        this.glyphAtlasTexture.destroy();
    }

    this.collisionBoxArray = null;
    this.featureIndex = null;
    this.state = 'unloaded';
};

Tile.prototype.unloadDEMData = function unloadDEMData () {
    this.dem = null;
    this.neighboringTiles = null;
    this.state = 'unloaded';
};

Tile.prototype.getBucket = function getBucket (layer        ) {
    return this.buckets[layer.id];
};

Tile.prototype.upload = function upload (context     ) {
        var this$1 = this;

    for (var id in this$1.buckets) {
        var bucket = this$1.buckets[id];
        if (!bucket.uploaded) {
            bucket.upload(context);
            bucket.uploaded = true;
        }
    }

    var gl = context.gl;

    if (this.iconAtlasImage) {
        this.iconAtlasTexture = new Texture(context, this.iconAtlasImage, gl.RGBA);
        this.iconAtlasImage = null;
    }

    if (this.glyphAtlasImage) {
        this.glyphAtlasTexture = new Texture(context, this.glyphAtlasImage, gl.ALPHA);
        this.glyphAtlasImage = null;
    }
};

Tile.prototype.queryRenderedFeatures = function queryRenderedFeatures (layers                    ,
                      queryGeometry                 ,
                      scale    ,
                      params                                                    ,
                      bearing    ,
                      sourceID    ,
                      collisionIndex             )                                                                   {
        var this$1 = this;

    if (!this.featureIndex || !this.collisionBoxArray)
        { return {}; }

    // Determine the additional radius needed factoring in property functions
    var additionalRadius = 0;
    var bucketInstanceIds = {};
    for (var id in layers) {
        var bucket = this$1.getBucket(layers[id]);
        if (bucket) {
            additionalRadius = Math.max(additionalRadius, layers[id].queryRadius(bucket));

            // Add the bucket instance's id to the set of current ids.
            // The query will only include results from current buckets.
            if (bucket instanceof SymbolBucket && bucket.bucketInstanceId !== undefined) {
                bucketInstanceIds[bucket.bucketInstanceId] = true;
            }
        }
    }

    return this.featureIndex.query({
        queryGeometry: queryGeometry,
        scale: scale,
        tileSize: this.tileSize,
        bearing: bearing,
        params: params,
        additionalRadius: additionalRadius,
        collisionBoxArray: this.collisionBoxArray,
        sourceID: sourceID,
        collisionIndex: collisionIndex,
        bucketInstanceIds: bucketInstanceIds
    }, layers);
};

Tile.prototype.querySourceFeatures = function querySourceFeatures (result                   , params ) {
        var this$1 = this;

    if (!this.rawTileData) { return; }

    if (!this.vtLayers) {
        this.vtLayers = new vt.VectorTile(new Protobuf(this.rawTileData)).layers;
    }

    var sourceLayer = params ? params.sourceLayer : '';
    var layer = this.vtLayers._geojsonTileLayer || this.vtLayers[sourceLayer];

    if (!layer) { return; }

    var filter = featureFilter(params && params.filter);
    var coord = { z: this.tileID.overscaledZ, x: this.tileID.canonical.x, y: this.tileID.canonical.y };

    for (var i = 0; i < layer.length; i++) {
        var feature = layer.feature(i);
        if (filter({zoom: this$1.tileID.overscaledZ}, feature)) {
            var geojsonFeature = new GeoJSONFeature(feature, coord.z, coord.x, coord.y);
            (geojsonFeature ).tile = coord;
            result.push(geojsonFeature);
        }
    }
};

Tile.prototype.clearMask = function clearMask () {
    if (this.segments) {
        this.segments.destroy();
        delete this.segments;
    }
    if (this.maskedBoundsBuffer) {
        this.maskedBoundsBuffer.destroy();
        delete this.maskedBoundsBuffer;
    }
    if (this.maskedIndexBuffer) {
        this.maskedIndexBuffer.destroy();
        delete this.maskedIndexBuffer;
    }
};

Tile.prototype.setMask = function setMask (mask  , context     ) {
        var this$1 = this;


    // don't redo buffer work if the mask is the same;
    if (util.deepEqual(this.mask, mask)) { return; }

    this.mask = mask;
    this.clearMask();

    // We want to render the full tile, and keeping the segments/vertices/indices empty means
    // using the global shared buffers for covering the entire tile.
    if (util.deepEqual(mask, {'0': true})) { return; }

    var maskedBoundsArray = new RasterBoundsArray();
    var indexArray = new TriangleIndexArray();

    this.segments = new SegmentVector();
    // Create a new segment so that we will upload (empty) buffers even when there is nothing to
    // draw for this tile.
    this.segments.prepareSegment(0, maskedBoundsArray, indexArray);

    var maskArray = Object.keys(mask);
    for (var i = 0; i < maskArray.length; i++) {
        var maskCoord = mask[maskArray[i]];
        var vertexExtent = EXTENT >> maskCoord.z;
        var tlVertex = new Point(maskCoord.x * vertexExtent, maskCoord.y * vertexExtent);
        var brVertex = new Point(tlVertex.x + vertexExtent, tlVertex.y + vertexExtent);

        // not sure why flow is complaining here because it doesn't complain at L401
        var segment = (this$1.segments ).prepareSegment(4, maskedBoundsArray, indexArray);

        maskedBoundsArray.emplaceBack(tlVertex.x, tlVertex.y, tlVertex.x, tlVertex.y);
        maskedBoundsArray.emplaceBack(brVertex.x, tlVertex.y, brVertex.x, tlVertex.y);
        maskedBoundsArray.emplaceBack(tlVertex.x, brVertex.y, tlVertex.x, brVertex.y);
        maskedBoundsArray.emplaceBack(brVertex.x, brVertex.y, brVertex.x, brVertex.y);

        var offset = segment.vertexLength;
        // 0, 1, 2
        // 1, 2, 3
        indexArray.emplaceBack(offset, offset + 1, offset + 2);
        indexArray.emplaceBack(offset + 1, offset + 2, offset + 3);

        segment.vertexLength += 4;
        segment.primitiveLength += 2;
    }

    this.maskedBoundsBuffer = context.createVertexBuffer(maskedBoundsArray, rasterBoundsAttributes.members);
    this.maskedIndexBuffer = context.createIndexBuffer(indexArray);
};

Tile.prototype.hasData = function hasData () {
    return this.state === 'loaded' || this.state === 'reloading' || this.state === 'expired';
};

Tile.prototype.setExpiryData = function setExpiryData (data ) {
    var prior = this.expirationTime;

    if (data.cacheControl) {
        var parsedCC = util.parseCacheControl(data.cacheControl);
        if (parsedCC['max-age']) { this.expirationTime = Date.now() + parsedCC['max-age'] * 1000; }
    } else if (data.expires) {
        this.expirationTime = new Date(data.expires).getTime();
    }

    if (this.expirationTime) {
        var now = Date.now();
        var isExpired = false;

        if (this.expirationTime > now) {
            isExpired = false;
        } else if (!prior) {
            isExpired = true;
        } else if (this.expirationTime < prior) {
            // Expiring date is going backwards:
            // fall back to exponential backoff
            isExpired = true;

        } else {
            var delta = this.expirationTime - prior;

            if (!delta) {
                // Server is serving the same expired resource over and over: fall
                // back to exponential backoff.
                isExpired = true;

            } else {
                // Assume that either the client or the server clock is wrong and
                // try to interpolate a valid expiration date (from the client POV)
                // observing a minimum timeout.
                this.expirationTime = now + Math.max(delta, CLOCK_SKEW_RETRY_TIMEOUT);

            }
        }

        if (isExpired) {
            this.expiredRequestCount++;
            this.state = 'expired';
        } else {
            this.expiredRequestCount = 0;
        }
    }
};

Tile.prototype.getExpiryTimeout = function getExpiryTimeout () {
    if (this.expirationTime) {
        if (this.expiredRequestCount) {
            return 1000 * (1 << Math.min(this.expiredRequestCount - 1, 31));
        } else {
            // Max value for `setTimeout` implementations is a 32 bit integer; cap this accordingly
            return Math.min(this.expirationTime - new Date().getTime(), Math.pow(2, 31) - 1);
        }
    }
};

module.exports = Tile;

},{"../data/array_types":44,"../data/bucket":45,"../data/bucket/symbol_bucket":56,"../data/extent":58,"../data/feature_index":59,"../data/index_array_type":60,"../data/raster_bounds_attributes":64,"../data/segment":65,"../render/texture":98,"../style-spec/feature_filter":153,"../symbol/collision_index":222,"../util/browser":257,"../util/util":280,"../util/vectortile_to_geojson":281,"@mapbox/point-geometry":4,"@mapbox/vector-tile":8,"pbf":31}],118:[function(require,module,exports){
'use strict';//      

var LngLatBounds = require('../geo/lng_lat_bounds');
var clamp = require('../util/util').clamp;

                                               

var TileBounds = function TileBounds(bounds                              , minzoom     , maxzoom     ) {
    this.bounds = LngLatBounds.convert(this.validateBounds(bounds));
    this.minzoom = minzoom || 0;
    this.maxzoom = maxzoom || 24;
};

TileBounds.prototype.validateBounds = function validateBounds (bounds                              ) {
    // make sure the bounds property contains valid longitude and latitudes
    if (!Array.isArray(bounds) || bounds.length !== 4) { return [-180, -90, 180, 90]; }
    return [Math.max(-180, bounds[0]), Math.max(-90, bounds[1]), Math.min(180, bounds[2]), Math.min(90, bounds[3])];
};

TileBounds.prototype.contains = function contains (tileID             ) {
    var level = {
        minX: Math.floor(this.lngX(this.bounds.getWest(), tileID.z)),
        minY: Math.floor(this.latY(this.bounds.getNorth(), tileID.z)),
        maxX: Math.ceil(this.lngX(this.bounds.getEast(), tileID.z)),
        maxY: Math.ceil(this.latY(this.bounds.getSouth(), tileID.z))
    };
    var hit = tileID.x >= level.minX && tileID.x < level.maxX && tileID.y >= level.minY && tileID.y < level.maxY;
    return hit;
};

TileBounds.prototype.lngX = function lngX (lng    , zoom    ) {
    return (lng + 180) * (Math.pow(2, zoom) / 360);
};

TileBounds.prototype.latY = function latY (lat    , zoom    ) {
    var f = clamp(Math.sin(Math.PI / 180 * lat), -0.9999, 0.9999);
    var scale = Math.pow(2, zoom) / (2 * Math.PI);
    return Math.pow(2, zoom - 1) + 0.5 * Math.log((1 + f) / (1 - f)) * -scale;
};

module.exports = TileBounds;

},{"../geo/lng_lat_bounds":68,"../util/util":280}],119:[function(require,module,exports){
'use strict';//      

var WhooTS = require('@mapbox/whoots-js');
var assert = require('assert');
var ref = require('../util/web_worker_transfer');
var register = ref.register;
var Coordinate = require('../geo/coordinate');

var CanonicalTileID = function CanonicalTileID(z    , x    , y    ) {
    assert(z >= 0 && z <= 25);
    assert(x >= 0 && x < Math.pow(2, z));
    assert(y >= 0 && y < Math.pow(2, z));
    this.z = z;
    this.x = x;
    this.y = y;
    this.key = calculateKey(0, z, x, y);
};

CanonicalTileID.prototype.equals = function equals (id             ) {
    return this.z === id.z && this.x === id.x && this.y === id.y;
};

// given a list of urls, choose a url template and return a tile URL
CanonicalTileID.prototype.url = function url (urls           , scheme     ) {
    var bbox = WhooTS.getTileBBox(this.x, this.y, this.z);
    var quadkey = getQuadkey(this.z, this.x, this.y);

    return urls[(this.x + this.y) % urls.length]
        .replace('{prefix}', (this.x % 16).toString(16) + (this.y % 16).toString(16))
        .replace('{z}', String(this.z))
        .replace('{x}', String(this.x))
        .replace('{y}', String(scheme === 'tms' ? (Math.pow(2, this.z) - this.y - 1) : this.y))
        .replace('{quadkey}', quadkey)
        .replace('{bbox-epsg-3857}', bbox);
};

var UnwrappedTileID = function UnwrappedTileID(wrap    , canonical             ) {
    this.wrap = wrap;
    this.canonical = canonical;
    this.key = calculateKey(wrap, canonical.z, canonical.x, canonical.y);
};

var OverscaledTileID = function OverscaledTileID(overscaledZ    , wrap    , z    , x    , y    ) {
    assert(overscaledZ >= z);
    this.overscaledZ = overscaledZ;
    this.wrap = wrap;
    this.canonical = new CanonicalTileID(z, +x, +y);
    this.key = calculateKey(wrap, overscaledZ, x, y);
};

OverscaledTileID.prototype.scaledTo = function scaledTo (targetZ    ) {
    assert(targetZ <= this.overscaledZ);
    var zDifference = this.canonical.z - targetZ;
    if (targetZ > this.canonical.z) {
        return new OverscaledTileID(targetZ, this.wrap, this.canonical.z, this.canonical.x, this.canonical.y);
    } else {
        return new OverscaledTileID(targetZ, this.wrap, targetZ, this.canonical.x >> zDifference, this.canonical.y >> zDifference);
    }
};

OverscaledTileID.prototype.isChildOf = function isChildOf (parent              ) {
    var zDifference = this.canonical.z - parent.canonical.z;
    // We're first testing for z == 0, to avoid a 32 bit shift, which is undefined.
    return parent.overscaledZ === 0 || (
        parent.overscaledZ < this.overscaledZ &&
            parent.canonical.x === (this.canonical.x >> zDifference) &&
            parent.canonical.y === (this.canonical.y >> zDifference));
};

OverscaledTileID.prototype.children = function children (sourceMaxZoom    ) {
    if (this.overscaledZ >= sourceMaxZoom) {
        // return a single tile coord representing a an overscaled tile
        return [new OverscaledTileID(this.overscaledZ + 1, this.wrap, this.canonical.z, this.canonical.x, this.canonical.y)];
    }

    var z = this.canonical.z + 1;
    var x = this.canonical.x * 2;
    var y = this.canonical.y * 2;
    return [
        new OverscaledTileID(z, this.wrap, z, x, y),
        new OverscaledTileID(z, this.wrap, z, x + 1, y),
        new OverscaledTileID(z, this.wrap, z, x, y + 1),
        new OverscaledTileID(z, this.wrap, z, x + 1, y + 1)
    ];
};

OverscaledTileID.prototype.isLessThan = function isLessThan (rhs              ) {
    if (this.wrap < rhs.wrap) { return true; }
    if (this.wrap > rhs.wrap) { return false; }

    if (this.overscaledZ < rhs.overscaledZ) { return true; }
    if (this.overscaledZ > rhs.overscaledZ) { return false; }

    if (this.canonical.x < rhs.canonical.x) { return true; }
    if (this.canonical.x > rhs.canonical.x) { return false; }

    if (this.canonical.y < rhs.canonical.y) { return true; }
    return false;
};

OverscaledTileID.prototype.wrapped = function wrapped () {
    return new OverscaledTileID(this.overscaledZ, 0, this.canonical.z, this.canonical.x, this.canonical.y);
};

OverscaledTileID.prototype.overscaleFactor = function overscaleFactor () {
    return Math.pow(2, this.overscaledZ - this.canonical.z);
};

OverscaledTileID.prototype.toUnwrapped = function toUnwrapped () {
    return new UnwrappedTileID(this.wrap, this.canonical);
};

OverscaledTileID.prototype.toString = function toString () {
    return ((this.overscaledZ) + "/" + (this.canonical.x) + "/" + (this.canonical.y));
};

OverscaledTileID.prototype.toCoordinate = function toCoordinate () {
    return new Coordinate(this.canonical.x + Math.pow(2, this.wrap), this.canonical.y, this.canonical.z);
};

function calculateKey(wrap        , z        , x        , y        ) {
    wrap *= 2;
    if (wrap < 0) { wrap = wrap * -1 - 1; }
    var dim = 1 << z;
    return ((dim * dim * wrap + dim * y + x) * 32) + z;
}


function getQuadkey(z, x, y) {
    var quadkey = '', mask;
    for (var i = z; i > 0; i--) {
        mask = 1 << (i - 1);
        quadkey += ((x & mask ? 1 : 0) + (y & mask ? 2 : 0));
    }
    return quadkey;
}

register('CanonicalTileID', CanonicalTileID);
register('OverscaledTileID', OverscaledTileID, {omit: ['posMatrix']});

module.exports = {
    CanonicalTileID: CanonicalTileID,
    OverscaledTileID: OverscaledTileID,
    UnwrappedTileID: UnwrappedTileID
};

},{"../geo/coordinate":66,"../util/web_worker_transfer":283,"@mapbox/whoots-js":12,"assert":13}],120:[function(require,module,exports){
'use strict';//      

var Evented = require('../util/evented');
var util = require('../util/util');
var loadTileJSON = require('./load_tilejson');
var normalizeURL = require('../util/mapbox').normalizeTileURL;
var TileBounds = require('./tile_bounds');
var ResourceType = require('../util/ajax').ResourceType;
var browser = require('../util/browser');

                                     
                                                
                                 
                                                 
                               
                                                

var VectorTileSource = (function (Evented) {
    function VectorTileSource(id        , options                                                              , dispatcher            , eventedParent         ) {
        Evented.call(this);
        this.id = id;
        this.dispatcher = dispatcher;

        this.type = 'vector';
        this.minzoom = 0;
        this.maxzoom = 22;
        this.scheme = 'xyz';
        this.tileSize = 512;
        this.reparseOverscaled = true;
        this.isTileClipped = true;

        util.extend(this, util.pick(options, ['url', 'scheme', 'tileSize']));
        this._options = util.extend({ type: 'vector' }, options);

        this._collectResourceTiming = options.collectResourceTiming;

        if (this.tileSize !== 512) {
            throw new Error('vector tile sources must have a tileSize of 512');
        }

        this.setEventedParent(eventedParent);
    }

    if ( Evented ) VectorTileSource.__proto__ = Evented;
    VectorTileSource.prototype = Object.create( Evented && Evented.prototype );
    VectorTileSource.prototype.constructor = VectorTileSource;

    VectorTileSource.prototype.load = function load () {
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

    VectorTileSource.prototype.hasTile = function hasTile (tileID                  ) {
        return !this.tileBounds || this.tileBounds.contains(tileID.canonical);
    };

    VectorTileSource.prototype.onAdd = function onAdd (map     ) {
        this.map = map;
        this.load();
    };

    VectorTileSource.prototype.serialize = function serialize () {
        return util.extend({}, this._options);
    };

    VectorTileSource.prototype.loadTile = function loadTile (tile      , callback                ) {
        var overscaling = tile.tileID.overscaleFactor();
        var url = normalizeURL(tile.tileID.canonical.url(this.tiles, this.scheme), this.url);
        var params = {
            request: this.map._transformRequest(url, ResourceType.Tile),
            uid: tile.uid,
            tileID: tile.tileID,
            zoom: tile.tileID.overscaledZ,
            tileSize: this.tileSize * overscaling,
            type: this.type,
            source: this.id,
            pixelRatio: browser.devicePixelRatio,
            overscaling: overscaling,
            showCollisionBoxes: this.map.showCollisionBoxes,
        };
        params.request.collectResourceTiming = this._collectResourceTiming;

        if (tile.workerID === undefined || tile.state === 'expired') {
            tile.workerID = this.dispatcher.send('loadTile', params, done.bind(this));
        } else if (tile.state === 'loading') {
            // schedule tile reloading after it has been loaded
            tile.reloadCallback = callback;
        } else {
            this.dispatcher.send('reloadTile', params, done.bind(this), tile.workerID);
        }

        function done(err, data) {
            if (tile.aborted)
                { return callback(null); }

            if (err) {
                return callback(err);
            }

            if (data && data.resourceTiming)
                { tile.resourceTiming = data.resourceTiming; }

            if (this.map._refreshExpiredTiles) { tile.setExpiryData(data); }
            tile.loadVectorData(data, this.map.painter);

            callback(null);

            if (tile.reloadCallback) {
                this.loadTile(tile, tile.reloadCallback);
                tile.reloadCallback = null;
            }
        }
    };

    VectorTileSource.prototype.abortTile = function abortTile (tile      ) {
        this.dispatcher.send('abortTile', { uid: tile.uid, type: this.type, source: this.id }, undefined, tile.workerID);
    };

    VectorTileSource.prototype.unloadTile = function unloadTile (tile      ) {
        tile.unloadVectorData();
        this.dispatcher.send('removeTile', { uid: tile.uid, type: this.type, source: this.id }, undefined, tile.workerID);
    };

    VectorTileSource.prototype.hasTransition = function hasTransition () {
        return false;
    };

    return VectorTileSource;
}(Evented));

module.exports = VectorTileSource;

},{"../util/ajax":256,"../util/browser":257,"../util/evented":265,"../util/mapbox":272,"../util/util":280,"./load_tilejson":108,"./tile_bounds":118}],121:[function(require,module,exports){
'use strict';//      

var ajax = require('../util/ajax');
var vt = require('@mapbox/vector-tile');
var Protobuf = require('pbf');
var WorkerTile = require('./worker_tile');
var util = require('../util/util');
var perf = require('../util/performance');

             
                 
                         
                       
                  
                                 

                                                                                    
                                       
                                                              
                                                

                                    
                           
                         
                  
                       
                                                      
  

/**
 * @callback LoadVectorDataCallback
 * @param error
 * @param vectorTile
 * @private
 */
                                                                     

                                         
                                                                                                                  

/**
 * @private
 */
function loadVectorTile(params                      , callback                        ) {
    var xhr = ajax.getArrayBuffer(params.request, function (err, response) {
        if (err) {
            callback(err);
        } else if (response) {
            callback(null, {
                vectorTile: new vt.VectorTile(new Protobuf(response.data)),
                rawData: response.data,
                cacheControl: response.cacheControl,
                expires: response.expires
            });
        }
    });
    return function () {
        xhr.abort();
        callback();
    };
}

/**
 * The {@link WorkerSource} implementation that supports {@link VectorTileSource}.
 * This class is designed to be easily reused to support custom source types
 * for data formats that can be parsed/converted into an in-memory VectorTile
 * representation.  To do so, create it with
 * `new VectorTileWorkerSource(actor, styleLayers, customLoadVectorDataFunction)`.
 *
 * @private
 */
var VectorTileWorkerSource = function VectorTileWorkerSource(actor     , layerIndex               , loadVectorData               ) {
      this.actor = actor;
      this.layerIndex = layerIndex;
      this.loadVectorData = loadVectorData || loadVectorTile;
      this.loading = {};
      this.loaded = {};
  };

  /**
   * Implements {@link WorkerSource#loadTile}. Delegates to
   * {@link VectorTileWorkerSource#loadVectorData} (which by default expects
   * a `params.url` property) for fetching and producing a VectorTile object.
   */
  VectorTileWorkerSource.prototype.loadTile = function loadTile (params                    , callback                  ) {
        var this$1 = this;

      var source = params.source,
          uid = params.uid;

      if (!this.loading[source])
          { this.loading[source] = {}; }

      var workerTile = this.loading[source][uid] = new WorkerTile(params);
      workerTile.abort = this.loadVectorData(params, function (err, response) {
          delete this$1.loading[source][uid];

          if (err || !response) {
              return callback(err);
          }

          var rawTileData = response.rawData;
          var cacheControl = {};
          if (response.expires) { cacheControl.expires = response.expires; }
          if (response.cacheControl) { cacheControl.cacheControl = response.cacheControl; }
          var resourceTiming = {};
          if (params.request && params.request.collectResourceTiming) {
              var resourceTimingData = perf.getEntriesByName(params.request.url);
              // it's necessary to eval the result of getEntriesByName() here via parse/stringify
              // late evaluation in the main thread causes TypeError: illegal invocation
              if (resourceTimingData)
                  { resourceTiming.resourceTiming = JSON.parse(JSON.stringify(resourceTimingData)); }
          }

          workerTile.vectorTile = response.vectorTile;
          workerTile.parse(response.vectorTile, this$1.layerIndex, this$1.actor, function (err, result) {
              if (err || !result) { return callback(err); }

              // Transferring a copy of rawTileData because the worker needs to retain its copy.
              callback(null, util.extend({rawTileData: rawTileData.slice(0)}, result, cacheControl, resourceTiming));
          });

          this$1.loaded[source] = this$1.loaded[source] || {};
          this$1.loaded[source][uid] = workerTile;
      });
  };

  /**
   * Implements {@link WorkerSource#reloadTile}.
   */
  VectorTileWorkerSource.prototype.reloadTile = function reloadTile (params                    , callback                  ) {
      var loaded = this.loaded[params.source],
          uid = params.uid,
          vtSource = this;
      if (loaded && loaded[uid]) {
          var workerTile = loaded[uid];
          workerTile.showCollisionBoxes = params.showCollisionBoxes;

          if (workerTile.status === 'parsing') {
              workerTile.reloadCallback = callback;
          } else if (workerTile.status === 'done') {
              workerTile.parse(workerTile.vectorTile, this.layerIndex, this.actor, done.bind(workerTile));
          }

      }

      function done(err, data) {
          if (this.reloadCallback) {
              var reloadCallback = this.reloadCallback;
              delete this.reloadCallback;
              this.parse(this.vectorTile, vtSource.layerIndex, vtSource.actor, reloadCallback);
          }

          callback(err, data);
      }
  };

  /**
   * Implements {@link WorkerSource#abortTile}.
   *
   * @param params
   * @param params.source The id of the source for which we're loading this tile.
   * @param params.uid The UID for this tile.
   */
  VectorTileWorkerSource.prototype.abortTile = function abortTile (params              , callback                  ) {
      var loading = this.loading[params.source],
          uid = params.uid;
      if (loading && loading[uid] && loading[uid].abort) {
          loading[uid].abort();
          delete loading[uid];
      }
      callback();
  };

  /**
   * Implements {@link WorkerSource#removeTile}.
   *
   * @param params
   * @param params.source The id of the source for which we're loading this tile.
   * @param params.uid The UID for this tile.
   */
  VectorTileWorkerSource.prototype.removeTile = function removeTile (params              , callback                  ) {
      var loaded = this.loaded[params.source],
          uid = params.uid;
      if (loaded && loaded[uid]) {
          delete loaded[uid];
      }
      callback();
  };

module.exports = VectorTileWorkerSource;

},{"../util/ajax":256,"../util/performance":273,"../util/util":280,"./worker_tile":124,"@mapbox/vector-tile":8,"pbf":31}],122:[function(require,module,exports){
'use strict';//      

var ajax = require('../util/ajax');
var ImageSource = require('./image_source');
var rasterBoundsAttributes = require('../data/raster_bounds_attributes');
var VertexArrayObject = require('../render/vertex_array_object');
var Texture = require('../render/texture');

                                 
                                                 
                                           

/**
 * A data source containing video.
 * (See the [Style Specification](https://www.mapbox.com/mapbox-gl-style-spec/#sources-video) for detailed documentation of options.)
 * @interface VideoSource
 * @example
 * // add to map
 * map.addSource('some id', {
 *    type: 'video',
 *    url: [
 *        'https://www.mapbox.com/blog/assets/baltimore-smoke.mp4',
 *        'https://www.mapbox.com/blog/assets/baltimore-smoke.webm'
 *    ],
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
 * @see [Add a video](https://www.mapbox.com/mapbox-gl-js/example/video-on-a-map/)
 */
var VideoSource = (function (ImageSource) {
    function VideoSource(id        , options                          , dispatcher            , eventedParent         ) {
        ImageSource.call(this, id, options, dispatcher, eventedParent);
        this.roundZoom = true;
        this.type = 'video';
        this.options = options;
    }

    if ( ImageSource ) VideoSource.__proto__ = ImageSource;
    VideoSource.prototype = Object.create( ImageSource && ImageSource.prototype );
    VideoSource.prototype.constructor = VideoSource;

    VideoSource.prototype.load = function load () {
        var this$1 = this;

        var options = this.options;
        this.urls = options.urls;

        ajax.getVideo(options.urls, function (err, video) {
            if (err) {
                this$1.fire('error', {error: err});
            } else if (video) {
                this$1.video = video;
                this$1.video.loop = true;

                // Start repainting when video starts playing. hasTransition() will then return
                // true to trigger additional frames as long as the videos continues playing.
                this$1.video.addEventListener('playing', function () {
                    this$1.map._rerender();
                });

                if (this$1.map) {
                    this$1.video.play();
                }

                this$1._finishLoading();
            }
        });
    };

    /**
     * Returns the HTML `video` element.
     *
     * @returns {HTMLVideoElement} The HTML `video` element.
     */
    VideoSource.prototype.getVideo = function getVideo () {
        return this.video;
    };

    VideoSource.prototype.onAdd = function onAdd (map     ) {
        if (this.map) { return; }
        this.map = map;
        this.load();
        if (this.video) {
            this.video.play();
            this.setCoordinates(this.coordinates);
        }
    };

    /**
     * Sets the video's coordinates and re-renders the map.
     *
     * @method setCoordinates
     * @instance
     * @memberof VideoSource
     * @param {Array<Array<number>>} coordinates Four geographical coordinates,
     *   represented as arrays of longitude and latitude numbers, which define the corners of the video.
     *   The coordinates start at the top left corner of the video and proceed in clockwise order.
     *   They do not have to represent a rectangle.
     * @returns {VideoSource} this
     */
    // setCoordinates inherited from ImageSource

    VideoSource.prototype.prepare = function prepare () {
        var this$1 = this;

        if (Object.keys(this.tiles).length === 0 || this.video.readyState < 2) {
            return; // not enough data for current position
        }

        var context = this.map.painter.context;
        var gl = context.gl;

        if (!this.boundsBuffer) {
            this.boundsBuffer = context.createVertexBuffer(this._boundsArray, rasterBoundsAttributes.members);
        }

        if (!this.boundsVAO) {
            this.boundsVAO = new VertexArrayObject();
        }

        if (!this.texture) {
            this.texture = new Texture(context, this.video, gl.RGBA);
            this.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE);
        } else if (!this.video.paused) {
            this.texture.bind(gl.LINEAR, gl.CLAMP_TO_EDGE);
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, this.video);
        }

        for (var w in this$1.tiles) {
            var tile = this$1.tiles[w];
            if (tile.state !== 'loaded') {
                tile.state = 'loaded';
                tile.texture = this$1.texture;
            }
        }
    };

    VideoSource.prototype.serialize = function serialize () {
        return {
            type: 'video',
            urls: this.urls,
            coordinates: this.coordinates
        };
    };

    VideoSource.prototype.hasTransition = function hasTransition () {
        return this.video && !this.video.paused;
    };

    return VideoSource;
}(ImageSource));

module.exports = VideoSource;

},{"../data/raster_bounds_attributes":64,"../render/texture":98,"../render/vertex_array_object":100,"../util/ajax":256,"./image_source":107}],123:[function(require,module,exports){
'use strict';//      

var Actor = require('../util/actor');
var StyleLayerIndex = require('../style/style_layer_index');

var VectorTileWorkerSource = require('./vector_tile_worker_source');
var RasterDEMTileWorkerSource = require('./raster_dem_tile_worker_source');
var GeoJSONWorkerSource = require('./geojson_worker_source');
var assert = require('assert');

var globalRTLTextPlugin = require('./rtl_text_plugin');

             
                 
                         
                            
                       
                          
                  
                                 

                                                                   
                                                

/**
 * @private
 */
var Worker = function Worker(self                        ) {
    var this$1 = this;

    this.self = self;
    this.actor = new Actor(self, this);

    this.layerIndexes = {};

    this.workerSourceTypes = {
        vector: VectorTileWorkerSource,
        geojson: GeoJSONWorkerSource
    };

    // [mapId][sourceType] => worker source instance
    this.workerSources = {};
    this.demWorkerSources = {};

    this.self.registerWorkerSource = function (name    , WorkerSource                 ) {
        if (this$1.workerSourceTypes[name]) {
            throw new Error(("Worker source with name \"" + name + "\" already registered."));
        }
        this$1.workerSourceTypes[name] = WorkerSource;
    };

    this.self.registerRTLTextPlugin = function (rtlTextPlugin                                                                ) {
        if (globalRTLTextPlugin.applyArabicShaping || globalRTLTextPlugin.processBidirectionalText) {
            throw new Error('RTL text plugin already registered.');
        }
        globalRTLTextPlugin['applyArabicShaping'] = rtlTextPlugin.applyArabicShaping;
        globalRTLTextPlugin['processBidirectionalText'] = rtlTextPlugin.processBidirectionalText;
    };
};

Worker.prototype.setLayers = function setLayers (mapId    , layers                       , callback                ) {
    this.getLayerIndex(mapId).replace(layers);
    callback();
};

Worker.prototype.updateLayers = function updateLayers (mapId    , params                                                            , callback                ) {
    this.getLayerIndex(mapId).update(params.layers, params.removedIds);
    callback();
};

Worker.prototype.loadTile = function loadTile (mapId    , params                                   , callback                ) {
    assert(params.type);
    this.getWorkerSource(mapId, params.type).loadTile(params, callback);
};

Worker.prototype.loadDEMTile = function loadDEMTile (mapId    , params                     , callback                   ) {
    this.getDEMWorkerSource(mapId).loadTile(params, callback);
};

Worker.prototype.reloadTile = function reloadTile (mapId    , params                                   , callback                ) {
    assert(params.type);
    this.getWorkerSource(mapId, params.type).reloadTile(params, callback);
};

Worker.prototype.abortTile = function abortTile (mapId    , params                             , callback                ) {
    assert(params.type);
    this.getWorkerSource(mapId, params.type).abortTile(params, callback);
};

Worker.prototype.removeTile = function removeTile (mapId    , params                             , callback                ) {
    assert(params.type);
    this.getWorkerSource(mapId, params.type).removeTile(params, callback);
};

Worker.prototype.removeDEMTile = function removeDEMTile (mapId    , params            ) {
    this.getDEMWorkerSource(mapId).removeTile(params);
};

Worker.prototype.removeSource = function removeSource (mapId    , params                               , callback                ) {
    assert(params.type);
    var worker = this.getWorkerSource(mapId, params.type);
    if (worker.removeSource !== undefined) {
        worker.removeSource(params, callback);
    } else {
        callback();
    }
};

/**
 * Load a {@link WorkerSource} script at params.url.  The script is run
 * (using importScripts) with `registerWorkerSource` in scope, which is a
 * function taking `(name, workerSourceObject)`.
 *  @private
 */
Worker.prototype.loadWorkerSource = function loadWorkerSource (map    , params             , callback            ) {
    try {
        this.self.importScripts(params.url);
        callback();
    } catch (e) {
        callback(e);
    }
};

Worker.prototype.loadRTLTextPlugin = function loadRTLTextPlugin (map    , pluginURL    , callback            ) {
    try {
        if (!globalRTLTextPlugin.applyArabicShaping && !globalRTLTextPlugin.processBidirectionalText) {
            this.self.importScripts(pluginURL);
            if (!globalRTLTextPlugin.applyArabicShaping || !globalRTLTextPlugin.processBidirectionalText) {
                callback(new Error(("RTL Text Plugin failed to import scripts from " + pluginURL)));
            }
        }
    } catch (e) {
        callback(e);
    }
};

Worker.prototype.getLayerIndex = function getLayerIndex (mapId    ) {
    var layerIndexes = this.layerIndexes[mapId];
    if (!layerIndexes) {
        layerIndexes = this.layerIndexes[mapId] = new StyleLayerIndex();
    }
    return layerIndexes;
};

Worker.prototype.getWorkerSource = function getWorkerSource (mapId    , type    ) {
        var this$1 = this;

    if (!this.workerSources[mapId])
        { this.workerSources[mapId] = {}; }
    if (!this.workerSources[mapId][type]) {
        // use a wrapped actor so that we can attach a target mapId param
        // to any messages invoked by the WorkerSource
        var actor = {
            send: function (type, data, callback) {
                this$1.actor.send(type, data, callback, mapId);
            }
        };

        this.workerSources[mapId][type] = new (this.workerSourceTypes[type] )((actor ), this.getLayerIndex(mapId));
    }

    return this.workerSources[mapId][type];
};

Worker.prototype.getDEMWorkerSource = function getDEMWorkerSource (mapId    ) {
    if (!this.demWorkerSources[mapId]) {
        this.demWorkerSources[mapId] = new RasterDEMTileWorkerSource();
    }

    return this.demWorkerSources[mapId];
};

module.exports = function createWorker(self                            ) {
    return new Worker(self);
};

},{"../style/style_layer_index":215,"../util/actor":255,"./geojson_worker_source":105,"./raster_dem_tile_worker_source":112,"./rtl_text_plugin":114,"./vector_tile_worker_source":121,"assert":13}],124:[function(require,module,exports){
'use strict';//      

var FeatureIndex = require('../data/feature_index');
var ref = require('../symbol/symbol_layout');
var performSymbolLayout = ref.performSymbolLayout;
var ref$1 = require('../data/array_types');
var CollisionBoxArray = ref$1.CollisionBoxArray;
var DictionaryCoder = require('../util/dictionary_coder');
var SymbolBucket = require('../data/bucket/symbol_bucket');
var util = require('../util/util');
var assert = require('assert');
var ref$2 = require('../render/image_atlas');
var makeImageAtlas = ref$2.makeImageAtlas;
var ref$3 = require('../render/glyph_atlas');
var makeGlyphAtlas = ref$3.makeGlyphAtlas;
var EvaluationParameters = require('../style/evaluation_parameters');
var ref$4 = require('./tile_id');
var OverscaledTileID = ref$4.OverscaledTileID;

                                           
                                       
                                                   
                                                              
                                                     
                                                     
             
                         
                       
                                 

var WorkerTile = function WorkerTile(params                  ) {
    this.tileID = new OverscaledTileID(params.tileID.overscaledZ, params.tileID.wrap, params.tileID.canonical.z, params.tileID.canonical.x, params.tileID.canonical.y);
    this.uid = params.uid;
    this.zoom = params.zoom;
    this.pixelRatio = params.pixelRatio;
    this.tileSize = params.tileSize;
    this.source = params.source;
    this.overscaling = params.overscaling;
    this.showCollisionBoxes = params.showCollisionBoxes;
    this.collectResourceTiming = !!params.collectResourceTiming;
};

WorkerTile.prototype.parse = function parse (data        , layerIndex             , actor   , callback                ) {
        var this$1 = this;

    this.status = 'parsing';
    this.data = data;

    this.collisionBoxArray = new CollisionBoxArray();
    var sourceLayerCoder = new DictionaryCoder(Object.keys(data.layers).sort());

    var featureIndex = new FeatureIndex(this.tileID, this.overscaling);
    featureIndex.bucketLayerIDs = [];

    var buckets                 = {};

    var options = {
        featureIndex: featureIndex,
        iconDependencies: {},
        glyphDependencies: {}
    };

    var layerFamilies = layerIndex.familiesBySource[this.source];
    for (var sourceLayerId in layerFamilies) {
        var sourceLayer = data.layers[sourceLayerId];
        if (!sourceLayer) {
            continue;
        }

        if (sourceLayer.version === 1) {
            util.warnOnce("Vector tile source \"" + (this$1.source) + "\" layer \"" + sourceLayerId + "\" " +
                "does not use vector tile spec v2 and therefore may have some rendering errors.");
        }

        var sourceLayerIndex = sourceLayerCoder.encode(sourceLayerId);
        var features = [];
        for (var index = 0; index < sourceLayer.length; index++) {
            var feature = sourceLayer.feature(index);
            features.push({ feature: feature, index: index, sourceLayerIndex: sourceLayerIndex });
        }

        for (var i = 0, list = layerFamilies[sourceLayerId]; i < list.length; i += 1) {
            var family = list[i];

                var layer = family[0];

            assert(layer.source === this$1.source);
            if (layer.minzoom && this$1.zoom < Math.floor(layer.minzoom)) { continue; }
            if (layer.maxzoom && this$1.zoom >= layer.maxzoom) { continue; }
            if (layer.visibility === 'none') { continue; }

            recalculateLayers(family, this$1.zoom);

            var bucket = buckets[layer.id] = layer.createBucket({
                index: featureIndex.bucketLayerIDs.length,
                layers: family,
                zoom: this$1.zoom,
                pixelRatio: this$1.pixelRatio,
                overscaling: this$1.overscaling,
                collisionBoxArray: this$1.collisionBoxArray
            });

            bucket.populate(features, options);
            featureIndex.bucketLayerIDs.push(family.map(function (l) { return l.id; }));
        }
    }

    var error    ;
    var glyphMap                                  ;
    var imageMap                     ;

    var stacks = util.mapObject(options.glyphDependencies, function (glyphs) { return Object.keys(glyphs).map(Number); });
    if (Object.keys(stacks).length) {
        actor.send('getGlyphs', {uid: this.uid, stacks: stacks}, function (err, result) {
            if (!error) {
                error = err;
                glyphMap = result;
                maybePrepare.call(this$1);
            }
        });
    } else {
        glyphMap = {};
    }

    var icons = Object.keys(options.iconDependencies);
    if (icons.length) {
        actor.send('getImages', {icons: icons}, function (err, result) {
            if (!error) {
                error = err;
                imageMap = result;
                maybePrepare.call(this$1);
            }
        });
    } else {
        imageMap = {};
    }

    maybePrepare.call(this);

    function maybePrepare() {
            var this$1 = this;

        if (error) {
            return callback(error);
        } else if (glyphMap && imageMap) {
            var glyphAtlas = makeGlyphAtlas(glyphMap);
            var imageAtlas = makeImageAtlas(imageMap);

            for (var key in buckets) {
                var bucket = buckets[key];
                if (bucket instanceof SymbolBucket) {
                    recalculateLayers(bucket.layers, this$1.zoom);
                    performSymbolLayout(bucket, glyphMap, glyphAtlas.positions, imageMap, imageAtlas.positions, this$1.showCollisionBoxes);
                }
            }

            this.status = 'done';

            callback(null, {
                buckets: util.values(buckets).filter(function (b) { return !b.isEmpty(); }),
                featureIndex: featureIndex,
                collisionBoxArray: this.collisionBoxArray,
                glyphAtlasImage: glyphAtlas.image,
                iconAtlasImage: imageAtlas.image
            });
        }
    }
};

function recalculateLayers(layers                            , zoom        ) {
    // Layers are shared and may have been used by a WorkerTile with a different zoom.
    var parameters = new EvaluationParameters(zoom);
    for (var i = 0, list = layers; i < list.length; i += 1) {
        var layer = list[i];

        layer.recalculate(parameters);
    }
}

module.exports = WorkerTile;

},{"../data/array_types":44,"../data/bucket/symbol_bucket":56,"../data/feature_index":59,"../render/glyph_atlas":90,"../render/image_atlas":92,"../style/evaluation_parameters":187,"../symbol/symbol_layout":232,"../util/dictionary_coder":262,"../util/util":280,"./tile_id":119,"assert":13}],125:[function(require,module,exports){
'use strict';
var refProperties = require('./util/ref_properties');

function deref(layer, parent) {
    var result = {};

    for (var k in layer) {
        if (k !== 'ref') {
            result[k] = layer[k];
        }
    }

    refProperties.forEach(function (k) {
        if (k in parent) {
            result[k] = parent[k];
        }
    });

    return result;
}

module.exports = derefLayers;

/**
 * Given an array of layers, some of which may contain `ref` properties
 * whose value is the `id` of another property, return a new array where
 * such layers have been augmented with the 'type', 'source', etc. properties
 * from the parent layer, and the `ref` property has been removed.
 *
 * The input is not modified. The output may contain references to portions
 * of the input.
 *
 * @private
 * @param {Array<Layer>} layers
 * @returns {Array<Layer>}
 */
function derefLayers(layers) {
    layers = layers.slice();

    var map = Object.create(null);
    for (var i = 0; i < layers.length; i++) {
        map[layers[i].id] = layers[i];
    }

    for (var i$1 = 0; i$1 < layers.length; i$1++) {
        if ('ref' in layers[i$1]) {
            layers[i$1] = deref(layers[i$1], map[layers[i$1].ref]);
        }
    }

    return layers;
}

},{"./util/ref_properties":164}],126:[function(require,module,exports){
'use strict';
var isEqual = require('./util/deep_equal');

var operations = {

    /*
     * { command: 'setStyle', args: [stylesheet] }
     */
    setStyle: 'setStyle',

    /*
     * { command: 'addLayer', args: [layer, 'beforeLayerId'] }
     */
    addLayer: 'addLayer',

    /*
     * { command: 'removeLayer', args: ['layerId'] }
     */
    removeLayer: 'removeLayer',

    /*
     * { command: 'setPaintProperty', args: ['layerId', 'prop', value] }
     */
    setPaintProperty: 'setPaintProperty',

    /*
     * { command: 'setLayoutProperty', args: ['layerId', 'prop', value] }
     */
    setLayoutProperty: 'setLayoutProperty',

    /*
     * { command: 'setFilter', args: ['layerId', filter] }
     */
    setFilter: 'setFilter',

    /*
     * { command: 'addSource', args: ['sourceId', source] }
     */
    addSource: 'addSource',

    /*
     * { command: 'removeSource', args: ['sourceId'] }
     */
    removeSource: 'removeSource',

    /*
     * { command: 'setGeoJSONSourceData', args: ['sourceId', data] }
     */
    setGeoJSONSourceData: 'setGeoJSONSourceData',

    /*
     * { command: 'setLayerZoomRange', args: ['layerId', 0, 22] }
     */
    setLayerZoomRange: 'setLayerZoomRange',

    /*
     * { command: 'setLayerProperty', args: ['layerId', 'prop', value] }
     */
    setLayerProperty: 'setLayerProperty',

    /*
     * { command: 'setCenter', args: [[lon, lat]] }
     */
    setCenter: 'setCenter',

    /*
     * { command: 'setZoom', args: [zoom] }
     */
    setZoom: 'setZoom',

    /*
     * { command: 'setBearing', args: [bearing] }
     */
    setBearing: 'setBearing',

    /*
     * { command: 'setPitch', args: [pitch] }
     */
    setPitch: 'setPitch',

    /*
     * { command: 'setSprite', args: ['spriteUrl'] }
     */
    setSprite: 'setSprite',

    /*
     * { command: 'setGlyphs', args: ['glyphsUrl'] }
     */
    setGlyphs: 'setGlyphs',

    /*
     * { command: 'setTransition', args: [transition] }
     */
    setTransition: 'setTransition',

    /*
     * { command: 'setLighting', args: [lightProperties] }
     */
    setLight: 'setLight'

};

function addSource(sourceId, after, commands) {
    commands.push({ command: operations.addSource, args: [sourceId, after[sourceId]] });
}

function removeSource(sourceId, commands, sourcesRemoved) {
    commands.push({ command: operations.removeSource, args: [sourceId] });
    sourcesRemoved[sourceId] = true;
}

function updateSource(sourceId, after, commands, sourcesRemoved) {
    removeSource(sourceId, commands, sourcesRemoved);
    addSource(sourceId, after, commands);
}

function canUpdateGeoJSON(before, after, sourceId) {
    var prop;
    for (prop in before[sourceId]) {
        if (!before[sourceId].hasOwnProperty(prop)) { continue; }
        if (prop !== 'data' && !isEqual(before[sourceId][prop], after[sourceId][prop])) {
            return false;
        }
    }
    for (prop in after[sourceId]) {
        if (!after[sourceId].hasOwnProperty(prop)) { continue; }
        if (prop !== 'data' && !isEqual(before[sourceId][prop], after[sourceId][prop])) {
            return false;
        }
    }
    return true;
}

function diffSources(before, after, commands, sourcesRemoved) {
    before = before || {};
    after = after || {};

    var sourceId;

    // look for sources to remove
    for (sourceId in before) {
        if (!before.hasOwnProperty(sourceId)) { continue; }
        if (!after.hasOwnProperty(sourceId)) {
            removeSource(sourceId, commands, sourcesRemoved);
        }
    }

    // look for sources to add/update
    for (sourceId in after) {
        if (!after.hasOwnProperty(sourceId)) { continue; }
        if (!before.hasOwnProperty(sourceId)) {
            addSource(sourceId, after, commands);
        } else if (!isEqual(before[sourceId], after[sourceId])) {
            if (before[sourceId].type === 'geojson' && after[sourceId].type === 'geojson' && canUpdateGeoJSON(before, after, sourceId)) {
                commands.push({ command: operations.setGeoJSONSourceData, args: [sourceId, after[sourceId].data] });
            } else {
                // no update command, must remove then add
                updateSource(sourceId, after, commands, sourcesRemoved);
            }
        }
    }
}

function diffLayerPropertyChanges(before, after, commands, layerId, klass, command) {
    before = before || {};
    after = after || {};

    var prop;

    for (prop in before) {
        if (!before.hasOwnProperty(prop)) { continue; }
        if (!isEqual(before[prop], after[prop])) {
            commands.push({ command: command, args: [layerId, prop, after[prop], klass] });
        }
    }
    for (prop in after) {
        if (!after.hasOwnProperty(prop) || before.hasOwnProperty(prop)) { continue; }
        if (!isEqual(before[prop], after[prop])) {
            commands.push({ command: command, args: [layerId, prop, after[prop], klass] });
        }
    }
}

function pluckId(layer) {
    return layer.id;
}
function indexById(group, layer) {
    group[layer.id] = layer;
    return group;
}

function diffLayers(before, after, commands) {
    before = before || [];
    after = after || [];

    // order of layers by id
    var beforeOrder = before.map(pluckId);
    var afterOrder = after.map(pluckId);

    // index of layer by id
    var beforeIndex = before.reduce(indexById, {});
    var afterIndex = after.reduce(indexById, {});

    // track order of layers as if they have been mutated
    var tracker = beforeOrder.slice();

    // layers that have been added do not need to be diffed
    var clean = Object.create(null);

    var i, d, layerId, beforeLayer, afterLayer, insertBeforeLayerId, prop;

    // remove layers
    for (i = 0, d = 0; i < beforeOrder.length; i++) {
        layerId = beforeOrder[i];
        if (!afterIndex.hasOwnProperty(layerId)) {
            commands.push({ command: operations.removeLayer, args: [layerId] });
            tracker.splice(tracker.indexOf(layerId, d), 1);
        } else {
            // limit where in tracker we need to look for a match
            d++;
        }
    }

    // add/reorder layers
    for (i = 0, d = 0; i < afterOrder.length; i++) {
        // work backwards as insert is before an existing layer
        layerId = afterOrder[afterOrder.length - 1 - i];

        if (tracker[tracker.length - 1 - i] === layerId) { continue; }

        if (beforeIndex.hasOwnProperty(layerId)) {
            // remove the layer before we insert at the correct position
            commands.push({ command: operations.removeLayer, args: [layerId] });
            tracker.splice(tracker.lastIndexOf(layerId, tracker.length - d), 1);
        } else {
            // limit where in tracker we need to look for a match
            d++;
        }

        // add layer at correct position
        insertBeforeLayerId = tracker[tracker.length - i];
        commands.push({ command: operations.addLayer, args: [afterIndex[layerId], insertBeforeLayerId] });
        tracker.splice(tracker.length - i, 0, layerId);
        clean[layerId] = true;
    }

    // update layers
    for (i = 0; i < afterOrder.length; i++) {
        layerId = afterOrder[i];
        beforeLayer = beforeIndex[layerId];
        afterLayer = afterIndex[layerId];

        // no need to update if previously added (new or moved)
        if (clean[layerId] || isEqual(beforeLayer, afterLayer)) { continue; }

        // If source, source-layer, or type have changes, then remove the layer
        // and add it back 'from scratch'.
        if (!isEqual(beforeLayer.source, afterLayer.source) || !isEqual(beforeLayer['source-layer'], afterLayer['source-layer']) || !isEqual(beforeLayer.type, afterLayer.type)) {
            commands.push({ command: operations.removeLayer, args: [layerId] });
            // we add the layer back at the same position it was already in, so
            // there's no need to update the `tracker`
            insertBeforeLayerId = tracker[tracker.lastIndexOf(layerId) + 1];
            commands.push({ command: operations.addLayer, args: [afterLayer, insertBeforeLayerId] });
            continue;
        }

        // layout, paint, filter, minzoom, maxzoom
        diffLayerPropertyChanges(beforeLayer.layout, afterLayer.layout, commands, layerId, null, operations.setLayoutProperty);
        diffLayerPropertyChanges(beforeLayer.paint, afterLayer.paint, commands, layerId, null, operations.setPaintProperty);
        if (!isEqual(beforeLayer.filter, afterLayer.filter)) {
            commands.push({ command: operations.setFilter, args: [layerId, afterLayer.filter] });
        }
        if (!isEqual(beforeLayer.minzoom, afterLayer.minzoom) || !isEqual(beforeLayer.maxzoom, afterLayer.maxzoom)) {
            commands.push({ command: operations.setLayerZoomRange, args: [layerId, afterLayer.minzoom, afterLayer.maxzoom] });
        }

        // handle all other layer props, including paint.*
        for (prop in beforeLayer) {
            if (!beforeLayer.hasOwnProperty(prop)) { continue; }
            if (prop === 'layout' || prop === 'paint' || prop === 'filter' ||
                prop === 'metadata' || prop === 'minzoom' || prop === 'maxzoom') { continue; }
            if (prop.indexOf('paint.') === 0) {
                diffLayerPropertyChanges(beforeLayer[prop], afterLayer[prop], commands, layerId, prop.slice(6), operations.setPaintProperty);
            } else if (!isEqual(beforeLayer[prop], afterLayer[prop])) {
                commands.push({ command: operations.setLayerProperty, args: [layerId, prop, afterLayer[prop]] });
            }
        }
        for (prop in afterLayer) {
            if (!afterLayer.hasOwnProperty(prop) || beforeLayer.hasOwnProperty(prop)) { continue; }
            if (prop === 'layout' || prop === 'paint' || prop === 'filter' ||
                prop === 'metadata' || prop === 'minzoom' || prop === 'maxzoom') { continue; }
            if (prop.indexOf('paint.') === 0) {
                diffLayerPropertyChanges(beforeLayer[prop], afterLayer[prop], commands, layerId, prop.slice(6), operations.setPaintProperty);
            } else if (!isEqual(beforeLayer[prop], afterLayer[prop])) {
                commands.push({ command: operations.setLayerProperty, args: [layerId, prop, afterLayer[prop]] });
            }
        }
    }
}

/**
 * Diff two stylesheet
 *
 * Creates semanticly aware diffs that can easily be applied at runtime.
 * Operations produced by the diff closely resemble the mapbox-gl-js API. Any
 * error creating the diff will fall back to the 'setStyle' operation.
 *
 * Example diff:
 * [
 *     { command: 'setConstant', args: ['@water', '#0000FF'] },
 *     { command: 'setPaintProperty', args: ['background', 'background-color', 'black'] }
 * ]
 *
 * @private
 * @param {*} [before] stylesheet to compare from
 * @param {*} after stylesheet to compare to
 * @returns Array list of changes
 */
function diffStyles(before, after) {
    if (!before) { return [{ command: operations.setStyle, args: [after] }]; }

    var commands = [];

    try {
        // Handle changes to top-level properties
        if (!isEqual(before.version, after.version)) {
            return [{ command: operations.setStyle, args: [after] }];
        }
        if (!isEqual(before.center, after.center)) {
            commands.push({ command: operations.setCenter, args: [after.center] });
        }
        if (!isEqual(before.zoom, after.zoom)) {
            commands.push({ command: operations.setZoom, args: [after.zoom] });
        }
        if (!isEqual(before.bearing, after.bearing)) {
            commands.push({ command: operations.setBearing, args: [after.bearing] });
        }
        if (!isEqual(before.pitch, after.pitch)) {
            commands.push({ command: operations.setPitch, args: [after.pitch] });
        }
        if (!isEqual(before.sprite, after.sprite)) {
            commands.push({ command: operations.setSprite, args: [after.sprite] });
        }
        if (!isEqual(before.glyphs, after.glyphs)) {
            commands.push({ command: operations.setGlyphs, args: [after.glyphs] });
        }
        if (!isEqual(before.transition, after.transition)) {
            commands.push({ command: operations.setTransition, args: [after.transition] });
        }
        if (!isEqual(before.light, after.light)) {
            commands.push({ command: operations.setLight, args: [after.light] });
        }

        // Handle changes to `sources`
        // If a source is to be removed, we also--before the removeSource
        // command--need to remove all the style layers that depend on it.
        var sourcesRemoved = {};

        // First collect the {add,remove}Source commands
        var removeOrAddSourceCommands = [];
        diffSources(before.sources, after.sources, removeOrAddSourceCommands, sourcesRemoved);

        // Push a removeLayer command for each style layer that depends on a
        // source that's being removed.
        // Also, exclude any such layers them from the input to `diffLayers`
        // below, so that diffLayers produces the appropriate `addLayers`
        // command
        var beforeLayers = [];
        if (before.layers) {
            before.layers.forEach(function (layer) {
                if (sourcesRemoved[layer.source]) {
                    commands.push({ command: operations.removeLayer, args: [layer.id] });
                } else {
                    beforeLayers.push(layer);
                }
            });
        }
        commands = commands.concat(removeOrAddSourceCommands);

        // Handle changes to `layers`
        diffLayers(beforeLayers, after.layers, commands);

    } catch (e) {
        // fall back to setStyle
        console.warn('Unable to compute style diff:', e);
        commands = [{ command: operations.setStyle, args: [after] }];
    }

    return commands;
}

module.exports = diffStyles;
module.exports.operations = operations;

},{"./util/deep_equal":160}],127:[function(require,module,exports){
'use strict';
function ValidationError(key, value, message) {
    this.message = (key ? (key + ": ") : '') + message;

    if (value !== null && value !== undefined && value.__line__) {
        this.line = value.__line__;
    }
}

module.exports = ValidationError;

},{}],128:[function(require,module,exports){
'use strict';//      

var ref = require('./types');
var toString = ref.toString;
var ParsingContext = require('./parsing_context');
var EvaluationContext = require('./evaluation_context');
var assert = require('assert');

                                                                   
                                    
                                      

                                
                                       
                                                                
                                               
                                                            

var CompoundExpression = function CompoundExpression(name    , type  , evaluate      , args               ) {
    this.name = name;
    this.type = type;
    this._evaluate = evaluate;
    this.args = args;
};

CompoundExpression.prototype.evaluate = function evaluate (ctx               ) {
    return this._evaluate(ctx, this.args);
};

CompoundExpression.prototype.eachChild = function eachChild (fn                  ) {
    this.args.forEach(fn);
};

CompoundExpression.prototype.possibleOutputs = function possibleOutputs () {
    return [undefined];
};

CompoundExpression.parse = function parse (args          , context            )          {
    var op     = (args[0] );
    var definition = CompoundExpression.definitions[op];
    if (!definition) {
        return context.error(("Unknown expression \"" + op + "\". If you wanted a literal array, use [\"literal\", [...]]."), 0);
    }

    // Now check argument types against each signature
    var type = Array.isArray(definition) ?
        definition[0] : definition.type;

    var availableOverloads = Array.isArray(definition) ?
        [[definition[1], definition[2]]] :
        definition.overloads;

    var overloads = availableOverloads.filter(function (ref) {
            var signature = ref[0];

            return (
        !Array.isArray(signature) || // varags
        signature.length === args.length - 1 // correct param count
    );
        });

    // First parse all the args
    var parsedArgs                = [];
    for (var i = 1; i < args.length; i++) {
        var arg = args[i];
        var expected = (void 0);
        if (overloads.length === 1) {
            var params = overloads[0][0];
            expected = Array.isArray(params) ?
                params[i - 1] :
                params.type;
        }
        var parsed = context.parse(arg, 1 + parsedArgs.length, expected);
        if (!parsed) { return null; }
        parsedArgs.push(parsed);
    }

    var signatureContext             = (null );

    for (var i$2 = 0, list = overloads; i$2 < list.length; i$2 += 1) {
        // Use a fresh context for each attempted signature so that, if
        // we eventually succeed, we haven't polluted `context.errors`.
        var ref = list[i$2];
            var params$1 = ref[0];
            var evaluate = ref[1];

            signatureContext = new ParsingContext(context.registry, context.path, null, context.scope);

        if (Array.isArray(params$1)) {
            if (params$1.length !== parsedArgs.length) {
                signatureContext.error(("Expected " + (params$1.length) + " arguments, but found " + (parsedArgs.length) + " instead."));
                continue;
            }
        }

        for (var i$1 = 0; i$1 < parsedArgs.length; i$1++) {
            var expected$1 = Array.isArray(params$1) ? params$1[i$1] : params$1.type;
            var arg$1 = parsedArgs[i$1];
            signatureContext.concat(i$1 + 1).checkSubtype(expected$1, arg$1.type);
        }

        if (signatureContext.errors.length === 0) {
            return new CompoundExpression(op, type, evaluate, parsedArgs);
        }
    }

    assert(!signatureContext || signatureContext.errors.length > 0);

    if (overloads.length === 1) {
        context.errors.push.apply(context.errors, signatureContext.errors);
    } else {
        var expected$2 = overloads.length ? overloads : availableOverloads;
        var signatures = expected$2
            .map(function (ref) {
                    var params = ref[0];

                    return stringifySignature(params);
            })
            .join(' | ');
        var actualTypes = parsedArgs
            .map(function (arg) { return toString(arg.type); })
            .join(', ');
        context.error(("Expected arguments of type " + signatures + ", but found (" + actualTypes + ") instead."));
    }

    return null;
};

CompoundExpression.register = function register (
    registry                ,
    definitions                          
) {
    assert(!CompoundExpression.definitions);
    CompoundExpression.definitions = definitions;
    for (var name in definitions) {
        registry[name] = CompoundExpression;
    }
};

function varargs(type      )          {
    return { type: type };
}

function stringifySignature(signature           )         {
    if (Array.isArray(signature)) {
        return ("(" + (signature.map(toString).join(', ')) + ")");
    } else {
        return ("(" + (toString(signature.type)) + "...)");
    }
}

module.exports = {
    CompoundExpression: CompoundExpression,
    varargs: varargs
};

},{"./evaluation_context":143,"./parsing_context":146,"./types":151,"assert":13}],129:[function(require,module,exports){
'use strict';//      

var ref = require('../types');
var toString = ref.toString;
var array = ref.array;
var ValueType = ref.ValueType;
var StringType = ref.StringType;
var NumberType = ref.NumberType;
var BooleanType = ref.BooleanType;
var checkSubtype = ref.checkSubtype;

var ref$1 = require('../values');
var typeOf = ref$1.typeOf;
var RuntimeError = require('../runtime_error');

                                                
                                                     
                                                           
                                          

var types = {
    string: StringType,
    number: NumberType,
    boolean: BooleanType
};

var ArrayAssertion = function ArrayAssertion(type       , input        ) {
    this.type = type;
    this.input = input;
};

ArrayAssertion.parse = function parse (args          , context            )          {
    if (args.length < 2 || args.length > 4)
        { return context.error(("Expected 1, 2, or 3 arguments, but found " + (args.length - 1) + " instead.")); }

    var itemType;
    var N;
    if (args.length > 2) {
        var type$1 = args[1];
        if (typeof type$1 !== 'string' || !(type$1 in types))
            { return context.error('The item type argument of "array" must be one of string, number, boolean', 1); }
        itemType = types[type$1];
    } else {
        itemType = ValueType;
    }

    if (args.length > 3) {
        if (
            typeof args[2] !== 'number' ||
            args[2] < 0 ||
            args[2] !== Math.floor(args[2])
        ) {
            return context.error('The length argument to "array" must be a positive integer literal', 2);
        }
        N = args[2];
    }

    var type = array(itemType, N);

    var input = context.parse(args[args.length - 1], args.length - 1, ValueType);
    if (!input) { return null; }

    return new ArrayAssertion(type, input);
};

ArrayAssertion.prototype.evaluate = function evaluate (ctx               ) {
    var value = this.input.evaluate(ctx);
    var error = checkSubtype(this.type, typeOf(value));
    if (error) {
        throw new RuntimeError(("Expected value to be of type " + (toString(this.type)) + ", but found " + (toString(typeOf(value))) + " instead."));
    }
    return value;
};

ArrayAssertion.prototype.eachChild = function eachChild (fn                  ) {
    fn(this.input);
};

ArrayAssertion.prototype.possibleOutputs = function possibleOutputs () {
    return this.input.possibleOutputs();
};

module.exports = ArrayAssertion;

},{"../runtime_error":148,"../types":151,"../values":152}],130:[function(require,module,exports){
'use strict';//      

var assert = require('assert');
var ref = require('../types');
var ObjectType = ref.ObjectType;
var ValueType = ref.ValueType;
var StringType = ref.StringType;
var NumberType = ref.NumberType;
var BooleanType = ref.BooleanType;

var RuntimeError = require('../runtime_error');
var ref$1 = require('../types');
var checkSubtype = ref$1.checkSubtype;
var toString = ref$1.toString;
var ref$2 = require('../values');
var typeOf = ref$2.typeOf;

                                                
                                                     
                                                           
                                     

var types = {
    string: StringType,
    number: NumberType,
    boolean: BooleanType,
    object: ObjectType
};

var Assertion = function Assertion(type  , args               ) {
    this.type = type;
    this.args = args;
};

Assertion.parse = function parse (args          , context            )          {
    if (args.length < 2)
        { return context.error("Expected at least one argument."); }

    var name     = (args[0] );
    assert(types[name], name);

    var type = types[name];

    var parsed = [];
    for (var i = 1; i < args.length; i++) {
        var input = context.parse(args[i], i, ValueType);
        if (!input) { return null; }
        parsed.push(input);
    }

    return new Assertion(type, parsed);
};

Assertion.prototype.evaluate = function evaluate (ctx               ) {
        var this$1 = this;

    for (var i = 0; i < this.args.length; i++) {
        var value = this$1.args[i].evaluate(ctx);
        var error = checkSubtype(this$1.type, typeOf(value));
        if (!error) {
            return value;
        } else if (i === this$1.args.length - 1) {
            throw new RuntimeError(("Expected value to be of type " + (toString(this$1.type)) + ", but found " + (toString(typeOf(value))) + " instead."));
        }
    }

    assert(false);
    return null;
};

Assertion.prototype.eachChild = function eachChild (fn                  ) {
    this.args.forEach(fn);
};

Assertion.prototype.possibleOutputs = function possibleOutputs () {
    return (ref = []).concat.apply(ref, this.args.map(function (arg) { return arg.possibleOutputs(); }));
        var ref;
};

module.exports = Assertion;

},{"../runtime_error":148,"../types":151,"../values":152,"assert":13}],131:[function(require,module,exports){
'use strict';//      

var ref = require('../types');
var array = ref.array;
var ValueType = ref.ValueType;
var NumberType = ref.NumberType;

var RuntimeError = require('../runtime_error');

                                                
                                                     
                                                           
                                                
                                       

var At = function At(type  , index        , input        ) {
    this.type = type;
    this.index = index;
    this.input = input;
};

At.parse = function parse (args          , context            ) {
    if (args.length !== 3)
        { return context.error(("Expected 2 arguments, but found " + (args.length - 1) + " instead.")); }

    var index = context.parse(args[1], 1, NumberType);
    var input = context.parse(args[2], 2, array(context.expectedType || ValueType));

    if (!index || !input) { return null; }

    var t        = (input.type );
    return new At(t.itemType, index, input);
};

At.prototype.evaluate = function evaluate (ctx               ) {
    var index = ((this.index.evaluate(ctx) )    );
    var array = ((this.input.evaluate(ctx) )          );

    if (index < 0 || index >= array.length) {
        throw new RuntimeError(("Array index out of bounds: " + index + " > " + (array.length) + "."));
    }

    if (index !== Math.floor(index)) {
        throw new RuntimeError(("Array index must be an integer, but found " + index + " instead."));
    }

    return array[index];
};

At.prototype.eachChild = function eachChild (fn                  ) {
    fn(this.index);
    fn(this.input);
};

At.prototype.possibleOutputs = function possibleOutputs () {
    return [undefined];
};

module.exports = At;

},{"../runtime_error":148,"../types":151}],132:[function(require,module,exports){
'use strict';//      

var assert = require('assert');
var ref = require('../types');
var BooleanType = ref.BooleanType;

                                                
                                                     
                                                           
                                     

                                                

var Case = function Case(type  , branches      , otherwise        ) {
    this.type = type;
    this.branches = branches;
    this.otherwise = otherwise;
};

Case.parse = function parse (args          , context            ) {
    if (args.length < 4)
        { return context.error(("Expected at least 3 arguments, but found only " + (args.length - 1) + ".")); }
    if (args.length % 2 !== 0)
        { return context.error("Expected an odd number of arguments."); }

    var outputType   ;
    if (context.expectedType && context.expectedType.kind !== 'value') {
        outputType = context.expectedType;
    }

    var branches = [];
    for (var i = 1; i < args.length - 1; i += 2) {
        var test = context.parse(args[i], i, BooleanType);
        if (!test) { return null; }

        var result = context.parse(args[i + 1], i + 1, outputType);
        if (!result) { return null; }

        branches.push([test, result]);

        outputType = outputType || result.type;
    }

    var otherwise = context.parse(args[args.length - 1], args.length - 1, outputType);
    if (!otherwise) { return null; }

    assert(outputType);
    return new Case((outputType ), branches, otherwise);
};

Case.prototype.evaluate = function evaluate (ctx               ) {
        var this$1 = this;

    for (var i = 0, list = this$1.branches; i < list.length; i += 1) {
        var ref = list[i];
            var test = ref[0];
            var expression = ref[1];

            if (test.evaluate(ctx)) {
            return expression.evaluate(ctx);
        }
    }
    return this.otherwise.evaluate(ctx);
};

Case.prototype.eachChild = function eachChild (fn                  ) {
        var this$1 = this;

    for (var i = 0, list = this$1.branches; i < list.length; i += 1) {
        var ref = list[i];
            var test = ref[0];
            var expression = ref[1];

            fn(test);
        fn(expression);
    }
    fn(this.otherwise);
};

Case.prototype.possibleOutputs = function possibleOutputs () {
    return (ref = [])
        .concat.apply(ref, this.branches.map(function (ref) {
                var _ = ref[0];
                var out = ref[1];

                return out.possibleOutputs();
        }))
        .concat(this.otherwise.possibleOutputs());
        var ref;
};

module.exports = Case;

},{"../types":151,"assert":13}],133:[function(require,module,exports){
'use strict';//      

var assert = require('assert');
var ref = require('../types');
var checkSubtype = ref.checkSubtype;
var ValueType = ref.ValueType;

                                                
                                                     
                                                           
                                     

var Coalesce = function Coalesce(type  , args               ) {
    this.type = type;
    this.args = args;
};

Coalesce.parse = function parse (args          , context            ) {
    if (args.length < 2) {
        return context.error("Expectected at least one argument.");
    }
    var outputType   = (null );
    var expectedType = context.expectedType;
    if (expectedType && expectedType.kind !== 'value') {
        outputType = expectedType;
    }
    var parsedArgs = [];

    for (var i = 0, list = args.slice(1); i < list.length; i += 1) {
        var arg = list[i];

            var parsed = context.parse(arg, 1 + parsedArgs.length, outputType, undefined, {omitTypeAnnotations: true});
        if (!parsed) { return null; }
        outputType = outputType || parsed.type;
        parsedArgs.push(parsed);
    }
    assert(outputType);

    // Above, we parse arguments without inferred type annotation so that
    // they don't produce a runtime error for `null` input, which would
    // preempt the desired null-coalescing behavior.
    // Thus, if any of our arguments would have needed an annotation, we
    // need to wrap the enclosing coalesce expression with it instead.
    var needsAnnotation = expectedType &&
        parsedArgs.some(function (arg) { return checkSubtype(expectedType, arg.type); });

    return needsAnnotation ?
        new Coalesce(ValueType, parsedArgs) :
        new Coalesce((outputType ), parsedArgs);
};

Coalesce.prototype.evaluate = function evaluate (ctx               ) {
        var this$1 = this;

    var result = null;
    for (var i = 0, list = this$1.args; i < list.length; i += 1) {
        var arg = list[i];

            result = arg.evaluate(ctx);
        if (result !== null) { break; }
    }
    return result;
};

Coalesce.prototype.eachChild = function eachChild (fn                  ) {
    this.args.forEach(fn);
};

Coalesce.prototype.possibleOutputs = function possibleOutputs () {
    return (ref = []).concat.apply(ref, this.args.map(function (arg) { return arg.possibleOutputs(); }));
        var ref;
};

module.exports = Coalesce;

},{"../types":151,"assert":13}],134:[function(require,module,exports){
'use strict';//      

var assert = require('assert');
var ref = require('../types');
var ColorType = ref.ColorType;
var ValueType = ref.ValueType;
var NumberType = ref.NumberType;

var ref$1 = require('../values');
var Color = ref$1.Color;
var validateRGBA = ref$1.validateRGBA;
var RuntimeError = require('../runtime_error');

                                                
                                                     
                                                           
                                     

var types = {
    'to-number': NumberType,
    'to-color': ColorType
};

/**
 * Special form for error-coalescing coercion expressions "to-number",
 * "to-color".  Since these coercions can fail at runtime, they accept multiple
 * arguments, only evaluating one at a time until one succeeds.
 *
 * @private
 */
var Coercion = function Coercion(type  , args               ) {
    this.type = type;
    this.args = args;
};

Coercion.parse = function parse (args          , context            )          {
    if (args.length < 2)
        { return context.error("Expected at least one argument."); }

    var name     = (args[0] );
    assert(types[name], name);

    var type = types[name];

    var parsed = [];
    for (var i = 1; i < args.length; i++) {
        var input = context.parse(args[i], i, ValueType);
        if (!input) { return null; }
        parsed.push(input);
    }

    return new Coercion(type, parsed);
};

Coercion.prototype.evaluate = function evaluate (ctx               ) {
        var this$1 = this;

    if (this.type.kind === 'color') {
        var input;
        var error;
        for (var i = 0, list = this$1.args; i < list.length; i += 1) {
            var arg = list[i];

                input = arg.evaluate(ctx);
            error = null;
            if (typeof input === 'string') {
                var c = ctx.parseColor(input);
                if (c) { return c; }
            } else if (Array.isArray(input)) {
                if (input.length < 3 || input.length > 4) {
                    error = "Invalid rbga value " + (JSON.stringify(input)) + ": expected an array containing either three or four numeric values.";
                } else {
                    error = validateRGBA(input[0], input[1], input[2], input[3]);
                }
                if (!error) {
                    return new Color((input[0] ) / 255, (input[1] ) / 255, (input[2] ) / 255, (input[3] ));
                }
            }
        }
        throw new RuntimeError(error || ("Could not parse color from value '" + (typeof input === 'string' ? input : JSON.stringify(input)) + "'"));
    } else {
        var value = null;
        for (var i$1 = 0, list$1 = this$1.args; i$1 < list$1.length; i$1 += 1) {
            var arg$1 = list$1[i$1];

                value = arg$1.evaluate(ctx);
            if (value === null) { continue; }
            var num = Number(value);
            if (isNaN(num)) { continue; }
            return num;
        }
        throw new RuntimeError(("Could not convert " + (JSON.stringify(value)) + " to number."));
    }
};

Coercion.prototype.eachChild = function eachChild (fn                  ) {
    this.args.forEach(fn);
};

Coercion.prototype.possibleOutputs = function possibleOutputs () {
    return (ref = []).concat.apply(ref, this.args.map(function (arg) { return arg.possibleOutputs(); }));
        var ref;
};

module.exports = Coercion;

},{"../runtime_error":148,"../types":151,"../values":152,"assert":13}],135:[function(require,module,exports){
'use strict';//      

var ref = require('../types');
var ValueType = ref.ValueType;
var BooleanType = ref.BooleanType;
var ref$1 = require('../types');
var toString = ref$1.toString;

                                                
                                                           
                                                     
                                     

function isComparableType(type      ) {
    return type.kind === 'string' ||
        type.kind === 'number' ||
        type.kind === 'boolean' ||
        type.kind === 'null';
}

/**
 * Special form for ==, !=, implementing the following signatures:
 * - (T1: Comparable, T2: Comparable) => boolean { T1 == T2 }
 * - (Comparable, value) => boolean
 * - (value, Comparable) => boolean
 *
 * Where Comparable = string | number | boolean | null.
 *
 * Evaluation semantics for the value cases are equivalent to Javascript's
 * strict equality (===/!==) -- i.e., when the value argument's type doesn't
 * match that of the Comparable argument, == evaluates to false, != to true.
 *
 * @private
 */
function makeComparison(compare) {
    return (function () {
        function Comparison(lhs            , rhs            ) {
            this.type = BooleanType;
            this.lhs = lhs;
            this.rhs = rhs;
        }

        Comparison.parse = function parse (args              , context                )              {
            if (args.length !== 3)
                { return context.error("Expected two arguments."); }

            var lhs = context.parse(args[1], 1, ValueType);
            if (!lhs) { return null; }
            var rhs = context.parse(args[2], 2, ValueType);
            if (!rhs) { return null; }

            if (!isComparableType(lhs.type) && !isComparableType(rhs.type)) {
                return context.error(("Expected at least one argument to be a string, number, boolean, or null, but found (" + (toString(lhs.type)) + ", " + (toString(rhs.type)) + ") instead."));
            }

            if (lhs.type.kind !== rhs.type.kind && lhs.type.kind !== 'value' && rhs.type.kind !== 'value') {
                return context.error(("Cannot compare " + (toString(lhs.type)) + " and " + (toString(rhs.type)) + "."));
            }

            return new Comparison(lhs, rhs);
        };

        Comparison.prototype.evaluate = function evaluate (ctx                   ) {
            return compare(this.lhs.evaluate(ctx), this.rhs.evaluate(ctx));
        };

        Comparison.prototype.eachChild = function eachChild (fn                      ) {
            fn(this.lhs);
            fn(this.rhs);
        };

        Comparison.prototype.possibleOutputs = function possibleOutputs () {
            return [true, false];
        };

        return Comparison;
    }());
}

module.exports = {
    Equals: makeComparison(function (lhs, rhs) { return lhs === rhs; }),
    NotEquals: makeComparison(function (lhs, rhs) { return lhs !== rhs; })
};

},{"../types":151}],136:[function(require,module,exports){
'use strict';//      

var ref = require('../types');
var NumberType = ref.NumberType;
var StringType = ref.StringType;
var BooleanType = ref.BooleanType;
var ColorType = ref.ColorType;
var ObjectType = ref.ObjectType;
var ValueType = ref.ValueType;
var ErrorType = ref.ErrorType;
var array = ref.array;
var toString = ref.toString;

var ref$1 = require('../values');
var typeOf = ref$1.typeOf;
var Color = ref$1.Color;
var validateRGBA = ref$1.validateRGBA;
var ref$2 = require('../compound_expression');
var CompoundExpression = ref$2.CompoundExpression;
var varargs = ref$2.varargs;
var RuntimeError = require('../runtime_error');
var Let = require('./let');
var Var = require('./var');
var Literal = require('./literal');
var Assertion = require('./assertion');
var ArrayAssertion = require('./array');
var Coercion = require('./coercion');
var At = require('./at');
var Match = require('./match');
var Case = require('./case');
var Step = require('./step');
var Interpolate = require('./interpolate');
var Coalesce = require('./coalesce');
var ref$3 = require('./equals');
var Equals = ref$3.Equals;
var NotEquals = ref$3.NotEquals;

                                                        

var expressions                     = {
    // special forms
    '==': Equals,
    '!=': NotEquals,
    'array': ArrayAssertion,
    'at': At,
    'boolean': Assertion,
    'case': Case,
    'coalesce': Coalesce,
    'interpolate': Interpolate,
    'let': Let,
    'literal': Literal,
    'match': Match,
    'number': Assertion,
    'object': Assertion,
    'step': Step,
    'string': Assertion,
    'to-color': Coercion,
    'to-number': Coercion,
    'var': Var
};

function rgba(ctx, ref) {
    var r = ref[0];
    var g = ref[1];
    var b = ref[2];
    var a = ref[3];

    r = r.evaluate(ctx);
    g = g.evaluate(ctx);
    b = b.evaluate(ctx);
    var alpha = a ? a.evaluate(ctx) : 1;
    var error = validateRGBA(r, g, b, alpha);
    if (error) { throw new RuntimeError(error); }
    return new Color(r / 255 * alpha, g / 255 * alpha, b / 255 * alpha, alpha);
}

function has(key, obj) {
    return key in obj;
}

function get(key, obj) {
    var v = obj[key];
    return typeof v === 'undefined' ? null : v;
}

function length(ctx, ref) {
    var v = ref[0];

    return v.evaluate(ctx).length;
}

function lt(ctx, ref) {
var a = ref[0];
var b = ref[1];
 return a.evaluate(ctx) < b.evaluate(ctx); }
function gt(ctx, ref) {
var a = ref[0];
var b = ref[1];
 return a.evaluate(ctx) > b.evaluate(ctx); }
function lteq(ctx, ref) {
var a = ref[0];
var b = ref[1];
 return a.evaluate(ctx) <= b.evaluate(ctx); }
function gteq(ctx, ref) {
var a = ref[0];
var b = ref[1];
 return a.evaluate(ctx) >= b.evaluate(ctx); }

function binarySearch(v, a, i, j) {
    while (i <= j) {
        var m = (i + j) >> 1;
        if (a[m] === v)
            { return true; }
        if (a[m] > v)
            { j = m - 1; }
        else
            { i = m + 1; }
    }
    return false;
}


CompoundExpression.register(expressions, {
    'error': [
        ErrorType,
        [StringType],
        function (ctx, ref) {
        var v = ref[0];
 throw new RuntimeError(v.evaluate(ctx)); }
    ],
    'typeof': [
        StringType,
        [ValueType],
        function (ctx, ref) {
            var v = ref[0];

            return toString(typeOf(v.evaluate(ctx)));
}
    ],
    'to-string': [
        StringType,
        [ValueType],
        function (ctx, ref) {
            var v = ref[0];

            v = v.evaluate(ctx);
            var type = typeof v;
            if (v === null || type === 'string' || type === 'number' || type === 'boolean') {
                return String(v);
            } else if (v instanceof Color) {
                return v.toString();
            } else {
                return JSON.stringify(v);
            }
        }
    ],
    'to-boolean': [
        BooleanType,
        [ValueType],
        function (ctx, ref) {
            var v = ref[0];

            return Boolean(v.evaluate(ctx));
}
    ],
    'to-rgba': [
        array(NumberType, 4),
        [ColorType],
        function (ctx, ref) {
            var v = ref[0];

            var ref$1 = v.evaluate(ctx);
            var r = ref$1.r;
            var g = ref$1.g;
            var b = ref$1.b;
            var a = ref$1.a;
            return [255 * r / a, 255 * g / a, 255 * b / a, a];
        }
    ],
    'rgb': [
        ColorType,
        [NumberType, NumberType, NumberType],
        rgba
    ],
    'rgba': [
        ColorType,
        [NumberType, NumberType, NumberType, NumberType],
        rgba
    ],
    'length': {
        type: NumberType,
        overloads: [
            [
                [StringType],
                length
            ], [
                [array(ValueType)],
                length
            ]
        ]
    },
    'has': {
        type: BooleanType,
        overloads: [
            [
                [StringType],
                function (ctx, ref) {
                    var key = ref[0];

                    return has(key.evaluate(ctx), ctx.properties());
}
            ], [
                [StringType, ObjectType],
                function (ctx, ref) {
                    var key = ref[0];
                    var obj = ref[1];

                    return has(key.evaluate(ctx), obj.evaluate(ctx));
}
            ]
        ]
    },
    'get': {
        type: ValueType,
        overloads: [
            [
                [StringType],
                function (ctx, ref) {
                    var key = ref[0];

                    return get(key.evaluate(ctx), ctx.properties());
}
            ], [
                [StringType, ObjectType],
                function (ctx, ref) {
                    var key = ref[0];
                    var obj = ref[1];

                    return get(key.evaluate(ctx), obj.evaluate(ctx));
}
            ]
        ]
    },
    'properties': [
        ObjectType,
        [],
        function (ctx) { return ctx.properties(); }
    ],
    'geometry-type': [
        StringType,
        [],
        function (ctx) { return ctx.geometryType(); }
    ],
    'id': [
        ValueType,
        [],
        function (ctx) { return ctx.id(); }
    ],
    'zoom': [
        NumberType,
        [],
        function (ctx) { return ctx.globals.zoom; }
    ],
    'heatmap-density': [
        NumberType,
        [],
        function (ctx) { return ctx.globals.heatmapDensity || 0; }
    ],
    '+': [
        NumberType,
        varargs(NumberType),
        function (ctx, args) {
            var result = 0;
            for (var i = 0, list = args; i < list.length; i += 1) {
                var arg = list[i];

                result += arg.evaluate(ctx);
            }
            return result;
        }
    ],
    '*': [
        NumberType,
        varargs(NumberType),
        function (ctx, args) {
            var result = 1;
            for (var i = 0, list = args; i < list.length; i += 1) {
                var arg = list[i];

                result *= arg.evaluate(ctx);
            }
            return result;
        }
    ],
    '-': {
        type: NumberType,
        overloads: [
            [
                [NumberType, NumberType],
                function (ctx, ref) {
                    var a = ref[0];
                    var b = ref[1];

                    return a.evaluate(ctx) - b.evaluate(ctx);
}
            ], [
                [NumberType],
                function (ctx, ref) {
                    var a = ref[0];

                    return -a.evaluate(ctx);
}
            ]
        ]
    },
    '/': [
        NumberType,
        [NumberType, NumberType],
        function (ctx, ref) {
            var a = ref[0];
            var b = ref[1];

            return a.evaluate(ctx) / b.evaluate(ctx);
}
    ],
    '%': [
        NumberType,
        [NumberType, NumberType],
        function (ctx, ref) {
            var a = ref[0];
            var b = ref[1];

            return a.evaluate(ctx) % b.evaluate(ctx);
}
    ],
    'ln2': [
        NumberType,
        [],
        function () { return Math.LN2; }
    ],
    'pi': [
        NumberType,
        [],
        function () { return Math.PI; }
    ],
    'e': [
        NumberType,
        [],
        function () { return Math.E; }
    ],
    '^': [
        NumberType,
        [NumberType, NumberType],
        function (ctx, ref) {
            var b = ref[0];
            var e = ref[1];

            return Math.pow(b.evaluate(ctx), e.evaluate(ctx));
}
    ],
    'sqrt': [
        NumberType,
        [NumberType],
        function (ctx, ref) {
            var x = ref[0];

            return Math.sqrt(x.evaluate(ctx));
}
    ],
    'log10': [
        NumberType,
        [NumberType],
        function (ctx, ref) {
            var n = ref[0];

            return Math.log10(n.evaluate(ctx));
}
    ],
    'ln': [
        NumberType,
        [NumberType],
        function (ctx, ref) {
            var n = ref[0];

            return Math.log(n.evaluate(ctx));
}
    ],
    'log2': [
        NumberType,
        [NumberType],
        function (ctx, ref) {
            var n = ref[0];

            return Math.log2(n.evaluate(ctx));
}
    ],
    'sin': [
        NumberType,
        [NumberType],
        function (ctx, ref) {
            var n = ref[0];

            return Math.sin(n.evaluate(ctx));
}
    ],
    'cos': [
        NumberType,
        [NumberType],
        function (ctx, ref) {
            var n = ref[0];

            return Math.cos(n.evaluate(ctx));
}
    ],
    'tan': [
        NumberType,
        [NumberType],
        function (ctx, ref) {
            var n = ref[0];

            return Math.tan(n.evaluate(ctx));
}
    ],
    'asin': [
        NumberType,
        [NumberType],
        function (ctx, ref) {
            var n = ref[0];

            return Math.asin(n.evaluate(ctx));
}
    ],
    'acos': [
        NumberType,
        [NumberType],
        function (ctx, ref) {
            var n = ref[0];

            return Math.acos(n.evaluate(ctx));
}
    ],
    'atan': [
        NumberType,
        [NumberType],
        function (ctx, ref) {
            var n = ref[0];

            return Math.atan(n.evaluate(ctx));
}
    ],
    'min': [
        NumberType,
        varargs(NumberType),
        function (ctx, args) { return Math.min.apply(Math, args.map(function (arg) { return arg.evaluate(ctx); })); }
    ],
    'max': [
        NumberType,
        varargs(NumberType),
        function (ctx, args) { return Math.max.apply(Math, args.map(function (arg) { return arg.evaluate(ctx); })); }
    ],
    'filter-==': [
        BooleanType,
        [StringType, ValueType],
        function (ctx, ref) {
            var k = ref[0];
            var v = ref[1];

            return ctx.properties()[(k     ).value] === (v     ).value;
}
    ],
    'filter-id-==': [
        BooleanType,
        [ValueType],
        function (ctx, ref) {
            var v = ref[0];

            return ctx.id() === (v     ).value;
}
    ],
    'filter-type-==': [
        BooleanType,
        [StringType],
        function (ctx, ref) {
            var v = ref[0];

            return ctx.geometryType() === (v     ).value;
}
    ],
    'filter-<': [
        BooleanType,
        [StringType, ValueType],
        function (ctx, ref) {
            var k = ref[0];
            var v = ref[1];

            var a = ctx.properties()[(k     ).value];
            var b = (v     ).value;
            return typeof a === typeof b && a < b;
        }
    ],
    'filter-id-<': [
        BooleanType,
        [ValueType],
        function (ctx, ref) {
            var v = ref[0];

            var a = ctx.id();
            var b = (v     ).value;
            return typeof a === typeof b && a < b;
        }
    ],
    'filter->': [
        BooleanType,
        [StringType, ValueType],
        function (ctx, ref) {
            var k = ref[0];
            var v = ref[1];

            var a = ctx.properties()[(k     ).value];
            var b = (v     ).value;
            return typeof a === typeof b && a > b;
        }
    ],
    'filter-id->': [
        BooleanType,
        [ValueType],
        function (ctx, ref) {
            var v = ref[0];

            var a = ctx.id();
            var b = (v     ).value;
            return typeof a === typeof b && a > b;
        }
    ],
    'filter-<=': [
        BooleanType,
        [StringType, ValueType],
        function (ctx, ref) {
            var k = ref[0];
            var v = ref[1];

            var a = ctx.properties()[(k     ).value];
            var b = (v     ).value;
            return typeof a === typeof b && a <= b;
        }
    ],
    'filter-id-<=': [
        BooleanType,
        [ValueType],
        function (ctx, ref) {
            var v = ref[0];

            var a = ctx.id();
            var b = (v     ).value;
            return typeof a === typeof b && a <= b;
        }
    ],
    'filter->=': [
        BooleanType,
        [StringType, ValueType],
        function (ctx, ref) {
            var k = ref[0];
            var v = ref[1];

            var a = ctx.properties()[(k     ).value];
            var b = (v     ).value;
            return typeof a === typeof b && a >= b;
        }
    ],
    'filter-id->=': [
        BooleanType,
        [ValueType],
        function (ctx, ref) {
            var v = ref[0];

            var a = ctx.id();
            var b = (v     ).value;
            return typeof a === typeof b && a >= b;
        }
    ],
    'filter-has': [
        BooleanType,
        [ValueType],
        function (ctx, ref) {
            var k = ref[0];

            return (k     ).value in ctx.properties();
}
    ],
    'filter-has-id': [
        BooleanType,
        [],
        function (ctx) { return ctx.id() !== null; }
    ],
    'filter-type-in': [
        BooleanType,
        [array(StringType)],
        function (ctx, ref) {
            var v = ref[0];

            return (v     ).value.indexOf(ctx.geometryType()) >= 0;
}
    ],
    'filter-id-in': [
        BooleanType,
        [array(ValueType)],
        function (ctx, ref) {
            var v = ref[0];

            return (v     ).value.indexOf(ctx.id()) >= 0;
}
    ],
    'filter-in-small': [
        BooleanType,
        [StringType, array(ValueType)],
        // assumes v is an array literal
        function (ctx, ref) {
            var k = ref[0];
            var v = ref[1];

            return (v     ).value.indexOf(ctx.properties()[(k     ).value]) >= 0;
}
    ],
    'filter-in-large': [
        BooleanType,
        [StringType, array(ValueType)],
        // assumes v is a array literal with values sorted in ascending order and of a single type
        function (ctx, ref) {
            var k = ref[0];
            var v = ref[1];

            return binarySearch(ctx.properties()[(k     ).value], (v     ).value, 0, (v     ).value.length - 1);
}
    ],
    '>': {
        type: BooleanType,
        overloads: [
            [[NumberType, NumberType], gt],
            [[StringType, StringType], gt]
        ]
    },
    '<': {
        type: BooleanType,
        overloads: [
            [[NumberType, NumberType], lt],
            [[StringType, StringType], lt]
        ]
    },
    '>=': {
        type: BooleanType,
        overloads: [
            [[NumberType, NumberType], gteq],
            [[StringType, StringType], gteq]
        ]
    },
    '<=': {
        type: BooleanType,
        overloads: [
            [[NumberType, NumberType], lteq],
            [[StringType, StringType], lteq]
        ]
    },
    'all': {
        type: BooleanType,
        overloads: [
            [
                [BooleanType, BooleanType],
                function (ctx, ref) {
                    var a = ref[0];
                    var b = ref[1];

                    return a.evaluate(ctx) && b.evaluate(ctx);
}
            ],
            [
                varargs(BooleanType),
                function (ctx, args) {
                    for (var i = 0, list = args; i < list.length; i += 1) {
                        var arg = list[i];

                        if (!arg.evaluate(ctx))
                            { return false; }
                    }
                    return true;
                }
            ]
        ]
    },
    'any': {
        type: BooleanType,
        overloads: [
            [
                [BooleanType, BooleanType],
                function (ctx, ref) {
                    var a = ref[0];
                    var b = ref[1];

                    return a.evaluate(ctx) || b.evaluate(ctx);
}
            ],
            [
                varargs(BooleanType),
                function (ctx, args) {
                    for (var i = 0, list = args; i < list.length; i += 1) {
                        var arg = list[i];

                        if (arg.evaluate(ctx))
                            { return true; }
                    }
                    return false;
                }
            ]
        ]
    },
    '!': [
        BooleanType,
        [BooleanType],
        function (ctx, ref) {
            var b = ref[0];

            return !b.evaluate(ctx);
}
    ],
    'upcase': [
        StringType,
        [StringType],
        function (ctx, ref) {
            var s = ref[0];

            return s.evaluate(ctx).toUpperCase();
}
    ],
    'downcase': [
        StringType,
        [StringType],
        function (ctx, ref) {
            var s = ref[0];

            return s.evaluate(ctx).toLowerCase();
}
    ],
    'concat': [
        StringType,
        varargs(StringType),
        function (ctx, args) { return args.map(function (arg) { return arg.evaluate(ctx); }).join(''); }
    ]
});

module.exports = expressions;

},{"../compound_expression":128,"../runtime_error":148,"../types":151,"../values":152,"./array":129,"./assertion":130,"./at":131,"./case":132,"./coalesce":133,"./coercion":134,"./equals":135,"./interpolate":137,"./let":138,"./literal":139,"./match":140,"./step":141,"./var":142}],137:[function(require,module,exports){
'use strict';//      

var UnitBezier = require('@mapbox/unitbezier');
var interpolate = require('../../util/interpolate');
var ref = require('../types');
var toString = ref.toString;
var NumberType = ref.NumberType;
var ref$1 = require("../stops");
var findStopLessThanOrEqualTo = ref$1.findStopLessThanOrEqualTo;

                                      
                                                
                                                     
                                                           
                                     

                               
                        
                                           
                                                                              

var Interpolate = function Interpolate(type  , interpolation               , input        , stops   ) {
    var this$1 = this;

    this.type = type;
    this.interpolation = interpolation;
    this.input = input;

    this.labels = [];
    this.outputs = [];
    for (var i = 0, list = stops; i < list.length; i += 1) {
        var ref = list[i];
        var label = ref[0];
        var expression = ref[1];

        this$1.labels.push(label);
        this$1.outputs.push(expression);
    }
};

Interpolate.interpolationFactor = function interpolationFactor (interpolation               , input    , lower    , upper    ) {
    var t = 0;
    if (interpolation.name === 'exponential') {
        t = exponentialInterpolation(input, interpolation.base, lower, upper);
    } else if (interpolation.name === 'linear') {
        t = exponentialInterpolation(input, 1, lower, upper);
    } else if (interpolation.name === 'cubic-bezier') {
        var c = interpolation.controlPoints;
        var ub = new UnitBezier(c[0], c[1], c[2], c[3]);
        t = ub.solve(exponentialInterpolation(input, 1, lower, upper));
    }
    return t;
};

Interpolate.parse = function parse (args          , context            ) {
    var interpolation = args[1];
        var input = args[2];
        var rest = args.slice(3);

    if (!Array.isArray(interpolation) || interpolation.length === 0) {
        return context.error("Expected an interpolation type expression.", 1);
    }

    if (interpolation[0] === 'linear') {
        interpolation = { name: 'linear' };
    } else if (interpolation[0] === 'exponential') {
        var base = interpolation[1];
        if (typeof base !== 'number')
            { return context.error("Exponential interpolation requires a numeric base.", 1, 1); }
        interpolation = {
            name: 'exponential',
            base: base
        };
    } else if (interpolation[0] === 'cubic-bezier') {
        var controlPoints = interpolation.slice(1);
        if (
            controlPoints.length !== 4 ||
            controlPoints.some(function (t) { return typeof t !== 'number' || t < 0 || t > 1; })
        ) {
            return context.error('Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.', 1);
        }

        interpolation = {
            name: 'cubic-bezier',
            controlPoints: (controlPoints )
        };
    } else {
        return context.error(("Unknown interpolation type " + (String(interpolation[0]))), 1, 0);
    }

    if (args.length - 1 < 4) {
        return context.error(("Expected at least 4 arguments, but found only " + (args.length - 1) + "."));
    }

    if ((args.length - 1) % 2 !== 0) {
        return context.error("Expected an even number of arguments.");
    }

    input = context.parse(input, 2, NumberType);
    if (!input) { return null; }

    var stops    = [];

    var outputType   = (null );
    if (context.expectedType && context.expectedType.kind !== 'value') {
        outputType = context.expectedType;
    }

    for (var i = 0; i < rest.length; i += 2) {
        var label = rest[i];
        var value = rest[i + 1];

        var labelKey = i + 3;
        var valueKey = i + 4;

        if (typeof label !== 'number') {
            return context.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.', labelKey);
        }

        if (stops.length && stops[stops.length - 1][0] >= label) {
            return context.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.', labelKey);
        }

        var parsed = context.parse(value, valueKey, outputType);
        if (!parsed) { return null; }
        outputType = outputType || parsed.type;
        stops.push([label, parsed]);
    }

    if (outputType.kind !== 'number' &&
        outputType.kind !== 'color' &&
        !(
            outputType.kind === 'array' &&
            outputType.itemType.kind === 'number' &&
            typeof outputType.N === 'number'
        )
    ) {
        return context.error(("Type " + (toString(outputType)) + " is not interpolatable."));
    }

    return new Interpolate(outputType, interpolation, input, stops);
};

Interpolate.prototype.evaluate = function evaluate (ctx               ) {
    var labels = this.labels;
    var outputs = this.outputs;

    if (labels.length === 1) {
        return outputs[0].evaluate(ctx);
    }

    var value = ((this.input.evaluate(ctx) )    );
    if (value <= labels[0]) {
        return outputs[0].evaluate(ctx);
    }

    var stopCount = labels.length;
    if (value >= labels[stopCount - 1]) {
        return outputs[stopCount - 1].evaluate(ctx);
    }

    var index = findStopLessThanOrEqualTo(labels, value);
    var lower = labels[index];
    var upper = labels[index + 1];
    var t = Interpolate.interpolationFactor(this.interpolation, value, lower, upper);

    var outputLower = outputs[index].evaluate(ctx);
    var outputUpper = outputs[index + 1].evaluate(ctx);

    return (interpolate[this.type.kind.toLowerCase()] )(outputLower, outputUpper, t);
};

Interpolate.prototype.eachChild = function eachChild (fn                  ) {
        var this$1 = this;

    fn(this.input);
    for (var i = 0, list = this$1.outputs; i < list.length; i += 1) {
        var expression = list[i];

            fn(expression);
    }
};

Interpolate.prototype.possibleOutputs = function possibleOutputs () {
    return (ref = []).concat.apply(ref, this.outputs.map(function (output) { return output.possibleOutputs(); }));
        var ref;
};

/**
 * Returns a ratio that can be used to interpolate between exponential function
 * stops.
 * How it works: Two consecutive stop values define a (scaled and shifted) exponential function `f(x) = a * base^x + b`, where `base` is the user-specified base,
 * and `a` and `b` are constants affording sufficient degrees of freedom to fit
 * the function to the given stops.
 *
 * Here's a bit of algebra that lets us compute `f(x)` directly from the stop
 * values without explicitly solving for `a` and `b`:
 *
 * First stop value: `f(x0) = y0 = a * base^x0 + b`
 * Second stop value: `f(x1) = y1 = a * base^x1 + b`
 * => `y1 - y0 = a(base^x1 - base^x0)`
 * => `a = (y1 - y0)/(base^x1 - base^x0)`
 *
 * Desired value: `f(x) = y = a * base^x + b`
 * => `f(x) = y0 + a * (base^x - base^x0)`
 *
 * From the above, we can replace the `a` in `a * (base^x - base^x0)` and do a
 * little algebra:
 * ```
 * a * (base^x - base^x0) = (y1 - y0)/(base^x1 - base^x0) * (base^x - base^x0)
 *                     = (y1 - y0) * (base^x - base^x0) / (base^x1 - base^x0)
 * ```
 *
 * If we let `(base^x - base^x0) / (base^x1 base^x0)`, then we have
 * `f(x) = y0 + (y1 - y0) * ratio`.  In other words, `ratio` may be treated as
 * an interpolation factor between the two stops' output values.
 *
 * (Note: a slightly different form for `ratio`,
 * `(base^(x-x0) - 1) / (base^(x1-x0) - 1) `, is equivalent, but requires fewer
 * expensive `Math.pow()` operations.)
 *
 * @private
*/
function exponentialInterpolation(input, base, lowerValue, upperValue) {
    var difference = upperValue - lowerValue;
    var progress = input - lowerValue;

    if (difference === 0) {
        return 0;
    } else if (base === 1) {
        return progress / difference;
    } else {
        return (Math.pow(base, progress) - 1) / (Math.pow(base, difference) - 1);
    }
}

module.exports = Interpolate;

},{"../../util/interpolate":163,"../stops":150,"../types":151,"@mapbox/unitbezier":7}],138:[function(require,module,exports){
'use strict';//      

                                     
                                                
                                                     
                                                            

var Let = function Let(bindings                         , result        ) {
    this.type = result.type;
    this.bindings = [].concat(bindings);
    this.result = result;
};

Let.prototype.evaluate = function evaluate (ctx               ) {
    ctx.pushScope(this.bindings);
    var result = this.result.evaluate(ctx);
    ctx.popScope();
    return result;
};

Let.prototype.eachChild = function eachChild (fn                  ) {
        var this$1 = this;

    for (var i = 0, list = this$1.bindings; i < list.length; i += 1) {
        var binding = list[i];

            fn(binding[1]);
    }
    fn(this.result);
};

Let.parse = function parse (args          , context            ) {
    if (args.length < 4)
        { return context.error(("Expected at least 3 arguments, but found " + (args.length - 1) + " instead.")); }

    var bindings                          = [];
    for (var i = 1; i < args.length - 1; i += 2) {
        var name = args[i];

        if (typeof name !== 'string') {
            return context.error(("Expected string, but found " + (typeof name) + " instead."), i);
        }

        if (/[^a-zA-Z0-9_]/.test(name)) {
            return context.error("Variable names must contain only alphanumeric characters or '_'.", i);
        }

        var value = context.parse(args[i + 1], i + 1);
        if (!value) { return null; }

        bindings.push([name, value]);
    }

    var result = context.parse(args[args.length - 1], args.length - 1, undefined, bindings);
    if (!result) { return null; }

    return new Let(bindings, result);
};

Let.prototype.possibleOutputs = function possibleOutputs () {
    return this.result.possibleOutputs();
};

module.exports = Let;

},{}],139:[function(require,module,exports){
'use strict';//      

var ref = require('../values');
var isValue = ref.isValue;
var typeOf = ref.typeOf;

                                     
                                        
                                                
                                                     

var Literal = function Literal(type  , value   ) {
    this.type = type;
    this.value = value;
};

Literal.parse = function parse (args          , context            ) {
    if (args.length !== 2)
        { return context.error(("'literal' expression requires exactly one argument, but found " + (args.length - 1) + " instead.")); }

    if (!isValue(args[1]))
        { return context.error("invalid value"); }

    var value = (args[1] );
    var type = typeOf(value);

    // special case: infer the item type if possible for zero-length arrays
    var expected = context.expectedType;
    if (
        type.kind === 'array' &&
        type.N === 0 &&
        expected &&
        expected.kind === 'array' &&
        (typeof expected.N !== 'number' || expected.N === 0)
    ) {
        type = expected;
    }

    return new Literal(type, value);
};

Literal.prototype.evaluate = function evaluate () {
    return this.value;
};

Literal.prototype.eachChild = function eachChild () {};

Literal.prototype.possibleOutputs = function possibleOutputs () {
    return [this.value];
};

module.exports = Literal;

},{"../values":152}],140:[function(require,module,exports){
'use strict';//      

var assert = require('assert');
var ref = require('../values');
var typeOf = ref.typeOf;

                                                
                                                     
                                                           
                                     

// Map input label values to output expression index
                                         

var Match = function Match(inputType  , outputType  , input        , cases   , outputs               , otherwise        ) {
    this.inputType = inputType;
    this.type = outputType;
    this.input = input;
    this.cases = cases;
    this.outputs = outputs;
    this.otherwise = otherwise;
};

Match.parse = function parse (args          , context            ) {
    if (args.length < 5)
        { return context.error(("Expected at least 4 arguments, but found only " + (args.length - 1) + ".")); }
    if (args.length % 2 !== 1)
        { return context.error("Expected an even number of arguments."); }

    var inputType;
    var outputType;
    if (context.expectedType && context.expectedType.kind !== 'value') {
        outputType = context.expectedType;
    }
    var cases = {};
    var outputs = [];
    for (var i = 2; i < args.length - 1; i += 2) {
        var labels = args[i];
        var value = args[i + 1];

        if (!Array.isArray(labels)) {
            labels = [labels];
        }

        var labelContext = context.concat(i);
        if (labels.length === 0) {
            return labelContext.error('Expected at least one branch label.');
        }

        for (var i$1 = 0, list = labels; i$1 < list.length; i$1 += 1) {
            var label = list[i$1];

                if (typeof label !== 'number' && typeof label !== 'string') {
                return labelContext.error("Branch labels must be numbers or strings.");
            } else if (typeof label === 'number' && Math.abs(label) > Number.MAX_SAFE_INTEGER) {
                return labelContext.error(("Branch labels must be integers no larger than " + (Number.MAX_SAFE_INTEGER) + "."));

            } else if (typeof label === 'number' && Math.floor(label) !== label) {
                return labelContext.error("Numeric branch labels must be integer values.");

            } else if (!inputType) {
                inputType = typeOf(label);
            } else if (labelContext.checkSubtype(inputType, typeOf(label))) {
                return null;
            }

            if (typeof cases[String(label)] !== 'undefined') {
                return labelContext.error('Branch labels must be unique.');
            }

            cases[String(label)] = outputs.length;
        }

        var result = context.parse(value, i, outputType);
        if (!result) { return null; }
        outputType = outputType || result.type;
        outputs.push(result);
    }

    var input = context.parse(args[1], 1, inputType);
    if (!input) { return null; }

    var otherwise = context.parse(args[args.length - 1], args.length - 1, outputType);
    if (!otherwise) { return null; }

    assert(inputType && outputType);
    return new Match((inputType ), (outputType ), input, cases, outputs, otherwise);
};

Match.prototype.evaluate = function evaluate (ctx               ) {
    var input = (this.input.evaluate(ctx) );
    return (this.outputs[this.cases[input]] || this.otherwise).evaluate(ctx);
};

Match.prototype.eachChild = function eachChild (fn                  ) {
    fn(this.input);
    this.outputs.forEach(fn);
    fn(this.otherwise);
};

Match.prototype.possibleOutputs = function possibleOutputs () {
    return (ref = [])
        .concat.apply(ref, this.outputs.map(function (out) { return out.possibleOutputs(); }))
        .concat(this.otherwise.possibleOutputs());
        var ref;
};

module.exports = Match;

},{"../values":152,"assert":13}],141:[function(require,module,exports){
'use strict';//      

var ref = require('../types');
var NumberType = ref.NumberType;
var ref$1 = require("../stops");
var findStopLessThanOrEqualTo = ref$1.findStopLessThanOrEqualTo;

                                      
                                                
                                                     
                                                           
                                     

var Step = function Step(type  , input        , stops   ) {
    var this$1 = this;

    this.type = type;
    this.input = input;

    this.labels = [];
    this.outputs = [];
    for (var i = 0, list = stops; i < list.length; i += 1) {
        var ref = list[i];
        var label = ref[0];
        var expression = ref[1];

        this$1.labels.push(label);
        this$1.outputs.push(expression);
    }
};

Step.parse = function parse (args          , context            ) {
    var input = args[1];
        var rest = args.slice(2);

    if (args.length - 1 < 4) {
        return context.error(("Expected at least 4 arguments, but found only " + (args.length - 1) + "."));
    }

    if ((args.length - 1) % 2 !== 0) {
        return context.error("Expected an even number of arguments.");
    }

    input = context.parse(input, 1, NumberType);
    if (!input) { return null; }

    var stops    = [];

    var outputType   = (null );
    if (context.expectedType && context.expectedType.kind !== 'value') {
        outputType = context.expectedType;
    }

    rest.unshift(-Infinity);

    for (var i = 0; i < rest.length; i += 2) {
        var label = rest[i];
        var value = rest[i + 1];

        var labelKey = i + 1;
        var valueKey = i + 2;

        if (typeof label !== 'number') {
            return context.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.', labelKey);
        }

        if (stops.length && stops[stops.length - 1][0] >= label) {
            return context.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.', labelKey);
        }

        var parsed = context.parse(value, valueKey, outputType);
        if (!parsed) { return null; }
        outputType = outputType || parsed.type;
        stops.push([label, parsed]);
    }

    return new Step(outputType, input, stops);
};

Step.prototype.evaluate = function evaluate (ctx               ) {
    var labels = this.labels;
    var outputs = this.outputs;

    if (labels.length === 1) {
        return outputs[0].evaluate(ctx);
    }

    var value = ((this.input.evaluate(ctx) )    );
    if (value <= labels[0]) {
        return outputs[0].evaluate(ctx);
    }

    var stopCount = labels.length;
    if (value >= labels[stopCount - 1]) {
        return outputs[stopCount - 1].evaluate(ctx);
    }

    var index = findStopLessThanOrEqualTo(labels, value);
    return outputs[index].evaluate(ctx);
};

Step.prototype.eachChild = function eachChild (fn                  ) {
        var this$1 = this;

    fn(this.input);
    for (var i = 0, list = this$1.outputs; i < list.length; i += 1) {
        var expression = list[i];

            fn(expression);
    }
};

Step.prototype.possibleOutputs = function possibleOutputs () {
    return (ref = []).concat.apply(ref, this.outputs.map(function (output) { return output.possibleOutputs(); }));
        var ref;
};

module.exports = Step;

},{"../stops":150,"../types":151}],142:[function(require,module,exports){
'use strict';//      

                                     
                                                
                                                     
                                                            

var Var = function Var(name    , type  ) {
    this.type = type;
    this.name = name;
};

Var.parse = function parse (args          , context            ) {
    if (args.length !== 2 || typeof args[1] !== 'string')
        { return context.error("'var' expression requires exactly one string literal argument."); }

    var name = args[1];
    if (!context.scope.has(name)) {
        return context.error(("Unknown variable \"" + name + "\". Make sure \"" + name + "\" has been bound in an enclosing \"let\" expression before using it."), 1);
    }

    return new Var(name, context.scope.get(name).type);
};

Var.prototype.evaluate = function evaluate (ctx               ) {
    return ctx.scope.get(this.name).evaluate(ctx);
};

Var.prototype.eachChild = function eachChild () {};

Var.prototype.possibleOutputs = function possibleOutputs () {
    return [undefined];
};

module.exports = Var;

},{}],143:[function(require,module,exports){
'use strict';//      

var assert = require('assert');
var Scope = require('./scope');
var ref = require('./values');
var Color = ref.Color;

                                                         
                                               

var geometryTypes = ['Unknown', 'Point', 'LineString', 'Polygon'];

var EvaluationContext = function EvaluationContext() {
    this.scope = new Scope();
    this._parseColorCache = {};
};

EvaluationContext.prototype.id = function id () {
    return this.feature && 'id' in this.feature ? this.feature.id : null;
};

EvaluationContext.prototype.geometryType = function geometryType () {
    return this.feature ? typeof this.feature.type === 'number' ? geometryTypes[this.feature.type] : this.feature.type : null;
};

EvaluationContext.prototype.properties = function properties () {
    return this.feature && this.feature.properties || {};
};

EvaluationContext.prototype.pushScope = function pushScope (bindings                         ) {
    this.scope = this.scope.concat(bindings);
};

EvaluationContext.prototype.popScope = function popScope () {
    assert(this.scope.parent);
    this.scope = (this.scope.parent );
};

EvaluationContext.prototype.parseColor = function parseColor (input    )     {
    var cached = this._parseColorCache[input];
    if (!cached) {
        cached = this._parseColorCache[input] = Color.parse(input);
    }
    return cached;
};

module.exports = EvaluationContext;

},{"./scope":149,"./values":152,"assert":13}],144:[function(require,module,exports){
'use strict';//      

var assert = require('assert');
var extend = require('../util/extend');
var ParsingError = require('./parsing_error');
var ParsingContext = require('./parsing_context');
var EvaluationContext = require('./evaluation_context');
var ref = require('./compound_expression');
var CompoundExpression = ref.CompoundExpression;
var Step = require('./definitions/step');
var Interpolate = require('./definitions/interpolate');
var Coalesce = require('./definitions/coalesce');
var Let = require('./definitions/let');
var definitions = require('./definitions');
var isConstant = require('./is_constant');
var RuntimeError = require('./runtime_error');
var ref$1 = require('../util/result');
var success = ref$1.success;
var error = ref$1.error;

                                  
                                    
                                             
                                                              
                                           
                                                                 

                       
                                                                                                                          
              
                                
  

                                
                 
                           
  

var StyleExpression = function StyleExpression(expression          ) {
      this.expression = expression;
  };

  StyleExpression.prototype.evaluate = function evaluate (globals                , feature        )    {
      if (!this._evaluator) {
          this._evaluator = new EvaluationContext();
      }

      this._evaluator.globals = globals;
      this._evaluator.feature = feature;
      return this.expression.evaluate(this._evaluator);
  };

var StyleExpressionWithErrorHandling = (function (StyleExpression) {
  function StyleExpressionWithErrorHandling(expression            , propertySpec                            ) {
        StyleExpression.call(this, expression);
        this._warningHistory = {};
        this._defaultValue = getDefaultValue(propertySpec);
        if (propertySpec.type === 'enum') {
            this._enumValues = propertySpec.values;
        }
    }

  if ( StyleExpression ) StyleExpressionWithErrorHandling.__proto__ = StyleExpression;
  StyleExpressionWithErrorHandling.prototype = Object.create( StyleExpression && StyleExpression.prototype );
  StyleExpressionWithErrorHandling.prototype.constructor = StyleExpressionWithErrorHandling;

    StyleExpressionWithErrorHandling.prototype.evaluate = function evaluate (globals                  , feature          ) {
        if (!this._evaluator) {
            this._evaluator = new EvaluationContext();
        }

        this._evaluator.globals = globals;
        this._evaluator.feature = feature;

        try {
            var val = this.expression.evaluate(this._evaluator);
            if (val === null || val === undefined) {
                return this._defaultValue;
            }
            if (this._enumValues && !(val in this._enumValues)) {
                throw new RuntimeError(("Expected value to be one of " + (Object.keys(this._enumValues).map(function (v) { return JSON.stringify(v); }).join(', ')) + ", but found " + (JSON.stringify(val)) + " instead."));
            }
            return val;
        } catch (e) {
            if (!this._warningHistory[e.message]) {
                this._warningHistory[e.message] = true;
                if (typeof console !== 'undefined') {
                    console.warn(e.message);
                }
            }
            return this._defaultValue;
        }
    };

  return StyleExpressionWithErrorHandling;
}(StyleExpression));

function isExpression(expression       ) {
    return Array.isArray(expression) && expression.length > 0 &&
        typeof expression[0] === 'string' && expression[0] in definitions;
}

/**
 * Parse and typecheck the given style spec JSON expression.  If
 * options.defaultValue is provided, then the resulting StyleExpression's
 * `evaluate()` method will handle errors by logging a warning (once per
 * message) and returning the default value.  Otherwise, it will throw
 * evaluation errors.
 *
 * @private
 */
function createExpression(expression       ,
                          propertySpec                            ,
                          options)                                               {
    if ( options === void 0 ) options                           = {};

    var parser = new ParsingContext(definitions, [], getExpectedType(propertySpec));
    var parsed = parser.parse(expression);
    if (!parsed) {
        assert(parser.errors.length > 0);
        return error(parser.errors);
    }

    if (options.handleErrors === false) {
        return success(new StyleExpression(parsed));
    } else {
        return success(new StyleExpressionWithErrorHandling(parsed, propertySpec));
    }
}

var ZoomConstantExpression = function ZoomConstantExpression(kind    , expression               ) {
      this.kind = kind;
      this._styleExpression = expression;
  };
  ZoomConstantExpression.prototype.evaluate = function evaluate (globals                , feature        )    {
      return this._styleExpression.evaluate(globals, feature);
  };

var ZoomDependentExpression = function ZoomDependentExpression(kind    , expression               , zoomCurve                  ) {
      this.kind = kind;
      this.zoomStops = zoomCurve.labels;
      this._styleExpression = expression;
      if (zoomCurve instanceof Interpolate) {
          this._interpolationType = zoomCurve.interpolation;
      }
  };

  ZoomDependentExpression.prototype.evaluate = function evaluate (globals                , feature        )    {
      return this._styleExpression.evaluate(globals, feature);
  };

  ZoomDependentExpression.prototype.interpolationFactor = function interpolationFactor (input      , lower      , upper      )       {
      if (this._interpolationType) {
          return Interpolate.interpolationFactor(this._interpolationType, input, lower, upper);
      } else {
          return 0;
      }
  };

                                  
                     
                                                                     
 

                                
                   
                                                                     
  

                                
                   
                                                                     
                                                                                  
                            
  

                                   
                      
                                                                     
                                                                                  
                            
  

                                     
                        
                      
                      
                          

function createPropertyExpression(expression       ,
                                  propertySpec                            ,
                                  options)                                                       {
    if ( options === void 0 ) options                           = {};

    expression = createExpression(expression, propertySpec, options);
    if (expression.result === 'error') {
        return expression;
    }

    var parsed = expression.value.expression;

    var isFeatureConstant = isConstant.isFeatureConstant(parsed);
    if (!isFeatureConstant && !propertySpec['property-function']) {
        return error([new ParsingError('', 'property expressions not supported')]);
    }

    var isZoomConstant = isConstant.isGlobalPropertyConstant(parsed, ['zoom']);
    if (!isZoomConstant && propertySpec['zoom-function'] === false) {
        return error([new ParsingError('', 'zoom expressions not supported')]);
    }

    var zoomCurve = findZoomCurve(parsed);
    if (!zoomCurve && !isZoomConstant) {
        return error([new ParsingError('', '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')]);
    } else if (zoomCurve instanceof ParsingError) {
        return error([zoomCurve]);
    } else if (zoomCurve instanceof Interpolate && propertySpec['function'] === 'piecewise-constant') {
        return error([new ParsingError('', '"interpolate" expressions cannot be used with this property')]);
    }

    if (!zoomCurve) {
        return success(isFeatureConstant ?
            (new ZoomConstantExpression('constant', expression.value)                    ) :
            (new ZoomConstantExpression('source', expression.value)                  ));
    }

    return success(isFeatureConstant ?
        (new ZoomDependentExpression('camera', expression.value, zoomCurve)                  ) :
        (new ZoomDependentExpression('composite', expression.value, zoomCurve)                     ));
}

var ref$2 = require('../function');
var isFunction = ref$2.isFunction;
var createFunction = ref$2.createFunction;
var ref$3 = require('./values');
var Color = ref$3.Color;

// serialization wrapper for old-style stop functions normalized to the
// expression interface
var StylePropertyFunction = function StylePropertyFunction(parameters                             , specification                          ) {
      this._parameters = parameters;
      this._specification = specification;
      extend(this, createFunction(this._parameters, this._specification));
  };

  StylePropertyFunction.deserialize = function deserialize (serialized                                                                                        ) {
      return ((new StylePropertyFunction(serialized._parameters, serialized._specification))                        );
  };

  StylePropertyFunction.serialize = function serialize (input                        ) {
      return {
          _parameters: input._parameters,
          _specification: input._specification
      };
  };

function normalizePropertyExpression   (value                               , specification                            )                          {
    if (isFunction(value)) {
        return (new StylePropertyFunction(value, specification)     );

    } else if (isExpression(value)) {
        var expression = createPropertyExpression(value, specification);
        if (expression.result === 'error') {
            // this should have been caught in validation
            throw new Error(expression.value.map(function (err) { return ((err.key) + ": " + (err.message)); }).join(', '));
        }
        return expression.value;

    } else {
        var constant      = value;
        if (typeof value === 'string' && specification.type === 'color') {
            constant = Color.parse(value);
        }
        return {
            kind: 'constant',
            evaluate: function () { return constant; }
        };
    }
}

module.exports = {
    StyleExpression: StyleExpression,
    StyleExpressionWithErrorHandling: StyleExpressionWithErrorHandling,
    isExpression: isExpression,
    createExpression: createExpression,
    createPropertyExpression: createPropertyExpression,
    normalizePropertyExpression: normalizePropertyExpression,
    ZoomConstantExpression: ZoomConstantExpression,
    ZoomDependentExpression: ZoomDependentExpression,
    StylePropertyFunction: StylePropertyFunction
};

// Zoom-dependent expressions may only use ["zoom"] as the input to a top-level "step" or "interpolate"
// expression (collectively referred to as a "curve"). The curve may be wrapped in one or more "let" or
// "coalesce" expressions.
function findZoomCurve(expression            )                                           {
    var result = null;
    if (expression instanceof Let) {
        result = findZoomCurve(expression.result);

    } else if (expression instanceof Coalesce) {
        for (var i = 0, list = expression.args; i < list.length; i += 1) {
            var arg = list[i];

          result = findZoomCurve(arg);
            if (result) {
                break;
            }
        }

    } else if ((expression instanceof Step || expression instanceof Interpolate) &&
        expression.input instanceof CompoundExpression &&
        expression.input.name === 'zoom') {

        result = expression;
    }

    if (result instanceof ParsingError) {
        return result;
    }

    expression.eachChild(function (child) {
        var childResult = findZoomCurve(child);
        if (childResult instanceof ParsingError) {
            result = childResult;
        } else if (!result && childResult) {
            result = new ParsingError('', '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.');
        } else if (result && childResult && result !== childResult) {
            result = new ParsingError('', 'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.');
        }
    });

    return result;
}

var ref$4 = require('./types');
var ColorType = ref$4.ColorType;
var StringType = ref$4.StringType;
var NumberType = ref$4.NumberType;
var BooleanType = ref$4.BooleanType;
var ValueType = ref$4.ValueType;
var array = ref$4.array;

function getExpectedType(spec                            )              {
    var types = {
        color: ColorType,
        string: StringType,
        number: NumberType,
        enum: StringType,
        boolean: BooleanType
    };

    if (spec.type === 'array') {
        return array(types[spec.value] || ValueType, spec.length);
    }

    return types[spec.type] || null;
}

function getDefaultValue(spec                            )        {
    if (spec.type === 'color' && isFunction(spec.default)) {
        // Special case for heatmap-color: it uses the 'default:' to define a
        // default color ramp, but createExpression expects a simple value to fall
        // back to in case of runtime errors
        return new Color(0, 0, 0, 0);
    } else if (spec.type === 'color') {
        return Color.parse(spec.default) || null;
    } else if (spec.default === undefined) {
        return null;
    } else {
        return spec.default;
    }
}

},{"../function":154,"../util/extend":161,"../util/result":165,"./compound_expression":128,"./definitions":136,"./definitions/coalesce":133,"./definitions/interpolate":137,"./definitions/let":138,"./definitions/step":141,"./evaluation_context":143,"./is_constant":145,"./parsing_context":146,"./parsing_error":147,"./runtime_error":148,"./types":151,"./values":152,"assert":13}],145:[function(require,module,exports){
'use strict';//      

var ref = require('./compound_expression');
var CompoundExpression = ref.CompoundExpression;

                                                  

function isFeatureConstant(e            ) {
    if (e instanceof CompoundExpression) {
        if (e.name === 'get' && e.args.length === 1) {
            return false;
        } else if (e.name === 'has' && e.args.length === 1) {
            return false;
        } else if (
            e.name === 'properties' ||
            e.name === 'geometry-type' ||
            e.name === 'id'
        ) {
            return false;
        } else if (/^filter-/.test(e.name)) {
            return false;
        }
    }

    var result = true;
    e.eachChild(function (arg) {
        if (result && !isFeatureConstant(arg)) { result = false; }
    });
    return result;
}

function isGlobalPropertyConstant(e            , properties               ) {
    if (e instanceof CompoundExpression && properties.indexOf(e.name) >= 0) { return false; }
    var result = true;
    e.eachChild(function (arg) {
        if (result && !isGlobalPropertyConstant(arg, properties)) { result = false; }
    });
    return result;
}

module.exports = {
    isFeatureConstant: isFeatureConstant,
    isGlobalPropertyConstant: isGlobalPropertyConstant,
};

},{"./compound_expression":128}],146:[function(require,module,exports){
'use strict';//      

var Scope = require('./scope');
var ref = require('./types');
var checkSubtype = ref.checkSubtype;
var ParsingError = require('./parsing_error');
var Literal = require('./definitions/literal');
var Assertion = require('./definitions/assertion');
var ArrayAssertion = require('./definitions/array');
var Coercion = require('./definitions/coercion');

                                                                 
                                  

/**
 * State associated parsing at a given point in an expression tree.
 * @private
 */
var ParsingContext = function ParsingContext(
    registry                ,
    path,
    expectedType   ,
    scope,
    errors
) {
    if ( path === void 0 ) path            = [];
    if ( scope === void 0 ) scope    = new Scope();
    if ( errors === void 0 ) errors                  = [];

    this.registry = registry;
    this.path = path;
    this.key = path.map(function (part) { return ("[" + part + "]"); }).join('');
    this.scope = scope;
    this.errors = errors;
    this.expectedType = expectedType;
};

/**
 * @param expr the JSON expression to parse
 * @param index the optional argument index if this expression is an argument of a parent expression that's being parsed
 * @param options
 * @param options.omitTypeAnnotations set true to omit inferred type annotations.  Caller beware: with this option set, the parsed expression's type will NOT satisfy `expectedType` if it would normally be wrapped in an inferred annotation.
 * @private
 */
ParsingContext.prototype.parse = function parse (
    expr   ,
    index     ,
    expectedType    ,
    bindings                          ,
    options
)          {
        if ( options === void 0 ) options                              = {};

    var context = this;
    if (index) {
        context = context.concat(index, expectedType, bindings);
    }

    if (expr === null || typeof expr === 'string' || typeof expr === 'boolean' || typeof expr === 'number') {
        expr = ['literal', expr];
    }

    if (Array.isArray(expr)) {
        if (expr.length === 0) {
            return context.error("Expected an array with at least one element. If you wanted a literal array, use [\"literal\", []].");
        }

        var op = expr[0];
        if (typeof op !== 'string') {
            context.error(("Expression name must be a string, but found " + (typeof op) + " instead. If you wanted a literal array, use [\"literal\", [...]]."), 0);
            return null;
        }

        var Expr = context.registry[op];
        if (Expr) {
            var parsed = Expr.parse(expr, context);
            if (!parsed) { return null; }

            if (context.expectedType) {
                var expected = context.expectedType;
                var actual = parsed.type;

                // When we expect a number, string, boolean, or array but
                // have a Value, we can wrap it in a refining assertion.
                // When we expect a Color but have a String or Value, we
                // can wrap it in "to-color" coercion.
                // Otherwise, we do static type-checking.
                if ((expected.kind === 'string' || expected.kind === 'number' || expected.kind === 'boolean') && actual.kind === 'value') {
                    if (!options.omitTypeAnnotations) {
                        parsed = new Assertion(expected, [parsed]);
                    }
                } else if (expected.kind === 'array' && actual.kind === 'value') {
                    if (!options.omitTypeAnnotations) {
                        parsed = new ArrayAssertion(expected, parsed);
                    }
                } else if (expected.kind === 'color' && (actual.kind === 'value' || actual.kind === 'string')) {
                    if (!options.omitTypeAnnotations) {
                        parsed = new Coercion(expected, [parsed]);
                    }
                } else if (context.checkSubtype(context.expectedType, parsed.type)) {
                    return null;
                }
            }

            // If an expression's arguments are all literals, we can evaluate
            // it immediately and replace it with a literal value in the
            // parsed/compiled result.
            if (!(parsed instanceof Literal) && isConstant(parsed)) {
                var ec = new (require('./evaluation_context'))();
                try {
                    parsed = new Literal(parsed.type, parsed.evaluate(ec));
                } catch (e) {
                    context.error(e.message);
                    return null;
                }
            }

            return parsed;
        }

        return context.error(("Unknown expression \"" + op + "\". If you wanted a literal array, use [\"literal\", [...]]."), 0);
    } else if (typeof expr === 'undefined') {
        return context.error("'undefined' value invalid. Use null instead.");
    } else if (typeof expr === 'object') {
        return context.error("Bare objects invalid. Use [\"literal\", {...}] instead.");
    } else {
        return context.error(("Expected an array, but found " + (typeof expr) + " instead."));
    }
};

/**
 * Returns a copy of this context suitable for parsing the subexpression at
 * index `index`, optionally appending to 'let' binding map.
 *
 * Note that `errors` property, intended for collecting errors while
 * parsing, is copied by reference rather than cloned.
 * @private
 */
ParsingContext.prototype.concat = function concat (index    , expectedType    , bindings                          ) {
    var path = typeof index === 'number' ? this.path.concat(index) : this.path;
    var scope = bindings ? this.scope.concat(bindings) : this.scope;
    return new ParsingContext(
        this.registry,
        path,
        expectedType || null,
        scope,
        this.errors
    );
};

/**
 * Push a parsing (or type checking) error into the `this.errors`
 * @param error The message
 * @param keys Optionally specify the source of the error at a child
 * of the current expression at `this.key`.
 * @private
 */
ParsingContext.prototype.error = function error (error$1           ) {
        var keys = [], len = arguments.length - 1;
        while ( len-- > 0 ) keys[ len ] = arguments[ len + 1 ];

    var key = "" + (this.key) + (keys.map(function (k) { return ("[" + k + "]"); }).join(''));
    this.errors.push(new ParsingError(key, error$1));
};

/**
 * Returns null if `t` is a subtype of `expected`; otherwise returns an
 * error message and also pushes it to `this.errors`.
 */
ParsingContext.prototype.checkSubtype = function checkSubtype$1 (expected  , t  )      {
    var error = checkSubtype(expected, t);
    if (error) { this.error(error); }
    return error;
};

module.exports = ParsingContext;

function isConstant(expression            ) {
    // requires within function body to workaround circular dependency
    var ref = require('./compound_expression');
    var CompoundExpression = ref.CompoundExpression;
    var ref$1 = require('./is_constant');
    var isGlobalPropertyConstant = ref$1.isGlobalPropertyConstant;
    var isFeatureConstant = ref$1.isFeatureConstant;
    var Var = require('./definitions/var');

    if (expression instanceof Var) {
        return false;
    } else if (expression instanceof CompoundExpression && expression.name === 'error') {
        return false;
    }

    var literalArgs = true;
    expression.eachChild(function (arg) {
        if (!(arg instanceof Literal)) { literalArgs = false; }
    });
    if (!literalArgs) {
        return false;
    }

    return isFeatureConstant(expression) &&
        isGlobalPropertyConstant(expression, ['zoom', 'heatmap-density']);
}

},{"./compound_expression":128,"./definitions/array":129,"./definitions/assertion":130,"./definitions/coercion":134,"./definitions/literal":139,"./definitions/var":142,"./evaluation_context":143,"./is_constant":145,"./parsing_error":147,"./scope":149,"./types":151}],147:[function(require,module,exports){
'use strict';//      

var ParsingError = (function (Error) {
    function ParsingError(key        , message        ) {
        Error.call(this, message);
        this.message = message;
        this.key = key;
    }

    if ( Error ) ParsingError.__proto__ = Error;
    ParsingError.prototype = Object.create( Error && Error.prototype );
    ParsingError.prototype.constructor = ParsingError;

    return ParsingError;
}(Error));

module.exports = ParsingError;

},{}],148:[function(require,module,exports){
'use strict';//      

var RuntimeError = function RuntimeError(message    ) {
    this.name = 'ExpressionEvaluationError';
    this.message = message;
};

RuntimeError.prototype.toJSON = function toJSON () {
    return this.message;
};

module.exports = RuntimeError;

},{}],149:[function(require,module,exports){
'use strict';//      

                                             

/**
 * Tracks `let` bindings during expression parsing.
 * @private
 */
var Scope = function Scope(parent    , bindings) {
    var this$1 = this;
    if ( bindings === void 0 ) bindings                          = [];

    this.parent = parent;
    this.bindings = {};
    for (var i = 0, list = bindings; i < list.length; i += 1) {
        var ref = list[i];
        var name = ref[0];
        var expression = ref[1];

        this$1.bindings[name] = expression;
    }
};

Scope.prototype.concat = function concat (bindings                         ) {
    return new Scope(this, bindings);
};

Scope.prototype.get = function get (name    )         {
    if (this.bindings[name]) { return this.bindings[name]; }
    if (this.parent) { return this.parent.get(name); }
    throw new Error((name + " not found in scope."));
};

Scope.prototype.has = function has (name    )      {
    if (this.bindings[name]) { return true; }
    return this.parent ? this.parent.has(name) : false;
};

module.exports = Scope;

},{}],150:[function(require,module,exports){
'use strict';//      

var RuntimeError = require('./runtime_error');

                                               

                                                

/**
 * Returns the index of the last stop <= input, or 0 if it doesn't exist.
 * @private
 */
function findStopLessThanOrEqualTo(stops               , input        ) {
    var n = stops.length;
    var lowerIndex = 0;
    var upperIndex = n - 1;
    var currentIndex = 0;
    var currentValue, upperValue;

    while (lowerIndex <= upperIndex) {
        currentIndex = Math.floor((lowerIndex + upperIndex) / 2);
        currentValue = stops[currentIndex];
        upperValue = stops[currentIndex + 1];
        if (input === currentValue || input > currentValue && input < upperValue) { // Search complete
            return currentIndex;
        } else if (currentValue < input) {
            lowerIndex = currentIndex + 1;
        } else if (currentValue > input) {
            upperIndex = currentIndex - 1;
        } else {
            throw new RuntimeError('Input is not a number.');
        }
    }

    return Math.max(currentIndex - 1, 0);
}

module.exports = {findStopLessThanOrEqualTo: findStopLessThanOrEqualTo};

},{"./runtime_error":148}],151:[function(require,module,exports){
'use strict';//      

                                         
                                             
                                             
                                               
                                           
                                             
                                           
                                           

                  
               
                 
                 
                  
                
                 
                
                                                           
              

                         
                  
                   
              
 

var NullType = { kind: 'null' };
var NumberType = { kind: 'number' };
var StringType = { kind: 'string' };
var BooleanType = { kind: 'boolean' };
var ColorType = { kind: 'color' };
var ObjectType = { kind: 'object' };
var ValueType = { kind: 'value' };
var ErrorType = { kind: 'error' };

function array(itemType      , N         )            {
    return {
        kind: 'array',
        itemType: itemType,
        N: N
    };
}

function toString(type      )         {
    if (type.kind === 'array') {
        var itemType = toString(type.itemType);
        return typeof type.N === 'number' ?
            ("array<" + itemType + ", " + (type.N) + ">") :
            type.itemType.kind === 'value' ? 'array' : ("array<" + itemType + ">");
    } else {
        return type.kind;
    }
}

var valueMemberTypes = [
    NullType,
    NumberType,
    StringType,
    BooleanType,
    ColorType,
    ObjectType,
    array(ValueType)
];

/**
 * Returns null if `t` is a subtype of `expected`; otherwise returns an
 * error message.
 * @private
 */
function checkSubtype(expected      , t      )          {
    if (t.kind === 'error') {
        // Error is a subtype of every type
        return null;
    } else if (expected.kind === 'array') {
        if (t.kind === 'array' &&
            !checkSubtype(expected.itemType, t.itemType) &&
            (typeof expected.N !== 'number' || expected.N === t.N)) {
            return null;
        }
    } else if (expected.kind === t.kind) {
        return null;
    } else if (expected.kind === 'value') {
        for (var i = 0, list = valueMemberTypes; i < list.length; i += 1) {
            var memberType = list[i];

            if (!checkSubtype(memberType, t)) {
                return null;
            }
        }
    }

    return ("Expected " + (toString(expected)) + " but found " + (toString(t)) + " instead.");
}

module.exports = {
    NullType: NullType,
    NumberType: NumberType,
    StringType: StringType,
    BooleanType: BooleanType,
    ColorType: ColorType,
    ObjectType: ObjectType,
    ValueType: ValueType,
    array: array,
    ErrorType: ErrorType,
    toString: toString,
    checkSubtype: checkSubtype
};

},{}],152:[function(require,module,exports){
'use strict';//      

var assert = require('assert');
var Color = require('../util/color');

var ref = require('./types');
var NullType = ref.NullType;
var NumberType = ref.NumberType;
var StringType = ref.StringType;
var BooleanType = ref.BooleanType;
var ColorType = ref.ColorType;
var ObjectType = ref.ObjectType;
var ValueType = ref.ValueType;
var array = ref.array;

                                    

function validateRGBA(r       , g       , b       , a        )          {
    if (!(
        typeof r === 'number' && r >= 0 && r <= 255 &&
        typeof g === 'number' && g >= 0 && g <= 255 &&
        typeof b === 'number' && b >= 0 && b <= 255
    )) {
        var value = typeof a === 'number' ? [r, g, b, a] : [r, g, b];
        return ("Invalid rgba value [" + (value.join(', ')) + "]: 'r', 'g', and 'b' must be between 0 and 255.");
    }

    if (!(
        typeof a === 'undefined' || (typeof a === 'number' && a >= 0 && a <= 1)
    )) {
        return ("Invalid rgba value [" + ([r, g, b, a].join(', ')) + "]: 'a' must be between 0 and 1.");
    }

    return null;
}

                                                                                                           

function isValue(mixed       )          {
    if (mixed === null) {
        return true;
    } else if (typeof mixed === 'string') {
        return true;
    } else if (typeof mixed === 'boolean') {
        return true;
    } else if (typeof mixed === 'number') {
        return true;
    } else if (mixed instanceof Color) {
        return true;
    } else if (Array.isArray(mixed)) {
        for (var i = 0, list = mixed; i < list.length; i += 1) {
            var item = list[i];

            if (!isValue(item)) {
                return false;
            }
        }
        return true;
    } else if (typeof mixed === 'object') {
        for (var key in mixed) {
            if (!isValue(mixed[key])) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function typeOf(value       )       {
    if (value === null) {
        return NullType;
    } else if (typeof value === 'string') {
        return StringType;
    } else if (typeof value === 'boolean') {
        return BooleanType;
    } else if (typeof value === 'number') {
        return NumberType;
    } else if (value instanceof Color) {
        return ColorType;
    } else if (Array.isArray(value)) {
        var length = value.length;
        var itemType       ;

        for (var i = 0, list = value; i < list.length; i += 1) {
            var item = list[i];

            var t = typeOf(item);
            if (!itemType) {
                itemType = t;
            } else if (itemType === t) {
                continue;
            } else {
                itemType = ValueType;
                break;
            }
        }

        return array(itemType || ValueType, length);
    } else {
        assert(typeof value === 'object');
        return ObjectType;
    }
}

module.exports = {
    Color: Color,
    validateRGBA: validateRGBA,
    isValue: isValue,
    typeOf: typeOf
};

},{"../util/color":158,"./types":151,"assert":13}],153:[function(require,module,exports){
'use strict';//      

var ref = require('../expression');
var createExpression = ref.createExpression;

                                                    
                                                                                                        

module.exports = createFilter;
module.exports.isExpressionFilter = isExpressionFilter;

function isExpressionFilter(filter) {
    if (!Array.isArray(filter) || filter.length === 0) {
        return false;
    }
    switch (filter[0]) {
    case 'has':
        return filter.length >= 2 && filter[1] !== '$id' && filter[1] !== '$type';

    case 'in':
    case '!in':
    case '!has':
    case 'none':
        return false;

    case '==':
    case '!=':
    case '>':
    case '>=':
    case '<':
    case '<=':
        return filter.length === 3 && (Array.isArray(filter[1]) || Array.isArray(filter[2]));

    case 'any':
    case 'all':
        for (var i = 0, list = filter.slice(1); i < list.length; i += 1) {
            var f = list[i];

        if (!isExpressionFilter(f) && typeof f !== 'boolean') {
                return false;
            }
        }
        return true;

    default:
        return true;
    }
}

var filterSpec = {
    'type': 'boolean',
    'default': false,
    'function': true,
    'property-function': true,
    'zoom-function': true
};

/**
 * Given a filter expressed as nested arrays, return a new function
 * that evaluates whether a given feature (with a .properties or .tags property)
 * passes its test.
 *
 * @private
 * @param {Array} filter mapbox gl filter
 * @returns {Function} filter-evaluating function
 */
function createFilter(filter     )                {
    if (!filter) {
        return function () { return true; };
    }

    if (!isExpressionFilter(filter)) {
        filter = convertFilter(filter);
    }

    var compiled = createExpression(filter, filterSpec);
    if (compiled.result === 'error') {
        throw new Error(compiled.value.map(function (err) { return ((err.key) + ": " + (err.message)); }).join(', '));
    } else {
        return function (globalProperties                  , feature                   ) { return compiled.value.evaluate(globalProperties, feature); };
    }
}

// Comparison function to sort numbers and strings
function compare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

function convertFilter(filter             )        {
    if (!filter) { return true; }
    var op = filter[0];
    if (filter.length <= 1) { return (op !== 'any'); }
    var converted =
        op === '==' ? convertComparisonOp(filter[1], filter[2], '==') :
        op === '!=' ? convertNegation(convertComparisonOp(filter[1], filter[2], '==')) :
        op === '<' ||
        op === '>' ||
        op === '<=' ||
        op === '>=' ? convertComparisonOp(filter[1], filter[2], op) :
        op === 'any' ? convertDisjunctionOp(filter.slice(1)) :
        op === 'all' ? ['all'].concat(filter.slice(1).map(convertFilter)) :
        op === 'none' ? ['all'].concat(filter.slice(1).map(convertFilter).map(convertNegation)) :
        op === 'in' ? convertInOp(filter[1], filter.slice(2)) :
        op === '!in' ? convertNegation(convertInOp(filter[1], filter.slice(2))) :
        op === 'has' ? convertHasOp(filter[1]) :
        op === '!has' ? convertNegation(convertHasOp(filter[1])) :
        true;
    return converted;
}

function convertComparisonOp(property        , value     , op        ) {
    switch (property) {
    case '$type':
        return [("filter-type-" + op), value];
    case '$id':
        return [("filter-id-" + op), value];
    default:
        return [("filter-" + op), property, value];
    }
}

function convertDisjunctionOp(filters                   ) {
    return ['any'].concat(filters.map(convertFilter));
}

function convertInOp(property        , values            ) {
    if (values.length === 0) { return false; }
    switch (property) {
    case '$type':
        return ["filter-type-in", ['literal', values]];
    case '$id':
        return ["filter-id-in", ['literal', values]];
    default:
        if (values.length > 200 && !values.some(function (v) { return typeof v !== typeof values[0]; })) {
            return ['filter-in-large', property, ['literal', values.sort(compare)]];
        } else {
            return ['filter-in-small', property, ['literal', values]];
        }
    }
}

function convertHasOp(property        ) {
    switch (property) {
    case '$type':
        return true;
    case '$id':
        return ["filter-has-id"];
    default:
        return ["filter-has", property];
    }
}

function convertNegation(filter       ) {
    return ['!', filter];
}

},{"../expression":144}],154:[function(require,module,exports){
'use strict';
var colorSpaces = require('../util/color_spaces');
var Color = require('../util/color');
var extend = require('../util/extend');
var getType = require('../util/get_type');
var interpolate = require('../util/interpolate');
var Interpolate = require('../expression/definitions/interpolate');

function isFunction(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function identityFunction(x) {
    return x;
}

function createFunction(parameters, propertySpec) {
    var isColor = propertySpec.type === 'color';
    var zoomAndFeatureDependent = parameters.stops && typeof parameters.stops[0][0] === 'object';
    var featureDependent = zoomAndFeatureDependent || parameters.property !== undefined;
    var zoomDependent = zoomAndFeatureDependent || !featureDependent;
    var type = parameters.type || (propertySpec.function === 'interpolated' ? 'exponential' : 'interval');

    if (isColor) {
        parameters = extend({}, parameters);

        if (parameters.stops) {
            parameters.stops = parameters.stops.map(function (stop) {
                return [stop[0], Color.parse(stop[1])];
            });
        }

        if (parameters.default) {
            parameters.default = Color.parse(parameters.default);
        } else {
            parameters.default = Color.parse(propertySpec.default);
        }
    }

    if (parameters.colorSpace && parameters.colorSpace !== 'rgb' && !colorSpaces[parameters.colorSpace]) {
        throw new Error(("Unknown color space: " + (parameters.colorSpace)));
    }

    var innerFun;
    var hashedStops;
    var categoricalKeyType;
    if (type === 'exponential') {
        innerFun = evaluateExponentialFunction;
    } else if (type === 'interval') {
        innerFun = evaluateIntervalFunction;
    } else if (type === 'categorical') {
        innerFun = evaluateCategoricalFunction;

        // For categorical functions, generate an Object as a hashmap of the stops for fast searching
        hashedStops = Object.create(null);
        for (var i = 0, list = parameters.stops; i < list.length; i += 1) {
            var stop = list[i];

            hashedStops[stop[0]] = stop[1];
        }

        // Infer key type based on first stop key-- used to encforce strict type checking later
        categoricalKeyType = typeof parameters.stops[0][0];

    } else if (type === 'identity') {
        innerFun = evaluateIdentityFunction;
    } else {
        throw new Error(("Unknown function type \"" + type + "\""));
    }

    if (zoomAndFeatureDependent) {
        var featureFunctions = {};
        var zoomStops = [];
        for (var s = 0; s < parameters.stops.length; s++) {
            var stop$1 = parameters.stops[s];
            var zoom = stop$1[0].zoom;
            if (featureFunctions[zoom] === undefined) {
                featureFunctions[zoom] = {
                    zoom: zoom,
                    type: parameters.type,
               