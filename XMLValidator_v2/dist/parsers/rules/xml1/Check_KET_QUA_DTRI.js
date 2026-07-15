"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_KET_QUA_DTRI = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
const dictionary_cache_1 = require("../../dictionary.cache");
class Check_KET_QUA_DTRI extends xml1RuleBase_1.Xml1RuleBase {
    constructor() {
        super({
            ruleId: 'RULE_XML1_KET_QUA_DTRI_01',
            xmlType: 'XML1',
            field: 'KET_QUA_DTRI',
            severity: 'ERROR',
            description: 'Kiểm tra quy định cho trường KET_QUA_DTRI',
            errorMessage: 'KET_QUA_DTRI không được để trống',
            reference: 'QĐ 3176/QĐ-BYT',
        });
    }
    check(model, context) {
        if (!model.KET_QUA_DTRI || !model.KET_QUA_DTRI.trim()) {
            return this.error("KET_QUA_DTRI không được để trống");
        }
        var value = model.KET_QUA_DTRI.trim();
        if (value?.length > 1) {
            return this.error("KET_QUA_DTRI quá kích thước tối đa (1)");
        }
        if (isNaN(parseInt(value, 10))) {
            return this.error("KET_QUA_DTRI sai kiểu dữ liệu (số)");
        }
        if (!(model.KET_QUA_DTRI in dictionary_cache_1.DictionaryCacheInstance.ketQuaDTri)) {
            return this.error("KET_QUA_DTRI không thuộc bảng mã kết quả điều trị");
        }
        return null;
    }
}
exports.Check_KET_QUA_DTRI = Check_KET_QUA_DTRI;
//# sourceMappingURL=Check_KET_QUA_DTRI.js.map