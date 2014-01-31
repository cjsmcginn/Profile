using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Core.Services
{
    public interface IAuthorizationResponse
    {
        string UserData { get; }
        bool IsAuthorized { get;}
        bool IsExpired { get;}
    }
}
