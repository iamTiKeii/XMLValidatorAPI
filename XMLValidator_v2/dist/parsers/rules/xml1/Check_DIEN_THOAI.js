"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_DIEN_THOAI = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_DIEN_THOAI extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'DIEN_THOAI'; }
    check(model, context) {
        if (model.DIEN_THOAI !== undefined && model.DIEN_THOAI !== null) {
            if (model.DIEN_THOAI?.length > 15) {
                return this.error(`${this.key} quá kích thước quy định ( 15 ký tự )`);
            }
        }
        return null;
    }
}
exports.Check_DIEN_THOAI = Check_DIEN_THOAI;
//# sourceMappingURL=Check_DIEN_THOAI.js.map