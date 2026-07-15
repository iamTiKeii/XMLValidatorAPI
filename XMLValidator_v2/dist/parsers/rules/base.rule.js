"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRule = void 0;
const rules_config_1 = require("./rules.config");
class BaseRule {
    metadata;
    constructor(metadata) {
        this.metadata = metadata;
        rules_config_1.RulesConfigRegistry.getInstance().initializeRuleDefault(this.metadata.ruleId, {
            enabled: true,
            severity: this.metadata.severity,
            customErrorMessage: this.metadata.errorMessage,
        });
    }
    get isEnabled() {
        return rules_config_1.RulesConfigRegistry.getInstance().isEnabled(this.metadata.ruleId);
    }
    get severity() {
        return rules_config_1.RulesConfigRegistry.getInstance().getSeverity(this.metadata.ruleId, this.metadata.severity);
    }
    get errorMessage() {
        return rules_config_1.RulesConfigRegistry.getInstance().getErrorMessage(this.metadata.ruleId, this.metadata.errorMessage);
    }
    get key() {
        return this.metadata.field;
    }
    get ruleId() {
        return this.metadata.ruleId;
    }
    get xmlType() {
        return this.metadata.xmlType;
    }
    error(customMessage) {
        const registry = rules_config_1.RulesConfigRegistry.getInstance();
        return {
            key: this.key,
            message: registry.getErrorMessage(this.metadata.ruleId, customMessage || this.metadata.errorMessage),
            ruleId: this.metadata.ruleId,
            severity: registry.getSeverity(this.metadata.ruleId, this.metadata.severity),
            reference: this.metadata.reference,
        };
    }
}
exports.BaseRule = BaseRule;
//# sourceMappingURL=base.rule.js.map