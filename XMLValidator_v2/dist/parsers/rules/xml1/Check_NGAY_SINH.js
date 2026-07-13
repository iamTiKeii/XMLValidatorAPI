"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_NGAY_SINH = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_NGAY_SINH extends xml1RuleBase_1.Xml1RuleBase {
    get key() {
        return 'NGAY_SINH';
    }
    check(model, context) {
        if (!model.NGAY_SINH) {
            return this.error('NGAY_SINH không được để trống');
        }
        const ngaySinh = model.NGAY_SINH;
        const now = new Date();
        if (ngaySinh > now) {
            return this.error('NGAY_SINH không được lớn hơn ngày hiện tại');
        }
        const minDate = new Date();
        minDate.setFullYear(now.getFullYear() - 140);
        if (ngaySinh < minDate) {
            return this.error('NGAY_SINH không được nhỏ hơn 140 năm so với thời gian hiện tại');
        }
        return null;
    }
}
exports.Check_NGAY_SINH = Check_NGAY_SINH;
//# sourceMappingURL=Check_NGAY_SINH.js.map