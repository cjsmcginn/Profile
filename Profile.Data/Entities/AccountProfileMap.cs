using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Profile.Core.Domain;

namespace Profile.Data.Entities
{
    public class AccountProfileMap:EntityTypeConfiguration<AccountProfile>
    {
        public AccountProfileMap()
        {
            this.HasRequired(ap => ap.Account);
            this.HasOptional(ap => ap.Country);
        }
    }
}
