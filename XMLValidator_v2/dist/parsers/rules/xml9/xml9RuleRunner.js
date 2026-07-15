"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml9RuleRunner = void 0;
class Xml9RuleRunner {
    static rules = [];
    static run(models, context) {
        const errors = [];
        if (!models || models.length === 0)
            return errors;
        for (const model of models) {
            for (const rule of this.rules) {
                if (!rule.isEnabled)
                    continue;
                const err = rule.check(model, context);
                if (err) {
                    errors.push(err);
                }
            }
        }
        return errors;
    }
}
exports.Xml9RuleRunner = Xml9RuleRunner;
//# sourceMappingURL=xml9RuleRunner.js.map