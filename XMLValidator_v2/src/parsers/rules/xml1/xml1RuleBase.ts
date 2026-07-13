import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';

export interface IXml1Rule {
  readonly key: string;
  check(model: Xml1Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml1RuleBase implements IXml1Rule {
  public abstract get key(): string;
  public abstract check(model: Xml1Model, context: HoSoContext): ErrorDetails | null;

  protected error(message: string): ErrorDetails {
    return {
      key: this.key,
      message,
    };
  }
}
