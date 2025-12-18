using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_PP_DIEU_TRI : Xml1RuleBase
    {
        public override string Key => "PP_DIEU_TRI";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            if (string.IsNullOrWhiteSpace(model.PP_DIEU_TRI))
            {
                return Error("PP_DIEU_TRI không được để trống");
            }
            return null;
        }
    }
}
