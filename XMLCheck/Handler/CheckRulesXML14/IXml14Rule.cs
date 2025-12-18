using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML14
{
    public interface IXml14Rule
    {
        string Key { get; }

        ErrorDetails? Check(Xml14Model model,HoSoContext context);
    }
}
