"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesConfigRegistry = void 0;
const fs = require("fs");
const path = require("path");
class RulesConfigRegistry {
    static instance;
    configMap = {};
    configFilePath = path.join(process.cwd(), 'config', 'rules-config.json');
    constructor() {
        this.loadConfig();
    }
    static getInstance() {
        if (!RulesConfigRegistry.instance) {
            RulesConfigRegistry.instance = new RulesConfigRegistry();
        }
        return RulesConfigRegistry.instance;
    }
    loadConfig() {
        try {
            if (fs.existsSync(this.configFilePath)) {
                const fileContent = fs.readFileSync(this.configFilePath, 'utf-8');
                this.configMap = JSON.parse(fileContent);
            }
        }
        catch (error) {
        }
    }
    saveConfig() {
        try {
            const dir = path.dirname(this.configFilePath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            fs.writeFileSync(this.configFilePath, JSON.stringify(this.configMap, null, 2), 'utf-8');
        }
        catch (error) {
            console.error('Failed to save rules configuration:', error);
        }
    }
    isEnabled(ruleId, defaultValue = true) {
        return this.configMap[ruleId]?.enabled ?? defaultValue;
    }
    getSeverity(ruleId, defaultSeverity) {
        return this.configMap[ruleId]?.severity ?? defaultSeverity;
    }
    getErrorMessage(ruleId, defaultMessage) {
        return this.configMap[ruleId]?.customErrorMessage ?? defaultMessage;
    }
    initializeRuleDefault(ruleId, defaults) {
        if (this.configMap[ruleId] === undefined) {
            this.configMap[ruleId] = defaults;
            this.saveConfig();
        }
    }
    setRuleConfig(ruleId, config) {
        const current = this.configMap[ruleId] || { enabled: true };
        this.configMap[ruleId] = { ...current, ...config };
        this.saveConfig();
    }
    clearConfig() {
        this.configMap = {};
        if (fs.existsSync(this.configFilePath)) {
            try {
                fs.unlinkSync(this.configFilePath);
            }
            catch (e) { }
        }
    }
}
exports.RulesConfigRegistry = RulesConfigRegistry;
//# sourceMappingURL=rules.config.js.map