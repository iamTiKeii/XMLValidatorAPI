import { Xml9Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';

export interface IXml9Rule {
  readonly key: string;
  check(model: Xml9Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml9RuleBase implements IXml9Rule {
  public abstract get key(): string;
  public abstract check(model: Xml9Model, context: HoSoContext): ErrorDetails | null;

  protected error(message: string): ErrorDetails {
    return {
      key: this.key,
      message,
    };
  }
}
