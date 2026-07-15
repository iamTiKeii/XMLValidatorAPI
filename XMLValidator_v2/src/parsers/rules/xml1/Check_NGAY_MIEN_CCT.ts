import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { parseExactDate } from '../../../utils/date.helper';

export class Check_NGAY_MIEN_CCT extends Xml1RuleBase {
  constructor() {
    super({
      ruleId: 'RULE_XML1_NGAY_MIEN_CCT_01',
      xmlType: 'XML1',
      field: 'NGAY_MIEN_CCT',
      severity: 'ERROR',
      description: 'Kiểm tra quy định ngày miễn cùng chi trả có đúng định dạng yyyymmdd',
      errorMessage: 'NGAY_MIEN_CCT không hợp lệ',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

  public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null {
    const raw = model.NGAY_MIEN_CCT_RAW;
    if (!raw || !raw.trim()) {
      return null; // Optional field
    }

    const value = raw.trim();
    if (value.length !== 8) {
      return this.error('NGAY_MIEN_CCT không đúng định dạng yyyyMMdd');
    }

    const parsed = parseExactDate(value);
    if (!parsed) {
      return this.error('NGAY_MIEN_CCT không đúng định dạng yyyyMMdd');
    }

    return null;
  }
}
