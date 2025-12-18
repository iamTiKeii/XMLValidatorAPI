using System.Text.Json;
using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_QUOCTICH : Xml1RuleBase
    {
        public override string Key => "MA_QUOCTICH";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {

            if (string.IsNullOrWhiteSpace(model.MA_QUOCTICH))
            {
                return Error($"{Key} không được rỗng");
            }

            if (model.MA_QUOCTICH.Length > 3)
            {
                return Error($"{Key} quá kích thước tối đa (3 ký tự)");
            }
            if (!DictionaryCache.MaQuocTich.ContainsKey(model.MA_QUOCTICH))
            {
                return Error($"{Key} không tồn tại trong danh mục");
            }
            return null;
        }
    }
}
