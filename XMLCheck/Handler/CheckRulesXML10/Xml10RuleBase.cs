using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML10
{
    public abstract class Xml10RuleBase:IXml10Rule
    {
        public abstract string Key { get; }

        public abstract ErrorDetails? Check(Xml10Model model,HoSoContext context);

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
