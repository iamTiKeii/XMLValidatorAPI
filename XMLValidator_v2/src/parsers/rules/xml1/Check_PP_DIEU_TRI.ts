import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_PP_DIEU_TRI extends Xml1RuleBase
    {
        public get key(): string { return 'PP_DIEU_TRI'; }

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            if (!model.PP_DIEU_TRI || !model.PP_DIEU_TRI.trim())
            {
                return this.error("PP_DIEU_TRI không được để trống");
            }
            return null;
        }
    }
