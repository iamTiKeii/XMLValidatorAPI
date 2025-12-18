using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_BENH_KT : Xml1RuleBase
    {
        public override string Key => "MA_BENH_KT";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            var value = model.MA_BENH_KT;

            if (string.IsNullOrWhiteSpace(value))
                return null; // Không bắt lỗi rỗng

            // Rule 1: Quá kích thước tối đa (100)
            if (value.Length > 100)
            {
                return Error("MA_BENH_KT quá kích thước tối đa (100)");
            }

            // Rule 2: Phải phân cách bằng dấu ;
            if (value.Contains(",") || value.Contains("|"))
            {
                return Error("Các MA_BENH_KT phải cách nhau bằng dấu ';'");
            }

            var items = value
                .Split(';', StringSplitOptions.RemoveEmptyEntries);

            // Rule 3: Tối đa 12 mã
            if (items.Length > 12)
            {
                return Error("MA_BENH_KT tối đa 12 mã");
            }

            return null;
        }
    }
}
