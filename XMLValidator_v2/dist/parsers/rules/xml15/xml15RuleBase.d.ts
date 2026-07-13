import { Xml15Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export interface IXml15Rule {
    readonly key: string;
    check(model: Xml15Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml15RuleBase implements IXml15Rule {
    abstract get key(): string;
    abstract check(model: Xml15Model, context: HoSoContext): ErrorDetails | null;
    protected error(message: string): ErrorDetails;
}
