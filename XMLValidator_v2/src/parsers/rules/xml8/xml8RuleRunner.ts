import { Xml8Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { IXml8Rule } from './xml8RuleBase';

export class Xml8RuleRunner {
  private static readonly rules: IXml8Rule[] = [];

  public static run(model: Xml8Model, context: HoSoContext): ErrorDetails[] {
    const errors: ErrorDetails[] = [];
    if (!model) return errors;

    for (const rule of this.rules) {
      if (!rule.isEnabled) continue;
      const err = rule.check(model, context);
      if (err) {
        errors.push(err);
      }
    }

    return errors;
  }
}
