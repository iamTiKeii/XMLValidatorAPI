"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_SO_CCCD = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_SO_CCCD extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'SO_CCCD'; }
    check(model, context) {
        if (model.SO_CCCD !== undefined && model.SO_CCCD !== null) {
            if (model.SO_CCCD?.length > 15) {
                return this.error("SO_CCCD quá kích thước tối đa (15 ký tự)");
            }
        }
        return null;
    }
}
exports.Check_SO_CCCD = Check_SO_CCCD;
//# sourceMappingURL=Check_SO_CCCD.js.map