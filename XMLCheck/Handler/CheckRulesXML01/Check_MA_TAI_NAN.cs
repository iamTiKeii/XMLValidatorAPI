using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_TAI_NAN : Xml1RuleBase
    {
        public override string Key => "MA_TAI_NAN";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            if (string.IsNullOrWhiteSpace(model.MA_TAI_NAN))
            {
                return null;
            }
            if(model.MA_TAI_NAN.Length > 1)
            {
                return Error("MA_TAI_NAN quá kích thước tối đa (1)");
            }
            // 2. Sai kiểu dữ liệu (số)
            if (!int.TryParse(model.MA_TAI_NAN?.Trim(), out _))
            {
                return Error("MA_TAI_NAN sai kiểu dữ liệu (số)");
            }
            return null;
        }
    }
}
