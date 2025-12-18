using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML1
{
    public class Check_MA_LK : Xml1RuleBase
    {
        public override string Key => "MA_LK";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {

            if (string.IsNullOrWhiteSpace(model.MA_LK))
            {
                return Error("MA_LK không được rỗng");
            }

            if (model.MA_LK.Length > 100)
            {
                return Error("MA_LK quá kích thước tối đa (100 ký tự)");
            }

            return null;
        }
    }

}
