import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_DANTOC extends Xml1RuleBase
    {
        public get key(): string { return 'MA_DANTOC'; }
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
