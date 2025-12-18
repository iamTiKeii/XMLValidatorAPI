using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML08
{
    public interface IXml8Rule
    {
        string Key { get; }

        ErrorDetails? Check(Xml8Model model,HoSoContext context);
    }
}
