const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?
  client_id=${process.env.GMAIL_CLIENT_ID}&
  redirect_uri=${process.env.REDIRECT_URI}&
  response_type=code&
  scope=https://www.googleapis.com/auth/gmail.readonly&
  access_type=offline&
  prompt=consent`;