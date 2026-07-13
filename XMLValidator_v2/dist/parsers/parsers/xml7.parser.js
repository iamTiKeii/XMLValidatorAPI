"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml7Parser = void 0;
const base_xml_parser_1 = require("../base-xml.parser");
class Xml7Parser extends base_xml_parser_1.BaseXmlParser {
    get loaiHoSo() {
        return 'XML7';
    }
    parse(xmlContent) {
        const model = {};
        if (!this.load(xmlContent))
            return model;
        if (!this.isRoot('CHI_TIEU_DU_LIEU_GIAY_RA_VIEN'))
            return model;
        model.MA_LK = this.S('MA_LK') || undefined;
        model.SO_LUU_TRU = this.S('SO_LUU_TRU') || undefined;
        model.MA_YTE = this.S('MA_YTE') || undefined;
        model.MA_KHOA_RV = this.S('MA_KHOA_RV') || undefined;
        model.NGAY_VAO = this.DT('NGAY_VAO') ?? undefined;
        model.NGAY_RA = this.DT('NGAY_RA') ?? undefined;
        model.MA_DINH_CHI_THAI = this.S('MA_DINH_CHI_THAI') || undefined;
        model.NGUYENNHAN_DINHCHI = this.S('NGUYENNHAN_DINHCHI') || undefined;
        model.THOIGIAN_DINHCHI = this.S('THOIGIAN_DINHCHI') || undefined;
        model.TUOI_THAI = this.S('TUOI_THAI') || undefined;
        model.CHAN_DOAN_RV = this.S('CHAN_DOAN_RV') || undefined;
        model.PP_DIEUTRI = this.S('PP_DIEUTRI') || undefined;
        model.GHI_CHU = this.S('GHI_CHU') || undefined;
        model.MA_TTDV = this.S('MA_TTDV') || undefined;
        model.MA_BS = this.S('MA_BS') || undefined;
        model.TEN_BS = this.S('TEN_BS') || undefined;
        model.NGAY_CT = this.DT('NGAY_CT') ?? undefined;
        model.MA_CHA = this.S('MA_CHA') || undefined;
        model.MA_ME = this.S('MA_ME') || undefined;
        model.MA_THE_TAM = this.S('MA_THE_TAM') || undefined;
        model.HO_TEN_CHA = this.S('HO_TEN_CHA') || undefined;
        model.HO_TEN_ME = this.S('HO_TEN_ME') || undefined;
        model.SO_NGAY_NGHI = this.I('SO_NGAY_NGHI') ?? undefined;
        model.NGOAITRU_TUNGAY = this.DT('NGOAITRU_TUNGAY') ?? undefined;
        model.NGOAITRU_DENNGAY = this.DT('NGOAITRU_DENNGAY') ?? undefined;
        model.DU_PHONG = this.S('DU_PHONG') || undefined;
        return model;
    }
}
exports.Xml7Parser = Xml7Parser;
//# sourceMappingURL=xml7.parser.js.map