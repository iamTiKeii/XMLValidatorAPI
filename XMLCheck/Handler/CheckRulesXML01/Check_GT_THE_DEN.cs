using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_GT_THE_DEN : Xml1RuleBase
    {
        public override string Key => "GT_THE_DEN";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            // 1. Không được để trống
            if (model.GT_THE_DEN == null)
            {
                return Error("GT_THE_DEN không được để trống");
            }
            if (!string.IsNullOrWhiteSpace(model.MA_THE_BHYT))
            {
                var bhytList = model.MA_THE_BHYT
                    .Split(';', StringSplitOptions.RemoveEmptyEntries)
                    .Select(x => x.Trim())
                    .ToList();

                if (bhytList.Count > 1)
                {
                    return Error("Thứ tự GT_THE_DEN không khớp với thứ tự của MA_THE_BHYT");
                }
            }
            if (model.GT_THE_TU != null && model.GT_THE_DEN < model.GT_THE_TU)
            {
                return Error("GT_THE_DEN không được nhỏ hơn GT_THE_TU");
            }

            return null;
        }
    }
}
