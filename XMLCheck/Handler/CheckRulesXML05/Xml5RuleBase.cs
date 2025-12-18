using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML05
{
    public abstract class Xml5RuleBase:IXml5Rule
    {
        public abstract string Key { get; }

        public abstract ErrorDetails? Check(Xml5Model model,HoSoContext context);

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
