"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_NGAY_RA = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
const date_helper_1 = require("../../../utils/date.helper");
class Check_NGAY_RA extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_NGAY_RA_01',
            xmlType: 'XML1',
            field: 'NGAY_RA',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường NGAY_RA',
            errorMessage: 'NGAY_RA không được để trống',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        const raw = model.NGAY_RA_RAW;
        if (!raw || !raw.trim()) {
            return this.error('NGAY_RA không được để trống');
        }
        const ngayRa = (0, date_helper_1.parseExactDate)(raw);
        if (!ngayRa) {
            return this.error('NGAY_RA không đúng định dạng yyyyMMddHHmm');
        }
        if (model.NGAY_VAO && ngayRa < model.NGAY_VAO) {
            return this.error('NGAY_RA không được nhỏ hơn NGAY_VAO');
        }
        return null;
    }
}
exports.Check_NGAY_RA = Check_NGAY_RA;
//# sourceMappingURL=Check_NGAY_RA.js.map