using System;
using System.Collections;
using System.Text;
using System.Configuration;
using System.Xml;

namespace Profile.Core
{
    public class ProfileConfiguration : ConfigurationSection
    {



        [ConfigurationProperty("minimumPasswordLength", DefaultValue = "6", IsRequired = false)]
        public int MinimumPasswordLength
        {
            get { return (int) this["minimumPasswordLength"]; }
            set { this["minimumPasswordLength"] = value; }
        }
        [ConfigurationProperty("minimumUsernameLength", DefaultValue = "6", IsRequired = false)]
        public int MinimumUsernameLength
        {
            get { return (int)this["minimumUsernameLength"]; }
            set { this["minimumUsernameLength"] = value; }
        }
        //Max

        [ConfigurationProperty("maximumPasswordLength", DefaultValue = "12", IsRequired = false)]
        public int MaximumPasswordLength
        {
            get { return (int)this["maximumPasswordLength"]; }
            set { this["maximumPasswordLength"] = value; }
        }
        [ConfigurationProperty("maximumUsernameLength", DefaultValue = "12", IsRequired = false)]
        public int MaximumUsernameLength
        {
            get { return (int)this["maximumUsernameLength"]; }
            set { this["maximumUsernameLength"] = value; }
        }

        [ConfigurationProperty("encryptPassword", DefaultValue = "False", IsRequired = false)]
        public bool EncryptPassword
        {
            get { return (bool)this["encryptPassword"]; }
            set { this["encryptPassword"] = value; }
        }

        [ConfigurationProperty("encryptionKey", DefaultValue = "", IsRequired = false)]
        public string EncryptionKey
        {
            get { return (string)this["encryptionKey"]; }
            set { this["encryptionKey"] = value; }
        }

        [ConfigurationProperty("maximumRetryCount", DefaultValue = "10", IsRequired = false)]
        public int MaximumRetryCount
        {
            get { return (int)this["maximumRetryCount"]; }
            set { this["maximumRetryCount"] = value; }
        }
    }


}
