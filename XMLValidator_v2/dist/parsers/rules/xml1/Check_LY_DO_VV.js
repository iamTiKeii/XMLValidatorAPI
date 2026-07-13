"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_LY_DO_VV = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_LY_DO_VV extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'LY_DO_VV'; }
    check(model, context) {
        if (!model.LY_DO_VV || !model.LY_DO_VV.trim()) {
            return this.error("LY_DO_VV không được để trống");
        }
        return null;
    }
}
exports.Check_LY_DO_VV = Check_LY_DO_VV;
//# sourceMappingURL=Check_LY_DO_VV.js.map