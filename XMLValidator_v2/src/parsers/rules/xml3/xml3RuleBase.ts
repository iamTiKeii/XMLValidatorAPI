import { Xml3Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { BaseRule } from '../base.rule';

export interface IXml3Rule {
  readonly key: string;
  readonly isEnabled: boolean;
  check(model: Xml3Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml3RuleBase extends BaseRule<Xml3Model> implements IXml3Rule {}
