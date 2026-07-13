import { Xml7Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export interface IXml7Rule {
    readonly key: string;
    check(model: Xml7Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml7RuleBase implements IXml7Rule {
    abstract get key(): string;
    abstract check(model: Xml7Model, context: HoSoContext): ErrorDetails | null;
    protected error(message: string): ErrorDetails;
}
