import Denormalizer from "./Denormalizer";
import DenormalizerNotFound from "../Error/DenormalizerNotFound";
export default class DenormalizerRegistry implements Denormalizer {
    setDenormalizer(denormalizer: Denormalizer): void {
    }
    private denormalizers: Denormalizer[];

    constructor(denormalizers: Denormalizer[]) {
        this.denormalizers = denormalizers;
    }

    /**
     * @inheritDoc
     */
    denormalize(data: any, className: string, format: string, context: any[]): any {
        const denormalizer = this._getDenormalizer(data, className, format, context);

        return denormalizer.denormalize(data, className, format, context);
    }

    /**
     * @inheritDoc
     */
    canDenormalize(data: any, className: string, format: string, context: any[]): boolean {
        try {
            this._getDenormalizer(data, className, format, context);

            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * @throws DenormalizerNotFound
     * @private
     */
    _getDenormalizer(data: any, className: string, format: string, context: any[]): Denormalizer {
        for (const denormalizer of this.denormalizers) {
            if (denormalizer.canDenormalize(data, className, format, context)) {
                return denormalizer;
            }
        }
        
        throw new DenormalizerNotFound();
    }
}
