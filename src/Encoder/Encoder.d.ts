/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

interface Encoder {
    /**
     * Transforms an object/scalar into another object/scalar.
     * 
     * @throws SerializationError
     */
    encode(data: any, format: string, context: any[]): any

    canEncode(data: any, format: string, context: any[]): boolean
}

export default Encoder;
