using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Profile.Core.Domain;
using System.Data.Entity.ModelConfiguration;
namespace Profile.Data.Entities
{
    public class AccountMap:EntityTypeConfiguration<Account>
    {
        public AccountMap()
        {
            Property(a => a.CreatedOnUtc).IsRequired();
            Property(a => a.RecoveryEmailAddress).IsRequired().HasMaxLength(200);
            Property(a => a.Password).IsRequired().HasMaxLength(50);
            Property(a => a.Username).IsRequired().HasMaxLength(100);
            Property(a => a.PasswordSalt).HasMaxLength(100);
        }
    }
}
