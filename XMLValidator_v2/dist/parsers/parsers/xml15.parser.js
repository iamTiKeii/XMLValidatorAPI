"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml15Parser = void 0;
const base_xml_parser_1 = require("../base-xml.parser");
class Xml15Parser extends base_xml_parser_1.BaseXmlParser {
    get loaiHoSo() {
        return 'XML15';
    }
    parse(xmlContent) {
        const result = [];
        if (!this.load(xmlContent))
            return result;
        if (!this.isRoot('CHI_TIEU_DIEUTRI_BENHLAO'))
            return result;
        const nodes = this.findDescendants(this.root, 'CHITIET_DIEUTRI_BENHLAO');
        for (const n of nodes) {
            const m = {
                MA_LK: this.getElementText(n, 'MA_LK') || undefined,
                STT: this.getElementInt(n, 'STT') ?? undefined,
                MA_BN: this.getElementText(n, 'MA_BN') || undefined,
                HO_TEN: this.getElementText(n, 'HO_TEN') || undefined,
                SO_CCCD: this.getElementText(n, 'SO_CCCD') || undefined,
                PHANLOAI_LAO_VITRI: this.getElementText(n, 'PHANLOAI_LAO_VITRI') || undefined,
                PHANLOAI_LAO_TS: this.getElementText(n, 'PHANLOAI_LAO_TS') || undefined,
                PHANLOAI_LAO_HIV: this.getElementText(n, 'PHANLOAI_LAO_HIV') || undefined,
                PHANLOAI_LAO_VK: this.getElementText(n, 'PHANLOAI_LAO_VK') || undefined,
                PHANLOAI_LAO_KT: this.getElementText(n, 'PHANLOAI_LAO_KT') || undefined,
                LOAI_DTRI_LAO: this.getElementText(n, 'LOAI_DTRI_LAO') || undefined,
                NGAYBD_DTRI_LAO: this.getElementDate(n, 'NGAYBD_DTRI_LAO') ?? undefined,
                PHACDO_DTRI_LAO: this.getElementText(n, 'PHACDO_DTRI_LAO') || undefined,
                NGAYKT_DTRI_LAO: this.getElementDate(n, 'NGAYKT_DTRI_LAO') ?? undefined,
                KET_QUA_DTRI_LAO: this.getElementText(n, 'KET_QUA_DTRI_LAO') || undefined,
                MA_CSKCB: this.getElementText(n, 'MA_CSKCB') || undefined,
                NGAYKD_HIV: this.getElementDate(n, 'NGAYKD_HIV') ?? undefined,
                BDDT_ARV: this.getElementDate(n, 'BDDT_ARV') ?? undefined,
                NGAY_BAT_DAU_DT_CTX: this.getElementDate(n, 'NGAY_BAT_DAU_DT_CTX') ?? undefined,
                DU_PHONG: this.getElementText(n, 'DU_PHONG') || undefined,
            };
            result.push(m);
        }
        return result;
    }
}
exports.Xml15Parser = Xml15Parser;
//# sourceMappingURL=xml15.parser.js.map