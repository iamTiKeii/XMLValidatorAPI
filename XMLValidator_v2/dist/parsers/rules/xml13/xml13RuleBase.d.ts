import { Xml13Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export interface IXml13Rule {
    readonly key: string;
    check(model: Xml13Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml13RuleBase implements IXml13Rule {
    abstract get key(): string;
    abstract check(model: Xml13Model, context: HoSoContext): ErrorDetails | null;
    protected error(message: string): ErrorDetails;
}
