import auth from './auth'

const oauthConfig = {
  clientId: process.env.GITHUB_CLIENT_ID || auth.AppId,
  clientSecret: process.env.GITHUB_CLIENT_SECRET || auth.AppKey,
  authorizationUrl: 'http://github.com/login/oauth/authorize',
  tokenUrl: 'https://github.com/login/oauth/access_token',
  useBasicAuthorizationHeader: false,
  // don't touch me
  redirectUri: 'http://localhost'
}

export default {
  oauthConfig
}
