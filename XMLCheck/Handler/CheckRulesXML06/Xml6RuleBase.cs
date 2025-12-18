using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML06
{
    public abstract class Xml6RuleBase:IXml6Rule
    {
        public abstract string Key { get; }

        public abstract ErrorDetails? Check(Xml6Model model,HoSoContext context);

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
