/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

interface Decoder {
    /**
     * @throws SerializationError
     */
    decode(data: any, format: string, context: any[]): any

    canDecode(data: any, format: string, context: any[]): boolean
}

export default Decoder;
