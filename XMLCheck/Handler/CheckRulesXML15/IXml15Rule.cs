using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML15
{
    public interface IXml15Rule
    {
        string Key { get; }

        ErrorDetails? Check(Xml15Model model,HoSoContext context);
    }
}
