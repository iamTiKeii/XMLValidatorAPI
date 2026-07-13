import { Xml7Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Xml7RuleRunner {
    private static readonly rules;
    static run(model: Xml7Model, context: HoSoContext): ErrorDetails[];
}
