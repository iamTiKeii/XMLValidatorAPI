"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml11RuleRunner = void 0;
class Xml11RuleRunner {
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
exports.Xml11RuleRunner = Xml11RuleRunner;
//# sourceMappingURL=xml11RuleRunner.js.map