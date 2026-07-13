"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_T_THUOC = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_T_THUOC extends xml1RuleBase_1.Xml1RuleBase {
    get key() {
        return 'T_THUOC';
    }
    check(model, context) {
        const hasXml2 = context.xml2 && context.xml2.length > 0;
        if (!hasXml2) {
            if (model.T_THUOC !== undefined && model.T_THUOC !== null && model.T_THUOC !== 0) {
                return this.error('T_THUOC phải bằng 0 khi không có thuốc');
            }
            return null;
        }
        if (model.T_THUOC === undefined || model.T_THUOC === null) {
            return this.error('T_THUOC không được để trống khi có thuốc');
        }
        const value = model.T_THUOC;
        if (value < 0) {
            return this.error('T_THUOC không được nhỏ hơn 0');
        }
        if (value.toString().length > 15) {
            return this.error('T_THUOC quá kích thước tối đa (15)');
        }
        const totalThuoc = context.xml2.reduce((sum, x) => sum + (x.THANH_TIEN_BV || 0), 0);
        if (Math.abs(value - totalThuoc) > 0.0001) {
            return this.error(`T_THUOC (${value}) không bằng tổng tiền thuốc XML2 (${totalThuoc})`);
        }
        return null;
    }
}
exports.Check_T_THUOC = Check_T_THUOC;
//# sourceMappingURL=Check_T_THUOC.js.map