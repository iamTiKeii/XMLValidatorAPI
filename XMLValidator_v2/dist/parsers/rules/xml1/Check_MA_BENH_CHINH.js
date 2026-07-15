"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_BENH_CHINH = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MA_BENH_CHINH extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_MA_BENH_CHINH_01',
            xmlType: 'XML1',
            field: 'MA_BENH_CHINH',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường MA_BENH_CHINH',
            errorMessage: 'MA_BENH_CHINH không được để trống',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        if (!model.MA_BENH_CHINH || !model.MA_BENH_CHINH.trim()) {
            return this.error("MA_BENH_CHINH không được để trống");
        }
        if (model.MA_BENH_CHINH?.length > 7) {
            return this.error("MA_BENH_CHINH vượt quá chiều dài tối đa (max 7)");
        }
        return null;
    }
}
exports.Check_MA_BENH_CHINH = Check_MA_BENH_CHINH;
//# sourceMappingURL=Check_MA_BENH_CHINH.js.map