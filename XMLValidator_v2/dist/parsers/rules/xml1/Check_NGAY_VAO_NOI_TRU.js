"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_NGAY_VAO_NOI_TRU = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
const date_helper_1 = require("../../../utils/date.helper");
class Check_NGAY_VAO_NOI_TRU extends xml1RuleBase_1.Xml1RuleBase {
    get key() {
        return 'NGAY_VAO_NOI_TRU';
    }
    check(model, context) {
        const raw = model.NGAY_VAO_NOI_TRU_RAW;
        if (!raw || !raw.trim()) {
            return null;
        }
        if (raw.length > 12) {
            return this.error('NGAY_VAO_NOI_TRU quá kích thước tối đa (12)');
        }
        const ngayVaoNoiTru = (0, date_helper_1.parseExactDate)(raw);
        if (!ngayVaoNoiTru) {
            return this.error('NGAY_VAO_NOI_TRU không đúng định dạng yyyyMMddHHmm');
        }
        if (ngayVaoNoiTru > new Date()) {
            return this.error('NGAY_VAO_NOI_TRU không được lớn hơn ngày hiện tại');
        }
        return null;
    }
}
exports.Check_NGAY_VAO_NOI_TRU = Check_NGAY_VAO_NOI_TRU;
//# sourceMappingURL=Check_NGAY_VAO_NOI_TRU.js.map