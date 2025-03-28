exports.analyzeTypingData = (session) => {
    const { errorWords, typingDurations, totalErrors } = session;
    
   
    const wordErrorCount = errorWords.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
  
    
    const avgTypingSpeed = typingDurations.reduce((a, b) => a + b, 0) / typingDurations.length;
  
    return {
      wordErrorCount,
      avgTypingSpeed,
      totalErrors,
    };
  };
  