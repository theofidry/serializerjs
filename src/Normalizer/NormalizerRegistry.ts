import Normalizer from "./Normalizer";
import NormalizerNotFound from "../Error/NormalizerNotFound";
export default class NormalizerRegistry implements Normalizer {
    setNormalizer(normalizer: Normalizer): void {
    }

    private normalizers: Normalizer[];

    constructor(normalizers: Normalizer[]) {
        this.normalizers = normalizers;
    }

    /**
     * @inheritDoc
     */
    normalize(data: any, format: string, context: any[]): any {
        const normalizer = this._getNormalizer(data, format, context);
        
        return normalizer.normalize(data, format, context);
    }

    /**
     * @inheritDoc
     */
    canNormalize(data: any, format: string, context: any[]): boolean {
        try {
            this._getNormalizer(data, format, context);

            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * @throws NormalizerNotFound
     */
    _getNormalizer(data: any, format: string, context: any[]): Normalizer {
        for (const normalizer of this.normalizers) {
            if (normalizer.canNormalize(data, format, context)) {
                return normalizer;
            }
        }
        
        throw new NormalizerNotFound();
    }
}
