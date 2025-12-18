using System.Globalization;
using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_NGAY_VAO_NOI_TRU : Xml1RuleBase
    {
        public override string Key => "NGAY_VAO_NOI_TRU";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            var raw = model.NGAY_VAO_NOI_TRU_RAW;

            if (string.IsNullOrWhiteSpace(raw))
            {
                // Không bắt buộc → bỏ qua
                return null;
            }

            // 1. Quá kích thước tối đa (12)
            if (raw.Length > 12)
            {
                return Error("NGAY_VAO_NOI_TRU quá kích thước tối đa (12)");
            }

            // 2. Không đúng định dạng yyyyMMddHHmm
            if (!DateTime.TryParseExact(
                    raw,
                    "yyyyMMddHHmm",
                    null,
                    System.Globalization.DateTimeStyles.None,
                    out var ngayVaoNoiTru))
            {
                return Error("NGAY_VAO_NOI_TRU không đúng định dạng yyyyMMddHHmm");
            }

            // 3. Không được lớn hơn ngày hiện tại
            if (ngayVaoNoiTru > DateTime.Now)
            {
                return Error("NGAY_VAO_NOI_TRU không được lớn hơn ngày hiện tại");
            }

            return null;
        }
    }
}
