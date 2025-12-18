using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using XMLCheck.Models;

namespace XMLCheck.Handler
{
    public class Xml6Parser : BaseXmlParser, IXmlParser
    {
        public string LoaiHoSo => "XML6";

        public object Parse(string xmlContent)
        {
            var result = new List<Xml6Model>();

            // 1. Load XML (Base xử lý BOM + Parse)
            if (!Load(xmlContent))
                return result;

            // 2. Check root
            if (!IsRoot("CHI_TIEU_HO_SO_BENH_AN_CHAM_SOC_VA_DIEU_TRI_HIV_AIDS"))
                return result;

            // 3. Lấy danh sách hồ sơ HIV/AIDS
            var nodes = Root!
                .Descendants()
                .Where(e => e.Name.LocalName == "HO_SO_BENH_AN_CHAM_SOC_VA_DIEU_TRI_HIV_AIDS");

            foreach (var n in nodes)
            {
                // ===== Helper cục bộ theo node =====
                string? S6(string k) =>
                    n.Descendants()
                     .FirstOrDefault(x => x.Name.LocalName == k)
                     ?.Value
                     ?.Trim();

                int? I6(string k) =>
                    int.TryParse(S6(k), out var v) ? v : null;

                DateTime? DT6(string k)
                {
                    var raw = S6(k);
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

                var m = new Xml6Model
                {
                    MA_LK = S6("MA_LK"),
                    MA_THE_BHYT = S6("MA_THE_BHYT"),
                    SO_CCCD = S6("SO_CCCD"),
                    NGAY_SINH = DT6("NGAY_SINH"),
                    GIOI_TINH = I6("GIOI_TINH"),

                    DIA_CHI = S6("DIA_CHI"),
                    MATINH_CU_TRU = S6("MATINH_CU_TRU"),
                    MAHUYEN_CU_TRU = S6("MAHUYEN_CU_TRU"),
                    MAXA_CU_TRU = S6("MAXA_CU_TRU"),

                    NGAYKD_HIV = DT6("NGAYKD_HIV"),
                    NOI_LAY_MAU_XN = S6("NOI_LAY_MAU_XN"),
                    NOI_XN_KD = S6("NOI_XN_KD"),

                    NOI_BDDT_ARV = S6("NOI_BDDT_ARV"),
                    BDDT_ARV = DT6("BDDT_ARV"),
                    MA_PHAC_DO_DIEU_TRI_BD = S6("MA_PHAC_DO_DIEU_TRI_BD"),
                    MA_BAC_PHAC_DO_BD = S6("MA_BAC_PHAC_DO_BD"),
                    MA_LYDO_DTRI = S6("MA_LYDO_DTRI"),

                    LOAI_DTRI_LAO = S6("LOAI_DTRI_LAO"),
                    SANG_LOC_LAO = S6("SANG_LOC_LAO"),
                    PHACDO_DTRI_LAO = S6("PHACDO_DTRI_LAO"),
                    NGAYBD_DTRI_LAO = DT6("NGAYBD_DTRI_LAO"),
                    NGAYKT_DTRI_LAO = DT6("NGAYKT_DTRI_LAO"),
                    KQ_DTRI_LAO = S6("KQ_DTRI_LAO"),

                    MA_LYDO_XNTL_VR = S6("MA_LYDO_XNTL_VR"),
                    NGAY_XN_TLVR = DT6("NGAY_XN_TLVR"),
                    KQ_XNTL_VR = S6("KQ_XNTL_VR"),
                    NGAY_KQ_XN_TLVR = DT6("NGAY_KQ_XN_TLVR"),

                    MA_LOAI_BN = S6("MA_LOAI_BN"),
                    GIAI_DOAN_LAM_SANG = S6("GIAI_DOAN_LAM_SANG"),
                    NHOM_DOI_TUONG = S6("NHOM_DOI_TUONG"),
                    MA_TINH_TRANG_DK = S6("MA_TINH_TRANG_DK"),

                    LAN_XN_PCR = I6("LAN_XN_PCR"),
                    NGAY_XN_PCR = DT6("NGAY_XN_PCR"),
                    NGAY_KQ_XN_PCR = DT6("NGAY_KQ_XN_PCR"),
                    MA_KQ_XN_PCR = S6("MA_KQ_XN_PCR"),

                    NGAY_NHAN_TT_MANG_THAI = DT6("NGAY_NHAN_TT_MANG_THAI"),

                    NGAY_BAT_DAU_DT_CTX = DT6("NGAY_BAT_DAU_DT_CTX"),
                    MA_XU_TRI = S6("MA_XU_TRI"),
                    NGAY_BAT_DAU_XU_TRI = DT6("NGAY_BAT_DAU_XU_TRI"),
                    NGAY_KET_THUC_XU_TRI = DT6("NGAY_KET_THUC_XU_TRI"),

                    MA_PHAC_DO_DIEU_TRI = S6("MA_PHAC_DO_DIEU_TRI"),
                    MA_BAC_PHAC_DO = S6("MA_BAC_PHAC_DO"),
                    SO_NGAY_CAP_THUOC_ARV = I6("SO_NGAY_CAP_THUOC_ARV"),
                    NGAY_CHUYEN_PHAC_DO = DT6("NGAY_CHUYEN_PHAC_DO"),
                    LY_DO_CHUYEN_PHAC_DO = S6("LY_DO_CHUYEN_PHAC_DO"),

                    MA_CSKCB = S6("MA_CSKCB"),
                    DU_PHONG = S6("DU_PHONG")
                };

                result.Add(m);
            }

            return result;
        }
    }
}
