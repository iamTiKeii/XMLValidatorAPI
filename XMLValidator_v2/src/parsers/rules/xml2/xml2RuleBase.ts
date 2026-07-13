import { Xml2Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';

export interface IXml2Rule {
  readonly key: string;
  check(model: Xml2Model, context: HoSoContext): ErrorDetails | null;
}

export abstract class Xml2RuleBase implements IXml2Rule {
  public abstract get key(): string;
  public abstract check(model: Xml2Model, context: HoSoContext): ErrorDetails | null;

  protected error(message: string): ErrorDetails {
    return {
      key: this.key,
      message,
    };
  }
}
