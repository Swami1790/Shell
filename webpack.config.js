const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  /* remotes: {
    "mfe1": "http://localhost:3000/remoteEntry.js",
  },
 */

 /*  remotes: {
    homepage: "http://localhost:4201/remoteEntry.js",
    courses: "http://localhost:4202/remoteEntry.js",
  },
 */
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "shared-core": {
      singleton: true,
      strictVersion: false,
      requiredVersion: false
    }
  },

});
