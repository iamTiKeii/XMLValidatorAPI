import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_KET_QUA_DTRI extends Xml1RuleBase
    {
        public get key(): string { return 'KET_QUA_DTRI'; }

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            // 1. Không được để trống
            if (!model.KET_QUA_DTRI || !model.KET_QUA_DTRI.trim())
            {
                return this.error("KET_QUA_DTRI không được để trống");
            }

            var value = model.KET_QUA_DTRI.trim();

            // 2. Quá kích thước tối đa (1)
            if (value?.length > 1)
            {
                return this.error("KET_QUA_DTRI quá kích thước tối đa (1)");
            }

            // 3. Sai kiểu dữ liệu (phải là số)
            if (isNaN(parseInt(value, 10)))
            {
                return this.error("KET_QUA_DTRI sai kiểu dữ liệu (số)");
            }
            if (!(model.KET_QUA_DTRI in DictionaryCacheInstance.ketQuaDTri))
            {
                return this.error("KET_QUA_DTRI không thuộc bảng mã kết quả điều trị");
            }

            return null;
        }
    }
