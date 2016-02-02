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

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SerializerFinder = (function () {
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
})();

exports["default"] = SerializerFinder;

var CacheEntry = (function () {
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
})();

module.exports = exports["default"];