using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_NOI_DI : Xml1RuleBase
    {
        public override string Key => "MA_NOI_DI";

        public override ErrorDetails? Check(Xml1Model model,HoSoContext context)
        {
            if(model.MA_NOI_DI!=null && model.MA_NOI_DI.Length>5)
            {
                return Error("MA_NOI_DI quá kích thước tối đa (max 5)");
            }
            return null;
        }
    }
}
