import { Xml8Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export interface IXml8Rule {
    readonly key: string;
    check(model: Xml8Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml8RuleBase implements IXml8Rule {
    abstract get key(): string;
    abstract check(model: Xml8Model, context: HoSoContext): ErrorDetails | null;
    protected error(message: string): ErrorDetails;
}
