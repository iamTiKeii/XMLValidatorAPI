using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

public class Check_T_THUOC : Xml1RuleBase
{
    public override string Key => "T_THUOC";

    public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
    {
        var hasXml2 = context.Xml2 != null && context.Xml2.Any();

        // 1. Không có thuốc → bỏ qua rule
        if (!hasXml2)
        {
            // cho phép T_THUOC = null hoặc = 0
            if (model.T_THUOC.HasValue && model.T_THUOC.Value != 0)
            {
                return Error("T_THUOC phải bằng 0 khi không có thuốc");
            }

            return null;
        }

        // 2. Có thuốc → T_THUOC bắt buộc
        if (!model.T_THUOC.HasValue)
        {
            return Error("T_THUOC không được để trống khi có thuốc");
        }

        var value = model.T_THUOC.Value;

        // 3. Không âm
        if (value < 0)
        {
            return Error("T_THUOC không được nhỏ hơn 0");
        }

        // 4. Kích thước
        if (value.ToString("0.################").Length > 15)
        {
            return Error("T_THUOC quá kích thước tối đa (15)");
        }

        // 5. Tính tổng thuốc từ XML2
        var totalThuoc = context.Xml2!
            .Where(x => x.THANH_TIEN_BV.HasValue)
            .Sum(x => x.THANH_TIEN_BV!.Value);

        // 6. Đối chiếu
        if (value != totalThuoc)
        {
            return Error(
                $"T_THUOC ({value}) không bằng tổng tiền thuốc XML2 ({totalThuoc})"
            );
        }

        return null;
    }
}
