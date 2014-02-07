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
using Profile.Web.Extensions;
using Profile.Web.Infrastructure;

namespace Profile.Web
{
    public class Bootstrapper:DefaultNancyBootstrapper
    {
        protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
        {
            

            container.Register<DbContext, ProfileDbContext>().AsSingleton();
            container.Register(typeof (IRepository<>), typeof (EfRepository<>)).AsSingleton();

            pipelines.BeforeRequest.AddItemToStartOfPipeline((ctx) =>
            {
                ctx.Authorize();
                return null;
            });
        }
    }
}