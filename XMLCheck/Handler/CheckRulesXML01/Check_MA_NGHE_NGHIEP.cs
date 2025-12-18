using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_NGHE_NGHIEP:Xml1RuleBase
    {
        public override string Key=> "MA_NGHE_NGHIEP";
        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {

            if (string.IsNullOrWhiteSpace(model.MA_NGHE_NGHIEP))
            {
                return Error($"{Key} không được rỗng");
            }
            if(model.MA_NGHE_NGHIEP.Length > 5)
            {
                return Error($"{Key} quá kích thước tối đa ( max: 5)");
            }
            return null;
        }
    }
}
