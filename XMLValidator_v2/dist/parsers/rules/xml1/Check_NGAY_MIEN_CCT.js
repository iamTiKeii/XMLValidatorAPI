"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_NGAY_MIEN_CCT = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
const date_helper_1 = require("../../../utils/date.helper");
class Check_NGAY_MIEN_CCT extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_NGAY_MIEN_CCT_01',
            xmlType: 'XML1',
            field: 'NGAY_MIEN_CCT',
            severity: 'ERROR',
            description: 'Kiểm tra quy định ngày miễn cùng chi trả có đúng định dạng yyyymmdd',
            errorMessage: 'NGAY_MIEN_CCT không hợp lệ',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        const raw = model.NGAY_MIEN_CCT_RAW;
        if (!raw || !raw.trim()) {
            return null;
        }
        const value = raw.trim();
        if (value.length !== 8) {
            return this.error('NGAY_MIEN_CCT không đúng định dạng yyyyMMdd');
        }
        const parsed = (0, date_helper_1.parseExactDate)(value);
        if (!parsed) {
            return this.error('NGAY_MIEN_CCT không đúng định dạng yyyyMMdd');
        }
        return null;
    }
}
exports.Check_NGAY_MIEN_CCT = Check_NGAY_MIEN_CCT;
//# sourceMappingURL=Check_NGAY_MIEN_CCT.js.map