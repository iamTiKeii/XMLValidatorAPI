import { Xml5Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { IXml5Rule } from './xml5RuleBase';

export class Xml5RuleRunner {
  private static readonly rules: IXml5Rule[] = [];

  public static run(models: Xml5Model[], context: HoSoContext): ErrorDetails[] {
    const errors: ErrorDetails[] = [];
    if (!models || models.length === 0) return errors;

    for (const model of models) {
      for (const rule of this.rules) {
        const err = rule.check(model, context);
        if (err) {
          errors.push(err);
        }
      }
    }

    return errors;
  }
}
