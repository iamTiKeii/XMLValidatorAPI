"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_NOI_DI = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MA_NOI_DI extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_MA_NOI_DI_01',
            xmlType: 'XML1',
            field: 'MA_NOI_DI',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường MA_NOI_DI',
            errorMessage: 'MA_NOI_DI quá kích thước tối đa (max 5)',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        if (model.MA_NOI_DI !== undefined && model.MA_NOI_DI !== null && model.MA_NOI_DI?.length > 5) {
            return this.error("MA_NOI_DI quá kích thước tối đa (max 5)");
        }
        return null;
    }
}
exports.Check_MA_NOI_DI = Check_MA_NOI_DI;
//# sourceMappingURL=Check_MA_NOI_DI.js.map