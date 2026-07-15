import { Xml13Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { IXml13Rule } from './xml13RuleBase';

export class Xml13RuleRunner {
  private static readonly rules: IXml13Rule[] = [];

  public static run(model: Xml13Model, context: HoSoContext): ErrorDetails[] {
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
