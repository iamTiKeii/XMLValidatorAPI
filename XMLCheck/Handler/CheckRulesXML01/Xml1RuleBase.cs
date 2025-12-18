using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML1
{
    public abstract class Xml1RuleBase : IXml1Rule
    {
        public abstract string Key { get; }

        public abstract ErrorDetails? Check(Xml1Model model, HoSoContext context);


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
