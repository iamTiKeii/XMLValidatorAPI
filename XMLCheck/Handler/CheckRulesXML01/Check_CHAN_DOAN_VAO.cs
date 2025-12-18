using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_CHAN_DOAN_VAO : Xml1RuleBase
    {
        public override string Key => "CHAN_DOAN_VAO";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            if (string.IsNullOrWhiteSpace(model.CHAN_DOAN_VAO))
            {
                return Error("CHAN_DOAN_VAO không được để trống");
            }
            return null;
        }
    }
}
