(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

var InvalidArgumentError = function (_SerializerError) {
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
}(_SerializerError3['default']);

exports['default'] = InvalidArgumentError;
module.exports = exports['default'];

},{"./SerializerError":3}],2:[function(require,module,exports){
/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

var SerializationError = function (_SerializerError) {
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
}(_SerializerError3['default']);

exports['default'] = SerializationError;
module.exports = exports['default'];

},{"./SerializerError":3}],3:[function(require,module,exports){
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

var SerializerError = function (_Error) {
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
}(Error);

exports['default'] = SerializerError;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

var UnimplementedSerializerMethodError = function (_SerializerError) {
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
}(_SerializerError3['default']);

exports['default'] = UnimplementedSerializerMethodError;
module.exports = exports['default'];

},{"./SerializerError":3}],5:[function(require,module,exports){
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

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var SerializerFinder = function () {
    function SerializerFinder() {
        _classCallCheck(this, SerializerFinder);

        this._cache = {};
    }

    /**
     * @param {SerializerInterface[]} serializers
     * @param {*}                     data          Any data
     * @param {?string}               [format=null] Format the normalization result will be encoded as
     *
     * @return {?SerializerInterface}
     */

    _createClass(SerializerFinder, [{
        key: "find",
        value: function find(serializers, data) {
            var format = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            var cacheEntry = new CacheEntry(this._cache, data, format);
            if (cacheEntry.has()) {
                return cacheEntry.get();
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = serializers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var serializer = _step.value;

                    if (true === serializer.supportsSerialize(data, format)) {
                        cacheEntry.push();

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
}();

exports["default"] = SerializerFinder;

var CacheEntry = function () {
    function CacheEntry(cache, data, format) {
        _classCallCheck(this, CacheEntry);

        this._cache = cache;
        this._key = JSON.stringify([data, format]);
    }

    _createClass(CacheEntry, [{
        key: "get",
        value: function get() {
            return this._cache[this._key];
        }
    }, {
        key: "has",
        value: function has() {
            return undefined !== this._cache[this._key];
        }
    }, {
        key: "push",
        value: function push(value) {
            this._cache[this._key] = value;
        }
    }]);

    return CacheEntry;
}();

module.exports = exports["default"];

},{}],6:[function(require,module,exports){
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

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var SerializerFinder = function () {
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
}();

exports["default"] = SerializerFinder;
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

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

var AbstractSerializer = function (_SerializerAware) {
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
}(_SerializerAware3['default']);

exports['default'] = AbstractSerializer;
module.exports = exports['default'];

},{"./SerializerAware":9}],8:[function(require,module,exports){
/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

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

var Serializer = function (_SerializerInterface) {
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
}(_SerializerInterface3['default']);

exports['default'] = Serializer;
module.exports = exports['default'];

},{"./../Error/InvalidArgumentError":1,"./../Error/SerializationError":2,"./../Finder/SerializerFinder":6,"./SerializerAware":9,"./SerializerInterface":10}],9:[function(require,module,exports){
/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

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

var SerializerAware = function (_SerializerInterface) {
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
}(_SerializerInterface3['default']);

exports['default'] = SerializerAware;
module.exports = exports['default'];

},{"./SerializerInterface":10}],10:[function(require,module,exports){
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

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

var SerializerInterface = function () {
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
}();

exports['default'] = SerializerInterface;
module.exports = exports['default'];

},{"./../Error/SerializationError":2,"./../Error/UnimplementedMethodError":4}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SerializerAware2 = require('./../../_src/Serializer/SerializerAware');

var _SerializerAware3 = _interopRequireDefault(_SerializerAware2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of the serializerjs package.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * (c) HAIRCVT <tfidry@haircvt.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * For the full copyright and license information, please view the LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file that was distributed with this source code.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BooleanSerializer = function (_SerializerAware) {
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
}(_SerializerAware3.default);

exports.default = BooleanSerializer;

},{"./../../_src/Serializer/SerializerAware":9}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractSerializer2 = require('./../../_src/Serializer/AbstractSerializer');

var _AbstractSerializer3 = _interopRequireDefault(_AbstractSerializer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of the serializerjs package.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * (c) HAIRCVT <tfidry@haircvt.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * For the full copyright and license information, please view the LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file that was distributed with this source code.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint no-unused-vars: 0 */

var StringSerializer = function (_AbstractSerializer) {
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
}(_AbstractSerializer3.default);

exports.default = StringSerializer;

},{"./../../_src/Serializer/AbstractSerializer":7}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
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
}();

exports.default = User;

},{"./UserType":15}],14:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SerializerAware = require('./../../_src/Serializer/SerializerAware');

var _SerializerAware2 = _interopRequireDefault(_SerializerAware);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of the serializerjs package.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * (c) HAIRCVT <tfidry@haircvt.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * For the full copyright and license information, please view the LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file that was distributed with this source code.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var UserSerializer = function (_SerializerAwareInter) {
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

            return 'object' === (typeof data === 'undefined' ? 'undefined' : _typeof(data)) && null !== data && data instanceof _User2.default;
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

            return new _User2.default(firstname, lastname, type, gender);
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
}(_SerializerAware2.default);

exports.default = UserSerializer;

},{"./../../_src/Serializer/SerializerAware":9,"./User":13}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SerializerAware2 = require('./../../_src/Serializer/SerializerAware');

var _SerializerAware3 = _interopRequireDefault(_SerializerAware2);

var _UserType = require('./UserType');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of the serializerjs package.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * (c) HAIRCVT <tfidry@haircvt.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * For the full copyright and license information, please view the LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file that was distributed with this source code.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var UserTypeSerializer = function (_SerializerAware) {
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
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
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
}(_SerializerAware3.default);

exports.default = UserTypeSerializer;

},{"./../../_src/Serializer/SerializerAware":9,"./UserType":15}],17:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import fs from 'fs';
//import profiler from 'v8-profiler';

var booleanSerializer = new _BooleanSerializer2.default(); /*
                                                            * This file is part of the serializerjs package.
                                                            *
                                                            * (c) HAIRCVT <tfidry@haircvt.com>
                                                            *
                                                            * For the full copyright and license information, please view the LICENSE
                                                            * file that was distributed with this source code.
                                                            */

var stringSerializer = new _StringSerializer2.default();
var typeSerializer = new _UserTypeSerializer2.default();
var userSerializer = new _UserSerializer2.default();

var serializer = new _Serializer2.default(new Map([['BooleanSerializer', booleanSerializer], ['StringSerializer', stringSerializer], ['UserTypeSerializer', typeSerializer], ['UserSerializer', userSerializer]]), new _CacheSerializerFinder2.default());

var rawUser = {
    firstname: 'John',
    lastname: 'Doe',
    gender: true,
    type: 0
};

var user = new _User2.default('John', 'Doe', _UserType.ADMIN_TYPE, true);
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

},{"./../../_src/Finder/CacheSerializerFinder":5,"./../../_src/Finder/SerializerFinder":6,"./../../_src/Serializer/Serializer":8,"./BooleanSerializer":11,"./StringSerializer":12,"./User":13,"./UserSerializer":14,"./UserType":15,"./UserTypeSerializer":16}]},{},[17])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92NS40LjEvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc3JjL0Vycm9yL0ludmFsaWRBcmd1bWVudEVycm9yLmpzIiwiX3NyYy9FcnJvci9TZXJpYWxpemF0aW9uRXJyb3IuanMiLCJfc3JjL0Vycm9yL1NlcmlhbGl6ZXJFcnJvci5qcyIsIl9zcmMvRXJyb3IvVW5pbXBsZW1lbnRlZE1ldGhvZEVycm9yLmpzIiwiX3NyYy9GaW5kZXIvQ2FjaGVTZXJpYWxpemVyRmluZGVyLmpzIiwiX3NyYy9GaW5kZXIvU2VyaWFsaXplckZpbmRlci5qcyIsIl9zcmMvU2VyaWFsaXplci9BYnN0cmFjdFNlcmlhbGl6ZXIuanMiLCJfc3JjL1NlcmlhbGl6ZXIvU2VyaWFsaXplci5qcyIsIl9zcmMvU2VyaWFsaXplci9TZXJpYWxpemVyQXdhcmUuanMiLCJfc3JjL1NlcmlhbGl6ZXIvU2VyaWFsaXplckludGVyZmFjZS5qcyIsImJlbmNobWFyay9GaXh0dXJlcy9Cb29sZWFuU2VyaWFsaXplci5qcyIsImJlbmNobWFyay9GaXh0dXJlcy9TdHJpbmdTZXJpYWxpemVyLmpzIiwiYmVuY2htYXJrL0ZpeHR1cmVzL1VzZXIuanMiLCJiZW5jaG1hcmsvRml4dHVyZXMvVXNlclNlcmlhbGl6ZXIuanMiLCJiZW5jaG1hcmsvRml4dHVyZXMvVXNlclR5cGUuanMiLCJiZW5jaG1hcmsvRml4dHVyZXMvVXNlclR5cGVTZXJpYWxpemVyLmpzIiwiYmVuY2htYXJrL0ZpeHR1cmVzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQ1NBOzs7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU8sSUFBUDtDQURGOztBQUlBLElBQUksT0FBTyxTQUFTLEdBQVQsQ0FBYSxHQUFiLEVB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eUJBQ2YsSUFBSSxHQUFKLENBQVEsQ0FDSixDQUFDLG1CQUFELEVBQXNCLGlCQUF0QixDQURJLEVBRUosQ0FBQyxrQkFBRCxFQUFxQixnQkFBckIsQ0FGSSxFQUdKLENBQUMsb0JBQUQsRUFBdUIsY0FBdkIsQ0FISSxFQUlKLENBQUMsZ0JBQUQsRUFBbUIsY0FBbkIsQ0FKSSxDQUFSLENBRGUsRUFPZixxQ0FQZSxDQUFiOztBQVVOLElBQU0sVUFBVTtBQUNaLGVBQVcsTUFBWDtBQUNBLGNBQVUsS0FBVjtBQUNBLFlBQVEsSUFBUjtBQUNBLFVBQU0sQ0FBTjtDQUpFOztBQU9OLElBQU0sT0FBTyxtQkFBUyxNQUFULEVBQWlCLEtBQWpCLHdCQUFvQyxJQUFwQyxDQUFQO0FBQ04sSUFBTSxJQUFJLE1BQUo7QUFDTixJQUFJLENBQUo7QUFDQSxJQUFNLFFBQVEsRUFBUjs7O0FBR04sT0FBTyxTQUFQLEdBQW1CLFlBQVc7QUFDMUIsU0FBSyxJQUFJLENBQUosRUFBTyxJQUFJLENBQUosRUFBTyxHQUFuQixFQUF3QjtBQUNwQixjQUFNLElBQU4sQ0FBVyxXQUFXLFNBQVgsQ0FBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsRUFBQyxPQUFPLENBQVAsRUFBbEMsQ0FBWCxFQURvQjtLQUF4QjtDQURlIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgc2VyaWFsaXplcmpzIHBhY2thZ2UuXG4gKlxuICogKGMpIEhBSVJDVlQgPHRmaWRyeUBoYWlyY3Z0LmNvbT5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gyLCBfeDMsIF94NCkgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeDIsIHByb3BlcnR5ID0gX3gzLCByZWNlaXZlciA9IF94NDsgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeDIgPSBwYXJlbnQ7IF94MyA9IHByb3BlcnR5OyBfeDQgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX1NlcmlhbGl6ZXJFcnJvcjIgPSByZXF1aXJlKCcuL1NlcmlhbGl6ZXJFcnJvcicpO1xuXG52YXIgX1NlcmlhbGl6ZXJFcnJvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TZXJpYWxpemVyRXJyb3IyKTtcblxuLyoqXG4gKiBAYXV0aG9yIFRow6lvIEZJRFJZIDx0aGVvLmZpZHJ5QGdtYWlsLmNvbT5cbiAqL1xuXG52YXIgSW52YWxpZEFyZ3VtZW50RXJyb3IgPSAoZnVuY3Rpb24gKF9TZXJpYWxpemVyRXJyb3IpIHtcbiAgX2luaGVyaXRzKEludmFsaWRBcmd1bWVudEVycm9yLCBfU2VyaWFsaXplckVycm9yKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlPScnXVxuICAgKi9cblxuICBmdW5jdGlvbiBJbnZhbGlkQXJndW1lbnRFcnJvcigpIHtcbiAgICB2YXIgbWVzc2FnZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/ICcnIDogYXJndW1lbnRzWzBdO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEludmFsaWRBcmd1bWVudEVycm9yKTtcblxuICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKEludmFsaWRBcmd1bWVudEVycm9yLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgICB0aGlzLm5hbWUgPSAnSW52YWxpZEFyZ3VtZW50RXJyb3InO1xuICB9XG5cbiAgcmV0dXJuIEludmFsaWRBcmd1bWVudEVycm9yO1xufSkoX1NlcmlhbGl6ZXJFcnJvcjNbJ2RlZmF1bHQnXSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEludmFsaWRBcmd1bWVudEVycm9yO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBzZXJpYWxpemVyanMgcGFja2FnZS5cbiAqXG4gKiAoYykgSEFJUkNWVCA8dGZpZHJ5QGhhaXJjdnQuY29tPlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeDIsIF94MywgX3g0KSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94MiwgcHJvcGVydHkgPSBfeDMsIHJlY2VpdmVyID0gX3g0OyBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94MiA9IHBhcmVudDsgX3gzID0gcHJvcGVydHk7IF94NCA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfU2VyaWFsaXplckVycm9yMiA9IHJlcXVpcmUoJy4vU2VyaWFsaXplckVycm9yJyk7XG5cbnZhciBfU2VyaWFsaXplckVycm9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlcmlhbGl6ZXJFcnJvcjIpO1xuXG4vKipcbiAqIEVycm9yIHRocm93biB1cG9uIChkZS0pc2VyaWFsaXphdGlvbiBwcm9jZXNzLlxuICpcbiAqIEBhdXRob3IgVGjDqW8gRklEUlkgPHRoZW8uZmlkcnlAZ21haWwuY29tPlxuICovXG5cbnZhciBTZXJpYWxpemF0aW9uRXJyb3IgPSAoZnVuY3Rpb24gKF9TZXJpYWxpemVyRXJyb3IpIHtcbiAgX2luaGVyaXRzKFNlcmlhbGl6YXRpb25FcnJvciwgX1NlcmlhbGl6ZXJFcnJvcik7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZT0nJ11cbiAgICovXG5cbiAgZnVuY3Rpb24gU2VyaWFsaXphdGlvbkVycm9yKCkge1xuICAgIHZhciBtZXNzYWdlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJycgOiBhcmd1bWVudHNbMF07XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VyaWFsaXphdGlvbkVycm9yKTtcblxuICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKFNlcmlhbGl6YXRpb25FcnJvci5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gICAgdGhpcy5uYW1lID0gJ1NlcmlhbGl6YXRpb25FcnJvcic7XG4gIH1cblxuICByZXR1cm4gU2VyaWFsaXphdGlvbkVycm9yO1xufSkoX1NlcmlhbGl6ZXJFcnJvcjNbJ2RlZmF1bHQnXSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNlcmlhbGl6YXRpb25FcnJvcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgc2VyaWFsaXplcmpzIHBhY2thZ2UuXG4gKlxuICogKGMpIEhBSVJDVlQgPHRmaWRyeUBoYWlyY3Z0LmNvbT5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyoqXG4gKiBSb290IGVycm9yIGZvciB0aGUgc2VyaWFsaXplci5cbiAqXG4gKiBAYXV0aG9yIFRow6lvIEZJRFJZIDx0aGVvLmZpZHJ5QGdtYWlsLmNvbT5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gyLCBfeDMsIF94NCkgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeDIsIHByb3BlcnR5ID0gX3gzLCByZWNlaXZlciA9IF94NDsgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeDIgPSBwYXJlbnQ7IF94MyA9IHByb3BlcnR5OyBfeDQgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNlcmlhbGl6ZXJFcnJvciA9IChmdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0cyhTZXJpYWxpemVyRXJyb3IsIF9FcnJvcik7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZT0nJ11cbiAgICovXG5cbiAgZnVuY3Rpb24gU2VyaWFsaXplckVycm9yKCkge1xuICAgIHZhciBtZXNzYWdlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJycgOiBhcmd1bWVudHNbMF07XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VyaWFsaXplckVycm9yKTtcblxuICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKFNlcmlhbGl6ZXJFcnJvci5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gICAgdGhpcy5uYW1lID0gJ1NlcmlhbGl6ZXJFcnJvcic7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblxuICAgIGlmIChFcnJvci5oYXNPd25Qcm9wZXJ0eSgnY2FwdHVyZVN0YWNrVHJhY2UnKSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFNlcmlhbGl6ZXJFcnJvcjtcbn0pKEVycm9yKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU2VyaWFsaXplckVycm9yO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBzZXJpYWxpemVyanMgcGFja2FnZS5cbiAqXG4gKiAoYykgSEFJUkNWVCA8dGZpZHJ5QGhhaXJjdnQuY29tPlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeDIsIF94MywgX3g0KSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94MiwgcHJvcGVydHkgPSBfeDMsIHJlY2VpdmVyID0gX3g0OyBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94MiA9IHBhcmVudDsgX3gzID0gcHJvcGVydHk7IF94NCA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfU2VyaWFsaXplckVycm9yMiA9IHJlcXVpcmUoJy4vU2VyaWFsaXplckVycm9yJyk7XG5cbnZhciBfU2VyaWFsaXplckVycm9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlcmlhbGl6ZXJFcnJvcjIpO1xuXG4vKipcbiAqIEBhdXRob3IgVGjDqW8gRklEUlkgPHRoZW8uZmlkcnlAZ21haWwuY29tPlxuICovXG5cbnZhciBVbmltcGxlbWVudGVkU2VyaWFsaXplck1ldGhvZEVycm9yID0gKGZ1bmN0aW9uIChfU2VyaWFsaXplckVycm9yKSB7XG4gIF9pbmhlcml0cyhVbmltcGxlbWVudGVkU2VyaWFsaXplck1ldGhvZEVycm9yLCBfU2VyaWFsaXplckVycm9yKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlPScnXVxuICAgKi9cblxuICBmdW5jdGlvbiBVbmltcGxlbWVudGVkU2VyaWFsaXplck1ldGhvZEVycm9yKCkge1xuICAgIHZhciBtZXNzYWdlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJycgOiBhcmd1bWVudHNbMF07XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVW5pbXBsZW1lbnRlZFNlcmlhbGl6ZXJNZXRob2RFcnJvcik7XG5cbiAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihVbmltcGxlbWVudGVkU2VyaWFsaXplck1ldGhvZEVycm9yLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgICB0aGlzLm5hbWUgPSAnVW5pbXBsZW1lbnRlZE1ldGhvZEVycm9yJztcbiAgfVxuXG4gIHJldHVybiBVbmltcGxlbWVudGVkU2VyaWFsaXplck1ldGhvZEVycm9yO1xufSkoX1NlcmlhbGl6ZXJFcnJvcjNbJ2RlZmF1bHQnXSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFVuaW1wbGVtZW50ZWRTZXJpYWxpemVyTWV0aG9kRXJyb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHNlcmlhbGl6ZXJqcyBwYWNrYWdlLlxuICpcbiAqIChjKSBIQUlSQ1ZUIDx0ZmlkcnlAaGFpcmN2dC5jb20+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNlcmlhbGl6ZXJGaW5kZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlcmlhbGl6ZXJGaW5kZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZXJpYWxpemVyRmluZGVyKTtcblxuICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2VyaWFsaXplckludGVyZmFjZVtdfSBzZXJpYWxpemVyc1xuICAgICAqIEBwYXJhbSB7Kn0gICAgICAgICAgICAgICAgICAgICBkYXRhICAgICAgICAgIEFueSBkYXRhXG4gICAgICogQHBhcmFtIHs/c3RyaW5nfSAgICAgICAgICAgICAgIFtmb3JtYXQ9bnVsbF0gRm9ybWF0IHRoZSBub3JtYWxpemF0aW9uIHJlc3VsdCB3aWxsIGJlIGVuY29kZWQgYXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gez9TZXJpYWxpemVySW50ZXJmYWNlfVxuICAgICAqL1xuXG4gICAgX2NyZWF0ZUNsYXNzKFNlcmlhbGl6ZXJGaW5kZXIsIFt7XG4gICAgICAgIGtleTogXCJmaW5kXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kKHNlcmlhbGl6ZXJzLCBkYXRhKSB7XG4gICAgICAgICAgICB2YXIgZm9ybWF0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1syXTtcblxuICAgICAgICAgICAgdmFyIGNhY2hlRW50cnkgPSBuZXcgQ2FjaGVFbnRyeSh0aGlzLl9jYWNoZSwgZGF0YSwgZm9ybWF0KTtcbiAgICAgICAgICAgIGlmIChjYWNoZUVudHJ5LmhhcygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlRW50cnkuZ2V0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHNlcmlhbGl6ZXJzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VyaWFsaXplciA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cnVlID09PSBzZXJpYWxpemVyLnN1cHBvcnRzU2VyaWFsaXplKGRhdGEsIGZvcm1hdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlRW50cnkucHVzaCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTZXJpYWxpemVyRmluZGVyO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTZXJpYWxpemVyRmluZGVyO1xuXG52YXIgQ2FjaGVFbnRyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FjaGVFbnRyeShjYWNoZSwgZGF0YSwgZm9ybWF0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYWNoZUVudHJ5KTtcblxuICAgICAgICB0aGlzLl9jYWNoZSA9IGNhY2hlO1xuICAgICAgICB0aGlzLl9rZXkgPSBKU09OLnN0cmluZ2lmeShbZGF0YSwgZm9ybWF0XSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENhY2hlRW50cnksIFt7XG4gICAgICAgIGtleTogXCJnZXRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZVt0aGlzLl9rZXldO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiaGFzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkICE9PSB0aGlzLl9jYWNoZVt0aGlzLl9rZXldO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicHVzaFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaCh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVbdGhpcy5fa2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENhY2hlRW50cnk7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgc2VyaWFsaXplcmpzIHBhY2thZ2UuXG4gKlxuICogKGMpIEhBSVJDVlQgPHRmaWRyeUBoYWlyY3Z0LmNvbT5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU2VyaWFsaXplckZpbmRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VyaWFsaXplckZpbmRlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlcmlhbGl6ZXJGaW5kZXIpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTZXJpYWxpemVyRmluZGVyLCBbe1xuICAgICAgICBrZXk6IFwiZmluZFwiLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge1NlcmlhbGl6ZXJJbnRlcmZhY2VbXX0gc2VyaWFsaXplcnNcbiAgICAgICAgICogQHBhcmFtIHsqfSAgICAgICAgICAgICAgICAgICAgIGRhdGEgICAgICAgICAgQW55IGRhdGFcbiAgICAgICAgICogQHBhcmFtIHs/c3RyaW5nfSAgICAgICAgICAgICAgIFtmb3JtYXQ9bnVsbF0gRm9ybWF0IHRoZSBub3JtYWxpemF0aW9uIHJlc3VsdCB3aWxsIGJlIGVuY29kZWQgYXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7P1NlcmlhbGl6ZXJJbnRlcmZhY2V9XG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmluZChzZXJpYWxpemVycywgZGF0YSkge1xuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMl07XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBzZXJpYWxpemVyc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZXIgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHJ1ZSA9PT0gc2VyaWFsaXplci5zdXBwb3J0c1NlcmlhbGl6ZShkYXRhLCBmb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTZXJpYWxpemVyRmluZGVyO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTZXJpYWxpemVyRmluZGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHNlcmlhbGl6ZXJqcyBwYWNrYWdlLlxuICpcbiAqIChjKSBIQUlSQ1ZUIDx0ZmlkcnlAaGFpcmN2dC5jb20+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94NSwgX3g2LCBfeDcpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3g1LCBwcm9wZXJ0eSA9IF94NiwgcmVjZWl2ZXIgPSBfeDc7IGRlc2MgPSBwYXJlbnQgPSBnZXR0ZXIgPSB1bmRlZmluZWQ7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3g1ID0gcGFyZW50OyBfeDYgPSBwcm9wZXJ0eTsgX3g3ID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9TZXJpYWxpemVyQXdhcmUyID0gcmVxdWlyZSgnLi9TZXJpYWxpemVyQXdhcmUnKTtcblxudmFyIF9TZXJpYWxpemVyQXdhcmUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2VyaWFsaXplckF3YXJlMik7XG5cbi8qKlxuICogQmFzZSBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIGZvciB3cml0aW5nIGEgY3VzdG9tIHNlcmlhbGl6ZXIuIEl0IGlzIGVzcGVjaWFsbHkgY29udmVuaWVudCBpZiB5b3VyIHNlcmlhbGl6ZXIgZG8gb25seVxuICogc2VyaWFsaXphdGlvbiBvciBvbmx5IGRlc2VyaWFsaXphdGlvbi4gSWYgbm90LCBpdCB5b3UgYXJlIGJldHRlciBvZmYgaW1wbGVtZW50aW5nIFNlcmlhbGl6ZXJBd2FyZUludGVyZmFjZSBvclxuICogU2VyaWFsaXplckludGVyZmFjZS5cbiAqXG4gKiBAYWJzdHJhY3RcbiAqIEBhdXRob3IgVGjDqW8gRklEUlkgPHRoZW8uZmlkcnlAZ21haWwuY29tPlxuICovXG5cbnZhciBBYnN0cmFjdFNlcmlhbGl6ZXIgPSAoZnVuY3Rpb24gKF9TZXJpYWxpemVyQXdhcmUpIHtcbiAgX2luaGVyaXRzKEFic3RyYWN0U2VyaWFsaXplciwgX1NlcmlhbGl6ZXJBd2FyZSk7XG5cbiAgZnVuY3Rpb24gQWJzdHJhY3RTZXJpYWxpemVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBYnN0cmFjdFNlcmlhbGl6ZXIpO1xuXG4gICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoQWJzdHJhY3RTZXJpYWxpemVyLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQWJzdHJhY3RTZXJpYWxpemVyLCBbe1xuICAgIGtleTogJ3NlcmlhbGl6ZScsXG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXJpYWxpemUoZGF0YSwgZm9ybWF0LCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnc3VwcG9ydHNTZXJpYWxpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdXBwb3J0c1NlcmlhbGl6ZShkYXRhKSB7XG4gICAgICB2YXIgZm9ybWF0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdkZXNlcmlhbGl6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc2VyaWFsaXplKGRhdGEsIGNsYXNzTmFtZSkge1xuICAgICAgdmFyIGZvcm1hdCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMl07XG4gICAgICB2YXIgY29udGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbM107XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdzdXBwb3J0c0Rlc2VyaWFsaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3VwcG9ydHNEZXNlcmlhbGl6ZShkYXRhLCBjbGFzc05hbWUpIHtcbiAgICAgIHZhciBmb3JtYXQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFic3RyYWN0U2VyaWFsaXplcjtcbn0pKF9TZXJpYWxpemVyQXdhcmUzWydkZWZhdWx0J10pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBBYnN0cmFjdFNlcmlhbGl6ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHNlcmlhbGl6ZXJqcyBwYWNrYWdlLlxuICpcbiAqIChjKSBIQUlSQ1ZUIDx0ZmlkcnlAaGFpcmN2dC5jb20+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3g3LCBfeDgsIF94OSkgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeDcsIHByb3BlcnR5ID0gX3g4LCByZWNlaXZlciA9IF94OTsgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeDcgPSBwYXJlbnQ7IF94OCA9IHByb3BlcnR5OyBfeDkgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX1NlcmlhbGl6ZXJBd2FyZSA9IHJlcXVpcmUoJy4vU2VyaWFsaXplckF3YXJlJyk7XG5cbnZhciBfU2VyaWFsaXplckF3YXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlcmlhbGl6ZXJBd2FyZSk7XG5cbnZhciBfRmluZGVyU2VyaWFsaXplckZpbmRlciA9IHJlcXVpcmUoJy4vLi4vRmluZGVyL1NlcmlhbGl6ZXJGaW5kZXInKTtcblxudmFyIF9GaW5kZXJTZXJpYWxpemVyRmluZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZpbmRlclNlcmlhbGl6ZXJGaW5kZXIpO1xuXG52YXIgX1NlcmlhbGl6ZXJJbnRlcmZhY2UyID0gcmVxdWlyZSgnLi9TZXJpYWxpemVySW50ZXJmYWNlJyk7XG5cbnZhciBfU2VyaWFsaXplckludGVyZmFjZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TZXJpYWxpemVySW50ZXJmYWNlMik7XG5cbnZhciBfRXJyb3JTZXJpYWxpemF0aW9uRXJyb3IgPSByZXF1aXJlKCcuLy4uL0Vycm9yL1NlcmlhbGl6YXRpb25FcnJvcicpO1xuXG52YXIgX0Vycm9yU2VyaWFsaXphdGlvbkVycm9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Vycm9yU2VyaWFsaXphdGlvbkVycm9yKTtcblxudmFyIF9FcnJvckludmFsaWRBcmd1bWVudEVycm9yID0gcmVxdWlyZSgnLi8uLi9FcnJvci9JbnZhbGlkQXJndW1lbnRFcnJvcicpO1xuXG52YXIgX0Vycm9ySW52YWxpZEFyZ3VtZW50RXJyb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRXJyb3JJbnZhbGlkQXJndW1lbnRFcnJvcik7XG5cbi8qKlxuICogRGVmYXVsdCBzZXJpYWxpemVyLlxuICpcbiAqIE1lYW50IHRvIGFnZ3JlZ2F0ZSBhbGwgdGhlIGFwcGxpY2F0aW9uIHNlcmlhbGl6ZXJzIGFuZCBiZSB1c2VkIGFzIHRoZSBtYWluIHNlcmlhbGl6ZXIgaW4gdGhlIGFwcGxpY2F0aW9uLiBUaGlzIG1lYW5zXG4gKiB0aGF0IGZvciBzZXJpYWxpemluZyBhIG5ldyBvYmplY3QsIGEgY3VzdG9tIHNlcmlhbGl6ZXIgZm9yIHRoaXMgb25lIHNob3VsZCBiZSBkb25lIGFuZCByZWdpc3RlcmVkIHRvIHRoaXMgc2VyaWFsaXplci5cbiAqXG4gKiBAYXV0aG9yIFRow6lvIEZJRFJZIDx0aGVvLmZpZHJ5QGdtYWlsLmNvbT5cbiAqL1xuXG52YXIgU2VyaWFsaXplciA9IChmdW5jdGlvbiAoX1NlcmlhbGl6ZXJJbnRlcmZhY2UpIHtcbiAgICBfaW5oZXJpdHMoU2VyaWFsaXplciwgX1NlcmlhbGl6ZXJJbnRlcmZhY2UpO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtNYXAuPHN0cmluZyxTZXJpYWxpemVySW50ZXJmYWNlPn0gc2VyaWFsaXplcnNcbiAgICAgKiBAcGFyYW0gez9TZXJpYWxpemVyRmluZGVyfSAgICAgICAgICAgICAgICBbc2VyaWFsaXplckZpbmRlcj1udWxsXVxuICAgICAqXG4gICAgICogQHRocm93IEludmFsaWRBcmd1bWVudEVycm9yXG4gICAgICovXG5cbiAgICBmdW5jdGlvbiBTZXJpYWxpemVyKHNlcmlhbGl6ZXJzKSB7XG4gICAgICAgIHZhciBzZXJpYWxpemVyRmluZGVyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VyaWFsaXplcik7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2VyaWFsaXplci5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gc2VyaWFsaXplcnMudmFsdWVzKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZXIgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChmYWxzZSA9PT0gc2VyaWFsaXplciBpbnN0YW5jZW9mIF9TZXJpYWxpemVySW50ZXJmYWNlM1snZGVmYXVsdCddKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBfRXJyb3JJbnZhbGlkQXJndW1lbnRFcnJvcjJbJ2RlZmF1bHQnXSgnRXhwZWN0ZWQgc2VyaWFsaXplciB0byBpbXBsZW1lbnQgU2VyaWFsaXplckludGVyZmFjZS4gR290ICcgKyBzZXJpYWxpemVyLmNvbnN0cnVjdG9yICsgJyBpbnN0ZWFkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZXIgaW5zdGFuY2VvZiBfU2VyaWFsaXplckF3YXJlMlsnZGVmYXVsdCddKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZXIuc2V0U2VyaWFsaXplcih0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHR5cGUge01hcC48c3RyaW5nLCBTZXJpYWxpemVySW50ZXJmYWNlPn1cbiAgICAgICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvclsncmV0dXJuJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yWydyZXR1cm4nXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NlcmlhbGl6ZXJzID0gc2VyaWFsaXplcnM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHt7c2VyaWFsaXplcjogU2VyaWFsaWF6ZXJGaW5kZXJ9fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZmluZGVycyA9IHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZXI6IHNlcmlhbGl6ZXJGaW5kZXIgPT09IG51bGwgPyBuZXcgX0ZpbmRlclNlcmlhbGl6ZXJGaW5kZXIyWydkZWZhdWx0J10oKSA6IHNlcmlhbGl6ZXJGaW5kZXJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuXG4gICAgX2NyZWF0ZUNsYXNzKFNlcmlhbGl6ZXIsIFt7XG4gICAgICAgIGtleTogJ3NlcmlhbGl6ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXJpYWxpemUoZGF0YSwgZm9ybWF0LCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplciA9IHRoaXMuX2ZpbmRlcnMuc2VyaWFsaXplci5maW5kKHRoaXMuX3NlcmlhbGl6ZXJzLnZhbHVlcygpLCBkYXRhLCBmb3JtYXQpO1xuICAgICAgICAgICAgaWYgKG51bGwgIT09IHNlcmlhbGl6ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplci5zZXJpYWxpemUoZGF0YSwgZm9ybWF0LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IF9FcnJvclNlcmlhbGl6YXRpb25FcnJvcjJbJ2RlZmF1bHQnXSgnQW4gdW5leHBlY3RlZCB2YWx1ZSBjb3VsZCBub3QgYmUgc2VyaWFsaXplZDogXCInICsgZGF0YSArICdcIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbmhlcml0RG9jXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3VwcG9ydHNTZXJpYWxpemUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3VwcG9ydHNTZXJpYWxpemUoZGF0YSkge1xuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMV07XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsICE9PSB0aGlzLl9maW5kZXJzLnNlcmlhbGl6ZXIuZmluZCh0aGlzLl9zZXJpYWxpemVycy52YWx1ZXMoKSwgZGF0YSwgZm9ybWF0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW5oZXJpdERvY1xuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rlc2VyaWFsaXplJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc2VyaWFsaXplKGRhdGEsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMl07XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbM107XG5cbiAgICAgICAgICAgIHZhciBzZXJpYWxpemVyID0gdGhpcy5fZ2V0U2VyaWFsaXplckZvckRlc2VyaWFsaXphdGlvbihkYXRhLCBjbGFzc05hbWUsIGZvcm1hdCk7XG4gICAgICAgICAgICBpZiAobnVsbCAhPT0gc2VyaWFsaXplcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVyLmRlc2VyaWFsaXplKGRhdGEsIGNsYXNzTmFtZSwgZm9ybWF0LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IF9FcnJvclNlcmlhbGl6YXRpb25FcnJvcjJbJ2RlZmF1bHQnXSgnQW4gdW5leHBlY3RlZCB2YWx1ZSBjb3VsZCBub3QgYmUgZGVzZXJpYWxpemVkOiBcIicgKyBkYXRhICsgJ1wiJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQGluaGVyaXREb2N6XG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3VwcG9ydHNEZXNlcmlhbGl6ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdXBwb3J0c0Rlc2VyaWFsaXplKGRhdGEsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsICE9PSB0aGlzLl9nZXRTZXJpYWxpemVyRm9yRGVzZXJpYWxpemF0aW9uKGRhdGEsIGNsYXNzTmFtZSwgZm9ybWF0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyp9ICAgICAgIGRhdGEgICAgICAgICAgRGF0YSB0byByZXN0b3JlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgY2xhc3NOYW1lICAgICBUaGUgZXhwZWN0ZWQgY2xhc3MgdG8gaW5zdGFudGlhdGVcbiAgICAgICAgICogQHBhcmFtIHs/c3RyaW5nfSBbZm9ybWF0PW51bGxdIEZvcm1hdCB0aGUgZ2l2ZW4gZGF0YSB3YXMgZXh0cmFjdGVkIGZyb21cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7P1NlcmlhbGl6ZXJJbnRlcmZhY2V9XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfZ2V0U2VyaWFsaXplckZvckRlc2VyaWFsaXphdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0U2VyaWFsaXplckZvckRlc2VyaWFsaXphdGlvbihkYXRhLCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZhciBmb3JtYXQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzJdO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IHRoaXMuX3NlcmlhbGl6ZXJzLnZhbHVlcygpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXJpYWxpemVyID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cnVlID09PSBzZXJpYWxpemVyLnN1cHBvcnRzRGVzZXJpYWxpemUoZGF0YSwgY2xhc3NOYW1lLCBmb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjJbJ3JldHVybiddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IyWydyZXR1cm4nXSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTZXJpYWxpemVyO1xufSkoX1NlcmlhbGl6ZXJJbnRlcmZhY2UzWydkZWZhdWx0J10pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTZXJpYWxpemVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBzZXJpYWxpemVyanMgcGFja2FnZS5cbiAqXG4gKiAoYykgSEFJUkNWVCA8dGZpZHJ5QGhhaXJjdnQuY29tPlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfU2VyaWFsaXplckludGVyZmFjZTIgPSByZXF1aXJlKCcuL1NlcmlhbGl6ZXJJbnRlcmZhY2UnKTtcblxudmFyIF9TZXJpYWxpemVySW50ZXJmYWNlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlcmlhbGl6ZXJJbnRlcmZhY2UyKTtcblxuLyoqXG4gKiBBbnkgc2VyaWFsaXplciBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2Ugd2lsbCBhY2Nlc3MgdG8gYSBzZXJpYWxpemVyIGF0IHJ1bnRpbWUuXG4gKlxuICogQGF1dGhvciBUaMOpbyBGSURSWSA8dGhlby5maWRyeUBnbWFpbC5jb20+XG4gKi9cblxudmFyIFNlcmlhbGl6ZXJBd2FyZSA9IChmdW5jdGlvbiAoX1NlcmlhbGl6ZXJJbnRlcmZhY2UpIHtcbiAgX2luaGVyaXRzKFNlcmlhbGl6ZXJBd2FyZSwgX1NlcmlhbGl6ZXJJbnRlcmZhY2UpO1xuXG4gIGZ1bmN0aW9uIFNlcmlhbGl6ZXJBd2FyZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VyaWFsaXplckF3YXJlKTtcblxuICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKFNlcmlhbGl6ZXJBd2FyZS5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1NlcmlhbGl6ZXJJbnRlcmZhY2V9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHRoaXMuX3NlcmlhbGl6ZXIgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTZXJpYWxpemVySW50ZXJmYWNlfSBzZXJpYWxpemVyXG4gICAqL1xuXG4gIF9jcmVhdGVDbGFzcyhTZXJpYWxpemVyQXdhcmUsIFt7XG4gICAga2V5OiAnc2V0U2VyaWFsaXplcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNlcmlhbGl6ZXIoc2VyaWFsaXplcikge1xuICAgICAgdGhpcy5fc2VyaWFsaXplciA9IHNlcmlhbGl6ZXI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNlcmlhbGl6ZXJBd2FyZTtcbn0pKF9TZXJpYWxpemVySW50ZXJmYWNlM1snZGVmYXVsdCddKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU2VyaWFsaXplckF3YXJlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBzZXJpYWxpemVyanMgcGFja2FnZS5cbiAqXG4gKiAoYykgSEFJUkNWVCA8dGZpZHJ5QGhhaXJjdnQuY29tPlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX0Vycm9yU2VyaWFsaXphdGlvbkVycm9yID0gcmVxdWlyZSgnLi8uLi9FcnJvci9TZXJpYWxpemF0aW9uRXJyb3InKTtcblxudmFyIF9FcnJvclNlcmlhbGl6YXRpb25FcnJvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FcnJvclNlcmlhbGl6YXRpb25FcnJvcik7XG5cbnZhciBfRXJyb3JVbmltcGxlbWVudGVkTWV0aG9kRXJyb3IgPSByZXF1aXJlKCcuLy4uL0Vycm9yL1VuaW1wbGVtZW50ZWRNZXRob2RFcnJvcicpO1xuXG52YXIgX0Vycm9yVW5pbXBsZW1lbnRlZE1ldGhvZEVycm9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Vycm9yVW5pbXBsZW1lbnRlZE1ldGhvZEVycm9yKTtcblxuLyoqXG4gKiBBIHNlcmlhbGl6ZXIgaXMgcmVzcG9uc2libGUgZm9yIHRyYW5zZm9ybWluZyBhIGRhdGEgaW4gYSBzcGVjaWZpYyBmb3JtYXQgaW50byBhIGRhdGEgaW4gYW5vdGhlciBmb3JtYXQuXG4gKlxuICogRm9yIGV4YW1wbGUsIHRoZSBzZXJpYWxpemVyIGNhbiBiZSB1c2VkIHRvIG1hcCBjbGllbnQtc2lkZSBtb2RlbHMgYW5kIGJhY2stZW5kIHNpZGUgb2JqZWN0cyBieSBjaGVja2luZyBhbGwgdGhlXG4gKiBwcm9wZXJ0aWVzIG9mIGEgbW9kZWwgdG8gZ2VuZXJhdGUgYW4gb2JqZWN0IGZvciB3aGljaCB0aGUgdmFsdWVzIGFyZSB1bmRlcnN0YW5kYWJsZSBmb3IgdGhlIGJhY2stZW5kIHNlcnZpY2UuXG4gKlxuICogKy0tLS0tLS0tKyAtLS0tLSBzZXJpYWxpemUgLS0tLS0+ICstLS0tLS0tLS0tK1xuICogfCBDbGllbnQgfCAgICAgICAgICAgICAgICAgICAgICAgIHwgQmFjay1FbmQgfFxuICogKy0tLS0tLS0tKyA8LS0tLSBkZXNlcmlhbGl6ZSAtLS0tICstLS0tLS0tLS0tK1xuICpcbiAqIE5vdGUgdGhhdCBKYXZhU2NyaXB0IGRvZXMgbm90IHN1cHBvcnQgaW50ZXJmYWNlcyBwZXIgc2UuIEJ5IFwiSW50ZXJmYWNlXCIgaXMgbWVhbnQgdGhhdCB0aGlzIGNsYXNzIHNob3VsZCBub3QgaW1wbGVtZW50XG4gKiBhbnkgbWV0aG9kIGJ1dCBwcm92aWRlIHRoZSBza2VsZXRvbiBmb3IgY2hpbGQgY2xhc3NlcyBpbnN0ZWFkLlxuICpcbiAqIEBpbnRlcmZhY2VcbiAqIEBhdXRob3IgVGjDqW8gRklEUlkgPHRoZW8uZmlkcnlAZ21haWwuY29tPlxuICovXG5cbnZhciBTZXJpYWxpemVySW50ZXJmYWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2VyaWFsaXplckludGVyZmFjZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VyaWFsaXplckludGVyZmFjZSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2VyaWFsaXplckludGVyZmFjZSwgW3tcbiAgICBrZXk6ICdzZXJpYWxpemUnLFxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplcyBhbnkgZGF0YSBvYmplY3QgaW50byBhbmQgb2JqZWN0IHVzYWJsZSBmb3IgdGhlIGJhY2tlbmQgc2VydmljZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gICAgICBkYXRhICAgICAgICAgICBBbnkgZGF0YVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgICAgICAgICBGb3JtYXQgdGhlIG5vcm1hbGl6YXRpb24gcmVzdWx0IHdpbGwgYmUgZW5jb2RlZCBhc1xuICAgICAqIEBwYXJhbSB7Kn0gICAgICBbY29udGV4dD1udWxsXSBPcHRpb25zIHNlcmlhbGl6ZXJzIGhhdmUgYWNjZXNzIHRvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqIEB0aHJvdyBTZXJpYWxpemF0aW9uRXJyb3JcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VyaWFsaXplKGRhdGEsIGZvcm1hdCkge1xuICAgICAgdmFyIGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICB0aHJvdyBuZXcgX0Vycm9yVW5pbXBsZW1lbnRlZE1ldGhvZEVycm9yMlsnZGVmYXVsdCddKCdVbmltcGxlbWVudGVkIFwic2VyaWFsaXplKClcIiBtZXRob2QnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gY2xhc3MgaXMgc3VwcG9ydGVkIGZvciBzZXJpYWxpemF0aW9uIGJ5IHRoaXMgc2VyaWFsaXplci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gICAgICBkYXRhICAgICAgICAgIEFueSBkYXRhXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtmb3JtYXQ9bnVsbF0gRm9ybWF0IHRoZSBub3JtYWxpemF0aW9uIHJlc3VsdCB3aWxsIGJlIGVuY29kZWQgYXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdzdXBwb3J0c1NlcmlhbGl6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1cHBvcnRzU2VyaWFsaXplKGRhdGEpIHtcbiAgICAgIHZhciBmb3JtYXQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzFdO1xuXG4gICAgICB0aHJvdyBuZXcgX0Vycm9yVW5pbXBsZW1lbnRlZE1ldGhvZEVycm9yMlsnZGVmYXVsdCddKCdVbmltcGxlbWVudGVkIFwic3VwcG9ydHNTZXJpYWxpemUoKVwiIG1ldGhvZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyBkYXRhIGJhY2sgaW50byBhbiBvYmplY3Qgb2YgdGhlIGdpdmVuIGNsYXNzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSAgICAgICBkYXRhICAgICAgICAgICAgIERhdGEgdG8gcmVzdG9yZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgY2xhc3NOYW1lICAgICAgICBUaGUgZXhwZWN0ZWQgY2xhc3MgdG8gaW5zdGFudGlhdGVcbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IFtmb3JtYXQ9bnVsbF0gICAgRm9ybWF0IHRoZSBnaXZlbiBkYXRhIHdhcyBleHRyYWN0ZWQgZnJvbVxuICAgICAqIEBwYXJhbSB7Kn0gICAgICAgW2NvbnRleHQ9bnVsbF0gICBPcHRpb25zIGF2YWlsYWJsZSB0byB0aGUgZGVzZXJpYWxpemVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqIEB0aHJvdyBTZXJpYWxpemF0aW9uRXJyb3JcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ2Rlc2VyaWFsaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzZXJpYWxpemUoZGF0YSwgY2xhc3NOYW1lKSB7XG4gICAgICB2YXIgZm9ybWF0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1syXTtcbiAgICAgIHZhciBjb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1szXTtcblxuICAgICAgdGhyb3cgbmV3IF9FcnJvclVuaW1wbGVtZW50ZWRNZXRob2RFcnJvcjJbJ2RlZmF1bHQnXSgnVW5pbXBsZW1lbnRlZCBcImRlc2VyaWFsaXplKClcIiBtZXRob2QnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gY2xhc3MgaXMgc3VwcG9ydGVkIGZvciBkZXNlcmlhbGl6YXRpb24gYnkgdGhpcyBzZXJpYWxpemVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSAgICAgICBkYXRhICAgICAgICAgIERhdGEgdG8gcmVzdG9yZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgY2xhc3NOYW1lICAgICBUaGUgZXhwZWN0ZWQgY2xhc3MgdG8gaW5zdGFudGlhdGVcbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IFtmb3JtYXQ9bnVsbF0gRm9ybWF0IHRoZSBnaXZlbiBkYXRhIHdhcyBleHRyYWN0ZWQgZnJvbVxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ3N1cHBvcnRzRGVzZXJpYWxpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdXBwb3J0c0Rlc2VyaWFsaXplKGRhdGEsIGNsYXNzTmFtZSkge1xuICAgICAgdmFyIGZvcm1hdCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMl07XG5cbiAgICAgIHRocm93IG5ldyBfRXJyb3JVbmltcGxlbWVudGVkTWV0aG9kRXJyb3IyWydkZWZhdWx0J10oJ1VuaW1wbGVtZW50ZWQgXCJzdXBwb3J0c0Rlc2VyaWFsaXplKClcIiBtZXRob2QnKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2VyaWFsaXplckludGVyZmFjZTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNlcmlhbGl6ZXJJbnRlcmZhY2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHNlcmlhbGl6ZXJqcyBwYWNrYWdlLlxuICpcbiAqIChjKSBIQUlSQ1ZUIDx0ZmlkcnlAaGFpcmN2dC5jb20+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmltcG9ydCBTZXJpYWxpemVyQXdhcmUgZnJvbSAnLi8uLi8uLi9fc3JjL1NlcmlhbGl6ZXIvU2VyaWFsaXplckF3YXJlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vbGVhblNlcmlhbGl6ZXIgZXh0ZW5kcyBTZXJpYWxpemVyQXdhcmUge1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICpcbiAgICAgKiBAcGFyYW0gez9ib29sZWFufSBib29sZWFuVmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3wqfSBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufG51bWJlcnxudWxsfVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZShib29sZWFuVmFsdWUsIGZvcm1hdCwgY29udGV4dCkge1xuICAgICAgICBpZiAoJ29sZEFwaScgPT09IGNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoYm9vbGVhblZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib29sZWFuVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBzdXBwb3J0c1NlcmlhbGl6ZShkYXRhLCBmb3JtYXQgPSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnYm9vbGVhbicgPT09IHR5cGVvZiBkYXRhIHx8IG51bGwgPT09IGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfGJvb2xlYW58bnVsbH0gZGF0YVxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkZXNlcmlhbGl6ZShkYXRhLCBjbGFzc05hbWUsIGZvcm1hdCA9IG51bGwsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgICAgIGlmICgnYm9vbGVhbicgPT09IHR5cGVvZiBkYXRhIHx8IG51bGwgPT09IGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBzdXBwb3J0c0Rlc2VyaWFsaXplKGRhdGEsIGNsYXNzTmFtZSwgZm9ybWF0ID0gbnVsbCkge1xuICAgICAgICBpZiAoJ2Jvb2xlYW4nICE9PSBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnYm9vbGVhbicgPT09IHR5cGVvZiBkYXRhIHx8IG51bGwgPT09IGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKDAgPT09IGRhdGEgfHwgMSA9PT0gZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBzZXJpYWxpemVyanMgcGFja2FnZS5cbiAqXG4gKiAoYykgSEFJUkNWVCA8dGZpZHJ5QGhhaXJjdnQuY29tPlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IDAgKi9cblxuaW1wb3J0IEFic3RyYWN0U2VyaWFsaXplciBmcm9tICcuLy4uLy4uL19zcmMvU2VyaWFsaXplci9BYnN0cmFjdFNlcmlhbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdTZXJpYWxpemVyIGV4dGVuZHMgQWJzdHJhY3RTZXJpYWxpemVyIHtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIHN1cHBvcnRzRGVzZXJpYWxpemUoZGF0YSwgY2xhc3NOYW1lLCBmb3JtYXQgPSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnc3RyaW5nJyA9PT0gY2xhc3NOYW1lICYmICgnc3RyaW5nJyA9PT0gdHlwZW9mIGRhdGEgfHwgbnVsbCA9PT0gZGF0YSk7XG4gICAgfVxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBzZXJpYWxpemVyanMgcGFja2FnZS5cbiAqXG4gKiAoYykgSEFJUkNWVCA8dGZpZHJ5QGhhaXJjdnQuY29tPlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgeyBBTk9OWU1PVVNfVFlQRSwgQ1VTVE9NRVJfVFlQRSwgQURNSU5fVFlQRSB9IGZyb20gJy4vVXNlclR5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBmaXJzdG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBsYXN0bmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgIHR5cGUgICAgICB7QHNlZSBUeXBlfVxuICAgICAqIEBwYXJhbSB7P2Jvb2xlYW59IGdlbmRlciAgICBUcnVlIGZvciBmZW1hbGUsIGZhbHNlIGZvciBtYWxlIGFuZCBudWxsIGZvciB1bmtub3duXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZmlyc3RuYW1lLCBsYXN0bmFtZSwgdHlwZSwgZ2VuZGVyKSB7XG4gICAgICAgIHRoaXMuZmlyc3RuYW1lID0gZmlyc3RuYW1lO1xuICAgICAgICB0aGlzLmxhc3RuYW1lID0gbGFzdG5hbWU7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLl9nZW5kZXIgPSBnZW5kZXI7XG4gICAgfVxuXG4gICAgZ2V0RnVsbG5hbWUoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpcnN0bmFtZX0gJHt0aGlzLmxhc3RuYW1lfWA7XG4gICAgfVxuXG4gICAgaXNBbm9ueW1vdXMoKSB7XG4gICAgICAgIHJldHVybiBBTk9OWU1PVVNfVFlQRSA9PT0gdGhpcy5fdHlwZTtcbiAgICB9XG5cbiAgICBpc0N1c3RvbWVyKCkge1xuICAgICAgICByZXR1cm4gQ1VTVE9NRVJfVFlQRSA9PT0gdGhpcy5fdHlwZTtcbiAgICB9XG5cbiAgICBpc0FkbWluKCkge1xuICAgICAgICByZXR1cm4gQURNSU5fVFlQRSA9PT0gdGhpcy5fdHlwZTtcbiAgICB9XG5cbiAgICBpc01hbGUoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZSA9PT0gdGhpcy5fZ2VuZGVyO1xuICAgIH1cblxuICAgIGlzRmVtYWxlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZSA9PT0gdGhpcy5fZ2VuZGVyO1xuICAgIH1cblxuICAgIGdlbmRlcklzS25vd24oKSB7XG4gICAgICAgIHJldHVybiBudWxsID09PSB0aGlzLl9nZW5kZXI7XG4gICAgfVxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBzZXJpYWxpemVyanMgcGFja2FnZS5cbiAqXG4gKiAoYykgSEFJUkNWVCA8dGZpZHJ5QGhhaXJjdnQuY29tPlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgU2VyaWFsaXplckF3YXJlSW50ZXJmYWNlIGZyb20gJy4vLi4vLi4vX3NyYy9TZXJpYWxpemVyL1NlcmlhbGl6ZXJBd2FyZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyU2VyaWFsaXplciBleHRlbmRzIFNlcmlhbGl6ZXJBd2FyZUludGVyZmFjZSB7XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VXNlcn0gdXNlclxuICAgICAqXG4gICAgICogQHJldHVybiB7IW9iamVjdH1cbiAgICAgKi9cbiAgICBzZXJpYWxpemUodXNlciwgZm9ybWF0LCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLl9zZXJpYWxpemVyLnNlcmlhbGl6ZSh1c2VyLl90eXBlLCBmb3JtYXQsIGNvbnRleHQpO1xuICAgICAgICBjb25zdCBnZW5kZXIgPSB0aGlzLl9zZXJpYWxpemVyLnNlcmlhbGl6ZSh1c2VyLl9nZW5kZXIsIGZvcm1hdCwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcnN0bmFtZTogdXNlci5maXJzdG5hbWUsXG4gICAgICAgICAgICBsYXN0bmFtZTogdXNlci5sYXN0bmFtZSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBnZW5kZXI6IGdlbmRlcixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIHN1cHBvcnRzU2VyaWFsaXplKGRhdGEsIGZvcm1hdCA9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgZGF0YSAmJiBudWxsICE9PSBkYXRhICYmIGRhdGEgaW5zdGFuY2VvZiBVc2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyFvYmplY3R9IGRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1VzZXJ9XG4gICAgICovXG4gICAgZGVzZXJpYWxpemUoZGF0YSwgY2xhc3NOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0bmFtZSA9IHRoaXMuX3NlcmlhbGl6ZXIuZGVzZXJpYWxpemUoZGF0YS5maXJzdG5hbWUsICdzdHJpbmcnLCAuLi5hcmdzKTtcbiAgICAgICAgY29uc3QgbGFzdG5hbWUgPSB0aGlzLl9zZXJpYWxpemVyLmRlc2VyaWFsaXplKGRhdGEubGFzdG5hbWUsICdzdHJpbmcnLCAuLi5hcmdzKTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuX3NlcmlhbGl6ZXIuZGVzZXJpYWxpemUoZGF0YS50eXBlLCAnVXNlclR5cGUnLCAuLi5hcmdzKTtcbiAgICAgICAgY29uc3QgZ2VuZGVyID0gdGhpcy5fc2VyaWFsaXplci5kZXNlcmlhbGl6ZShkYXRhLmdlbmRlciwgJ2Jvb2xlYW4nLCAuLi5hcmdzKTtcblxuICAgICAgICByZXR1cm4gbmV3IFVzZXIoZmlyc3RuYW1lLCBsYXN0bmFtZSwgdHlwZSwgZ2VuZGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIHN1cHBvcnRzRGVzZXJpYWxpemUoZGF0YSwgY2xhc3NOYW1lLCBmb3JtYXQgPSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnVXNlcicgPT09IGNsYXNzTmFtZSAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIGRhdGEgJiYgbnVsbCAhPT0gZGF0YTtcbiAgICB9XG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHNlcmlhbGl6ZXJqcyBwYWNrYWdlLlxuICpcbiAqIChjKSBIQUlSQ1ZUIDx0ZmlkcnlAaGFpcmN2dC5jb20+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmV4cG9ydCBjb25zdCBBTk9OWU1PVVNfVFlQRSA9ICdBTk9OWU1PVVNfVFlQRSc7XG5leHBvcnQgY29uc3QgQ1VTVE9NRVJfVFlQRSA9ICdDVVNUT01FUl9UWVBFJztcbmV4cG9ydCBjb25zdCBBRE1JTl9UWVBFID0gJ0FETUlOX1RZUEUnO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBzZXJpYWxpemVyanMgcGFja2FnZS5cbiAqXG4gKiAoYykgSEFJUkNWVCA8dGZpZHJ5QGhhaXJjdnQuY29tPlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgU2VyaWFsaXplckF3YXJlIGZyb20gJy4vLi4vLi4vX3NyYy9TZXJpYWxpemVyL1NlcmlhbGl6ZXJBd2FyZSc7XG5pbXBvcnQgeyBBRE1JTl9UWVBFLCBBTk9OWU1PVVNfVFlQRSwgQ1VTVE9NRVJfVFlQRSB9IGZyb20gJy4vVXNlclR5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyVHlwZVNlcmlhbGl6ZXIgZXh0ZW5kcyBTZXJpYWxpemVyQXdhcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7TWFwLjxudW1iZXIsIHN0cmluZz59IEtleSBhbmQgdmFsdWUgYXMgcmVzcGVjdGl2ZWx5IHRoZSByYXcgYW5kIGRlc2VyaWFsaXplZCB2YWx1ZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFwcGluZyA9IG5ldyBNYXAoW1xuICAgICAgICAgICAgWzAsIEFETUlOX1RZUEVdLFxuICAgICAgICAgICAgWzEsIEFOT05ZTU9VU19UWVBFXSxcbiAgICAgICAgICAgIFsyLCBDVVNUT01FUl9UWVBFXSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyVHlwZVxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSh1c2VyVHlwZSwgZm9ybWF0LCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRLZXlPZlR5cGUodXNlclR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgc3VwcG9ydHNTZXJpYWxpemUoZGF0YSwgZm9ybWF0ID0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbCAhPT0gdGhpcy5fZ2V0S2V5T2ZUeXBlKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gdXNlclR5cGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4gez9udW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0S2V5T2ZUeXBlKHVzZXJUeXBlKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdHlwZV0gb2YgdGhpcy5fbWFwcGluZy5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGlmICh1c2VyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGtleVxuICAgICAqXG4gICAgICogQHJldHVybiB7QURNSU5fVFlQRXxBTk9OWU1PVVNfVFlQRXxDVVNUT01FUl9UWVBFfVxuICAgICAqL1xuICAgIGRlc2VyaWFsaXplKGtleSwgY2xhc3NOYW1lLCBmb3JtYXQgPSBudWxsLCBjb250ZXh0ID0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwcGluZy5nZXQoa2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIHN1cHBvcnRzRGVzZXJpYWxpemUoZGF0YSwgY2xhc3NOYW1lLCBmb3JtYXQgPSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnVXNlclR5cGUnID09PSBjbGFzc05hbWUgJiYgdGhpcy5fbWFwcGluZy5oYXMoZGF0YSk7XG4gICAgfVxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBzZXJpYWxpemVyanMgcGFja2FnZS5cbiAqXG4gKiAoYykgSEFJUkNWVCA8dGZpZHJ5QGhhaXJjdnQuY29tPlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgQ2FjaGVTZXJpYWxpemVyRmluZGVyIGZyb20gJy4vLi4vLi4vX3NyYy9GaW5kZXIvQ2FjaGVTZXJpYWxpemVyRmluZGVyJztcbmltcG9ydCBTZXJpYWxpemVyRmluZGVyIGZyb20gJy4vLi4vLi4vX3NyYy9GaW5kZXIvU2VyaWFsaXplckZpbmRlcic7XG5pbXBvcnQgQm9vbGVhblNlcmlhbGl6ZXIgZnJvbSAnLi9Cb29sZWFuU2VyaWFsaXplcic7XG5pbXBvcnQgU2VyaWFsaXplciBmcm9tICcuLy4uLy4uL19zcmMvU2VyaWFsaXplci9TZXJpYWxpemVyJztcbmltcG9ydCBTdHJpbmdTZXJpYWxpemVyIGZyb20gJy4vU3RyaW5nU2VyaWFsaXplcic7XG5pbXBvcnQgVHlwZVNlcmlhbGl6ZXIgZnJvbSAnLi9Vc2VyVHlwZVNlcmlhbGl6ZXInO1xuaW1wb3J0IFVzZXJTZXJpYWxpemVyIGZyb20gJy4vVXNlclNlcmlhbGl6ZXInO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCB7IEFETUlOX1RZUEUgfSBmcm9tICcuL1VzZXJUeXBlJztcblxuLy9pbXBvcnQgZnMgZnJvbSAnZnMnO1xuLy9pbXBvcnQgcHJvZmlsZXIgZnJvbSAndjgtcHJvZmlsZXInO1xuXG5jb25zdCBib29sZWFuU2VyaWFsaXplciA9IG5ldyBCb29sZWFuU2VyaWFsaXplcigpO1xuY29uc3Qgc3RyaW5nU2VyaWFsaXplciA9IG5ldyBTdHJpbmdTZXJpYWxpemVyKCk7XG5jb25zdCB0eXBlU2VyaWFsaXplciA9IG5ldyBUeXBlU2VyaWFsaXplcigpO1xuY29uc3QgdXNlclNlcmlhbGl6ZXIgPSBuZXcgVXNlclNlcmlhbGl6ZXIoKTtcblxuY29uc3Qgc2VyaWFsaXplciA9IG5ldyBTZXJpYWxpemVyKFxuICAgIG5ldyBNYXAoW1xuICAgICAgICBbJ0Jvb2xlYW5TZXJpYWxpemVyJywgYm9vbGVhblNlcmlhbGl6ZXJdLFxuICAgICAgICBbJ1N0cmluZ1NlcmlhbGl6ZXInLCBzdHJpbmdTZXJpYWxpemVyXSxcbiAgICAgICAgWydVc2VyVHlwZVNlcmlhbGl6ZXInLCB0eXBlU2VyaWFsaXplcl0sXG4gICAgICAgIFsnVXNlclNlcmlhbGl6ZXInLCB1c2VyU2VyaWFsaXplcl0sXG4gICAgXSksXG4gICAgbmV3IENhY2hlU2VyaWFsaXplckZpbmRlcigpXG4pO1xuXG5jb25zdCByYXdVc2VyID0ge1xuICAgIGZpcnN0bmFtZTogJ0pvaG4nLFxuICAgIGxhc3RuYW1lOiAnRG9lJyxcbiAgICBnZW5kZXI6IHRydWUsXG4gICAgdHlwZTogMCxcbn07XG5cbmNvbnN0IHVzZXIgPSBuZXcgVXNlcignSm9obicsICdEb2UnLCBBRE1JTl9UWVBFLCB0cnVlKTtcbmNvbnN0IE4gPSAxMDAwMDA7XG52YXIgaTtcbmNvbnN0IHVzZXJzID0gW107XG5cbi8vcHJvZmlsZXIuc3RhcnRQcm9maWxpbmcoJ1Byb2ZpbGUnLCB0cnVlKTtcbndpbmRvdy5zZXJpYWxpemUgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICAgIHVzZXJzLnB1c2goc2VyaWFsaXplci5zZXJpYWxpemUodXNlciwgbnVsbCwge2luZGV4OiBpfSkpO1xuICAgIH1cbn1cbi8vY29uc3QgcHJvZmlsZTEgPSBwcm9maWxlci5zdG9wUHJvZmlsaW5nKCk7XG4vL3Byb2ZpbGUxLmV4cG9ydChmdW5jdGlvbihlcnJvciwgcmVzdWx0KSB7XG4vLyAgICBmcy53cml0ZUZpbGVTeW5jKCdwcm9maWxlMS5qc29uJywgcmVzdWx0KTtcbi8vICAgIHByb2ZpbGUxLmRlbGV0ZSgpO1xuLy99KTtcbiJdfQ==
