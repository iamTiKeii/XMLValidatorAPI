using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML10
{
    public interface IXml10Rule
    {
        string Key { get; }

        ErrorDetails? Check(Xml10Model model,HoSoContext context);
    }
}
