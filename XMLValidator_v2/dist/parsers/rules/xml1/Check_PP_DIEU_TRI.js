"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_PP_DIEU_TRI = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_PP_DIEU_TRI extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_PP_DIEU_TRI_01',
            xmlType: 'XML1',
            field: 'PP_DIEU_TRI',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường PP_DIEU_TRI',
            errorMessage: 'PP_DIEU_TRI không được để trống',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        if (!model.PP_DIEU_TRI || !model.PP_DIEU_TRI.trim()) {
            return this.error("PP_DIEU_TRI không được để trống");
        }
        return null;
    }
}
exports.Check_PP_DIEU_TRI = Check_PP_DIEU_TRI;
//# sourceMappingURL=Check_PP_DIEU_TRI.js.map