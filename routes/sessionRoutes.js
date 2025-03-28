const express = require('express');
const router = express.Router();
const { createSession, getSessions, analyzeSession } = require('../controllers/sessionController.js');
const authMiddleware = require('../middleware/middleware.js');

router.post('/sessions', authMiddleware, createSession);  
router.get('/all-session', authMiddleware, getSessions);  
router.get('/analysis/:sessionId', authMiddleware, analyzeSession);  

module.exports = router;
