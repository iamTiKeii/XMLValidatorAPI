using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System.Text.Json;
using System.Threading.Tasks;

namespace XMLCheck.Middleware
{
    public class ApiKeyMiddleware
    {
        private readonly RequestDelegate _next;
        private const string APIKEYHEADER = "X-API-Key";

        public ApiKeyMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context, IConfiguration configuration)
        {
            var path = context.Request.Path.Value;

            // Bỏ qua kiểm tra cho các route /swagger và /health
            if (path != null && (path.StartsWith("/swagger", System.StringComparison.OrdinalIgnoreCase) || 
                                 path.StartsWith("/health", System.StringComparison.OrdinalIgnoreCase)))
            {
                await _next(context);
                return;
            }

            if (!context.Request.Headers.TryGetValue(APIKEYHEADER, out var extractedApiKey))
            {
                context.Response.StatusCode = 401;
                context.Response.ContentType = "application/json";
                var response = new { success = false, message = "Invalid API Key" };
                await context.Response.WriteAsync(JsonSerializer.Serialize(response));
                return;
            }

            var apiKey = configuration.GetValue<string>("ApiSettings:ApiKey");

            if (string.IsNullOrEmpty(apiKey) || !apiKey.Equals(extractedApiKey))
            {
                context.Response.StatusCode = 401;
                context.Response.ContentType = "application/json";
                var response = new { success = false, message = "Invalid API Key" };
                await context.Response.WriteAsync(JsonSerializer.Serialize(response));
                return;
            }

            await _next(context);
        }
    }
}
