using System;
using System.Data.Entity;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Profile.Core;
using Profile.Core.Domain;
using Profile.Tests;


namespace Profile.Data.Tests
{
    [TestClass]
    public class ProfileDbContextTests
    {
        [TestMethod]
        public void SaveAccountTest()
        {

            var dbs = new ProfileDbContextInitializer();
            Database.SetInitializer(dbs);
            var ctx = new ProfileDbContext();
            var repo = new EfRepository<Account>(ctx);
            Assert.IsInstanceOfType(repo, typeof (IRepository<Account>));
            Assert.IsFalse(repo.Table.Any());
            var x = TestDataHelper.GetTestAccount();
            x.AccountProfile = TestDataHelper.GetTestAccountProfile();
            var sp = ctx.StateProvinces.ToList().Last();
            x.AccountProfile.Country = sp.Country;
            x.AccountProfile.StateProvince = sp;
            repo.Insert(x);
       
            Assert.IsTrue(repo.Table.Any());

            var act2 = TestDataHelper.GetTestAccount();
            repo.Insert(act2);
                
            ctx.SaveChanges();

        }


    }
}
