"use strict";

exports.__esModule = true;
exports.default = void 0;

var _translation = require("@superset-ui/translation");

var _chart = require("@superset-ui/chart");

var _transformProps = _interopRequireDefault(require("../transformProps"));

var _thumbnail = _interopRequireDefault(require("./images/thumbnail.png"));

var _AnnotationTypes = require("../vendor/superset/AnnotationTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const metadata = new _chart.ChartMetadata({
  canBeAnnotationTypes: [_AnnotationTypes.ANNOTATION_TYPES.TIME_SERIES],
  credits: ['http://nvd3.org'],
  description: '',
  name: (0, _translation.t)('Line Chart'),
  supportedAnnotationTypes: [_AnnotationTypes.ANNOTATION_TYPES.TIME_SERIES, _AnnotationTypes.ANNOTATION_TYPES.INTERVAL, _AnnotationTypes.ANNOTATION_TYPES.EVENT, _AnnotationTypes.ANNOTATION_TYPES.FORMULA],
  thumbnail: _thumbnail.default,
  useLegacyApi: true
});

class LineChartPlugin extends _chart.ChartPlugin {
  constructor() {
    super({
      loadChart: () => Promise.resolve().then(() => _interopRequireWildcard(require('../ReactNVD3'))),
      metadata,
      transformProps: _transformProps.default
    });
  }

}

exports.default = LineChartPlugin;