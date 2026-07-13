"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml14RuleRunner = void 0;
class Xml14RuleRunner {
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
exports.Xml14RuleRunner = Xml14RuleRunner;
//# sourceMappingURL=xml14RuleRunner.js.map