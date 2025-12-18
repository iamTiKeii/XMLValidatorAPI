using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML09
{
    public interface IXml9Rule
    {
        string Key { get; }

        ErrorDetails? Check(Xml9Model model,HoSoContext context);
    }
}
