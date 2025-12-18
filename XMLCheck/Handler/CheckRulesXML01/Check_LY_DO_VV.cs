using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_LY_DO_VV : Xml1RuleBase
    {
        public override string Key => "LY_DO_VV";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            if (string.IsNullOrWhiteSpace(model.LY_DO_VV)){
                return Error("LY_DO_VV không được để trống");
            }
            return null;
        }
    }
}
