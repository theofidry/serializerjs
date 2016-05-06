import Encoder from './Encoder';
import EncoderNotFound from "../Error/EncoderNotFound";

export default class EncoderRegistry implements Encoder {

    private encoders: Encoder[];

    constructor(encoders: Encoder[]) {
        this.encoders = encoders;
    }

    /**
     * @inheritDoc
     */
    encode(data: any, format: string, context: any[]): any {
        const encoder = this._getEncoder(data, format, context);
        
        return encoder.encode(data, format, context);
    }

    /**
     * @inheritDoc
     */
    canEncode(data: any, format: string, context: any[]): boolean {
        try {
            this._getEncoder(data, format, context);

            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * @throws EncoderNotFound
     */
    _getEncoder(data: any, format: string, context: any[]): Encoder {
        for (const encoder of this.encoders) {
            if (encoder.canEncode(data, format, context)) {
                return encoder;
            }
        }
        
        throw new EncoderNotFound();
    }
}
