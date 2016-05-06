/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

interface Normalizer {
    setNormalizer(normalizer: Normalizer): void
    
    /**
     * Transforms an object/scalar into another object/scalar.
     * 
     * @throws SerializationError
     */
    normalize(data: any, format: string, context: any[]): any

    canNormalize(data: any, format: string, context: any[]): boolean
}

export default Normalizer;
