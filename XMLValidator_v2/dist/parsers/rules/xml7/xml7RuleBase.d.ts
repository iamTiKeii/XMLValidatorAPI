import { Xml7Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { BaseRule } from '../base.rule';
export interface IXml7Rule {
    readonly key: string;
    readonly isEnabled: boolean;
    check(model: Xml7Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml7RuleBase extends BaseRule<Xml7Model> implements IXml7Rule {
}
