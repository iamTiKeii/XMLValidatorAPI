import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_CHAN_DOAN_VAO extends Xml1RuleBase
    {
        public get key(): string { return 'CHAN_DOAN_VAO'; }

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            if (!model.CHAN_DOAN_VAO || !model.CHAN_DOAN_VAO.trim())
            {
                return this.error("CHAN_DOAN_VAO không được để trống");
            }
            return null;
        }
    }
