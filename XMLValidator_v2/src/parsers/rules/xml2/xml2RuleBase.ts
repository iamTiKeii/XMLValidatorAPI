import { Xml2Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { BaseRule } from '../base.rule';

export interface IXml2Rule {
  readonly key: string;
  readonly isEnabled: boolean;
  check(model: Xml2Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml2RuleBase extends BaseRule<Xml2Model> implements IXml2Rule {}
