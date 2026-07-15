import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_LY_DO_VV extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_LY_DO_VV_01',
      xmlType: 'XML1',
      field: 'LY_DO_VV',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường LY_DO_VV',
      errorMessage: 'LY_DO_VV không được để trống',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            if (!model.LY_DO_VV || !model.LY_DO_VV.trim()){
                return this.error("LY_DO_VV không được để trống");
            }
            return null;
        }
    }
