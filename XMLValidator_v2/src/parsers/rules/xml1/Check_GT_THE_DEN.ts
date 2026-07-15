import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';

export class Check_GT_THE_DEN extends Xml1RuleBase {
  constructor() {
    super({
      ruleId: 'RULE_XML1_GT_THE_DEN_01',
      xmlType: 'XML1',
      field: 'GT_THE_DEN',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường GT_THE_DEN',
      errorMessage: 'GT_THE_DEN không được để trống',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

  

  public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null {
    if (!model.GT_THE_DEN) {
      return this.error('GT_THE_DEN không được để trống');
    }

    if (model.MA_THE_BHYT && model.MA_THE_BHYT.trim()) {
      const bhytList = model.MA_THE_BHYT
        .split(';')
        .map(x => x.trim())
        .filter(x => x.length > 0);

      if (bhytList.length > 1) {
        return this.error("Thứ tự GT_THE_DEN không khớp với thứ tự của MA_THE_BHYT");
      }
    }

    if (model.GT_THE_TU && model.GT_THE_DEN < model.GT_THE_TU) {
      return this.error("GT_THE_DEN không được nhỏ hơn GT_THE_TU");
    }

    return null;
  }
}
