import { Xml10Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { BaseRule } from '../base.rule';

export interface IXml10Rule {
  readonly key: string;
  readonly isEnabled: boolean;
  check(model: Xml10Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml10RuleBase extends BaseRule<Xml10Model> implements IXml10Rule {}
