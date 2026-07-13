import { Xml7Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { IXml7Rule } from './xml7RuleBase';

export class Xml7RuleRunner {
  private static readonly rules: IXml7Rule[] = [];

  public static run(model: Xml7Model, context: HoSoContext): ErrorDetails[] {
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
