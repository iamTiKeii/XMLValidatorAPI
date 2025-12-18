using XMLCheck.Handler.CheckRulesXML08;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML10
{
    public static class Xml10RuleRunner
    {
        private static readonly List<IXml10Rule> _rules = new()
        {

        };
        public static List<ErrorDetails> Run(Xml10Model? model,HoSoContext context)
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
