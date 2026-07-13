"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_NGAY_MIEN_CCT = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_NGAY_MIEN_CCT extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'NGAY_MIEN_CCT'; }
    check(model, context) {
        if (model.NGAY_MIEN_CCT === undefined || model.NGAY_MIEN_CCT === null) {
            return null;
        }
        return null;
    }
}
exports.Check_NGAY_MIEN_CCT = Check_NGAY_MIEN_CCT;
//# sourceMappingURL=Check_NGAY_MIEN_CCT.js.map