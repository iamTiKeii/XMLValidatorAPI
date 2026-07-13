import { Xml10Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Xml10RuleRunner {
    private static readonly rules;
    static run(model: Xml10Model, context: HoSoContext): ErrorDetails[];
}
