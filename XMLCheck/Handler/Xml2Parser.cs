using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using XMLCheck.Models;

namespace XMLCheck.Handler
{
    public class Xml2Parser : BaseXmlParser, IXmlParser
    {
        public string LoaiHoSo => "XML2";

        public object Parse(string xmlContent)
        {
            var result = new List<Xml2Model>();

            // 1. Load XML (Base xử lý BOM + Parse)
            if (!Load(xmlContent))
                return result;

            // 2. Check root: <CHITIEU_CHITIET_THUOC>
            if (!IsRoot("CHITIEU_CHITIET_THUOC"))
                return result;

            // 3. Lấy DSACH_CHI_TIET_THUOC
            var dsachNodes = Root!
                .Elements()
                .Where(e => e.Name.LocalName == "DSACH_CHI_TIET_THUOC");

            foreach (var dsach in dsachNodes)
            {
                // 4. Lấy từng CHI_TIET_THUOC
                var itemNodes = dsach
                    .Elements()
                    .Where(e => e.Name.LocalName == "CHI_TIET_THUOC");

                foreach (var n in itemNodes)
                {
                    // ===== Helper CHỈ đọc trong CHI_TIET_THUOC =====
                    string? S(string k) =>
                        n.Elements()
                         .FirstOrDefault(x => x.Name.LocalName == k)
                         ?.Value
                         ?.Trim();

                    int? I(string k) =>
                        int.TryParse(S(k), out var v) ? v : null;

                    decimal? D(string k) =>
                        decimal.TryParse(
                            S(k),
                            NumberStyles.Any,
                            CultureInfo.InvariantCulture,
                            out var v
                        ) ? v : null;

                    DateTime? DT(string k)
                    {
                        var raw = S(k);
                        if (string.IsNullOrWhiteSpace(raw)) return null;

                        string[] fmts = { "yyyyMMdd", "yyyyMMddHHmm", "yyyyMMddHHmmss" };
                        return DateTime.TryParseExact(
                            raw,
                            fmts,
                            CultureInfo.InvariantCulture,
                            DateTimeStyles.None,
                            out var d
                        ) ? d : null;
                    }
                    // =================================================

                    var m = new Xml2Model
                    {
                        MA_LK = S("MA_LK"),
                        STT = I("STT"),

                        MA_THUOC = S("MA_THUOC"),
                        MA_PP_CHEBIEN = S("MA_PP_CHEBIEN"),
                        MA_CSKCB_THUOC = S("MA_CSKCB_THUOC"),
                        MA_NHOM = S("MA_NHOM"),

                        TEN_THUOC = S("TEN_THUOC"),
                        DON_VI_TINH = S("DON_VI_TINH"),
                        HAM_LUONG = S("HAM_LUONG"),
                        DUONG_DUNG = S("DUONG_DUNG"),
                        DANG_BAO_CHE = S("DANG_BAO_CHE"),

                        LIEU_DUNG = S("LIEU_DUNG"),
                        CACH_DUNG = S("CACH_DUNG"),
                        SO_DANG_KY = S("SO_DANG_KY"),
                        TT_THAU = S("TT_THAU"),
                        PHAM_VI = S("PHAM_VI"),

                        TYLE_TT_BH = D("TYLE_TT_BH"),
                        SO_LUONG = D("SO_LUONG"),
                        DON_GIA = D("DON_GIA"),

                        THANH_TIEN_BV = D("THANH_TIEN_BV"),
                        THANH_TIEN_BH = D("THANH_TIEN_BH"),

                        T_NGUONKHAC_NSNN = D("T_NGUONKHAC_NSNN"),
                        T_NGUONKHAC_VTNN = D("T_NGUONKHAC_VTNN"),
                        T_NGUONKHAC_VTTN = D("T_NGUONKHAC_VTTN"),
                        T_NGUONKHAC_CL = D("T_NGUONKHAC_CL"),
                        T_NGUONKHAC = D("T_NGUONKHAC"),

                        MUC_HUONG = D("MUC_HUONG"),
                        T_BNTT = D("T_BNTT"),
                        T_BNCCT = D("T_BNCCT"),
                        T_BHTT = D("T_BHTT"),

                        MA_KHOA = S("MA_KHOA"),
                        MA_BAC_SI = S("MA_BAC_SI"),
                        MA_DICH_VU = S("MA_DICH_VU"),

                        NGAY_YL = DT("NGAY_YL"),
                        NGAY_TH_YL = DT("NGAY_TH_YL"),

                        MA_PTTT = S("MA_PTTT"),
                        NGUON_CTRA = S("NGUON_CTRA"),
                        VET_THUONG_TP = S("VET_THUONG_TP"),

                        DU_PHONG = S("DU_PHONG")
                    };
                    result.Add(m);
                }
            }

            return result;
        }
    }
}
