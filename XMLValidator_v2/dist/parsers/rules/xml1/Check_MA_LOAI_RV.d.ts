import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Check_MA_LOAI_RV extends Xml1RuleBase {
    get key(): string;
    check(model: Xml1Model, context: HoSoContext): ErrorDetails | null;
}
