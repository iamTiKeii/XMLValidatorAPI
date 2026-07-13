import { Xml11Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export interface IXml11Rule {
    readonly key: string;
    check(model: Xml11Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml11RuleBase implements IXml11Rule {
    abstract get key(): string;
    abstract check(model: Xml11Model, context: HoSoContext): ErrorDetails | null;
    protected error(message: string): ErrorDetails;
}
