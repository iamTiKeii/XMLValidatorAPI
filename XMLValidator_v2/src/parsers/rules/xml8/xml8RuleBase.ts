import { Xml8Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';

export interface IXml8Rule {
  readonly key: string;
  check(model: Xml8Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml8RuleBase implements IXml8Rule {
  public abstract get key(): string;
  public abstract check(model: Xml8Model, context: HoSoContext): ErrorDetails | null;

  protected error(message: string): ErrorDetails {
    return {
      key: this.key,
      message,
    };
  }
}
