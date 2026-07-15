"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_T_VTYT = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_T_VTYT extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_T_VTYT_01',
            xmlType: 'XML1',
            field: 'T_VTYT',
            severity: 'ERROR',
            description: 'Kiểm tra tổng thành tiền vật tư y tế trong XML1 khớp với XML3',
            errorMessage: 'T_VTYT không hợp lệ',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        const hasXml3 = context.xml3 && context.xml3.length > 0;
        if (!hasXml3) {
            if (model.T_VTYT !== undefined && model.T_VTYT !== null && model.T_VTYT !== 0) {
                return this.error('T_VTYT phải bằng 0 khi không có vật tư y tế');
            }
            return null;
        }
        if (model.T_VTYT === undefined || model.T_VTYT === null) {
            return this.error('T_VTYT không được để trống khi có vật tư y tế');
        }
        const value = model.T_VTYT;
        if (value < 0) {
            return this.error('T_VTYT không được nhỏ hơn 0');
        }
        if (value.toString().length > 15) {
            return this.error('T_VTYT quá kích thước tối đa (15)');
        }
        const totalVtyt = context.xml3
            .filter(x => x.MA_VAT_TU && x.MA_VAT_TU.trim() !== '')
            .reduce((sum, x) => sum + (x.THANH_TIEN_BV || 0), 0);
        if (Math.abs(value - totalVtyt) > 0.0001) {
            return this.error(`T_VTYT (${value}) không bằng tổng tiền vật tư XML3 (${totalVtyt})`);
        }
        return null;
    }
}
exports.Check_T_VTYT = Check_T_VTYT;
//# sourceMappingURL=Check_T_VTYT.js.map