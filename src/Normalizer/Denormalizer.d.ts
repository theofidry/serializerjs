/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

interface Denormalizer {
    setDenormalizer(denormalizer: Denormalizer): void
    
    /**
     * @throws SerializationError
     */
    denormalize(data: any, className: string, format: string, context: any[]): any

    canDenormalize(data: any, className: string, format: string, context: any[]): boolean
}

export default Denormalizer;
