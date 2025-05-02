/**
 * Password routes
 * Handles protected routes that require authentication
 */
const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/auth');

// Controller imports
const passwordController = require('../controllers/passwordController');

// All routes in this file require authentication
router.use(isAuthenticated);

// GET /passwords/list - User password page
router.get('/list', passwordController.getPasswords);

//PUT /   - Create New Password
//router.put('/list', passwordController.createPassword)

// POST /passwords/list - Update user settings
//router.post('/list', passwordController.updatePassword);

module.exports = router;