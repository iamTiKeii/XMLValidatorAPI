using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML05
{
    public static class Xml5RuleRunner
    {
        private static readonly List<IXml5Rule> _rules = new()
        {

        };
        public static List<ErrorDetails> Run(List<Xml5Model>? models,HoSoContext context)
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
