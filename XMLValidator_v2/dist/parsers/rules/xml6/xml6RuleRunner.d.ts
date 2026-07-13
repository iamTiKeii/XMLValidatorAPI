import { Xml6Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Xml6RuleRunner {
    private static readonly rules;
    static run(models: Xml6Model[], context: HoSoContext): ErrorDetails[];
}
