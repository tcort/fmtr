"use strict";

var _ = require('lodash');

module.exports = function fmtr(str, obj) {
    return _.template(_.isString(str) ? str : '', { interpolate: /\$\{([^\}]+)\}/gm })(obj);
};
