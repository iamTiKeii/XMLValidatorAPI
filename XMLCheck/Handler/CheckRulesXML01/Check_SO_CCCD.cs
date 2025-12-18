using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_SO_CCCD : Xml1RuleBase
    {
        public override string Key => "SO_CCCD";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {

            if (model.SO_CCCD!=null)
            {
                if (model.SO_CCCD.Length >15)
                {
                    return Error("SO_CCCD quá kích thước tối đa (15 ký tự)");
                }
            }
            return null;
        }
    }
}
