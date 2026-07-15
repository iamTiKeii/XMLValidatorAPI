"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml8RuleRunner = void 0;
class Xml8RuleRunner {
    static rules = [];
    static run(model, context) {
        const errors = [];
        if (!model)
            return errors;
        for (const rule of this.rules) {
            if (!rule.isEnabled)
                continue;
            const err = rule.check(model, context);
            if (err) {
                errors.push(err);
            }
        }
        return errors;
    }
}
exports.Xml8RuleRunner = Xml8RuleRunner;
//# sourceMappingURL=xml8RuleRunner.js.map