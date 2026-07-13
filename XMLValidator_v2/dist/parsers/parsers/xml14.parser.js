"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml14Parser = void 0;
const base_xml_parser_1 = require("../base-xml.parser");
class Xml14Parser extends base_xml_parser_1.BaseXmlParser {
    get loaiHoSo() {
        return 'XML14';
    }
    parse(xmlContent) {
        const model = {};
        if (!this.load(xmlContent))
            return model;
        if (!this.isRoot('CHI_TIEU_GIAYHEN_KHAMLAI'))
            return model;
        model.MA_LK = this.S('MA_LK') || undefined;
        model.SO_GIAYHEN_KL = this.S('SO_GIAYHEN_KL') || undefined;
        model.MA_CSKCB = this.S('MA_CSKCB') || undefined;
        model.HO_TEN = this.S('HO_TEN') || undefined;
        model.NGAY_SINH = this.DT('NGAY_SINH') ?? undefined;
        model.GIOI_TINH = this.I('GIOI_TINH') ?? undefined;
        model.DIA_CHI = this.S('DIA_CHI') || undefined;
        model.MA_THE_BHYT = this.S('MA_THE_BHYT') || undefined;
        model.GT_THE_DEN = this.DT('GT_THE_DEN') ?? undefined;
        model.NGAY_VAO = this.DT('NGAY_VAO') ?? undefined;
        model.NGAY_VAO_NOI_TRU = this.DT('NGAY_VAO_NOI_TRU') ?? undefined;
        model.NGAY_RA = this.DT('NGAY_RA') ?? undefined;
        model.NGAY_HEN_KL = this.DT('NGAY_HEN_KL') ?? undefined;
        model.CHAN_DOAN_RV = this.S('CHAN_DOAN_RV') || undefined;
        model.MA_BENH_CHINH = this.S('MA_BENH_CHINH') || undefined;
        model.MA_BENH_KT = this.S('MA_BENH_KT') || undefined;
        model.MA_BENH_YHCT = this.S('MA_BENH_YHCT') || undefined;
        model.MA_DOITUONG_KCB = this.S('MA_DOITUONG_KCB') || undefined;
        model.MA_BAC_SI = this.S('MA_BAC_SI') || undefined;
        model.MA_TTDV = this.S('MA_TTDV') || undefined;
        model.NGAY_CT = this.DT('NGAY_CT') ?? undefined;
        model.DU_PHONG = this.S('DU_PHONG') || undefined;
        return model;
    }
}
exports.Xml14Parser = Xml14Parser;
//# sourceMappingURL=xml14.parser.js.map