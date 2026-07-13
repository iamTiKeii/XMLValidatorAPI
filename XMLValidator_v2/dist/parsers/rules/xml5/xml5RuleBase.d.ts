import { Xml5Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export interface IXml5Rule {
    readonly key: string;
    check(model: Xml5Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml5RuleBase implements IXml5Rule {
    abstract get key(): string;
    abstract check(model: Xml5Model, context: HoSoContext): ErrorDetails | null;
    protected error(message: string): ErrorDetails;
}
