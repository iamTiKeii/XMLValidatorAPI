import { Xml6Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { IXml6Rule } from './xml6RuleBase';

export class Xml6RuleRunner {
  private static readonly rules: IXml6Rule[] = [];

  public static run(models: Xml6Model[], context: HoSoContext): ErrorDetails[] {
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
