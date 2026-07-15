import { HoSoContext } from '../../services/hoso-context';
import { ErrorDetails } from '../../dto/xml-check.dto';
export interface RuleMetadata {
    ruleId: string;
    xmlType: string;
    field: string;
    severity: 'ERROR' | 'WARNING';
    description: string;
    errorMessage: string;
    reference: string;
}
export declare abstract class BaseRule<T> {
    readonly metadata: RuleMetadata;
    constructor(metadata: RuleMetadata);
    get isEnabled(): boolean;
    get severity(): 'ERROR' | 'WARNING';
    get errorMessage(): string;
    get key(): string;
    get ruleId(): string;
    get xmlType(): string;
    abstract check(model: T, context: HoSoContext): ErrorDetails | null;
    protected error(customMessage?: string): ErrorDetails;
}
