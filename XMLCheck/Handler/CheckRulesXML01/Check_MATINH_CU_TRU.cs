using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MATINH_CU_TRU:Xml1RuleBase
    {
        public override string Key => "MATINH_CU_TRU";
        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            if (string.IsNullOrWhiteSpace(model.MATINH_CU_TRU))
            {
                return Error($"{Key} không được rỗng");
            }

            if (model.MATINH_CU_TRU.Length > 2)
            {
                return Error($"{Key} quá kích thước tối đa (2 ký tự)");
            }
            return null;
        }
    }
}
