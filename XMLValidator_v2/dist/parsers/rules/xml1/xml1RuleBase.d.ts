import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export interface IXml1Rule {
    readonly key: string;
    check(model: Xml1Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml1RuleBase implements IXml1Rule {
    abstract get key(): string;
    abstract check(model: Xml1Model, context: HoSoContext): ErrorDetails | null;
    protected error(message: string): ErrorDetails;
}
