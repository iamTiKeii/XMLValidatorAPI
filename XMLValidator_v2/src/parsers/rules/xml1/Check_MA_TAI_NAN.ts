import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_TAI_NAN extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_MA_TAI_NAN_01',
      xmlType: 'XML1',
      field: 'MA_TAI_NAN',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường MA_TAI_NAN',
      errorMessage: 'MA_TAI_NAN quá kích thước tối đa (1)',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            if (!model.MA_TAI_NAN || !model.MA_TAI_NAN.trim())
            {
                return null;
            }
            if(model.MA_TAI_NAN?.length > 1)
            {
                return this.error("MA_TAI_NAN quá kích thước tối đa (1)");
            }
            // 2. Sai kiểu dữ liệu (số)
            if (isNaN(parseInt(model.MA_TAI_NAN?.trim(), 10)))
            {
                return this.error("MA_TAI_NAN sai kiểu dữ liệu (số)");
            }
            return null;
        }
    }
