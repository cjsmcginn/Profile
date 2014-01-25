using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Core.Domain
{
    public class AccountProfile:BaseEntity
    {
        public virtual string FirstName { get; set; }
        public virtual string LastName { get; set; }

        public virtual string City { get; set; }
        public virtual int CountryId { get; set; }
        public virtual int StateProvinceId { get; set; }
        public virtual StateProvince StateProvince { get; set; }
        public virtual Country Country { get; set; }
        public virtual Account Account { get; set; }

    }
}
