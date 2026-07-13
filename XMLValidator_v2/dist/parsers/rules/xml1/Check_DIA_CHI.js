"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_DIA_CHI = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_DIA_CHI extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'DIA_CHI'; }
    check(model, context) {
        if (!model.DIA_CHI || !model.DIA_CHI.trim()) {
            return this.error(`${this.key} không được rỗng`);
        }
        if (model.DIA_CHI?.length > 1024) {
            return this.error(`${this.key} quá kích thước tối đa (1024 ký tự)`);
        }
        return null;
    }
}
exports.Check_DIA_CHI = Check_DIA_CHI;
//# sourceMappingURL=Check_DIA_CHI.js.map