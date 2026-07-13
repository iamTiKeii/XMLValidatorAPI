import { Xml9Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { IXml9Rule } from './xml9RuleBase';

export class Xml9RuleRunner {
  private static readonly rules: IXml9Rule[] = [];

  public static run(models: Xml9Model[], context: HoSoContext): ErrorDetails[] {
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
