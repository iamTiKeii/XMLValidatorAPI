using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_T_VTYT : Xml1RuleBase
    {
        public override string Key => "T_VTYT";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            var hasXml3 = context.Xml3 != null && context.Xml3.Any();

            // 1. Không có VTYT → cho phép null hoặc 0
            if (!hasXml3)
            {
                if (model.T_VTYT.HasValue && model.T_VTYT.Value != 0)
                {
                    return Error("T_VTYT phải bằng 0 khi không có vật tư y tế");
                }

                return null;
            }

            // 2. Có VTYT → bắt buộc có T_VTYT
            if (!model.T_VTYT.HasValue)
            {
                return Error("T_VTYT không được để trống khi có vật tư y tế");
            }

            var value = model.T_VTYT.Value;

            // 3. Phải > 0
            if (value <= 0)
            {
                return Error("T_VTYT phải lớn hơn 0");
            }

            // 4. Kích thước tối đa (15)
            if (value.ToString("0.################").Length > 15)
            {
                return Error("T_VTYT quá kích thước tối đa (15)");
            }

            // 5. Tính tổng tiền vật tư từ XML3
            var totalVtyt = context.Xml3!
                .Where(x => x.THANH_TIEN_BV.HasValue)
                .Sum(x => x.THANH_TIEN_BV!.Value);

            // 6. Đối chiếu
            if (value != totalVtyt)
            {
                return Error(
                    $"T_VTYT ({value}) không bằng tổng tiền vật tư XML3 ({totalVtyt})"
                );
            }

            return null;
        }
    }

}
