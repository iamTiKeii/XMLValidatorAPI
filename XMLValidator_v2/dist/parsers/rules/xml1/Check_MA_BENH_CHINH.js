"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_BENH_CHINH = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MA_BENH_CHINH extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'MA_BENH_CHINH'; }
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