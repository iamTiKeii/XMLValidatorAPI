"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_LK = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MA_LK extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'MA_LK'; }
    check(model, context) {
        if (!model.MA_LK || !model.MA_LK.trim()) {
            return this.error("MA_LK không được rỗng");
        }
        if (model.MA_LK?.length > 100) {
            return this.error("MA_LK quá kích thước tối đa (100 ký tự)");
        }
        return null;
    }
}
exports.Check_MA_LK = Check_MA_LK;
//# sourceMappingURL=Check_MA_LK.js.map