/**
 * Password Controller
 * Handles logic for password-related pages and actions
 */
const Password =require('../models/Password');

/*
 * Displays passwords page
 */
exports.getPasswords = async (req, res) => {
    let list = await Password.find({ user: req.session.user.username });   
      
    //finds all passwords from the current user
        res.render('passwords/list', {
           title: 'Passwords',
           user: req.session.user,
           passwordList:list,
           
        
    });

exports.putPassword = async (req,res, newPass) =>{
    Password.insertOne(newPass);

    res.render('passwords/list', {
        title: 'Passwords',
        user: req.session.user,
        passwordList:list,

}

    



};

