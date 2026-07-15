import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { parseExactDate } from '../../../utils/date.helper';

export class Check_NGAY_VAO_NOI_TRU extends Xml1RuleBase {
  constructor() {
    super({
      ruleId: 'RULE_XML1_NGAY_VAO_NOI_TRU_01',
      xmlType: 'XML1',
      field: 'NGAY_VAO_NOI_TRU',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường NGAY_VAO_NOI_TRU',
      errorMessage: 'NGAY_VAO_NOI_TRU quá kích thước tối đa (12)',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

  

  public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null {
    const raw = model.NGAY_VAO_NOI_TRU_RAW;

    if (!raw || !raw.trim()) {
      return null;
    }

    if (raw.length > 12) {
      return this.error('NGAY_VAO_NOI_TRU quá kích thước tối đa (12)');
    }

    const ngayVaoNoiTru = parseExactDate(raw);
    if (!ngayVaoNoiTru) {
      return this.error('NGAY_VAO_NOI_TRU không đúng định dạng yyyyMMddHHmm');
    }

    if (ngayVaoNoiTru > new Date()) {
      return this.error('NGAY_VAO_NOI_TRU không được lớn hơn ngày hiện tại');
    }

    return null;
  }
}
