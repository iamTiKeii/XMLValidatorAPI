import { Xml11Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { BaseRule } from '../base.rule';

export interface IXml11Rule {
  readonly key: string;
  readonly isEnabled: boolean;
  check(model: Xml11Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml11RuleBase extends BaseRule<Xml11Model> implements IXml11Rule {}
