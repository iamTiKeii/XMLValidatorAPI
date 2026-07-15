import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_DANTOC extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_MA_DANTOC_01',
      xmlType: 'XML1',
      field: 'MA_DANTOC',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường MA_DANTOC',
      errorMessage: 'MA_DANTOC không được rỗng',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        
        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {

            if (!model.MA_DANTOC || !model.MA_DANTOC.trim())
            {
                return this.error(`${this.key} không được rỗng`);
            }
            if (!(model.MA_DANTOC in DictionaryCacheInstance.maDanToc))
            {
                return this.error(`${this.key} không tồn tại trong danh mục`);
            }
            return null;
        }
    }
