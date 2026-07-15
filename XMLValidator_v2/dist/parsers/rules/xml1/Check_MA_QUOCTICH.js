"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_QUOCTICH = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
const dictionary_cache_1 = require("../../dictionary.cache");
class Check_MA_QUOCTICH extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_MA_QUOCTICH_01',
            xmlType: 'XML1',
            field: 'MA_QUOCTICH',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường MA_QUOCTICH',
            errorMessage: 'MA_QUOCTICH không được rỗng',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        if (!model.MA_QUOCTICH || !model.MA_QUOCTICH.trim()) {
            return this.error(`${this.key} không được rỗng`);
        }
        if (model.MA_QUOCTICH?.length > 3) {
            return this.error(`${this.key} quá kích thước tối đa (3 ký tự)`);
        }
        if (!(model.MA_QUOCTICH in dictionary_cache_1.DictionaryCacheInstance.maQuocTich)) {
            return this.error(`${this.key} không tồn tại trong danh mục`);
        }
        return null;
    }
}
exports.Check_MA_QUOCTICH = Check_MA_QUOCTICH;
//# sourceMappingURL=Check_MA_QUOCTICH.js.map