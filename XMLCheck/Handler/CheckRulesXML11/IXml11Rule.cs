using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML11
{
    public interface IXml11Rule
    {
        string Key { get; }

        ErrorDetails? Check(Xml11Model model,HoSoContext context);
    }
}
