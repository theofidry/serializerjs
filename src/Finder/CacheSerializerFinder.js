/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class SerializerFinder {
    constructor() {
        this._cache = {};
    }

    /**
     * @param {SerializerInterface[]} serializers
     * @param {*}                     data          Any data
     * @param {?string}               [format=null] Format the normalization result will be encoded as
     *
     * @return {?SerializerInterface}
     */
    find(serializers, data, format = null) {
        const cacheEntry = new CacheEntry(this._cache, data, format);
        if (cacheEntry.has()) {
            return cacheEntry.get();
        }

        for (const serializer of serializers) {
            if (true === serializer.supportsSerialize(data, format)) {
                cacheEntry.push();

                return serializer;
            }
        }

        return null;
    }
}

class CacheEntry {
    constructor(cache, data, format) {
        this._cache = cache;
        this._key = JSON.stringify([data, format]);
    }

    get() {
        return this._cache[this._key];
    }

    has() {
        return undefined !== this._cache[this._key];
    }

    push(value) {
        this._cache[this._key] = value;
    }
}
