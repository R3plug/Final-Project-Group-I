/**
 * Password model
 * Defines the schema for passwords in our application
 */
const mongoose =  require('mongoose');
const bcrypt = require('crypto-js')

const PasswordSchema = new mongoose.Schema({
    user:{
        type:String,
        default:user.username
    },
    username:String,
    password:String,
    notes:String},
    {
        // Add virtual properties when converting to JSON
        toJSON: { virtuals: true },
        toObject: { virtuals: true }  
    } 
);


/*
PasswordSchema.pre('save', async function(next) {
  // Only hash the password if it's modified (or new)
  if (!this.isModified('password')) return next();
  
  try {
    const randomBytes = crypto.randomBytes(16);

    let hash = crypto
        .createHash('sha512')
        .update(this.password)
        .update(this.usernmae)
        .update(this.note)
        .digest('hex')
    
    
    next();
  } catch (error) {
    next(error);
  }
});
*/

module.exports = mongoose.model('Password', PasswordSchema);