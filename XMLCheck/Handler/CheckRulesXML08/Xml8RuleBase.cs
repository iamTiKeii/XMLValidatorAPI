using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML08
{
    public abstract class Xml8RuleBase:IXml8Rule
    {
        public abstract string Key { get; }

        public abstract ErrorDetails? Check(Xml8Model model,HoSoContext context);

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
