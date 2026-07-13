"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml6Parser = void 0;
const base_xml_parser_1 = require("../base-xml.parser");
class Xml6Parser extends base_xml_parser_1.BaseXmlParser {
    get loaiHoSo() {
        return 'XML6';
    }
    parse(xmlContent) {
        const result = [];
        if (!this.load(xmlContent))
            return result;
        if (!this.isRoot('CHI_TIEU_HO_SO_BENH_AN_CHAM_SOC_VA_DIEU_TRI_HIV_AIDS'))
            return result;
        const nodes = this.findDescendants(this.root, 'HO_SO_BENH_AN_CHAM_SOC_VA_DIEU_TRI_HIV_AIDS');
        for (const n of nodes) {
            const m = {
                MA_LK: this.getElementText(n, 'MA_LK') || undefined,
                MA_THE_BHYT: this.getElementText(n, 'MA_THE_BHYT') || undefined,
                SO_CCCD: this.getElementText(n, 'SO_CCCD') || undefined,
                NGAY_SINH: this.getElementDate(n, 'NGAY_SINH') ?? undefined,
                GIOI_TINH: this.getElementInt(n, 'GIOI_TINH') ?? undefined,
                DIA_CHI: this.getElementText(n, 'DIA_CHI') || undefined,
                MATINH_CU_TRU: this.getElementText(n, 'MATINH_CU_TRU') || undefined,
                MAHUYEN_CU_TRU: this.getElementText(n, 'MAHUYEN_CU_TRU') || undefined,
                MAXA_CU_TRU: this.getElementText(n, 'MAXA_CU_TRU') || undefined,
                NGAYKD_HIV: this.getElementDate(n, 'NGAYKD_HIV') ?? undefined,
                NOI_LAY_MAU_XN: this.getElementText(n, 'NOI_LAY_MAU_XN') || undefined,
                NOI_XN_KD: this.getElementText(n, 'NOI_XN_KD') || undefined,
                NOI_BDDT_ARV: this.getElementText(n, 'NOI_BDDT_ARV') || undefined,
                BDDT_ARV: this.getElementDate(n, 'BDDT_ARV') ?? undefined,
                MA_PHAC_DO_DIEU_TRI_BD: this.getElementText(n, 'MA_PHAC_DO_DIEU_TRI_BD') || undefined,
                MA_BAC_PHAC_DO_BD: this.getElementText(n, 'MA_BAC_PHAC_DO_BD') || undefined,
                MA_LYDO_DTRI: this.getElementText(n, 'MA_LYDO_DTRI') || undefined,
                LOAI_DTRI_LAO: this.getElementText(n, 'LOAI_DTRI_LAO') || undefined,
                SANG_LOC_LAO: this.getElementText(n, 'SANG_LOC_LAO') || undefined,
                PHACDO_DTRI_LAO: this.getElementText(n, 'PHACDO_DTRI_LAO') || undefined,
                NGAYBD_DTRI_LAO: this.getElementDate(n, 'NGAYBD_DTRI_LAO') ?? undefined,
                NGAYKT_DTRI_LAO: this.getElementDate(n, 'NGAYKT_DTRI_LAO') ?? undefined,
                KQ_DTRI_LAO: this.getElementText(n, 'KQ_DTRI_LAO') || undefined,
                MA_LYDO_XNTL_VR: this.getElementText(n, 'MA_LYDO_XNTL_VR') || undefined,
                NGAY_XN_TLVR: this.getElementDate(n, 'NGAY_XN_TLVR') ?? undefined,
                KQ_XNTL_VR: this.getElementText(n, 'KQ_XNTL_VR') || undefined,
                NGAY_KQ_XN_TLVR: this.getElementDate(n, 'NGAY_KQ_XN_TLVR') ?? undefined,
                MA_LOAI_BN: this.getElementText(n, 'MA_LOAI_BN') || undefined,
                GIAI_DOAN_LAM_SANG: this.getElementText(n, 'GIAI_DOAN_LAM_SANG') || undefined,
                NHOM_DOI_TUONG: this.getElementText(n, 'NHOM_DOI_TUONG') || undefined,
                MA_TINH_TRANG_DK: this.getElementText(n, 'MA_TINH_TRANG_DK') || undefined,
                LAN_XN_PCR: this.getElementInt(n, 'LAN_XN_PCR') ?? undefined,
                NGAY_XN_PCR: this.getElementDate(n, 'NGAY_XN_PCR') ?? undefined,
                NGAY_KQ_XN_PCR: this.getElementDate(n, 'NGAY_KQ_XN_PCR') ?? undefined,
                MA_KQ_XN_PCR: this.getElementText(n, 'MA_KQ_XN_PCR') || undefined,
                NGAY_NHAN_TT_MANG_THAI: this.getElementDate(n, 'NGAY_NHAN_TT_MANG_THAI') ?? undefined,
                NGAY_BAT_DAU_DT_CTX: this.getElementDate(n, 'NGAY_BAT_DAU_DT_CTX') ?? undefined,
                MA_XU_TRI: this.getElementText(n, 'MA_XU_TRI') || undefined,
                NGAY_BAT_DAU_XU_TRI: this.getElementDate(n, 'NGAY_BAT_DAU_XU_TRI') ?? undefined,
                NGAY_KET_THUC_XU_TRI: this.getElementDate(n, 'NGAY_KET_THUC_XU_TRI') ?? undefined,
                MA_PHAC_DO_DIEU_TRI: this.getElementText(n, 'MA_PHAC_DO_DIEU_TRI') || undefined,
                MA_BAC_PHAC_DO: this.getElementText(n, 'MA_BAC_PHAC_DO') || undefined,
                SO_NGAY_CAP_THUOC_ARV: this.getElementInt(n, 'SO_NGAY_CAP_THUOC_ARV') ?? undefined,
                NGAY_CHUYEN_PHAC_DO: this.getElementDate(n, 'NGAY_CHUYEN_PHAC_DO') ?? undefined,
                LY_DO_CHUYEN_PHAC_DO: this.getElementText(n, 'LY_DO_CHUYEN_PHAC_DO') || undefined,
                MA_CSKCB: this.getElementText(n, 'MA_CSKCB') || undefined,
                DU_PHONG: this.getElementText(n, 'DU_PHONG') || undefined,
            };
            result.push(m);
        }
        return result;
    }
}
exports.Xml6Parser = Xml6Parser;
//# sourceMappingURL=xml6.parser.js.map