using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Nancy;
using Nancy.ModelBinding;
using Profile.Core.Services;
using Profile.Services;
using Profile.Web.Infrastructure;
using Profile.Web.Models;

namespace Profile.Web.Modules
{
    public class AccountModule:NancyModule, IAccountModule
    {
        private readonly IAccountService _accountService;
        private readonly IAuthenticationService _authenticationService;
        public AccountModule(IAccountService accountService,IAuthenticationService authenticationService)
        {
            _accountService = accountService;
            _authenticationService = authenticationService;
            Get["/account"] = p =>
            {
                var result = new AccountViewModel
                {
                    Account = new AccountViewModel.AccountModel(),
                    IsAuthenticated = this.Context.CurrentUser != null
                };
                if (this.Context.CurrentUser != null)
                {
                    result.Account.Username = this.Context.CurrentUser.UserName;
                }
              
                return result;
            };
            Post["/login"] = p =>
            {
                var model = this.Bind<AccountViewModel>();
                Login(model);
                return model;
            };
            Post["/account"] = p =>
            {
                var model = this.Bind<AccountViewModel>();
                try
                {
                    this.Response.Context.Response = new Response();
                    RegisterAccount(model);
                    this.Response.Context.Response.StatusCode = HttpStatusCode.OK;
                    return model;
                }
                catch (System.Exception ex)
                {
                    //Log or something
                    return HttpStatusCode.BadRequest;
                }
            };
            Post["/logout"] = p =>
            {
                Logout();
                return HttpStatusCode.OK;
            };
        }
        public void RegisterAccount(AccountViewModel model)
        {
            var request = new CreateAccountRequest
            {
                ConfirmPassword = model.Account.PasswordConfirm,
                Password = model.Account.Password,
                Username = model.Account.Username,
                RecoveryEmailAddress=model.Account.EmailAddress,
                RecoveryEmailAddressConfirm=model.Account.EmailAddressConfirm
                
            };
            var response = _accountService.CreateAccount(request);
            if (!response.Success)
            {
                if (response.UsernameExists)
                    model.Errors.Add("An account with this username already exists");
                if (response.InavlidUsername)
                    model.Errors.Add("Invalid Username");
                if (response.InvalidPassword)
                    model.Errors.Add("Invalid Password");
                if (response.InvalidRecoveryEmailAddress)
                    model.Errors.Add("Invalid Email Address");
            }
            else
            {
                SetUser(request.Username);
            }
            
        }


        public void Login(AccountViewModel model)
        {
            var request = new AccountVerificationRequest
            {
                Password = model.Account.Password,
                Username = model.Account.Username
            };

            var response = _accountService.VerifyAccount(request);

            if (!response.Success)
            {
                if (response.AccountInactive)
                    model.Errors.Add("Account is Inactive");
                if (response.AccountLockedOut)
                    model.Errors.Add("Account is Locked Out");
                if (response.InvalidPassword)
                    model.Errors.Add("Invalid Password");
                if (response.UsernameDoesNotExist)
                    model.Errors.Add("Invalid Username or Password");
            }
            else
            {
                SetUser(request.Username);
                model.IsAuthenticated = true;
            }

         
        }

        void SetUser(string username)
        {
            //facilitate testing, should never be null in hosted environment 
            if (this.Context != null)
            {
                var request = new AuthenticationRequest
                {
                    Name = "PROFILE.AUTH",
                    Expiration = System.DateTime.UtcNow.AddDays(1),
                    CreatePersistantCookie = true,
                    UserData = username
                };
                var response = _authenticationService.SignIn(request);
                var ticket = response.EncryptedTicket;
                this.After += ctx => this.Context.Response.WithCookie(request.Name, response.EncryptedTicket,request.Expiration);
               
            }
        }


        public void Logout()
        {
            this.After += ctx => this.Context.Response.WithCookie("PROFILE.AUTH", "", System.DateTime.MinValue);
        }
    }
}