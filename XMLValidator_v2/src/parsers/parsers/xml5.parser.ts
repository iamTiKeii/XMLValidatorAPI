import { BaseXmlParser } from '../base-xml.parser';
import { Xml5Model } from '../../interfaces/xml-models.interface';

export class Xml5Parser extends BaseXmlParser {
  public get loaiHoSo(): string {
    return 'XML5';
  }

  public parse(xmlContent: string): Xml5Model[] {
    const result: Xml5Model[] = [];

    if (!this.load(xmlContent)) return result;
    if (!this.isRoot('CHITIEU_CHITIET_DIENBIENLAMSANG')) return result;

    const nodes = this.findDescendants(this.root, 'CHI_TIET_DIEN_BIEN_BENH');

    for (const n of nodes) {
      const m: Xml5Model = {
        MA_LK: this.getElementText(n, 'MA_LK') || undefined,
        STT: this.getElementInt(n, 'STT') ?? undefined,
        DIEN_BIEN_LS: this.getElementText(n, 'DIEN_BIEN_LS') || undefined,
        GIAI_DOAN_BENH: this.getElementText(n, 'GIAI_DOAN_BENH') || undefined,
        HOI_CHAN: this.getElementText(n, 'HOI_CHAN') || undefined,
        PHAU_THUAT: this.getElementText(n, 'PHAU_THUAT') || undefined,
        THOI_DIEM_DBLS: this.getElementDate(n, 'THOI_DIEM_DBLS') ?? undefined,
        NGUOI_THUC_HIEN: this.getElementText(n, 'NGUOI_THUC_HIEN') || undefined,
        DU_PHONG: this.getElementText(n, 'DU_PHONG') || undefined,
      };
      result.push(m);
    }

    return result;
  }
}
