import { Xml4Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Xml4RuleRunner {
    private static readonly rules;
    static run(models: Xml4Model[], context: HoSoContext): ErrorDetails[];
}
