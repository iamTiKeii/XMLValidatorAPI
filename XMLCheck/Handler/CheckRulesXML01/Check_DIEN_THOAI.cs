using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_DIEN_THOAI : Xml1RuleBase
    {
        public override string Key => "DIEN_THOAI";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            if(model.DIEN_THOAI!=null)
            {
                if (model.DIEN_THOAI.Length > 15)
                {
                    return Error($"{Key} quá kích thước quy định ( 15 ký tự )");
                }
            }
            return null;
        }
    }
}
