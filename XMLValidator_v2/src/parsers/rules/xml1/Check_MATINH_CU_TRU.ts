import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MATINH_CU_TRU extends Xml1RuleBase
    {
        public get key(): string { return 'MATINH_CU_TRU'; }
        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            if (!model.MATINH_CU_TRU || !model.MATINH_CU_TRU.trim())
            {
                return this.error(`${this.key} không được rỗng`);
            }

            if (model.MATINH_CU_TRU?.length > 2)
            {
                return this.error(`${this.key} quá kích thước tối đa (2 ký tự)`);
            }
            return null;
        }
    }
