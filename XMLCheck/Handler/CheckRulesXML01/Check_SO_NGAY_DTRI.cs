using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_SO_NGAY_DTRI : Xml1RuleBase
    {
        public override string Key => "SO_NGAY_DTRI";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            var raw = model.SO_NGAY_DTRI_RAW;

            // 1. Không được để trống
            if (string.IsNullOrWhiteSpace(raw))
            {
                return Error("SO_NGAY_DTRI không được để trống");
            }

            // 2. Sai kiểu dữ liệu
            if (!int.TryParse(raw, out var soNgay))
            {
                return Error("SO_NGAY_DTRI sai kiểu dữ liệu (số)");
            }

            // 3. MA_LOAI_KCB = 1,7,9 → SO_NGAY_DTRI phải = 0
            if (model.MA_LOAI_KCB is "1" or "7" or "9")
            {
                if (soNgay != 0)
                {
                    return Error("SO_NGAY_DTRI phải bằng 0 khi MA_LOAI_KCB ∈ (1,7,9)");
                }

                return null;
            }

            // 4. MA_LOAI_KCB = 2,3,4,6 → check công thức
            if (model.MA_LOAI_KCB is "2" or "3" or "4" or "6")
            {
                if (model.NGAY_VAO == null || model.NGAY_RA == null)
                {
                    return Error("Không đủ dữ liệu NGAY_VAO / NGAY_RA để tính SO_NGAY_DTRI");
                }

                var expected = (model.NGAY_RA.Value.Date - model.NGAY_VAO.Value.Date).Days + 1;

                if (expected < 0)
                {
                    return Error("NGAY_RA không hợp lệ so với NGAY_VAO");
                }

                if (soNgay != expected)
                {
                    return Error($"SO_NGAY_DTRI không đúng công thức: (NGAY_RA - NGAY_VAO) + 1 = {expected}");
                }
            }

            return null;
        }
    }
}
