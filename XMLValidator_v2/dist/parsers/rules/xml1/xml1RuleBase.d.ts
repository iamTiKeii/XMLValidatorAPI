import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { BaseRule } from '../base.rule';
export interface IXml1Rule {
    readonly key: string;
    readonly isEnabled: boolean;
    check(model: Xml1Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml1RuleBase extends BaseRule<Xml1Model> implements IXml1Rule {
}
