"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_BENH_YHCT = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MA_BENH_YHCT extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'MA_BENH_YHCT'; }
    check(model, context) {
        var value = model.MA_BENH_YHCT;
        if (!value || !value.trim())
            return null;
        if (value?.length > 255) {
            return this.error("MA_BENH_YHCT quá kích thước tối đa (255)");
        }
        if (value.includes(",") || value.includes("|")) {
            return this.error("Các MA_BENH_YHCT phải cách nhau bằng dấu ';'");
        }
        return null;
    }
}
exports.Check_MA_BENH_YHCT = Check_MA_BENH_YHCT;
//# sourceMappingURL=Check_MA_BENH_YHCT.js.map