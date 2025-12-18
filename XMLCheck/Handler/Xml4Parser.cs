using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using XMLCheck.Models;

namespace XMLCheck.Handler
{
    public class Xml4Parser : BaseXmlParser, IXmlParser
    {
        public string LoaiHoSo => "XML4";

        public object Parse(string xmlContent)
        {
            var result = new List<Xml4Model>();

            // 1. Load XML (Base xử lý BOM + Parse)
            if (!Load(xmlContent))
                return result;

            // 2. Check root
            if (!IsRoot("CHITIEU_CHITIET_DICHVUCANLAMSANG"))
                return result;

            // 3. Lấy danh sách CHI_TIET_CLS
            var nodes = Root!
                .Descendants()
                .Where(e => e.Name.LocalName == "CHI_TIET_CLS");

            foreach (var n in nodes)
            {
                // ===== Helper cục bộ theo node =====
                string? S4(string k) =>
                    n.Descendants()
                     .FirstOrDefault(x => x.Name.LocalName == k)
                     ?.Value
                     ?.Trim();

                int? I4(string k) =>
                    int.TryParse(S4(k), out var v) ? v : null;

                DateTime? DT4(string k)
                {
                    var raw = S4(k);
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

                var m = new Xml4Model
                {
                    MA_LK = S4("MA_LK"),
                    STT = I4("STT"),

                    MA_DICH_VU = S4("MA_DICH_VU"),

                    MA_CHI_SO = S4("MA_CHI_SO"),
                    TEN_CHI_SO = S4("TEN_CHI_SO"),
                    GIA_TRI = S4("GIA_TRI"),
                    DON_VI_DO = S4("DON_VI_DO"),

                    MO_TA = S4("MO_TA"),
                    KET_LUAN = S4("KET_LUAN"),

                    NGAY_KQ = DT4("NGAY_KQ"),
                    MA_BS_DOC_KQ = S4("MA_BS_DOC_KQ"),

                    DU_PHONG = S4("DU_PHONG")
                };

                result.Add(m);
            }

            return result;
        }
    }
}
