import { Xml14Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export interface IXml14Rule {
    readonly key: string;
    check(model: Xml14Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml14RuleBase implements IXml14Rule {
    abstract get key(): string;
    abstract check(model: Xml14Model, context: HoSoContext): ErrorDetails | null;
    protected error(message: string): ErrorDetails;
}
