using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_HO_TEN: Xml1RuleBase
    {
        public override string Key => "HO_TEN";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {

            if (string.IsNullOrWhiteSpace(model.HO_TEN))
            {
                return Error($"{Key} không được rỗng");
            }

            if (model.HO_TEN.Length > 255)
            {
                return Error($"{Key} quá kích thước tối đa (255 ký tự)");
            }

            return null;
        }
    }
}
