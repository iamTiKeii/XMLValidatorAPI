import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';

export class Check_T_THUOC extends Xml1RuleBase {
  constructor() {
    super({
      ruleId: 'RULE_XML1_T_THUOC_01',
      xmlType: 'XML1',
      field: 'T_THUOC',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường T_THUOC',
      errorMessage: 'T_THUOC phải bằng 0 khi không có thuốc',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

  

  public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null {
    const hasXml2 = context.xml2 && context.xml2.length > 0;

    if (!hasXml2) {
      if (model.T_THUOC !== undefined && model.T_THUOC !== null && model.T_THUOC !== 0) {
        return this.error('T_THUOC phải bằng 0 khi không có thuốc');
      }
      return null;
    }

    if (model.T_THUOC === undefined || model.T_THUOC === null) {
      return this.error('T_THUOC không được để trống khi có thuốc');
    }

    const value = model.T_THUOC;

    if (value < 0) {
      return this.error('T_THUOC không được nhỏ hơn 0');
    }

    if (value.toString().length > 15) {
      return this.error('T_THUOC quá kích thước tối đa (15)');
    }

    const totalThuoc = context.xml2!.reduce((sum, x) => sum + (x.THANH_TIEN_BV || 0), 0);

    if (Math.abs(value - totalThuoc) > 0.0001) {
      return this.error(`T_THUOC (${value}) không bằng tổng tiền thuốc XML2 (${totalThuoc})`);
    }

    return null;
  }
}
