import { Xml11Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Xml11RuleRunner {
    private static readonly rules;
    static run(model: Xml11Model, context: HoSoContext): ErrorDetails[];
}
