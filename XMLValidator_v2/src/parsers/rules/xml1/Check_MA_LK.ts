import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_LK extends Xml1RuleBase
    {
        public get key(): string { return 'MA_LK'; }

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {

            if (!model.MA_LK || !model.MA_LK.trim())
            {
                return this.error("MA_LK không được rỗng");
            }

            if (model.MA_LK?.length > 100)
            {
                return this.error("MA_LK quá kích thước tối đa (100 ký tự)");
            }

            return null;
        }
    }

