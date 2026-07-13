import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { DictionaryCacheInstance } from '../../dictionary.cache';

export class Check_DIA_CHI extends Xml1RuleBase
    {
        public get key(): string { return 'DIA_CHI'; }
        public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null
        {

            if (!model.DIA_CHI || !model.DIA_CHI.trim())
            {
                return this.error(`${this.key} không được rỗng`);
            }

            if (model.DIA_CHI?.length > 1024)
            {
                return this.error(`${this.key} quá kích thước tối đa (1024 ký tự)`);
            }

            return null;
        }
    }
