using System.Text.Json;
using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_KET_QUA_DTRI : Xml1RuleBase
    {
        public override string Key => "KET_QUA_DTRI";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            // 1. Không được để trống
            if (string.IsNullOrWhiteSpace(model.KET_QUA_DTRI))
            {
                return Error("KET_QUA_DTRI không được để trống");
            }

            var value = model.KET_QUA_DTRI.Trim();

            // 2. Quá kích thước tối đa (1)
            if (value.Length > 1)
            {
                return Error("KET_QUA_DTRI quá kích thước tối đa (1)");
            }

            // 3. Sai kiểu dữ liệu (phải là số)
            if (!int.TryParse(value, out _))
            {
                return Error("KET_QUA_DTRI sai kiểu dữ liệu (số)");
            }
            if (!DictionaryCache.KetQuaDTri.ContainsKey(model.KET_QUA_DTRI))
            {
                return Error("KET_QUA_DTRI không thuộc bảng mã kết quả điều trị");
            }

            return null;
        }
    }
}
