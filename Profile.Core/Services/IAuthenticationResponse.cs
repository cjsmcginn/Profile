using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Core.Services
{
    public interface IAuthenticationResponse
    {
        bool UsernameDoesNotExist { get; set; }
        bool InvalidPassword { get; set; }
        bool AccountLockedOut { get; set; }
        bool AccountInactive { get; set; }
        bool Success { get; set; }
    }
}
