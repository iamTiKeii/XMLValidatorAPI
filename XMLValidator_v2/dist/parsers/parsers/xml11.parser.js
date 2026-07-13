"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml11Parser = void 0;
const base_xml_parser_1 = require("../base-xml.parser");
class Xml11Parser extends base_xml_parser_1.BaseXmlParser {
    get loaiHoSo() {
        return 'XML11';
    }
    parse(xmlContent) {
        const model = {};
        if (!this.load(xmlContent))
            return model;
        if (!this.isRoot('CHI_TIEU_DU_LIEU_GIAY_CHUNG_NHAN_NGHI_VIEC_HUONG_BAO_HIEM_XA_HOI'))
            return model;
        model.MA_LK = this.S('MA_LK') || undefined;
        model.SO_CT = this.S('SO_CT') || undefined;
        model.SO_SERI = this.S('SO_SERI') || undefined;
        model.SO_KCB = this.S('SO_KCB') || undefined;
        model.DON_VI = this.S('DON_VI') || undefined;
        model.MA_BHXH = this.S('MA_BHXH') || undefined;
        model.MA_THE_BHYT = this.S('MA_THE_BHYT') || undefined;
        model.CHAN_DOAN_RV = this.S('CHAN_DOAN_RV') || undefined;
        model.PP_DIEUTRI = this.S('PP_DIEUTRI') || undefined;
        model.MA_DINH_CHI_THAI = this.S('MA_DINH_CHI_THAI') || undefined;
        model.NGUYENNHAN_DINHCHI = this.S('NGUYENNHAN_DINHCHI') || undefined;
        model.TUOI_THAI = this.S('TUOI_THAI') || undefined;
        model.SO_NGAY_NGHI = this.I('SO_NGAY_NGHI') ?? undefined;
        model.TU_NGAY = this.DT('TU_NGAY') ?? undefined;
        model.DEN_NGAY = this.DT('DEN_NGAY') ?? undefined;
        model.HO_TEN_CHA = this.S('HO_TEN_CHA') || undefined;
        model.HO_TEN_ME = this.S('HO_TEN_ME') || undefined;
        model.MA_TTDV = this.S('MA_TTDV') || undefined;
        model.MA_BS = this.S('MA_BS') || undefined;
        model.NGAY_CT = this.DT('NGAY_CT') ?? undefined;
        model.MA_THE_TAM = this.S('MA_THE_TAM') || undefined;
        model.MAU_SO = this.S('MAU_SO') || undefined;
        model.DU_PHONG = this.S('DU_PHONG') || undefined;
        return model;
    }
}
exports.Xml11Parser = Xml11Parser;
//# sourceMappingURL=xml11.parser.js.map