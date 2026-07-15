"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_CHAN_DOAN_VAO = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_CHAN_DOAN_VAO extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_CHAN_DOAN_VAO_01',
            xmlType: 'XML1',
            field: 'CHAN_DOAN_VAO',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường CHAN_DOAN_VAO',
            errorMessage: 'CHAN_DOAN_VAO không được để trống',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        if (!model.CHAN_DOAN_VAO || !model.CHAN_DOAN_VAO.trim()) {
            return this.error("CHAN_DOAN_VAO không được để trống");
        }
        return null;
    }
}
exports.Check_CHAN_DOAN_VAO = Check_CHAN_DOAN_VAO;
//# sourceMappingURL=Check_CHAN_DOAN_VAO.js.map