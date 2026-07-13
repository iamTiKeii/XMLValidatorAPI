import { Xml13Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Xml13RuleRunner {
    private static readonly rules;
    static run(model: Xml13Model, context: HoSoContext): ErrorDetails[];
}
