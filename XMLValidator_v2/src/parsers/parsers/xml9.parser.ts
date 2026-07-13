import { BaseXmlParser } from '../base-xml.parser';
import { Xml9Model } from '../../interfaces/xml-models.interface';

export class Xml9Parser extends BaseXmlParser {
  public get loaiHoSo(): string {
    return 'XML9';
  }

  public parse(xmlContent: string): Xml9Model[] {
    const result: Xml9Model[] = [];

    if (!this.load(xmlContent)) return result;
    if (!this.isRoot('CHI_TIEU_DU_LIEU_GIAY_CHUNG_SINH')) return result;

    const nodes = this.findDescendants(this.root, 'DU_LIEU_GIAY_CHUNG_SINH');

    for (const n of nodes) {
      const m: Xml9Model = {
        MA_LK: this.getElementText(n, 'MA_LK') || undefined,
        MA_BHXH_NND: this.getElementText(n, 'MA_BHXH_NND') || undefined,
        MA_THE_NND: this.getElementText(n, 'MA_THE_NND') || undefined,
        HO_TEN_NND: this.getElementText(n, 'HO_TEN_NND') || undefined,
        NGAYSINH_NND: this.getElementDate(n, 'NGAYSINH_NND') ?? undefined,
        MA_DANTOC_NND: this.getElementText(n, 'MA_DANTOC_NND') || undefined,
        SO_CCCD_NND: this.getElementText(n, 'SO_CCCD_NND') || undefined,
        NGAYCAP_CCCD_NND: this.getElementDate(n, 'NGAYCAP_CCCD_NND') ?? undefined,
        NOICAP_CCCD_NND: this.getElementText(n, 'NOICAP_CCCD_NND') || undefined,
        NOI_CU_TRU_NND: this.getElementText(n, 'NOI_CU_TRU_NND') || undefined,
        MA_QUOCTICH: this.getElementText(n, 'MA_QUOCTICH') || undefined,
        MATINH_CU_TRU: this.getElementText(n, 'MATINH_CU_TRU') || undefined,
        MAHUYEN_CU_TRU: this.getElementText(n, 'MAHUYEN_CU_TRU') || undefined,
        MAXA_CU_TRU: this.getElementText(n, 'MAXA_CU_TRU') || undefined,
        HO_TEN_CHA: this.getElementText(n, 'HO_TEN_CHA') || undefined,
        MA_THE_TAM: this.getElementText(n, 'MA_THE_TAM') || undefined,
        HO_TEN_CON: this.getElementText(n, 'HO_TEN_CON') || undefined,
        GIOI_TINH_CON: this.getElementInt(n, 'GIOI_TINH_CON') ?? undefined,
        SO_CON: this.getElementInt(n, 'SO_CON') ?? undefined,
        LAN_SINH: this.getElementInt(n, 'LAN_SINH') ?? undefined,
        SO_CON_SONG: this.getElementInt(n, 'SO_CON_SONG') ?? undefined,
        CAN_NANG_CON: this.getElementDecimal(n, 'CAN_NANG_CON') ?? undefined,
        NGAY_SINH_CON: this.getElementDate(n, 'NGAY_SINH_CON') ?? undefined,
        NOI_SINH_CON: this.getElementText(n, 'NOI_SINH_CON') || undefined,
        TINH_TRANG_CON: this.getElementText(n, 'TINH_TRANG_CON') || undefined,
        SINHCON_PHAUTHUAT: this.getElementText(n, 'SINHCON_PHAUTHUAT') || undefined,
        SINHCON_DUOI32TUAN: this.getElementText(n, 'SINHCON_DUOI32TUAN') || undefined,
        GHI_CHU: this.getElementText(n, 'GHI_CHU') || undefined,
        NGUOI_DO_DE: this.getElementText(n, 'NGUOI_DO_DE') || undefined,
        NGUOI_GHI_PHIEU: this.getElementText(n, 'NGUOI_GHI_PHIEU') || undefined,
        NGAY_CT: this.getElementDate(n, 'NGAY_CT') ?? undefined,
        SO: this.getElementText(n, 'SO') || undefined,
        QUYEN_SO: this.getElementText(n, 'QUYEN_SO') || undefined,
        MA_TTDV: this.getElementText(n, 'MA_TTDV') || undefined,
        DU_PHONG: this.getElementText(n, 'DU_PHONG') || undefined,
      };
      result.push(m);
    }

    return result;
  }
}
