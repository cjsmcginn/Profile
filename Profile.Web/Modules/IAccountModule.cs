using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Nancy;
using Profile.Web.Models;

namespace Profile.Web.Modules
{
    public interface IAccountModule
    {
        void RegisterAccount(AccountViewModel model);
        void Login(AccountViewModel model);

        void Logout();
    }
}
