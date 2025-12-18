using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML2
{
    public interface IXml2Rule
    {
        string Key { get; }

        ErrorDetails? Check(Xml2Model model, HoSoContext context);
    }
}
