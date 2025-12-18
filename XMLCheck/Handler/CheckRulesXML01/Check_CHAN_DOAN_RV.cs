using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_CHAN_DOAN_RV : Xml1RuleBase
    {
        public override string Key => "CHAN_DOAN_RV";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            if (string.IsNullOrWhiteSpace(model.CHAN_DOAN_RV))
            {
                return Error("CHAN_DOAN_RV không được để trống");
            }
            return null;
        }
    }
}
