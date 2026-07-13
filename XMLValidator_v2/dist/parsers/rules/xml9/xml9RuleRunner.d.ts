import { Xml9Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Xml9RuleRunner {
    private static readonly rules;
    static run(models: Xml9Model[], context: HoSoContext): ErrorDetails[];
}
