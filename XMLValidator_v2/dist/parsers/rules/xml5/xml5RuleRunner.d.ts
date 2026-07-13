import { Xml5Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Xml5RuleRunner {
    private static readonly rules;
    static run(models: Xml5Model[], context: HoSoContext): ErrorDetails[];
}
