module.exports = {
  sessionSecret: process.env.SESSION_SECRET || 'secret',
  serverPort: process.env.PORT || 3000,
  facebookID: process.env.FB_ID || '626198337538519',
  facebookSecret: process.env.FB_SECRET || 'd971a4e38c255d4e985ae758cc714b28',
  databaseURL: process.env.DATABASE_URL || 'postgres://mdubie:ttam3199@mydbinstance.c26d9oujglql.us-west-1.rds.amazonaws.com:5432/newrumi',
};
