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

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _SerializerInterface2 = require('./SerializerInterface');

var _SerializerInterface3 = _interopRequireDefault(_SerializerInterface2);

/**
 * Any serializer implementing this interface will access to a serializer at runtime.
 *
 * @author Théo FIDRY <theo.fidry@gmail.com>
 */

var SerializerAware = (function (_SerializerInterface) {
  _inherits(SerializerAware, _SerializerInterface);

  function SerializerAware() {
    _classCallCheck(this, SerializerAware);

    _get(Object.getPrototypeOf(SerializerAware.prototype), 'constructor', this).call(this);

    /**
     * @type {SerializerInterface}
     * @protected
     */
    this._serializer = undefined;
  }

  /**
   * @param {SerializerInterface} serializer
   */

  _createClass(SerializerAware, [{
    key: 'setSerializer',
    value: function setSerializer(serializer) {
      this._serializer = serializer;
    }
  }]);

  return SerializerAware;
})(_SerializerInterface3['default']);

exports['default'] = SerializerAware;
module.exports = exports['default'];