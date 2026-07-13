"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml4RuleRunner = void 0;
class Xml4RuleRunner {
    static rules = [];
    static run(models, context) {
        const errors = [];
        if (!models || models.length === 0)
            return errors;
        for (const model of models) {
            for (const rule of this.rules) {
                const err = rule.check(model, context);
                if (err) {
                    errors.push(err);
                }
            }
        }
        return errors;
    }
}
exports.Xml4RuleRunner = Xml4RuleRunner;
//# sourceMappingURL=xml4RuleRunner.js.map