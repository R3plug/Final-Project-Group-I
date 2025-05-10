/**
 * Password Controller
 * Handles logic for password-related pages and actions
 */
const Password =require('../models/Password');
const { validationResult } = require('express-validator');

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
}

exports.postPassword = async (req,res, next) =>{

      try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).render('password/list', {
            title: 'Password',
            errors: errors.array(),
            formData: {
              email: req.body.email,
              password:req.body.password,
              url:req.body.url,
              note: req.body.note,
            }
          });
        }
    
        // Create new user
        const password = new Password({
          username: req.body.email,
          password: req.body.password,
          note:req.body.note,
          site:req.body.url,
        });
    
        // Save user to database
        await password.save();
    
        // Redirect to login page with success message
        req.session.flashMessage = { 
          type: 'success', 
          text: 'Password Saved!' 
        };
        res.redirect('/password/list');
      } catch (error) {
        next(error);
      }
    };

