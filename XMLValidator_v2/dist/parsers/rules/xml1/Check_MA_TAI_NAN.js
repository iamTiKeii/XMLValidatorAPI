"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_TAI_NAN = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MA_TAI_NAN extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'MA_TAI_NAN'; }
    check(model, context) {
        if (!model.MA_TAI_NAN || !model.MA_TAI_NAN.trim()) {
            return null;
        }
        if (model.MA_TAI_NAN?.length > 1) {
            return this.error("MA_TAI_NAN quá kích thước tối đa (1)");
        }
        if (isNaN(parseInt(model.MA_TAI_NAN?.trim(), 10))) {
            return this.error("MA_TAI_NAN sai kiểu dữ liệu (số)");
        }
        return null;
    }
}
exports.Check_MA_TAI_NAN = Check_MA_TAI_NAN;
//# sourceMappingURL=Check_MA_TAI_NAN.js.map