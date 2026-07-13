import { Xml8Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Xml8RuleRunner {
    private static readonly rules;
    static run(model: Xml8Model, context: HoSoContext): ErrorDetails[];
}
