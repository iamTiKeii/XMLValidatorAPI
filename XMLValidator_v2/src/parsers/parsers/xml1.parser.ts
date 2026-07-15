import { BaseXmlParser } from '../base-xml.parser';
import { Xml1Model } from '../../interfaces/xml-models.interface';

export class Xml1Parser extends BaseXmlParser {
  public get loaiHoSo(): string {
    return 'XML1';
  }

  public parse(xmlContent: string): Xml1Model {
    const model: Xml1Model = {};

    if (!this.load(xmlContent)) return model;
    if (!this.isRoot('TONG_HOP')) return model;

    model.MA_LK = this.S('MA_LK') || undefined;
    model.STT = this.I('STT') ?? undefined;
    model.MA_BN = this.S('MA_BN') || undefined;
    model.HO_TEN = this.S('HO_TEN') || undefined;
    model.SO_CCCD = this.S('SO_CCCD') || undefined;
    model.NGAY_SINH = this.DT('NGAY_SINH') ?? undefined;
    model.GIOI_TINH = this.I('GIOI_TINH') ?? undefined;
    model.NHOM_MAU = this.S('NHOM_MAU') || undefined;
    model.MA_QUOCTICH = this.S('MA_QUOCTICH') || undefined;
    model.MA_DANTOC = this.S('MA_DANTOC') || undefined;
    model.MA_NGHE_NGHIEP = this.S('MA_NGHE_NGHIEP') || undefined;

    model.DIA_CHI = this.S('DIA_CHI') || undefined;
    model.MATINH_CU_TRU = this.S('MATINH_CU_TRU') || undefined;
    model.MAHUYEN_CU_TRU = this.S('MAHUYEN_CU_TRU') || undefined;
    model.MAXA_CU_TRU = this.S('MAXA_CU_TRU') || undefined;
    model.DIEN_THOAI = this.S('DIEN_THOAI') || undefined;

    model.MA_THE_BHYT = this.S('MA_THE_BHYT') || undefined;
    model.MA_DKBD = this.S('MA_DKBD') || undefined;
    model.GT_THE_TU = this.DT('GT_THE_TU') ?? undefined;
    model.GT_THE_DEN = this.DT('GT_THE_DEN') ?? undefined;
    model.NGAY_MIEN_CCT = this.DT('NGAY_MIEN_CCT') ?? undefined;
    model.NGAY_MIEN_CCT_RAW = this.S('NGAY_MIEN_CCT') || undefined;

    model.LY_DO_VV = this.S('LY_DO_VV') || undefined;
    model.LY_DO_VNT = this.S('LY_DO_VNT') || undefined;
    model.MA_LY_DO_VNT = this.S('MA_LY_DO_VNT') || undefined;
    model.CHAN_DOAN_VAO = this.S('CHAN_DOAN_VAO') || undefined;
    model.CHAN_DOAN_RV = this.S('CHAN_DOAN_RV') || undefined;

    model.MA_BENH_CHINH = this.S('MA_BENH_CHINH') || undefined;
    model.MA_BENH_KT = this.S('MA_BENH_KT') || undefined;
    model.MA_BENH_YHCT = this.S('MA_BENH_YHCT') || undefined;
    model.MA_PTTT_QT = this.S('MA_PTTT_QT') || undefined;

    model.MA_DOITUONG_KCB = this.S('MA_DOITUONG_KCB') || undefined;
    model.MA_NOI_DI = this.S('MA_NOI_DI') || undefined;
    model.MA_NOI_DEN = this.S('MA_NOI_DEN') || undefined;
    model.MA_TAI_NAN = this.S('MA_TAI_NAN') || undefined;

    model.NGAY_VAO = this.DT('NGAY_VAO') ?? undefined;
    model.NGAY_VAO_NOI_TRU = this.DT('NGAY_VAO_NOI_TRU') ?? undefined;
    model.NGAY_VAO_NOI_TRU_RAW = this.S('NGAY_VAO_NOI_TRU') || undefined;
    model.NGAY_RA = this.DT('NGAY_RA') ?? undefined;
    model.GIAY_CHUYEN_TUYEN = this.S('GIAY_CHUYEN_TUYEN') || undefined;
    model.SO_NGAY_DTRI = this.I('SO_NGAY_DTRI') ?? undefined;
    model.NGAY_RA_RAW = this.S('NGAY_RA') || undefined;
    model.NGAY_VAO_RAW = this.S('NGAY_VAO') || undefined;
    model.PP_DIEU_TRI = this.S('PP_DIEU_TRI') || undefined;
    model.KET_QUA_DTRI = this.S('KET_QUA_DTRI') || undefined;
    model.MA_LOAI_RV = this.S('MA_LOAI_RV') || undefined;
    model.GHI_CHU = this.S('GHI_CHU') || undefined;
    model.SO_NGAY_DTRI_RAW = this.S('SO_NGAY_DTRI') || undefined;
    model.NGAY_TTOAN = this.DT('NGAY_TTOAN') ?? undefined;
    model.T_THUOC = this.D('T_THUOC') ?? undefined;
    model.T_VTYT = this.D('T_VTYT') ?? undefined;
    model.T_TONGCHI_BV = this.D('T_TONGCHI_BV') ?? undefined;
    model.T_TONGCHI_BH = this.D('T_TONGCHI_BH') ?? undefined;
    model.T_BNTT = this.D('T_BNTT') ?? undefined;
    model.T_BNCCT = this.D('T_BNCCT') ?? undefined;
    model.T_BHTT = this.D('T_BHTT') ?? undefined;
    model.T_NGUONKHAC = this.D('T_NGUONKHAC') ?? undefined;
    model.T_BHTT_GDV = this.D('T_BHTT_GDV') ?? undefined;

    model.NAM_QT = this.I('NAM_QT') ?? undefined;
    model.THANG_QT = this.I('THANG_QT') ?? undefined;

    model.MA_LOAI_KCB = this.S('MA_LOAI_KCB') || undefined;
    model.MA_KHOA = this.S('MA_KHOA') || undefined;
    model.MA_CSKCB = this.S('MA_CSKCB') || undefined;
    model.MA_KHUVUC = this.S('MA_KHUVUC') || undefined;

    model.CAN_NANG = this.D('CAN_NANG') ?? undefined;
    model.CAN_NANG_CON = this.S('CAN_NANG_CON') || undefined;
    model.NAM_NAM_LIEN_TUC = this.S('NAM_NAM_LIEN_TUC') || undefined;

    model.NGAY_TAI_KHAM = this.S('NGAY_TAI_KHAM') || undefined;
    model.MA_HSBA = this.S('MA_HSBA') || undefined;
    model.MA_TTDV = this.S('MA_TTDV') || undefined;
    model.DU_PHONG = this.S('DU_PHONG') || undefined;

    return model;
  }
}
