import { BaseXmlParser } from '../base-xml.parser';
import { Xml2Model } from '../../interfaces/xml-models.interface';

export class Xml2Parser extends BaseXmlParser {
  public get loaiHoSo(): string {
    return 'XML2';
  }

  public parse(xmlContent: string): Xml2Model[] {
    const result: Xml2Model[] = [];

    if (!this.load(xmlContent)) return result;
    if (!this.isRoot('CHITIEU_CHITIET_THUOC')) return result;

    const dsachNodes = this.findChildren(this.root, 'DSACH_CHI_TIET_THUOC');

    for (const dsach of dsachNodes) {
      const itemNodes = this.findChildren(dsach, 'CHI_TIET_THUOC');

      for (const n of itemNodes) {
        const m: Xml2Model = {
          MA_LK: this.getElementText(n, 'MA_LK') || undefined,
          STT: this.getElementInt(n, 'STT') ?? undefined,
          MA_THUOC: this.getElementText(n, 'MA_THUOC') || undefined,
          MA_PP_CHEBIEN: this.getElementText(n, 'MA_PP_CHEBIEN') || undefined,
          MA_CSKCB_THUOC: this.getElementText(n, 'MA_CSKCB_THUOC') || undefined,
          MA_NHOM: this.getElementText(n, 'MA_NHOM') || undefined,
          TEN_THUOC: this.getElementText(n, 'TEN_THUOC') || undefined,
          DON_VI_TINH: this.getElementText(n, 'DON_VI_TINH') || undefined,
          HAM_LUONG: this.getElementText(n, 'HAM_LUONG') || undefined,
          DUONG_DUNG: this.getElementText(n, 'DUONG_DUNG') || undefined,
          DANG_BAO_CHE: this.getElementText(n, 'DANG_BAO_CHE') || undefined,
          LIEU_DUNG: this.getElementText(n, 'LIEU_DUNG') || undefined,
          CACH_DUNG: this.getElementText(n, 'CACH_DUNG') || undefined,
          SO_DANG_KY: this.getElementText(n, 'SO_DANG_KY') || undefined,
          TT_THAU: this.getElementText(n, 'TT_THAU') || undefined,
          PHAM_VI: this.getElementText(n, 'PHAM_VI') || undefined,
          TYLE_TT_BH: this.getElementDecimal(n, 'TYLE_TT_BH') ?? undefined,
          SO_LUONG: this.getElementDecimal(n, 'SO_LUONG') ?? undefined,
          DON_GIA: this.getElementDecimal(n, 'DON_GIA') ?? undefined,
          THANH_TIEN_BV: this.getElementDecimal(n, 'THANH_TIEN_BV') ?? undefined,
          THANH_TIEN_BH: this.getElementDecimal(n, 'THANH_TIEN_BH') ?? undefined,
          T_NGUONKHAC_NSNN: this.getElementDecimal(n, 'T_NGUONKHAC_NSNN') ?? undefined,
          T_NGUONKHAC_VTNN: this.getElementDecimal(n, 'T_NGUONKHAC_VTNN') ?? undefined,
          T_NGUONKHAC_VTTN: this.getElementDecimal(n, 'T_NGUONKHAC_VTTN') ?? undefined,
          T_NGUONKHAC_CL: this.getElementDecimal(n, 'T_NGUONKHAC_CL') ?? undefined,
          T_NGUONKHAC: this.getElementDecimal(n, 'T_NGUONKHAC') ?? undefined,
          MUC_HUONG: this.getElementDecimal(n, 'MUC_HUONG') ?? undefined,
          T_BNTT: this.getElementDecimal(n, 'T_BNTT') ?? undefined,
          T_BNCCT: this.getElementDecimal(n, 'T_BNCCT') ?? undefined,
          T_BHTT: this.getElementDecimal(n, 'T_BHTT') ?? undefined,
          MA_KHOA: this.getElementText(n, 'MA_KHOA') || undefined,
          MA_BAC_SI: this.getElementText(n, 'MA_BAC_SI') || undefined,
          MA_DICH_VU: this.getElementText(n, 'MA_DICH_VU') || undefined,
          NGAY_YL: this.getElementDate(n, 'NGAY_YL') ?? undefined,
          NGAY_TH_YL: this.getElementDate(n, 'NGAY_TH_YL') ?? undefined,
          MA_PTTT: this.getElementText(n, 'MA_PTTT') || undefined,
          NGUON_CTRA: this.getElementText(n, 'NGUON_CTRA') || undefined,
          VET_THUONG_TP: this.getElementText(n, 'VET_THUONG_TP') || undefined,
          DU_PHONG: this.getElementText(n, 'DU_PHONG') || undefined,
        };
        result.push(m);
      }
    }

    return result;
  }
}
