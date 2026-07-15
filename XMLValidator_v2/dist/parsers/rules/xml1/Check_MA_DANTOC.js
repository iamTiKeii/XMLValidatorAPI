"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_DANTOC = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
const dictionary_cache_1 = require("../../dictionary.cache");
class Check_MA_DANTOC extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_MA_DANTOC_01',
            xmlType: 'XML1',
            field: 'MA_DANTOC',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường MA_DANTOC',
            errorMessage: 'MA_DANTOC không được rỗng',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        if (!model.MA_DANTOC || !model.MA_DANTOC.trim()) {
            return this.error(`${this.key} không được rỗng`);
        }
        if (!(model.MA_DANTOC in dictionary_cache_1.DictionaryCacheInstance.maDanToc)) {
            return this.error(`${this.key} không tồn tại trong danh mục`);
        }
        return null;
    }
}
exports.Check_MA_DANTOC = Check_MA_DANTOC;
//# sourceMappingURL=Check_MA_DANTOC.js.map