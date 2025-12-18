using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_BENH_CHINH : Xml1RuleBase
    {
        public override string Key => "MA_BENH_CHINH";

        public override ErrorDetails? Check(Xml1Model model,HoSoContext context)
        {
            if (string.IsNullOrWhiteSpace(model.MA_BENH_CHINH))
            {
                return Error("MA_BENH_CHINH không được để trống");
            }
            if(model.MA_BENH_CHINH.Length > 7)
            {
                return Error("MA_BENH_CHINH vượt quá chiều dài tối đa (max 7)");
            }
            return null;
        }
    }
}
