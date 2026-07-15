import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_QUOCTICH extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_MA_QUOCTICH_01',
      xmlType: 'XML1',
      field: 'MA_QUOCTICH',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường MA_QUOCTICH',
      errorMessage: 'MA_QUOCTICH không được rỗng',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {

            if (!model.MA_QUOCTICH || !model.MA_QUOCTICH.trim())
            {
                return this.error(`${this.key} không được rỗng`);
            }

            if (model.MA_QUOCTICH?.length > 3)
            {
                return this.error(`${this.key} quá kích thước tối đa (3 ký tự)`);
            }
            if (!(model.MA_QUOCTICH in DictionaryCacheInstance.maQuocTich))
            {
                return this.error(`${this.key} không tồn tại trong danh mục`);
            }
            return null;
        }
    }
