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

// GET /user/passwords - User password page
router.get('/passwords', passwordController.getPasswords);

//PUT /   - Create New Password
router.put('/passwords', passwordController.createPassword)

// POST /user/settings - Update user settings
router.post('/passwords', passwordController.updatePassword);

module.exports = router;