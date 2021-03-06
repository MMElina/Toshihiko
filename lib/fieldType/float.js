/**
 * XadillaX created at 2014-09-05 18:45
 *
 * Copyright (c) 2014 Huaban.com, all rights
 * reserved.
 */
var Float = {};
Float.name = "Float";
Float.needQuotes = false;

Float.restore = function(parsed) {
    return parseFloat(parsed);
};

Float.parse = function(orig) {
    return parseFloat(orig);
};

Float.defaultValue = 0.0;

Float.equal = function(a, b) {
    if(a === b) return true;
    return parseFloat(a) === parseFloat(b);
};

module.exports = Float;

