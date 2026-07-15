import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_LY_DO_VNT extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_LY_DO_VNT_01',
      xmlType: 'XML1',
      field: 'LY_DO_VNT',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường LY_DO_VNT',
      errorMessage: 'LY_DO_VNT không được để trống khi MA_LOAI_KCB=03',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            if (model.MA_LOAI_KCB === "03" && (!model.LY_DO_VNT || !model.LY_DO_VNT.trim()))
            {
                return this.error("LY_DO_VNT không được để trống khi MA_LOAI_KCB=03");
            }
            return null;
        }
    }
