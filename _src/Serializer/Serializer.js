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

var _get = function get(_x7, _x8, _x9) { var _again = true; _function: while (_again) { var object = _x7, property = _x8, receiver = _x9; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x7 = parent; _x8 = property; _x9 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _SerializerAware = require('./SerializerAware');

var _SerializerAware2 = _interopRequireDefault(_SerializerAware);

var _FinderSerializerFinder = require('./../Finder/SerializerFinder');

var _FinderSerializerFinder2 = _interopRequireDefault(_FinderSerializerFinder);

var _SerializerInterface2 = require('./SerializerInterface');

var _SerializerInterface3 = _interopRequireDefault(_SerializerInterface2);

var _ErrorSerializationError = require('./../Error/SerializationError');

var _ErrorSerializationError2 = _interopRequireDefault(_ErrorSerializationError);

var _ErrorInvalidArgumentError = require('./../Error/InvalidArgumentError');

var _ErrorInvalidArgumentError2 = _interopRequireDefault(_ErrorInvalidArgumentError);

/**
 * Default serializer.
 *
 * Meant to aggregate all the application serializers and be used as the main serializer in the application. This means
 * that for serializing a new object, a custom serializer for this one should be done and registered to this serializer.
 *
 * @author Théo FIDRY <theo.fidry@gmail.com>
 */

var Serializer = (function (_SerializerInterface) {
    _inherits(Serializer, _SerializerInterface);

    /**
     * @param {Map.<string,SerializerInterface>} serializers
     * @param {?SerializerFinder}                [serializerFinder=null]
     *
     * @throw InvalidArgumentError
     */

    function Serializer(serializers) {
        var serializerFinder = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        _classCallCheck(this, Serializer);

        _get(Object.getPrototypeOf(Serializer.prototype), 'constructor', this).call(this);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = serializers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var serializer = _step.value;

                if (false === serializer instanceof _SerializerInterface3['default']) {
                    throw new _ErrorInvalidArgumentError2['default']('Expected serializer to implement SerializerInterface. Got ' + serializer.constructor + ' instead');
                }

                if (serializer instanceof _SerializerAware2['default']) {
                    serializer.setSerializer(this);
                }
            }

            /**
             * @type {Map.<string, SerializerInterface>}
             * @private
             */
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

        this._serializers = serializers;

        /**
         * @type {{serializer: SerialiazerFinder}}
         * @private
         */
        this._finders = {
            serializer: serializerFinder === null ? new _FinderSerializerFinder2['default']() : serializerFinder
        };
    }

    /**
     * @inheritDoc
     */

    _createClass(Serializer, [{
        key: 'serialize',
        value: function serialize(data, format, context) {
            var serializer = this._finders.serializer.find(this._serializers.values(), data, format);
            if (null !== serializer) {
                return serializer.serialize(data, format, context);
            }

            throw new _ErrorSerializationError2['default']('An unexpected value could not be serialized: "' + data + '"');
        }

        /**
         * @inheritDoc
         */
    }, {
        key: 'supportsSerialize',
        value: function supportsSerialize(data) {
            var format = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            return null !== this._finders.serializer.find(this._serializers.values(), data, format);
        }

        /**
         * @inheritDoc
         */
    }, {
        key: 'deserialize',
        value: function deserialize(data, className) {
            var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
            var context = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

            var serializer = this._getSerializerForDeserialization(data, className, format);
            if (null !== serializer) {
                return serializer.deserialize(data, className, format, context);
            }

            throw new _ErrorSerializationError2['default']('An unexpected value could not be deserialized: "' + data + '"');
        }

        /**
         * @inheritDocz
         */
    }, {
        key: 'supportsDeserialize',
        value: function supportsDeserialize(data, className) {
            var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            return null !== this._getSerializerForDeserialization(data, className, format);
        }

        /**
         * @param {*}       data          Data to restore
         * @param {string}  className     The expected class to instantiate
         * @param {?string} [format=null] Format the given data was extracted from
         *
         * @return {?SerializerInterface}
         * @protected
         */
    }, {
        key: '_getSerializerForDeserialization',
        value: function _getSerializerForDeserialization(data, className) {
            var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this._serializers.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var serializer = _step2.value;

                    if (true === serializer.supportsDeserialize(data, className, format)) {
                        return serializer;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                        _iterator2['return']();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return null;
        }
    }]);

    return Serializer;
})(_SerializerInterface3['default']);

exports['default'] = Serializer;
module.exports = exports['default'];