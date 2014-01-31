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
    public class AccountServiceTests
    {
        private IAccountService _target;

        [ClassInitialize]
        public static void ClassInitialization(TestContext context)
        {
            var dbs = new ProfileDbContextInitializer();
            Database.SetInitializer(dbs);
        }
        [TestInitialize]
        public void Init()
        {
            IKernel kernel = new StandardKernel();
            kernel.Load(Assembly.GetExecutingAssembly());
            _target = kernel.Get<IAccountService>();
        }


        Account GetAccountById(Guid id)
        {
            var result = _target.GetAccountById(id);
            Assert.IsInstanceOfType(result, typeof(Account));
            return result;
        }
        [TestMethod]
        public void CreateAccountTest()
        {
            //Self asserting
            var pw = TestDataHelper.GetRandomString(8);
            var un = TestDataHelper.GetRandomString(10);
            var req = new CreateAccountRequest
            {
                ConfirmPassword = pw,
                Password = pw,
                Encrypt = true,
                Username = un

            };

            var actual = _target.CreateAccount(req);
            Assert.IsTrue(actual.Success);

        }

        [TestMethod]
        public void VerifyAccountTest()
        {
            var pw = TestDataHelper.GetRandomString(8);
            var un = TestDataHelper.GetRandomString(10);
            var req = new CreateAccountRequest
            {
                ConfirmPassword = pw,
                Password = pw,
                Encrypt = true,
                Username = un

            };

            _target.CreateAccount(req);

            var accountVerificationRequest = new AccountVerificationRequest
            {
                Password = req.Password,
                Username = req.Username
            };
            var actual = _target.VerifyAccount(accountVerificationRequest);
            Assert.IsTrue(actual.Success);
        }
        [TestMethod]
        public void VerifyAccountTest_WhenInvalidPassword_CheckLockedOut()
        {
            var pw = TestDataHelper.GetRandomString(8);
            var un = TestDataHelper.GetRandomString(10);
            var req = new CreateAccountRequest
            {
                ConfirmPassword = pw,
                Password = pw,
                Encrypt = true,
                Username = un

            };
            _target.CreateAccount(req);
            var authenticateRequest = new AccountVerificationRequest
            {
                Password = "invalid password",
                Username = req.Username
            };
            for (var i = 0; i < 10; i++)
            {
                var actual = _target.VerifyAccount(authenticateRequest);
                Assert.IsFalse(actual.Success,"Success should be false");
                Assert.IsTrue(actual.InvalidPassword,"Invalid password should be true");
                if (i == 9)
                    Assert.IsTrue(actual.AccountLockedOut, "Locked out should be true");
                else
                    Assert.IsFalse(actual.AccountLockedOut, "Locked out should be false");
            }
        }
    }
}
