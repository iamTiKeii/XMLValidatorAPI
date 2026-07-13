"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_GT_THE_TU = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_GT_THE_TU extends xml1RuleBase_1.Xml1RuleBase {
    get key() {
        return 'GT_THE_TU';
    }
    check(model, context) {
        if (!model.GT_THE_TU) {
            return this.error('GT_THE_TU không được để trống');
        }
        if (!model.MA_THE_BHYT || !model.MA_THE_BHYT.trim()) {
            return null;
        }
        const bhytList = model.MA_THE_BHYT
            .split(';')
            .map(x => x.trim())
            .filter(x => x.length > 0);
        if (bhytList.length > 1) {
            return this.error("Thứ tự GT_THE_TU không khớp với thứ tự của MA_THE_BHYT");
        }
        return null;
    }
}
exports.Check_GT_THE_TU = Check_GT_THE_TU;
//# sourceMappingURL=Check_GT_THE_TU.js.map