﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Core.Services
{
    public interface IAuthenticationResponse
    {
        string EncryptedTicket { get; }
    }
}
