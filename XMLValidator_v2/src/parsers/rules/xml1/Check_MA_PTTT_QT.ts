import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_MA_PTTT_QT extends Xml1RuleBase
    {
        public get key(): string { return 'MA_PTTT_QT'; }

        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {
            var value = model.MA_PTTT_QT;

            if (!value || !value.trim())
                return null; // Không bắt lỗi rỗng

            // Rule 1: Quá kích thước tối đa (125)
            if (value?.length > 125)
            {
                return this.error("MA_PTTT_QT quá kích thước tối đa (125)");
            }

            // Rule 2: Phải phân cách bằng dấu ;
            if (value.includes(",") || value.includes("|"))
            {
                return this.error("Các MA_PTTT_QT phải cách nhau bằng dấu ';'");
            }

            return null;
        }
    }
