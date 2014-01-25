using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Profile.Core.Domain;

namespace Profile.Data.Entities
{
    public class StateProvinceMap:EntityTypeConfiguration<StateProvince>
    {
        public StateProvinceMap()
        {
            this.HasOptional(sp => sp.Country).WithMany(c => c.StateProvinces);
        }
    }
}
