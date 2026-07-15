"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_TAI_NAN = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MA_TAI_NAN extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_MA_TAI_NAN_01',
            xmlType: 'XML1',
            field: 'MA_TAI_NAN',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường MA_TAI_NAN',
            errorMessage: 'MA_TAI_NAN quá kích thước tối đa (1)',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        if (!model.MA_TAI_NAN || !model.MA_TAI_NAN.trim()) {
            return null;
        }
        if (model.MA_TAI_NAN?.length > 1) {
            return this.error("MA_TAI_NAN quá kích thước tối đa (1)");
        }
        if (isNaN(parseInt(model.MA_TAI_NAN?.trim(), 10))) {
            return this.error("MA_TAI_NAN sai kiểu dữ liệu (số)");
        }
        return null;
    }
}
exports.Check_MA_TAI_NAN = Check_MA_TAI_NAN;
//# sourceMappingURL=Check_MA_TAI_NAN.js.map