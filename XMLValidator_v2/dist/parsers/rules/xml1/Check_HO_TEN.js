"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_HO_TEN = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_HO_TEN extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_HO_TEN_01',
            xmlType: 'XML1',
            field: 'HO_TEN',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường HO_TEN',
            errorMessage: 'HO_TEN không được rỗng',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        if (!model.HO_TEN || !model.HO_TEN.trim()) {
            return this.error(`${this.key} không được rỗng`);
        }
        if (model.HO_TEN?.length > 255) {
            return this.error(`${this.key} quá kích thước tối đa (255 ký tự)`);
        }
        return null;
    }
}
exports.Check_HO_TEN = Check_HO_TEN;
//# sourceMappingURL=Check_HO_TEN.js.map