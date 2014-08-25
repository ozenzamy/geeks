var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
 firstname: String,
 lastname: String,
 birthday: String,
 sexe: String,
 username: String,
 email: String,
 password: String,
 active: Number, 
});

module.exports = mongoose.model('User', userSchema);
