using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using XMLCheck.Models;

namespace XMLCheck.Handler
{
    public class Xml5Parser : BaseXmlParser, IXmlParser
    {
        public string LoaiHoSo => "XML5";

        public object Parse(string xmlContent)
        {
            var result = new List<Xml5Model>();

            // 1. Load XML (Base xử lý BOM + Parse)
            if (!Load(xmlContent))
                return result;

            // 2. Check root
            if (!IsRoot("CHITIEU_CHITIET_DIENBIENLAMSANG"))
                return result;

            // 3. Lấy danh sách CHI_TIET_DIEN_BIEN_BENH
            var nodes = Root!
                .Descendants()
                .Where(e => e.Name.LocalName == "CHI_TIET_DIEN_BIEN_BENH");

            foreach (var n in nodes)
            {
                // ===== Helper cục bộ theo node =====
                string? S5(string k) =>
                    n.Descendants()
                     .FirstOrDefault(x => x.Name.LocalName == k)
                     ?.Value
                     ?.Trim();

                int? I5(string k) =>
                    int.TryParse(S5(k), out var v) ? v : null;

                DateTime? DT5(string k)
                {
                    var raw = S5(k);
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

                var m = new Xml5Model
                {
                    MA_LK = S5("MA_LK"),
                    STT = I5("STT"),

                    DIEN_BIEN_LS = S5("DIEN_BIEN_LS"),
                    GIAI_DOAN_BENH = S5("GIAI_DOAN_BENH"),

                    HOI_CHAN = S5("HOI_CHAN"),
                    PHAU_THUAT = S5("PHAU_THUAT"),

                    THOI_DIEM_DBLS = DT5("THOI_DIEM_DBLS"),
                    NGUOI_THUC_HIEN = S5("NGUOI_THUC_HIEN"),

                    DU_PHONG = S5("DU_PHONG")
                };

                result.Add(m);
            }

            return result;
        }
    }
}
