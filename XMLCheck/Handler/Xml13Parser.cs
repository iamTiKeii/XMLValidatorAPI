using System.Globalization;
using System.Linq;
using XMLCheck.Models;

namespace XMLCheck.Handler
{
    public class Xml13Parser : BaseXmlParser, IXmlParser
    {
        public string LoaiHoSo => "XML13";

        public object Parse(string xmlContent)
        {
            var model = new Xml13Model();

            // 1. Load XML (xử lý BOM + parse)
            if (!Load(xmlContent))
                return model;

            // 2. Check root
            if (!IsRoot("CHI_TIEU_GIAYCHUYENTUYEN"))
                return model;

            // ===== Helper đọc từ Root =====
            string? S13(string k) =>
                Root!
                    .Descendants()
                    .FirstOrDefault(x => x.Name.LocalName == k)
                    ?.Value
                    ?.Trim();

            int? I13(string k) =>
                int.TryParse(S13(k), out var v) ? v : null;

            DateTime? DT13(string k)
            {
                var raw = S13(k);
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
            model.MA_LK = S13("MA_LK");

            model.SO_HOSO = S13("SO_HOSO");
            model.SO_CHUYENTUYEN = S13("SO_CHUYENTUYEN");
            model.GIAY_CHUYEN_TUYEN = S13("GIAY_CHUYEN_TUYEN");

            model.MA_CSKCB = S13("MA_CSKCB");
            model.MA_NOI_DI = S13("MA_NOI_DI");
            model.MA_NOI_DEN = S13("MA_NOI_DEN");

            model.HO_TEN = S13("HO_TEN");
            model.NGAY_SINH = DT13("NGAY_SINH");
            model.GIOI_TINH = I13("GIOI_TINH");

            model.MA_QUOCTICH = S13("MA_QUOCTICH");
            model.MA_DANTOC = S13("MA_DANTOC");
            model.MA_NGHE_NGHIEP = S13("MA_NGHE_NGHIEP");

            model.DIA_CHI = S13("DIA_CHI");
            model.MA_THE_BHYT = S13("MA_THE_BHYT");
            model.GT_THE_DEN = DT13("GT_THE_DEN");

            model.NGAY_VAO = DT13("NGAY_VAO");
            model.NGAY_VAO_NOI_TRU = DT13("NGAY_VAO_NOI_TRU");
            model.NGAY_RA = DT13("NGAY_RA");

            model.DAU_HIEU_LS = S13("DAU_HIEU_LS");
            model.CHAN_DOAN_RV = S13("CHAN_DOAN_RV");

            model.QT_BENHLY = S13("QT_BENHLY");
            model.TOMTAT_KQ = S13("TOMTAT_KQ");
            model.PP_DIEUTRI = S13("PP_DIEUTRI");     // tag 1
            model.PP_DIEU_TRI = S13("PP_DIEU_TRI");   // tag 2 (nếu có)

            model.MA_BENH_CHINH = S13("MA_BENH_CHINH");
            model.MA_BENH_KT = S13("MA_BENH_KT");
            model.MA_BENH_YHCT = S13("MA_BENH_YHCT");

            model.TEN_DICH_VU = S13("TEN_DICH_VU");
            model.TEN_THUOC = S13("TEN_THUOC");

            model.MA_LOAI_RV = S13("MA_LOAI_RV");
            model.MA_LYDO_CT = S13("MA_LYDO_CT");

            model.HUONG_DIEU_TRI = S13("HUONG_DIEU_TRI");
            model.PHUONGTIEN_VC = S13("PHUONGTIEN_VC");

            model.HOTEN_NGUOI_HT = S13("HOTEN_NGUOI_HT");
            model.CHUCDANH_NGUOI_HT = S13("CHUCDANH_NGUOI_HT");

            model.MA_BAC_SI = S13("MA_BAC_SI");
            model.MA_TTDV = S13("MA_TTDV");

            model.DU_PHONG = S13("DU_PHONG");

            return model;
        }
    }
}
