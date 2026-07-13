import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Xml1RuleRunner {
    private static readonly rules;
    static run(model: Xml1Model, context: HoSoContext): ErrorDetails[];
}
