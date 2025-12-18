using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_NOI_DEN : Xml1RuleBase
    {
        public override string Key => "MA_NOI_DEN";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            if (model.MA_NOI_DEN != null && model.MA_NOI_DEN.Length > 5)
            {
                return Error("MA_NOI_DEN quá kích thước tối đa (max 5)");
            }
            return null;
        }
    }
}
