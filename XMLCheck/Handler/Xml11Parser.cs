using System.Globalization;
using System.Linq;
using XMLCheck.Models;

namespace XMLCheck.Handler
{
    public class Xml11Parser : BaseXmlParser, IXmlParser
    {
        public string LoaiHoSo => "XML11";

        public object Parse(string xmlContent)
        {
            var model = new Xml11Model();

            // 1. Load XML (xử lý BOM + parse)
            if (!Load(xmlContent))
                return model;

            // 2. Check root
            if (!IsRoot("CHI_TIEU_DU_LIEU_GIAY_CHUNG_NHAN_NGHI_VIEC_HUONG_BAO_HIEM_XA_HOI"))
                return model;

            // ===== Helper đọc từ Root =====
            string? S11(string k) =>
                Root!
                    .Descendants()
                    .FirstOrDefault(x => x.Name.LocalName == k)
                    ?.Value
                    ?.Trim();

            int? I11(string k) =>
                int.TryParse(S11(k), out var v) ? v : null;

            DateTime? DT11(string k)
            {
                var raw = S11(k);
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
            model.MA_LK = S11("MA_LK");

            model.SO_CT = S11("SO_CT");
            model.SO_SERI = S11("SO_SERI");
            model.SO_KCB = S11("SO_KCB");

            model.DON_VI = S11("DON_VI");
            model.MA_BHXH = S11("MA_BHXH");
            model.MA_THE_BHYT = S11("MA_THE_BHYT");

            model.CHAN_DOAN_RV = S11("CHAN_DOAN_RV");
            model.PP_DIEUTRI = S11("PP_DIEUTRI");

            model.MA_DINH_CHI_THAI = S11("MA_DINH_CHI_THAI");
            model.NGUYENNHAN_DINHCHI = S11("NGUYENNHAN_DINHCHI");
            model.TUOI_THAI = S11("TUOI_THAI");

            model.SO_NGAY_NGHI = I11("SO_NGAY_NGHI");
            model.TU_NGAY = DT11("TU_NGAY");
            model.DEN_NGAY = DT11("DEN_NGAY");

            model.HO_TEN_CHA = S11("HO_TEN_CHA");
            model.HO_TEN_ME = S11("HO_TEN_ME");

            model.MA_TTDV = S11("MA_TTDV");
            model.MA_BS = S11("MA_BS");

            model.NGAY_CT = DT11("NGAY_CT");

            model.MA_THE_TAM = S11("MA_THE_TAM");
            model.MAU_SO = S11("MAU_SO"); // CT07

            model.DU_PHONG = S11("DU_PHONG");

            return model;
        }
    }
}
