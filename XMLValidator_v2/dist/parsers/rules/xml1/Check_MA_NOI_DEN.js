"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_NOI_DEN = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MA_NOI_DEN extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'MA_NOI_DEN'; }
    check(model, context) {
        if (model.MA_NOI_DEN !== undefined && model.MA_NOI_DEN !== null && model.MA_NOI_DEN?.length > 5) {
            return this.error("MA_NOI_DEN quá kích thước tối đa (max 5)");
        }
        return null;
    }
}
exports.Check_MA_NOI_DEN = Check_MA_NOI_DEN;
//# sourceMappingURL=Check_MA_NOI_DEN.js.map