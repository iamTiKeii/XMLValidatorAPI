"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_NGHE_NGHIEP = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MA_NGHE_NGHIEP extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_MA_NGHE_NGHIEP_01',
            xmlType: 'XML1',
            field: 'MA_NGHE_NGHIEP',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường MA_NGHE_NGHIEP',
            errorMessage: 'MA_NGHE_NGHIEP không được rỗng',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        if (!model.MA_NGHE_NGHIEP || !model.MA_NGHE_NGHIEP.trim()) {
            return this.error(`${this.key} không được rỗng`);
        }
        if (model.MA_NGHE_NGHIEP?.length > 5) {
            return this.error(`${this.key} quá kích thước tối đa ( max: 5)`);
        }
        return null;
    }
}
exports.Check_MA_NGHE_NGHIEP = Check_MA_NGHE_NGHIEP;
//# sourceMappingURL=Check_MA_NGHE_NGHIEP.js.map