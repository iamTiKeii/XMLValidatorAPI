using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML15
{
    public abstract class Xml15RuleBase:IXml15Rule
    {
        public abstract string Key { get; }

        public abstract ErrorDetails? Check(Xml15Model model,HoSoContext context);

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
