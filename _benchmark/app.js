"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
            }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
})({ 1: [function (require, module, exports) {
        /*
         * This file is part of the serializerjs package.
         *
         * (c) HAIRCVT <tfidry@haircvt.com>
         *
         * For the full copyright and license information, please view the LICENSE
         * file that was distributed with this source code.
         */

        'use strict';

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _get = function get(_x2, _x3, _x4) {
            var _again = true;_function: while (_again) {
                var object = _x2,
                    property = _x3,
                    receiver = _x4;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);if (parent === null) {
                        return undefined;
                    } else {
                        _x2 = parent;_x3 = property;_x4 = receiver;_again = true;continue _function;
                    }
                } else if ('value' in desc) {
                    return desc.value;
                } else {
                    var getter = desc.get;if (getter === undefined) {
                        return undefined;
                    }return getter.call(receiver);
                }
            }
        };

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { 'default': obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var _SerializerError2 = require('./SerializerError');

        var _SerializerError3 = _interopRequireDefault(_SerializerError2);

        /**
         * @author Théo FIDRY <theo.fidry@gmail.com>
         */

        var InvalidArgumentError = (function (_SerializerError) {
            _inherits(InvalidArgumentError, _SerializerError);

            /**
             * @param {string} [message='']
             */

            function InvalidArgumentError() {
                var message = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

                _classCallCheck(this, InvalidArgumentError);

                _get(Object.getPrototypeOf(InvalidArgumentError.prototype), 'constructor', this).call(this, message);

                this.name = 'InvalidArgumentError';
            }

            return InvalidArgumentError;
        })(_SerializerError3['default']);

        exports['default'] = InvalidArgumentError;
        module.exports = exports['default'];
    }, { "./SerializerError": 3 }], 2: [function (require, module, exports) {
        /*
         * This file is part of the serializerjs package.
         *
         * (c) HAIRCVT <tfidry@haircvt.com>
         *
         * For the full copyright and license information, please view the LICENSE
         * file that was distributed with this source code.
         */

        'use strict';

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _get = function get(_x2, _x3, _x4) {
            var _again = true;_function: while (_again) {
                var object = _x2,
                    property = _x3,
                    receiver = _x4;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);if (parent === null) {
                        return undefined;
                    } else {
                        _x2 = parent;_x3 = property;_x4 = receiver;_again = true;continue _function;
                    }
                } else if ('value' in desc) {
                    return desc.value;
                } else {
                    var getter = desc.get;if (getter === undefined) {
                        return undefined;
                    }return getter.call(receiver);
                }
            }
        };

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { 'default': obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var _SerializerError2 = require('./SerializerError');

        var _SerializerError3 = _interopRequireDefault(_SerializerError2);

        /**
         * Error thrown upon (de-)serialization process.
         *
         * @author Théo FIDRY <theo.fidry@gmail.com>
         */

        var SerializationError = (function (_SerializerError) {
            _inherits(SerializationError, _SerializerError);

            /**
             * @param {string} [message='']
             */

            function SerializationError() {
                var message = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

                _classCallCheck(this, SerializationError);

                _get(Object.getPrototypeOf(SerializationError.prototype), 'constructor', this).call(this, message);

                this.name = 'SerializationError';
            }

            return SerializationError;
        })(_SerializerError3['default']);

        exports['default'] = SerializationError;
        module.exports = exports['default'];
    }, { "./SerializerError": 3 }], 3: [function (require, module, exports) {
        /*
         * This file is part of the serializerjs package.
         *
         * (c) HAIRCVT <tfidry@haircvt.com>
         *
         * For the full copyright and license information, please view the LICENSE
         * file that was distributed with this source code.
         */

        /**
         * Root error for the serializer.
         *
         * @author Théo FIDRY <theo.fidry@gmail.com>
         */
        'use strict';

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _get = function get(_x2, _x3, _x4) {
            var _again = true;_function: while (_again) {
                var object = _x2,
                    property = _x3,
                    receiver = _x4;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);if (parent === null) {
                        return undefined;
                    } else {
                        _x2 = parent;_x3 = property;_x4 = receiver;_again = true;continue _function;
                    }
                } else if ('value' in desc) {
                    return desc.value;
                } else {
                    var getter = desc.get;if (getter === undefined) {
                        return undefined;
                    }return getter.call(receiver);
                }
            }
        };

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var SerializerError = (function (_Error) {
            _inherits(SerializerError, _Error);

            /**
             * @param {string} [message='']
             */

            function SerializerError() {
                var message = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

                _classCallCheck(this, SerializerError);

                _get(Object.getPrototypeOf(SerializerError.prototype), 'constructor', this).call(this, message);

                this.name = 'SerializerError';
                this.message = message;

                if (Error.hasOwnProperty('captureStackTrace')) {
                    Error.captureStackTrace(this, this.constructor);
                }
            }

            return SerializerError;
        })(Error);

        exports['default'] = SerializerError;
        module.exports = exports['default'];
    }, {}], 4: [function (require, module, exports) {
        /*
         * This file is part of the serializerjs package.
         *
         * (c) HAIRCVT <tfidry@haircvt.com>
         *
         * For the full copyright and license information, please view the LICENSE
         * file that was distributed with this source code.
         */

        'use strict';

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _get = function get(_x2, _x3, _x4) {
            var _again = true;_function: while (_again) {
                var object = _x2,
                    property = _x3,
                    receiver = _x4;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);if (parent === null) {
                        return undefined;
                    } else {
                        _x2 = parent;_x3 = property;_x4 = receiver;_again = true;continue _function;
                    }
                } else if ('value' in desc) {
                    return desc.value;
                } else {
                    var getter = desc.get;if (getter === undefined) {
                        return undefined;
                    }return getter.call(receiver);
                }
            }
        };

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { 'default': obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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
    }, { "./SerializerError": 3 }], 5: [function (require, module, exports) {
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

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        })();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        var SerializerFinder = (function () {
            function SerializerFinder() {
                _classCallCheck(this, SerializerFinder);

                this._cache = {};

                this._currentKey = null;
            }

            /**
             * @param {SerializerInterface[]} serializers
             * @param {*}                     data          Any data
             * @param {?string}               [format=null] Format the normalization result will be encoded as
             *
             * @return {?SerializerInterface}
             */

            _createClass(SerializerFinder, [{
                key: 'find',
                value: function find(serializers, data) {
                    var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

                    var key = this._getKey(data, format);
                    if (this._has(key)) {
                        console.log('hit!');

                        return this._get(key);
                    }

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = serializers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var serializer = _step.value;

                            if (true === serializer.supportsSerialize(data, format)) {
                                console.log('miss :(');
                                this._push(key, serializer);

                                return serializer;
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
            }, {
                key: '_get',
                value: function _get(key) {
                    return this._cache[key];
                }
            }, {
                key: '_has',
                value: function _has(key) {
                    return undefined !== this._cache[key];
                }
            }, {
                key: '_push',
                value: function _push(key, value) {
                    this._cache[key] = value;
                }
            }, {
                key: '_getKey',
                value: function _getKey(data, format) {
                    return JSON.stringify([data, format]);
                }
            }]);

            return SerializerFinder;
        })();

        exports['default'] = SerializerFinder;
        module.exports = exports['default'];
    }, {}], 6: [function (require, module, exports) {
        /*
         * This file is part of the serializerjs package.
         *
         * (c) HAIRCVT <tfidry@haircvt.com>
         *
         * For the full copyright and license information, please view the LICENSE
         * file that was distributed with this source code.
         */

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        })();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var SerializerFinder = (function () {
            function SerializerFinder() {
                _classCallCheck(this, SerializerFinder);
            }

            _createClass(SerializerFinder, [{
                key: "find",

                /**
                 * @param {SerializerInterface[]} serializers
                 * @param {*}                     data          Any data
                 * @param {?string}               [format=null] Format the normalization result will be encoded as
                 *
                 * @return {?SerializerInterface}
                 */
                value: function find(serializers, data) {
                    var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = serializers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var serializer = _step.value;

                            if (true === serializer.supportsSerialize(data, format)) {
                                return serializer;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator["return"]) {
                                _iterator["return"]();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    return null;
                }
            }]);

            return SerializerFinder;
        })();

        exports["default"] = SerializerFinder;
        module.exports = exports["default"];
    }, {}], 7: [function (require, module, exports) {
        /*
         * This file is part of the serializerjs package.
         *
         * (c) HAIRCVT <tfidry@haircvt.com>
         *
         * For the full copyright and license information, please view the LICENSE
         * file that was distributed with this source code.
         */

        'use strict';

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        })();

        var _get = function get(_x5, _x6, _x7) {
            var _again = true;_function: while (_again) {
                var object = _x5,
                    property = _x6,
                    receiver = _x7;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);if (parent === null) {
                        return undefined;
                    } else {
                        _x5 = parent;_x6 = property;_x7 = receiver;_again = true;continue _function;
                    }
                } else if ('value' in desc) {
                    return desc.value;
                } else {
                    var getter = desc.get;if (getter === undefined) {
                        return undefined;
                    }return getter.call(receiver);
                }
            }
        };

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { 'default': obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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
    }, { "./SerializerAware": 9 }], 8: [function (require, module, exports) {
        /*
         * This file is part of the serializerjs package.
         *
         * (c) HAIRCVT <tfidry@haircvt.com>
         *
         * For the full copyright and license information, please view the LICENSE
         * file that was distributed with this source code.
         */

        'use strict';

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        })();

        var _get = function get(_x7, _x8, _x9) {
            var _again = true;_function: while (_again) {
                var object = _x7,
                    property = _x8,
                    receiver = _x9;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);if (parent === null) {
                        return undefined;
                    } else {
                        _x7 = parent;_x8 = property;_x9 = receiver;_again = true;continue _function;
                    }
                } else if ('value' in desc) {
                    return desc.value;
                } else {
                    var getter = desc.get;if (getter === undefined) {
                        return undefined;
                    }return getter.call(receiver);
                }
            }
        };

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { 'default': obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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
    }, { "./../Error/InvalidArgumentError": 1, "./../Error/SerializationError": 2, "./../Finder/SerializerFinder": 6, "./SerializerAware": 9, "./SerializerInterface": 10 }], 9: [function (require, module, exports) {
        /*
         * This file is part of the serializerjs package.
         *
         * (c) HAIRCVT <tfidry@haircvt.com>
         *
         * For the full copyright and license information, please view the LICENSE
         * file that was distributed with this source code.
         */

        'use strict';

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        })();

        var _get = function get(_x, _x2, _x3) {
            var _again = true;_function: while (_again) {
                var object = _x,
                    property = _x2,
                    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);if (parent === null) {
                        return undefined;
                    } else {
                        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
                    }
                } else if ('value' in desc) {
                    return desc.value;
                } else {
                    var getter = desc.get;if (getter === undefined) {
                        return undefined;
                    }return getter.call(receiver);
                }
            }
        };

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { 'default': obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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
    }, { "./SerializerInterface": 10 }], 10: [function (require, module, exports) {
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

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        })();

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { 'default': obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        var _ErrorSerializationError = require('./../Error/SerializationError');

        var _ErrorSerializationError2 = _interopRequireDefault(_ErrorSerializationError);

        var _ErrorUnimplementedMethodError = require('./../Error/UnimplementedMethodError');

        var _ErrorUnimplementedMethodError2 = _interopRequireDefault(_ErrorUnimplementedMethodError);

        /**
         * A serializer is responsible for transforming a data in a specific format into a data in another format.
         *
         * For example, the serializer can be used to map client-side models and back-end side objects by checking all the
         * properties of a model to generate an object for which the values are understandable for the back-end service.
         *
         * +--------+ ----- serialize -----> +----------+
         * | Client |                        | Back-End |
         * +--------+ <---- deserialize ---- +----------+
         *
         * Note that JavaScript does not support interfaces per se. By "Interface" is meant that this class should not implement
         * any method but provide the skeleton for child classes instead.
         *
         * @interface
         * @author Théo FIDRY <theo.fidry@gmail.com>
         */

        var SerializerInterface = (function () {
            function SerializerInterface() {
                _classCallCheck(this, SerializerInterface);
            }

            _createClass(SerializerInterface, [{
                key: 'serialize',

                /**
                 * Serializes any data object into and object usable for the backend service.
                 *
                 * @param {*}      data           Any data
                 * @param {string} format         Format the normalization result will be encoded as
                 * @param {*}      [context=null] Options serializers have access to
                 *
                 * @return {*}
                 * @throw SerializationError
                 */
                value: function serialize(data, format) {
                    var context = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

                    throw new _ErrorUnimplementedMethodError2['default']('Unimplemented "serialize()" method');
                }

                /**
                 * Checks whether the given class is supported for serialization by this serializer.
                 *
                 * @param {*}      data          Any data
                 * @param {string} [format=null] Format the normalization result will be encoded as
                 *
                 * @return {boolean}
                 */
            }, {
                key: 'supportsSerialize',
                value: function supportsSerialize(data) {
                    var format = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

                    throw new _ErrorUnimplementedMethodError2['default']('Unimplemented "supportsSerialize()" method');
                }

                /**
                 * Deserializes data back into an object of the given class.
                 *
                 * @param {*}       data             Data to restore
                 * @param {string}  className        The expected class to instantiate
                 * @param {?string} [format=null]    Format the given data was extracted from
                 * @param {*}       [context=null]   Options available to the deserializer
                 *
                 * @return {*}
                 * @throw SerializationError
                 */
            }, {
                key: 'deserialize',
                value: function deserialize(data, className) {
                    var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
                    var context = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

                    throw new _ErrorUnimplementedMethodError2['default']('Unimplemented "deserialize()" method');
                }

                /**
                 * Checks whether the given class is supported for deserialization by this serializer.
                 *
                 * @param {*}       data          Data to restore
                 * @param {string}  className     The expected class to instantiate
                 * @param {?string} [format=null] Format the given data was extracted from
                 *
                 * @return {boolean}
                 */
            }, {
                key: 'supportsDeserialize',
                value: function supportsDeserialize(data, className) {
                    var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

                    throw new _ErrorUnimplementedMethodError2['default']('Unimplemented "supportsDeserialize()" method');
                }
            }]);

            return SerializerInterface;
        })();

        exports['default'] = SerializerInterface;
        module.exports = exports['default'];
    }, { "./../Error/SerializationError": 2, "./../Error/UnimplementedMethodError": 4 }], 11: [function (require, module, exports) {
        'use strict';

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        })();

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _SerializerAware2 = require('./../../_src/Serializer/SerializerAware');

        var _SerializerAware3 = _interopRequireDefault(_SerializerAware2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { "default": obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } /*
           * This file is part of the serializerjs package.
           *
           * (c) HAIRCVT <tfidry@haircvt.com>
           *
           * For the full copyright and license information, please view the LICENSE
           * file that was distributed with this source code.
           */

        var BooleanSerializer = (function (_SerializerAware) {
            _inherits(BooleanSerializer, _SerializerAware);

            function BooleanSerializer() {
                _classCallCheck(this, BooleanSerializer);

                return _possibleConstructorReturn(this, Object.getPrototypeOf(BooleanSerializer).apply(this, arguments));
            }

            _createClass(BooleanSerializer, [{
                key: 'serialize',

                /**
                 * @inheritDoc
                 *
                 * @param {?boolean} booleanValue
                 * @param {string|*} context
                 *
                 * @return {boolean|number|null}
                 */
                value: function serialize(booleanValue, format, context) {
                    if ('oldApi' === context) {
                        return Number(booleanValue);
                    }

                    return booleanValue;
                }

                /**
                 * @inheritDoc
                 */

            }, {
                key: 'supportsSerialize',
                value: function supportsSerialize(data) {
                    var format = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

                    return 'boolean' === typeof data || null === data;
                }

                /**
                 * @inheritDoc
                 *
                 * @param {number|boolean|null} data
                 *
                 * @return {boolean}
                 */

            }, {
                key: 'deserialize',
                value: function deserialize(data, className) {
                    var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
                    var context = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

                    if ('boolean' === typeof data || null === data) {
                        return data;
                    }

                    return Boolean(data);
                }

                /**
                 * @inheritDoc
                 */

            }, {
                key: 'supportsDeserialize',
                value: function supportsDeserialize(data, className) {
                    var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

                    if ('boolean' !== className) {
                        return false;
                    }

                    if ('boolean' === typeof data || null === data) {
                        return true;
                    }

                    if (0 === data || 1 === data) {
                        return true;
                    }

                    return false;
                }
            }]);

            return BooleanSerializer;
        })(_SerializerAware3["default"]);

        exports["default"] = BooleanSerializer;
    }, { "./../../_src/Serializer/SerializerAware": 9 }], 12: [function (require, module, exports) {
        'use strict';

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        })();

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _AbstractSerializer2 = require('./../../_src/Serializer/AbstractSerializer');

        var _AbstractSerializer3 = _interopRequireDefault(_AbstractSerializer2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { "default": obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } /*
           * This file is part of the serializerjs package.
           *
           * (c) HAIRCVT <tfidry@haircvt.com>
           *
           * For the full copyright and license information, please view the LICENSE
           * file that was distributed with this source code.
           */

        /* eslint no-unused-vars: 0 */

        var StringSerializer = (function (_AbstractSerializer) {
            _inherits(StringSerializer, _AbstractSerializer);

            function StringSerializer() {
                _classCallCheck(this, StringSerializer);

                return _possibleConstructorReturn(this, Object.getPrototypeOf(StringSerializer).apply(this, arguments));
            }

            _createClass(StringSerializer, [{
                key: 'supportsDeserialize',

                /**
                 * @inheritDoc
                 */
                value: function supportsDeserialize(data, className) {
                    var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

                    return 'string' === className && ('string' === typeof data || null === data);
                }
            }]);

            return StringSerializer;
        })(_AbstractSerializer3["default"]);

        exports["default"] = StringSerializer;
    }, { "./../../_src/Serializer/AbstractSerializer": 7 }], 13: [function (require, module, exports) {
        'use strict';

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        })(); /*
               * This file is part of the serializerjs package.
               *
               * (c) HAIRCVT <tfidry@haircvt.com>
               *
               * For the full copyright and license information, please view the LICENSE
               * file that was distributed with this source code.
               */

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _UserType = require('./UserType');

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var User = (function () {
            /**
             * @param {string}   firstname
             * @param {string}   lastname
             * @param {string}   type      {@see Type}
             * @param {?boolean} gender    True for female, false for male and null for unknown
             */

            function User(firstname, lastname, type, gender) {
                _classCallCheck(this, User);

                this.firstname = firstname;
                this.lastname = lastname;
                this._type = type;
                this._gender = gender;
            }

            _createClass(User, [{
                key: 'getFullname',
                value: function getFullname() {
                    return this.firstname + ' ' + this.lastname;
                }
            }, {
                key: 'isAnonymous',
                value: function isAnonymous() {
                    return _UserType.ANONYMOUS_TYPE === this._type;
                }
            }, {
                key: 'isCustomer',
                value: function isCustomer() {
                    return _UserType.CUSTOMER_TYPE === this._type;
                }
            }, {
                key: 'isAdmin',
                value: function isAdmin() {
                    return _UserType.ADMIN_TYPE === this._type;
                }
            }, {
                key: 'isMale',
                value: function isMale() {
                    return false === this._gender;
                }
            }, {
                key: 'isFemale',
                value: function isFemale() {
                    return true === this._gender;
                }
            }, {
                key: 'genderIsKnown',
                value: function genderIsKnown() {
                    return null === this._gender;
                }
            }]);

            return User;
        })();

        exports["default"] = User;
    }, { "./UserType": 15 }], 14: [function (require, module, exports) {
        'use strict';

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        })();

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _SerializerAware = require('./../../_src/Serializer/SerializerAware');

        var _SerializerAware2 = _interopRequireDefault(_SerializerAware);

        var _User = require('./User');

        var _User2 = _interopRequireDefault(_User);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { "default": obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } /*
           * This file is part of the serializerjs package.
           *
           * (c) HAIRCVT <tfidry@haircvt.com>
           *
           * For the full copyright and license information, please view the LICENSE
           * file that was distributed with this source code.
           */

        var UserSerializer = (function (_SerializerAwareInter) {
            _inherits(UserSerializer, _SerializerAwareInter);

            function UserSerializer() {
                _classCallCheck(this, UserSerializer);

                return _possibleConstructorReturn(this, Object.getPrototypeOf(UserSerializer).apply(this, arguments));
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

                    return 'object' === (typeof data === 'undefined' ? 'undefined' : _typeof(data)) && null !== data && data instanceof _User2["default"];
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

                    return new _User2["default"](firstname, lastname, type, gender);
                }

                /**
                 * @inheritDoc
                 */

            }, {
                key: 'supportsDeserialize',
                value: function supportsDeserialize(data, className) {
                    var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

                    return 'User' === className && 'object' === (typeof data === 'undefined' ? 'undefined' : _typeof(data)) && null !== data;
                }
            }]);

            return UserSerializer;
        })(_SerializerAware2["default"]);

        exports["default"] = UserSerializer;
    }, { "./../../_src/Serializer/SerializerAware": 9, "./User": 13 }], 15: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        /*
         * This file is part of the serializerjs package.
         *
         * (c) HAIRCVT <tfidry@haircvt.com>
         *
         * For the full copyright and license information, please view the LICENSE
         * file that was distributed with this source code.
         */

        var ANONYMOUS_TYPE = exports.ANONYMOUS_TYPE = 'ANONYMOUS_TYPE';
        var CUSTOMER_TYPE = exports.CUSTOMER_TYPE = 'CUSTOMER_TYPE';
        var ADMIN_TYPE = exports.ADMIN_TYPE = 'ADMIN_TYPE';
    }, {}], 16: [function (require, module, exports) {
        'use strict';

        var _slicedToArray = (function () {
            function sliceIterator(arr, i) {
                var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;_e = err;
                } finally {
                    try {
                        if (!_n && _i["return"]) _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }return _arr;
            }return function (arr, i) {
                if (Array.isArray(arr)) {
                    return arr;
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                } else {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
            };
        })();

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        })();

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _SerializerAware2 = require('./../../_src/Serializer/SerializerAware');

        var _SerializerAware3 = _interopRequireDefault(_SerializerAware2);

        var _UserType = require('./UserType');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { "default": obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        } /*
           * This file is part of the serializerjs package.
           *
           * (c) HAIRCVT <tfidry@haircvt.com>
           *
           * For the full copyright and license information, please view the LICENSE
           * file that was distributed with this source code.
           */

        var UserTypeSerializer = (function (_SerializerAware) {
            _inherits(UserTypeSerializer, _SerializerAware);

            function UserTypeSerializer() {
                _classCallCheck(this, UserTypeSerializer);

                /**
                 * @type {Map.<number, string>} Key and value as respectively the raw and deserialized value
                 * @private
                 */

                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserTypeSerializer).call(this));

                _this._mapping = new Map([[0, _UserType.ADMIN_TYPE], [1, _UserType.ANONYMOUS_TYPE], [2, _UserType.CUSTOMER_TYPE]]);
                return _this;
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
                            if (!_iteratorNormalCompletion && _iterator["return"]) {
                                _iterator["return"]();
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
        })(_SerializerAware3["default"]);

        exports["default"] = UserTypeSerializer;
    }, { "./../../_src/Serializer/SerializerAware": 9, "./UserType": 15 }], 17: [function (require, module, exports) {
        'use strict';

        var _CacheSerializerFinder = require('./../../_src/Finder/CacheSerializerFinder');

        var _CacheSerializerFinder2 = _interopRequireDefault(_CacheSerializerFinder);

        var _SerializerFinder = require('./../../_src/Finder/SerializerFinder');

        var _SerializerFinder2 = _interopRequireDefault(_SerializerFinder);

        var _BooleanSerializer = require('./BooleanSerializer');

        var _BooleanSerializer2 = _interopRequireDefault(_BooleanSerializer);

        var _Serializer = require('./../../_src/Serializer/Serializer');

        var _Serializer2 = _interopRequireDefault(_Serializer);

        var _StringSerializer = require('./StringSerializer');

        var _StringSerializer2 = _interopRequireDefault(_StringSerializer);

        var _UserTypeSerializer = require('./UserTypeSerializer');

        var _UserTypeSerializer2 = _interopRequireDefault(_UserTypeSerializer);

        var _UserSerializer = require('./UserSerializer');

        var _UserSerializer2 = _interopRequireDefault(_UserSerializer);

        var _User = require('./User');

        var _User2 = _interopRequireDefault(_User);

        var _UserType = require('./UserType');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { "default": obj };
        }

        //import fs from 'fs';
        //import profiler from 'v8-profiler';

        var booleanSerializer = new _BooleanSerializer2["default"](); /*
                                                                       * This file is part of the serializerjs package.
                                                                       *
                                                                       * (c) HAIRCVT <tfidry@haircvt.com>
                                                                       *
                                                                       * For the full copyright and license information, please view the LICENSE
                                                                       * file that was distributed with this source code.
                                                                       */

        var stringSerializer = new _StringSerializer2["default"]();
        var typeSerializer = new _UserTypeSerializer2["default"]();
        var userSerializer = new _UserSerializer2["default"]();

        var serializer = new _Serializer2["default"](new Map([['BooleanSerializer', booleanSerializer], ['StringSerializer', stringSerializer], ['UserTypeSerializer', typeSerializer], ['UserSerializer', userSerializer]]), new _CacheSerializerFinder2["default"]());

        var rawUser = {
            firstname: 'John',
            lastname: 'Doe',
            gender: true,
            type: 0
        };

        var user = new _User2["default"]('John', 'Doe', _UserType.ADMIN_TYPE, true);
        var N = 100000;
        var i;
        var users = [];

        //profiler.startProfiling('Profile', true);
        window.serialize = function () {
            for (i = 0; i < N; i++) {
                users.push(serializer.serialize(user, null, { index: i }));
            }
        };
        //const profile1 = profiler.stopProfiling();
        //profile1.export(function(error, result) {
        //    fs.writeFileSync('profile1.json', result);
        //    profile1.delete();
        //});
    }, { "./../../_src/Finder/CacheSerializerFinder": 5, "./../../_src/Finder/SerializerFinder": 6, "./../../_src/Serializer/Serializer": 8, "./BooleanSerializer": 11, "./StringSerializer": 12, "./User": 13, "./UserSerializer": 14, "./UserType": 15, "./UserTypeSerializer": 16 }] }, {}, [17]);