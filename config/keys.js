// Key.js

if(process.env.NODE_ENV === 'production') {
  // We are in the production - return the prod set of keys
  module.exports = require('./prod');
} else{
  // We are in dev - return dev keys
  module.exports = require('./dev');
}




