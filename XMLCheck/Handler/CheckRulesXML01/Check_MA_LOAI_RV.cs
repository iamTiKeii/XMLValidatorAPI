using System.Text.Json;
using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_LOAI_RV : Xml1RuleBase
    {
        public override string Key => "MA_LOAI_RV";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            // 1. Không được để trống
            if (string.IsNullOrWhiteSpace(model.MA_LOAI_RV))
            {
                return Error("MA_LOAI_RV không được để trống");
            }

            var value = model.MA_LOAI_RV.Trim();

            // 2. Quá kích thước tối đa (1)
            if (value.Length > 1)
            {
                return Error("MA_LOAI_RV quá kích thước tối đa");
            }

            // 3. Sai kiểu dữ liệu (số)
            if (!int.TryParse(value, out _))
            {
                return Error("MA_LOAI_RV sai kiểu dữ liệu (số)");
            }

            if (!DictionaryCache.MaLoaiRV.ContainsKey(model.MA_LOAI_RV))
            {
                return Error("MA_LOAI_RV không thuộc bảng mã loại ra viện");
            }

            return null;
        }
    }
}
