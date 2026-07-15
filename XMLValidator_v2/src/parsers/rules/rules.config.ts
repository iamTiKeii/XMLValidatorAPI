import * as fs from 'fs';
import * as path from 'path';

export interface RuleConfig {
  enabled: boolean;
  severity?: 'ERROR' | 'WARNING';
  customErrorMessage?: string;
}

export class RulesConfigRegistry {
  private static instance: RulesConfigRegistry;
  private configMap: Record<string, RuleConfig> = {};
  private readonly configFilePath = path.join(process.cwd(), 'config', 'rules-config.json');

  private constructor() {
    this.loadConfig();
  }

  public static getInstance(): RulesConfigRegistry {
    if (!RulesConfigRegistry.instance) {
      RulesConfigRegistry.instance = new RulesConfigRegistry();
    }
    return RulesConfigRegistry.instance;
  }

  private loadConfig() {
    try {
      if (fs.existsSync(this.configFilePath)) {
        const fileContent = fs.readFileSync(this.configFilePath, 'utf-8');
        this.configMap = JSON.parse(fileContent);
      }
    } catch (error) {
      // In case directory doesn't exist, we will create it when saving
    }
  }

  public saveConfig() {
    try {
      const dir = path.dirname(this.configFilePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(this.configFilePath, JSON.stringify(this.configMap, null, 2), 'utf-8');
    } catch (error) {
      console.error('Failed to save rules configuration:', error);
    }
  }

  public isEnabled(ruleId: string, defaultValue = true): boolean {
    return this.configMap[ruleId]?.enabled ?? defaultValue;
  }

  public getSeverity(ruleId: string, defaultSeverity: 'ERROR' | 'WARNING'): 'ERROR' | 'WARNING' {
    return this.configMap[ruleId]?.severity ?? defaultSeverity;
  }

  public getErrorMessage(ruleId: string, defaultMessage: string): string {
    return this.configMap[ruleId]?.customErrorMessage ?? defaultMessage;
  }

  public initializeRuleDefault(ruleId: string, defaults: RuleConfig) {
    if (this.configMap[ruleId] === undefined) {
      this.configMap[ruleId] = defaults;
      this.saveConfig();
    }
  }

  public setRuleConfig(ruleId: string, config: Partial<RuleConfig>) {
    const current = this.configMap[ruleId] || { enabled: true };
    this.configMap[ruleId] = { ...current, ...config };
    this.saveConfig();
  }

  // Helper method for testing/resetting configuration
  public clearConfig() {
    this.configMap = {};
    if (fs.existsSync(this.configFilePath)) {
      try {
        fs.unlinkSync(this.configFilePath);
      } catch (e) {}
    }
  }
}
