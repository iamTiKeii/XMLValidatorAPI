import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_NGHE_NGHIEP extends Xml1RuleBase
    {
        public get key(): string { return 'MA_NGHE_NGHIEP'; }
        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {

            if (!model.MA_NGHE_NGHIEP || !model.MA_NGHE_NGHIEP.trim())
            {
                return this.error(`${this.key} không được rỗng`);
            }
            if(model.MA_NGHE_NGHIEP?.length > 5)
            {
                return this.error(`${this.key} quá kích thước tối đa ( max: 5)`);
            }
            return null;
        }
    }
