"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_LOAI_RV = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
const dictionary_cache_1 = require("../../dictionary.cache");
class Check_MA_LOAI_RV extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_MA_LOAI_RV_01',
            xmlType: 'XML1',
            field: 'MA_LOAI_RV',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường MA_LOAI_RV',
            errorMessage: 'MA_LOAI_RV không được để trống',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        if (!model.MA_LOAI_RV || !model.MA_LOAI_RV.trim()) {
            return this.error("MA_LOAI_RV không được để trống");
        }
        var value = model.MA_LOAI_RV.trim();
        if (value?.length > 1) {
            return this.error("MA_LOAI_RV quá kích thước tối đa");
        }
        if (isNaN(parseInt(value, 10))) {
            return this.error("MA_LOAI_RV sai kiểu dữ liệu (số)");
        }
        if (!(model.MA_LOAI_RV in dictionary_cache_1.DictionaryCacheInstance.maLoaiRV)) {
            return this.error("MA_LOAI_RV không thuộc bảng mã loại ra viện");
        }
        return null;
    }
}
exports.Check_MA_LOAI_RV = Check_MA_LOAI_RV;
//# sourceMappingURL=Check_MA_LOAI_RV.js.map