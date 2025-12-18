using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_DIA_CHI:Xml1RuleBase
    {
        public override string Key => "DIA_CHI";
        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {

            if (string.IsNullOrWhiteSpace(model.DIA_CHI))
            {
                return Error($"{Key} không được rỗng");
            }

            if (model.DIA_CHI.Length > 1024)
            {
                return Error($"{Key} quá kích thước tối đa (1024 ký tự)");
            }

            return null;
        }
    }
}
