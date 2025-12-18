using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML11
{
    public abstract class Xml11RuleBase:IXml11Rule
    {
        public abstract string Key { get; }

        public abstract ErrorDetails? Check(Xml11Model model,HoSoContext context);

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
