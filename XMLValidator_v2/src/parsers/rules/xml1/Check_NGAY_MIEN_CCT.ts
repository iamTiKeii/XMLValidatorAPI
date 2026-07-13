import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_NGAY_MIEN_CCT extends Xml1RuleBase
    {
        public get key(): string { return 'NGAY_MIEN_CCT'; }

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            // Có giá trị thì mới check
            if (model.NGAY_MIEN_CCT === undefined || model.NGAY_MIEN_CCT === null)
            {
                return null;
            }
            return null;
        }
    }
