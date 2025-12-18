using XMLCheck.Handler.CheckRulesXML13;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML14
{
    public static class Xml14RuleRunner
    {
        private static readonly List<IXml14Rule> _rules = new()
        {

        };
        public static List<ErrorDetails> Run(Xml14Model? model,HoSoContext context)
        {
            var errors = new List<ErrorDetails>();

            foreach (var rule in _rules)
            {
                var err = rule.Check(model,context);
                if (err != null)
                    errors.Add(err);
            }

            return errors;
        }
    }
}
