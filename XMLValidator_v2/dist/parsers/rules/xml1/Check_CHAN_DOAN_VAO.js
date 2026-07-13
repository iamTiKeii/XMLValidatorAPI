"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_CHAN_DOAN_VAO = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_CHAN_DOAN_VAO extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'CHAN_DOAN_VAO'; }
    check(model, context) {
        if (!model.CHAN_DOAN_VAO || !model.CHAN_DOAN_VAO.trim()) {
            return this.error("CHAN_DOAN_VAO không được để trống");
        }
        return null;
    }
}
exports.Check_CHAN_DOAN_VAO = Check_CHAN_DOAN_VAO;
//# sourceMappingURL=Check_CHAN_DOAN_VAO.js.map