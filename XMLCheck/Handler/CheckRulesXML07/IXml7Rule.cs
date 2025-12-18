using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML07
{
    public interface IXml7Rule
    {
        string Key { get; }

        ErrorDetails? Check(Xml7Model model,HoSoContext context);
    }
}
