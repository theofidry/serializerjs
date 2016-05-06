/*
 * This file is part of the serializerjs package.
 *
 * (c) HAIRCVT <tfidry@haircvt.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Serializer from "./Serializer";
import Normalizer from "../Normalizer/Normalizer";
import Denormalizer from "../Normalizer/Denormalizer";
import Encoder from "../Encoder/Encoder";
import Decoder from "../Encoder/Decoder";
import NormalizerRegistry from "../Normalizer/NormalizerRegistry";
import DenormalizerRegistry from "../Normalizer/DenormalizerRegistry";
import EncoderRegistry from "../Encoder/EncoderRegistry";
import DecoderRegistry from "../Encoder/DecoderRegistry";

/**
 * Default serializer.
 *
 * Meant to aggregate all the application serializers and be used as the main serializer in the application. This means
 * that for serializing a new object, a custom serializer for this one should be done and registered to this serializer.
 *
 * @author Théo FIDRY <theo.fidry@gmail.com>
 */
export default class SerializerRegistry implements Serializer, Normalizer, Denormalizer, Encoder, Decoder {
    setNormalizer(normalizer: Normalizer): void {
    }

    setDenormalizer(denormalizer: Denormalizer): void {
    }
    
    private normalizer: Normalizer;
    private denormalizer: Denormalizer;
    private encoder: Encoder;
    private decoder: Decoder;

    constructor(
        normalizers: Normalizer[],
        denormalizers: Denormalizer[],
        encoders: Encoder[],
        decoders: Decoder[]
    ) {
        for (const normalizer of normalizers) {
            normalizer.setNormalizer(this);
        }

        for (const denormalizer of denormalizers) {
            denormalizer.setDenormalizer(this);
        }

        this.normalizer = new NormalizerRegistry(normalizers);
        this.denormalizer = new DenormalizerRegistry(denormalizers);
        
        this.encoder = new EncoderRegistry(encoders);
        this.decoder = new DecoderRegistry(decoders);
    }

    /**
     * @inheritDoc
     */
    serialize(data, format, context) {
        const normalizedData = this.normalizer.normalize(data, format, context);
        
        return this.encoder.encode(normalizedData, format, context);
    }

    /**
     * @inheritDoc
     */
    deserialize(data, className, format = null, context = null) {
        const denormalizedData = this.denormalizer.denormalize(data, className, format, context);

        return this.decoder.decode(denormalizedData, format, context);
    }

    /**
     * @inheritDoc
     */
    normalize(data: any, format: string, context: any[]): any {
        return this.normalizer.normalize(data, format, context);
    }

    /**
     * @inheritDoc
     */
    canNormalize(data: any, format: string, context: any[]): boolean {
        return this.normalizer.canNormalize(data, format, context);
    }

    /**
     * @inheritDoc
     */
    denormalize(data: any, className: string, format: string, context: any[]): any {
        return this.denormalizer.denormalize(data, className, format, context);
    }

    /**
     * @inheritDoc
     */
    canDenormalize(data: any, className: string, format: string, context: any[]): boolean {
        return this.denormalizer.canDenormalize(data, className, format, context);
    }

    /**
     * @inheritDoc
     */
    encode(data: any, format: string, context: any[]): any {
        return this.encoder.encode(data, format, context);
    }

    /**
     * @inheritDoc
     */
    canEncode(data: any, format: string, context: any[]): boolean {
        return this.encoder.canEncode(data, format, context);
    }

    /**
     * @inheritDoc
     */
    decode(data: any, format: string, context: any[]): any {
        return this.decoder.decode(data, format, context);
    }

    /**
     * @inheritDoc
     */
    canDecode(data: any, format: string, context: any[]): boolean {
        return this.decoder.decode(data, format, context);
    }
}
