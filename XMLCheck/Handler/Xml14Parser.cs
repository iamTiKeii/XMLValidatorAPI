using System.Globalization;
using System.Linq;
using XMLCheck.Models;

namespace XMLCheck.Handler
{
    public class Xml14Parser : BaseXmlParser, IXmlParser
    {
        public string LoaiHoSo => "XML14";

        public object Parse(string xmlContent)
        {
            var model = new Xml14Model();

            // 1. Load XML (xử lý BOM + parse)
            if (!Load(xmlContent))
                return model;

            // 2. Check root
            if (!IsRoot("CHI_TIEU_GIAYHEN_KHAMLAI"))
                return model;

            // ===== Helper đọc từ Root =====
            string? S14(string k) =>
                Root!
                    .Descendants()
                    .FirstOrDefault(x => x.Name.LocalName == k)
                    ?.Value
                    ?.Trim();

            int? I14(string k) =>
                int.TryParse(S14(k), out var v) ? v : null;

            DateTime? DT14(string k)
            {
                var raw = S14(k);
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
            model.MA_LK = S14("MA_LK");

            model.SO_GIAYHEN_KL = S14("SO_GIAYHEN_KL");
            model.MA_CSKCB = S14("MA_CSKCB");

            model.HO_TEN = S14("HO_TEN");
            model.NGAY_SINH = DT14("NGAY_SINH");
            model.GIOI_TINH = I14("GIOI_TINH");

            model.DIA_CHI = S14("DIA_CHI");
            model.MA_THE_BHYT = S14("MA_THE_BHYT");
            model.GT_THE_DEN = DT14("GT_THE_DEN");

            model.NGAY_VAO = DT14("NGAY_VAO");
            model.NGAY_VAO_NOI_TRU = DT14("NGAY_VAO_NOI_TRU");
            model.NGAY_RA = DT14("NGAY_RA");

            model.NGAY_HEN_KL = DT14("NGAY_HEN_KL");

            model.CHAN_DOAN_RV = S14("CHAN_DOAN_RV");
            model.MA_BENH_CHINH = S14("MA_BENH_CHINH");
            model.MA_BENH_KT = S14("MA_BENH_KT");
            model.MA_BENH_YHCT = S14("MA_BENH_YHCT");

            model.MA_DOITUONG_KCB = S14("MA_DOITUONG_KCB");

            model.MA_BAC_SI = S14("MA_BAC_SI");
            model.MA_TTDV = S14("MA_TTDV");

            model.NGAY_CT = DT14("NGAY_CT");

            model.DU_PHONG = S14("DU_PHONG");

            return model;
        }
    }
}
