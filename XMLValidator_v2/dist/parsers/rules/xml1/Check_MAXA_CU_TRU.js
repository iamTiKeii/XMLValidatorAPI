"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MAXA_CU_TRU = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MAXA_CU_TRU extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'MAXA_CU_TRU'; }
    check(model, context) {
        if (!model.MAXA_CU_TRU || !model.MAXA_CU_TRU.trim()) {
            return null;
        }
        if (model.MAXA_CU_TRU?.length > 5) {
            return this.error(`${this.key} quá kích thước tối đa (5 ký tự)`);
        }
        return null;
    }
}
exports.Check_MAXA_CU_TRU = Check_MAXA_CU_TRU;
//# sourceMappingURL=Check_MAXA_CU_TRU.js.map