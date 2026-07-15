import { Xml5Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { BaseRule } from '../base.rule';
export interface IXml5Rule {
    readonly key: string;
    readonly isEnabled: boolean;
    check(model: Xml5Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml5RuleBase extends BaseRule<Xml5Model> implements IXml5Rule {
}
