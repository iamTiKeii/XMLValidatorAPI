import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_SO_CCCD extends Xml1RuleBase
    {
        public get key(): string { return 'SO_CCCD'; }

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {

            if (model.SO_CCCD !== undefined && model.SO_CCCD !== null)
            {
                if (model.SO_CCCD?.length >15)
                {
                    return this.error("SO_CCCD quá kích thước tối đa (15 ký tự)");
                }
            }
            return null;
        }
    }
