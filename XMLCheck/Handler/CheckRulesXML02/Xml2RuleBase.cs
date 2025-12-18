using XMLCheck.Handler.CheckRulesXML2;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML02
{
    public abstract class Xml2RuleBase:IXml2Rule
    {
        public abstract string Key { get; }

        public abstract ErrorDetails? Check(Xml2Model model, HoSoContext context);

        protected ErrorDetails Error(string message)
        {
            return new ErrorDetails
            {
                key = Key,
                message = message
            };
        }
    }
}
