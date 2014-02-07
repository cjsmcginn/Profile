using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Security;
using Nancy;
using Nancy.Bootstrapper;
using Nancy.TinyIoc;
using Profile.Core;
using Profile.Core.Domain;
using Profile.Data;
using Profile.Web.Infrastructure;

namespace Profile.Web
{
    public class Bootstrapper:DefaultNancyBootstrapper
    {
        protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
        {
            // your customization goes here
            container.Register<DbContext, ProfileDbContext>().AsSingleton();
            container.Register(typeof (IRepository<>), typeof (EfRepository<>)).AsSingleton();
            //speed things up
            //container.Resolve<DbContext>();
            
            pipelines.BeforeRequest.AddItemToStartOfPipeline((ctx) =>
            {
                if (!ctx.Request.Cookies.ContainsKey("PROFILE.AUTH"))
                    return ctx.Response;

                if (!String.IsNullOrEmpty(ctx.Request.Cookies["PROFILE.AUTH"]))
                {
                    var ticket = FormsAuthentication.Decrypt(ctx.Request.Cookies["PROFILE.AUTH"]);
                    if(ticket != null)
                        ctx.CurrentUser = new UserIdentity(ticket.UserData);
                }
                return ctx.Response;
            }); 
        }
    }
}