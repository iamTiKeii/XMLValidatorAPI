"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml3Parser = void 0;
const base_xml_parser_1 = require("../base-xml.parser");
class Xml3Parser extends base_xml_parser_1.BaseXmlParser {
    get loaiHoSo() {
        return 'XML3';
    }
    parse(xmlContent) {
        const result = [];
        if (!this.load(xmlContent))
            return result;
        if (!this.isRoot('CHITIEU_CHITIET_DVKT_VTYT'))
            return result;
        const nodes = this.findDescendants(this.root, 'CHI_TIET_DVKT');
        for (const n of nodes) {
            const m = {
                MA_LK: this.getElementText(n, 'MA_LK') || undefined,
                STT: this.getElementInt(n, 'STT') ?? undefined,
                MA_DICH_VU: this.getElementText(n, 'MA_DICH_VU') || undefined,
                MA_PTTT_QT: this.getElementText(n, 'MA_PTTT_QT') || undefined,
                MA_VAT_TU: this.getElementText(n, 'MA_VAT_TU') || undefined,
                MA_NHOM: this.getElementText(n, 'MA_NHOM') || undefined,
                GOI_VTYT: this.getElementText(n, 'GOI_VTYT') || undefined,
                TEN_VAT_TU: this.getElementText(n, 'TEN_VAT_TU') || undefined,
                TEN_DICH_VU: this.getElementText(n, 'TEN_DICH_VU') || undefined,
                MA_XANG_DAU: this.getElementText(n, 'MA_XANG_DAU') || undefined,
                DON_VI_TINH: this.getElementText(n, 'DON_VI_TINH') || undefined,
                PHAM_VI: this.getElementText(n, 'PHAM_VI') || undefined,
                SO_LUONG: this.getElementDecimal(n, 'SO_LUONG') ?? undefined,
                DON_GIA_BV: this.getElementDecimal(n, 'DON_GIA_BV') ?? undefined,
                DON_GIA_BH: this.getElementDecimal(n, 'DON_GIA_BH') ?? undefined,
                TT_THAU: this.getElementText(n, 'TT_THAU') || undefined,
                TYLE_TT_DV: this.getElementDecimal(n, 'TYLE_TT_DV') ?? undefined,
                TYLE_TT_BH: this.getElementDecimal(n, 'TYLE_TT_BH') ?? undefined,
                THANH_TIEN_BV: this.getElementDecimal(n, 'THANH_TIEN_BV') ?? undefined,
                THANH_TIEN_BH: this.getElementDecimal(n, 'THANH_TIEN_BH') ?? undefined,
                T_TRANTT: this.getElementDecimal(n, 'T_TRANTT') ?? undefined,
                MUC_HUONG: this.getElementDecimal(n, 'MUC_HUONG') ?? undefined,
                T_NGUONKHAC_NSNN: this.getElementDecimal(n, 'T_NGUONKHAC_NSNN') ?? undefined,
                T_NGUONKHAC_VTNN: this.getElementDecimal(n, 'T_NGUONKHAC_VTNN') ?? undefined,
                T_NGUONKHAC_VTTN: this.getElementDecimal(n, 'T_NGUONKHAC_VTTN') ?? undefined,
                T_NGUONKHAC_CL: this.getElementDecimal(n, 'T_NGUONKHAC_CL') ?? undefined,
                T_NGUONKHAC: this.getElementDecimal(n, 'T_NGUONKHAC') ?? undefined,
                T_BNTT: this.getElementDecimal(n, 'T_BNTT') ?? undefined,
                T_BNCCT: this.getElementDecimal(n, 'T_BNCCT') ?? undefined,
                T_BHTT: this.getElementDecimal(n, 'T_BHTT') ?? undefined,
                MA_KHOA: this.getElementText(n, 'MA_KHOA') || undefined,
                MA_GIUONG: this.getElementText(n, 'MA_GIUONG') || undefined,
                MA_BAC_SI: this.getElementText(n, 'MA_BAC_SI') || undefined,
                NGUOI_THUC_HIEN: this.getElementText(n, 'NGUOI_THUC_HIEN') || undefined,
                MA_BENH: this.getElementText(n, 'MA_BENH') || undefined,
                MA_BENH_YHCT: this.getElementText(n, 'MA_BENH_YHCT') || undefined,
                NGAY_YL: this.getElementDate(n, 'NGAY_YL') ?? undefined,
                NGAY_TH_YL: this.getElementDate(n, 'NGAY_TH_YL') ?? undefined,
                NGAY_KQ: this.getElementDate(n, 'NGAY_KQ') ?? undefined,
                MA_PTTT: this.getElementText(n, 'MA_PTTT') || undefined,
                VET_THUONG_TP: this.getElementText(n, 'VET_THUONG_TP') || undefined,
                PP_VO_CAM: this.getElementText(n, 'PP_VO_CAM') || undefined,
                VI_TRI_TH_DVKT: this.getElementText(n, 'VI_TRI_TH_DVKT') || undefined,
                MA_MAY: this.getElementText(n, 'MA_MAY') || undefined,
                MA_HIEU_SP: this.getElementText(n, 'MA_HIEU_SP') || undefined,
                TAI_SU_DUNG: this.getElementText(n, 'TAI_SU_DUNG') || undefined,
                DU_PHONG: this.getElementText(n, 'DU_PHONG') || undefined,
            };
            result.push(m);
        }
        return result;
    }
}
exports.Xml3Parser = Xml3Parser;
//# sourceMappingURL=xml3.parser.js.map