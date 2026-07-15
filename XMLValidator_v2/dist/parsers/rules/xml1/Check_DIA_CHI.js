"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_DIA_CHI = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_DIA_CHI extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_DIA_CHI_01',
            xmlType: 'XML1',
            field: 'DIA_CHI',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường DIA_CHI',
            errorMessage: 'DIA_CHI không được rỗng',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        if (!model.DIA_CHI || !model.DIA_CHI.trim()) {
            return this.error(`${this.key} không được rỗng`);
        }
        if (model.DIA_CHI?.length > 1024) {
            return this.error(`${this.key} quá kích thước tối đa (1024 ký tự)`);
        }
        return null;
    }
}
exports.Check_DIA_CHI = Check_DIA_CHI;
//# sourceMappingURL=Check_DIA_CHI.js.map