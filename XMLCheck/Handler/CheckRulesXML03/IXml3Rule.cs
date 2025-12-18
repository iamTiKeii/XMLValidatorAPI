using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML03
{
    public interface IXml3Rule
    {
        string Key { get; }

        ErrorDetails? Check(Xml3Model model,HoSoContext context);
    }
}
