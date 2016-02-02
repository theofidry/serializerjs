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

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _srcSerializerSerializerAware = require('./../../_src/Serializer/SerializerAware');

var _srcSerializerSerializerAware2 = _interopRequireDefault(_srcSerializerSerializerAware);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

var UserSerializer = (function (_SerializerAwareInterface) {
    _inherits(UserSerializer, _SerializerAwareInterface);

    function UserSerializer() {
        _classCallCheck(this, UserSerializer);

        _get(Object.getPrototypeOf(UserSerializer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(UserSerializer, [{
        key: 'serialize',

        /**
         * @inheritDoc
         *
         * @param {User} user
         *
         * @return {!object}
         */
        value: function serialize(user, format, context) {
            var type = this._serializer.serialize(user._type, format, context);
            var gender = this._serializer.serialize(user._gender, format, context);

            return {
                firstname: user.firstname,
                lastname: user.lastname,
                type: type,
                gender: gender
            };
        }

        /**
         * @inheritDoc
         */
    }, {
        key: 'supportsSerialize',
        value: function supportsSerialize(data) {
            var format = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            return 'object' === typeof data && null !== data && data instanceof _User2['default'];
        }

        /**
         * @inheritDoc
         *
         * @param {!object} data
         *
         * @return {User}
         */
    }, {
        key: 'deserialize',
        value: function deserialize(data, className) {
            var _serializer, _serializer2, _serializer3, _serializer4;

            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = arguments[_key];
            }

            var firstname = (_serializer = this._serializer).deserialize.apply(_serializer, [data.firstname, 'string'].concat(args));
            var lastname = (_serializer2 = this._serializer).deserialize.apply(_serializer2, [data.lastname, 'string'].concat(args));
            var type = (_serializer3 = this._serializer).deserialize.apply(_serializer3, [data.type, 'UserType'].concat(args));
            var gender = (_serializer4 = this._serializer).deserialize.apply(_serializer4, [data.gender, 'boolean'].concat(args));

            return new _User2['default'](firstname, lastname, type, gender);
        }

        /**
         * @inheritDoc
         */
    }, {
        key: 'supportsDeserialize',
        value: function supportsDeserialize(data, className) {
            var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            return 'User' === className && 'object' === typeof data && null !== data;
        }
    }]);

    return UserSerializer;
})(_srcSerializerSerializerAware2['default']);

exports['default'] = UserSerializer;
module.exports = exports['default'];