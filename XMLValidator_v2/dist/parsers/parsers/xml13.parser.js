"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml13Parser = void 0;
const base_xml_parser_1 = require("../base-xml.parser");
class Xml13Parser extends base_xml_parser_1.BaseXmlParser {
    get loaiHoSo() {
        return 'XML13';
    }
    parse(xmlContent) {
        const model = {};
        if (!this.load(xmlContent))
            return model;
        if (!this.isRoot('CHI_TIEU_GIAYCHUYENTUYEN'))
            return model;
        model.MA_LK = this.S('MA_LK') || undefined;
        model.SO_HOSO = this.S('SO_HOSO') || undefined;
        model.SO_CHUYENTUYEN = this.S('SO_CHUYENTUYEN') || undefined;
        model.GIAY_CHUYEN_TUYEN = this.S('GIAY_CHUYEN_TUYEN') || undefined;
        model.MA_CSKCB = this.S('MA_CSKCB') || undefined;
        model.MA_NOI_DI = this.S('MA_NOI_DI') || undefined;
        model.MA_NOI_DEN = this.S('MA_NOI_DEN') || undefined;
        model.HO_TEN = this.S('HO_TEN') || undefined;
        model.NGAY_SINH = this.DT('NGAY_SINH') ?? undefined;
        model.GIOI_TINH = this.I('GIOI_TINH') ?? undefined;
        model.MA_QUOCTICH = this.S('MA_QUOCTICH') || undefined;
        model.MA_DANTOC = this.S('MA_DANTOC') || undefined;
        model.MA_NGHE_NGHIEP = this.S('MA_NGHE_NGHIEP') || undefined;
        model.DIA_CHI = this.S('DIA_CHI') || undefined;
        model.MA_THE_BHYT = this.S('MA_THE_BHYT') || undefined;
        model.GT_THE_DEN = this.DT('GT_THE_DEN') ?? undefined;
        model.NGAY_VAO = this.DT('NGAY_VAO') ?? undefined;
        model.NGAY_VAO_NOI_TRU = this.DT('NGAY_VAO_NOI_TRU') ?? undefined;
        model.NGAY_RA = this.DT('NGAY_RA') ?? undefined;
        model.DAU_HIEU_LS = this.S('DAU_HIEU_LS') || undefined;
        model.CHAN_DOAN_RV = this.S('CHAN_DOAN_RV') || undefined;
        model.QT_BENHLY = this.S('QT_BENHLY') || undefined;
        model.TOMTAT_KQ = this.S('TOMTAT_KQ') || undefined;
        model.PP_DIEUTRI = this.S('PP_DIEUTRI') || undefined;
        model.MA_BENH_CHINH = this.S('MA_BENH_CHINH') || undefined;
        model.MA_BENH_KT = this.S('MA_BENH_KT') || undefined;
        model.MA_BENH_YHCT = this.S('MA_BENH_YHCT') || undefined;
        model.TEN_DICH_VU = this.S('TEN_DICH_VU') || undefined;
        model.TEN_THUOC = this.S('TEN_THUOC') || undefined;
        model.PP_DIEU_TRI = this.S('PP_DIEU_TRI') || undefined;
        model.MA_LOAI_RV = this.S('MA_LOAI_RV') || undefined;
        model.MA_LYDO_CT = this.S('MA_LYDO_CT') || undefined;
        model.HUONG_DIEU_TRI = this.S('HUONG_DIEU_TRI') || undefined;
        model.PHUONGTIEN_VC = this.S('PHUONGTIEN_VC') || undefined;
        model.HOTEN_NGUOI_HT = this.S('HOTEN_NGUOI_HT') || undefined;
        model.CHUCDANH_NGUOI_HT = this.S('CHUCDANH_NGUOI_HT') || undefined;
        model.MA_BAC_SI = this.S('MA_BAC_SI') || undefined;
        model.MA_TTDV = this.S('MA_TTDV') || undefined;
        model.DU_PHONG = this.S('DU_PHONG') || undefined;
        return model;
    }
}
exports.Xml13Parser = Xml13Parser;
//# sourceMappingURL=xml13.parser.js.map