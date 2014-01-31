using System;
using System.Data.Entity;
using System.Reflection;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Ninject;
using Profile.Core;
using Profile.Core.Domain;
using Profile.Core.Services;
using Profile.Data;
using Profile.Tests;

namespace Profile.Services.Tests
{
    [TestClass]
    public class AuthenticationServiceTests
    {
        private IAuthenticationService _target;
        [TestInitialize]
        public void Init()
        {
            IKernel kernel = new StandardKernel();
            kernel.Load(Assembly.GetExecutingAssembly());
            _target = kernel.Get<IAuthenticationService>();
        }

        [TestMethod]
        public void SignInTest()
        {
            var req = new AuthenticationRequest
            {
                Account = new Account {Username = "test"}
            };
           var actual =  _target.SignIn(req);
            Assert.IsFalse(String.IsNullOrEmpty(actual.EncryptedTicket));

        }
    }
}
