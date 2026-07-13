"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml10RuleRunner = void 0;
class Xml10RuleRunner {
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
exports.Xml10RuleRunner = Xml10RuleRunner;
//# sourceMappingURL=xml10RuleRunner.js.map