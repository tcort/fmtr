"use strict";

var _ = require('lodash');

module.exports = function fmtr(str, obj) {
    if (typeof str !== "string") {
        return '';
    }

    return str.replace(/\\?\$\{([^\}]+)\}/gm, function (match, p1) {
        if (/^\\/.test(match)) {
            return match.substring(1);
        }
        return _.get(obj, p1) || '';
    });
};
