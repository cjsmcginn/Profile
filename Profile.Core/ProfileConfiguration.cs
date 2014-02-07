using System;
using System.Collections;
using System.Text;
using System.Configuration;
using System.Xml;

namespace Profile.Core
{
    public class ProfileConfiguration : ConfigurationSection
    {
        //defaults
        [ConfigurationProperty("authorizationCookieName", DefaultValue = "PROFILE.AUTH", IsRequired = false)]
        public string AuthorizationCookieName
        {
            get { return (string)this["authorizationCookieName"]; }
            set { this["authorizationCookieName"] = value; }
        }

        [ConfigurationProperty("expirationIntervalMinutes", DefaultValue = "0", IsRequired = false)]
        public double ExpirationIntervalMinutes
        {
            get { return (double) this["expirationIntervalMinutes"]; }
            set { this["expirationIntervalMinutes"] = value; }
        }
        [ConfigurationProperty("createPersistantCookie", DefaultValue = "False", IsRequired = false)]
        public bool CreatePersistantCookie
        {
            get
            {
                _createPersistantCookie = Math.Abs(ExpirationIntervalMinutes) < 0.00001;
                return _createPersistantCookie;
            }
            set { _createPersistantCookie = value; }
        }

        private bool _createPersistantCookie;
           [ConfigurationProperty("version", DefaultValue = "1", IsRequired = false)]
        public int Version
        {
            get { return (int) this["version"]; }
            set { this["version"] = value; }
        }
    }


}
