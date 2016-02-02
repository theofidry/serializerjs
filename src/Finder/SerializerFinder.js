/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class SerializerFinder {
    /**
     * @param {SerializerInterface[]} serializers
     * @param {*}                     data          Any data
     * @param {?string}               [format=null] Format the normalization result will be encoded as
     *
     * @return {?SerializerInterface}
     */
    find(serializers, data, format = null) {
        for (const serializer of serializers) {
            if (true === serializer.supportsSerialize(data, format)) {
                return serializer;
            }
        }

        return null;
    }
}
