import { RulesConfigRegistry } from './rules.config';
import * as fs from 'fs';
import * as path from 'path';

describe('RulesConfigRegistry', () => {
  let registry: RulesConfigRegistry;
  const configFilePath = path.join(process.cwd(), 'config', 'rules-config.json');

  beforeEach(() => {
    registry = RulesConfigRegistry.getInstance();
    registry.clearConfig();
  });

  afterEach(() => {
    registry.clearConfig();
  });

  it('should be a singleton', () => {
    const instance2 = RulesConfigRegistry.getInstance();
    expect(registry).toBe(instance2);
  });

  it('should initialize default rule configuration', () => {
    const ruleId = 'TEST_RULE_01';
    registry.initializeRuleDefault(ruleId, {
      enabled: true,
      severity: 'ERROR',
      customErrorMessage: 'Test default message',
    });

    expect(registry.isEnabled(ruleId)).toBe(true);
    expect(registry.getSeverity(ruleId, 'WARNING')).toBe('ERROR');
    expect(registry.getErrorMessage(ruleId, 'Some other message')).toBe('Test default message');
  });

  it('should persist configuration to rules-config.json file', () => {
    const ruleId = 'TEST_RULE_02';
    registry.setRuleConfig(ruleId, {
      enabled: false,
      severity: 'WARNING',
      customErrorMessage: 'Custom error message',
    });

    expect(fs.existsSync(configFilePath)).toBe(true);

    const fileContent = JSON.parse(fs.readFileSync(configFilePath, 'utf-8'));
    expect(fileContent[ruleId]).toEqual({
      enabled: false,
      severity: 'WARNING',
      customErrorMessage: 'Custom error message',
    });
  });

  it('should load configuration correctly from file', () => {
    const ruleId = 'TEST_RULE_03';
    // Write directly to file
    const initialConfig = {
      [ruleId]: {
        enabled: false,
        severity: 'WARNING' as const,
        customErrorMessage: 'Saved file error message',
      },
    };
    
    const dir = path.dirname(configFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(configFilePath, JSON.stringify(initialConfig, null, 2), 'utf-8');

    // Reset registry to force reloading from file
    // Access private property or trigger re-load (since it is a singleton, we can just clear it and reinstantiate, or call a load method)
    // Actually, we can use setRuleConfig or trigger loadConfig since clearConfig clears the map.
    // Let's call loadConfig indirectly by reinstantiating or triggering the private method.
    // In our test, clearConfig deletes the file, so we write to file, then get standard getInstance.
    // Let's call standard loadConfig via private access or define a reload method:
    (registry as any).loadConfig();

    expect(registry.isEnabled(ruleId)).toBe(false);
    expect(registry.getSeverity(ruleId, 'ERROR')).toBe('WARNING');
    expect(registry.getErrorMessage(ruleId, 'fallback')).toBe('Saved file error message');
  });
});
