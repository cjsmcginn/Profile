using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Nancy;
using Nancy.ModelBinding;
using Profile.Core.Services;
using Profile.Services;

namespace Profile.Web.Modules
{
    public class HomeModule : NancyModule
    {

        public HomeModule()
        {
            Get["/"] = p => { return "index.html"; };
        }

    }
}