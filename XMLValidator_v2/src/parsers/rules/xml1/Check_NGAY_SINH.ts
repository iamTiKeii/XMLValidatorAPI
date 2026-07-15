import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';

export class Check_NGAY_SINH extends Xml1RuleBase {
  constructor() {
    super({
      ruleId: 'RULE_XML1_NGAY_SINH_01',
      xmlType: 'XML1',
      field: 'NGAY_SINH',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường NGAY_SINH',
      errorMessage: 'NGAY_SINH không được để trống',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

  

  public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null {
    if (!model.NGAY_SINH) {
      return this.error('NGAY_SINH không được để trống');
    }

    const ngaySinh = model.NGAY_SINH;
    const now = new Date();

    if (ngaySinh > now) {
      return this.error('NGAY_SINH không được lớn hơn ngày hiện tại');
    }

    const minDate = new Date();
    minDate.setFullYear(now.getFullYear() - 140);
    if (ngaySinh < minDate) {
      return this.error('NGAY_SINH không được nhỏ hơn 140 năm so với thời gian hiện tại');
    }

    return null;
  }
}
