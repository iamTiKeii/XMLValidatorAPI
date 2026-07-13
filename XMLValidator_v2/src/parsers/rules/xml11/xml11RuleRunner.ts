import { Xml11Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { IXml11Rule } from './xml11RuleBase';

export class Xml11RuleRunner {
  private static readonly rules: IXml11Rule[] = [];

  public static run(model: Xml11Model, context: HoSoContext): ErrorDetails[] {
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
