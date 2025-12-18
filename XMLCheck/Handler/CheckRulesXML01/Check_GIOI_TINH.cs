using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_GIOI_TINH:Xml1RuleBase
    {
        public override string Key => "GIOI_TINH";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {

            if (model.GIOI_TINH==null)
            {
                return Error("GIOI_TINH không được để trống");
            }
            var list_GIOI_TINH= new List<int>([1,2,3]);
            if (!list_GIOI_TINH.Any(x=>x==model.GIOI_TINH))
            {
                return Error("GIOI_TINH sai định dạng (Nam : 1, Nữ : 2, Chưa xác định : 3)");
            }

            return null;
        }
    }
}
