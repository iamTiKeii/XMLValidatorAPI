"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_DOITUONG_KCB = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
const dictionary_cache_1 = require("../../dictionary.cache");
class Check_MA_DOITUONG_KCB extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_MA_DOITUONG_KCB_01',
            xmlType: 'XML1',
            field: 'MA_DOITUONG_KCB',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường MA_DOITUONG_KCB',
            errorMessage: 'MA_DOITUONG_KCB không được để trống',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        if (!model.MA_DOITUONG_KCB || !model.MA_DOITUONG_KCB.trim()) {
            return this.error("MA_DOITUONG_KCB không được để trống");
        }
        if (!(model.MA_DOITUONG_KCB in dictionary_cache_1.DictionaryCacheInstance.doiTuongKCB)) {
            return this.error(`${this.key} không tồn tại trong danh mục`);
        }
        return null;
    }
}
exports.Check_MA_DOITUONG_KCB = Check_MA_DOITUONG_KCB;
//# sourceMappingURL=Check_MA_DOITUONG_KCB.js.map