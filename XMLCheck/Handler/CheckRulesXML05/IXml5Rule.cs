using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML05
{
    public interface IXml5Rule
    {
        string Key { get; }

        ErrorDetails? Check(Xml5Model model,HoSoContext context);
    }
}
