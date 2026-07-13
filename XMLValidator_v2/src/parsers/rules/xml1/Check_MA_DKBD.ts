import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';

export class Check_MA_DKBD extends Xml1RuleBase {
  public get key(): string {
    return 'MA_DKBD';
  }

  public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null {
    if (!model.MA_DKBD || !model.MA_DKBD.trim()) {
      return this.error('MA_DKBD không được để trống');
    }

    const dkbdList = model.MA_DKBD
      .split(';')
      .map(x => x.trim())
      .filter(x => x.length > 0);

    if (dkbdList.length > 1 && !model.MA_DKBD.includes(';')) {
      return this.error("Các MA_DKBD phải cách nhau bằng dấu ';'");
    }

    if (!model.MA_THE_BHYT || !model.MA_THE_BHYT.trim()) {
      return null;
    }

    const bhytList = model.MA_THE_BHYT
      .split(';')
      .map(x => x.trim())
      .filter(x => x.length > 0);

    if (dkbdList.length !== bhytList.length) {
      return this.error("Thứ tự MA_DKBD không khớp với thứ tự của MA_THE_BHYT");
    }

    return null;
  }
}
