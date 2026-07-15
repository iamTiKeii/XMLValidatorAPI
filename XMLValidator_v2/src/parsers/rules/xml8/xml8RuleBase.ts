import { Xml8Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { BaseRule } from '../base.rule';

export interface IXml8Rule {
  readonly key: string;
  readonly isEnabled: boolean;
  check(model: Xml8Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml8RuleBase extends BaseRule<Xml8Model> implements IXml8Rule {}
