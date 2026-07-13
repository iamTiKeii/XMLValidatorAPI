import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_LOAI_RV extends Xml1RuleBase
    {
        public get key(): string { return 'MA_LOAI_RV'; }

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            // 1. Không được để trống
            if (!model.MA_LOAI_RV || !model.MA_LOAI_RV.trim())
            {
                return this.error("MA_LOAI_RV không được để trống");
            }

            var value = model.MA_LOAI_RV.trim();

            // 2. Quá kích thước tối đa (1)
            if (value?.length > 1)
            {
                return this.error("MA_LOAI_RV quá kích thước tối đa");
            }

            // 3. Sai kiểu dữ liệu (số)
            if (isNaN(parseInt(value, 10)))
            {
                return this.error("MA_LOAI_RV sai kiểu dữ liệu (số)");
            }

            if (!(model.MA_LOAI_RV in DictionaryCacheInstance.maLoaiRV))
            {
                return this.error("MA_LOAI_RV không thuộc bảng mã loại ra viện");
            }

            return null;
        }
    }
