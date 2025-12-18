using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_T_TONGCHI_BV : Xml1RuleBase
    {
        public override string Key => "T_TONGCHI_BV";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            var hasXml2 = context.Xml2 != null && context.Xml2.Any();
            var hasXml3 = context.Xml3 != null && context.Xml3.Any();

            // Không có chi phí → cho phép null hoặc 0
            if (!hasXml2 && !hasXml3)
            {
                if (model.T_TONGCHI_BV.HasValue && model.T_TONGCHI_BV.Value != 0)
                {
                    return Error("T_TONGCHI_BV phải bằng 0 khi không có chi phí");
                }

                return null;
            }

            // Có chi phí → bắt buộc có T_TONGCHI_BV
            if (!model.T_TONGCHI_BV.HasValue)
            {
                return Error("T_TONGCHI_BV không đúng định dạng");
            }

            var value = model.T_TONGCHI_BV.Value;

            // Không được nhỏ hơn 0
            if (value < 0)
            {
                return Error("T_TONGCHI_BV không được nhỏ hơn 0");
            }

            // Quá kích thước tối đa (15)
            if (value.ToString("0.################").Length > 15)
            {
                return Error("T_TONGCHI_BV quá kích thước tối đa (15)");
            }

            // Tính tổng XML2
            decimal totalXml2 = hasXml2
                ? context.Xml2!
                    .Where(x => x.THANH_TIEN_BV.HasValue)
                    .Sum(x => x.THANH_TIEN_BV!.Value)
                : 0;

            // Tính tổng XML3
            decimal totalXml3 = hasXml3
                ? context.Xml3!
                    .Where(x => x.THANH_TIEN_BV.HasValue)
                    .Sum(x => x.THANH_TIEN_BV!.Value)
                : 0;

            var expectedTotal = totalXml2 + totalXml3;

            // Đối chiếu
            if (value != expectedTotal)
            {
                return Error(
                    $"T_TONGCHI_BV ({value}) lệch với tổng XML2 + XML3 ({expectedTotal})"
                );
            }

            return null;
        }
    }

}
