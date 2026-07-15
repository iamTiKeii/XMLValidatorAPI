import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_DOITUONG_KCB extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_MA_DOITUONG_KCB_01',
      xmlType: 'XML1',
      field: 'MA_DOITUONG_KCB',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường MA_DOITUONG_KCB',
      errorMessage: 'MA_DOITUONG_KCB không được để trống',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            // 1. Không được để trống
            if (!model.MA_DOITUONG_KCB || !model.MA_DOITUONG_KCB.trim())
            {
                return this.error("MA_DOITUONG_KCB không được để trống");
            }

            if (!(model.MA_DOITUONG_KCB in DictionaryCacheInstance.doiTuongKCB))
            {
                return this.error(`${this.key} không tồn tại trong danh mục`);
            }
            return null;
        }
    }
