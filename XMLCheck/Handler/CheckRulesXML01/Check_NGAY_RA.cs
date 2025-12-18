using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_NGAY_RA : Xml1RuleBase
    {
        public override string Key => "NGAY_RA";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            var raw = model.NGAY_RA_RAW;

            // 1. Không để trống
            if (string.IsNullOrWhiteSpace(raw))
            {
                return Error("NGAY_RA không được để trống");
            }

            // 2. Không đúng định dạng yyyyMMddHHmmss
            if (!DateTime.TryParseExact(
                    raw,
                    "yyyyMMddHHmm",
                    null,
                    System.Globalization.DateTimeStyles.None,
                    out var ngayRa))
            {
                return Error("NGAY_RA không đúng định dạng yyyyMMddHHmm");
            }

            // 3. NGAY_RA không được nhỏ hơn NGAY_VAO
            if (model.NGAY_VAO.HasValue && ngayRa < model.NGAY_VAO.Value)
            {
                return Error("NGAY_RA không được nhỏ hơn NGAY_VAO");
            }

            return null;
        }
    }
}
