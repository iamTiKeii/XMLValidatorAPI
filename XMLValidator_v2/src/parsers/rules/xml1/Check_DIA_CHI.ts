import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_DIA_CHI extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_DIA_CHI_01',
      xmlType: 'XML1',
      field: 'DIA_CHI',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường DIA_CHI',
      errorMessage: 'DIA_CHI không được rỗng',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        
        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {

            if (!model.DIA_CHI || !model.DIA_CHI.trim())
            {
                return this.error(`${this.key} không được rỗng`);
            }

            if (model.DIA_CHI?.length > 1024)
            {
                return this.error(`${this.key} quá kích thước tối đa (1024 ký tự)`);
            }

            return null;
        }
    }
