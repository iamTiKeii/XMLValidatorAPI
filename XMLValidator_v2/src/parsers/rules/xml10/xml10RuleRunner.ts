import { Xml10Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { IXml10Rule } from './xml10RuleBase';

export class Xml10RuleRunner {
  private static readonly rules: IXml10Rule[] = [];

  public static run(model: Xml10Model, context: HoSoContext): ErrorDetails[] {
    const errors: ErrorDetails[] = [];
    if (!model) return errors;

    for (const rule of this.rules) {
      const err = rule.check(model, context);
      if (err) {
        errors.push(err);
      }
    }

    return errors;
  }
}
