// MongoDB User model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defines what a newUser should look like in our MongoDB
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Example newUser in the 'users' collection:
/** 
{
  "_id": {
    "$oid":"5c848e7f5437d726ec3028ca"
  },
  "name":"Paul Laird",
  "email":"paul@laird.codes",
  "password":"$2a$10$eNzmR1ac7qFrJcFaACX4jetLnEpSqeszIay48rafn3Bh80Fn7p6fK",
  "avatar":"//www.gravatar.com/avatar/9519868eedc73ebb1f2fdc6d87271c03?s=200&r=pg&d=mm",
  "date":{
    "$date":{
      "$numberLong":"1552191103463"
    }
  },
  "__v":{
    "$numberInt":"0"
  }
}
*/

// User is a parameter that allows us to create a 
// new MongoDB document based off of the object passed in.
// It creates the 'users' collection, and adds a newUser based 
// off this UserSchema
module.exports = User = mongoose.model('users', UserSchema);