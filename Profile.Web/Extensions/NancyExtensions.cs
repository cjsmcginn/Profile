using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using Nancy;
using Profile.Core;
using Profile.Core.Services;
using Profile.Services;
using Profile.Web.Infrastructure;

namespace Profile.Web.Extensions
{
    public static class NancyExtensions
    {
        static ProfileConfiguration profileConfiguration = System.Configuration.ConfigurationManager.GetSection("profileConfiguration") as ProfileConfiguration;
        public static void Authorize(this NancyContext context)
        {
            if (!context.Request.Cookies.ContainsKey(FormsAuthentication.FormsCookieName)) return;
            var ticket = FormsAuthentication.Decrypt(context.Request.Cookies[FormsAuthentication.FormsCookieName]);
            if (ticket != null && ticket.Expiration > System.DateTime.UtcNow)
                context.CurrentUser = new UserIdentity(ticket.Name);
        }

    }
}