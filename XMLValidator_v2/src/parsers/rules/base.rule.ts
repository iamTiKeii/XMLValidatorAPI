import { HoSoContext } from '../../services/hoso-context';
import { ErrorDetails } from '../../dto/xml-check.dto';
import { RulesConfigRegistry } from './rules.config';

export interface RuleMetadata {
  ruleId: string;
  xmlType: string;
  field: string;
  severity: 'ERROR' | 'WARNING';
  description: string;
  errorMessage: string;
  reference: string;
}

export abstract class BaseRule<T> {
  constructor(public readonly metadata: RuleMetadata) {
    RulesConfigRegistry.getInstance().initializeRuleDefault(this.metadata.ruleId, {
      enabled: true,
      severity: this.metadata.severity,
      customErrorMessage: this.metadata.errorMessage,
    });
  }

  public get isEnabled(): boolean {
    return RulesConfigRegistry.getInstance().isEnabled(this.metadata.ruleId);
  }

  public get severity(): 'ERROR' | 'WARNING' {
    return RulesConfigRegistry.getInstance().getSeverity(this.metadata.ruleId, this.metadata.severity);
  }

  public get errorMessage(): string {
    return RulesConfigRegistry.getInstance().getErrorMessage(this.metadata.ruleId, this.metadata.errorMessage);
  }

  public get key(): string {
    return this.metadata.field;
  }

  public get ruleId(): string {
    return this.metadata.ruleId;
  }

  public get xmlType(): string {
    return this.metadata.xmlType;
  }

  public abstract check(model: T, context: HoSoContext): ErrorDetails | null;

  protected error(customMessage?: string): ErrorDetails {
    const registry = RulesConfigRegistry.getInstance();
    const registryMessage = registry.getErrorMessage(this.metadata.ruleId, this.metadata.errorMessage);
    
    let finalMessage = customMessage || registryMessage;
    if (registryMessage !== this.metadata.errorMessage) {
      // User customized the error message globally for this rule
      finalMessage = registryMessage;
    }

    return {
      key: this.key,
      message: finalMessage,
      ruleId: this.metadata.ruleId,
      severity: registry.getSeverity(this.metadata.ruleId, this.metadata.severity),
      reference: this.metadata.reference,
    } as any;
  }
}
