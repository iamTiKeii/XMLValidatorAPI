"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MATINH_CU_TRU = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MATINH_CU_TRU extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'MATINH_CU_TRU'; }
    check(model, context) {
        if (!model.MATINH_CU_TRU || !model.MATINH_CU_TRU.trim()) {
            return this.error(`${this.key} không được rỗng`);
        }
        if (model.MATINH_CU_TRU?.length > 2) {
            return this.error(`${this.key} quá kích thước tối đa (2 ký tự)`);
        }
        return null;
    }
}
exports.Check_MATINH_CU_TRU = Check_MATINH_CU_TRU;
//# sourceMappingURL=Check_MATINH_CU_TRU.js.map