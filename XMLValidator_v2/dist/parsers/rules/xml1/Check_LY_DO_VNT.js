"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_LY_DO_VNT = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_LY_DO_VNT extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'LY_DO_VNT'; }
    check(model, context) {
        if (model.MA_LOAI_KCB == "03" && !model.LY_DO_VNT || !model.LY_DO_VNT.trim()) {
            return this.error("LY_DO_VNT không được để trống khi MA_LOAI_KCB=03");
        }
        return null;
    }
}
exports.Check_LY_DO_VNT = Check_LY_DO_VNT;
//# sourceMappingURL=Check_LY_DO_VNT.js.map