import { Xml2Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
export declare class Xml2RuleRunner {
    private static readonly rules;
    static run(models: Xml2Model[], context: HoSoContext): ErrorDetails[];
}
