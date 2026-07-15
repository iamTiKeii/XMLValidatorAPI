import { Xml15Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { BaseRule } from '../base.rule';
export interface IXml15Rule {
    readonly key: string;
    readonly isEnabled: boolean;
    check(model: Xml15Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml15RuleBase extends BaseRule<Xml15Model> implements IXml15Rule {
}
