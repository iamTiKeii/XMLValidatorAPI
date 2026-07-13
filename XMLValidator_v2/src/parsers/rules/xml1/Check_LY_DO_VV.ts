import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_LY_DO_VV extends Xml1RuleBase
    {
        public get key(): string { return 'LY_DO_VV'; }

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            if (!model.LY_DO_VV || !model.LY_DO_VV.trim()){
                return this.error("LY_DO_VV không được để trống");
            }
            return null;
        }
    }
