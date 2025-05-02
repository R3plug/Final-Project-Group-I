/**
 * Password Controller
 * Handles logic for password-related pages and actions
 */
const Password =require('..models/Password');

/*
 * Displays passwords page
 */
exports.getPasswords = async (req, res) => {
    let list = await Password.find({ user: req.session.user });   
    try{    
    //finds all passwords from the current user
        res.render('/passwords/list', {
           title: 'Passwords',
           user: req.session.user,
           errors:[],
           passwordList: list,
        
    });
}catch(err){
    
}


};

