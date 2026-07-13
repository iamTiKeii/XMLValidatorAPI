"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_GT_THE_DEN = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_GT_THE_DEN extends xml1RuleBase_1.Xml1RuleBase {
    get key() {
        return 'GT_THE_DEN';
    }
    check(model, context) {
        if (!model.GT_THE_DEN) {
            return this.error('GT_THE_DEN không được để trống');
        }
        if (model.MA_THE_BHYT && model.MA_THE_BHYT.trim()) {
            const bhytList = model.MA_THE_BHYT
                .split(';')
                .map(x => x.trim())
                .filter(x => x.length > 0);
            if (bhytList.length > 1) {
                return this.error("Thứ tự GT_THE_DEN không khớp với thứ tự của MA_THE_BHYT");
            }
        }
        if (model.GT_THE_TU && model.GT_THE_DEN < model.GT_THE_TU) {
            return this.error("GT_THE_DEN không được nhỏ hơn GT_THE_TU");
        }
        return null;
    }
}
exports.Check_GT_THE_DEN = Check_GT_THE_DEN;
//# sourceMappingURL=Check_GT_THE_DEN.js.map