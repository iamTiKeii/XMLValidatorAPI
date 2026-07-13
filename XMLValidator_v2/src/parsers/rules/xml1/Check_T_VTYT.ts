import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';

export class Check_T_VTYT extends Xml1RuleBase {
  public get key(): string {
    return 'T_VTYT';
  }

  public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null {
    const hasXml3 = context.xml3 && context.xml3.length > 0;

    if (!hasXml3) {
      if (model.T_VTYT !== undefined && model.T_VTYT !== null && model.T_VTYT !== 0) {
        return this.error('T_VTYT phải bằng 0 khi không có vật tư y tế');
      }
      return null;
    }

    if (model.T_VTYT === undefined || model.T_VTYT === null) {
      return this.error('T_VTYT không được để trống khi có vật tư y tế');
    }

    const value = model.T_VTYT;

    if (value <= 0) {
      return this.error('T_VTYT phải lớn hơn 0');
    }

    if (value.toString().length > 15) {
      return this.error('T_VTYT quá kích thước tối đa (15)');
    }

    const totalVtyt = context.xml3!.reduce((sum, x) => sum + (x.THANH_TIEN_BV || 0), 0);

    if (Math.abs(value - totalVtyt) > 0.0001) {
      return this.error(`T_VTYT (${value}) không bằng tổng tiền vật tư XML3 (${totalVtyt})`);
    }

    return null;
  }
}
