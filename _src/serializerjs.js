/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ErrorInvalidArgumentError = require('./Error/InvalidArgumentError');

var _ErrorInvalidArgumentError2 = _interopRequireDefault(_ErrorInvalidArgumentError);

var _ErrorSerializationError = require('./Error/SerializationError');

var _ErrorSerializationError2 = _interopRequireDefault(_ErrorSerializationError);

var _ErrorSerializerError = require('./Error/SerializerError');

var _ErrorSerializerError2 = _interopRequireDefault(_ErrorSerializerError);

var _ErrorUnimplementedMethodError = require('./Error/UnimplementedMethodError');

var _ErrorUnimplementedMethodError2 = _interopRequireDefault(_ErrorUnimplementedMethodError);

var _SerializerAbstractSerializer = require('./Serializer/AbstractSerializer');

var _SerializerAbstractSerializer2 = _interopRequireDefault(_SerializerAbstractSerializer);

var _SerializerSerializer = require('./Serializer/Serializer');

var _SerializerSerializer2 = _interopRequireDefault(_SerializerSerializer);

var _SerializerSerializerAware = require('./Serializer/SerializerAware');

var _SerializerSerializerAware2 = _interopRequireDefault(_SerializerSerializerAware);

var _SerializerSerializerInterface = require('./Serializer/SerializerInterface');

var _SerializerSerializerInterface2 = _interopRequireDefault(_SerializerSerializerInterface);

var SerializerFactory =
/**
 * @param {Map.<string,SerializerInterface>} serializers
 *
 * @returns {Serializer}
 */
function SerializerFactory(serializers) {
  _classCallCheck(this, SerializerFactory);

  return new _SerializerSerializer2['default'](serializers);
}

/** @type {InvalidArgumentError} */
;

SerializerFactory.InvalidArgumentError = _ErrorInvalidArgumentError2['default'];
/** @type {SerializationError} */
SerializerFactory.SerializationError = _ErrorSerializationError2['default'];
/** @type {SerializerError} */
SerializerFactory.SerializerError = _ErrorSerializerError2['default'];
/** @type {UnimplementedSerializerMethodError} */
SerializerFactory.UnimplementedSerializerMethodError = _ErrorUnimplementedMethodError2['default'];

/** @type {AbstractSerializer} */
SerializerFactory.AbstractSerializer = _SerializerAbstractSerializer2['default'];
/** @type {SerializerAware} */
SerializerFactory.SerializerAware = _SerializerSerializerAware2['default'];
/** @type {SerializerInterface} */
SerializerFactory.SerializerInterface = _SerializerSerializerInterface2['default'];

module.exports = SerializerFactory;