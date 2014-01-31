using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Core.Services
{
    public interface IAuthenticationService
    {
        IAuthenticationResponse SignIn(IAuthenticationRequest request);
        void SignOut();
        IAuthorizationResponse Authorize(IAuthorizationRequest request);

    }
}
