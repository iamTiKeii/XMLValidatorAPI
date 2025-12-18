using System.Globalization;
using System.Linq;
using XMLCheck.Models;

namespace XMLCheck.Handler
{
    public class Xml10Parser : BaseXmlParser, IXmlParser
    {
        public string LoaiHoSo => "XML10";

        public object Parse(string xmlContent)
        {
            var model = new Xml10Model();

            // 1. Load XML (xử lý BOM + parse)
            if (!Load(xmlContent))
                return model;

            // 2. Check root
            if (!IsRoot("CHI_TIEU_DU_LIEU_GIAY_NGHI_DUONG_THAI"))
                return model;

            // ===== Helper đọc từ Root =====
            string? S10(string k) =>
                Root!
                    .Descendants()
                    .FirstOrDefault(x => x.Name.LocalName == k)
                    ?.Value
                    ?.Trim();

            int? I10(string k) =>
                int.TryParse(S10(k), out var v) ? v : null;

            DateTime? DT10(string k)
            {
                var raw = S10(k);
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

            // ===== Mapping =====
            model.MA_LK = S10("MA_LK");

            model.SO_SERI = S10("SO_SERI");
            model.SO_CT = S10("SO_CT");
            model.SO_NGAY = I10("SO_NGAY");

            model.DON_VI = S10("DON_VI");
            model.CHAN_DOAN_RV = S10("CHAN_DOAN_RV");

            model.TU_NGAY = DT10("TU_NGAY");
            model.DEN_NGAY = DT10("DEN_NGAY");

            model.MA_TTDV = S10("MA_TTDV");

            model.TEN_BS = S10("TEN_BS");
            model.MA_BS = S10("MA_BS");

            model.NGAY_CT = DT10("NGAY_CT");

            model.DU_PHONG = S10("DU_PHONG");

            return model;
        }
    }
}
