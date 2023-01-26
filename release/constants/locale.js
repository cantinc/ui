'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../utils/date/getLocaleDateFormat/index.js');
require('../utils/date/getLocaleDateFormatPlaceholder/index.js');
var getLocaleDateFormat = require('../utils/date/getLocaleDateFormat/getLocaleDateFormat.js');
var getLocaleDateFormatPlaceholder = require('../utils/date/getLocaleDateFormatPlaceholder/getLocaleDateFormatPlaceholder.js');

const localeDateFormat = getLocaleDateFormat.getLocaleDateFormat();
const locale = navigator.language;
const localeDateFormatPlaceholder = getLocaleDateFormatPlaceholder.getLocaleDateFormatPlaceholder(localeDateFormat, locale);

exports.locale = locale;
exports.localeDateFormat = localeDateFormat;
exports.localeDateFormatPlaceholder = localeDateFormatPlaceholder;
