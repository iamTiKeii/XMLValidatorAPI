using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML04
{
    public abstract class Xml4RuleBase : IXml4Rule
    {
        public abstract string Key { get; }

        public abstract ErrorDetails? Check(Xml4Model model,HoSoContext context);

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
