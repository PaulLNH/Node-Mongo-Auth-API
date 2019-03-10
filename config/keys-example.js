module.exports = {
  /** STEPS TO SETUP mongoURI:
  * @One    Create a keys.js file in the /config folder
  * @Two    Sign up on mLab: https://mlab.com/signup/
  * @Three  Create a MongoDB.Atlas cluster (This uses AWS)
  * @Four   Create a User for the database (Not the same as mLab acct)
  * @Five   Click on 'CONNECT' > 'Connect Your Application' & copy URI link
  * @Six    Paste here, replace <password> with your actual password
  * @NOTE   Although keys.js is in the .gitignore, be careful with your passwords
  */
  mongoURI: 'mongodb://[username:password@]host1[:port1][,...hostN[:portN]]][/[database][?options]]',
  // Secret can be whatever string you'd like specific to your application,
  // Or you can generate a UUID for each account to distribute API keys
  secretOrKey: 'secret'
}