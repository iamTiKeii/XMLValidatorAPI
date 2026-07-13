"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_T_TONGCHI_BV = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_T_TONGCHI_BV extends xml1RuleBase_1.Xml1RuleBase {
    get key() {
        return 'T_TONGCHI_BV';
    }
    check(model, context) {
        const hasXml2 = context.xml2 && context.xml2.length > 0;
        const hasXml3 = context.xml3 && context.xml3.length > 0;
        if (!hasXml2 && !hasXml3) {
            if (model.T_TONGCHI_BV !== undefined && model.T_TONGCHI_BV !== null && model.T_TONGCHI_BV !== 0) {
                return this.error('T_TONGCHI_BV phải bằng 0 khi không có chi phí');
            }
            return null;
        }
        if (model.T_TONGCHI_BV === undefined || model.T_TONGCHI_BV === null) {
            return this.error('T_TONGCHI_BV không đúng định dạng');
        }
        const value = model.T_TONGCHI_BV;
        if (value < 0) {
            return this.error('T_TONGCHI_BV không được nhỏ hơn 0');
        }
        if (value.toString().length > 15) {
            return this.error('T_TONGCHI_BV quá kích thước tối đa (15)');
        }
        const totalXml2 = hasXml2 ? context.xml2.reduce((sum, x) => sum + (x.THANH_TIEN_BV || 0), 0) : 0;
        const totalXml3 = hasXml3 ? context.xml3.reduce((sum, x) => sum + (x.THANH_TIEN_BV || 0), 0) : 0;
        const expectedTotal = totalXml2 + totalXml3;
        if (Math.abs(value - expectedTotal) > 0.0001) {
            return this.error(`T_TONGCHI_BV (${value}) lệch với tổng XML2 + XML3 (${expectedTotal})`);
        }
        return null;
    }
}
exports.Check_T_TONGCHI_BV = Check_T_TONGCHI_BV;
//# sourceMappingURL=Check_T_TONGCHI_BV.js.map