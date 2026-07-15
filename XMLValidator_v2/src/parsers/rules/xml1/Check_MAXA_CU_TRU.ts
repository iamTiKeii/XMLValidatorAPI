import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MAXA_CU_TRU extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_MAXA_CU_TRU_01',
      xmlType: 'XML1',
      field: 'MAXA_CU_TRU',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường MAXA_CU_TRU',
      errorMessage: 'MAXA_CU_TRU quá kích thước tối đa (5 ký tự)',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            if (!model.MAXA_CU_TRU || !model.MAXA_CU_TRU.trim())
            {
                return null;
            }

            if (model.MAXA_CU_TRU?.length > 5)
            {
                return this.error(`${this.key} quá kích thước tối đa (5 ký tự)`);
            }
            return null;
        }
    }
