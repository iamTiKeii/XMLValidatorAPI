"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_SO_NGAY_DTRI = void 0;
const xml1RuleBase_1 = require("./xml1RuleBase");
class Check_SO_NGAY_DTRI extends xml1RuleBase_1.Xml1RuleBase {
    get key() {
        return 'SO_NGAY_DTRI';
    }
    check(model, context) {
        const raw = model.SO_NGAY_DTRI_RAW;
        if (!raw || !raw.trim()) {
            return this.error('SO_NGAY_DTRI không được để trống');
        }
        const soNgay = parseInt(raw.trim(), 10);
        if (isNaN(soNgay)) {
            return this.error('SO_NGAY_DTRI sai kiểu dữ liệu (số)');
        }
        if (model.MA_LOAI_KCB === '1' || model.MA_LOAI_KCB === '7' || model.MA_LOAI_KCB === '9') {
            if (soNgay !== 0) {
                return this.error('SO_NGAY_DTRI phải bằng 0 khi MA_LOAI_KCB ∈ (1,7,9)');
            }
            return null;
        }
        if (model.MA_LOAI_KCB === '2' || model.MA_LOAI_KCB === '3' || model.MA_LOAI_KCB === '4' || model.MA_LOAI_KCB === '6') {
            if (!model.NGAY_VAO || !model.NGAY_RA) {
                return this.error('Không đủ dữ liệu NGAY_VAO / NGAY_RA để tính SO_NGAY_DTRI');
            }
            const dateRa = new Date(model.NGAY_RA.getFullYear(), model.NGAY_RA.getMonth(), model.NGAY_RA.getDate());
            const dateVao = new Date(model.NGAY_VAO.getFullYear(), model.NGAY_VAO.getMonth(), model.NGAY_VAO.getDate());
            const expected = Math.round((dateRa.getTime() - dateVao.getTime()) / (1000 * 60 * 60 * 24)) + 1;
            if (expected < 0) {
                return this.error('NGAY_RA không hợp lệ so với NGAY_VAO');
            }
            if (soNgay !== expected) {
                return this.error(`SO_NGAY_DTRI không đúng công thức: (NGAY_RA - NGAY_VAO) + 1 = ${expected}`);
            }
        }
        return null;
    }
}
exports.Check_SO_NGAY_DTRI = Check_SO_NGAY_DTRI;
//# sourceMappingURL=Check_SO_NGAY_DTRI.js.map