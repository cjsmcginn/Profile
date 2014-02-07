using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.ModelConfiguration.Conventions;
using Profile.Core.Domain;
using Profile.Data.Entities;


namespace Profile.Data
{
    public class ProfileDbContext : DbContext
    {
        public ProfileDbContext()
        {
        }
        public ProfileDbContext(string connectionStringName) : base(connectionStringName) { }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Country> Countries { get; set; }

        public DbSet<AccountProfile> Profiles { get; set; }
        public DbSet<StateProvince> StateProvinces { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new CountryMap());
            modelBuilder.Configurations.Add(new StateProvinceMap());
            modelBuilder.Configurations.Add(new AccountMap());
            modelBuilder.Configurations.Add(new AccountProfileMap());
            base.OnModelCreating(modelBuilder);
        }
    }
}
