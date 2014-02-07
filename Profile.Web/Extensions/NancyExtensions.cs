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
            //var profileConfig = System.Configuration.ConfigurationManager.GetSection("profileConfiguration") as ProfileConfiguration;
            if (!context.Request.Cookies.ContainsKey(profileConfiguration.AuthorizationCookieName)) return;
            if (!String.IsNullOrEmpty(context.Request.Cookies[profileConfiguration.AuthorizationCookieName]))
            {
                var ticket = FormsAuthentication.Decrypt(context.Request.Cookies[profileConfiguration.AuthorizationCookieName]);
                if(ticket != null && ticket.Expiration>System.DateTime.UtcNow)
                    context.CurrentUser = new UserIdentity(ticket.UserData);
            }
        }


        public static void SetAuthorizationCookie(this NancyContext context,string ticket)
        {
            var authTicket = FormsAuthentication.Decrypt(ticket);
            if (authTicket != null) context.Response.WithCookie(authTicket.Name, ticket, authTicket.Expiration);
        }

        public static void ResetAuthorizationCookie(this NancyContext context)
        {

        }
    }
}