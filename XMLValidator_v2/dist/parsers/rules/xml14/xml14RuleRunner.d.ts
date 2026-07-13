import { Xml14Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Xml14RuleRunner {
    private static readonly rules;
    static run(model: Xml14Model, context: HoSoContext): ErrorDetails[];
}
