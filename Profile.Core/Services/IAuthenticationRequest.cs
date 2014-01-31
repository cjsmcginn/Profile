using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Profile.Core.Domain;

namespace Profile.Core.Services
{
    public interface IAuthenticationRequest
    {
        bool CreatePersistantCookie { get; set; }
        Account Account { get; set; }
        string Name { get; set; }
        DateTime Expiration { get; set; }
        string UserData { get; set; }

        int Version { get; set; }
    }
}
