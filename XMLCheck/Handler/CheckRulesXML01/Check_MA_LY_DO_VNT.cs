using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_LY_DO_VNT : Xml1RuleBase
    {
        public override string Key => "MA_LY_DO_VNT";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            if (model.MA_LOAI_KCB == "03" && string.IsNullOrWhiteSpace(model.MA_LY_DO_VNT))
            {
                return Error("MA_LY_DO_VNT không được để trống khi MA_LOAI_KCB=03");
            }
            return null;
        }
    }
}
