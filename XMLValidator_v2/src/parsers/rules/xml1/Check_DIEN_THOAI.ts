import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_DIEN_THOAI extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_DIEN_THOAI_01',
      xmlType: 'XML1',
      field: 'DIEN_THOAI',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường DIEN_THOAI',
      errorMessage: 'DIEN_THOAI quá kích thước quy định ( 15 ký tự )',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            if(model.DIEN_THOAI !== undefined && model.DIEN_THOAI !== null)
            {
                if (model.DIEN_THOAI?.length > 15)
                {
                    return this.error(`${this.key} quá kích thước quy định ( 15 ký tự )`);
                }
            }
            return null;
        }
    }
