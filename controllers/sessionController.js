const { createSession, getUserSessions, analyzeSession } = require('../services/sessionService');


exports.createSession = async (req, res) => {
  const { wpm, accuracy, totalErrors, errorWords, typingDurations } = req.body;
  try {
    const session = await createSession(req.userId, wpm, accuracy, totalErrors, errorWords, typingDurations);
    res.status(201).json({ msg: "Session stored successfully", session });
  } catch (error) {
    res.status(500).json({ msg: "Error storing session" });
  }
};


exports.getSessions = async (req, res) => {
  try {
    const sessions = await getUserSessions(req.userId);
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching sessions" });
  }
};


exports.analyzeSession = async (req, res) => {
  const { sessionId } = req.params;
  try {
    const analysis = await analyzeSession(sessionId);
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ msg: "Error analyzing session" });
  }
};
