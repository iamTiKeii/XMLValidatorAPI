using System.Text.RegularExpressions;
using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML01
{
    public class Check_MA_THE_BHYT : Xml1RuleBase
    {
        public override string Key => "MA_THE_BHYT";

        public override ErrorDetails? Check(Xml1Model model, HoSoContext context)
        {
            if (string.IsNullOrWhiteSpace(model.MA_THE_BHYT))
            {
                return Error($"{Key} không được để trống");
            }

            // 1. Tách nhiều thẻ bằng ;
            var cards = model.MA_THE_BHYT
                .Split(';', StringSplitOptions.RemoveEmptyEntries)
                .Select(x => x.Trim())
                .ToList();

            // Rule: phải dùng dấu ;
            if (cards.Count > 1 && !model.MA_THE_BHYT.Contains(";"))
            {
                return Error($"Các {Key} phải cách nhau bằng dấu ';'");
            }

            foreach (var card in cards)
            {
                // 2. Độ dài tối thiểu
                if (card.Length < 15)
                {
                    return Error($"{Key} không đúng định dạng: {card}");
                }

                // 3. Ký tự 1–2: mã đối tượng BHYT
                var doiTuong = card.Substring(0, 2);
                if (!DictionaryCache.DoiTuongBHYT.ContainsKey(doiTuong))
                {
                    return Error($"MA_THE_BHYT có mã đối tượng không hợp lệ: {doiTuong}");
                }

                // 4. Ký tự 3: quyền lợi (1–5)
                var quyenLoi = card[2];
                if (quyenLoi < '1' || quyenLoi > '5')
                {
                    return Error("Ký tự thứ 3 của MA_THE_BHYT phải là số từ 1 đến 5");
                }

                // 6. 10 ký tự cuối phải là số
                var soCuoi = card.Substring(card.Length - 10, 10);
                if (!Regex.IsMatch(soCuoi, @"^\d{10}$"))
                {
                    return Error("10 ký tự cuối của MA_THE_BHYT phải là số");
                }
            }

            return null;
        }
    }
}
