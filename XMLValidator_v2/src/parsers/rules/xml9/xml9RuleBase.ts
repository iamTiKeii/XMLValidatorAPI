import { Xml9Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { BaseRule } from '../base.rule';

export interface IXml9Rule {
  readonly key: string;
  readonly isEnabled: boolean;
  check(model: Xml9Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml9RuleBase extends BaseRule<Xml9Model> implements IXml9Rule {}
