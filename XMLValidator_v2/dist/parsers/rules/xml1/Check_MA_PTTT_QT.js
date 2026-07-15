"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_PTTT_QT = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MA_PTTT_QT extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_MA_PTTT_QT_01',
            xmlType: 'XML1',
            field: 'MA_PTTT_QT',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường MA_PTTT_QT',
            errorMessage: 'MA_PTTT_QT quá kích thước tối đa (125)',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        var value = model.MA_PTTT_QT;
        if (!value || !value.trim())
            return null;
        if (value?.length > 125) {
            return this.error("MA_PTTT_QT quá kích thước tối đa (125)");
        }
        if (value.includes(",") || value.includes("|")) {
            return this.error("Các MA_PTTT_QT phải cách nhau bằng dấu ';'");
        }
        return null;
    }
}
exports.Check_MA_PTTT_QT = Check_MA_PTTT_QT;
//# sourceMappingURL=Check_MA_PTTT_QT.js.map