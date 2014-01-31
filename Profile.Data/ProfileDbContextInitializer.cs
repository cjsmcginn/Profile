using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Profile.Core.Domain;

namespace Profile.Data
{
    public class ProfileDbContextInitializer:DropCreateDatabaseAlways<ProfileDbContext>
    {
        protected override void Seed(ProfileDbContext context)
        {
     
            var countries = new List<Country>
            {
                new Country
                {
                    Id = Guid.NewGuid(),
                    Name = "United States",
                    ThreeLetterIsoCode = "USA",
                    TwoLetterIsoCode = "US",
                    StateProvinces = new List<StateProvince>
                    {
                        new StateProvince {Name = "Alabama", Id = Guid.NewGuid(), Abbereviation = "AB"},
                        new StateProvince {Name = "Alaska", Id = Guid.NewGuid(), Abbereviation = "AL"},
                    }
                },
                new Country
                {
                    Id = Guid.NewGuid(),
                    Name = "Canada",
                    ThreeLetterIsoCode = "CAN",
                    TwoLetterIsoCode = "CA",
                    StateProvinces = new List<StateProvince>
                    {
                        new StateProvince {Name = "Alberta", Id = Guid.NewGuid(), Abbereviation = "AB"},
                        new StateProvince {Name = "British Columbia", Id = Guid.NewGuid(), Abbereviation = "BC"},
                    }
                }
            };
  
            countries.ForEach(x => context.Countries.Add(x));
            base.Seed(context);
        }
    }
}
