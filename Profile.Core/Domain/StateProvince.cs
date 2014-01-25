using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Core.Domain
{
    public class StateProvince:BaseEntity
    {
        public string Name { get; set; }
        public string Abbereviation { get; set; }
        public int CountryId { get; set; }

        public Country Country { get; set; }
    }
}
