import { BaseXmlParser } from '../base-xml.parser';
import { Xml8Model } from '../../interfaces/xml-models.interface';

export class Xml8Parser extends BaseXmlParser {
  public get loaiHoSo(): string {
    return 'XML8';
  }

  public parse(xmlContent: string): Xml8Model {
    const model: Xml8Model = {};

    if (!this.load(xmlContent)) return model;
    if (!this.isRoot('CHI_TIEU_DU_LIEU_TOM_TAT_HO_SO_BENH_AN')) return model;

    model.MA_LK = this.S('MA_LK') || undefined;
    model.MA_LOAI_KCB = this.S('MA_LOAI_KCB') || undefined;
    model.HO_TEN_CHA = this.S('HO_TEN_CHA') || undefined;
    model.HO_TEN_ME = this.S('HO_TEN_ME') || undefined;
    model.NGUOI_GIAM_HO = this.S('NGUOI_GIAM_HO') || undefined;
    model.DON_VI = this.S('DON_VI') || undefined;
    model.NGAY_VAO = this.DT('NGAY_VAO') ?? undefined;
    model.NGAY_RA = this.DT('NGAY_RA') ?? undefined;
    model.CHAN_DOAN_VAO = this.S('CHAN_DOAN_VAO') || undefined;
    model.CHAN_DOAN_RV = this.S('CHAN_DOAN_RV') || undefined;
    model.QT_BENHLY = this.S('QT_BENHLY') || undefined;
    model.TOMTAT_KQ = this.S('TOMTAT_KQ') || undefined;
    model.PP_DIEUTRI = this.S('PP_DIEUTRI') || undefined;
    model.NGAY_SINHCON = this.DT('NGAY_SINHCON') ?? undefined;
    model.NGAY_CONCHET = this.DT('NGAY_CONCHET') ?? undefined;
    model.SO_CONCHET = this.I('SO_CONCHET') ?? undefined;
    model.KET_QUA_DTRI = this.S('KET_QUA_DTRI') || undefined;
    model.GHI_CHU = this.S('GHI_CHU') || undefined;
    model.MA_TTDV = this.S('MA_TTDV') || undefined;
    model.NGAY_CT = this.DT('NGAY_CT') ?? undefined;
    model.MA_THE_TAM = this.S('MA_THE_TAM') || undefined;
    model.DU_PHONG = this.S('DU_PHONG') || undefined;

    return model;
  }
}
