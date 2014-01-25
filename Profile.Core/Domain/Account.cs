using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Core.Domain
{
    public partial class Account:BaseEntity
    {
   
        public virtual string Username { get; set; }
        public virtual string Password { get; set; }
        public virtual string PasswordSalt { get; set; }
        public virtual bool Encrypted { get; set; }
        public virtual string Email { get; set; }
        public virtual DateTime CreatedOnUtc { get; set; }
        public virtual DateTime? LastUpdatedUtc { get; set; }
        public bool Active { get; set; }
       public AccountProfile AccountProfile { get; set; }
    

    }
}
