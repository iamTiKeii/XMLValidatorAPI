using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML13
{
    public interface IXml13Rule
    {
        string Key { get; }

        ErrorDetails? Check(Xml13Model model,HoSoContext context);
    }
}
