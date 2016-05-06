import Decoder from './Decoder';
import DecoderNotFound from "../Error/DecoderNotFound";

export default class DecoderRegistry implements Decoder {
    private decoders: Decoder[];

    constructor(encoders: Decoder[]) {
        this.decoders = encoders;
    }

    /**
     * @inheritDoc
     */
    decode(data: any, format: string, context: any[]): any {
        const encoder = this._getDecoder(data, format, context);

        return encoder.decode(data, format, context);
    }

    /**
     * @inheritDoc
     */
    canDecode(data: any, format: string, context: any[]): boolean {
        try {
            this._getDecoder(data, format, context);

            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * @throws DecoderNotFound
     * @private
     */
    _getDecoder(data: any, format: string, context: any[]): Decoder {
        for (const decoder of this.decoders) {
            if (decoder.canDecode(data, format, context)) {
                return decoder;
            }
        }
        
        throw new DecoderNotFound();
    }
}
