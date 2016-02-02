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

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _srcSerializerSerializerAware = require('./../../_src/Serializer/SerializerAware');

var _srcSerializerSerializerAware2 = _interopRequireDefault(_srcSerializerSerializerAware);

var _UserType = require('./UserType');

var UserTypeSerializer = (function (_SerializerAware) {
    _inherits(UserTypeSerializer, _SerializerAware);

    function UserTypeSerializer() {
        _classCallCheck(this, UserTypeSerializer);

        _get(Object.getPrototypeOf(UserTypeSerializer.prototype), 'constructor', this).call(this);

        /**
         * @type {Map.<number, string>} Key and value as respectively the raw and deserialized value
         * @private
         */
        this._mapping = new Map([[0, _UserType.ADMIN_TYPE], [1, _UserType.ANONYMOUS_TYPE], [2, _UserType.CUSTOMER_TYPE]]);
    }

    /**
     * @inheritDoc
     *
     * @param {string} userType
     *
     * @return {number}
     */

    _createClass(UserTypeSerializer, [{
        key: 'serialize',
        value: function serialize(userType, format, context) {
            return this._getKeyOfType(userType);
        }

        /**
         * @inheritDoc
         */
    }, {
        key: 'supportsSerialize',
        value: function supportsSerialize(data) {
            var format = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            return null !== this._getKeyOfType(data);
        }

        /**
         * @param {*} userType
         *
         * @return {?number}
         * @private
         */
    }, {
        key: '_getKeyOfType',
        value: function _getKeyOfType(userType) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._mapping.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2);

                    var key = _step$value[0];
                    var type = _step$value[1];

                    if (userType === type) {
                        return key;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return null;
        }

        /**
         * @inheritDoc
         *
         * @param {number} key
         *
         * @return {ADMIN_TYPE|ANONYMOUS_TYPE|CUSTOMER_TYPE}
         */
    }, {
        key: 'deserialize',
        value: function deserialize(key, className) {
            var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
            var context = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

            return this._mapping.get(key);
        }

        /**
         * @inheritDoc
         */
    }, {
        key: 'supportsDeserialize',
        value: function supportsDeserialize(data, className) {
            var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            return 'UserType' === className && this._mapping.has(data);
        }
    }]);

    return UserTypeSerializer;
})(_srcSerializerSerializerAware2['default']);

exports['default'] = UserTypeSerializer;
module.exports = exports['default'];