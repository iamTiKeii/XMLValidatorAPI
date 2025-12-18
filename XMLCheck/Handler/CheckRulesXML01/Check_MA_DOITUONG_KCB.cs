using System.Text.Json;
using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_DOITUONG_KCB : Xml1RuleBase
    {
        public override string Key => "MA_DOITUONG_KCB";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            // 1. Không được để trống
            if (string.IsNullOrWhiteSpace(model.MA_DOITUONG_KCB))
            {
                return Error("MA_DOITUONG_KCB không được để trống");
            }

            if (!DictionaryCache.DoiTuongKCB.ContainsKey(model.MA_DOITUONG_KCB))
            {
                return Error($"{Key} không tồn tại trong danh mục");
            }
            return null;
        }
    }
}
