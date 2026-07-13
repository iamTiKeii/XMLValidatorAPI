import { BaseXmlParser } from '../base-xml.parser';
import { Xml4Model } from '../../interfaces/xml-models.interface';

export class Xml4Parser extends BaseXmlParser {
  public get loaiHoSo(): string {
    return 'XML4';
  }

  public parse(xmlContent: string): Xml4Model[] {
    const result: Xml4Model[] = [];

    if (!this.load(xmlContent)) return result;
    if (!this.isRoot('CHITIEU_CHITIET_DICHVUCANLAMSANG')) return result;

    const nodes = this.findDescendants(this.root, 'CHI_TIET_CLS');

    for (const n of nodes) {
      const m: Xml4Model = {
        MA_LK: this.getElementText(n, 'MA_LK') || undefined,
        STT: this.getElementInt(n, 'STT') ?? undefined,
        MA_DICH_VU: this.getElementText(n, 'MA_DICH_VU') || undefined,
        MA_CHI_SO: this.getElementText(n, 'MA_CHI_SO') || undefined,
        TEN_CHI_SO: this.getElementText(n, 'TEN_CHI_SO') || undefined,
        GIA_TRI: this.getElementText(n, 'GIA_TRI') || undefined,
        DON_VI_DO: this.getElementText(n, 'DON_VI_DO') || undefined,
        MO_TA: this.getElementText(n, 'MO_TA') || undefined,
        KET_LUAN: this.getElementText(n, 'KET_LUAN') || undefined,
        NGAY_KQ: this.getElementDate(n, 'NGAY_KQ') ?? undefined,
        MA_BS_DOC_KQ: this.getElementText(n, 'MA_BS_DOC_KQ') || undefined,
        DU_PHONG: this.getElementText(n, 'DU_PHONG') || undefined,
      };
      result.push(m);
    }

    return result;
  }
}
