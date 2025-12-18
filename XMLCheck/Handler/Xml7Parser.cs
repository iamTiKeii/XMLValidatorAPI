using System.Globalization;
using XMLCheck.Models;

namespace XMLCheck.Handler
{
    public class Xml7Parser : BaseXmlParser, IXmlParser
    {
        public string LoaiHoSo => "XML7";

        public object Parse(string xmlContent)
        {
            var model = new Xml7Model();

            // 1. Load XML (Base xử lý BOM + Parse)
            if (!Load(xmlContent))
                return model;

            // 2. Check root
            if (!IsRoot("CHI_TIEU_DU_LIEU_GIAY_RA_VIEN"))
                return model;

            // ===== Helper dùng Root =====
            string? S7(string k) =>
                Root!
                    .Descendants()
                    .FirstOrDefault(x => x.Name.LocalName == k)
                    ?.Value
                    ?.Trim();

            int? I7(string k) =>
                int.TryParse(S7(k), out var v) ? v : null;

            DateTime? DT7(string k)
            {
                var raw = S7(k);
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
            model.MA_LK = S7("MA_LK");

            model.SO_LUU_TRU = S7("SO_LUU_TRU");
            model.MA_YTE = S7("MA_YTE");
            model.MA_KHOA_RV = S7("MA_KHOA_RV");

            model.NGAY_VAO = DT7("NGAY_VAO");
            model.NGAY_RA = DT7("NGAY_RA");

            model.MA_DINH_CHI_THAI = S7("MA_DINH_CHI_THAI");
            model.NGUYENNHAN_DINHCHI = S7("NGUYENNHAN_DINHCHI");
            model.THOIGIAN_DINHCHI = S7("THOIGIAN_DINHCHI");
            model.TUOI_THAI = S7("TUOI_THAI");

            model.CHAN_DOAN_RV = S7("CHAN_DOAN_RV");
            model.PP_DIEUTRI = S7("PP_DIEUTRI");
            model.GHI_CHU = S7("GHI_CHU");

            model.MA_TTDV = S7("MA_TTDV");

            model.MA_BS = S7("MA_BS");
            model.TEN_BS = S7("TEN_BS");

            model.NGAY_CT = DT7("NGAY_CT");

            model.MA_CHA = S7("MA_CHA");
            model.MA_ME = S7("MA_ME");
            model.MA_THE_TAM = S7("MA_THE_TAM");

            model.HO_TEN_CHA = S7("HO_TEN_CHA");
            model.HO_TEN_ME = S7("HO_TEN_ME");

            model.SO_NGAY_NGHI = I7("SO_NGAY_NGHI");

            model.NGOAITRU_TUNGAY = DT7("NGOAITRU_TUNGAY");
            model.NGOAITRU_DENNGAY = DT7("NGOAITRU_DENNGAY");

            model.DU_PHONG = S7("DU_PHONG");

            return model;
        }
    }
}
