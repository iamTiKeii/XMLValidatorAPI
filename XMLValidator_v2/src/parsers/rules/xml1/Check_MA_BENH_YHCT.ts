import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_BENH_YHCT extends Xml1RuleBase
    {
        public get key(): string { return 'MA_BENH_YHCT'; }

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            var value = model.MA_BENH_YHCT;

            if (!value || !value.trim())
                return null;

            if (value?.length > 255)
            {
                return this.error("MA_BENH_YHCT quá kích thước tối đa (255)");
            }
            if (value.includes(",") || value.includes("|"))
            {
                return this.error("Các MA_BENH_YHCT phải cách nhau bằng dấu ';'");
            }

            return null;
        }
    }
