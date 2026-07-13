"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_PP_DIEU_TRI = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_PP_DIEU_TRI extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'PP_DIEU_TRI'; }
    check(model, context) {
        if (!model.PP_DIEU_TRI || !model.PP_DIEU_TRI.trim()) {
            return this.error("PP_DIEU_TRI không được để trống");
        }
        return null;
    }
}
exports.Check_PP_DIEU_TRI = Check_PP_DIEU_TRI;
//# sourceMappingURL=Check_PP_DIEU_TRI.js.map