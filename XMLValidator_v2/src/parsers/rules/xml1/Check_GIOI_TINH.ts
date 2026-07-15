import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_GIOI_TINH extends Xml1RuleBase
    {
  constructor() {
    super({
      ruleId: 'RULE_XML1_GIOI_TINH_01',
      xmlType: 'XML1',
      field: 'GIOI_TINH',
      severity: 'ERROR',
      description: 'Kiểm tra quy định cho trường GIOI_TINH',
      errorMessage: 'GIOI_TINH không được để trống',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

        

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {

            if (model.GIOI_TINH === undefined || model.GIOI_TINH === null)
            {
                return this.error("GIOI_TINH không được để trống");
            }
            const list_GIOI_TINH = [1, 2, 3];
            if (!list_GIOI_TINH.includes(model.GIOI_TINH as number))
            {
                return this.error("GIOI_TINH sai định dạng (Nam : 1, Nữ : 2, Chưa xác định : 3)");
            }

            return null;
        }
    }
