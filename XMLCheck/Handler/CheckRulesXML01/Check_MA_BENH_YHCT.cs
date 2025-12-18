using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_BENH_YHCT : Xml1RuleBase
    {
        public override string Key => "MA_BENH_YHCT";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            var value = model.MA_BENH_YHCT;

            if (string.IsNullOrWhiteSpace(value))
                return null;

            if (value.Length > 255)
            {
                return Error("MA_BENH_YHCT quá kích thước tối đa (255)");
            }
            if (value.Contains(",") || value.Contains("|"))
            {
                return Error("Các MA_BENH_YHCT phải cách nhau bằng dấu ';'");
            }

            return null;
        }
    }
}
