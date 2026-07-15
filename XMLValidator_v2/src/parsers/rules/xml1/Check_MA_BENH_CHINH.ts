import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_BENH_CHINH extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_MA_BENH_CHINH_01',
      xmlType: 'XML1',
      field: 'MA_BENH_CHINH',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường MA_BENH_CHINH',
      errorMessage: 'MA_BENH_CHINH không được để trống',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            if (!model.MA_BENH_CHINH || !model.MA_BENH_CHINH.trim())
            {
                return this.error("MA_BENH_CHINH không được để trống");
            }
            if(model.MA_BENH_CHINH?.length > 7)
            {
                return this.error("MA_BENH_CHINH vượt quá chiều dài tối đa (max 7)");
            }
            return null;
        }
    }
