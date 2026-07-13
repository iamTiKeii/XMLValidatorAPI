import { Xml3Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Xml3RuleRunner {
    private static readonly rules;
    static run(models: Xml3Model[], context: HoSoContext): ErrorDetails[];
}
