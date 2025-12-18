using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_NGAY_MIEN_CCT : Xml1RuleBase
    {
        public override string Key => "NGAY_MIEN_CCT";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            // Có giá trị thì mới check
            if (model.NGAY_MIEN_CCT == null)
            {
                return null;
            }
            return null;
        }
    }
}
