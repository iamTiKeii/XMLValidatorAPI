import { Xml10Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export interface IXml10Rule {
    readonly key: string;
    check(model: Xml10Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml10RuleBase implements IXml10Rule {
    abstract get key(): string;
    abstract check(model: Xml10Model, context: HoSoContext): ErrorDetails | null;
    protected error(message: string): ErrorDetails;
}
