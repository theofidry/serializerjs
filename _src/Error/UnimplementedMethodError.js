/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _SerializerError2 = require('./SerializerError');

var _SerializerError3 = _interopRequireDefault(_SerializerError2);

/**
 * @author Théo FIDRY <theo.fidry@gmail.com>
 */

var UnimplementedSerializerMethodError = (function (_SerializerError) {
  _inherits(UnimplementedSerializerMethodError, _SerializerError);

  /**
   * @param {string} [message='']
   */

  function UnimplementedSerializerMethodError() {
    var message = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    _classCallCheck(this, UnimplementedSerializerMethodError);

    _get(Object.getPrototypeOf(UnimplementedSerializerMethodError.prototype), 'constructor', this).call(this, message);

    this.name = 'UnimplementedMethodError';
  }

  return UnimplementedSerializerMethodError;
})(_SerializerError3['default']);

exports['default'] = UnimplementedSerializerMethodError;
module.exports = exports['default'];