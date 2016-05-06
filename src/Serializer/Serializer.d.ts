/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * A serializer is responsible for transforming a data structure into another one.
 *
 * For example, the serializer can be used to map client-side models and back-end side objects by checking all the
 * properties of a model to generate an object for which the values are understandable for the back-end service.
 *
 * +--------+ ----- serialize -----> +----------+
 * | Client |                        | Back-End |
 * +--------+ <---- deserialize ---- +----------+
 *
 * @author Théo FIDRY <theo.fidry@gmail.com>
 */
interface Serializer {
    /**
     * Serializes any data object into and object usable for the backend service. For example, can serializer a Model
     * into a JSON or XML string. It can also be used to change a JavaScript data structure (ex a Model) into another
     * JavaScript structure (another model or a plain JavaScript object).
     *
     * @param data    Data to be serialized to be sent to the back-end for example.
     * @param format  Format the object must be serialized into.
     * @param context Options normalizers/encoders have access to.
     * 
     * @throws SerializationError
     */
    serialize(data: any, format: string, context: any[]): any

    /**
     * Reverse operation of ::serialize().
     *
     * @param data      Data to restore
     * @param className The expected class to instantiate
     * @param format    Format the given data was extracted from
     * @param context   Options available to the denormalizers/decoders
     * 
     * @throws SerializationError
     */
    deserialize(data: any, className: string, format: string, context: any[]): any
}

export default Serializer;
