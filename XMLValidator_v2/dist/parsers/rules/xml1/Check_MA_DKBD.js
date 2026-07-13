"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_MA_DKBD = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_MA_DKBD extends xml1RuleBase_1.Xml1RuleBase {
    get key() {
        return 'MA_DKBD';
    }
    check(model, context) {
        if (!model.MA_DKBD || !model.MA_DKBD.trim()) {
            return this.error('MA_DKBD không được để trống');
        }
        const dkbdList = model.MA_DKBD
            .split(';')
            .map(x => x.trim())
            .filter(x => x.length > 0);
        if (dkbdList.length > 1 && !model.MA_DKBD.includes(';')) {
            return this.error("Các MA_DKBD phải cách nhau bằng dấu ';'");
        }
        if (!model.MA_THE_BHYT || !model.MA_THE_BHYT.trim()) {
            return null;
        }
        const bhytList = model.MA_THE_BHYT
            .split(';')
            .map(x => x.trim())
            .filter(x => x.length > 0);
        if (dkbdList.length !== bhytList.length) {
            return this.error("Thứ tự MA_DKBD không khớp với thứ tự của MA_THE_BHYT");
        }
        return null;
    }
}
exports.Check_MA_DKBD = Check_MA_DKBD;
//# sourceMappingURL=Check_MA_DKBD.js.map