"use strict";

var _ = require('lodash');

module.exports = function fmtr(str, obj) {
    try {
        return _.template(_.isString(str) ? str : '', { interpolate: /\$\{([^\}]+)\}/gm })(obj);
    } catch (err) {
        return (_.isString(str) ? str : '').replace(/\$\{([^\}]+)\}/gm, '');
    }
};
