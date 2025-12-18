using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML04
{
    public static class Xml4RuleRunner
    {
        private static readonly List<IXml4Rule> _rules = new()
        {

        };
        public static List<ErrorDetails> Run(List<Xml4Model>? models,HoSoContext context)
        {
            var errors = new List<ErrorDetails>();

            if (models == null || models.Count == 0)
                return errors;

            foreach (var model in models)
            {
                foreach (var rule in _rules)
                {
                    var err = rule.Check(model, context);
                    if (err != null)
                        errors.Add(err);
                }
            }

            return errors;
        }
    }
}
