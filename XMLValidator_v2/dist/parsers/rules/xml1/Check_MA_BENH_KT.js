"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_BENH_KT = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MA_BENH_KT extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'MA_BENH_KT'; }
    check(model, context) {
        var value = model.MA_BENH_KT;
        if (!value || !value.trim())
            return null;
        if (value?.length > 100) {
            return this.error("MA_BENH_KT quá kích thước tối đa (100)");
        }
        if (value.includes(",") || value.includes("|")) {
            return this.error("Các MA_BENH_KT phải cách nhau bằng dấu ';'");
        }
        const items = value
            .split(';').filter(x => x.length > 0);
        if (items.length > 12) {
            return this.error("MA_BENH_KT tối đa 12 mã");
        }
        return null;
    }
}
exports.Check_MA_BENH_KT = Check_MA_BENH_KT;
//# sourceMappingURL=Check_MA_BENH_KT.js.map