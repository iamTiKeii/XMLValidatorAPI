import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_CHAN_DOAN_VAO extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_CHAN_DOAN_VAO_01',
      xmlType: 'XML1',
      field: 'CHAN_DOAN_VAO',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường CHAN_DOAN_VAO',
      errorMessage: 'CHAN_DOAN_VAO không được để trống',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            if (!model.CHAN_DOAN_VAO || !model.CHAN_DOAN_VAO.trim())
            {
                return this.error("CHAN_DOAN_VAO không được để trống");
            }
            return null;
        }
    }
