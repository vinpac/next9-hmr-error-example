import { send } from 'micro'
import microAuthTwitter from 'microauth-twitter'

const options = {
  consumerKey: '4gicbFDMjYqYBrDtUDsLsDLd9',
  consumerSecret: 'Xa3kCkyTJxblIkrW9a4IO9fdiNABs0iJnpmxuYNOovm8UaTPjL',
  callbackUrl: 'http://local.node/api/twitter/callback',
  path: '/api/twitter/auth',
}

const twitterAuth = microAuthTwitter(options)

const handler = async (_, res, auth) => {
  if (!auth) {
    return send(res, 404, 'Not Found')
  }

  if (auth.err) {
    // Error handler
    return send(res, 403, { message: auth.err.message })
  }

  // save something in database here

  return send(res, 200, `Hello ${auth.result.info.screen_name}`)
}

export default twitterAuth(handler)
