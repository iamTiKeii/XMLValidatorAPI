import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_THE_BHYT extends Xml1RuleBase {
  public get key(): string {
    return 'MA_THE_BHYT';
  }

  public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null {
    if (!model.MA_THE_BHYT || !model.MA_THE_BHYT.trim()) {
      return this.error(`${this.key} không được để trống`);
    }

    const cards = model.MA_THE_BHYT
      .split(';')
      .map(x => x.trim())
      .filter(x => x.length > 0);

    if (cards.length > 1 && !model.MA_THE_BHYT.includes(';')) {
      return this.error(`Các ${this.key} phải cách nhau bằng dấu ';'`);
    }

    for (const card of cards) {
      if (card.length < 15) {
        return this.error(`${this.key} không đúng định dạng: ${card}`);
      }

      const doiTuong = card.substring(0, 2);
      if (!(doiTuong in DictionaryCacheInstance.doiTuongBHYT)) {
        return this.error(`MA_THE_BHYT có mã đối tượng không hợp lệ: ${doiTuong}`);
      }

      const quyenLoi = card.charAt(2);
      if (quyenLoi < '1' || quyenLoi > '5') {
        return this.error("Ký tự thứ 3 của MA_THE_BHYT phải là số từ 1 đến 5");
      }

      const soCuoi = card.substring(card.length - 10);
      if (!/^\d{10}$/.test(soCuoi)) {
        return this.error("10 ký tự cuối của MA_THE_BHYT phải là số");
      }
    }

    return null;
  }
}
