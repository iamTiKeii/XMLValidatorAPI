import { Xml14Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { BaseRule } from '../base.rule';
export interface IXml14Rule {
    readonly key: string;
    readonly isEnabled: boolean;
    check(model: Xml14Model, context: HoSoContext): ErrorDetails | null;
}
export declare abstract class Xml14RuleBase extends BaseRule<Xml14Model> implements IXml14Rule {
}
