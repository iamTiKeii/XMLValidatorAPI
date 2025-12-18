using System.Globalization;
using XMLCheck.Models;

namespace XMLCheck.Handler
{
    public class Xml8Parser : BaseXmlParser, IXmlParser
    {
        public string LoaiHoSo => "XML8";

        public object Parse(string xmlContent)
        {
            var model = new Xml8Model();

            // 1. Load XML (Base xử lý BOM + Parse)
            if (!Load(xmlContent))
                return model;

            // 2. Check root
            if (!IsRoot("CHI_TIEU_DU_LIEU_TOM_TAT_HO_SO_BENH_AN"))
                return model;

            // ===== Helper đọc trực tiếp từ Root =====
            string? S8(string k) =>
                Root!
                    .Descendants()
                    .FirstOrDefault(x => x.Name.LocalName == k)
                    ?.Value
                    ?.Trim();

            int? I8(string k) =>
                int.TryParse(S8(k), out var v) ? v : null;

            DateTime? DT8(string k)
            {
                var raw = S8(k);
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
            model.MA_LK = S8("MA_LK");
            model.MA_LOAI_KCB = S8("MA_LOAI_KCB");

            model.HO_TEN_CHA = S8("HO_TEN_CHA");
            model.HO_TEN_ME = S8("HO_TEN_ME");
            model.NGUOI_GIAM_HO = S8("NGUOI_GIAM_HO");
            model.DON_VI = S8("DON_VI");

            model.NGAY_VAO = DT8("NGAY_VAO");
            model.NGAY_RA = DT8("NGAY_RA");

            model.CHAN_DOAN_VAO = S8("CHAN_DOAN_VAO");
            model.CHAN_DOAN_RV = S8("CHAN_DOAN_RV");

            model.QT_BENHLY = S8("QT_BENHLY");
            model.TOMTAT_KQ = S8("TOMTAT_KQ");
            model.PP_DIEUTRI = S8("PP_DIEUTRI");

            model.NGAY_SINHCON = DT8("NGAY_SINHCON");
            model.NGAY_CONCHET = DT8("NGAY_CONCHET");
            model.SO_CONCHET = I8("SO_CONCHET");

            model.KET_QUA_DTRI = S8("KET_QUA_DTRI");
            model.GHI_CHU = S8("GHI_CHU");

            model.MA_TTDV = S8("MA_TTDV");
            model.NGAY_CT = DT8("NGAY_CT");

            model.MA_THE_TAM = S8("MA_THE_TAM");
            model.DU_PHONG = S8("DU_PHONG");

            return model;
        }
    }
}
