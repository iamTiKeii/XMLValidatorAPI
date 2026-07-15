import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_HO_TEN extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_HO_TEN_01',
      xmlType: 'XML1',
      field: 'HO_TEN',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường HO_TEN',
      errorMessage: 'HO_TEN không được rỗng',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {

            if (!model.HO_TEN || !model.HO_TEN.trim())
            {
                return this.error(`${this.key} không được rỗng`);
            }

            if (model.HO_TEN?.length > 255)
            {
                return this.error(`${this.key} quá kích thước tối đa (255 ký tự)`);
            }

            return null;
        }
    }
