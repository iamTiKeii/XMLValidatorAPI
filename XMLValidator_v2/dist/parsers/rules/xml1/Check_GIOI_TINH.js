"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_GIOI_TINH = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_GIOI_TINH extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'GIOI_TINH'; }
    check(model, context) {
        if (model.GIOI_TINH === undefined || model.GIOI_TINH === null) {
            return this.error("GIOI_TINH không được để trống");
        }
        const list_GIOI_TINH = [1, 2, 3];
        if (!list_GIOI_TINH.includes(model.GIOI_TINH)) {
            return this.error("GIOI_TINH sai định dạng (Nam : 1, Nữ : 2, Chưa xác định : 3)");
        }
        return null;
    }
}
exports.Check_GIOI_TINH = Check_GIOI_TINH;
//# sourceMappingURL=Check_GIOI_TINH.js.map