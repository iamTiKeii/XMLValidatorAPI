import { Xml11Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';

export interface IXml11Rule {
  readonly key: string;
  check(model: Xml11Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml11RuleBase implements IXml11Rule {
  public abstract get key(): string;
  public abstract check(model: Xml11Model, context: HoSoContext): ErrorDetails | null;

  protected error(message: string): ErrorDetails {
    return {
      key: this.key,
      message,
    };
  }
}
