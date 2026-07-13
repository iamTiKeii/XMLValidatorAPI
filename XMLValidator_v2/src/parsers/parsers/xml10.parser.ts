import { BaseXmlParser } from '../base-xml.parser';
import { Xml10Model } from '../../interfaces/xml-models.interface';

export class Xml10Parser extends BaseXmlParser {
  public get loaiHoSo(): string {
    return 'XML10';
  }

  public parse(xmlContent: string): Xml10Model {
    const model: Xml10Model = {};

    if (!this.load(xmlContent)) return model;
    if (!this.isRoot('CHI_TIEU_DU_LIEU_GIAY_NGHI_DUONG_THAI')) return model;

    model.MA_LK = this.S('MA_LK') || undefined;
    model.SO_SERI = this.S('SO_SERI') || undefined;
    model.SO_CT = this.S('SO_CT') || undefined;
    model.SO_NGAY = this.I('SO_NGAY') ?? undefined;
    model.DON_VI = this.S('DON_VI') || undefined;
    model.CHAN_DOAN_RV = this.S('CHAN_DOAN_RV') || undefined;
    model.TU_NGAY = this.DT('TU_NGAY') ?? undefined;
    model.DEN_NGAY = this.DT('DEN_NGAY') ?? undefined;
    model.MA_TTDV = this.S('MA_TTDV') || undefined;
    model.TEN_BS = this.S('TEN_BS') || undefined;
    model.MA_BS = this.S('MA_BS') || undefined;
    model.NGAY_CT = this.DT('NGAY_CT') ?? undefined;
    model.DU_PHONG = this.S('DU_PHONG') || undefined;

    return model;
  }
}
