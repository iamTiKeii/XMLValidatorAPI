using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using XMLCheck.Models;

namespace XMLCheck.Handler
{
    public class Xml9Parser : BaseXmlParser, IXmlParser
    {
        public string LoaiHoSo => "XML9";

        public object Parse(string xmlContent)
        {
            var result = new List<Xml9Model>();

            // 1. Load XML (Base xử lý BOM + namespace)
            if (!Load(xmlContent))
                return result;

            // 2. Check root
            if (!IsRoot("CHI_TIEU_DU_LIEU_GIAY_CHUNG_SINH"))
                return result;

            // 3. Lấy danh sách DU_LIEU_GIAY_CHUNG_SINH
            var nodes = Root!
                .Descendants()
                .Where(e => e.Name.LocalName == "DU_LIEU_GIAY_CHUNG_SINH");

            foreach (var n in nodes)
            {
                // ===== Helper cục bộ theo node =====
                string? S9(string k) =>
                    n.Descendants()
                     .FirstOrDefault(x => x.Name.LocalName == k)
                     ?.Value
                     ?.Trim();

                int? I9(string k) =>
                    int.TryParse(S9(k), out var v) ? v : null;

                decimal? D9(string k) =>
                    decimal.TryParse(S9(k), out var v) ? v : null;

                DateTime? DT9(string k)
                {
                    var raw = S9(k);
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

                var m = new Xml9Model
                {
                    MA_LK = S9("MA_LK"),

                    MA_BHXH_NND = S9("MA_BHXH_NND"),
                    MA_THE_NND = S9("MA_THE_NND"),
                    HO_TEN_NND = S9("HO_TEN_NND"),
                    NGAYSINH_NND = DT9("NGAYSINH_NND"),
                    MA_DANTOC_NND = S9("MA_DANTOC_NND"),
                    SO_CCCD_NND = S9("SO_CCCD_NND"),
                    NGAYCAP_CCCD_NND = DT9("NGAYCAP_CCCD_NND"),
                    NOICAP_CCCD_NND = S9("NOICAP_CCCD_NND"),
                    NOI_CU_TRU_NND = S9("NOI_CU_TRU_NND"),

                    MA_QUOCTICH = S9("MA_QUOCTICH"),
                    MATINH_CU_TRU = S9("MATINH_CU_TRU"),
                    MAHUYEN_CU_TRU = S9("MAHUYEN_CU_TRU"),
                    MAXA_CU_TRU = S9("MAXA_CU_TRU"),

                    HO_TEN_CHA = S9("HO_TEN_CHA"),
                    MA_THE_TAM = S9("MA_THE_TAM"),
                    HO_TEN_CON = S9("HO_TEN_CON"),
                    GIOI_TINH_CON = I9("GIOI_TINH_CON"),

                    SO_CON = I9("SO_CON"),
                    LAN_SINH = I9("LAN_SINH"),
                    SO_CON_SONG = I9("SO_CON_SONG"),
                    CAN_NANG_CON = D9("CAN_NANG_CON"),

                    NGAY_SINH_CON = DT9("NGAY_SINH_CON"),
                    NOI_SINH_CON = S9("NOI_SINH_CON"),
                    TINH_TRANG_CON = S9("TINH_TRANG_CON"),

                    SINHCON_PHAUTHUAT = S9("SINHCON_PHAUTHUAT"),
                    SINHCON_DUOI32TUAN = S9("SINHCON_DUOI32TUAN"),

                    GHI_CHU = S9("GHI_CHU"),
                    NGUOI_DO_DE = S9("NGUOI_DO_DE"),
                    NGUOI_GHI_PHIEU = S9("NGUOI_GHI_PHIEU"),
                    NGAY_CT = DT9("NGAY_CT"),

                    SO = S9("SO"),
                    QUYEN_SO = S9("QUYEN_SO"),
                    MA_TTDV = S9("MA_TTDV"),

                    DU_PHONG = S9("DU_PHONG")
                };

                result.Add(m);
            }

            return result;
        }
    }
}
