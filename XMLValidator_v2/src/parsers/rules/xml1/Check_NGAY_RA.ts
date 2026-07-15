import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { parseExactDate } from '../../../utils/date.helper';

export class Check_NGAY_RA extends Xml1RuleBase {
  constructor() {
    super({
      ruleId: 'RULE_XML1_NGAY_RA_01',
      xmlType: 'XML1',
      field: 'NGAY_RA',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường NGAY_RA',
      errorMessage: 'NGAY_RA không được để trống',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

  

  public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null {
    const raw = model.NGAY_RA_RAW;

    if (!raw || !raw.trim()) {
      return this.error('NGAY_RA không được để trống');
    }

    const ngayRa = parseExactDate(raw);
    if (!ngayRa) {
      return this.error('NGAY_RA không đúng định dạng yyyyMMddHHmm');
    }

    if (model.NGAY_VAO && ngayRa < model.NGAY_VAO) {
      return this.error('NGAY_RA không được nhỏ hơn NGAY_VAO');
    }

    return null;
  }
}
