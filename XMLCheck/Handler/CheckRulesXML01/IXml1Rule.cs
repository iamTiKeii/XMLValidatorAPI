using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML1
{
    public interface IXml1Rule
    {
        string Key { get; }

        /// <summary>
        /// Thực hiện check, trả về lỗi nếu có
        /// </summary>
        ErrorDetails? Check(Xml1Model model, HoSoContext context);
    }
}
