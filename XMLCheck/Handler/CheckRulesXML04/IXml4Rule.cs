using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML04
{
    public interface IXml4Rule
    {
        string Key { get; }

        ErrorDetails? Check(Xml4Model model,HoSoContext context);
    }
}
