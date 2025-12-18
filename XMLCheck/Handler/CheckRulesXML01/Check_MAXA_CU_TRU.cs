using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MAXA_CU_TRU : Xml1RuleBase
    {
        public override string Key => "MAXA_CU_TRU";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            if (string.IsNullOrWhiteSpace(model.MAXA_CU_TRU))
            {
                return null;
            }

            if (model.MAXA_CU_TRU.Length > 5)
            {
                return Error($"{Key} quá kích thước tối đa (5 ký tự)");
            }
            return null;
        }
    }
}
