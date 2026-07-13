import { Xml10Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';

export interface IXml10Rule {
  readonly key: string;
  check(model: Xml10Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml10RuleBase implements IXml10Rule {
  public abstract get key(): string;
  public abstract check(model: Xml10Model, context: HoSoContext): ErrorDetails | null;

  protected error(message: string): ErrorDetails {
    return {
      key: this.key,
      message,
    };
  }
}
