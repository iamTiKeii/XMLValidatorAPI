export interface RuleConfig {
    enabled: boolean;
    severity?: 'ERROR' | 'WARNING';
    customErrorMessage?: string;
}
export declare class RulesConfigRegistry {
    private static instance;
    private configMap;
    private readonly configFilePath;
    private constructor();
    static getInstance(): RulesConfigRegistry;
    private loadConfig;
    saveConfig(): void;
    isEnabled(ruleId: string, defaultValue?: boolean): boolean;
    getSeverity(ruleId: string, defaultSeverity: 'ERROR' | 'WARNING'): 'ERROR' | 'WARNING';
    getErrorMessage(ruleId: string, defaultMessage: string): string;
    initializeRuleDefault(ruleId: string, defaults: RuleConfig): void;
    setRuleConfig(ruleId: string, config: Partial<RuleConfig>): void;
    clearConfig(): void;
}
