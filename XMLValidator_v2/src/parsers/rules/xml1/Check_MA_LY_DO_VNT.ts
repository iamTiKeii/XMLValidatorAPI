import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_LY_DO_VNT extends Xml1RuleBase
    {
        public get key(): string { return 'MA_LY_DO_VNT'; }

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            if (model.MA_LOAI_KCB == "03" && !model.MA_LY_DO_VNT || !model.MA_LY_DO_VNT.trim())
            {
                return this.error("MA_LY_DO_VNT không được để trống khi MA_LOAI_KCB=03");
            }
            return null;
        }
    }
