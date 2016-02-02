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

var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _SerializerAware2 = require('./SerializerAware');

var _SerializerAware3 = _interopRequireDefault(_SerializerAware2);

/**
 * Base class that can be used for writing a custom serializer. It is especially convenient if your serializer do only
 * serialization or only deserialization. If not, it you are better off implementing SerializerAwareInterface or
 * SerializerInterface.
 *
 * @abstract
 * @author Théo FIDRY <theo.fidry@gmail.com>
 */

var AbstractSerializer = (function (_SerializerAware) {
  _inherits(AbstractSerializer, _SerializerAware);

  function AbstractSerializer() {
    _classCallCheck(this, AbstractSerializer);

    _get(Object.getPrototypeOf(AbstractSerializer.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AbstractSerializer, [{
    key: 'serialize',

    /**
     * @inheritDoc
     */
    value: function serialize(data, format, context) {
      return data;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: 'supportsSerialize',
    value: function supportsSerialize(data) {
      var format = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      return false;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: 'deserialize',
    value: function deserialize(data, className) {
      var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
      var context = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

      return data;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: 'supportsDeserialize',
    value: function supportsDeserialize(data, className) {
      var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      return false;
    }
  }]);

  return AbstractSerializer;
})(_SerializerAware3['default']);

exports['default'] = AbstractSerializer;
module.exports = exports['default'];