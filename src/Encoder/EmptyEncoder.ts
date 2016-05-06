

import Decoder from './Decoder';
import Encoder from './Encoder';

export default class EmptyEncoder implements Decoder, Encoder
{
    /**
     * @inheritDoc
     */
    canDecode(data: any, format: string, context: any[]): boolean {
        return true;
    }

    /**
     * @inheritDoc
     */
    decode(data: any, format: string, context: any[]): any {
        return data;
    }

    /**
     * @inheritDoc
     */
    canEncode(data: any, format: string, context: any[]): boolean {
        return true;
    }

    /**
     * @inheritDoc
     */
    encode(data: any, format: string, context: any[]): any {
        return data;
    }
}
