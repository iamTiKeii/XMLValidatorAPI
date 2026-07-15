import { Xml6Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { BaseRule } from '../base.rule';

export interface IXml6Rule {
  readonly key: string;
  readonly isEnabled: boolean;
  check(model: Xml6Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml6RuleBase extends BaseRule<Xml6Model> implements IXml6Rule {}
