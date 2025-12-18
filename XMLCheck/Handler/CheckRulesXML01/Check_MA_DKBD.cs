using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_DKBD : Xml1RuleBase
    {
        public override string Key => "MA_DKBD";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            // 1. Không được để trống
            if (string.IsNullOrWhiteSpace(model.MA_DKBD))
            {
                return Error("MA_DKBD không được để trống");
            }

            // Tách MA_DKBD
            var dkbdList = model.MA_DKBD
                .Split(';', StringSplitOptions.RemoveEmptyEntries)
                .Select(x => x.Trim())
                .ToList();

            // Rule: phải dùng dấu ;
            if (dkbdList.Count > 1 && !model.MA_DKBD.Contains(";"))
            {
                return Error("Các MA_DKBD phải cách nhau bằng dấu ';'");
            }

            // Nếu MA_THE_BHYT rỗng → không so thứ tự
            if (string.IsNullOrWhiteSpace(model.MA_THE_BHYT))
            {
                return null;
            }

            // Tách MA_THE_BHYT
            var bhytList = model.MA_THE_BHYT
                .Split(';', StringSplitOptions.RemoveEmptyEntries)
                .Select(x => x.Trim())
                .ToList();

            // 2. Số lượng phải khớp
            if (dkbdList.Count != bhytList.Count)
            {
                return Error("Thứ tự MA_DKBD không khớp với thứ tự của MA_THE_BHYT");
            }

            return null;
        }
    }
}
