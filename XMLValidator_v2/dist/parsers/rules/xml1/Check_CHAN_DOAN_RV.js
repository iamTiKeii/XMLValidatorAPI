"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_CHAN_DOAN_RV = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_CHAN_DOAN_RV extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'CHAN_DOAN_RV'; }
    check(model, context) {
        if (!model.CHAN_DOAN_RV || !model.CHAN_DOAN_RV.trim()) {
            return this.error("CHAN_DOAN_RV không được để trống");
        }
        return null;
    }
}
exports.Check_CHAN_DOAN_RV = Check_CHAN_DOAN_RV;
//# sourceMappingURL=Check_CHAN_DOAN_RV.js.map