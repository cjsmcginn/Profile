using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Core.Services
{
    public interface ICreateAccountRequest
    {
        bool Encrypt { get; set; }
        string Username { get; set; }
        string Password { get; set; }
        string ConfirmPassword { get; set; }
    }
}
