import { Xml3Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export interface IXml3Rule {
    readonly key: string;
    check(model: Xml3Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml3RuleBase implements IXml3Rule {
    abstract get key(): string;
    abstract check(model: Xml3Model, context: HoSoContext): ErrorDetails | null;
    protected error(message: string): ErrorDetails;
}
