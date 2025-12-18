using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_PTTT_QT : Xml1RuleBase
    {
        public override string Key => "MA_PTTT_QT";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            var value = model.MA_PTTT_QT;

            if (string.IsNullOrWhiteSpace(value))
                return null; // Không bắt lỗi rỗng

            // Rule 1: Quá kích thước tối đa (125)
            if (value.Length > 125)
            {
                return Error("MA_PTTT_QT quá kích thước tối đa (125)");
            }

            // Rule 2: Phải phân cách bằng dấu ;
            if (value.Contains(",") || value.Contains("|"))
            {
                return Error("Các MA_PTTT_QT phải cách nhau bằng dấu ';'");
            }

            return null;
        }
    }
}
