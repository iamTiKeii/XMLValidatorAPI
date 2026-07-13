import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';
import { IXml1Rule } from './xml1RuleBase';

import { Check_MA_LK } from './Check_MA_LK';
import { Check_HO_TEN } from './Check_HO_TEN';
import { Check_SO_CCCD } from './Check_SO_CCCD';
import { Check_NGAY_SINH } from './Check_NGAY_SINH';
import { Check_GIOI_TINH } from './Check_GIOI_TINH';
import { Check_MA_QUOCTICH } from './Check_MA_QUOCTICH';
import { Check_MA_NGHE_NGHIEP } from './Check_MA_NGHE_NGHIEP';
import { Check_MA_DANTOC } from './Check_MA_DANTOC';
import { Check_DIA_CHI } from './Check_DIA_CHI';
import { Check_MATINH_CU_TRU } from './Check_MATINH_CU_TRU';
import { Check_MAXA_CU_TRU } from './Check_MAXA_CU_TRU';
import { Check_MA_THE_BHYT } from './Check_MA_THE_BHYT';
import { Check_GT_THE_TU } from './Check_GT_THE_TU';
import { Check_GT_THE_DEN } from './Check_GT_THE_DEN';
import { Check_NGAY_MIEN_CCT } from './Check_NGAY_MIEN_CCT';
import { Check_LY_DO_VV } from './Check_LY_DO_VV';
import { Check_LY_DO_VNT } from './Check_LY_DO_VNT';
import { Check_MA_LY_DO_VNT } from './Check_MA_LY_DO_VNT';
import { Check_CHAN_DOAN_VAO } from './Check_CHAN_DOAN_VAO';
import { Check_CHAN_DOAN_RV } from './Check_CHAN_DOAN_RV';
import { Check_MA_BENH_CHINH } from './Check_MA_BENH_CHINH';
import { Check_MA_BENH_KT } from './Check_MA_BENH_KT';
import { Check_MA_BENH_YHCT } from './Check_MA_BENH_YHCT';
import { Check_MA_DOITUONG_KCB } from './Check_MA_DOITUONG_KCB';
import { Check_MA_NOI_DI } from './Check_MA_NOI_DI';
import { Check_MA_NOI_DEN } from './Check_MA_NOI_DEN';
import { Check_MA_TAI_NAN } from './Check_MA_TAI_NAN';
import { Check_NGAY_VAO_NOI_TRU } from './Check_NGAY_VAO_NOI_TRU';
import { Check_NGAY_RA } from './Check_NGAY_RA';
import { Check_SO_NGAY_DTRI } from './Check_SO_NGAY_DTRI';
import { Check_PP_DIEU_TRI } from './Check_PP_DIEU_TRI';
import { Check_KET_QUA_DTRI } from './Check_KET_QUA_DTRI';
import { Check_MA_LOAI_RV } from './Check_MA_LOAI_RV';
import { Check_T_THUOC } from './Check_T_THUOC';
import { Check_T_VTYT } from './Check_T_VTYT';
import { Check_T_TONGCHI_BV } from './Check_T_TONGCHI_BV';

export class Xml1RuleRunner {
  private static readonly rules: IXml1Rule[] = [
    new Check_MA_LK(),
    new Check_HO_TEN(),
    new Check_SO_CCCD(),
    new Check_NGAY_SINH(),
    new Check_GIOI_TINH(),
    new Check_MA_QUOCTICH(),
    new Check_MA_NGHE_NGHIEP(),
    new Check_MA_DANTOC(),
    new Check_DIA_CHI(),
    new Check_MATINH_CU_TRU(),
    new Check_MAXA_CU_TRU(),
    new Check_MA_THE_BHYT(),
    new Check_GT_THE_TU(),
    new Check_GT_THE_DEN(),
    new Check_NGAY_MIEN_CCT(),
    new Check_LY_DO_VV(),
    new Check_LY_DO_VNT(),
    new Check_MA_LY_DO_VNT(),
    new Check_CHAN_DOAN_VAO(),
    new Check_CHAN_DOAN_RV(),
    new Check_MA_BENH_CHINH(),
    new Check_MA_BENH_KT(),
    new Check_MA_BENH_YHCT(),
    new Check_MA_DOITUONG_KCB(),
    new Check_MA_NOI_DI(),
    new Check_MA_NOI_DEN(),
    new Check_MA_TAI_NAN(),
    new Check_NGAY_VAO_NOI_TRU(),
    new Check_NGAY_RA(),
    new Check_SO_NGAY_DTRI(),
    new Check_PP_DIEU_TRI(),
    new Check_KET_QUA_DTRI(),
    new Check_MA_LOAI_RV(),
    new Check_T_THUOC(),
    new Check_T_VTYT(),
    new Check_T_TONGCHI_BV(),
  ];

  public static run(model: Xml1Model, context: HoSoContext): ErrorDetails[] {
    const errors: ErrorDetails[] = [];

    for (const rule of this.rules) {
      const err = rule.check(model, context);
      if (err) {
        errors.push(err);
      }
    }

    return errors;
  }
}
