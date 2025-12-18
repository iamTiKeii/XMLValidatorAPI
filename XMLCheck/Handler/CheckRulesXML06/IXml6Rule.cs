using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML06
{
    public interface IXml6Rule
    {
        string Key { get; }

        ErrorDetails? Check(Xml6Model model,HoSoContext context);
    }
}
