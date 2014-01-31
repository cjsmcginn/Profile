using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Profile.Core.Domain;

namespace Profile.Data.Entities
{
    public class AccountProfileMap : EntityTypeConfiguration<AccountProfile>
    {
        public AccountProfileMap()
        {
            HasRequired(ap => ap.Account);
            HasOptional(ap => ap.Country);
            Property(ap => ap.FirstName).HasMaxLength(50);
            Property(ap => ap.LastName).HasMaxLength(100);
            Property(ap => ap.City).HasMaxLength(100);

        }
    }
}
