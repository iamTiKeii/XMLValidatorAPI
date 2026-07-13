import { Xml6Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';

export interface IXml6Rule {
  readonly key: string;
  check(model: Xml6Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml6RuleBase implements IXml6Rule {
  public abstract get key(): string;
  public abstract check(model: Xml6Model, context: HoSoContext): ErrorDetails | null;

  protected error(message: string): ErrorDetails {
    return {
      key: this.key,
      message,
    };
  }
}
