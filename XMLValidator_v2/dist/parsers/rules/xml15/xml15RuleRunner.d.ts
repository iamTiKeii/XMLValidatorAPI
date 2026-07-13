import { Xml15Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Xml15RuleRunner {
    private static readonly rules;
    static run(models: Xml15Model[], context: HoSoContext): ErrorDetails[];
}
