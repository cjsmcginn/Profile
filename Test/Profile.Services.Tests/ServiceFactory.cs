using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ninject.Modules;
using Ninject;
using Profile.Core;
using Profile.Core.Domain;
using Profile.Core.Services;
using Profile.Data;

namespace Profile.Services.Tests
{
    public class ServiceFactory:NinjectModule
    {
       
        public override void Load()
        {
          
            Bind<DbContext>().To<ProfileDbContext>();
            Bind<IRepository<Account>>().To<EfRepository<Account>>();
            Bind<IAccountService>().To<AccountService>();
            Bind<IAuthenticationService>().To<AuthenticationService>();
        }
    }
}
