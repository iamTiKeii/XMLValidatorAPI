import { Xml4Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export interface IXml4Rule {
    readonly key: string;
    check(model: Xml4Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml4RuleBase implements IXml4Rule {
    abstract get key(): string;
    abstract check(model: Xml4Model, context: HoSoContext): ErrorDetails | null;
    protected error(message: string): ErrorDetails;
}
