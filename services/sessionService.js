const Session = require('../model/Session.js');
const { analyzeTypingData } = require('../utils/analysisUtils');


const createSession = async (userId, wpm, accuracy, totalErrors, errorWords, typingDurations) => {
  const session = new Session({
    userId,
    wpm,
    accuracy,
    totalErrors,
    errorWords,
    typingDurations,
  });
  return session.save();
};


const getUserSessions = async (userId) => {
  return Session.find({ userId });
};


const analyzeSession = (sessionId) => {
  return Session.findById(sessionId).then(session => {
    return analyzeTypingData(session);
  });
};

module.exports = {
  createSession,
  getUserSessions,
  analyzeSession,
};
