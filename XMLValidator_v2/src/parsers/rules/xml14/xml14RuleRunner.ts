import { Xml14Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { IXml14Rule } from './xml14RuleBase';

export class Xml14RuleRunner {
  private static readonly rules: IXml14Rule[] = [];

  public static run(model: Xml14Model, context: HoSoContext): ErrorDetails[] {
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
