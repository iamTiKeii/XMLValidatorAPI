import { Xml13Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { BaseRule } from '../base.rule';
export interface IXml13Rule {
    readonly key: string;
    readonly isEnabled: boolean;
    check(model: Xml13Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml13RuleBase extends BaseRule<Xml13Model> implements IXml13Rule {
}
