using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_DANTOC:Xml1RuleBase
    {
        public override string Key => "MA_DANTOC";
        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {

            if (string.IsNullOrWhiteSpace(model.MA_DANTOC))
            {
                return Error($"{Key} không được rỗng");
            }
            if (!DictionaryCache.MaDanToc.ContainsKey(model.MA_DANTOC))
            {
                return Error($"{Key} không tồn tại trong danh mục");
            }
            return null;
        }
    }
}
