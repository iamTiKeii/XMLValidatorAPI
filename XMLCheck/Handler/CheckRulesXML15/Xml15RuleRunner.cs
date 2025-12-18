using XMLCheck.Handler.CheckRulesXML04;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML15
{
    public static class Xml15RuleRunner
    {
        private static readonly List<IXml15Rule> _rules = new()
        {

        };
        public static List<ErrorDetails> Run(List<Xml15Model>? models,HoSoContext context)
        {
            var errors = new List<ErrorDetails>();

            if (models == null || models.Count == 0)
                return errors;

            foreach (var model in models)
            {
                foreach (var rule in _rules)
                {
                    var err = rule.Check(model,context);
                    if (err != null)
                        errors.Add(err);
                }
            }

            return errors;
        }
    }
}
