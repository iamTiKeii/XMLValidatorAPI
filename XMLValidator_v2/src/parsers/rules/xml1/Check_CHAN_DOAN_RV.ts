import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_CHAN_DOAN_RV extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_CHAN_DOAN_RV_01',
      xmlType: 'XML1',
      field: 'CHAN_DOAN_RV',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường CHAN_DOAN_RV',
      errorMessage: 'CHAN_DOAN_RV không được để trống',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            if (!model.CHAN_DOAN_RV || !model.CHAN_DOAN_RV.trim())
            {
                return this.error("CHAN_DOAN_RV không được để trống");
            }
            return null;
        }
    }
