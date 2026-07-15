"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml1RuleRunner = void 0;
const Check_MA_LK_1 = require("./Check_MA_LK");
const Check_HO_TEN_1 = require("./Check_HO_TEN");
const Check_SO_CCCD_1 = require("./Check_SO_CCCD");
const Check_NGAY_SINH_1 = require("./Check_NGAY_SINH");
const Check_GIOI_TINH_1 = require("./Check_GIOI_TINH");
const Check_MA_QUOCTICH_1 = require("./Check_MA_QUOCTICH");
const Check_MA_NGHE_NGHIEP_1 = require("./Check_MA_NGHE_NGHIEP");
const Check_MA_DANTOC_1 = require("./Check_MA_DANTOC");
const Check_DIA_CHI_1 = require("./Check_DIA_CHI");
const Check_MATINH_CU_TRU_1 = require("./Check_MATINH_CU_TRU");
const Check_MAXA_CU_TRU_1 = require("./Check_MAXA_CU_TRU");
const Check_MA_THE_BHYT_1 = require("./Check_MA_THE_BHYT");
const Check_GT_THE_TU_1 = require("./Check_GT_THE_TU");
const Check_GT_THE_DEN_1 = require("./Check_GT_THE_DEN");
const Check_NGAY_MIEN_CCT_1 = require("./Check_NGAY_MIEN_CCT");
const Check_LY_DO_VV_1 = require("./Check_LY_DO_VV");
const Check_LY_DO_VNT_1 = require("./Check_LY_DO_VNT");
const Check_MA_LY_DO_VNT_1 = require("./Check_MA_LY_DO_VNT");
const Check_CHAN_DOAN_VAO_1 = require("./Check_CHAN_DOAN_VAO");
const Check_CHAN_DOAN_RV_1 = require("./Check_CHAN_DOAN_RV");
const Check_MA_BENH_CHINH_1 = require("./Check_MA_BENH_CHINH");
const Check_MA_BENH_KT_1 = require("./Check_MA_BENH_KT");
const Check_MA_BENH_YHCT_1 = require("./Check_MA_BENH_YHCT");
const Check_MA_DOITUONG_KCB_1 = require("./Check_MA_DOITUONG_KCB");
const Check_MA_NOI_DI_1 = require("./Check_MA_NOI_DI");
const Check_MA_NOI_DEN_1 = require("./Check_MA_NOI_DEN");
const Check_MA_TAI_NAN_1 = require("./Check_MA_TAI_NAN");
const Check_NGAY_VAO_NOI_TRU_1 = require("./Check_NGAY_VAO_NOI_TRU");
const Check_NGAY_RA_1 = require("./Check_NGAY_RA");
const Check_SO_NGAY_DTRI_1 = require("./Check_SO_NGAY_DTRI");
const Check_PP_DIEU_TRI_1 = require("./Check_PP_DIEU_TRI");
const Check_KET_QUA_DTRI_1 = require("./Check_KET_QUA_DTRI");
const Check_MA_LOAI_RV_1 = require("./Check_MA_LOAI_RV");
const Check_T_THUOC_1 = require("./Check_T_THUOC");
const Check_T_VTYT_1 = require("./Check_T_VTYT");
const Check_T_TONGCHI_BV_1 = require("./Check_T_TONGCHI_BV");
class Xml1RuleRunner {
    static rules = [
        new Check_MA_LK_1.Check_MA_LK(),
        new Check_HO_TEN_1.Check_HO_TEN(),
        new Check_SO_CCCD_1.Check_SO_CCCD(),
        new Check_NGAY_SINH_1.Check_NGAY_SINH(),
        new Check_GIOI_TINH_1.Check_GIOI_TINH(),
        new Check_MA_QUOCTICH_1.Check_MA_QUOCTICH(),
        new Check_MA_NGHE_NGHIEP_1.Check_MA_NGHE_NGHIEP(),
        new Check_MA_DANTOC_1.Check_MA_DANTOC(),
        new Check_DIA_CHI_1.Check_DIA_CHI(),
        new Check_MATINH_CU_TRU_1.Check_MATINH_CU_TRU(),
        new Check_MAXA_CU_TRU_1.Check_MAXA_CU_TRU(),
        new Check_MA_THE_BHYT_1.Check_MA_THE_BHYT(),
        new Check_GT_THE_TU_1.Check_GT_THE_TU(),
        new Check_GT_THE_DEN_1.Check_GT_THE_DEN(),
        new Check_NGAY_MIEN_CCT_1.Check_NGAY_MIEN_CCT(),
        new Check_LY_DO_VV_1.Check_LY_DO_VV(),
        new Check_LY_DO_VNT_1.Check_LY_DO_VNT(),
        new Check_MA_LY_DO_VNT_1.Check_MA_LY_DO_VNT(),
        new Check_CHAN_DOAN_VAO_1.Check_CHAN_DOAN_VAO(),
        new Check_CHAN_DOAN_RV_1.Check_CHAN_DOAN_RV(),
        new Check_MA_BENH_CHINH_1.Check_MA_BENH_CHINH(),
        new Check_MA_BENH_KT_1.Check_MA_BENH_KT(),
        new Check_MA_BENH_YHCT_1.Check_MA_BENH_YHCT(),
        new Check_MA_DOITUONG_KCB_1.Check_MA_DOITUONG_KCB(),
        new Check_MA_NOI_DI_1.Check_MA_NOI_DI(),
        new Check_MA_NOI_DEN_1.Check_MA_NOI_DEN(),
        new Check_MA_TAI_NAN_1.Check_MA_TAI_NAN(),
        new Check_NGAY_VAO_NOI_TRU_1.Check_NGAY_VAO_NOI_TRU(),
        new Check_NGAY_RA_1.Check_NGAY_RA(),
        new Check_SO_NGAY_DTRI_1.Check_SO_NGAY_DTRI(),
        new Check_PP_DIEU_TRI_1.Check_PP_DIEU_TRI(),
        new Check_KET_QUA_DTRI_1.Check_KET_QUA_DTRI(),
        new Check_MA_LOAI_RV_1.Check_MA_LOAI_RV(),
        new Check_T_THUOC_1.Check_T_THUOC(),
        new Check_T_VTYT_1.Check_T_VTYT(),
        new Check_T_TONGCHI_BV_1.Check_T_TONGCHI_BV(),
    ];
    static run(model, context) {
        const errors = [];
        for (const rule of this.rules) {
            if (!rule.isEnabled)
                continue;
            const err = rule.check(model, context);
            if (err) {
                errors.push(err);
            }
        }
        return errors;
    }
}
exports.Xml1RuleRunner = Xml1RuleRunner;
//# sourceMappingURL=xml1RuleRunner.js.map