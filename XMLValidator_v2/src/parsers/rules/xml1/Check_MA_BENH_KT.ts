import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_BENH_KT extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_MA_BENH_KT_01',
      xmlType: 'XML1',
      field: 'MA_BENH_KT',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường MA_BENH_KT',
      errorMessage: 'MA_BENH_KT quá kích thước tối đa (100)',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            var value = model.MA_BENH_KT;

            if (!value || !value.trim())
                return null; // Không bắt lỗi rỗng

            // Rule 1: Quá kích thước tối đa (100)
            if (value?.length > 100)
            {
                return this.error("MA_BENH_KT quá kích thước tối đa (100)");
            }

            // Rule 2: Phải phân cách bằng dấu ;
            if (value.includes(",") || value.includes("|"))
            {
                return this.error("Các MA_BENH_KT phải cách nhau bằng dấu ';'");
            }

            const items = value
                .split(';').filter(x => x.length > 0);

            // Rule 3: Tối đa 12 mã
            if (items.length > 12)
            {
                return this.error("MA_BENH_KT tối đa 12 mã");
            }

            return null;
        }
    }
