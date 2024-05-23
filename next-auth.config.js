// next-auth.config.js
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    providers: [
      {
        id: 'auth0',
        name: 'Auth0',
        type: 'oauth',
        version: '2.0',
        scope: 'openid profile email',
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
      },
    ],
  };
  