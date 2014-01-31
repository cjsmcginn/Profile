using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Profile.Core.Domain;

namespace Profile.Core.Services
{
    public interface IAccountService
    {
        Account GetAccount(string username, string password);
        Account GetAccountById(Guid id);
        ICreateAccountResponse CreateAccount(ICreateAccountRequest request);
        void SaveAccount(Account account);

        void DeleteAccount(Account account);

        IAccountVerificationResponse VerifyAccount(IAccountVerificationRequest request);

    }
}
