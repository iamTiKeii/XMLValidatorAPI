"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_HO_TEN = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_HO_TEN extends xml1RuleBase_1.Xml1RuleBase {
    get key() { return 'HO_TEN'; }
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