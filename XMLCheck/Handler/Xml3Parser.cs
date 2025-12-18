using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using XMLCheck.Models;

namespace XMLCheck.Handler
{
    public class Xml3Parser : BaseXmlParser, IXmlParser
    {
        public string LoaiHoSo => "XML3";

        public object Parse(string xmlContent)
        {
            var result = new List<Xml3Model>();

            // 1. Load XML (Base xử lý BOM + Parse)
            if (!Load(xmlContent))
                return result;

            // 2. Check root
            if (!IsRoot("CHITIEU_CHITIET_DVKT_VTYT"))
                return result;

            // 3. Lấy danh sách CHI_TIET_DVKT
            var nodes = Root!
                .Descendants()
                .Where(e => e.Name.LocalName == "CHI_TIET_DVKT");

            foreach (var n in nodes)
            {
                // ===== Helper cục bộ theo node =====
                string? S3(string k) =>
                    n.Descendants()
                     .FirstOrDefault(x => x.Name.LocalName == k)
                     ?.Value
                     ?.Trim();

                int? I3(string k) =>
                    int.TryParse(S3(k), out var v) ? v : null;

                decimal? D3(string k) =>
                    decimal.TryParse(
                        S3(k),
                        NumberStyles.Any,
                        CultureInfo.InvariantCulture,
                        out var v
                    ) ? v : null;

                DateTime? DT3(string k)
                {
                    var raw = S3(k);
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

                var m = new Xml3Model
                {
                    MA_LK = S3("MA_LK"),
                    STT = I3("STT"),

                    MA_DICH_VU = S3("MA_DICH_VU"),
                    MA_PTTT_QT = S3("MA_PTTT_QT"),
                    MA_VAT_TU = S3("MA_VAT_TU"),
                    MA_NHOM = S3("MA_NHOM"),
                    GOI_VTYT = S3("GOI_VTYT"),

                    TEN_VAT_TU = S3("TEN_VAT_TU"),
                    TEN_DICH_VU = S3("TEN_DICH_VU"),
                    MA_XANG_DAU = S3("MA_XANG_DAU"),
                    DON_VI_TINH = S3("DON_VI_TINH"),
                    PHAM_VI = S3("PHAM_VI"),

                    SO_LUONG = D3("SO_LUONG"),
                    DON_GIA_BV = D3("DON_GIA_BV"),
                    DON_GIA_BH = D3("DON_GIA_BH"),

                    TT_THAU = S3("TT_THAU"),
                    TYLE_TT_DV = D3("TYLE_TT_DV"),
                    TYLE_TT_BH = D3("TYLE_TT_BH"),

                    THANH_TIEN_BV = D3("THANH_TIEN_BV"),
                    THANH_TIEN_BH = D3("THANH_TIEN_BH"),

                    T_TRANTT = D3("T_TRANTT"),
                    MUC_HUONG = D3("MUC_HUONG"),

                    T_NGUONKHAC_NSNN = D3("T_NGUONKHAC_NSNN"),
                    T_NGUONKHAC_VTNN = D3("T_NGUONKHAC_VTNN"),
                    T_NGUONKHAC_VTTN = D3("T_NGUONKHAC_VTTN"),
                    T_NGUONKHAC_CL = D3("T_NGUONKHAC_CL"),
                    T_NGUONKHAC = D3("T_NGUONKHAC"),

                    T_BNTT = D3("T_BNTT"),
                    T_BNCCT = D3("T_BNCCT"),
                    T_BHTT = D3("T_BHTT"),

                    MA_KHOA = S3("MA_KHOA"),
                    MA_GIUONG = S3("MA_GIUONG"),
                    MA_BAC_SI = S3("MA_BAC_SI"),
                    NGUOI_THUC_HIEN = S3("NGUOI_THUC_HIEN"),

                    MA_BENH = S3("MA_BENH"),
                    MA_BENH_YHCT = S3("MA_BENH_YHCT"),

                    NGAY_YL = DT3("NGAY_YL"),
                    NGAY_TH_YL = DT3("NGAY_TH_YL"),
                    NGAY_KQ = DT3("NGAY_KQ"),

                    MA_PTTT = S3("MA_PTTT"),
                    VET_THUONG_TP = S3("VET_THUONG_TP"),
                    PP_VO_CAM = S3("PP_VO_CAM"),
                    VI_TRI_TH_DVKT = S3("VI_TRI_TH_DVKT"),

                    MA_MAY = S3("MA_MAY"),
                    MA_HIEU_SP = S3("MA_HIEU_SP"),
                    TAI_SU_DUNG = S3("TAI_SU_DUNG"),

                    DU_PHONG = S3("DU_PHONG")
                };

                result.Add(m);
            }

            return result;
        }
    }
}
