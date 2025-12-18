using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_GT_THE_TU : Xml1RuleBase
    {
        public override string Key => "GT_THE_TU";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            // 1. Không được để trống
            if (model.GT_THE_TU == null)
            {
                return Error("GT_THE_TU không được để trống");
            }
            if (string.IsNullOrWhiteSpace(model.MA_THE_BHYT))
            {
                return null;
            }

            var bhytList = model.MA_THE_BHYT
                .Split(';', StringSplitOptions.RemoveEmptyEntries)
                .Select(x => x.Trim())
                .ToList();
            if (bhytList.Count > 1)
            {
                return Error("Thứ tự GT_THE_TU không khớp với thứ tự của MA_THE_BHYT");
            }

            return null;
        }
    }
}
