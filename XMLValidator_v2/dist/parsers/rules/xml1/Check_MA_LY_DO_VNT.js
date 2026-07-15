"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_LY_DO_VNT = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MA_LY_DO_VNT extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_MA_LY_DO_VNT_01',
            xmlType: 'XML1',
            field: 'MA_LY_DO_VNT',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường MA_LY_DO_VNT',
            errorMessage: 'MA_LY_DO_VNT không được để trống khi MA_LOAI_KCB=03',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        if (model.MA_LOAI_KCB === "03" && (!model.MA_LY_DO_VNT || !model.MA_LY_DO_VNT.trim())) {
            return this.error("MA_LY_DO_VNT không được để trống khi MA_LOAI_KCB=03");
        }
        return null;
    }
}
exports.Check_MA_LY_DO_VNT = Check_MA_LY_DO_VNT;
//# sourceMappingURL=Check_MA_LY_DO_VNT.js.map