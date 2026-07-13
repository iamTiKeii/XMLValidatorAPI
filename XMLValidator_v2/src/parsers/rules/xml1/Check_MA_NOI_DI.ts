import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_NOI_DI extends Xml1RuleBase
    {
        public get key(): string { return 'MA_NOI_DI'; }

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            if(model.MA_NOI_DI !== undefined && model.MA_NOI_DI !== null && model.MA_NOI_DI?.length>5)
            {
                return this.error("MA_NOI_DI quá kích thước tối đa (max 5)");
            }
            return null;
        }
    }
