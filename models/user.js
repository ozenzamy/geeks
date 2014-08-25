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

exports.user = mongoose.model('User', userSchema);
