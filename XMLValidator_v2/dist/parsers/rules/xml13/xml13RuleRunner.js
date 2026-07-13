"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml13RuleRunner = void 0;
class Xml13RuleRunner {
    static rules = [];
    static run(model, context) {
        const errors = [];
        if (!model)
            return errors;
        for (const rule of this.rules) {
            const err = rule.check(model, context);
            if (err) {
                errors.push(err);
            }
        }
        return errors;
    }
}
exports.Xml13RuleRunner = Xml13RuleRunner;
//# sourceMappingURL=xml13RuleRunner.js.map