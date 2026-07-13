import { Xml3Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';

export interface IXml3Rule {
  readonly key: string;
  check(model: Xml3Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml3RuleBase implements IXml3Rule {
  public abstract get key(): string;
  public abstract check(model: Xml3Model, context: HoSoContext): ErrorDetails | null;

  protected error(message: string): ErrorDetails {
    return {
      key: this.key,
      message,
    };
  }
}
