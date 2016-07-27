module.exports = {
  sessionSecret: process.env.SESSION_SECRET || 'secret',
  serverPort: process.env.PORT || 3000,
  databaseURL: process.env.DATABASE_URL || 'postgres://mdubie:ttam3199@mydbinstance.c26d9oujglql.us-west-1.rds.amazonaws.com:5432/newrumi',
};

console.log('process.env.DATABASE_URL ' , process.env.DATABASE_URL);