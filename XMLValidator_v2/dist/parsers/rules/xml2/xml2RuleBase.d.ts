import { Xml2Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export interface IXml2Rule {
    readonly key: string;
    check(model: Xml2Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml2RuleBase implements IXml2Rule {
    abstract get key(): string;
    abstract check(model: Xml2Model, context: HoSoContext): ErrorDetails | null;
    protected error(message: string): ErrorDetails;
}
