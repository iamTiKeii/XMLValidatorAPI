using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_NGAY_SINH:Xml1RuleBase
    {
        public override string Key => "NGAY_SINH";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {

            // 1. Không được để trống
            if (model.NGAY_SINH == null)
            {
                return Error("NGAY_SINH không được để trống");
            }

            var ngaySinh = model.NGAY_SINH.Value;
            var now = DateTime.Now;

            // 2. Không được lớn hơn ngày hiện tại
            if (ngaySinh > now)
            {
                return Error("NGAY_SINH không được lớn hơn ngày hiện tại");
            }

            // 3. Không được nhỏ hơn 140 năm
            if (ngaySinh < now.AddYears(-140))
            {
                return Error("NGAY_SINH không được nhỏ hơn 140 năm so với thời gian hiện tại");
            }

            /*
             * ⚠️ Các rule sau KHÔNG thể kiểm tra ở tầng này:
             * - Không đúng định dạng yyyyMMddHHmmss
             * - Sai định dạng
             *
             * Vì:
             * NGAY_SINH đã được parse sang DateTime? ở Parser
             * Nếu sai format → đã thành null → rơi vào rule (1)
             */

            return null;
        }
    }
}
