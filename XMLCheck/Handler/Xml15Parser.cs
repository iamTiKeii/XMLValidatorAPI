using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using XMLCheck.Models;

namespace XMLCheck.Handler
{
    public class Xml15Parser : BaseXmlParser, IXmlParser
    {
        public string LoaiHoSo => "XML15";

        public object Parse(string xmlContent)
        {
            var result = new List<Xml15Model>();

            // 1. Load XML (xử lý BOM + namespace)
            if (!Load(xmlContent))
                return result;

            // 2. Check root
            if (!IsRoot("CHI_TIEU_DIEUTRI_BENHLAO"))
                return result;

            // 3. Lấy danh sách CHITIET_DIEUTRI_BENHLAO
            var nodes = Root!
                .Descendants()
                .Where(e => e.Name.LocalName == "CHITIET_DIEUTRI_BENHLAO");

            foreach (var n in nodes)
            {
                // ===== Helper cục bộ theo node =====
                string? S15(string k) =>
                    n.Descendants()
                     .FirstOrDefault(x => x.Name.LocalName == k)
                     ?.Value
                     ?.Trim();

                int? I15(string k) =>
                    int.TryParse(S15(k), out var v) ? v : null;

                DateTime? DT15(string k)
                {
                    var raw = S15(k);
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

                var m = new Xml15Model
                {
                    MA_LK = S15("MA_LK"),
                    STT = I15("STT"),

                    MA_BN = S15("MA_BN"),
                    HO_TEN = S15("HO_TEN"),
                    SO_CCCD = S15("SO_CCCD"),

                    PHANLOAI_LAO_VITRI = S15("PHANLOAI_LAO_VITRI"),
                    PHANLOAI_LAO_TS = S15("PHANLOAI_LAO_TS"),
                    PHANLOAI_LAO_HIV = S15("PHANLOAI_LAO_HIV"),
                    PHANLOAI_LAO_VK = S15("PHANLOAI_LAO_VK"),
                    PHANLOAI_LAO_KT = S15("PHANLOAI_LAO_KT"),

                    LOAI_DTRI_LAO = S15("LOAI_DTRI_LAO"),
                    NGAYBD_DTRI_LAO = DT15("NGAYBD_DTRI_LAO"),
                    PHACDO_DTRI_LAO = S15("PHACDO_DTRI_LAO"),
                    NGAYKT_DTRI_LAO = DT15("NGAYKT_DTRI_LAO"),
                    KET_QUA_DTRI_LAO = S15("KET_QUA_DTRI_LAO"),

                    MA_CSKCB = S15("MA_CSKCB"),

                    NGAYKD_HIV = DT15("NGAYKD_HIV"),
                    BDDT_ARV = DT15("BDDT_ARV"),
                    NGAY_BAT_DAU_DT_CTX = DT15("NGAY_BAT_DAU_DT_CTX"),

                    DU_PHONG = S15("DU_PHONG")
                };

                result.Add(m);
            }

            return result;
        }
    }
}
